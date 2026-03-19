import { useState } from "react";

/* ─── GLOBAL CSS ─────────────────────────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f4f6f9; }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: #f4f6f9; }
  ::-webkit-scrollbar-thumb { background: #d0d8e4; border-radius: 2px; }

  /* ── LOGIN ── */
  .login-bg {
    min-height: 100vh;
    background: #f4f6f9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
  }
  .login-wrap {
    display: flex;
    width: 880px;
    min-height: 520px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 48px rgba(0,0,0,0.08);
    overflow: hidden;
  }
  .login-left {
    flex: 1;
    background: linear-gradient(150deg, #1a2c42 0%, #0f1e2f 100%);
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .login-left::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 260px; height: 260px;
    border-radius: 50%;
    background: rgba(249,115,22,0.08);
    pointer-events: none;
  }
  .login-left::after {
    content: '';
    position: absolute;
    bottom: -60px; left: -60px;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: rgba(249,115,22,0.06);
    pointer-events: none;
  }
  .login-logo {
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #f97316;
  }
  .login-logo span { color: #fff; }
  .login-logo-sub {
    font-size: 9px;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.2);
    margin-top: 4px;
    font-family: 'DM Mono', monospace;
  }
  .login-left-body { position: relative; z-index: 1; }
  .login-left-body h2 {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    margin-bottom: 14px;
  }
  .login-left-body p { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.7; }
  .login-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(249,115,22,0.12);
    border: 1px solid rgba(249,115,22,0.25);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 10px;
    color: #f97316;
    font-family: 'DM Mono', monospace;
    letter-spacing: 0.08em;
    margin-bottom: 20px;
  }
  .login-pill-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #f97316;
    animation: pulse-dot 1.5s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }
  .login-stat-row {
    display: flex;
    gap: 24px;
    margin-top: 28px;
  }
  .login-stat { }
  .login-stat-val {
    font-family: 'DM Mono', monospace;
    font-size: 22px;
    font-weight: 500;
    color: #f97316;
  }
  .login-stat-lbl {
    font-size: 10px;
    color: rgba(255,255,255,0.25);
    margin-top: 2px;
    letter-spacing: 0.06em;
  }
  .login-right {
    width: 380px;
    flex-shrink: 0;
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .login-right-head h3 {
    font-size: 22px;
    font-weight: 700;
    color: #0f1e2f;
    margin-bottom: 6px;
  }
  .login-right-head p { font-size: 13px; color: #8a9bb0; }
  .login-role-selector {
    display: flex;
    background: #f4f6f9;
    border-radius: 10px;
    padding: 4px;
    gap: 4px;
  }
  .login-role-btn {
    flex: 1;
    padding: 9px 0;
    border-radius: 7px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
  }
  .login-role-btn.active { background: #fff; color: #0f1e2f; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
  .login-role-btn.inactive { background: transparent; color: #b0bece; }
  .login-form { display: flex; flex-direction: column; gap: 14px; }
  .login-field { display: flex; flex-direction: column; gap: 6px; }
  .login-field label { font-size: 12px; font-weight: 600; color: #4a5e72; letter-spacing: 0.02em; }
  .login-field input {
    padding: 11px 14px;
    border-radius: 8px;
    border: 1.5px solid #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #0f1e2f;
    background: #fff;
    outline: none;
    transition: border-color 0.15s;
  }
  .login-field input:focus { border-color: #f97316; }
  .login-field input::placeholder { color: #c0ccd8; }
  .login-submit {
    padding: 12px;
    border-radius: 9px;
    border: none;
    background: #f97316;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: background 0.15s, transform 0.1s;
  }
  .login-submit:hover { background: #ea6c0d; }
  .login-submit:active { transform: scale(0.98); }
  .login-hint {
    font-size: 11px;
    color: #b0bece;
    text-align: center;
    line-height: 1.6;
  }
  .login-error {
    font-size: 12px;
    color: #ef4444;
    background: rgba(239,68,68,0.06);
    border: 1px solid rgba(239,68,68,0.2);
    border-radius: 7px;
    padding: 9px 12px;
    text-align: center;
  }

  /* ── APP SHELL ── */
  .ss-root {
    display: flex;
    height: 100vh;
    background: #f4f6f9;
    color: #1a2c42;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
  }

  /* SIDEBAR */
  .ss-sidebar {
    width: 220px;
    flex-shrink: 0;
    background: #fff;
    border-right: 1px solid #e8edf3;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 0 12px rgba(0,0,0,0.03);
  }
  .ss-logo-block {
    padding: 24px 22px 20px;
    border-bottom: 1px solid #f0f4f8;
  }
  .ss-logo {
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.04em;
    color: #f97316;
  }
  .ss-logo span { color: #1a2c42; }
  .ss-logo-sub {
    font-size: 8px;
    letter-spacing: 0.18em;
    color: #c0ccd8;
    margin-top: 3px;
    font-family: 'DM Mono', monospace;
  }

  .ss-nav { padding: 16px 12px; flex: 1; }
  .ss-nav-section-label {
    font-size: 9px;
    letter-spacing: 0.14em;
    color: #b0bece;
    font-family: 'DM Mono', monospace;
    padding: 0 10px;
    margin-bottom: 8px;
    margin-top: 6px;
  }
  .ss-nav-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    text-align: left;
    padding: 9px 12px;
    border-radius: 8px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 2px;
    transition: background 0.15s, color 0.15s;
  }
  .ss-nav-btn .nav-icon { font-size: 15px; width: 18px; text-align: center; }
  .ss-nav-btn.active  { background: rgba(249,115,22,0.08); color: #f97316; }
  .ss-nav-btn.inactive { background: transparent; color: #8a9bb0; }
  .ss-nav-btn.inactive:hover { background: #f4f6f9; color: #4a5e72; }

  .ss-sidebar-footer {
    padding: 16px 20px;
    border-top: 1px solid #f0f4f8;
  }
  .ss-user-chip {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ss-user-avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316, #ea6c0d);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    flex-shrink: 0;
  }
  .ss-user-name { font-size: 12px; font-weight: 600; color: #1a2c42; }
  .ss-user-role { font-size: 10px; color: #b0bece; margin-top: 1px; }
  .ss-logout-btn {
    margin-top: 10px;
    width: 100%;
    padding: 7px;
    border-radius: 7px;
    border: 1px solid #e8edf3;
    background: transparent;
    color: #8a9bb0;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }
  .ss-logout-btn:hover { background: #fef3ec; color: #f97316; border-color: rgba(249,115,22,0.3); }

  /* MAIN */
  .ss-main { flex: 1; overflow: auto; padding: 28px 32px; }

  /* PAGE HEADER */
  .ss-page-header {
    margin-bottom: 24px;
  }
  .ss-page-label {
    font-size: 10px;
    letter-spacing: 0.14em;
    color: #b0bece;
    font-family: 'DM Mono', monospace;
    margin-bottom: 4px;
  }
  .ss-page-title {
    font-size: 22px;
    font-weight: 700;
    color: #0f1e2f;
  }
  .ss-page-sub { font-size: 13px; color: #8a9bb0; margin-top: 4px; }

  /* CARD */
  .ss-card {
    background: #fff;
    border: 1px solid #e8edf3;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  }

  /* SECTION LABEL */
  .ss-section-label {
    font-size: 10px;
    letter-spacing: 0.12em;
    color: #b0bece;
    margin-bottom: 14px;
    font-family: 'DM Mono', monospace;
  }

  /* BADGE */
  .ss-badge {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid;
    display: inline-block;
  }

  /* METRIC CARD */
  .ss-metric-card {
    background: #fff;
    border: 1px solid #e8edf3;
    border-radius: 12px;
    padding: 16px 18px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  }
  .ss-metric-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #b0bece;
    margin-bottom: 8px;
    font-family: 'DM Mono', monospace;
  }
  .ss-metric-value {
    font-family: 'DM Mono', monospace;
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }
  .ss-metric-sub { font-size: 11px; color: #b0bece; margin-top: 5px; }

  /* PROGRESS BAR */
  .ss-bar-track {
    background: #f0f4f8;
    border-radius: 3px;
    height: 5px;
    width: 100%;
  }
  .ss-bar-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.4s ease;
  }

  /* TABLE */
  .ss-table-header {
    display: grid;
    padding: 10px 18px;
    background: #f8fafc;
    border-bottom: 1px solid #e8edf3;
    border-radius: 12px 12px 0 0;
  }
  .ss-table-row {
    display: grid;
    padding: 13px 18px;
    border-bottom: 1px solid #f0f4f8;
    cursor: pointer;
    transition: background 0.12s;
    align-items: center;
  }
  .ss-table-row:last-child { border-bottom: none; border-radius: 0 0 12px 12px; }
  .ss-table-row:hover { background: #fafbfc; }
  .ss-table-row.selected { background: #fef3ec; }

  /* FORECAST CARD */
  .ss-forecast-card {
    flex: 1;
    background: #f8fafc;
    border: 1px solid #e8edf3;
    border-radius: 10px;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  /* DETAIL PANEL */
  .ss-detail-panel {
    width: 280px;
    flex-shrink: 0;
    background: #fff;
    border: 1px solid #e8edf3;
    border-radius: 12px;
    padding: 22px;
    align-self: flex-start;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-height: calc(100vh - 56px);
    overflow-y: auto;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  }
  .ss-detail-divider {
    border-top: 1px solid #f0f4f8;
    padding-top: 14px;
  }
  .ss-detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  /* FILTER PILLS */
  .ss-filter-btn {
    padding: 6px 14px;
    border-radius: 20px;
    border: 1.5px solid;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: all 0.15s;
    font-weight: 500;
  }

  /* EARN BARS */
  .ss-earn-bar-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    height: 100%;
    justify-content: flex-end;
  }
  .ss-earn-bar {
    width: 100%;
    border-radius: 3px;
    min-height: 4px;
    transition: height 0.3s;
  }

  /* ML CARD */
  .ss-ml-card {
    background: #f8fafc;
    border: 1px solid #e8edf3;
    border-radius: 8px;
    padding: 12px;
  }
  .ss-ml-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  /* TRIGGER CHIP */
  .ss-trigger-chip {
    border-radius: 10px;
    padding: 14px;
  }

  /* ELIGIBILITY BANNER */
  .ss-elig-banner {
    border-radius: 10px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

/* ─── MOCK DATA ──────────────────────────────────────────────────────────────── */
const CREDENTIALS = {
  admin: [{ id: "admin1", pass: "admin123", name: "Priya S.", role: "admin" }],
  worker: [
    { id: "W-1042", pass: "worker1", name: "Arjun Mehra",    role: "worker" },
    { id: "W-1089", pass: "worker2", name: "Kavitha Rajan",  role: "worker" },
    { id: "W-1134", pass: "worker3", name: "Deepa Suresh",   role: "worker" },
  ],
};

const workers = [
  {
    id: "W-1042", name: "Arjun Mehra", platform: "Swiggy", city: "Chennai", zone: "Anna Nagar",
    status: "active", riskScore: 78, fraudScore: 12, disruption: true, eligible: true,
    premium: 49, payoutAmount: 320, trigger: "Extreme Heat",
    triggers: { temp: 43.2, rain: 12, aqi: 178, traffic: 62 },
    weeklyEarnings: [980, 1040, 760, 310],
    model: { disruption: 0.82, fraud: 0.08, resilience: "Low" },
    joinDate: "Jan 2024", deliveries: 847,
  },
  {
    id: "W-1089", name: "Kavitha Rajan", platform: "Zomato", city: "Chennai", zone: "Velachery",
    status: "active", riskScore: 45, fraudScore: 9, disruption: false, eligible: false,
    premium: 49, payoutAmount: 0, trigger: "None",
    triggers: { temp: 38.1, rain: 5, aqi: 142, traffic: 54 },
    weeklyEarnings: [1100, 1080, 1150, 1090],
    model: { disruption: 0.31, fraud: 0.06, resilience: "High" },
    joinDate: "Mar 2024", deliveries: 1203,
  },
  {
    id: "W-1101", name: "Ravi Shankar", platform: "Blinkit", city: "Chennai", zone: "T. Nagar",
    status: "flagged", riskScore: 61, fraudScore: 74, disruption: true, eligible: false,
    premium: 49, payoutAmount: 0, trigger: "Heavy Rain",
    triggers: { temp: 35.6, rain: 58, aqi: 201, traffic: 88 },
    weeklyEarnings: [920, 870, 210, 50],
    model: { disruption: 0.71, fraud: 0.79, resilience: "Moderate" },
    joinDate: "Nov 2023", deliveries: 412,
  },
  {
    id: "W-1134", name: "Deepa Suresh", platform: "Amazon", city: "Chennai", zone: "Guindy",
    status: "active", riskScore: 88, fraudScore: 5, disruption: true, eligible: true,
    premium: 49, payoutAmount: 450, trigger: "Severe Pollution",
    triggers: { temp: 40.3, rain: 18, aqi: 318, traffic: 71 },
    weeklyEarnings: [1200, 1150, 980, 280],
    model: { disruption: 0.91, fraud: 0.04, resilience: "Low" },
    joinDate: "Aug 2023", deliveries: 2104,
  },
  {
    id: "W-1198", name: "Murugan Pillai", platform: "Zepto", city: "Chennai", zone: "Adyar",
    status: "inactive", riskScore: 30, fraudScore: 22, disruption: false, eligible: false,
    premium: 49, payoutAmount: 0, trigger: "None",
    triggers: { temp: 37.0, rain: 8, aqi: 155, traffic: 40 },
    weeklyEarnings: [400, 300, 0, 0],
    model: { disruption: 0.19, fraud: 0.21, resilience: "High" },
    joinDate: "Feb 2024", deliveries: 228,
  },
];

const envData = {
  city: "Chennai", time: "14:32 IST",
  temp: 43.2, rain: 12, aqi: 178, traffic: 62,
  riskScore: 78, disruption: true,
  forecast: [
    { hour: "15:00", temp: 43.8, aqi: 182, rain: 10 },
    { hour: "16:00", temp: 44.1, aqi: 195, rain: 8  },
    { hour: "17:00", temp: 43.5, aqi: 188, rain: 15 },
    { hour: "18:00", temp: 41.2, aqi: 165, rain: 22 },
    { hour: "19:00", temp: 38.6, aqi: 148, rain: 30 },
  ],
};

/* ─── UTILS ──────────────────────────────────────────────────────────────────── */
const riskColor = s => s >= 75 ? "#ef4444" : s >= 50 ? "#f97316" : "#22c55e";

/* ─── SPARKLINE ──────────────────────────────────────────────────────────────── */
function Spark({ data, color = "#f97316" }) {
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const W = 80, H = 28;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((v - min) / range) * H;
    return `${x},${y}`;
  }).join(" ");
  const last = pts.split(" ").at(-1).split(",");
  return (
    <svg width={W} height={H} style={{ overflow: "visible" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" opacity="0.9" />
      <circle cx={last[0]} cy={last[1]} r="2.8" fill={color} />
    </svg>
  );
}

/* ─── GAUGE ──────────────────────────────────────────────────────────────────── */
function Gauge({ value, color }) {
  const pct = value / 100;
  const r = 28, cx = 36, cy = 36;
  const circ = 2 * Math.PI * r;
  const arc = circ * 0.75;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <svg width="72" height="54" viewBox="0 0 72 54">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f4f8" strokeWidth="6"
          strokeDasharray={`${arc} ${circ - arc}`} strokeLinecap="round"
          transform={`rotate(135 ${cx} ${cy})`} />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="6"
          strokeDasharray={`${arc * pct} ${circ}`} strokeLinecap="round"
          transform={`rotate(135 ${cx} ${cy})`} />
        <text x={cx} y={cy + 5} textAnchor="middle" fill={color} fontSize="12"
          fontFamily="'DM Mono',monospace" fontWeight="500">{value}</text>
      </svg>
      <span style={{ color: "#c0ccd8", fontSize: 9, letterSpacing: "0.1em", fontFamily: "'DM Mono',monospace" }}>
        RISK SCORE
      </span>
    </div>
  );
}

/* ─── BADGE ──────────────────────────────────────────────────────────────────── */
function Badge({ status }) {
  const map = {
    active:   { bg: "rgba(34,197,94,0.08)",  fg: "#22c55e", label: "ACTIVE"   },
    flagged:  { bg: "rgba(239,68,68,0.08)",  fg: "#ef4444", label: "FLAGGED"  },
    inactive: { bg: "rgba(100,116,139,0.08)", fg: "#8a9bb0", label: "INACTIVE" },
  };
  const s = map[status] || map.inactive;
  return (
    <span className="ss-badge" style={{ background: s.bg, color: s.fg, borderColor: s.fg + "44" }}>
      {s.label}
    </span>
  );
}

/* ─── METRIC CARD ────────────────────────────────────────────────────────────── */
function MetricCard({ label, value, sub, accent = "#f97316" }) {
  return (
    <div className="ss-metric-card">
      <div className="ss-metric-label">{label}</div>
      <div className="ss-metric-value" style={{ color: accent }}>{value}</div>
      {sub && <div className="ss-metric-sub">{sub}</div>}
    </div>
  );
}

/* ─── TRIGGER CHIP ───────────────────────────────────────────────────────────── */
function TriggerChip({ label, value, threshold, unit, active }) {
  return (
    <div className="ss-trigger-chip" style={{
      background: active ? "rgba(239,68,68,0.04)" : "#f8fafc",
      border: `1.5px solid ${active ? "rgba(239,68,68,0.2)" : "#e8edf3"}`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 9, letterSpacing: "0.12em", color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>
          {label}
        </span>
        {active && (
          <span style={{ fontSize: 8, letterSpacing: "0.1em", color: "#ef4444", fontFamily: "'DM Mono',monospace",
            background: "rgba(239,68,68,0.08)", padding: "2px 6px", borderRadius: 3 }}>
            TRIGGERED
          </span>
        )}
      </div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, fontWeight: 500, lineHeight: 1,
        color: active ? "#ef4444" : "#1a2c42" }}>
        {value}<span style={{ fontSize: 11, fontWeight: 400, color: "#8a9bb0" }}> {unit}</span>
      </div>
      <div style={{ fontSize: 10, color: "#c0ccd8", marginTop: 6 }}>Threshold: {threshold}</div>
    </div>
  );
}

/* ─── LOGIN PAGE ─────────────────────────────────────────────────────────────── */
function LoginPage({ onLogin }) {
  const [role, setRole]   = useState("worker");
  const [userId, setUserId] = useState("");
  const [pass, setPass]   = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    const list = role === "admin" ? CREDENTIALS.admin : CREDENTIALS.worker;
    const match = list.find(c => c.id === userId && c.pass === pass);
    if (match) {
      onLogin({ ...match });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleRoleSwitch = (r) => {
    setRole(r); setError(""); setUserId(""); setPass("");
  };

  return (
    <div className="login-bg">
      <style>{GLOBAL_CSS}</style>
      <div className="login-wrap">
        {/* Left panel */}
        <div className="login-left">
          <div>
            <div className="login-logo">SAFE<span>SHIFT</span></div>
            <div className="login-logo-sub">PARAMETRIC INSURANCE</div>
          </div>
          <div className="login-left-body">
            <div className="login-pill">
              <div className="login-pill-dot" />
              LIVE · CHENNAI REGION
            </div>
            <h2>Protection for gig workers, powered by real-time data</h2>
            <p>Automatic payouts triggered by extreme weather, pollution, and traffic — no claims needed.</p>
            <div className="login-stat-row">
              <div className="login-stat">
                <div className="login-stat-val">1,240</div>
                <div className="login-stat-lbl">Active Workers</div>
              </div>
              <div className="login-stat">
                <div className="login-stat-val">₹3.2L</div>
                <div className="login-stat-lbl">Paid This Month</div>
              </div>
              <div className="login-stat">
                <div className="login-stat-val">94%</div>
                <div className="login-stat-lbl">Auto-Resolved</div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.15)", fontFamily: "'DM Mono',monospace" }}>
            © 2025 SAFESHIFT · SECURE PLATFORM
          </p>
        </div>

        {/* Right panel */}
        <div className="login-right">
          <div className="login-right-head">
            <h3>Welcome back</h3>
            <p>Sign in to your dashboard</p>
          </div>

          <div className="login-role-selector">
            <button className={`login-role-btn ${role === "worker" ? "active" : "inactive"}`}
              onClick={() => handleRoleSwitch("worker")}>
              👷 Worker
            </button>
            <button className={`login-role-btn ${role === "admin" ? "active" : "inactive"}`}
              onClick={() => handleRoleSwitch("admin")}>
              🛡️ Admin
            </button>
          </div>

          <div className="login-form">
            <div className="login-field">
              <label>{role === "admin" ? "Admin ID" : "Worker ID"}</label>
              <input
                type="text"
                placeholder={role === "admin" ? "e.g. admin1" : "e.g. W-1042"}
                value={userId}
                onChange={e => setUserId(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
              />
            </div>
            <div className="login-field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
              />
            </div>
            {error && <div className="login-error">{error}</div>}
            <button className="login-submit" onClick={handleSubmit}>
              Sign In →
            </button>
          </div>

          <div className="login-hint">
            {role === "worker"
              ? "Demo — Worker IDs: W-1042 / W-1089 / W-1134  ·  Password: worker1/2/3"
              : "Demo — Admin ID: admin1  ·  Password: admin123"}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── WORKER DASHBOARD ───────────────────────────────────────────────────────── */
function WorkerDashboard({ user }) {
  const w = workers.find(x => x.id === user.id) || workers[0];
  const env = envData;
  const earnMax = Math.max(...w.weeklyEarnings);
  const avgEarn = Math.round(w.weeklyEarnings.slice(0, 3).reduce((a, b) => a + b, 0) / 3);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>

      {/* Header */}
      <div className="ss-page-header">
        <div className="ss-page-label">WORKER PORTAL</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div className="ss-page-title">{w.name}</div>
            <div className="ss-page-sub">{w.platform} · {w.zone}, {w.city} · {w.id}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <Badge status={w.status} />
            <span style={{ fontSize: 10, color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>
              {env.time}
            </span>
          </div>
        </div>
      </div>

      {/* Eligibility Banner */}
      <div className="ss-elig-banner" style={{
        background: w.eligible ? "rgba(34,197,94,0.04)" : "rgba(239,68,68,0.04)",
        border: `1.5px solid ${w.eligible ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
      }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: "'DM Mono',monospace", fontWeight: 500,
            color: w.eligible ? "#22c55e" : "#ef4444", letterSpacing: "0.06em", marginBottom: 6 }}>
            {w.eligible ? "● PAYOUT ELIGIBLE" : "● NOT ELIGIBLE FOR PAYOUT"}
          </div>
          <div style={{ fontSize: 13, color: "#4a5e72" }}>
            {w.eligible
              ? `Trigger: ${w.trigger}. Compensation is being processed.`
              : w.status === "flagged"
                ? "Account flagged for unusual inactivity. Payout withheld."
                : "No active disruption trigger detected in your zone."}
          </div>
        </div>
        {w.eligible && (
          <div style={{ textAlign: "right", marginLeft: 20, flexShrink: 0 }}>
            <div style={{ fontSize: 10, color: "#b0bece", fontFamily: "'DM Mono',monospace", marginBottom: 2 }}>PAYOUT</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>
              ₹{w.payoutAmount}
            </div>
          </div>
        )}
      </div>

      {/* Live Conditions */}
      <div>
        <div className="ss-section-label">CURRENT CONDITIONS · {env.city}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          <TriggerChip label="TEMPERATURE" value={env.temp}    unit="°C"   threshold="> 42°C" active={env.temp > 42} />
          <TriggerChip label="RAINFALL"    value={env.rain}    unit="mm"   threshold="> 50mm" active={env.rain > 50} />
          <TriggerChip label="AIR QUALITY" value={env.aqi}     unit="AQI"  threshold="> 300"  active={env.aqi > 300} />
          <TriggerChip label="TRAFFIC IDX" value={env.traffic} unit="/100" threshold="> 80"   active={env.traffic > 80} />
        </div>
      </div>

      {/* Risk + Earnings */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div className="ss-card">
          <div className="ss-section-label">RISK ASSESSMENT</div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Gauge value={w.riskScore} color={riskColor(w.riskScore)} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#8a9bb0" }}>Disruption Probability</span>
                  <span style={{ fontSize: 12, color: "#f97316", fontFamily: "'DM Mono',monospace" }}>
                    {(w.model.disruption * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="ss-bar-track">
                  <div className="ss-bar-fill" style={{ width: `${w.model.disruption * 100}%`, background: "#f97316" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "#8a9bb0" }}>Fraud Risk Score</span>
                  <span style={{ fontSize: 12, color: "#22c55e", fontFamily: "'DM Mono',monospace" }}>
                    {(w.model.fraud * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="ss-bar-track">
                  <div className="ss-bar-fill" style={{ width: `${w.model.fraud * 100}%`, background: "#22c55e" }} />
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#b0bece" }}>
                Resilience cluster: <span style={{ color: "#4a5e72", fontWeight: 600 }}>{w.model.resilience}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ss-card">
          <div className="ss-section-label">WEEKLY EARNINGS</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: "#0f1e2f", fontFamily: "'DM Mono',monospace" }}>
              ₹{w.weeklyEarnings[3]}
            </span>
            <span style={{ fontSize: 12, color: "#8a9bb0", paddingBottom: 3 }}>this week</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 64 }}>
            {w.weeklyEarnings.map((v, i) => {
              const h = (v / earnMax) * 100;
              const isCurr = i === 3;
              return (
                <div key={i} className="ss-earn-bar-wrap">
                  <div className="ss-earn-bar" style={{
                    height: `${h}%`,
                    background: isCurr ? (v < 500 ? "#ef4444" : "#f97316") : "#e8edf3",
                  }} />
                  <span style={{ fontSize: 9, color: "#c0ccd8", fontFamily: "'DM Mono',monospace" }}>W{i + 1}</span>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 11, color: "#b0bece", marginTop: 12 }}>
            Expected avg ₹{avgEarn} · Income drop signals disruption event
          </div>
        </div>
      </div>

      {/* Forecast */}
      <div className="ss-card">
        <div className="ss-section-label">FORECAST — NEXT 5 HOURS</div>
        <div style={{ display: "flex", gap: 10 }}>
          {env.forecast.map((f, i) => (
            <div key={i} className="ss-forecast-card">
              <span style={{ fontSize: 10, color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>{f.hour}</span>
              <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "'DM Mono',monospace",
                color: f.temp > 42 ? "#ef4444" : "#4a5e72" }}>{f.temp}°</span>
              <span style={{ fontSize: 10, color: "#8a9bb0" }}>AQI {f.aqi}</span>
              <span style={{ fontSize: 10, color: "#8a9bb0" }}>{f.rain}mm</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        <MetricCard label="WEEKLY PREMIUM"   value={`₹${w.premium}`}              sub="Auto-deducted Sundays" accent="#8a9bb0" />
        <MetricCard label="TOTAL DELIVERIES" value={w.deliveries.toLocaleString()} sub={`Since ${w.joinDate}`} accent="#f97316" />
        <MetricCard
          label="ACTIVE TRIGGER"
          value={w.trigger !== "None" ? "YES" : "NO"}
          sub={w.trigger !== "None" ? w.trigger : "Conditions stable"}
          accent={w.trigger !== "None" ? "#ef4444" : "#22c55e"}
        />
      </div>
    </div>
  );
}

/* ─── ADMIN DASHBOARD ────────────────────────────────────────────────────────── */
function AdminDashboard() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter]     = useState("all");

  const filtered = workers.filter(w =>
    filter === "all"       ? true :
    filter === "eligible"  ? w.eligible :
    filter === "flagged"   ? w.status === "flagged" :
    filter === "disrupted" ? w.disruption : true
  );

  const totalPayout   = workers.reduce((a, w) => a + w.payoutAmount, 0);
  const totalEligible = workers.filter(w => w.eligible).length;
  const totalFlagged  = workers.filter(w => w.status === "flagged").length;
  const avgRisk       = Math.round(workers.reduce((a, w) => a + w.riskScore, 0) / workers.length);
  const sel           = selected ? workers.find(w => w.id === selected) : null;
  const colTpl        = "1.4fr 1fr 0.6fr 0.6fr 0.7fr 0.9fr 0.7fr";

  return (
    <div style={{ display: "flex", gap: 22 }}>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 22 }}>

        <div className="ss-page-header">
          <div className="ss-page-label">ADMIN · OPERATIONS</div>
          <div className="ss-page-title">Overview</div>
          <div className="ss-page-sub">Chennai Region · Live data</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          <MetricCard label="TOTAL WORKERS"   value={workers.length}   sub="Registered"             accent="#f97316" />
          <MetricCard label="PAYOUT ELIGIBLE" value={totalEligible}    sub={`₹${totalPayout} total`} accent="#22c55e" />
          <MetricCard label="FLAGGED"         value={totalFlagged}     sub="Fraud review"            accent="#ef4444" />
          <MetricCard label="AVG RISK SCORE"  value={avgRisk}          sub="Region-wide"             accent={riskColor(avgRisk)} />
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8 }}>
          {["all", "eligible", "flagged", "disrupted"].map(f => (
            <button key={f} className="ss-filter-btn"
              style={{
                background:  filter === f ? "#f97316" : "#fff",
                color:       filter === f ? "#fff"    : "#8a9bb0",
                borderColor: filter === f ? "#f97316" : "#e8edf3",
              }}
              onClick={() => setFilter(f)}>
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="ss-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ss-table-header" style={{ gridTemplateColumns: colTpl }}>
            {["WORKER", "PLATFORM", "RISK", "FRAUD", "DISRUPTION", "STATUS", "PAYOUT"].map(h => (
              <span key={h} style={{ fontSize: 9, letterSpacing: "0.12em", color: "#b0bece",
                fontFamily: "'DM Mono',monospace" }}>{h}</span>
            ))}
          </div>
          {filtered.map(w => (
            <div key={w.id}
              className={`ss-table-row${selected === w.id ? " selected" : ""}`}
              style={{ gridTemplateColumns: colTpl }}
              onClick={() => setSelected(selected === w.id ? null : w.id)}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a2c42" }}>{w.name}</div>
                <div style={{ fontSize: 10, color: "#c0ccd8", fontFamily: "'DM Mono',monospace", marginTop: 2 }}>
                  {w.id}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#4a5e72" }}>{w.platform}</div>
                <div style={{ fontSize: 10, color: "#b0bece", marginTop: 2 }}>{w.zone}</div>
              </div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 14, fontWeight: 500,
                color: riskColor(w.riskScore) }}>{w.riskScore}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 14,
                color: w.fraudScore > 50 ? "#ef4444" : "#22c55e" }}>{w.fraudScore}</div>
              <div style={{ fontSize: 11, fontFamily: "'DM Mono',monospace",
                color: w.disruption ? "#f97316" : "#c0ccd8" }}>
                {w.disruption ? "● YES" : "○ NO"}
              </div>
              <div><Badge status={w.status} /></div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 13,
                color: w.eligible ? "#22c55e" : "#c0ccd8" }}>
                {w.eligible ? `₹${w.payoutAmount}` : "—"}
              </div>
            </div>
          ))}
        </div>

        {/* ML Panel */}
        <div className="ss-card">
          <div className="ss-section-label">ML MODEL · CURRENT PREDICTIONS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {workers.map(w => {
              const sparkColor = w.eligible ? "#f97316" : w.status === "flagged" ? "#ef4444" : "#c0ccd8";
              return (
                <div key={w.id} className="ss-ml-card">
                  <div className="ss-ml-card-header">
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1a2c42" }}>{w.name.split(" ")[0]}</span>
                    <Badge status={w.status} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
                    <Spark data={w.weeklyEarnings} color={sparkColor} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span style={{ fontSize: 9, color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>
                        DISRUPT {(w.model.disruption * 100).toFixed(0)}%
                      </span>
                      <span style={{ fontSize: 9, color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>
                        FRAUD {(w.model.fraud * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {sel && (
        <div className="ss-detail-panel">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0f1e2f" }}>{sel.name}</div>
              <div style={{ fontSize: 10, color: "#b0bece", fontFamily: "'DM Mono',monospace", marginTop: 3 }}>
                {sel.id}
              </div>
            </div>
            <Badge status={sel.status} />
          </div>

          <div className="ss-detail-divider">
            <div className="ss-section-label">ELIGIBILITY DECISION</div>
            <div style={{
              background: sel.eligible ? "rgba(34,197,94,0.05)" : "rgba(239,68,68,0.05)",
              border: `1.5px solid ${sel.eligible ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
              borderRadius: 8, padding: "12px 14px",
            }}>
              <div style={{ fontFamily: "'DM Mono',monospace", fontWeight: 500, fontSize: 12,
                color: sel.eligible ? "#22c55e" : "#ef4444", marginBottom: 6 }}>
                {sel.eligible ? "APPROVED" : "DENIED"}
              </div>
              <div style={{ fontSize: 11, color: "#8a9bb0", lineHeight: 1.6 }}>
                {sel.eligible
                  ? `${sel.trigger} trigger met. Activity verified.`
                  : sel.status === "flagged"
                    ? "High fraud score. Manual review required."
                    : "No qualifying disruption detected."}
              </div>
            </div>
          </div>

          <div>
            <div className="ss-section-label">MODEL OUTPUTS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: "#8a9bb0" }}>Disruption Prob.</span>
                  <span style={{ fontSize: 11, color: "#f97316", fontFamily: "'DM Mono',monospace" }}>
                    {(sel.model.disruption * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="ss-bar-track">
                  <div className="ss-bar-fill" style={{ width: `${sel.model.disruption * 100}%`, background: "#f97316" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: "#8a9bb0" }}>Fraud Risk</span>
                  <span style={{ fontSize: 11, fontFamily: "'DM Mono',monospace",
                    color: sel.fraudScore > 50 ? "#ef4444" : "#22c55e" }}>
                    {(sel.model.fraud * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="ss-bar-track">
                  <div className="ss-bar-fill" style={{
                    width: `${sel.model.fraud * 100}%`,
                    background: sel.fraudScore > 50 ? "#ef4444" : "#22c55e"
                  }} />
                </div>
              </div>
              <div style={{ fontSize: 10, color: "#b0bece" }}>
                Resilience: <span style={{ color: "#4a5e72", fontWeight: 600 }}>{sel.model.resilience}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ss-section-label">LIVE CONDITIONS</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                ["Temp",    `${sel.triggers.temp}°C`,      sel.triggers.temp > 42],
                ["Rain",    `${sel.triggers.rain}mm`,      sel.triggers.rain > 50],
                ["AQI",     `${sel.triggers.aqi}`,         sel.triggers.aqi > 300],
                ["Traffic", `${sel.triggers.traffic}/100`, sel.triggers.traffic > 80],
              ].map(([l, v, a]) => (
                <div key={l} style={{
                  background: "#f8fafc",
                  border: `1.5px solid ${a ? "rgba(239,68,68,0.2)" : "#e8edf3"}`,
                  borderRadius: 7, padding: "9px 11px",
                }}>
                  <div style={{ fontSize: 9, color: "#b0bece", marginBottom: 4, letterSpacing: "0.06em" }}>{l}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "'DM Mono',monospace",
                    color: a ? "#ef4444" : "#4a5e72" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="ss-section-label">EARNINGS TREND</div>
            <Spark data={sel.weeklyEarnings}
              color={sel.eligible ? "#f97316" : sel.status === "flagged" ? "#ef4444" : "#c0ccd8"} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              {sel.weeklyEarnings.map((v, i) => (
                <span key={i} style={{ fontSize: 9, color: "#b0bece", fontFamily: "'DM Mono',monospace" }}>
                  ₹{v}
                </span>
              ))}
            </div>
          </div>

          <div className="ss-detail-divider">
            {[
              ["Platform",   sel.platform,                   false],
              ["Deliveries", sel.deliveries.toLocaleString(), true],
              ["Joined",     sel.joinDate,                   false],
              ["Resilience", sel.model.resilience,           false],
            ].map(([k, v, mono]) => (
              <div key={k} className="ss-detail-row">
                <span style={{ fontSize: 11, color: "#8a9bb0" }}>{k}</span>
                <span style={{ fontSize: 11, color: "#4a5e72", fontWeight: 600,
                  fontFamily: mono ? "'DM Mono',monospace" : "inherit" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── SIDEBAR ────────────────────────────────────────────────────────────────── */
function Sidebar({ view, setView, role, user, onLogout }) {
  const workerLinks = [
    ["status",     "📊", "My Status"],
    ["conditions", "🌡️", "Conditions"],
    ["earnings",   "💰", "Earnings"],
  ];
  const adminLinks = [
    ["overview", "📋", "Overview"],
    ["workers",  "👷", "Workers"],
    ["payouts",  "💳", "Payouts"],
  ];
  const links = role === "admin" ? adminLinks : workerLinks;
  const initials = user.name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <aside className="ss-sidebar">
      <div className="ss-logo-block">
        <div className="ss-logo">SAFE<span>SHIFT</span></div>
        <div className="ss-logo-sub">PARAMETRIC INSURANCE</div>
      </div>

      <nav className="ss-nav">
        <div className="ss-nav-section-label">{role === "admin" ? "OPERATIONS" : "MY ACCOUNT"}</div>
        {links.map(([id, icon, label]) => (
          <button key={id}
            className={`ss-nav-btn ${view === id ? "active" : "inactive"}`}
            onClick={() => setView(id)}>
            <span className="nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      <div className="ss-sidebar-footer">
        <div className="ss-user-chip">
          <div className="ss-user-avatar">{initials}</div>
          <div>
            <div className="ss-user-name">{user.name}</div>
            <div className="ss-user-role">{role === "admin" ? "Administrator" : user.id}</div>
          </div>
        </div>
        <button className="ss-logout-btn" onClick={onLogout}>Sign Out</button>
      </div>
    </aside>
  );
}

/* ─── APP ROOT ───────────────────────────────────────────────────────────────── */
export default function App() {
  const [user, setUser]   = useState(null);
  const [view, setView]   = useState("status");

  const handleLogin = (u) => {
    setUser(u);
    setView(u.role === "admin" ? "overview" : "status");
  };

  const handleLogout = () => {
    setUser(null);
    setView("status");
  };

  if (!user) {
    return (
      <>
        <style>{GLOBAL_CSS}</style>
        <LoginPage onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="ss-root">
        <Sidebar view={view} setView={setView} role={user.role} user={user} onLogout={handleLogout} />
        <main className="ss-main">
          {user.role === "worker"
            ? <WorkerDashboard user={user} />
            : <AdminDashboard />}
        </main>
      </div>
    </>
  );
}