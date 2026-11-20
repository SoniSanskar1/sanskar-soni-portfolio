const projects = [
  {
    "id": "survey",
    "title": "Multi-tenant Survey SaaS",
    "category": "cloud",
    "type": "PRODUCTION EXPERIENCE",
    "visual": "survey",
    "status": "CKP Software Technologies · Nov 2025–Oct 2026",
    "description": "A research platform built to handle the work behind every response.",
    "metric": "2–3 min → ~10s CSV exports",
    "stack": [
      "Python / Django REST",
      "PostgreSQL",
      "Azure"
    ],
    "what": [
      "Built and supported a production market-research SaaS for survey authoring, respondent qualification, panel management, incentives, analytics and exports. My work covered secured backend APIs, data-heavy workflows, cloud deployment and production troubleshooting."
    ],
    "how": [
      "Implemented 30+ Django REST APIs with tenant-scoped PostgreSQL access. Authentication, OTP, role permissions, licensing and device binding ran on the server, keeping authorization independent of frontend filtering and protecting data across survey, panelist and reporting workflows.",
      "Moved long-running publishing, update and export tasks to Azure Functions and Service Bus. Added correlation IDs, idempotency, retries, failure logging and dead-letter handling. Tuned queries and workloads, maintained GitHub Actions releases, and investigated PostgreSQL, Redis and Azure incidents."
    ],
    "outcome": [
      "The platform served 100+ active users. Panel processing grew from 15–20 to approximately 5,000 members. A 500-response CSV export fell from 2–3 minutes to about 10 seconds: roughly 12–18× faster, or 92–94% less waiting, calculated from the reported range.",
      "These are results reported in my resumes, rather than independently reproduced benchmarks. They demonstrate increased processing capacity and shorter waits. I also extended a pharmacy inventory product with stock imports, vendor and purchase workflows, transaction records and API integration; no measured business impact is available for that work."
    ],
    "flow": [
      "Tenant-scoped API",
      "PostgreSQL / Redis",
      "Service Bus",
      "Azure Functions"
    ],
    "evidence": "Supplied resumes, plus GitHub requirements and survey route structure. Employer source code and customer data are not reproduced.",
    "source": "assets/Sanskar_Soni_Backend_Cloud_Engineer.pdf",
    "sourceLabel": "Read the supporting resume"
  },
  {
    "id": "gloria",
    "title": "Gloria POS Offline",
    "category": "systems",
    "type": "OFFLINE ANDROID APPLICATION",
    "visual": "pos",
    "status": "pos_release · fully offline Android · local package v1.0.30",
    "description": "On-device billing, inventory and hotel operations. Built to work without the network.",
    "metric": "Offline Android billing · no runtime backend required",
    "stack": [
      "React / TypeScript",
      "Capacitor Android",
      "SQLite / sql.js"
    ],
    "what": [
      "Built a fully offline Android POS for restaurant and hotel operations. The pos_release app packages billing, kitchen tickets, room service, inventory, bill history and GST-ready receipts with local business logic and an on-device database."
    ],
    "how": [
      "Packaged the React and TypeScript UI with Capacitor 7. A local TypeScript API handles day-to-day operations instead of calling a hosted server, while SQLite through sql.js persists records in app storage. Dedicated modules cover taxes, receipts, role access, kitchen tickets and stock reversals.",
      "Integrated BLE / USB ESC/POS thermal printing with PDF fallback. Stock movements connect inventory to billing, and a GitHub Releases updater separates optional update downloads from offline use. This is the pos_release implementation; the earlier Spring Boot/PostgreSQL Gloria web application is separate architectural history."
    ],
    "outcome": [
      "The offline release runs its UI, business logic and database inside the APK, removing the runtime dependency on a hosted backend for day-to-day billing. The inspected package is version 1.0.30. Existing releases document iterative delivery across inventory, kitchen tickets, room billing and printing.",
      "This is a concrete architectural outcome rather than a claim about sales growth or time savings. No independently measured transaction volume, deployment count or outage reduction is available. Data lives in application storage, so clearing app data removes local records; the case study does not imply cloud backup is complete."
    ],
    "flow": [
      "React interface",
      "Local TypeScript API",
      "SQLite on device",
      "ESC/POS / PDF"
    ],
    "evidence": "pos_release README, package v1.0.30, Android packaging, local API modules and release notes. This primary case study focuses on the offline app."
  },
  {
    "id": "cloudboard",
    "title": "CloudBoard",
    "category": "cloud",
    "type": "CROSS-DEVICE PRODUCT",
    "visual": "tools",
    "image": "assets/cloudboard-dashboard.webp",
    "imageAlt": "CloudBoard dashboard rendered from the actual component with sample clipboard records.",
    "status": "Cross-device clipboard V1 · public GitHub source reviewed",
    "description": "A private clipboard spanning desktop, mobile and the web.",
    "metric": "Device pairing · encrypted storage · bounded retention",
    "stack": [
      "Next.js / Electron",
      "Turso / Drizzle",
      "PWA / Shortcuts"
    ],
    "what": [
      "Built a cross-device clipboard for text, URLs and images across Windows, iPhone Shortcuts, Android / PWA and the web. A shared Next.js application provides the API and dashboard, with Turso used for database and blob storage."
    ],
    "how": [
      "Clients communicate over HTTPS with device tokens. Drizzle and libSQL provide persistence, and payloads are encrypted with AES-256-GCM before storage. Text and URLs expire after 24 hours, images after two hours, with images limited to 3 MiB. The server retains the decryption key.",
      "Used adaptive polling from 3–60 seconds to fit serverless hosting constraints instead of permanent WebSockets. Electron supplies the Windows client; iPhone uses user-run Shortcuts. Android browser clipboard operations depend on user gestures and permission. The README documents these platform limits rather than promising universal background clipboard access."
    ],
    "outcome": [
      "The repository contains a shared web/API architecture and clients designed for four access paths. Expiry windows make retention behavior explicit, while one database and blob store keep the personal-use deployment focused. The implementation demonstrates cross-platform integration with deliberate compromises around serverless delivery and mobile operating-system restrictions.",
      "This is application-layer encryption, not zero-knowledge end-to-end encryption, because the server can decrypt payloads. No sync-latency benchmark, active-device count or adoption metric is available. The portfolio reports configured behavior and architecture, without suggesting every platform was revalidated during this research or claiming production-grade security assurance."
    ],
    "flow": [
      "Device-token client",
      "Next.js HTTPS API",
      "AES-256-GCM",
      "Turso / libSQL"
    ],
    "evidence": "GitHub README, web dashboard and Windows UI components. Screens are rendered from those components with sample data; the live landing page returned HTTP 200 during research.",
    "source": "https://cloudboard-desktop-rxqf.vercel.app",
    "sourceLabel": "Open CloudBoard"
  },
  {
    "id": "ai-resume",
    "title": "AI Resume Builder",
    "category": "ai",
    "type": "APPLIED AI / FULL STACK",
    "visual": "ai-resume",
    "status": "Public GitHub implementation · master branch reviewed",
    "description": "Structured career data, saved resumes, and an AI refinement conversation.",
    "metric": "JWT login → resume persistence → Mistral chat",
    "stack": [
      "Java / Spring Boot",
      "React / Material UI",
      "Mistral / PostgreSQL"
    ],
    "what": [
      "Built a full-stack resume application combining account access, structured profile entry, resume persistence and an AI chat assistant. Users supply their career details and iterate on wording with Mistral through a conversational interface."
    ],
    "how": [
      "The GitHub implementation uses Java 17, Spring Boot, Spring Security, JWT and Spring Data JPA with PostgreSQL. React, React Router, Axios and Material UI provide login, signup, resume creation and AI chat screens. Backend services map authenticated form submissions into persistent resume records.",
      "The chat module sends conversation history to Mistral Chat Completions and appends assistant replies to the conversation. The current GitHub branch uses the mistral-small identifier. Local experiments include richer resume styling and export, but those are not presented as verified behavior of the current public branch."
    ],
    "outcome": [
      "The public repository implements an account-to-resume-to-chat flow, connecting standard business-application engineering with a generative AI interface. Resume data is structured and persisted, while the assistant supports iterative text refinement. This demonstrates practical LLM integration alongside authentication, relational modeling, REST APIs and a React frontend.",
      "No ATS-score gain, hiring improvement, active-user count or response-quality benchmark has been verified. The current AI request originates in the browser; moving the provider credential behind a server-side boundary is an identified production-hardening step. This is an application prototype, with source evidence rather than a claim of production AI maturity."
    ],
    "flow": [
      "React form + JWT",
      "Spring Boot / JPA",
      "PostgreSQL resume",
      "Mistral chat refinement"
    ],
    "evidence": "GitHub master README, AIChat.js and mistral.js; local Java controllers and frontend inspected to identify version differences.",
    "source": "https://github.com/SoniSanskar1/Ai-Resume-Builder",
    "sourceLabel": "Explore GitHub source"
  },
  {
    "id": "repopilot",
    "title": "RepoPilot",
    "category": "cloud",
    "type": "EVENT-DRIVEN AUTOMATION",
    "visual": "automation",
    "status": "Assessment project · implementation present; live runtime not reverified",
    "description": "GitHub events turned into traceable, reliable actions.",
    "metric": "Signed ingestion · durable jobs · guarded retries",
    "stack": [
      "Next.js / TypeScript",
      "Supabase / PostgreSQL",
      "GitHub App"
    ],
    "what": [
      "Built an automation dashboard where users connect GitHub repositories and define rules for newly opened issues and pull requests. Matching events can apply labels, notify Slack and optionally generate a Gemini summary, with a history of actions."
    ],
    "how": [
      "Used a Next.js modular monolith with Supabase Auth, GitHub OAuth and GitHub App installation access. The webhook boundary verifies signatures and allowlists events before duplicate-safe ingestion. Drizzle and PostgreSQL persist events and jobs, while tenant-scoped queries protect dashboard history.",
      "Supabase Cron invokes durable processing. Versioned rules drive idempotent GitHub label actions, safe Slack notifications and guarded retries. Optional AI enrichment happens after successful actions. Domain logic stays in internal modules, and Vitest files cover webhook signatures, transaction behavior, input validation and related boundaries."
    ],
    "outcome": [
      "The repository contains the complete event-to-action path: connection, signed ingestion, persistent processing, rules and execution history. Durable jobs and idempotent actions make retries explainable and reduce dependence on one request staying alive. Failed actions remain visible so the user can inspect and retry them.",
      "The README records a deployed application URL. Availability and external integrations were not reverified for this portfolio, and no throughput, adoption or failure-rate benchmark is claimed. The demonstrated result is an implemented automation workflow with explicit security and reliability boundaries, rather than a quantified production-scale operating record."
    ],
    "flow": [
      "GitHub webhook",
      "Verified event + job",
      "Scheduled worker",
      "Labels / Slack / AI"
    ],
    "evidence": "RepoPilot README, architecture documentation, package metadata and webhook / rules source modules.",
    "source": "https://github-automation-bot-drab.vercel.app/",
    "sourceLabel": "Visit recorded deployment"
  },
  {
    "id": "erp",
    "title": "College Portal ERP",
    "category": "systems",
    "type": "INTERNSHIP EXPERIENCE",
    "visual": "erp",
    "status": "CKP Software Technologies · Jul–Oct 2025",
    "description": "Role-based academic operations connected through secured APIs.",
    "metric": "20+ REST APIs · four role-based workflows",
    "stack": [
      "Java / Spring Boot",
      "Next.js / React",
      "PostgreSQL / Flyway"
    ],
    "what": [
      "Built a College ERP during my internship, connecting administrator, faculty, student and parent workflows. The platform covers academic administration through role-specific interfaces, secured backend services and a PostgreSQL data model shared across the application."
    ],
    "how": [
      "Used Java, Spring Boot, Spring Security and JPA for layered controller, service, repository, DTO and model boundaries. JWT authentication and role-gated routes enforce stateless access. Flyway handles schema migrations, while PostgreSQL supports connected administrative and academic records behind the API layer.",
      "The reviewed Codex project summary identifies a Next.js / React TypeScript frontend with Axios integration. Documented modules include admissions, attendance, timetables, exams and marks, fees, library, hostel and transport. The internship work connected database modeling, backend endpoints and frontend workflows rather than treating each layer separately."
    ],
    "outcome": [
      "The resumes report 20+ secured REST APIs and workflows for four user groups. This establishes a delivered API surface and breadth of role-based integration. The project review also identifies examination and marks interfaces, demonstrating how administrative records connect to visible academic workflows through the frontend.",
      "No verified institution-wide rollout, student count, uptime record or improvement in administrative processing time is available. I do not turn module coverage into an unsupported adoption claim. Evidence here comes from the supplied resumes and an earlier code-based Codex summary; the employer application itself is not published through this portfolio."
    ],
    "flow": [
      "Role-based frontend",
      "JWT / Spring Security",
      "Domain services",
      "PostgreSQL + Flyway"
    ],
    "evidence": "Supplied resumes and the Codex chat “Summarize project work and stack”, which reviewed the original project."
  },
  {
    "id": "commerce",
    "title": "Hyperlocal Commerce",
    "category": "systems",
    "type": "IN DEVELOPMENT",
    "visual": "commerce",
    "status": "Backend foundation implemented · checkout and payments being designed",
    "description": "An API-first commerce backend with correctness at its core.",
    "metric": "Validation, migrations and integration-test foundation",
    "stack": [
      "Java 21 / Spring Boot 3",
      "PostgreSQL / Redis",
      "Testcontainers"
    ],
    "what": [
      "Developing a modular commerce backend for merchant catalogs, commerce and fulfilment. The current work establishes API contracts and persistence foundations before expanding transaction-sensitive operations such as checkout, payment handling and delivery assignment."
    ],
    "how": [
      "The resume describes a Java 21 / Spring Boot 3 modular monolith backed by PostgreSQL and Redis. Implemented foundations include request validation, structured error contracts, correlation-ID logging, JPA models and Flyway migrations, keeping the database and API contract explicit during development.",
      "Testcontainers integration tests support database-backed checks. Transaction-safe checkout, payment and refund idempotency, and concurrency-safe delivery assignment remain design work. Kafka and outbox events are planned rather than production-deployed. The architecture keeps module boundaries visible without claiming independent distributed services have already shipped."
    ],
    "outcome": [
      "The delivered scope is a backend foundation: API validation, consistent errors, traceable requests, persistence models, migrations and integration-testing infrastructure. This gives subsequent commerce workflows a defined starting point. It is useful engineering progress, but it does not establish a completed marketplace or a functioning payment integration.",
      "No orders, merchant adoption, payment success rate or production performance measurement is available. The portfolio therefore reports implemented scope instead of invented commercial impact. The distinction between current code and planned behavior is central to this case study. Source evidence is the resume description; the complete commerce repository was not available among the registered local projects."
    ],
    "flow": [
      "Validated request",
      "Module service",
      "JPA / Flyway",
      "PostgreSQL"
    ],
    "evidence": "Backend, Java and Python resumes. Project is explicitly described there as in development."
  },
  {
    "id": "menu",
    "title": "Gloria Digital Menu",
    "category": "systems",
    "type": "CUSTOMER-FACING WEB",
    "visual": "menu",
    "status": "Standalone restaurant and bar menu · repository reviewed",
    "description": "A searchable hospitality menu that keeps the content easy to maintain.",
    "metric": "Shared data model · categories · price options",
    "stack": [
      "HTML / CSS",
      "Vanilla JavaScript",
      "Structured menu data"
    ],
    "what": [
      "Built a standalone digital menu for Gloria Family Hotel & Restaurant. Visitors browse restaurant and bar content, switch categories and search items, while structured menu data keeps names, images and price options separate from the interface."
    ],
    "how": [
      "Kept the experience in HTML, CSS and vanilla JavaScript, with menu records in a dedicated data file. Restaurant and bar data share rendering logic. The source handles category selection, search, configurable price options, image presentation and URL parameters for selecting the menu context.",
      "Content updates remain focused on the data model instead of duplicating markup for every item. The responsive page uses a recognizable hospitality identity and customer contact links. Repository history and Codex tasks show repeated menu additions and price corrections as the catalog changed over time."
    ],
    "outcome": [
      "The implementation provides one customer-facing browsing experience across category and price-option data. Subsequent updates can change menu content independently of core rendering behavior. The repository and recent tasks establish continued content maintenance; the portfolio distinguishes this public-facing menu from the separate billing and inventory applications.",
      "No verified visitor count, conversion uplift, order volume or maintenance-time measurement is available. Those outcomes are not inferred from the existence of a deployed project. The demonstrated result is an implemented, searchable menu with structured content and repeatable updates. Its source can be inspected through the linked repository."
    ],
    "flow": [
      "Structured menu data",
      "Shared renderer",
      "Category + search",
      "Responsive menu"
    ],
    "evidence": "Menu HTML, app.js, menu-data.js, Git origin and recent Codex maintenance tasks.",
    "source": "https://github.com/SoniSanskar1/gloria-menu-site",
    "sourceLabel": "Explore repository"
  },
  {
    "id": "taskflow",
    "title": "TaskFlow",
    "category": "systems",
    "type": "WORKFLOW ASSESSMENT",
    "visual": "taskflow",
    "status": "Correctness-first task/workflow implementation",
    "description": "Small workflows, explicit invariants, and a trail of every change.",
    "metric": "3-state workflow · audit trail · optimistic locking",
    "stack": [
      "Python / Flask",
      "SQLAlchemy",
      "React"
    ],
    "what": [
      "Built a compact project and task application with a strict workflow: TODO, IN_PROGRESS and DONE. The implementation focuses on valid transitions, write safety and an audit trail, rather than broad project-management features or an authentication layer."
    ],
    "how": [
      "Used Flask, SQLAlchemy and Alembic for the backend, with a React frontend. Each successful transition creates a TaskEvent. Optimistic locking through Task.version protects updates, and stable error contracts explain invalid transitions. Deleting a project is blocked while any task remains unfinished.",
      "The scope is intentionally explicit: authentication, assignees, search and tags are outside this assessment. The finite-state workflow makes business rules inspectable and provides a foundation for future states. Repository dependencies include Pytest and Vitest to support backend and frontend checks without claiming a particular coverage result here."
    ],
    "outcome": [
      "The delivered workflow has three defined states, audit records for successful changes, a version-based concurrency mechanism and a project-deletion invariant. These are concrete correctness properties represented in the implementation. The case demonstrates how a small system can model rules and failure responses clearly without requiring a complex service topology.",
      "No team adoption, task-volume benchmark or defect-reduction measurement is available. Repository copies exist, so this portfolio treats TaskFlow as one project rather than counting duplicate checkouts as separate achievements. Tests were not rerun during portfolio research; the outcome describes implemented behavior and its intended boundaries, not a new verification claim."
    ],
    "flow": [
      "React client",
      "Flask validation",
      "State transition + event",
      "Versioned SQL record"
    ],
    "evidence": "TaskFlow assessment README, backend requirements and frontend package metadata."
  },
  {
    "id": "last-cure",
    "title": "Patient Zero: The Last Cure",
    "category": "creative",
    "type": "PLAYABLE DEVELOPMENT CHAPTER",
    "visual": "game",
    "image": "assets/patient-zero.webp",
    "imageAlt": "Actual development screenshot of Patient Zero showing the hospital street and first-person combat.",
    "status": "Desktop browser prototype · production-quality work remains",
    "description": "A connected survival-horror chapter, built for the browser.",
    "metric": "Playable route from arrival to helicopter extraction",
    "stack": [
      "React / TypeScript",
      "Three.js / R3F",
      "3D asset pipeline"
    ],
    "what": [
      "Built a connected desktop browser survival-horror chapter from hospital arrival to rooftop extraction."
    ],
    "how": [
      "React, TypeScript and React Three Fiber connect mission progression, first-person combat and cinematics. A documented asset pipeline prepares licensed character models and animations; prerecorded dialogue works without a live TTS service."
    ],
    "outcome": [
      "A playable development route reaches a victory screen. Repository scenario checks cover progression and reset behavior. It remains a stylized prototype; natural-play balancing and production-quality art are unfinished. No verified live deployment was found."
    ],
    "flow": [
      "Player input",
      "Simulation + mission state",
      "Three.js scene",
      "HUD / dialogue / audio"
    ],
    "evidence": "Project README, source structure, takeover verification and an actual local development screenshot."
  }
];

