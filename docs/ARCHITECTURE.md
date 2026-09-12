# Kora Architecture

## Architecture goals

Kora needs to support AI-driven actions without sacrificing control, traceability, tenant isolation, or the ability for humans to intervene.

The architecture should therefore optimize for:

- multi-tenant isolation;
- explicit permissions;
- deterministic business rules around non-deterministic models;
- complete action logging;
- replaceable AI providers;
- channel/integration abstraction;
- safe human handoff;
- gradual autonomy.

## High-level model

```text
User / Business Owner
        |
        v
     Kora Web
        |
        v
      API Layer
        |
        +-------------------+
        |                   |
        v                   v
 Business Domain       Agent Runtime
        |                   |
        v                   v
   PostgreSQL        Tool / Policy Layer
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
          Messaging      Calendar        CRM / Other
```

## Product layers

### 1. Company Twin

The Company Twin is the normalized operational context of an organization.

It is not a single AI prompt. It is composed of structured domain data plus approved knowledge.

Examples:

- organization;
- locations;
- services;
- staff;
- schedules;
- policies;
- FAQs;
- contacts;
- leads;
- goals;
- documents;
- integration state.

### 2. Kora Manager

The manager is the future orchestration layer responsible for decomposing goals, selecting workers, monitoring execution, and producing recommendations.

The MVP should not give this component unrestricted autonomy. It should initially behave as a planning and supervision layer.

### 3. Agent Runtime

Each AI employee has:

- identity;
- role;
- instructions;
- assigned organization;
- allowed knowledge scopes;
- allowed tools;
- autonomy configuration;
- escalation conditions;
- performance metrics.

The model provider must sit behind an abstraction so Kora is not tightly coupled to one vendor.

### 4. Tool and Policy Layer

An agent should never execute a side effect directly.

All side-effecting operations go through tools that perform:

1. authentication and tenant checks;
2. permission checks;
3. autonomy/approval checks;
4. input validation;
5. business-rule validation;
6. execution;
7. audit logging.

Example:

```text
Agent wants to create appointment
        |
        v
createAppointment tool
        |
        +--> tenant validation
        +--> permission validation
        +--> autonomy policy
        +--> scheduling rules
        +--> execute
        +--> write audit event
```

### 5. Action Ledger

Every important action should be written to an append-oriented activity ledger.

Suggested fields:

```text
id
organization_id
agent_id
actor_type
actor_id
action_type
status
input_summary
output_summary
approval_state
approved_by
conversation_id
contact_id
metadata
created_at
completed_at
```

The ledger powers auditability, debugging, analytics, and future agent evaluation.

## Initial domain model

```text
users
organizations
organization_members
locations
services
staff_members
contacts
leads
conversations
messages
appointments
knowledge_sources
knowledge_entries
ai_employees
agent_permissions
agent_tools
action_events
approvals
goals
integrations
```

## Suggested repository boundaries

```text
apps/web
```

Frontend application. Recommended initial stack: Next.js + TypeScript.

```text
apps/api
```

Backend service. The domain/API can be implemented independently from the frontend. Laravel is a viable choice for the first backend because of its mature authentication, queues, validation, scheduling, and database tooling.

```text
packages/ai
```

Provider-independent AI contracts, prompt/version metadata, agent planning, tool schemas, and evaluation utilities.

```text
packages/database
```

Shared data contracts, ERD documentation, generated clients/types where applicable, and migration-related shared assets.

```text
packages/integrations
```

Adapters for messaging, calendars, CRMs, and external business systems.

```text
packages/ui
```

Design tokens and reusable frontend components.

## Request lifecycle example

Patient message:

> Do you have an orthodontic evaluation available Thursday afternoon?

Expected flow:

1. Messaging adapter receives inbound event.
2. Event is normalized and stored.
3. Conversation is associated with a tenant and contact.
4. Reception agent receives scoped conversation context.
5. Agent identifies scheduling intent.
6. Knowledge retrieval provides clinic-specific rules.
7. Agent requests availability through a calendar tool.
8. Tool validates permissions and returns slots.
9. Agent responds with allowed options.
10. If patient chooses a slot, appointment creation goes through the policy layer.
11. Side effect is logged in the action ledger.
12. Dashboard metrics are updated asynchronously.

## Security and safety baseline

### Multi-tenancy

All business data must be scoped by `organization_id`. Application services should make tenant scope explicit rather than relying only on UI filtering.

### Secrets

Integration credentials must never be committed to the repository. Production secrets belong in a dedicated secret manager or hosting provider secret store.

### AI boundaries

Model output is untrusted input.

An LLM may propose tool calls, but the backend decides whether an operation is valid and permitted.

### Sensitive workflows

Clinical diagnosis, prescribing, financial refunds, destructive data operations, and other sensitive capabilities should default to prohibited or approval-required states.

### Observability

At minimum capture:

- request IDs;
- agent run IDs;
- tool calls;
- latency;
- provider/model version;
- token/cost metadata where available;
- errors;
- approval events;
- human takeover events.

## Async processing

Queues should handle work that does not need to block the user request, including:

- document ingestion;
- embedding/index updates;
- scheduled follow-ups;
- reminders;
- analytics aggregation;
- webhook retries;
- agent evaluations.

## Integration strategy

All external integrations should expose normalized internal interfaces.

Example:

```ts
interface CalendarProvider {
  listAvailability(input: AvailabilityRequest): Promise<TimeSlot[]>;
  createAppointment(input: CreateAppointmentRequest): Promise<AppointmentResult>;
  rescheduleAppointment(input: RescheduleAppointmentRequest): Promise<AppointmentResult>;
}
```

This prevents Kora's core domain from depending directly on one calendar or messaging vendor.

## Architecture rule

**Agents can reason. Policies decide. Tools execute. The ledger remembers.**
