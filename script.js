/**
 * CORVANTA — CORPORATE COMMUNICATIONS PORTAL
 * "Connect People. Align Teams. Move Business Forward."
 * 
 * Performance-First, Vanilla JS Architecture with Zero Dependencies
 * Direct Root File | Full Offline Capability | LocalStorage Data Store
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DEFAULT SEED DATA (OFFLINE & DEMO READY)
  // =========================================================================

  const DEFAULT_ANNOUNCEMENTS = [
    {
      id: "ann-01",
      title: "Corvanta Global Q3 Strategic Direction & EMEA Expansion",
      category: "Executive Update",
      author: "Elena Sterling",
      department: "Executive",
      date: "2026-09-11",
      audience: "All Employees (Global)",
      views: 2842,
      engagement: "98.4%",
      priority: "Urgent",
      status: "Published",
      summary: "Executive roadmap detailing our newly launched EMEA Operations Hub in London and strategic alignment across European business units.",
      content: "Team, as we conclude the initial sprint of Q3 2026, I am exceptionally pleased to report that our London Innovation Campus has achieved full operational readiness. This modern workspace unites over 450 corporate communications, engineering, and product leaders under one unified facility. Over the next quarter, our priorities center on asynchronous transparent communications, cross-functional accountability, and client trust."
    },
    {
      id: "ann-02",
      title: "Annual Global Benefits & Wellness Open Enrollment 2026-2027",
      category: "HR",
      author: "Marcus Chen",
      department: "HR",
      date: "2026-09-10",
      audience: "All Employees (Global)",
      views: 2150,
      engagement: "94.1%",
      priority: "Important",
      status: "Published",
      summary: "Comprehensive open enrollment period begins October 1st. Explore upgraded healthcare plans, hybrid wellness stipends, and retirement matches.",
      content: "The Global People & Culture team has finalized our modernized healthcare, mental wellness, and hybrid home-office support packages for the 2026-2027 cycle. All full-time and contract personnel can review their customized tier allocations directly through the People Portal beginning October 1. Informational webinars will be held weekly."
    },
    {
      id: "ann-03",
      title: "Enterprise Zero-Trust Security Upgrade & Multi-Factor Migration",
      category: "Security",
      author: "David Kim",
      department: "IT",
      date: "2026-09-08",
      audience: "All Employees (Global)",
      views: 2680,
      engagement: "96.7%",
      priority: "Urgent",
      status: "Published",
      summary: "Mandatory enterprise hardware token and FIDO2 biometric authentication rollout across all corporate workstations by September 25.",
      content: "In compliance with ISO 27001 and international data sovereignty mandates, Corvanta Information Security will transition all internal single sign-on endpoints to hardware-bound FIDO2 keys. Please follow the instructions provided by your departmental IT delegate."
    },
    {
      id: "ann-04",
      title: "Fiscal Q2 Financial Performance Exceeds International Forecasts",
      category: "Finance",
      author: "Sophia Reyes",
      department: "Finance",
      date: "2026-09-05",
      audience: "Executive Leadership",
      views: 890,
      engagement: "92.3%",
      priority: "Important",
      status: "Published",
      summary: "Consolidated enterprise revenues rose 18.2% YoY, driven by enterprise software solutions and strategic consulting contracts.",
      content: "Chief Financial Officer Sophia Reyes presented our Q2 2026 audited balance sheet to the Board of Directors this morning. Operating margins expanded by 340 bps, allowing us to accelerate capital allocation toward internal research, employee growth funds, and sustainability grants."
    },
    {
      id: "ann-05",
      title: "Corvanta World 2026: Global Leadership Summit Registration Open",
      category: "Events",
      author: "Alexandra Vance",
      department: "Marketing",
      date: "2026-09-02",
      audience: "All Employees (Global)",
      views: 3120,
      engagement: "89.5%",
      priority: "Normal",
      status: "Published",
      summary: "Registration for our flagship leadership summit in Geneva and virtual metaverse broadcast is officially accessible.",
      content: "Join over 3,000 international delegates, partners, and enterprise leaders for three days of keynotes, collaborative workshops, and future-of-work sessions in Geneva, Switzerland. Virtual tickets with live multi-language translation are available to every team member."
    },
    {
      id: "ann-06",
      title: "Hybrid Workplace Norms & Asynchronous Communication Handbook",
      category: "Operations",
      author: "Julian Ross",
      department: "Operations",
      date: "2026-08-28",
      audience: "All Employees (Global)",
      views: 2450,
      engagement: "91.8%",
      priority: "Normal",
      status: "Published",
      summary: "Updated guidelines on meeting-free focus hours, documentation-first workflows, and cross-timezone collaboration.",
      content: "To combat digital burnout and foster focused deep work, Corvanta is codifying our 'No-Meeting Thursday Afternoons' initiative and formalizing the 24-hour asynchronous response standard for non-critical communications."
    }
  ];

  const DEFAULT_CONVERSATIONS = [
    {
      id: "chat-01",
      contactName: "Elena Sterling",
      role: "Chief Executive Officer",
      department: "Executive",
      avatar: "ES",
      online: true,
      unread: 1,
      messages: [
        { sender: "Elena Sterling", text: "Alexandra, the draft for tomorrow's Board communication looks sharp. Let's make sure the ESG metric footnote is finalized.", time: "10:14 AM", outgoing: false },
        { sender: "You", text: "Thank you Elena. Marcus's team verified the carbon neutrality data yesterday; I will insert the final audit link before noon.", time: "10:18 AM", outgoing: true },
        { sender: "Elena Sterling", text: "Excellent. Please coordinate with Sophia to sync the investor deck slides as well.", time: "10:22 AM", outgoing: false }
      ]
    },
    {
      id: "chat-02",
      contactName: "Marcus Chen",
      role: "Global HR Director",
      department: "HR",
      avatar: "MC",
      online: true,
      unread: 0,
      messages: [
        { sender: "Marcus Chen", text: "Hey Alexandra, open enrollment engagement is already up 14% compared to last year's launch week.", time: "Yesterday", outgoing: false },
        { sender: "You", text: "That is fantastic Marcus! The concise video briefing in the announcement helped significantly.", time: "Yesterday", outgoing: true }
      ]
    },
    {
      id: "chat-03",
      contactName: "Marketing & Comms Core",
      role: "Cross-Functional Team",
      department: "Marketing",
      avatar: "MC",
      online: true,
      unread: 2,
      messages: [
        { sender: "Claire Bennett", text: "Press kit assets for Corvanta World 2026 have been uploaded to Document Center.", time: "09:30 AM", outgoing: false },
        { sender: "Liam O'Connor", text: "Keynote teaser video is rendering now. Will share the review link shortly.", time: "09:45 AM", outgoing: false }
      ]
    },
    {
      id: "chat-04",
      contactName: "Engineering & Infrastructure",
      role: "Technical Operations",
      department: "Engineering",
      avatar: "EI",
      online: false,
      unread: 0,
      messages: [
        { sender: "Devin Zhao", text: "Zero-Trust SSO transition went live across APAC servers with 99.99% uptime.", time: "Sep 9", outgoing: false },
        { sender: "You", text: "Outstanding execution Devin. I'll publish an internal recognition memo.", time: "Sep 9", outgoing: true }
      ]
    },
    {
      id: "chat-05",
      contactName: "Sophia Reyes",
      role: "Chief Financial Officer",
      department: "Finance",
      avatar: "SR",
      online: true,
      unread: 0,
      messages: [
        { sender: "Sophia Reyes", text: "Alexandra, are the Q2 financial highlight graphics ready for tomorrow's town hall?", time: "Sep 8", outgoing: false },
        { sender: "You", text: "Yes Sophia, verified by the creative team and loaded into the main stage slides.", time: "Sep 8", outgoing: true }
      ]
    },
    {
      id: "chat-06",
      contactName: "Operations Command Center",
      role: "Global Facilities",
      department: "Operations",
      avatar: "OC",
      online: true,
      unread: 1,
      messages: [
        { sender: "Facility Lead", text: "Geneva Summit auditorium acoustic testing is complete. Dual-stream setup validated.", time: "Sep 7", outgoing: false }
      ]
    }
  ];

  const DEFAULT_NEWSROOM = [
    {
      id: "news-01",
      title: "Corvanta Awarded 'Global Enterprise Workplace of the Year 2026'",
      category: "Awards",
      date: "2026-09-09",
      source: "World Business Forum",
      readTime: "4 min read",
      summary: "Recognized for pioneering transparent communications, human-centric hybrid governance, and sustainable international growth.",
      content: "The International Chamber of Commerce and Global Workplace Institute have officially honored Corvanta with the prestigious Workplace Excellence Award for 2026. The selection committee cited Corvanta's open communication architecture, transparent executive engagement, and innovative employee well-being initiatives."
    },
    {
      id: "news-02",
      title: "Corvanta Cloud Services Surpasses 5 Million Connected Global Endpoints",
      category: "Milestones",
      date: "2026-09-04",
      source: "TechEnterprise Daily",
      readTime: "3 min read",
      summary: "A milestone quarter celebrating rapid multi-cloud adoption across Fortune 500 financial and healthcare institutions.",
      content: "Our infrastructure division announced that Corvanta's distributed edge fabric now manages over 5 million concurrent secure nodes worldwide. CEO Elena Sterling commended our engineering teams for their relentless dedication to high availability and cryptographic integrity."
    },
    {
      id: "news-03",
      title: "Official Press Release: Partnership with United Nations Sustainability Pact",
      category: "Press Releases",
      date: "2026-08-30",
      source: "Global PR Newswire",
      readTime: "5 min read",
      summary: "Pledging 100% renewable power across all corporate facilities and data center partners by the end of 2027.",
      content: "Corvanta Global Corp today formally ratified its commitment to the United Nations Sustainable Enterprise Compact. As part of this comprehensive initiative, Corvanta will fund decentralized solar grids across developing regional offices and publish an audited open-source emissions ledger."
    },
    {
      id: "news-04",
      title: "Corvanta Unveils Next-Generation Secure Collaborative Workspace",
      category: "Product Updates",
      date: "2026-08-22",
      source: "Silicon Analyst Review",
      readTime: "4 min read",
      summary: "Introducing end-to-end encrypted messaging, asynchronous executive town hall streams, and compliance dashboards.",
      content: "The newly deployed version of Corvanta's internal communications suite offers seamless cross-departmental alignment with sub-millisecond real-time sync, zero third-party telemetry, and instant cryptographic verification of company directives."
    }
  ];

  const DEFAULT_EMPLOYEES = [
    { id: "emp-01", name: "Alexandra Vance", role: "Chief Communications Officer", department: "Executive", location: "London, UK", email: "alexandra.vance@corvanta.com", phone: "+44 20 7946 0912", status: "Active", skills: ["Strategy", "Media Relations", "Crisis Management"] },
    { id: "emp-02", name: "Elena Sterling", role: "Chief Executive Officer", department: "Executive", location: "New York, USA", email: "elena.sterling@corvanta.com", phone: "+1 212 555 0184", status: "Active", skills: ["Leadership", "Corporate Governance", "Global Strategy"] },
    { id: "emp-03", name: "Marcus Chen", role: "Global HR Director", department: "HR", location: "Singapore", email: "marcus.chen@corvanta.com", phone: "+65 6712 3890", status: "Active", skills: ["Talent Acquisition", "Employee Wellness", "People Ops"] },
    { id: "emp-04", name: "Sophia Reyes", role: "Chief Financial Officer", department: "Finance", location: "Zurich, Switzerland", email: "sophia.reyes@corvanta.com", phone: "+41 44 668 1234", status: "In Meeting", skills: ["Financial Modeling", "Investor Relations", "Treasury"] },
    { id: "emp-05", name: "David Kim", role: "VP of Enterprise IT & Security", department: "IT", location: "San Francisco, USA", email: "david.kim@corvanta.com", phone: "+1 415 555 0192", status: "Active", skills: ["Zero-Trust", "Cloud Architecture", "ISO 27001"] },
    { id: "emp-06", name: "Claire Bennett", role: "Director of Brand & Culture", department: "Marketing", location: "London, UK", email: "claire.bennett@corvanta.com", phone: "+44 20 7946 0881", status: "Remote", skills: ["Brand Identity", "Event Design", "Storytelling"] },
    { id: "emp-07", name: "Julian Ross", role: "Chief Operating Officer", department: "Operations", location: "Frankfurt, Germany", email: "julian.ross@corvanta.com", phone: "+49 69 1234 5678", status: "Active", skills: ["Logistics", "Process Optimization", "Facilities"] },
    { id: "emp-08", name: "Devin Zhao", role: "Principal Cloud Engineer", department: "Engineering", location: "Tokyo, Japan", email: "devin.zhao@corvanta.com", phone: "+81 3 5555 0143", status: "Active", skills: ["Kubernetes", "Distributed Systems", "Rust"] },
    { id: "emp-09", name: "Sarah Jenkins", role: "Senior Legal Counsel", department: "Legal", location: "Washington DC, USA", email: "sarah.jenkins@corvanta.com", phone: "+1 202 555 0177", status: "On Leave", skills: ["Compliance", "Commercial Law", "Intellectual Property"] },
    { id: "emp-10", name: "Liam O'Connor", role: "Lead Communications Specialist", department: "Marketing", location: "Dublin, Ireland", email: "liam.oconnor@corvanta.com", phone: "+353 1 496 0199", status: "Active", skills: ["Copywriting", "Internal Comms", "Podcasting"] },
    { id: "emp-11", name: "Fatima Al-Mansoor", role: "VP of Customer Success", department: "Customer Success", location: "Dubai, UAE", email: "fatima.almansoor@corvanta.com", phone: "+971 4 312 9900", status: "Active", skills: ["Client Retention", "Enterprise SLA", "Relationship Management"] },
    { id: "emp-12", name: "Lucas Meyer", role: "Global Sales Director", department: "Sales", location: "Paris, France", email: "lucas.meyer@corvanta.com", phone: "+33 1 42 68 55 00", status: "In Meeting", skills: ["Strategic Partnerships", "Revenue Operations", "Key Accounts"] }
  ];

  const DEFAULT_DEPARTMENTS = [
    { id: "dept-01", name: "Executive", manager: "Elena Sterling", employees: 18, projects: 12, announcements: 42, performance: 98 },
    { id: "dept-02", name: "Marketing", manager: "Claire Bennett", employees: 142, projects: 34, announcements: 88, performance: 94 },
    { id: "dept-03", name: "Engineering", manager: "Devin Zhao", employees: 680, projects: 58, announcements: 112, performance: 96 },
    { id: "dept-04", name: "Finance", manager: "Sophia Reyes", employees: 85, projects: 16, announcements: 39, performance: 95 },
    { id: "dept-05", name: "HR", manager: "Marcus Chen", employees: 94, projects: 22, announcements: 76, performance: 93 },
    { id: "dept-06", name: "Sales", manager: "Lucas Meyer", employees: 420, projects: 48, announcements: 64, performance: 91 },
    { id: "dept-07", name: "Operations", manager: "Julian Ross", employees: 310, projects: 29, announcements: 52, performance: 92 },
    { id: "dept-08", name: "Customer Success", manager: "Fatima Al-Mansoor", employees: 510, projects: 31, announcements: 45, performance: 94 },
    { id: "dept-09", name: "IT", manager: "David Kim", employees: 340, projects: 40, announcements: 98, performance: 97 },
    { id: "dept-10", name: "Legal", manager: "Sarah Jenkins", employees: 47, projects: 14, announcements: 28, performance: 96 }
  ];

  const DEFAULT_CAMPAIGNS = [
    {
      id: "cmp-01",
      name: "Global Open Enrollment 2026",
      objective: "Achieve 95%+ employee health benefit selection before Nov 1",
      audience: "All Global Employees",
      channel: "Internal Portal & Email",
      startDate: "2026-09-01",
      endDate: "2026-10-31",
      owner: "Marcus Chen",
      status: "Active",
      reach: "94.8%",
      openRate: "91.2%",
      engagement: "88.4%",
      completion: 68
    },
    {
      id: "cmp-02",
      name: "Zero-Trust Security Adoption",
      objective: "Deploy FIDO2 physical keys to 100% of workstations",
      audience: "IT & All Personnel",
      channel: "Announcement & Push Notification",
      startDate: "2026-08-15",
      endDate: "2026-09-30",
      owner: "David Kim",
      status: "Active",
      reach: "98.2%",
      openRate: "96.4%",
      engagement: "92.1%",
      completion: 82
    },
    {
      id: "cmp-03",
      name: "Corvanta World 2026 Teaser Campaign",
      objective: "Drive international registration for Geneva Leadership Summit",
      audience: "Enterprise Leaders & Partners",
      channel: "Event & Messaging",
      startDate: "2026-09-01",
      endDate: "2026-11-15",
      owner: "Alexandra Vance",
      status: "Active",
      reach: "89.5%",
      openRate: "85.0%",
      engagement: "78.2%",
      completion: 45
    },
    {
      id: "cmp-04",
      name: "Asynchronous Work Standards Rollout",
      objective: "Codify 24-hr response SLA and meeting-free focus windows",
      audience: "Managers & Directors",
      channel: "Internal Portal",
      startDate: "2026-08-01",
      endDate: "2026-09-15",
      owner: "Julian Ross",
      status: "Completed",
      reach: "96.1%",
      openRate: "94.3%",
      engagement: "90.7%",
      completion: 100
    }
  ];

  const DEFAULT_CALENDAR_EVENTS = [
    { id: "ev-01", title: "Q3 All-Hands Executive Town Hall", date: "2026-09-15", time: "14:00 GMT", location: "Global Stream & London HQ", type: "townhall", organizer: "Elena Sterling", attendees: 2480, registered: true },
    { id: "ev-02", title: "Zero-Trust Security Migration Q&A", date: "2026-09-18", time: "10:30 GMT", location: "Virtual Webinar Room 1", type: "meeting", organizer: "David Kim", attendees: 610, registered: false },
    { id: "ev-03", title: "Open Enrollment Policy Walkthrough", date: "2026-09-22", time: "15:00 GMT", location: "Virtual Auditorium B", type: "urgent", organizer: "Marcus Chen", attendees: 1140, registered: true },
    { id: "ev-04", title: "Corvanta World 2026 Planning Sprint", date: "2026-09-25", time: "09:00 GMT", location: "Geneva Campus & Virtual", type: "meeting", organizer: "Alexandra Vance", attendees: 120, registered: true },
    { id: "ev-05", title: "Sustainability Pledge Review Council", date: "2026-09-29", time: "16:00 GMT", location: "Boardroom Alpha", type: "townhall", organizer: "Sophia Reyes", attendees: 45, registered: false }
  ];

  const DEFAULT_DOCUMENTS = [
    { id: "doc-01", name: "Corvanta Global Code of Business Conduct 2026.pdf", type: "PDF", category: "Policies", department: "Legal", owner: "Sarah Jenkins", updated: "2026-09-01", size: "4.2 MB", status: "Approved" },
    { id: "doc-02", name: "Hybrid Workplace Norms & Async Guide.pdf", type: "PDF", category: "Guidelines", department: "Operations", owner: "Julian Ross", updated: "2026-08-28", size: "2.8 MB", status: "Active" },
    { id: "doc-03", name: "Fiscal Q2 Consolidated Financial Statements.xlsx", type: "XLSX", category: "Reports", department: "Finance", owner: "Sophia Reyes", updated: "2026-09-05", size: "8.4 MB", status: "Audited" },
    { id: "doc-04", name: "Corvanta Brand Guidelines & Typography Master.pdf", type: "PDF", category: "Brand Documents", department: "Marketing", owner: "Claire Bennett", updated: "2026-08-15", size: "14.1 MB", status: "Official" },
    { id: "doc-05", name: "Healthcare & Benefits Schedule 2026-2027.pdf", type: "PDF", category: "HR Documents", department: "HR", owner: "Marcus Chen", updated: "2026-09-08", size: "3.6 MB", status: "Final" },
    { id: "doc-06", name: "Enterprise Zero-Trust Token Onboarding Guide.docx", type: "DOCX", category: "Training", department: "IT", owner: "David Kim", updated: "2026-09-07", size: "1.9 MB", status: "Published" },
    { id: "doc-07", name: "Global Crisis Communications Playbook.pdf", type: "PDF", category: "Policies", department: "Executive", owner: "Alexandra Vance", updated: "2026-09-02", size: "5.1 MB", status: "Restricted" }
  ];

  const DEFAULT_FEEDBACK = [
    { id: "fb-01", category: "Idea", subject: "Localized timezone broadcast replays for global town halls", message: "Team members in APAC often find the 14:00 GMT live town hall difficult to attend live. Having scheduled re-broadcasts with live local Q&A moderators would dramatically boost regional alignment.", department: "Executive", priority: "Important", status: "In Progress", author: "Devin Zhao", date: "2026-09-10" },
    { id: "fb-02", category: "Recognition", subject: "Commendation for IT Security team on hardware token rollouts", message: "The on-site technicians in London handled the token distribution with zero disruptions. High efficiency and outstanding employee support.", department: "IT", priority: "Normal", status: "Resolved", author: "Claire Bennett", date: "2026-09-08" },
    { id: "fb-03", category: "Suggestion", subject: "Standardize presentation templates for quarterly metrics", message: "To improve slide readability during all-hands, having one consistent 16:9 dark-mode master template will save teams hours of design rework.", department: "Marketing", priority: "Normal", status: "Under Review", author: "Sophia Reyes", date: "2026-09-04" },
    { id: "fb-04", category: "Question", subject: "Eligibility for home-office ergonomic upgrade stipends", message: "Does the revised wellness stipend cover standing desks purchased prior to the October 1 open enrollment period?", department: "HR", priority: "Normal", status: "New", author: "Liam O'Connor", date: "2026-09-11" }
  ];

  const DEFAULT_TASKS = [
    { id: "tsk-01", title: "Finalize CEO keynote remarks for Corvanta World", department: "Executive", assignee: "Alexandra Vance", priority: "Urgent", dueDate: "2026-09-16", status: "InProgress" },
    { id: "tsk-02", title: "Publish open enrollment FAQ video guide", department: "HR", assignee: "Marcus Chen", priority: "High", dueDate: "2026-09-20", status: "Todo" },
    { id: "tsk-03", title: "Review Q2 fiscal audit footnote compliance", department: "Finance", assignee: "Sophia Reyes", priority: "Medium", dueDate: "2026-09-14", status: "Review" },
    { id: "tsk-04", title: "Coordinate Geneva summit live stream test", department: "Operations", assignee: "Julian Ross", priority: "High", dueDate: "2026-09-22", status: "Todo" },
    { id: "tsk-05", title: "Distribute London HQ hardware security keys", department: "IT", assignee: "David Kim", priority: "Urgent", dueDate: "2026-09-12", status: "Completed" },
    { id: "tsk-06", title: "Distribute press release on Workplace of the Year", department: "Marketing", assignee: "Liam O'Connor", priority: "Medium", dueDate: "2026-09-10", status: "Completed" }
  ];

  const DEFAULT_NOTIFICATIONS = [
    { id: "nt-01", title: "New Executive Address Published", time: "10 mins ago", text: "CEO Elena Sterling published Q3 Strategic Direction & EMEA Expansion.", read: false, type: "announcement" },
    { id: "nt-02", title: "Direct Message Received", time: "42 mins ago", text: "Elena Sterling sent you a follow-up regarding the investor presentation.", read: false, type: "message" },
    { id: "nt-03", title: "Town Hall Registration Confirmed", time: "2 hours ago", text: "You are registered for Q3 All-Hands Executive Town Hall on Sep 15.", read: false, type: "event" },
    { id: "nt-04", title: "Document Approved", time: "Yesterday", text: "Healthcare & Benefits Schedule 2026-2027 has been finalized by Legal.", read: true, type: "document" },
    { id: "nt-05", title: "Campaign Milestone Achieved", time: "2 days ago", text: "Zero-Trust Security Adoption campaign exceeded 80% completion.", read: true, type: "campaign" }
  ];

  const DEFAULT_REPORTS = [
    { id: "rep-01", title: "Executive Communications Reach Audit Q2-Q3", type: "Communication Performance", generated: "2026-09-10", author: "Alexandra Vance", size: "2.4 MB" },
    { id: "rep-02", title: "Global Employee Engagement & Readership Index", type: "Employee Engagement", generated: "2026-09-08", author: "Marcus Chen", size: "3.1 MB" },
    { id: "rep-03", title: "Zero-Trust Security Campaign Compliance Audit", type: "Campaign Report", generated: "2026-09-05", author: "David Kim", size: "1.8 MB" },
    { id: "rep-04", title: "Departmental Communication Responsiveness Matrix", type: "Department Report", generated: "2026-08-31", author: "Julian Ross", size: "4.5 MB" }
  ];

  // =========================================================================
  // 2. STATE STORE & LOCALSTORAGE MANAGEMENT
  // =========================================================================

  const STORAGE_KEY = "corvanta_store_v1";

  const store = {
    user: {
      name: "Alexandra Vance",
      role: "Chief Communications Officer",
      email: "alexandra.vance@corvanta.com",
      company: "CORVANTA Global Corp",
      initials: "AV"
    },
    theme: "dark",
    density: "normal",
    activeView: "overview",
    overviewDateFilter: "30d",
    analyticsDateFilter: "30d",
    activeChatId: "chat-01",
    calendarMonth: new Date(2026, 8, 1), // September 2026
    calendarViewMode: "month",
    announcements: DEFAULT_ANNOUNCEMENTS,
    conversations: DEFAULT_CONVERSATIONS,
    news: DEFAULT_NEWSROOM,
    employees: DEFAULT_EMPLOYEES,
    departments: DEFAULT_DEPARTMENTS,
    campaigns: DEFAULT_CAMPAIGNS,
    events: DEFAULT_CALENDAR_EVENTS,
    documents: DEFAULT_DOCUMENTS,
    feedback: DEFAULT_FEEDBACK,
    tasks: DEFAULT_TASKS,
    notifications: DEFAULT_NOTIFICATIONS,
    reports: DEFAULT_REPORTS
  };

  function loadStore() {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (serialized) {
        const parsed = JSON.parse(serialized);
        Object.assign(store, parsed);
        store.calendarMonth = new Date(store.calendarMonth || new Date(2026, 8, 1));
      }
    } catch (e) {
      console.warn("LocalStorage access unavailable; using in-memory store.");
    }
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {
      console.warn("Failed to persist to LocalStorage.");
    }
  }

  // =========================================================================
  // 3. APPLICATION INITIALIZATION & ROUTING
  // =========================================================================

  document.addEventListener("DOMContentLoaded", function () {
    loadStore();
    applyThemeAndDensity();
    initGlobalListeners();

    // Check if user has active session
    const sessionActive = sessionStorage.getItem("corvanta_auth_active");
    if (sessionActive === "true") {
      document.getElementById("authScreen").style.display = "none";
      document.getElementById("appShell").style.display = "flex";
      renderCurrentView();
    }
  });

  function loginWithCredentials() {
    const email = document.getElementById("loginEmail").value;
    store.user.email = email || "alexandra.vance@corvanta.com";
    sessionStorage.setItem("corvanta_auth_active", "true");
    
    document.getElementById("authScreen").style.display = "none";
    document.getElementById("appShell").style.display = "flex";
    
    showToast("Welcome back, " + store.user.name + ". Workspace loaded.", "success");
    navigateTo("overview");
  }

  function enterDemoWorkspace() {
    sessionStorage.setItem("corvanta_auth_active", "true");
    document.getElementById("authScreen").style.display = "none";
    document.getElementById("appShell").style.display = "flex";
    
    showToast("Entered Demo Workspace with executive privileges.", "success");
    navigateTo("overview");
  }

  function logout() {
    sessionStorage.removeItem("corvanta_auth_active");
    closeModal("profileModal");
    document.getElementById("appShell").style.display = "none";
    document.getElementById("authScreen").style.display = "flex";
    showToast("You have been signed out securely.", "info");
  }

  function applyThemeAndDensity() {
    document.documentElement.setAttribute("data-theme", store.theme);
    document.documentElement.setAttribute("data-density", store.density);
    const themeSelect = document.getElementById("settingThemeSelect");
    const densitySelect = document.getElementById("settingDensitySelect");
    if (themeSelect) themeSelect.value = store.theme;
    if (densitySelect) densitySelect.value = store.density;
  }

  function toggleTheme(theme) {
    store.theme = theme;
    saveStore();
    applyThemeAndDensity();
    showToast("Theme switched to " + (theme === "dark" ? "Obsidian Dark" : "Porcelain Light"), "info");
    // Re-render canvas charts for contrast
    renderOverviewCharts();
    if (store.activeView === "analytics") renderAnalyticsCharts();
  }

  function toggleDensity(density) {
    store.density = density;
    saveStore();
    applyThemeAndDensity();
    showToast("Display density updated to " + density, "info");
  }

  function toggleSidebarCollapse() {
    const sidebar = document.getElementById("appSidebar");
    const main = document.querySelector(".app-main");
    if (sidebar.style.width === "76px") {
      sidebar.style.width = "";
      main.style.marginLeft = "";
      sidebar.querySelectorAll(".sidebar-brand-name, .sidebar-brand-subtitle, .sidebar-nav-item span, .sidebar-nav-group-title, .user-pill-info, .nav-badge").forEach(el => el.style.display = "");
    } else {
      sidebar.style.width = "76px";
      main.style.marginLeft = "76px";
      sidebar.querySelectorAll(".sidebar-brand-name, .sidebar-brand-subtitle, .sidebar-nav-item span, .sidebar-nav-group-title, .user-pill-info, .nav-badge").forEach(el => el.style.display = "none");
    }
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById("appSidebar");
    sidebar.classList.toggle("open");
  }

  function cycleCompanyContext() {
    const companies = ["CORVANTA Global Corp", "CORVANTA EMEA Hub", "CORVANTA APAC Tech Center", "CORVANTA Americas"];
    const currentIndex = companies.indexOf(store.user.company);
    const nextIndex = (currentIndex + 1) % companies.length;
    store.user.company = companies[nextIndex];
    document.getElementById("currentCompanyLabel").textContent = store.user.company;
    saveStore();
    showToast("Switched corporate entity to " + store.user.company, "info");
  }

  // View Navigation Router
  function navigateTo(viewId) {
    store.activeView = viewId;
    saveStore();

    // Close mobile sidebar if open
    const sidebar = document.getElementById("appSidebar");
    if (sidebar) sidebar.classList.remove("open");

    // Update active nav button
    document.querySelectorAll(".sidebar-nav-item").forEach(item => {
      if (item.getAttribute("data-view") === viewId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Hide all view sections
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));

    // Activate selected section
    const targetSection = document.getElementById("view-" + viewId);
    if (targetSection) {
      targetSection.classList.add("active");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderCurrentView();
  }

  function renderCurrentView() {
    updateBadges();
    switch (store.activeView) {
      case "overview":
        renderOverviewView();
        break;
      case "announcements":
        renderAnnouncements();
        break;
      case "messages":
        renderMessaging();
        break;
      case "newsroom":
        renderNewsroom();
        break;
      case "departments":
        renderDepartments();
        break;
      case "employees":
        renderEmployees();
        break;
      case "campaigns":
        renderCampaigns();
        break;
      case "calendar":
        renderCalendar();
        break;
      case "documents":
        renderDocuments();
        break;
      case "events":
        renderEvents();
        break;
      case "feedback":
        renderFeedback();
        break;
      case "tasks":
        renderTasks();
        break;
      case "analytics":
        renderAnalyticsView();
        break;
      case "reports":
        renderReports();
        break;
      case "notifications":
        renderNotifications();
        break;
      case "settings":
        // Settings are static and bound to controls
        break;
    }
  }

  function updateBadges() {
    const annCount = store.announcements.filter(a => a.status === "Published").length;
    const badgeAnn = document.getElementById("badgeAnnounceCount");
    if (badgeAnn) badgeAnn.textContent = annCount;

    const unreadMsgs = store.conversations.reduce((sum, c) => sum + (c.unread || 0), 0);
    const badgeMsg = document.getElementById("badgeMessageCount");
    if (badgeMsg) badgeMsg.textContent = unreadMsgs;

    const unreadNotifs = store.notifications.filter(n => !n.read).length;
    const badgeNotif = document.getElementById("topbarNotifBadge");
    const sidebarNotif = document.getElementById("sidebarNotifBadge");
    if (badgeNotif) badgeNotif.textContent = unreadNotifs;
    if (sidebarNotif) sidebarNotif.textContent = unreadNotifs;
  }

  // =========================================================================
  // 4. OVERVIEW DASHBOARD LOGIC & METRICS
  // =========================================================================

  function setOverviewDateFilter(range) {
    store.overviewDateFilter = range;
    saveStore();
    document.querySelectorAll("#overviewDateFilter .date-filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-range") === range);
    });
    renderOverviewView();
    showToast("Dashboard metrics adjusted for " + range.toUpperCase(), "info");
  }

  function renderOverviewView() {
    const kpiGrid = document.getElementById("overviewKpiGrid");
    if (!kpiGrid) return;

    // Multiplier for date range simulation
    let mult = store.overviewDateFilter === "today" ? 0.2 : (store.overviewDateFilter === "7d" ? 0.5 : (store.overviewDateFilter === "90d" ? 2.4 : 1.0));
    
    const kpis = [
      { title: "Active Employees", value: "2,846", trend: "+4.2%", pos: true, sub: "vs previous period", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>` },
      { title: "Announcements", value: Math.round(128 * mult), trend: "+12.0%", pos: true, sub: "100% executive approved", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 14v-3z"/></svg>`, gold: true },
      { title: "Messages Sent", value: (Math.round(18492 * mult)).toLocaleString(), trend: "+18.5%", pos: true, sub: "Across 10 departments", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
      { title: "Communication Reach", value: "94.8%", trend: "+1.4%", pos: true, sub: "All global campuses", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/></svg>`, gold: true },
      { title: "Unread Updates", value: Math.round(326 * mult), trend: "-14.2%", pos: true, sub: "Trending downward", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>` },
      { title: "Active Campaigns", value: "14", trend: "+3 launching", pos: true, sub: "Q3 priorities", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, gold: true },
      { title: "Employee Engagement", value: "87%", trend: "+3.8%", pos: true, sub: "Top tier benchmark", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
      { title: "Feedback Score", value: "92%", trend: "+2.1%", pos: true, sub: "480 responses audited", icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`, gold: true }
    ];

    kpiGrid.innerHTML = kpis.map(k => `
      <div class="kpi-card">
        <div class="kpi-top">
          <span class="kpi-title">${k.title}</span>
          <div class="kpi-icon-wrap ${k.gold ? 'gold' : ''}">${k.icon}</div>
        </div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-bottom">
          <span class="kpi-trend ${k.pos ? 'positive' : 'negative'}">${k.trend}</span>
          <span class="kpi-subtext">${k.sub}</span>
        </div>
      </div>
    `).join("");

    // Render Recent Announcements list
    const annList = document.getElementById("overviewAnnouncementsList");
    if (annList) {
      const top3 = store.announcements.slice(0, 3);
      annList.innerHTML = top3.map(a => `
        <div style="padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-md); border-left: 3px solid ${a.priority === 'Urgent' ? 'var(--status-urgent)' : 'var(--gold-500)'}; cursor: pointer;" onclick="window.CorvantaApp.openAnnouncementPreview('${a.id}')">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span class="badge ${a.priority === 'Urgent' ? 'badge-urgent' : 'badge-important'}">${a.priority}</span>
            <span style="font-size: 0.74rem; color: var(--text-muted);">${a.date}</span>
          </div>
          <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary); margin-bottom: 4px;">${a.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">${a.summary.slice(0, 110)}...</div>
        </div>
      `).join("");
    }

    // Render Upcoming Events list
    const evList = document.getElementById("overviewEventsList");
    if (evList) {
      const topEvents = store.events.slice(0, 3);
      evList.innerHTML = topEvents.map(e => `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-md);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="padding: 8px 12px; background: rgba(14, 70, 53, 0.4); border-radius: var(--radius-md); text-align: center; border: 1px solid var(--border-gold);">
              <div style="font-size: 0.7rem; font-weight: 700; color: var(--gold-400);">SEP</div>
              <div style="font-size: 1.1rem; font-weight: 800; color: #ffffff;">${e.date.split("-")[2]}</div>
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.9rem;">${e.title}</div>
              <div style="font-size: 0.76rem; color: var(--text-muted);">${e.time} • ${e.location}</div>
            </div>
          </div>
          <button class="btn btn-sm ${e.registered ? 'btn-outline-gold' : 'btn-primary'}" onclick="window.CorvantaApp.toggleEventRegistration('${e.id}')">
            ${e.registered ? 'Registered ✓' : 'Register'}
          </button>
        </div>
      `).join("");
    }

    renderOverviewCharts();
  }

  function renderOverviewCharts() {
    // 1. Line/Area Chart for Reach & Engagement
    const canvasTrend = document.getElementById("canvasReachTrend");
    if (canvasTrend) {
      drawTrendChart(canvasTrend, [88, 91, 89, 93, 92, 94, 95, 94.8], [79, 82, 81, 86, 85, 88, 87, 87]);
    }

    // 2. Channel Donut Chart
    const canvasDonut = document.getElementById("canvasChannelDonut");
    if (canvasDonut) {
      drawDonutChart(canvasDonut, [
        { label: "Internal Portal", pct: 42, color: "#10b981" },
        { label: "Direct Email", pct: 28, color: "#dfb15b" },
        { label: "Instant Messaging", pct: 18, color: "#0284c7" },
        { label: "Mobile Push", pct: 12, color: "#a855f7" }
      ]);
    }
  }

  // Canvas Trend Drawer
  function drawTrendChart(canvas, reachData, engageData) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const padLeft = 40;
    const padRight = 20;
    const padTop = 20;
    const padBottom = 30;
    const chartW = w - padLeft - padRight;
    const chartH = h - padTop - padBottom;

    // Draw Grid Lines
    ctx.strokeStyle = store.theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padTop + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(w - padRight, y);
      ctx.stroke();

      ctx.fillStyle = store.theme === "dark" ? "#8c9fa5" : "#5e726b";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText((100 - i * 10) + "%", padLeft - 6, y + 3);
    }

    function plotLine(data, strokeColor, fillColor) {
      const step = chartW / (data.length - 1);
      const points = data.map((val, idx) => {
        const x = padLeft + idx * step;
        const normalized = (val - 60) / 40; // 60% to 100%
        const y = padTop + chartH - normalized * chartH;
        return { x, y };
      });

      // Area Fill
      ctx.beginPath();
      ctx.moveTo(points[0].x, padTop + chartH);
      points.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(points[points.length - 1].x, padTop + chartH);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
      grad.addColorStop(0, fillColor);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fill();

      // Stroke
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Points
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    // Plot Reach (Emerald) & Engagement (Gold)
    plotLine(reachData, "#10b981", "rgba(16, 185, 129, 0.25)");
    plotLine(engageData, "#dfb15b", "rgba(223, 177, 91, 0.2)");
  }

  // Canvas Donut Drawer
  function drawDonutChart(canvas, segments) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const centerX = w * 0.4;
    const centerY = h * 0.5;
    const radius = Math.min(centerX, centerY) - 15;
    const innerRadius = radius * 0.58;

    let startAngle = -Math.PI / 2;
    segments.forEach(seg => {
      const slice = (seg.pct / 100) * (Math.PI * 2);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + slice);
      ctx.arc(centerX, centerY, innerRadius, startAngle + slice, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      startAngle += slice;
    });

    // Center Label
    ctx.fillStyle = store.theme === "dark" ? "#f8fafc" : "#0a110e";
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Channels", centerX, centerY + 5);

    // Legend on the Right
    const legendX = w * 0.72;
    let legendY = h * 0.25;
    segments.forEach(seg => {
      ctx.fillStyle = seg.color;
      ctx.beginPath();
      ctx.arc(legendX, legendY, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = store.theme === "dark" ? "#cbd5e1" : "#273731";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(seg.label + " (" + seg.pct + "%)", legendX + 10, legendY + 4);
      legendY += 24;
    });
  }

  // =========================================================================
  // 5. ANNOUNCEMENTS MANAGEMENT
  // =========================================================================

  function renderAnnouncements() {
    const container = document.getElementById("announcementsContainer");
    if (!container) return;

    const searchTerm = (document.getElementById("announcementSearchInput")?.value || "").toLowerCase();
    const category = document.getElementById("announcementCategoryFilter")?.value || "all";
    const priority = document.getElementById("announcementPriorityFilter")?.value || "all";
    const status = document.getElementById("announcementStatusFilter")?.value || "all";

    const filtered = store.announcements.filter(a => {
      const matchSearch = a.title.toLowerCase().includes(searchTerm) || a.summary.toLowerCase().includes(searchTerm) || a.author.toLowerCase().includes(searchTerm);
      const matchCat = category === "all" || a.category === category;
      const matchPrio = priority === "all" || a.priority === priority;
      const matchStatus = status === "all" || a.status === status;
      return matchSearch && matchCat && matchPrio && matchStatus;
    });

    const countDisplay = document.getElementById("announcementCountDisplay");
    if (countDisplay) countDisplay.textContent = `Showing ${filtered.length} of ${store.announcements.length} announcements`;

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">No announcements matched the current criteria.</div>`;
      return;
    }

    container.innerHTML = filtered.map(a => `
      <div class="announcement-card ${a.priority === 'Urgent' ? 'urgent-border' : ''}">
        <div class="announcement-top">
          <div class="announcement-meta">
            <span class="badge ${getPriorityBadgeClass(a.priority)}">${a.priority}</span>
            <span class="badge ${getStatusBadgeClass(a.status)}">${a.status}</span>
            <span>${a.category}</span>
            <span>•</span>
            <span>${a.date}</span>
          </div>
        </div>

        <div class="announcement-title">${a.title}</div>
        <div class="announcement-summary">${a.summary}</div>

        <div class="announcement-stats">
          <div class="announcement-stat-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            <span>${a.views.toLocaleString()} Views</span>
          </div>
          <div class="announcement-stat-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${a.engagement} Reach</span>
          </div>
          <div style="margin-left: auto; font-size: 0.78rem; color: var(--text-gold); font-weight: 600;">
            By ${a.author} (${a.department})
          </div>
        </div>

        <div style="display: flex; gap: 8px; margin-top: 6px; padding-top: 10px; border-top: 1px solid var(--border-subtle);">
          <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.openAnnouncementPreview('${a.id}')">Read Preview</button>
          <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.editAnnouncement('${a.id}')">Edit</button>
          ${a.status === 'Draft' ? `<button class="btn btn-primary btn-sm" onclick="window.CorvantaApp.publishAnnouncement('${a.id}')">Publish</button>` : ''}
          ${a.status === 'Published' ? `<button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.archiveAnnouncement('${a.id}')">Archive</button>` : ''}
          <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteAnnouncement('${a.id}')" title="Delete">✕</button>
        </div>
      </div>
    `).join("");
  }

  function filterAnnouncements() {
    renderAnnouncements();
  }

  function getPriorityBadgeClass(p) {
    if (p === "Urgent") return "badge-urgent";
    if (p === "Important") return "badge-important";
    return "badge-normal";
  }

  function getStatusBadgeClass(s) {
    if (s === "Published") return "badge-published";
    if (s === "Draft") return "badge-draft";
    if (s === "Scheduled") return "badge-scheduled";
    return "badge-archived";
  }

  function openCreateAnnouncementForm() {
    document.getElementById("editAnnouncementId").value = "";
    document.getElementById("announcementForm").reset();
    document.getElementById("announcementEditorHeader").textContent = "New Corporate Announcement";
    navigateTo("create-announcement");
  }

  function editAnnouncement(id) {
    const ann = store.announcements.find(a => a.id === id);
    if (!ann) return;
    document.getElementById("editAnnouncementId").value = ann.id;
    document.getElementById("annTitle").value = ann.title;
    document.getElementById("annSummary").value = ann.summary;
    document.getElementById("annContent").value = ann.content;
    document.getElementById("annCategory").value = ann.category;
    document.getElementById("annDepartment").value = ann.department;
    document.getElementById("annAudience").value = ann.audience;
    document.getElementById("annPriority").value = ann.priority;
    document.getElementById("annPublishDate").value = ann.date;
    document.getElementById("announcementEditorHeader").textContent = "Edit Announcement: " + ann.title;
    navigateTo("create-announcement");
  }

  function saveAnnouncement(desiredStatus) {
    const id = document.getElementById("editAnnouncementId").value;
    const title = document.getElementById("annTitle").value.trim();
    const summary = document.getElementById("annSummary").value.trim();
    const content = document.getElementById("annContent").value.trim();
    const category = document.getElementById("annCategory").value;
    const department = document.getElementById("annDepartment").value;
    const audience = document.getElementById("annAudience").value;
    const priority = document.getElementById("annPriority").value;
    const date = document.getElementById("annPublishDate").value || new Date().toISOString().split("T")[0];

    if (!title || !summary || !content) {
      showToast("Please fill in all mandatory fields.", "danger");
      return;
    }

    if (id) {
      // Update existing
      const existing = store.announcements.find(a => a.id === id);
      if (existing) {
        Object.assign(existing, { title, summary, content, category, department, audience, priority, date, status: desiredStatus });
        showToast("Announcement updated successfully.", "success");
      }
    } else {
      // Create new
      const newAnn = {
        id: "ann-" + Date.now(),
        title,
        summary,
        content,
        category,
        department,
        audience,
        priority,
        date,
        views: 1,
        engagement: "95.0%",
        status: desiredStatus,
        author: store.user.name
      };
      store.announcements.unshift(newAnn);
      showToast("Announcement created as " + desiredStatus + ".", "success");

      // Post automatic notification
      store.notifications.unshift({
        id: "nt-" + Date.now(),
        title: "Announcement Published",
        text: `New ${priority} announcement: ${title}`,
        time: "Just now",
        read: false,
        type: "announcement"
      });
    }

    saveStore();
    navigateTo("announcements");
  }

  function publishAnnouncement(id) {
    const ann = store.announcements.find(a => a.id === id);
    if (ann) {
      ann.status = "Published";
      saveStore();
      renderAnnouncements();
      showToast("Announcement published across all corporate channels.", "success");
    }
  }

  function archiveAnnouncement(id) {
    const ann = store.announcements.find(a => a.id === id);
    if (ann) {
      ann.status = "Archived";
      saveStore();
      renderAnnouncements();
      showToast("Announcement moved to corporate archives.", "info");
    }
  }

  function deleteAnnouncement(id) {
    if (confirm("Are you sure you want to permanently delete this announcement?")) {
      store.announcements = store.announcements.filter(a => a.id !== id);
      saveStore();
      renderAnnouncements();
      showToast("Announcement removed.", "info");
    }
  }

  function openAnnouncementPreview(id) {
    const ann = store.announcements.find(a => a.id === id);
    if (!ann) return;

    ann.views += 1;
    saveStore();

    document.getElementById("universalModalTitle").textContent = ann.title;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
        <span class="badge ${getPriorityBadgeClass(ann.priority)}">${ann.priority}</span>
        <span class="badge ${getStatusBadgeClass(ann.status)}">${ann.status}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted);">${ann.category} • ${ann.date} • ${ann.department}</span>
      </div>
      <div style="font-weight: 600; font-size: 1.05rem; color: var(--text-gold); margin-bottom: 16px; line-height: 1.5;">
        ${ann.summary}
      </div>
      <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-primary); white-space: pre-wrap; margin-bottom: 20px;">
        ${ann.content}
      </div>
      <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); font-size: 0.82rem; color: var(--text-muted); display: flex; justify-content: space-between;">
        <span>Author: <strong>${ann.author}</strong></span>
        <span>Audience: <strong>${ann.audience}</strong></span>
        <span>Audit Views: <strong>${ann.views.toLocaleString()}</strong></span>
      </div>
    `;
    openModal("universalDetailModal");
  }

  function openExecutiveReader() {
    const execAnn = store.announcements.find(a => a.category === "Executive Update") || store.announcements[0];
    openAnnouncementPreview(execAnn.id);
  }

  // =========================================================================
  // 6. MESSAGING SYSTEM
  // =========================================================================

  function renderMessaging() {
    const list = document.getElementById("chatContactList");
    if (!list) return;

    const searchTerm = (document.getElementById("searchChatInput")?.value || "").toLowerCase();
    const filtered = store.conversations.filter(c => c.contactName.toLowerCase().includes(searchTerm) || c.role.toLowerCase().includes(searchTerm));

    list.innerHTML = filtered.map(c => `
      <div class="chat-contact-item ${c.id === store.activeChatId ? 'active' : ''}" onclick="window.CorvantaApp.selectConversation('${c.id}')">
        <div class="avatar avatar-sm">
          ${c.avatar}
          ${c.online ? '<div class="avatar-status-dot"></div>' : ''}
        </div>
        <div class="chat-contact-info">
          <div class="chat-contact-name">
            <span>${c.contactName}</span>
            ${c.unread ? `<span class="nav-badge badge-gold">${c.unread}</span>` : ''}
          </div>
          <div class="chat-contact-preview">${c.messages.length ? c.messages[c.messages.length - 1].text : 'No messages'}</div>
        </div>
      </div>
    `).join("");

    renderActiveChatThread();
  }

  function selectConversation(id) {
    store.activeChatId = id;
    const c = store.conversations.find(conv => conv.id === id);
    if (c) c.unread = 0;
    saveStore();
    renderMessaging();
  }

  function filterConversations() {
    renderMessaging();
  }

  function renderActiveChatThread() {
    const c = store.conversations.find(conv => conv.id === store.activeChatId);
    if (!c) return;

    document.getElementById("activeChatAvatar").textContent = c.avatar;
    document.getElementById("activeChatName").textContent = `${c.contactName} (${c.role})`;
    document.getElementById("activeChatStatus").textContent = c.online ? `● Online • ${c.department}` : `○ Away • ${c.department}`;

    const feed = document.getElementById("chatMessageFeed");
    if (feed) {
      feed.innerHTML = c.messages.map(m => `
        <div class="chat-bubble-wrap ${m.outgoing ? 'outgoing' : 'incoming'}">
          <div class="chat-bubble">
            <div>${m.text}</div>
            <div class="chat-bubble-time">${m.time}</div>
          </div>
        </div>
      `).join("");
      feed.scrollTop = feed.scrollHeight;
    }
  }

  function sendChatMessage() {
    const input = document.getElementById("chatComposerInput");
    const text = input.value.trim();
    if (!text) return;

    const c = store.conversations.find(conv => conv.id === store.activeChatId);
    if (!c) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    c.messages.push({
      sender: "You",
      text: text,
      time: timeStr,
      outgoing: true
    });

    input.value = "";
    saveStore();
    renderActiveChatThread();

    // Intelligent simulated response
    setTimeout(() => {
      const replies = [
        "Understood Alexandra, we are on track with the deliverables.",
        "Received. I will follow up with the regional team immediately.",
        "Confirmed. Let's sync on this during the weekly leadership review.",
        "Thank you for the update. All items have been logged in the audit trail."
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      c.messages.push({
        sender: c.contactName,
        text: randomReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        outgoing: false
      });
      saveStore();
      renderActiveChatThread();
      showToast(`New message from ${c.contactName}`, "info");
    }, 1000);
  }

  function addChatEmoji(emoji) {
    const input = document.getElementById("chatComposerInput");
    input.value += emoji;
    input.focus();
  }

  function archiveCurrentConversation() {
    showToast("Conversation archived into cold storage.", "info");
  }

  function deleteCurrentConversation() {
    if (confirm("Delete this conversation thread?")) {
      store.conversations = store.conversations.filter(c => c.id !== store.activeChatId);
      if (store.conversations.length) store.activeChatId = store.conversations[0].id;
      saveStore();
      renderMessaging();
      showToast("Conversation deleted.", "info");
    }
  }

  function openNewConversationModal() {
    const name = prompt("Enter employee name or department to message:");
    if (name) {
      const newConv = {
        id: "chat-" + Date.now(),
        contactName: name,
        role: "Team Member",
        department: "General",
        avatar: name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase() || "TM",
        online: true,
        unread: 0,
        messages: [
          { sender: name, text: "Conversation initialized with " + name, time: "Just now", outgoing: false }
        ]
      };
      store.conversations.unshift(newConv);
      store.activeChatId = newConv.id;
      saveStore();
      renderMessaging();
      showToast("Started conversation with " + name, "success");
    }
  }

  // =========================================================================
  // 7. NEWSROOM
  // =========================================================================

  function renderNewsroom() {
    const container = document.getElementById("newsCardsContainer");
    if (!container) return;

    const searchTerm = (document.getElementById("newsSearchInput")?.value || "").toLowerCase();
    const cat = document.getElementById("newsCategoryFilter")?.value || "all";

    const filtered = store.news.filter(n => {
      const matchSearch = n.title.toLowerCase().includes(searchTerm) || n.summary.toLowerCase().includes(searchTerm);
      const matchCat = cat === "all" || n.category === cat;
      return matchSearch && matchCat;
    });

    container.innerHTML = filtered.map(n => `
      <div class="card">
        <div class="card-header">
          <span class="badge badge-normal">${n.category}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${n.date}</span>
        </div>
        <div class="card-body">
          <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 8px;">${n.title}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">${n.summary}</div>
          <div style="font-size: 0.75rem; color: var(--text-gold); font-weight: 600;">Source: ${n.source} • ${n.readTime}</div>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.readNewsStory('${n.id}')">Read Article</button>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.shareItem('${n.title}')">Share</button>
            <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.showToast('Article saved to bookmarks.', 'success')">Save</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  function filterNews() {
    renderNewsroom();
  }

  function readNewsStory(id) {
    const item = store.news.find(n => n.id === id);
    if (!item) return;

    document.getElementById("universalModalTitle").textContent = item.title;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="font-size: 0.82rem; color: var(--text-gold); margin-bottom: 12px;">${item.category} • Published ${item.date} • ${item.source}</div>
      <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 16px;">${item.summary}</div>
      <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">${item.content}</div>
    `;
    openModal("universalDetailModal");
  }

  function openSubmitNewsModal() {
    const title = prompt("Enter headline for news story:");
    if (title) {
      store.news.unshift({
        id: "news-" + Date.now(),
        title: title,
        category: "Company Stories",
        date: new Date().toISOString().split("T")[0],
        source: "Corvanta Media Desk",
        readTime: "3 min read",
        summary: "Internal company announcement prepared for corporate newsroom release.",
        content: "Drafted by Corporate Communications editorial desk. Submitted for executive signoff."
      });
      saveStore();
      renderNewsroom();
      showToast("Story submitted to newsroom editor.", "success");
    }
  }

  // =========================================================================
  // 8. DEPARTMENTS & EMPLOYEES DIRECTORY
  // =========================================================================

  function renderDepartments() {
    const container = document.getElementById("departmentCardsContainer");
    if (!container) return;

    container.innerHTML = store.departments.map(d => `
      <div class="dept-card">
        <div class="dept-header">
          <div class="dept-title">${d.name}</div>
          <span class="badge badge-published">Active Hub</span>
        </div>
        <div style="font-size: 0.84rem; color: var(--text-gold);">Head of Department: <strong>${d.manager}</strong></div>

        <div class="dept-stats-row">
          <div>
            <div class="dept-stat-num">${d.employees}</div>
            <div class="dept-stat-label">Employees</div>
          </div>
          <div>
            <div class="dept-stat-num">${d.projects}</div>
            <div class="dept-stat-label">Projects</div>
          </div>
          <div>
            <div class="dept-stat-num">${d.announcements}</div>
            <div class="dept-stat-label">Comms</div>
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 4px;">
            <span>Communication Health</span>
            <strong>${d.performance}%</strong>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill ${d.performance > 95 ? 'emerald' : ''}" style="width: ${d.performance}%;"></div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; margin-top: auto;">
          <button class="btn btn-outline-gold btn-sm" style="flex: 1;" onclick="window.CorvantaApp.viewDepartmentDetails('${d.id}')">View Roster</button>
          <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.addEmployeeToDepartment('${d.name}')">+ Add</button>
        </div>
      </div>
    `).join("");
  }

  function viewDepartmentDetails(id) {
    const d = store.departments.find(dep => dep.id === id);
    if (!d) return;
    document.getElementById("universalModalTitle").textContent = `${d.name} Department Overview`;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="font-size: 0.95rem; margin-bottom: 16px;">
        Headquartered under <strong>${d.manager}</strong>, managing <strong>${d.employees} full-time personnel</strong> across international hubs.
      </div>
      <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-md); display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>Active Projects: <strong>${d.projects}</strong></div>
        <div>Total Bulletins: <strong>${d.announcements}</strong></div>
        <div>Response Rating: <strong>${d.performance}%</strong></div>
        <div>Governance Status: <strong style="color: var(--emerald-400);">Certified Compliant</strong></div>
      </div>
    `;
    openModal("universalDetailModal");
  }

  function addEmployeeToDepartment(deptName) {
    const name = prompt(`Enter employee name to assign to ${deptName}:`);
    if (name) {
      store.employees.unshift({
        id: "emp-" + Date.now(),
        name,
        role: "Associate",
        department: deptName,
        location: "Global Office",
        email: `${name.toLowerCase().replace(" ", ".")}@corvanta.com`,
        phone: "+1 555 0100",
        status: "Active",
        skills: ["Strategy", "Communications"]
      });
      const d = store.departments.find(dep => dep.name === deptName);
      if (d) d.employees += 1;
      saveStore();
      renderDepartments();
      showToast(`Added ${name} to ${deptName}`, "success");
    }
  }

  function openDepartmentModal() {
    const name = prompt("Enter new department name:");
    if (name) {
      store.departments.push({
        id: "dept-" + Date.now(),
        name,
        manager: store.user.name,
        employees: 1,
        projects: 1,
        announcements: 0,
        performance: 92
      });
      saveStore();
      renderDepartments();
      showToast(`Created ${name} department.`, "success");
    }
  }

  function renderEmployees() {
    const container = document.getElementById("employeeCardsContainer");
    if (!container) return;

    const searchTerm = (document.getElementById("employeeSearchInput")?.value || "").toLowerCase();
    const dept = document.getElementById("employeeDeptFilter")?.value || "all";
    const status = document.getElementById("employeeStatusFilter")?.value || "all";

    const filtered = store.employees.filter(e => {
      const matchSearch = e.name.toLowerCase().includes(searchTerm) || e.role.toLowerCase().includes(searchTerm) || e.email.toLowerCase().includes(searchTerm);
      const matchDept = dept === "all" || e.department === dept;
      const matchStatus = status === "all" || e.status === status;
      return matchSearch && matchDept && matchStatus;
    });

    const countDisplay = document.getElementById("employeeCountDisplay");
    if (countDisplay) countDisplay.textContent = `Showing ${filtered.length} of ${store.employees.length} employees`;

    container.innerHTML = filtered.map(e => `
      <div class="employee-card">
        <div class="avatar avatar-lg">
          ${e.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          <div class="avatar-status-dot" style="background: ${e.status === 'Active' ? 'var(--status-success)' : (e.status === 'In Meeting' ? 'var(--status-warning)' : 'var(--text-muted)')}"></div>
        </div>
        <div class="employee-name">${e.name}</div>
        <div class="employee-role">${e.role}</div>
        <div class="employee-dept">${e.department} • ${e.location}</div>

        <div class="employee-skills">
          ${e.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
        </div>

        <div class="employee-actions">
          <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.viewEmployeeProfile('${e.id}')">Profile</button>
          <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.messageEmployee('${e.name}')">Message</button>
          <a href="mailto:${e.email}" class="btn btn-outline btn-sm" title="Send Email">✉</a>
          <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteEmployee('${e.id}')">✕</button>
        </div>
      </div>
    `).join("");
  }

  function filterEmployees() {
    renderEmployees();
  }

  function viewEmployeeProfile(id) {
    const e = store.employees.find(emp => emp.id === id);
    if (!e) return;
    document.getElementById("universalModalTitle").textContent = e.name;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div class="avatar avatar-lg" style="margin: 0 auto 12px auto;">
          ${e.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div style="font-size: 1.2rem; font-weight: 700;">${e.name}</div>
        <div style="color: var(--text-gold); font-weight: 600;">${e.role}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${e.department} • ${e.location}</div>
      </div>
      <div style="background: var(--bg-subtle); padding: 16px; border-radius: var(--radius-md); font-size: 0.88rem; display: flex; flex-direction: column; gap: 8px;">
        <div><strong>Email:</strong> ${e.email}</div>
        <div><strong>Phone:</strong> ${e.phone}</div>
        <div><strong>Status:</strong> ${e.status}</div>
        <div><strong>Specializations:</strong> ${e.skills.join(", ")}</div>
      </div>
    `;
    openModal("universalDetailModal");
  }

  function messageEmployee(name) {
    navigateTo("messages");
    const existing = store.conversations.find(c => c.contactName === name);
    if (existing) {
      selectConversation(existing.id);
    } else {
      openNewConversationModal();
    }
  }

  function deleteEmployee(id) {
    if (confirm("Remove employee from corporate directory?")) {
      store.employees = store.employees.filter(e => e.id !== id);
      saveStore();
      renderEmployees();
      showToast("Employee removed from directory.", "info");
    }
  }

  function openAddEmployeeModal() {
    const name = prompt("Enter full name of new employee:");
    if (name) {
      const role = prompt("Enter role/title:") || "Communications Specialist";
      const dept = prompt("Enter department (Executive, HR, IT, Marketing, Finance, etc.):") || "Marketing";
      store.employees.unshift({
        id: "emp-" + Date.now(),
        name,
        role,
        department: dept,
        location: "Global Office",
        email: `${name.toLowerCase().replace(" ", ".")}@corvanta.com`,
        phone: "+1 555 0199",
        status: "Active",
        skills: ["Communications", "Collaboration"]
      });
      saveStore();
      renderEmployees();
      showToast(`Added ${name} to directory.`, "success");
    }
  }

  // =========================================================================
  // 9. CAMPAIGNS & CALENDAR
  // =========================================================================

  function renderCampaigns() {
    const container = document.getElementById("campaignsContainer");
    if (!container) return;

    container.innerHTML = store.campaigns.map(c => `
      <div class="campaign-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-weight: 700; font-size: 1.12rem; color: var(--text-primary);">${c.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">Owner: ${c.owner} • ${c.startDate} to ${c.endDate}</div>
          </div>
          <span class="badge ${c.status === 'Active' ? 'badge-published' : (c.status === 'Completed' ? 'badge-draft' : 'badge-important')}">${c.status}</span>
        </div>

        <div style="font-size: 0.86rem; color: var(--text-secondary);">${c.objective}</div>

        <div class="campaign-metrics-row">
          <div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--emerald-400);">${c.reach}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">Reach</div>
          </div>
          <div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--gold-400);">${c.openRate}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">Open Rate</div>
          </div>
          <div>
            <div style="font-size: 1.1rem; font-weight: 800; color: #38bdf8;">${c.engagement}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">Engaged</div>
          </div>
          <div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary);">${c.completion}%</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">Progress</div>
          </div>
        </div>

        <div class="progress-bar-wrap">
          <div class="progress-bar-fill emerald" style="width: ${c.completion}%;"></div>
        </div>

        <div style="display: flex; gap: 8px; margin-top: auto;">
          <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.toggleCampaignStatus('${c.id}')">${c.status === 'Active' ? 'Pause' : 'Resume'}</button>
          <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.duplicateCampaign('${c.id}')">Duplicate</button>
          <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteCampaign('${c.id}')">Delete</button>
        </div>
      </div>
    `).join("");
  }

  function toggleCampaignStatus(id) {
    const c = store.campaigns.find(cmp => cmp.id === id);
    if (c) {
      c.status = c.status === "Active" ? "Paused" : "Active";
      saveStore();
      renderCampaigns();
      showToast(`Campaign status set to ${c.status}.`, "info");
    }
  }

  function duplicateCampaign(id) {
    const c = store.campaigns.find(cmp => cmp.id === id);
    if (c) {
      const copy = Object.assign({}, c, {
        id: "cmp-" + Date.now(),
        name: c.name + " (Copy)",
        status: "Planning",
        completion: 0
      });
      store.campaigns.push(copy);
      saveStore();
      renderCampaigns();
      showToast("Campaign duplicated as Planning draft.", "success");
    }
  }

  function deleteCampaign(id) {
    if (confirm("Delete campaign?")) {
      store.campaigns = store.campaigns.filter(c => c.id !== id);
      saveStore();
      renderCampaigns();
      showToast("Campaign deleted.", "info");
    }
  }

  function openCreateCampaignModal() {
    const name = prompt("Enter Campaign Name:");
    if (name) {
      const obj = prompt("Enter Campaign Objective:") || "Drive alignment across regional units.";
      store.campaigns.unshift({
        id: "cmp-" + Date.now(),
        name,
        objective: obj,
        audience: "All Global Employees",
        channel: "Internal Portal & Email",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2026-10-31",
        owner: store.user.name,
        status: "Active",
        reach: "92.0%",
        openRate: "88.0%",
        engagement: "84.0%",
        completion: 10
      });
      saveStore();
      renderCampaigns();
      showToast("New campaign launched successfully.", "success");
    }
  }

  // Calendar
  function setCalendarView(mode) {
    store.calendarViewMode = mode;
    saveStore();
    document.getElementById("btnCalMonthView")?.classList.toggle("active", mode === "month");
    document.getElementById("btnCalAgendaView")?.classList.toggle("active", mode === "agenda");
    document.getElementById("calendarMonthWrapper").style.display = mode === "month" ? "block" : "none";
    document.getElementById("calendarAgendaWrapper").style.display = mode === "agenda" ? "block" : "none";
    renderCalendar();
  }

  function prevCalendarMonth() {
    store.calendarMonth.setMonth(store.calendarMonth.getMonth() - 1);
    renderCalendar();
  }

  function nextCalendarMonth() {
    store.calendarMonth.setMonth(store.calendarMonth.getMonth() + 1);
    renderCalendar();
  }

  function todayCalendarMonth() {
    store.calendarMonth = new Date(2026, 8, 1);
    renderCalendar();
  }

  function renderCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const title = document.getElementById("calendarMonthTitle");
    if (title) title.textContent = `${monthNames[store.calendarMonth.getMonth()]} ${store.calendarMonth.getFullYear()}`;

    if (store.calendarViewMode === "month") {
      const grid = document.getElementById("calendarGridContainer");
      if (!grid) return;

      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let html = daysOfWeek.map(d => `<div class="calendar-day-head">${d}</div>`).join("");

      const year = store.calendarMonth.getFullYear();
      const month = store.calendarMonth.getMonth();
      const firstDayIndex = new Date(year, month, 1).getDay();
      const totalDays = new Date(year, month + 1, 0).getDate();

      // Blank prefix cells
      for (let i = 0; i < firstDayIndex; i++) {
        html += `<div class="calendar-day-cell" style="opacity: 0.3;"></div>`;
      }

      // Days of the month
      for (let d = 1; d <= totalDays; d++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dayEvents = store.events.filter(e => e.date === dateStr);
        const isToday = d === 11 && month === 8 && year === 2026;

        html += `
          <div class="calendar-day-cell ${isToday ? 'today' : ''}" onclick="window.CorvantaApp.handleDayClick('${dateStr}')">
            <div class="calendar-day-num">${d}</div>
            ${dayEvents.map(ev => `
              <div class="calendar-event-tag ${ev.type}" title="${ev.title}">
                ${ev.title}
              </div>
            `).join("")}
          </div>
        `;
      }

      grid.innerHTML = html;
    } else {
      // Agenda View
      const list = document.getElementById("calendarAgendaList");
      if (list) {
        list.innerHTML = store.events.map(ev => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md);">
            <div>
              <span class="badge ${ev.type === 'urgent' ? 'badge-urgent' : 'badge-normal'}">${ev.type}</span>
              <div style="font-weight: 700; font-size: 1rem; margin: 4px 0;">${ev.title}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${ev.date} at ${ev.time} • ${ev.location} • Organized by ${ev.organizer}</div>
            </div>
            <button class="btn btn-sm ${ev.registered ? 'btn-outline-gold' : 'btn-primary'}" onclick="window.CorvantaApp.toggleEventRegistration('${ev.id}')">
              ${ev.registered ? 'Registered ✓' : 'Register'}
            </button>
          </div>
        `).join("");
      }
    }
  }

  function handleDayClick(dateStr) {
    const dayEvents = store.events.filter(e => e.date === dateStr);
    if (dayEvents.length) {
      showToast(`${dayEvents.length} event(s) scheduled for ${dateStr}`, "info");
    } else {
      if (confirm(`No events on ${dateStr}. Create an event on this day?`)) {
        openAddEventModal(dateStr);
      }
    }
  }

  function openAddEventModal(presetDate) {
    const title = prompt("Enter event title:");
    if (title) {
      const date = presetDate || prompt("Enter date (YYYY-MM-DD):", "2026-09-20");
      store.events.push({
        id: "ev-" + Date.now(),
        title,
        date,
        time: "14:00 GMT",
        location: "Virtual Room A",
        type: "meeting",
        organizer: store.user.name,
        attendees: 1,
        registered: true
      });
      saveStore();
      renderCalendar();
      showToast(`Scheduled: ${title}`, "success");
    }
  }

  function toggleEventRegistration(id) {
    const ev = store.events.find(e => e.id === id);
    if (ev) {
      ev.registered = !ev.registered;
      ev.attendees += ev.registered ? 1 : -1;
      saveStore();
      renderCalendar();
      if (store.activeView === "events") renderEvents();
      if (store.activeView === "overview") renderOverviewView();
      showToast(ev.registered ? `RSVP confirmed for ${ev.title}` : `RSVP canceled for ${ev.title}`, "info");
    }
  }

  // =========================================================================
  // 10. DOCUMENT CENTER
  // =========================================================================

  function renderDocuments() {
    const tbody = document.getElementById("documentTableBody");
    if (!tbody) return;

    const searchTerm = (document.getElementById("documentSearchInput")?.value || "").toLowerCase();
    const cat = document.getElementById("documentCategoryFilter")?.value || "all";

    const filtered = store.documents.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(searchTerm) || d.department.toLowerCase().includes(searchTerm);
      const matchCat = cat === "all" || d.category === cat;
      return matchSearch && matchCat;
    });

    tbody.innerHTML = filtered.map(d => `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="padding: 4px 8px; border-radius: var(--radius-sm); font-weight: 700; font-size: 0.72rem; background: var(--bg-subtle); color: var(--gold-400); border: 1px solid var(--border-gold);">
              ${d.type}
            </div>
            <strong>${d.name}</strong>
          </div>
        </td>
        <td><span class="badge badge-normal">${d.category}</span></td>
        <td>${d.department}</td>
        <td>${d.owner}</td>
        <td>${d.updated}</td>
        <td>${d.size}</td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.viewDocument('${d.id}')">View</button>
            <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.downloadDocument('${d.id}')">Download</button>
            <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.renameDocument('${d.id}')">Rename</button>
            <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteDocument('${d.id}')">✕</button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  function filterDocuments() {
    renderDocuments();
  }

  function viewDocument(id) {
    const doc = store.documents.find(d => d.id === id);
    if (!doc) return;
    document.getElementById("universalModalTitle").textContent = doc.name;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 16px;">
        Category: <strong>${doc.category}</strong> • Department: <strong>${doc.department}</strong> • Managed by: <strong>${doc.owner}</strong> • Size: <strong>${doc.size}</strong>
      </div>
      <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">
        [Simulated Document Content: Official Enterprise Record]
        <br><br>
        This document represents an authorized release from Corvanta Corporate Communications and Governance. All provisions adhere to enterprise protocol 2026-B.
      </div>
    `;
    openModal("universalDetailModal");
  }

  function downloadDocument(id) {
    const doc = store.documents.find(d => d.id === id);
    if (!doc) return;

    // Trigger genuine client-side Blob download
    const content = `CORVANTA ENTERPRISE ARCHIVE\nTitle: ${doc.name}\nDepartment: ${doc.department}\nOwner: ${doc.owner}\nGenerated: ${new Date().toISOString()}\nStatus: Verified`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = doc.name.replace(/\.[^/.]+$/, "") + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Downloaded: ${doc.name}`, "success");
  }

  function renameDocument(id) {
    const doc = store.documents.find(d => d.id === id);
    if (!doc) return;
    const newName = prompt("Enter new document filename:", doc.name);
    if (newName && newName.trim()) {
      doc.name = newName.trim();
      saveStore();
      renderDocuments();
      showToast("Document renamed.", "info");
    }
  }

  function deleteDocument(id) {
    if (confirm("Delete this document from archive?")) {
      store.documents = store.documents.filter(d => d.id !== id);
      saveStore();
      renderDocuments();
      showToast("Document deleted.", "info");
    }
  }

  function openUploadDocumentModal() {
    const name = prompt("Enter document filename (e.g. Q3_Executive_Brief.pdf):");
    if (name) {
      store.documents.unshift({
        id: "doc-" + Date.now(),
        name,
        type: name.split(".").pop().toUpperCase() || "PDF",
        category: "Company Resources",
        department: "Executive",
        owner: store.user.name,
        updated: new Date().toISOString().split("T")[0],
        size: "2.1 MB",
        status: "Active"
      });
      saveStore();
      renderDocuments();
      showToast(`Uploaded: ${name}`, "success");
    }
  }

  // =========================================================================
  // 11. EVENTS VIEW
  // =========================================================================

  function renderEvents() {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = store.events.map(ev => `
      <div class="card">
        <div class="card-header">
          <span class="badge ${ev.type === 'urgent' ? 'badge-urgent' : 'badge-normal'}">${ev.type}</span>
          <span style="font-size: 0.8rem; color: var(--text-gold); font-weight: 700;">${ev.date}</span>
        </div>
        <div class="card-body">
          <div style="font-size: 1.1rem; font-weight: 700; margin-bottom: 6px;">${ev.title}</div>
          <div style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px;">${ev.time} • ${ev.location}</div>
          <div style="font-size: 0.82rem; color: var(--text-secondary);">Organized by <strong>${ev.organizer}</strong> • <strong>${ev.attendees.toLocaleString()}</strong> Registered Attendees</div>
        </div>
        <div class="card-footer">
          <button class="btn btn-sm ${ev.registered ? 'btn-outline-gold' : 'btn-primary'}" onclick="window.CorvantaApp.toggleEventRegistration('${ev.id}')">
            ${ev.registered ? 'Registered ✓' : 'Register Now'}
          </button>
          <button class="btn btn-outline btn-sm" onclick="window.CorvantaApp.shareItem('${ev.title}')">Share Link</button>
        </div>
      </div>
    `).join("");
  }

  // =========================================================================
  // 12. FEEDBACK CENTER
  // =========================================================================

  function renderFeedback() {
    const container = document.getElementById("feedbackListContainer");
    if (!container) return;

    const filterStatus = document.getElementById("feedbackStatusFilter")?.value || "all";
    const filtered = store.feedback.filter(f => filterStatus === "all" || f.status === filterStatus);

    container.innerHTML = filtered.map(f => `
      <div style="padding: 16px; background: var(--bg-subtle); border-radius: var(--radius-md); border-left: 3px solid ${getFeedbackBorderColor(f.status)};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span class="badge badge-normal">${f.category}</span>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${f.department} • ${f.date}</span>
          </div>
          <select class="filter-select" style="padding: 3px 8px; font-size: 0.76rem;" onchange="window.CorvantaApp.updateFeedbackStatus('${f.id}', this.value)">
            <option value="New" ${f.status === 'New' ? 'selected' : ''}>New</option>
            <option value="Under Review" ${f.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
            <option value="In Progress" ${f.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option value="Resolved" ${f.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
          </select>
        </div>
        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">${f.subject}</div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4;">${f.message}</div>
        <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-gold);">Submitted by ${f.author}</div>
      </div>
    `).join("");
  }

  function filterFeedback() {
    renderFeedback();
  }

  function getFeedbackBorderColor(s) {
    if (s === "Resolved") return "var(--status-success)";
    if (s === "In Progress") return "var(--gold-500)";
    if (s === "Under Review") return "var(--status-info)";
    return "var(--border-strong)";
  }

  function updateFeedbackStatus(id, newStatus) {
    const f = store.feedback.find(item => item.id === id);
    if (f) {
      f.status = newStatus;
      saveStore();
      showToast(`Feedback marked as ${newStatus}.`, "info");
    }
  }

  function submitFeedbackInline() {
    const category = document.getElementById("feedCategory").value;
    const subject = document.getElementById("feedSubject").value.trim();
    const department = document.getElementById("feedDepartment").value;
    const message = document.getElementById("feedMessage").value.trim();

    if (!subject || !message) return;

    store.feedback.unshift({
      id: "fb-" + Date.now(),
      category,
      subject,
      department,
      message,
      priority: "Normal",
      status: "New",
      author: store.user.name,
      date: new Date().toISOString().split("T")[0]
    });

    document.getElementById("inlineFeedbackForm").reset();
    saveStore();
    renderFeedback();
    showToast("Feedback submitted to leadership.", "success");
  }

  function openSubmitFeedbackModal() {
    navigateTo("feedback");
    document.getElementById("feedSubject")?.focus();
  }

  // =========================================================================
  // 13. TASK MANAGEMENT (KANBAN)
  // =========================================================================

  function renderTasks() {
    const cols = {
      Todo: document.getElementById("kanbanCardsTodo"),
      InProgress: document.getElementById("kanbanCardsInProgress"),
      Review: document.getElementById("kanbanCardsReview"),
      Completed: document.getElementById("kanbanCardsCompleted")
    };

    const counts = {
      Todo: document.getElementById("countColTodo"),
      InProgress: document.getElementById("countColInProgress"),
      Review: document.getElementById("countColReview"),
      Completed: document.getElementById("countColCompleted")
    };

    Object.keys(cols).forEach(k => {
      if (cols[k]) cols[k].innerHTML = "";
      if (counts[k]) counts[k].textContent = "0";
    });

    store.tasks.forEach(t => {
      const col = cols[t.status];
      if (!col) return;

      const card = document.createElement("div");
      card.className = "kanban-task-card";
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="badge ${t.priority === 'Urgent' ? 'badge-urgent' : 'badge-normal'}">${t.priority}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">${t.department}</span>
        </div>
        <div class="task-title">${t.title}</div>
        <div class="task-meta">
          <span>Assignee: <strong>${t.assignee}</strong></span>
          <span>Due: ${t.dueDate}</span>
        </div>
        <div style="display: flex; justify-content: space-between; gap: 6px; margin-top: 6px; border-top: 1px solid var(--border-subtle); padding-top: 8px;">
          <button class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 3px 8px;" onclick="window.CorvantaApp.advanceTask('${t.id}')">
            ${t.status === 'Completed' ? 'Reopen' : 'Advance →'}
          </button>
          <button class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 3px 8px; color: var(--status-danger);" onclick="window.CorvantaApp.deleteTask('${t.id}')">✕</button>
        </div>
      `;
      col.appendChild(card);
    });

    Object.keys(cols).forEach(k => {
      const count = store.tasks.filter(t => t.status === k).length;
      if (counts[k]) counts[k].textContent = count;
    });
  }

  function advanceTask(id) {
    const stages = ["Todo", "InProgress", "Review", "Completed"];
    const t = store.tasks.find(task => task.id === id);
    if (!t) return;
    const nextIdx = (stages.indexOf(t.status) + 1) % stages.length;
    t.status = stages[nextIdx];
    saveStore();
    renderTasks();
    showToast(`Task moved to ${t.status}`, "info");
  }

  function deleteTask(id) {
    if (confirm("Delete this communication task?")) {
      store.tasks = store.tasks.filter(t => t.id !== id);
      saveStore();
      renderTasks();
      showToast("Task deleted.", "info");
    }
  }

  function openAddTaskModal() {
    const title = prompt("Enter task title:");
    if (title) {
      store.tasks.unshift({
        id: "tsk-" + Date.now(),
        title,
        department: "Marketing",
        assignee: store.user.name,
        priority: "High",
        dueDate: "2026-09-22",
        status: "Todo"
      });
      saveStore();
      renderTasks();
      showToast("New task created.", "success");
    }
  }

  // =========================================================================
  // 14. ANALYTICS & CHARTS
  // =========================================================================

  function setAnalyticsDateFilter(range) {
    store.analyticsDateFilter = range;
    saveStore();
    document.querySelectorAll("#analyticsDateFilter .date-filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-range") === range);
    });
    renderAnalyticsView();
    showToast("Analytics recalculated for " + range.toUpperCase(), "info");
  }

  function renderAnalyticsView() {
    renderAnalyticsCharts();
  }

  function renderAnalyticsCharts() {
    // 1. Department Bar Chart
    const canvasBar = document.getElementById("canvasDeptBar");
    if (canvasBar) {
      drawBarChart(canvasBar, [
        { label: "Eng", val: 112 },
        { label: "IT", val: 98 },
        { label: "Mkt", val: 88 },
        { label: "HR", val: 76 },
        { label: "Sales", val: 64 },
        { label: "Ops", val: 52 },
        { label: "CS", val: 45 },
        { label: "Exec", val: 42 }
      ]);
    }

    // 2. Interactive Area Trend
    const canvasArea = document.getElementById("canvasAreaTrend");
    if (canvasArea) {
      drawAreaChart(canvasArea, [70, 75, 82, 85, 89, 92, 94, 96]);
    }
  }

  function drawBarChart(canvas, data) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const padLeft = 40;
    const padRight = 20;
    const padTop = 20;
    const padBottom = 35;
    const chartW = w - padLeft - padRight;
    const chartH = h - padTop - padBottom;
    const barW = chartW / (data.length * 1.6);
    const maxVal = 120;

    data.forEach((item, idx) => {
      const x = padLeft + idx * (chartW / data.length) + (chartW / data.length - barW) / 2;
      const barH = (item.val / maxVal) * chartH;
      const y = padTop + chartH - barH;

      // Bar gradient
      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0, "#dfb15b");
      grad.addColorStop(1, "#0a3427");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      ctx.fill();

      // Label
      ctx.fillStyle = store.theme === "dark" ? "#8c9fa5" : "#5e726b";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.label, x + barW / 2, h - 12);
      ctx.fillText(item.val, x + barW / 2, y - 5);
    });
  }

  function drawAreaChart(canvas, data) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const padLeft = 40;
    const padRight = 20;
    const padTop = 20;
    const padBottom = 30;
    const chartW = w - padLeft - padRight;
    const chartH = h - padTop - padBottom;

    const step = chartW / (data.length - 1);
    const points = data.map((val, idx) => {
      const x = padLeft + idx * step;
      const normalized = (val - 50) / 50;
      const y = padTop + chartH - normalized * chartH;
      return { x, y };
    });

    // Area
    ctx.beginPath();
    ctx.moveTo(points[0].x, padTop + chartH);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    grad.addColorStop(0, "rgba(223, 177, 91, 0.4)");
    grad.addColorStop(1, "rgba(16, 185, 129, 0.05)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.strokeStyle = "#dfb15b";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  // =========================================================================
  // 15. REPORTS CENTER & BLOB DOWNLOADS
  // =========================================================================

  function renderReports() {
    const container = document.getElementById("reportsGridContainer");
    if (!container) return;

    container.innerHTML = store.reports.map(r => `
      <div class="card">
        <div class="card-header">
          <span class="badge badge-normal">${r.type}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${r.size}</span>
        </div>
        <div class="card-body">
          <div style="font-size: 1.1rem; font-weight: 700; margin-bottom: 8px;">${r.title}</div>
          <div style="font-size: 0.84rem; color: var(--text-muted);">Compiled by <strong>${r.author}</strong> on ${r.generated}</div>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.previewReport('${r.id}')">Preview</button>
          <button class="btn btn-primary btn-sm" onclick="window.CorvantaApp.downloadReportCSV('${r.id}')">Download CSV</button>
          <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteReport('${r.id}')">✕</button>
        </div>
      </div>
    `).join("");
  }

  function previewReport(id) {
    const r = store.reports.find(rep => rep.id === id);
    if (!r) return;
    document.getElementById("universalModalTitle").textContent = r.title;
    document.getElementById("universalModalBody").innerHTML = `
      <div style="font-size: 0.9rem; line-height: 1.6;">
        <p><strong>Executive Summary:</strong> Verified compliance audit for international leadership board.</p>
        <p><strong>Metric Breakdown:</strong> Communication Saturation: 94.8% | Executive Memos: 128 | Engagement: 87%</p>
        <pre style="background: var(--bg-subtle); padding: 12px; border-radius: var(--radius-md); font-family: monospace; font-size: 0.8rem; margin-top: 12px;">
Date, Metric, Target, Achieved, Variance
2026-09-01, Global Reach, 90%, 94.8%, +4.8%
2026-09-05, Message Rate, 15000, 18492, +23.2%
2026-09-10, Feedback Score, 85%, 92.0%, +7.0%
        </pre>
      </div>
    `;
    openModal("universalDetailModal");
  }

  function downloadReportCSV(id) {
    const r = store.reports.find(rep => rep.id === id);
    if (!r) return;

    const csvContent = `Report Title,${r.title}\nReport Type,${r.type}\nAuthor,${r.author}\nDate,${r.generated}\n\nMetric,Target,Audited Value\nCommunication Reach,90%,94.8%\nEmployee Engagement,80%,87.0%\nAnnouncement Bulletins,100,128\nOverall Health Index,85%,92.4%`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = r.title.replace(/\s+/g, "_") + ".csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Downloaded CSV report: " + r.title, "success");
  }

  function deleteReport(id) {
    if (confirm("Delete this executive report?")) {
      store.reports = store.reports.filter(r => r.id !== id);
      saveStore();
      renderReports();
      showToast("Report deleted.", "info");
    }
  }

  function openGenerateReportModal() {
    const title = prompt("Enter report name:");
    if (title) {
      store.reports.unshift({
        id: "rep-" + Date.now(),
        title,
        type: "Communication Performance",
        generated: new Date().toISOString().split("T")[0],
        author: store.user.name,
        size: "2.8 MB"
      });
      saveStore();
      renderReports();
      showToast("Generated new audit report.", "success");
    }
  }

  // =========================================================================
  // 16. NOTIFICATIONS CENTER
  // =========================================================================

  function renderNotifications() {
    const container = document.getElementById("notificationsListContainer");
    if (!container) return;

    container.innerHTML = store.notifications.map(n => `
      <div style="padding: 14px 18px; background: ${n.read ? 'var(--bg-subtle)' : 'rgba(14, 70, 53, 0.3)'}; border-radius: var(--radius-md); border-left: 3px solid ${n.read ? 'var(--border-subtle)' : 'var(--gold-500)'}; display: flex; align-items: center; justify-content: space-between; gap: 14px;">
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 2px;">${n.title}</div>
          <div style="font-size: 0.84rem; color: var(--text-secondary);">${n.text}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">${n.time}</div>
        </div>
        <div style="display: flex; gap: 8px;">
          ${!n.read ? `<button class="btn btn-outline-gold btn-sm" onclick="window.CorvantaApp.markNotificationRead('${n.id}')">Mark Read</button>` : ''}
          <button class="btn btn-outline btn-sm" style="color: var(--status-danger);" onclick="window.CorvantaApp.deleteNotification('${n.id}')">✕</button>
        </div>
      </div>
    `).join("");
  }

  function markNotificationRead(id) {
    const n = store.notifications.find(notif => notif.id === id);
    if (n) {
      n.read = true;
      saveStore();
      renderNotifications();
      updateBadges();
    }
  }

  function markAllNotificationsRead() {
    store.notifications.forEach(n => n.read = true);
    saveStore();
    renderNotifications();
    updateBadges();
    showToast("All notifications marked as read.", "info");
  }

  function deleteNotification(id) {
    store.notifications = store.notifications.filter(n => n.id !== id);
    saveStore();
    renderNotifications();
    updateBadges();
  }

  // =========================================================================
  // 17. GLOBAL SEARCH SYSTEM
  // =========================================================================

  function openSearchModal() {
    openModal("globalSearchModal");
    const input = document.getElementById("globalSearchModalInput");
    if (input) {
      input.value = "";
      input.focus();
    }
    performGlobalSearch();
  }

  function performGlobalSearch() {
    const query = (document.getElementById("globalSearchModalInput")?.value || "").toLowerCase().trim();
    const resultsContainer = document.getElementById("globalSearchResults");
    if (!resultsContainer) return;

    if (!query) {
      resultsContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">Type anything to instantly search across announcements, employees, campaigns, documents, and news...</div>`;
      return;
    }

    const matches = [];

    // Search Announcements
    store.announcements.forEach(a => {
      if (a.title.toLowerCase().includes(query) || a.summary.toLowerCase().includes(query)) {
        matches.push({ type: "Announcement", title: a.title, sub: `${a.category} • ${a.date}`, action: () => { closeModal('globalSearchModal'); navigateTo('announcements'); openAnnouncementPreview(a.id); } });
      }
    });

    // Search Employees
    store.employees.forEach(e => {
      if (e.name.toLowerCase().includes(query) || e.role.toLowerCase().includes(query) || e.department.toLowerCase().includes(query)) {
        matches.push({ type: "Employee", title: e.name, sub: `${e.role} (${e.department})`, action: () => { closeModal('globalSearchModal'); navigateTo('employees'); viewEmployeeProfile(e.id); } });
      }
    });

    // Search Campaigns
    store.campaigns.forEach(c => {
      if (c.name.toLowerCase().includes(query) || c.objective.toLowerCase().includes(query)) {
        matches.push({ type: "Campaign", title: c.name, sub: `${c.status} • Owner: ${c.owner}`, action: () => { closeModal('globalSearchModal'); navigateTo('campaigns'); } });
      }
    });

    // Search Documents
    store.documents.forEach(d => {
      if (d.name.toLowerCase().includes(query) || d.department.toLowerCase().includes(query)) {
        matches.push({ type: "Document", title: d.name, sub: `${d.category} • ${d.size}`, action: () => { closeModal('globalSearchModal'); navigateTo('documents'); viewDocument(d.id); } });
      }
    });

    // Search Events
    store.events.forEach(ev => {
      if (ev.title.toLowerCase().includes(query) || ev.location.toLowerCase().includes(query)) {
        matches.push({ type: "Event", title: ev.title, sub: `${ev.date} • ${ev.location}`, action: () => { closeModal('globalSearchModal'); navigateTo('events'); } });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--text-muted);">No records found matching "${query}".</div>`;
      return;
    }

    resultsContainer.innerHTML = matches.slice(0, 8).map((m, idx) => `
      <div class="search-result-item" onclick="window.CorvantaApp.executeSearchAction(${idx})">
        <span class="search-result-type-badge">${m.type}</span>
        <div style="flex: 1;">
          <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary);">${m.title}</div>
          <div style="font-size: 0.76rem; color: var(--text-muted);">${m.sub}</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `).join("");

    window._lastSearchMatches = matches;
  }

  function executeSearchAction(index) {
    if (window._lastSearchMatches && window._lastSearchMatches[index]) {
      window._lastSearchMatches[index].action();
    }
  }

  // =========================================================================
  // 18. QUICK CREATE & MODAL UTILITIES
  // =========================================================================

  function openQuickCreateModal() {
    openModal("quickCreateModal");
  }

  function triggerQuickAction(action) {
    closeModal("quickCreateModal");
    switch (action) {
      case "announcement":
        openCreateAnnouncementForm();
        break;
      case "message":
        openNewConversationModal();
        break;
      case "campaign":
        openCreateCampaignModal();
        break;
      case "event":
        openAddEventModal();
        break;
      case "task":
        openAddTaskModal();
        break;
      case "feedback":
        openSubmitFeedbackModal();
        break;
      case "document":
        openUploadDocumentModal();
        break;
    }
  }

  function openProfileModal() {
    openModal("profileModal");
  }

  function openHelpModal() {
    openModal("helpModal");
  }

  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("open");
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("open");
  }

  function shareItem(title) {
    navigator.clipboard?.writeText(window.location.href);
    showToast(`Link to "${title}" copied to clipboard.`, "success");
  }

  function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type === 'success' ? 'toast-success' : (type === 'danger' ? 'toast-danger' : '')}`;
    toast.innerHTML = `
      <div style="flex: 1;">${message}</div>
      <button style="color: var(--text-muted); cursor: pointer;" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(20px)";
        setTimeout(() => toast.remove(), 300);
      }
    }, 3800);
  }

  function resetDemoData() {
    if (confirm("Reset all portal records to original demo state?")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  }

  function saveSettings() {
    showToast("Preferences saved to local workspace.", "success");
  }

  // Keyboard Navigation & Shortcuts
  function initGlobalListeners() {
    document.addEventListener("keydown", function (e) {
      // ESC closes open modals
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
      }
      // Ctrl + K or Cmd + K opens global search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
    });

    // Close modal on backdrop click
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
      backdrop.addEventListener("click", function (e) {
        if (e.target === this) {
          this.classList.remove("open");
        }
      });
    });
  }

  // =========================================================================
  // 19. EXPORT PUBLIC API TO WINDOW
  // =========================================================================

  window.CorvantaApp = {
    loginWithCredentials,
    enterDemoWorkspace,
    logout,
    navigateTo,
    toggleTheme,
    toggleDensity,
    toggleSidebarCollapse,
    toggleMobileSidebar,
    cycleCompanyContext,
    setOverviewDateFilter,
    setAnalyticsDateFilter,
    filterAnnouncements,
    openCreateAnnouncementForm,
    editAnnouncement,
    saveAnnouncement,
    publishAnnouncement,
    archiveAnnouncement,
    deleteAnnouncement,
    openAnnouncementPreview,
    openExecutiveReader,
    selectConversation,
    filterConversations,
    sendChatMessage,
    addChatEmoji,
    archiveCurrentConversation,
    deleteCurrentConversation,
    openNewConversationModal,
    filterNews,
    readNewsStory,
    openSubmitNewsModal,
    viewDepartmentDetails,
    addEmployeeToDepartment,
    openDepartmentModal,
    filterEmployees,
    viewEmployeeProfile,
    messageEmployee,
    deleteEmployee,
    openAddEmployeeModal,
    toggleCampaignStatus,
    duplicateCampaign,
    deleteCampaign,
    openCreateCampaignModal,
    setCalendarView,
    prevCalendarMonth,
    nextCalendarMonth,
    todayCalendarMonth,
    handleDayClick,
    openAddEventModal,
    toggleEventRegistration,
    filterDocuments,
    viewDocument,
    downloadDocument,
    renameDocument,
    deleteDocument,
    openUploadDocumentModal,
    filterFeedback,
    updateFeedbackStatus,
    submitFeedbackInline,
    openSubmitFeedbackModal,
    advanceTask,
    deleteTask,
    openAddTaskModal,
    previewReport,
    downloadReportCSV,
    deleteReport,
    openGenerateReportModal,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    openSearchModal,
    performGlobalSearch,
    executeSearchAction,
    openQuickCreateModal,
    triggerQuickAction,
    openProfileModal,
    openHelpModal,
    closeModal,
    shareItem,
    showToast,
    resetDemoData,
    saveSettings
  };

})();