const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function illustration(p) {
  if(p.image) return `<img src="${p.image}" alt="${p.imageAlt}" loading="lazy" width="960" height="540">`;
  const top = '<div class="ill-top"><i></i><i></i><i></i><span>'+escapeHTML(p.title)+'</span></div>';
  const content = {
    'ai-resume':'<span class="ill-caption">CAREER DATA / AI REFINEMENT</span><div class="ill-big">Your story. Refined.</div><div class="line-flow"><span>Profile</span><i></i><span>Resume</span><i></i><span>AI chat</span></div><span class="flow-status">Spring Boot × Mistral</span>',
    survey:'<span class="ill-caption">EXPORT PIPELINE / OPTIMIZED</span><div class="ill-big">180s <span style="color:#74876b">/</span> 10s</div><div class="ill-bars"><b></b><b></b><b></b><b></b><b></b></div>',
    pos:'<span class="ill-caption">GLORIA / OPERATIONS</span><div class="ill-row"><span>Restaurant billing</span><strong>LOCAL</strong></div><div class="ill-row"><span>Room folios</span><strong>READY</strong></div><div class="ill-row"><span>Inventory ledger</span><strong>ON DEVICE</strong></div><div class="ill-row"><span>Thermal receipts</span><strong>ESC/POS</strong></div>',
    automation:'<span class="ill-caption">EVENT → VERIFIED → PROCESSED</span><div class="line-flow"><span>GitHub</span><i></i><span>Worker</span><i></i><span>Actions</span></div><div class="ill-row"><span>Signature verification</span><strong>✓</strong></div><div class="ill-row"><span>Duplicate-safe ingestion</span><strong>✓</strong></div><span class="flow-status">Durable by design.</span>',
    menu:'<span class="ill-caption">FAMILY HOTEL & RESTAURANT</span><div class="ill-big">GLORIA</div><div class="ill-row"><span>Food</span><strong>Explore</strong></div><div class="ill-row"><span>Bar</span><strong>Discover</strong></div><div class="ill-row"><span>Rooms</span><strong>Unwind</strong></div>',
    erp:'<span class="ill-caption">COLLEGE PORTAL / ROLE ACCESS</span><div class="ill-big">One campus.</div><div class="line-flow"><span>Admin</span><span>Faculty</span><span>Student</span><span>Parent</span></div><span class="flow-status">20+ secured APIs</span>',
    commerce:'<span class="ill-caption">COMMERCE / FOUNDATION</span><span class="code-line"><em>@Valid</em> CheckoutRequest</span><span class="code-line">catalog · inventory · fulfilment</span><div class="ill-row"><span>API contracts</span><strong>IMPLEMENTED</strong></div><div class="ill-row"><span>Payment idempotency</span><strong>DESIGNING</strong></div>',
    containment:'<span class="ill-caption">CONTAINMENT / WAVE DIRECTOR</span><div class="ill-big">SURVIVE. EXTRACT.</div><div class="line-flow"><span>WAVE 1</span><i></i><span>WAVE 5</span></div><span class="flow-status">Infection · AI · extraction</span>',
    tools:'<span class="ill-caption">CLOUDBOARD / DEVICE SYNC</span><div class="line-flow"><span>Desktop</span><i></i><span>Cloud</span><i></i><span>Mobile</span></div><div class="ill-row"><span>Text / URLs</span><strong>24h</strong></div><div class="ill-row"><span>Images</span><strong>2h</strong></div>',
    history:'<span class="ill-caption">AGENT PROMPT HISTORY</span><span class="code-line"><em>agents/</em></span><span class="code-line">  Codex / project / session</span><span class="code-line">  Claude / project / session</span><div class="ill-row"><span>Index once. Find again.</span><strong>LOCAL</strong></div>',
    taskflow:'<span class="ill-caption">WORKFLOW / VALID TRANSITIONS</span><div class="line-flow"><span>TODO</span><i></i><span>IN PROGRESS</span><i></i><span>DONE</span></div><div class="ill-row"><span>Task.version</span><strong>LOCKED</strong></div><div class="ill-row"><span>TaskEvent</span><strong>RECORDED</strong></div>',
    redis:'<span class="ill-caption">CHAT API / EVENT STREAM</span><div class="ill-big">Publish. Subscribe.</div><div class="line-flow"><span>Spring</span><i></i><span>Redis</span><i></i><span>SSE</span></div><span class="flow-status">Room-based messaging</span>'
  }[p.visual];
  return `<div class="illustration" aria-hidden="true">${top}<div class="ill-content">${content||''}</div></div>`;
}
const container = $('#projects');
container.innerHTML = projects.map(p=>`<article class="project reveal" data-category="${p.category}" data-project="${p.id}"><div class="project-visual ${p.visual}"><span class="project-type">${p.type}</span>${illustration(p)}</div><div class="project-body"><div class="project-heading"><h3>${p.title}</h3></div><p class="project-description">${p.description}</p><div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div><p class="project-metric">${p.metric}</p><div class="project-bottom"><button class="project-button" type="button" data-case="${p.id}" aria-haspopup="dialog" aria-label="Read case study: ${p.title}">Behind the build</button><small>${projects.indexOf(p)<6?'FEATURED':'MORE WORK'}</small></div></div></article>`).join('');

