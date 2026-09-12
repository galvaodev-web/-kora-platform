const metrics = [
  { label: "Conversations", value: "126", detail: "+18% this week" },
  { label: "Appointments", value: "18", detail: "14 from AI" },
  { label: "New leads", value: "31", detail: "9 need follow-up" },
  { label: "Conversion", value: "32%", detail: "+4.2 pts" },
];

const team = [
  {
    name: "Sofia",
    role: "Reception",
    status: "Working",
    detail: "17 active conversations",
    initials: "SO",
  },
  {
    name: "Theo",
    role: "Sales",
    status: "Working",
    detail: "8 leads in follow-up",
    initials: "TH",
  },
  {
    name: "Nina",
    role: "Recall",
    status: "Review",
    detail: "5 patients need approval",
    initials: "NI",
  },
];

const activity = [
  { time: "10:42", text: "Sofia scheduled an orthodontic evaluation for Ana Martins." },
  { time: "10:35", text: "Theo recovered a lead that had been inactive for 12 days." },
  { time: "10:12", text: "Sofia escalated a clinical question to the human team." },
  { time: "09:58", text: "Kora Manager detected a 14% increase in whitening requests." },
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">K</div>
          <div>
            <strong>Kora</strong>
            <span>Workspace</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          <a className="nav-item active" href="#overview">Overview</a>
          <a className="nav-item" href="#team">Team</a>
          <a className="nav-item" href="#inbox">Inbox <span className="nav-count">17</span></a>
          <a className="nav-item" href="#leads">Leads</a>
          <a className="nav-item" href="#calendar">Calendar</a>
          <a className="nav-item" href="#knowledge">Knowledge</a>
          <a className="nav-item" href="#analytics">Analytics</a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#settings">Settings</a>
          <div className="workspace-card">
            <div className="workspace-avatar">OD</div>
            <div>
              <strong>OdontoLife</strong>
              <span>Brasília · DF</span>
            </div>
          </div>
        </div>
      </aside>

      <section className="main-content" id="overview">
        <header className="topbar">
          <div>
            <p className="eyebrow">Saturday, September 12</p>
            <h1>Good afternoon, Guilherme.</h1>
          </div>
          <div className="topbar-actions">
            <button className="button secondary">Activity log</button>
            <button className="button primary">+ Hire AI employee</button>
          </div>
        </header>

        <section className="hero-panel">
          <div>
            <div className="live-pill"><span className="live-dot" /> Your team is working</div>
            <h2>Kora is handling the routine.<br />You keep control.</h2>
            <p>Track outcomes, review important decisions and decide how much autonomy each AI employee receives.</p>
          </div>
          <div className="goal-card">
            <span className="card-kicker">Active goal</span>
            <strong>20 orthodontic evaluations / week</strong>
            <div className="progress-track"><span className="progress-fill" /></div>
            <div className="goal-footer"><span>14 completed</span><span>70%</span></div>
          </div>
        </section>

        <section className="metrics-grid" aria-label="Business metrics">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.detail}</small>
            </article>
          ))}
        </section>

        <div className="content-grid">
          <section className="panel" id="team">
            <div className="section-heading">
              <div>
                <span className="card-kicker">AI workforce</span>
                <h3>Your team</h3>
              </div>
              <button className="text-button">Manage team →</button>
            </div>

            <div className="team-list">
              {team.map((member) => (
                <article className="team-member" key={member.name}>
                  <div className="employee-avatar">{member.initials}</div>
                  <div className="employee-copy">
                    <div className="employee-name-row">
                      <strong>{member.name}</strong>
                      <span className={member.status === "Working" ? "status working" : "status review"}>
                        {member.status}
                      </span>
                    </div>
                    <span>{member.role}</span>
                    <small>{member.detail}</small>
                  </div>
                  <button className="icon-button" aria-label={`Open ${member.name}`}>→</button>
                </article>
              ))}
            </div>
          </section>

          <aside className="manager-card">
            <div className="manager-header">
              <div className="manager-mark">K</div>
              <div>
                <span className="card-kicker">Kora Manager</span>
                <strong>New insight</strong>
              </div>
            </div>
            <p>Demand for whitening increased <strong>18%</strong> this week. There are 23 older leads that match this service and have not received follow-up.</p>
            <div className="impact-box">
              <span>Estimated opportunity</span>
              <strong>+6 to 9 appointments</strong>
            </div>
            <div className="manager-actions">
              <button className="button primary full">Review recommendation</button>
              <button className="text-button centered">Dismiss</button>
            </div>
          </aside>
        </div>

        <section className="panel activity-panel">
          <div className="section-heading">
            <div>
              <span className="card-kicker">Audit trail</span>
              <h3>Recent activity</h3>
            </div>
            <button className="text-button">View all →</button>
          </div>
          <div className="activity-list">
            {activity.map((item) => (
              <div className="activity-row" key={`${item.time}-${item.text}`}>
                <time>{item.time}</time>
                <span className="activity-dot" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
