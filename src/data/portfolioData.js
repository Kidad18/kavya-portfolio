export const personalInfo = {
  name: "Kavya Chalichemala",
  title: "AI & Data Science Specialist",
  tagline: "Bridging Artificial Intelligence, Geospatial Analytics & Intelligent Systems",
  phone: "+91 9492371705",
  email: "chalichemalakavya@gmail.com",
  location: "Chennai / Tirupati, India",
  summary:
    "Computer Science undergraduate specializing in Artificial Intelligence and Data Science with hands-on experience in predictive modeling, deep learning, business intelligence, and real-world engineering. Proven track record across prestigious research internships at ISRO (NRSC) developing the KRITHI interactive robot, and engineering enterprise data pipelines at Aruvixa Tech Solutions Private Limited across environmental, geospatial, and mission-critical domains.",
  photo: "/kavya.jpg",
  stats: [
    { label: "Academic CGPA", value: "8.7", subtext: "Vel Tech AI & DS" },
    { label: "Degradation Gain", value: "90%", subtext: "EcoByte AI System" },
    { label: "Core Domains", value: "4+", subtext: "AI, GIS, IoT & BI" },
    { label: "Certifications", value: "3+", subtext: "Tata, GL, Elevate" },
  ],
  socials: [
    { name: "Email", icon: "Mail", url: "mailto:chalichemalakavya@gmail.com" },
    { name: "Phone", icon: "Phone", url: "tel:+919492371705" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "GitHub", icon: "Github", url: "https://github.com" },
  ]
};

export const experiencesRoadmap = [
  {
    id: "isro",
    company: "ISRO - National Remote Sensing Centre (NRSC)",
    role: "Research Intern - AI & Robotics",
    period: "Aug 2025 - Sep 2025",
    shortPeriod: "Aug 2025 - Sep 2025",
    badge: "Prestigious National Internship",
    location: "Hyderabad, India",
    status: "Flagship Research",
    mileMarker: "MILESTONE 01 // SATELLITE & ROBOTICS",
    highlight: "KRITHI - ISRO Interactive AI Mobile Robot & Real-time Weather Intelligence",
    icon: "Rocket",
    accentColor: "from-cyan-400 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.6)",
    points: [
      "Selected for an elite research internship at the National Remote Sensing Centre (ISRO), actively contributing to KRITHI — an AI-powered interactive mobile robot designed for visitor engagement.",
      "Engineered an automated weather forecasting subsystem utilizing live meteorological APIs, telemetry processing, and continuous data pipelines.",
      "Implemented dynamic forecast visualization modules and backend server logic to stream mission-critical weather updates in real time.",
      "Collaborated with senior scientists and engineers on AI-driven robotic interaction, reinforcing geospatial data integration and high-performance algorithms."
    ],
    skills: ["ISRO Satellite Data", "Python", "Real-Time APIs", "Robotics AI", "Automated Telemetry", "Backend Engineering"]
  },
  {
    id: "aruvixa",
    company: "Aruvixa Tech Solutions Private Limited",
    role: "AI & Data Solutions Specialist",
    period: "August 2026 and Beyond",
    shortPeriod: "August 2026 - Present",
    badge: "OutReaching Manager",
    location: "Chennai / Hybrid",
    status: "Active / Ongoing",
    mileMarker: "MILESTONE 02 // ENTERPRISE AI & PRODUCTION",
    highlight: "Enterprise AI solutions, production data pipelines & intelligent analytics",
    icon: "Building2",
    accentColor: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.5)",
    points: [
      "Leading data processing architecture and predictive machine learning solutions for enterprise client production workflows.",
      "Architected and deployed interactive executive intelligence dashboards with Power BI, driving real-time data visibility across business operations.",
      "Engineered robust automated ETL pipelines and secure REST API integrations using Python, SQL, and modern CI/CD DevOps practices.",
      "Collaborating across cross-functional engineering teams at Aruvixa Tech Solutions to design and scale intelligent software products."
    ],
    skills: ["Python", "SQL", "Power BI", "Data Analytics", "API Integration", "Enterprise CI/CD", "Machine Learning"]
  }
];