let filter='all', expanded=false;
const moreButton=document.createElement('button');
moreButton.type='button'; moreButton.className='button outline';moreButton.style.cssText='display:block;margin:35px auto 0';container.after(moreButton);
function filterProjects(){
  const matching=projects.filter(p=>filter==='all'||p.category===filter||(filter==='ai'&&p.id==='repopilot'));
  const visible=expanded?matching:matching.slice(0,6);
  document.querySelectorAll('[data-project]').forEach(card=>{card.hidden=!visible.some(p=>p.id===card.dataset.project);});
  moreButton.hidden=matching.length<=6;
  moreButton.style.display=matching.length>6?'block':'none';
  moreButton.textContent=expanded?'Show selected work':`Explore ${matching.length-6} more projects`;
  $('#project-count').textContent=`Showing ${visible.length} of ${matching.length} projects`;
}
moreButton.addEventListener('click',()=>{expanded=!expanded;filterProjects();if(!expanded)$('#work').scrollIntoView({behavior:motionPaused?'instant':'smooth'});});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;expanded=false;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});filterProjects();}));
filterProjects();

const dialog=$('#case-dialog');let dialogTrigger;
function closeDialog(){dialog.close();}
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const p=projects.find(p=>p.id===button.dataset.case);dialogTrigger=button;
  $('#case-content').innerHTML=`<div class="case-head"><span class="case-status">${p.status}</span><h2 id="case-title">${p.title}</h2><p>${p.description}</p><div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div></div><div class="case-layout">${[['What I built','20%',p.what],['How I built it','40%',p.how],['Outcomes & evidence','40%',p.outcome]].map(([title,weight,paras])=>`<section class="case-column"><h3><small>${weight} / THE STORY</small>${title}</h3>${paras.map(t=>`<p>${escapeHTML(t)}</p>`).join('')}</section>`).join('')}</div><div class="case-architecture"><span>ARCHITECTURE AT A GLANCE</span><div class="architecture-flow">${p.flow.map((s,i)=>(i?'<i aria-hidden="true">→</i>':'')+`<b>${s}</b>`).join('')}</div></div><div class="case-foot"><p><strong>Evidence:</strong> ${escapeHTML(p.evidence)}</p><p>Diagrams and interface miniatures are explanatory illustrations. Screenshots, where included, are actual development captures.</p>${p.source?`<a class="button outline" href="${p.source}" target="_blank" rel="noopener noreferrer">${p.sourceLabel}</a>`:''}</div>`;
  dialog.showModal();document.body.classList.add('dialog-open');dialog.scrollTop=0;
}));
$('#close-case').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogTrigger?.focus({preventScroll:true});});

