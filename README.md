# Kora

**The autonomous business platform.**

Kora is an AI workforce platform designed to help small and medium businesses turn business goals into coordinated actions. Instead of asking users to configure isolated chatbots, Kora is being designed around a simple idea: describe what the business wants to achieve, and let Kora build, coordinate, supervise, and improve the digital workforce required to pursue that goal.

> Tell Kora where your business wants to go. Kora builds the workforce to get there.

## Product vision

Most AI business tools start with an agent, a workflow, or a prompt. Kora starts with the **business**.

The long-term product architecture is centered on five layers:

1. **Company Twin** — a structured operational model of the business, including services, policies, customers, processes, goals, knowledge, and connected systems.
2. **Kora Manager** — the orchestration layer that translates business goals into plans and supervises specialized AI workers.
3. **AI Workforce** — role-based agents responsible for areas such as reception, sales, follow-up, finance, and operations.
4. **Action & Control Layer** — permissions, approvals, audit logs, human takeover, and autonomy levels.
5. **Results & Learning** — measurable outcomes, performance metrics, recommendations, and continuous improvement.

## Initial vertical

The first product validation will focus on **dental clinics**.

The initial use case is an AI receptionist capable of:

- answering patients using approved clinic knowledge;
- qualifying inbound leads;
- checking service information;
- scheduling and rescheduling appointments;
- registering contacts and opportunities;
- escalating sensitive or uncertain situations to a human;
- keeping a complete action history.

This narrow starting point gives Kora a real workflow to validate before expanding into other service businesses.

## MVP

The first Kora MVP is planned around:

- authentication and organization onboarding;
- company profile and operational rules;
- AI employee creation;
- knowledge base;
- permissions and autonomy controls;
- shared inbox;
- contacts and leads;
- calendar and appointments;
- action/audit history;
- performance dashboard;
- human takeover.

## Core principle

Kora should not be another chatbot dashboard.

The user should eventually be able to say:

> "I want 20 orthodontic evaluations per week."

Kora should determine which processes, agents, actions, and approvals are required to pursue that outcome.

## Repository structure

```text
kora-platform/
├── apps/
│   ├── web/              # Web application
│   └── api/              # Backend API
├── packages/
│   ├── ai/               # Agent orchestration and AI abstractions
│   ├── database/         # Shared database contracts/schema
│   ├── integrations/     # External service integrations
│   └── ui/               # Shared UI components and design tokens
├── docs/
│   ├── PRODUCT.md
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   └── AGENTS.md
├── .env.example
└── README.md
```

## Status

**Pre-MVP / product architecture phase.**

The current focus is defining the product, system boundaries, first vertical, safety controls, and minimum set of capabilities required for an end-to-end working prototype.

## Documentation

- [`docs/PRODUCT.md`](docs/PRODUCT.md) — product strategy and MVP scope
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — technical architecture
- [`docs/AGENTS.md`](docs/AGENTS.md) — agent model and autonomy rules
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — implementation roadmap

## License

No open-source license has been selected yet. All rights reserved until a license is explicitly added.
