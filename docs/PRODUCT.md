# Kora Product

## Problem

Small and medium businesses lose time and revenue because repetitive operational work is fragmented across messaging apps, calendars, spreadsheets, CRMs, inboxes, and human handoffs.

Most AI products ask the business owner to think in terms of prompts, agents, or workflow builders. Kora is designed to start from a business goal and progressively hide that technical complexity.

## Product thesis

Kora should become an operating layer for AI-powered businesses.

A business defines what it wants to achieve. Kora understands the company context, recommends or creates the required digital workers, coordinates them, applies permission boundaries, records every important action, and measures outcomes.

## Initial customer

The first validation market is independent dental clinics and small dental groups.

### Initial pain points

- slow WhatsApp response times;
- missed leads;
- repetitive questions about services, prices, address, and availability;
- manual scheduling and rescheduling;
- patients who disappear after an evaluation or quote;
- weak recall/follow-up processes;
- owners with little visibility into reception performance.

## First job to be done

> When a potential patient contacts my clinic, I want them to receive a fast, accurate response and reach the right appointment without requiring my reception team to manually handle every step.

## MVP persona

**Clinic owner / manager**

Needs:

- visibility;
- control;
- measurable ROI;
- low configuration overhead;
- safe automation;
- fast human takeover when needed.

## MVP workflow

1. Clinic creates an organization.
2. Clinic adds services, staff, operating hours, policies, FAQs, and scheduling rules.
3. Clinic creates or activates the Reception AI employee.
4. Clinic sets autonomy and approval rules.
5. A patient starts a conversation.
6. Kora classifies intent and retrieves approved business knowledge.
7. The agent answers, qualifies, schedules, or escalates.
8. Every relevant action is recorded.
9. The dashboard reports conversations, leads, appointments, escalations, and outcomes.

## MVP capabilities

### Organization

- company profile;
- locations;
- business hours;
- services;
- team members;
- operational policies.

### AI employee

- name and role;
- instructions;
- linked knowledge;
- allowed tools;
- autonomy level;
- escalation rules;
- status;
- activity history.

### Knowledge

- structured FAQs;
- services and pricing guidance;
- policies;
- documents;
- source tracking;
- approval state.

### Inbox

- conversations;
- patient/contact identity;
- AI/human state;
- intent;
- conversation summary;
- takeover and return-to-AI controls.

### CRM-lite

- contacts;
- leads;
- stage;
- source;
- next action;
- appointment relationship.

### Scheduling

- appointment types;
- availability;
- create/reschedule/cancel rules;
- confirmations;
- reminders.

### Control

Each action type can be configured as:

- **Observe** — Kora only records and analyzes.
- **Suggest** — Kora proposes an action but cannot execute it.
- **Ask approval** — Kora prepares the action and waits for a human.
- **Act** — Kora can execute automatically within policy.
- **Never** — the action is prohibited.

### Auditability

Important actions must store:

- who/which agent initiated the action;
- what was attempted;
- which tools/data were used;
- approval state;
- result;
- timestamp;
- linked conversation/contact;
- error or escalation reason when applicable.

## North-star direction

The long-term interface should move from **Create an agent** toward **Define an outcome**.

Example:

> Goal: Reach 20 orthodontic evaluations per week.

Kora should eventually:

1. inspect current demand and operational constraints;
2. identify required workflows;
3. recommend or create specialized agents;
4. define measurable intermediate targets;
5. run permitted actions;
6. learn from results;
7. report progress and request approval when needed.

## Non-goals for MVP

The first release will not attempt to:

- replace clinical judgment;
- diagnose patients;
- prescribe treatment or medication;
- automate every department;
- support every business vertical;
- build a generic no-code workflow platform;
- remove human oversight from sensitive actions.

## Product principles

1. **Business goals before prompts.**
2. **Outcome visibility before AI novelty.**
3. **Human control is a core feature, not a fallback.**
4. **Every important action should be explainable and auditable.**
5. **Vertical depth before horizontal expansion.**
6. **Automation must respect explicit permissions.**
7. **The product should feel like managing a team, not configuring a model.**