export const projectsData = [
  {
    id: "krithi",
    title: "KRITHI",
    subtitle: "AI-Powered Interactive Mobile Robot for Visitor Engagement",
    category: "AI & Robotics",
    period: "Aug 2025 - Sep 2025",
    featured: true,
    impactMetric: "ISRO Research",
    description:
      "A flagship AI-powered interactive mobile robot developed for ISRO National Remote Sensing Centre (NRSC), engineered for intelligent visitor engagement, automated guidance, and real-time environmental weather intelligence.",
    highlights: [
      "Selected for research at ISRO NRSC, developing an AI-powered interactive mobile robot specifically tailored for intuitive visitor engagement.",
      "Engineered a real-time weather forecasting system combining live meteorological APIs, continuous data pipelines, and automated sensor monitoring.",
      "Implemented dynamic forecast visualizations and robust backend server logic to deliver instantaneous weather and atmospheric updates.",
      "Collaborated with senior ISRO scientists to implement reliable robotic interaction logic, geospatial telemetry, and high-performance analytical pipelines."
    ],
    techStack: ["Robotics AI", "Python", "Real-Time APIs", "Telemetry Processing", "ISRO Satellite Feeds", "Backend Architecture"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    borderGlow: "rgba(6, 182, 212, 0.5)",
    codeLink: "https://github.com",
    demoText: "View ISRO Project"
  },
  {
    id: "ecobyte",
    title: "EcoByte",
    subtitle: "Microplastic Degradation & Water Quality Monitoring System",
    category: "IoT & Environmental AI",
    period: "2024 - 2025",
    featured: true,
    impactMetric: "+90% Degradation Gain",
    description:
      "A breakthrough IoT and AI-driven bioremediation platform designed for intelligent microplastic degradation and autonomous water health monitoring.",
    highlights: [
      "Engineered an intelligent IoT system for microplastic degradation, achieving an extraordinary 90% boost in degradation efficiency.",
      "Integrated multi-stage predictive analytics, real-time sensor monitoring (pH, turbidity, dissolved oxygen), and cloud telemetry via ESP32/Raspberry Pi.",
      "Automated adaptive water treatment workflows using machine learning inference for sustainable ecological remediation."
    ],
    techStack: ["IoT (ESP32)", "Raspberry Pi", "Python", "Predictive Analytics", "Cloud Telemetry", "Machine Learning"],
    gradient: "from-emerald-500 to-cyan-500",
    borderGlow: "rgba(16, 185, 129, 0.4)",
    codeLink: "https://github.com/Kidad18/Eco_Byte",
    demoText: "View Architecture"
  },
  {
    id: "contamino",
    title: "Contamino Vector",
    subtitle: "Geospatial Environmental Risk Analytics Platform",
    category: "GIS & Machine Learning",
    period: "2024",
    featured: true,
    impactMetric: "Multi-Satellite Fusion",
    description:
      "A cutting-edge geospatial intelligence system analyzing multi-spectral satellite imagery and machine learning models to map environmental contamination hotspots and predict vector-borne disease risks.",
    highlights: [
      "Designed and implemented geospatial risk mapping pipelines leveraging satellite imagery (Bhuvan, Bhoonidhi, Google Earth Engine, QGIS).",
      "Constructed predictive machine learning classifiers to correlate stagnant water bodies and moisture indexes with vector propagation.",
      "Delivered interactive GIS-based visual dashboards that empower municipal stakeholders with data-backed preventative decision-making."
    ],
    techStack: ["QGIS", "Google Earth Engine", "Bhuvan & Bhoonidhi", "Python", "Scikit-learn", "Spatial Analytics"],
    gradient: "from-blue-600 to-cyan-400",
    borderGlow: "rgba(56, 189, 248, 0.4)",
    codeLink: "https://github.com",
    demoText: "Explore GIS Map"
  },
  {
    id: "salesforce-ci",
    title: "Salesforce Deployment Tracker",
    subtitle: "Automated CI/CD Release & Monitoring Engine",
    category: "Enterprise Systems",
    period: "2024",
    featured: true,
    impactMetric: "Real-Time CI/CD Audit",
    description:
      "A high-reliability Java and MySQL enterprise deployment tracking system developed to simulate and optimize Salesforce DevOps workflows and release lifecycles.",
    highlights: [
      "Engineered comprehensive modules to monitor deployment statuses, release history, and granular user action telemetry.",
      "Implemented database schemas in MySQL with optimized transactional queries and rollback version tracking.",
      "Streamlined deployment visibility and automated reporting metrics to prevent release regression in complex environments."
    ],
    techStack: ["Java", "MySQL", "Salesforce DevOps", "CI/CD Workflows", "API Integration", "Version Control"],
    gradient: "from-indigo-600 to-purple-600",
    borderGlow: "rgba(139, 92, 246, 0.4)",
    codeLink: "https://github.com",
    demoText: "View Telemetry"
  }
];

export const skillsData = {
  programming: [
    { name: "Python", level: 92, tag: "Data, ML, Scripting" },
    { name: "SQL", level: 88, tag: "Complex Queries, Joins" },
    { name: "Java", level: 80, tag: "Backend, OOP" },
    { name: "Pandas & NumPy", level: 95, tag: "Data Wrangling" },
    { name: "Scikit-learn", level: 86, tag: "Machine Learning" },
  ],
  analytics: [
    { name: "Predictive Analytics", level: 90, tag: "Forecasting, Models" },
    { name: "Power BI", level: 88, tag: "Interactive Dashboards" },
    { name: "Tableau", level: 82, tag: "Visual Intelligence" },
    { name: "Data Visualization", level: 94, tag: "Charts, Storytelling" },
    { name: "Statistical Analysis", level: 85, tag: "Probability, Testing" },
  ],
  gisAndCloud: [
    { name: "AWS Cloud", level: 78, tag: "Cloud Storage, Compute" },
    { name: "Google Earth Engine", level: 86, tag: "Satellite Imagery" },
    { name: "QGIS", level: 85, tag: "Geographic Info Systems" },
    { name: "Bhuvan & Bhoonidhi", level: 88, tag: "ISRO Geoportals" },
    { name: "Salesforce DevOps", level: 76, tag: "CI/CD & Releases" },
  ],
  iotAndDev: [
    { name: "ESP32 & Raspberry Pi", level: 85, tag: "Hardware & Sensors" },
    { name: "Git & GitHub", level: 90, tag: "Version Control" },
    { name: "MySQL Database", level: 88, tag: "RDBMS Design" },
    { name: "REST APIs", level: 87, tag: "Integration & Feeds" },
    { name: "CI/CD Pipelines", level: 80, tag: "DevOps Workflows" },
  ],
  professional: [
    "Analytical Thinking",
    "Logical Reasoning",
    "Problem Solving",
    "Team Collaboration",
    "Technical Communication",
    "Fast Learner",
    "Multilingual (English, Telugu, Tamil, Hindi)"
  ]
};

export const educationData = [
  {
    institution: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology",
    degree: "Bachelor of Engineering - Artificial Intelligence and Data Science",
    location: "Chennai, Tamil Nadu",
    period: "2023 - 2027",
    score: "CGPA: 8.7",
    badge: "Undergraduate Degree",
    details:
      "Specialized coursework in Machine Learning, Deep Neural Networks, Data Mining, IoT Architectures, Cloud Platforms, and Big Data Analytics. Active participant in technical symposiums and research initiatives."
  },
  {
    institution: "Narayana Junior College",
    degree: "12th Standard - Higher Secondary Education (MPC)",
    location: "Tirupati, Andhra Pradesh",
    period: "2021 - 2023",
    score: "90.10%",
    badge: "Class XII",
    details:
      "Rigorous foundation in Mathematics, Physics, and Chemistry, cultivating strong analytical and problem-solving fundamentals."
  },
  {
    institution: "Academic Heights School",
    degree: "10th Standard - Secondary School Certificate",
    location: "Tirupati, Andhra Pradesh",
    period: "2021",
    score: "98.83%",
    badge: "Class X Academic Distinction",
    details:
      "Graduated with top academic honors and distinction (98.83%), active in science competitions and mathematics olympiads."
  }
];

export const certificationsData = [
  {
    title: "Data Visualization Job Simulation",
    issuer: "Tata - Forage",
    skills: "Executive Dashboards, Business Communication, Storytelling",
    date: "Certified",
    badge: "Industry Simulation"
  },
  {
    title: "Prompt Engineering Specialization",
    issuer: "Great Learning",
    skills: "LLMs, Prompt Architecture, AI Workflow Automation",
    date: "Certified",
    badge: "AI & GenAI"
  },
  {
    title: "Data Analysis Foundation & Practice",
    issuer: "Elevate Labs",
    skills: "Data Manipulation, Statistical EDA, Predictive Modeling",
    date: "Certified",
    badge: "Analytics"
  }
];