const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');let motionPaused=motionQuery.matches;
function updateMotion(){document.documentElement.classList.toggle('motion-paused',motionPaused);const button=$('.motion-toggle');button.setAttribute('aria-pressed',String(motionPaused));button.setAttribute('aria-label',motionPaused?'Enable decorative motion':'Pause decorative motion');button.querySelector('span').textContent=motionPaused?'off':'on';const svg=$('.system-lines');motionPaused?svg.pauseAnimations?.():svg.unpauseAnimations?.();}
$('.motion-toggle').addEventListener('click',()=>{motionPaused=!motionPaused;updateMotion();});
motionQuery.addEventListener('change',event=>{motionPaused=event.matches;updateMotion();});updateMotion();
if(!motionPaused&&'IntersectionObserver' in window) document.documentElement.classList.add('js-motion');
const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(element=>revealObserver?.observe(element));
let ticking=false;function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;$('.progress').style.width=`${max>0?scrollY/max*100:0}%`;ticking=false;}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true;}},{passive:true});updateProgress();
$('#replay').addEventListener('click',()=>{document.querySelectorAll('.bar').forEach(bar=>{bar.style.animation='none';void bar.offsetWidth;bar.style.animation='';});});
$('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('sanskar.soni369@gmail.com');$('#copy-status').textContent='Email copied to clipboard.';}catch{$('#copy-status').textContent='Select and copy the email address above.';}});
$('#year').textContent=new Date().getFullYear();

document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>{const desktop=button.dataset.screen==='desktop';$('#cloudboard-screen').src=desktop?'assets/cloudboard-desktop.webp':'assets/cloudboard-dashboard.webp';$('#cloudboard-screen').alt=desktop?'CloudBoard Windows component with a sample desktop bridge: sync controls and DPAPI credential handling.':'CloudBoard dashboard component showing sample clipboard history, pairing and device management.';$('#screen-name').textContent=desktop?'CloudBoard / Windows companion':'CloudBoard / Web dashboard';$('#screen-caption').textContent=desktop?'Actual Windows component rendered from project source with an inert sample bridge. No live device is connected.':'Actual component rendered from project source, using illustrative sample records. No private clipboard data.';document.querySelectorAll('[data-screen]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});}));
