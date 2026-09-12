# Kora Agent Model

## Purpose

Kora models AI workers as controlled software actors operating inside an organization. An AI employee is not just a prompt: it is a role with scoped knowledge, tools, permissions, autonomy, escalation rules, and measurable performance.

## Agent anatomy

Each AI employee should have:

```text
Identity
Role
Objective
Instructions
Organization scope
Knowledge scope
Allowed tools
Permissions
Autonomy level
Escalation rules
Evaluation criteria
Activity history
```

## Initial employee: Reception

The first production-oriented agent is the **Reception AI Employee** for dental clinics.

### Responsibilities

- greet and identify patients;
- understand common intents;
- answer approved operational questions;
- explain available services without diagnosing;
- collect lead information;
- check appointment availability;
- schedule or reschedule when allowed;
- escalate uncertain, sensitive, or prohibited requests;
- summarize conversations for human staff.

### Explicit boundaries

Reception must not:

- diagnose a condition;
- prescribe medication;
- fabricate prices or policies;
- promise clinical outcomes;
- expose another patient's data;
- override scheduling rules;
- perform prohibited actions even when requested by a user.

## Autonomy model

Kora uses progressive autonomy.

### Level 0 — Observe

The agent can read permitted events and generate analysis, but cannot interact with the customer or execute tools.

### Level 1 — Suggest

The agent drafts replies or actions for a human to review.

### Level 2 — Approval required

The agent can prepare tool calls, but a human must approve before execution.

### Level 3 — Autonomous within policy

The agent may execute explicitly allowed tools within defined limits.

### Level 4 — Prohibited

Some actions remain unavailable regardless of model confidence.

Autonomy is configured **per action**, not only per agent.

Example:

```text
answer_faq               -> autonomous
list_availability        -> autonomous
create_appointment       -> autonomous
cancel_appointment       -> approval_required
apply_discount           -> approval_required
issue_refund              -> prohibited
clinical_diagnosis       -> prohibited
```

## Human takeover

A conversation has an ownership state:

```text
AI_ACTIVE
HUMAN_ACTIVE
WAITING_APPROVAL
ESCALATED
CLOSED
```

When a human takes over:

- outbound AI replies stop;
- the agent may continue producing internal summaries if configured;
- all ownership transitions are logged;
- control can be explicitly returned to AI.

## Escalation triggers

An agent should escalate when:

- user explicitly requests a human;
- confidence is below a configured threshold;
- the request conflicts with policy;
- the conversation contains a sensitive clinical concern;
- a tool returns an unrecoverable error;
- required information is unavailable;
- a user disputes a previous action;
- repeated clarification fails.

## Kora Manager

Kora Manager is not simply another customer-facing employee.

Its responsibility is to supervise the digital workforce.

Future responsibilities include:

- translate business goals into operational targets;
- propose new agents or workflows;
- delegate tasks;
- inspect action outcomes;
- detect bottlenecks;
- compare performance against goals;
- recommend process changes;
- request human approval for strategic changes.

For the MVP, Kora Manager should begin as an **analysis and recommendation layer**, not an unrestricted autonomous manager.

## Goal model

A goal should be measurable.

Example:

```text
Goal: 20 orthodontic evaluations per week
Metric: scheduled_appointments
Filter: service = orthodontic_evaluation
Target: 20
Window: weekly
```

Agents can contribute to goals, but goals should remain separate domain objects so performance is measurable independently from model behavior.

## Agent run

Each execution should produce an `agent_run` or equivalent trace containing:

- agent version;
- organization;
- trigger;
- context references;
- model/provider metadata;
- requested tool calls;
- tool results;
- outcome;
- errors;
- timestamps.

Avoid storing hidden chain-of-thought. Store concise decision summaries and structured traces needed for audit/debugging instead.

## Evaluation

Agents should be evaluated on business and safety metrics, not only language quality.

Reception examples:

- correct intent classification;
- factual accuracy against approved knowledge;
- appointment conversion;
- escalation precision;
- policy violations;
- human corrections;
- average response latency;
- conversation resolution rate.

## Versioning

Instructions, tool definitions, policies, and evaluation criteria should be versioned.

A performance change is not meaningful if Kora cannot determine which agent configuration produced it.

## Design principle

**AI employees earn autonomy through observable performance and explicit business permission.**
