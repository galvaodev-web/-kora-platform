# Kora Roadmap

## Phase 0 — Foundation

Goal: establish the product and technical boundaries before building feature volume.

- [x] define product thesis;
- [x] define first vertical;
- [x] define initial MVP scope;
- [x] define agent/autonomy model;
- [x] define initial architecture;
- [ ] finalize product name/trademark validation;
- [ ] define visual identity and design tokens;
- [ ] create core UX flows in Figma;
- [ ] choose production hosting and infrastructure baseline.

## Phase 1 — Product shell

Goal: create a usable authenticated application shell.

- [ ] initialize `apps/web` with Next.js + TypeScript;
- [ ] implement authentication screens;
- [ ] create organization onboarding;
- [ ] create app navigation;
- [ ] implement dashboard shell;
- [ ] implement Team / AI Employees shell;
- [ ] implement Inbox shell;
- [ ] implement Knowledge shell;
- [ ] implement Calendar shell;
- [ ] add responsive layouts and accessibility baseline.

### Exit criteria

A user can sign in, create an organization, navigate the product, and see realistic seeded data across the main Kora surfaces.

## Phase 2 — Domain backend

Goal: persist the real business model behind the interface.

- [ ] initialize backend API;
- [ ] configure PostgreSQL;
- [ ] implement organizations and memberships;
- [ ] implement contacts and leads;
- [ ] implement conversations and messages;
- [ ] implement services and staff;
- [ ] implement appointments;
- [ ] implement knowledge sources;
- [ ] implement AI employee configuration;
- [ ] implement permissions and autonomy rules;
- [ ] implement action ledger;
- [ ] add queues and background job support.

### Exit criteria

The UI runs on persisted tenant-scoped data and important mutations create audit events.

## Phase 3 — Reception AI

Goal: deliver the first complete AI employee workflow.

- [ ] define model provider abstraction;
- [ ] implement agent run lifecycle;
- [ ] implement approved knowledge retrieval;
- [ ] implement intent classification;
- [ ] implement structured tool calling;
- [ ] implement policy checks;
- [ ] implement FAQ response flow;
- [ ] implement availability lookup;
- [ ] implement appointment creation;
- [ ] implement escalation;
- [ ] implement human takeover;
- [ ] add agent run observability.

### Exit criteria

A test patient can start a conversation, receive an accurate clinic-specific response, choose an available appointment, and have the appointment safely created with a complete activity trace.

## Phase 4 — Real channel integration

Goal: move from simulator/demo conversations to a real customer communication channel.

- [ ] select WhatsApp provider/API strategy;
- [ ] implement inbound webhook normalization;
- [ ] implement outbound messaging adapter;
- [ ] implement delivery/error handling;
- [ ] add retry/idempotency controls;
- [ ] implement opt-out and business-hour policies;
- [ ] add integration health status.

### Exit criteria

A real clinic test number can receive and complete the end-to-end Reception AI flow.

## Phase 5 — Pilot readiness

Goal: safely test Kora with a real clinic.

- [ ] add onboarding checklist;
- [ ] implement knowledge approval workflow;
- [ ] add conversation review tools;
- [ ] add policy violation alerts;
- [ ] add performance dashboard;
- [ ] add appointment/lead conversion metrics;
- [ ] add exportable activity history;
- [ ] add backup and recovery plan;
- [ ] complete privacy/security review;
- [ ] prepare pilot support process.

### Exit criteria

One clinic can use Kora in a controlled pilot with human supervision and measurable results.

## Phase 6 — Kora Manager

Goal: introduce supervised business-goal orchestration.

- [ ] implement goals;
- [ ] connect metrics to goals;
- [ ] generate performance summaries;
- [ ] identify operational bottlenecks;
- [ ] generate recommended actions;
- [ ] add approval workflow for recommendations;
- [ ] compare predicted vs actual impact.

### Exit criteria

A manager can define a business outcome and receive grounded, measurable recommendations based on company data.

## Phase 7 — Multi-agent workforce

Goal: expand beyond Reception after the first agent is proven.

Candidate workers:

- Sales;
- Recall / Follow-up;
- Finance assistant;
- Marketing assistant;
- Operations assistant.

Each new worker must have:

- a clear business job;
- measurable outcomes;
- bounded tools;
- autonomy policy;
- evaluation suite;
- audit coverage.

## Product milestone

The defining Kora moment is not "the AI answered a message."

It is:

> A business owner defines an outcome, Kora coordinates safe work toward it, and the owner can see exactly what happened and what result it produced.
