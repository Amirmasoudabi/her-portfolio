import React, { useState, useEffect, useMemo } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  Terminal,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  Upload,
  Share2,
  Printer,
  RotateCcw,
  Plus,
  Trash2,
  Check,
  Copy,
  Sun,
  Moon,
  Sparkles,
  ChevronRight,
  X,
  FileText,
  Sliders,
  Command,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Zap,
  Lock,
  Search,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';

// --- BRAND SVG ICONS ---
const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// --- INITIAL CV DATA ---
const INITIAL_CV_DATA = {
  uiConfig: {
    statusBadge: "AI Architect",
    headerSubtitle: "Executive Technical Portfolio",
    heroBadge: "AI Architecture • Deep Learning • Distributed Backend",
    heroTitlePrefix: "Architecting intelligent systems with",
    heroTitleHighlight: "precision & grace.",
    terminalFilename: "ai_architect.py",
    terminalClass: "AIArchitect",
    terminalFocus: "LLMs, RAG & Scale",
    terminalStack: "Python, PyTorch, Java",
    terminalDomains: "Deep Learning, Distributed Systems, Enterprise Microservices",
    terminalPrecision: "0.9998",
    terminalFooterBadge: "Verified Profile",
    footerTagline: "AI Developer & Architect"
  },
  personal: {
    fullName: "Parmis Hajianfard",
    title: "Mid-Level AI Developer & Software Engineer | Distributed Systems & LLMs | ML",
    logoUrl: "",
    email: "parmishajian@gmail.com",
    phone: "+601116897308",
    location: "KL, Malaysia",
    github: "https://github.com/parmisu",
    linkedin: "https://linkedin.com/",
    website: "https://",
    summary: "Mid-Level AI Developer and Backend Software Architect with 10+ years of production engineering experience designing intelligent distributed systems, enterprise RAG pipelines, and high-concurrency cloud services. Deep expertise in Python, Deep Learning (PyTorch, TensorFlow), LLM orchestration, and scalable microservices. Proven track record of architecting mission-critical platforms serving 80M+ users and leading AI-driven modernization initiatives across global engineering teams."
  },
  stats: [
    { label: "Engineering Experience", value: "10+ Yrs", sub: "AI & Distributed Systems" },
    { label: "Production Reach", value: "80M+", sub: "Enterprise Platform Users" },
    { label: "AI & API Services", value: "200+", sub: "High-Throughput Endpoints" },
    { label: "Academic Distinction", value: "Rank 1", sub: "M.Sc. & B.Sc. Honors" }
  ],
  skills: [
    {
      category: "AI & Machine Learning",
      items: ["PyTorch", "TensorFlow", "LangChain", "RAG Architectures", "OpenAI API", "LLMs", "NLP", "Vector Databases", "Scikit-learn", "Spring AI"]
    },
    {
      category: "Languages",
      items: ["Python", "Java", "TypeScript", "SQL", "Go", "C++", "Shell"]
    },
    {
      category: "Backend & Architecture",
      items: ["FastAPI", "Spring Boot", "RESTful APIs", "Microservices", "DDD", "Hexagonal Architecture", "Async I/O", "Event-Driven", "OpenAPI"]
    },
    {
      category: "Data & Vector Stores",
      items: ["PostgreSQL", "Redis", "Elasticsearch", "MongoDB", "Oracle", "SQL Server", "Data Modeling", "Query Optimization"]
    },
    {
      category: "Cloud & MLOps / DevOps",
      items: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "OpenShift", "GitHub Actions", "GitLab CI/CD"]
    },
    {
      category: "Messaging & Observability",
      items: ["Apache Kafka", "RabbitMQ", "Prometheus", "Grafana", "OpenTelemetry", "ELK Stack", "Distributed Tracing"]
    },
    {
      category: "Testing & Quality",
      items: ["pytest", "JUnit 5", "Testcontainers", "Mockito", "Integration Testing", "Performance Benchmarking"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer | Backend & AI Systems",
      company: "Peyman Pardazesh Niyam Company",
      location: "Yazd, Iran",
      period: "April 2024 - September 2025",
      bullets: [
        "Optimized high-volume database queries and data pipelines to seamlessly process large-scale analytical workloads.",
        "Engineered intelligent spatial analysis modules for an enterprise GIS platform supporting real-time cartography and layer computation.",
        "Architected and delivered an enterprise Project Management Information System (PMIS) automating cross-functional workflows."
      ],
      technologies: "Django | Laravel | React | ExtJS | SQL Server | RabbitMQ | GeoServer | Docker"
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer | Independent Consultant",
      company: "Freelance AI & Cloud Architecture",
      location: "Remote",
      period: "March 2023 - April 2024",
      bullets: [
        "Designed and deployed an end-to-end multi-tenant cloud platform featuring automated scheduling and real-time billing.",
        "Contributed to the core architecture of a decentralized platform with cryptographic proof verification and high transaction integrity."
      ],
      technologies: "Python | Laravel | Vue.js | MySQL | RabbitMQ | Docker"
    },
    {
      id: "exp-3",
      role: "Backend Developer | Data Infrastructure Specialist",
      company: "Amn Pardazan Kavir (APK) Engineering & Tech Co.",
      location: "Yazd, Iran",
      period: "December 2021 - March 2023",
      bullets: [
        "Developed and maintained six core high-throughput modules of an enterprise SIEM (Security Information & Event Management) platform.",
        "Engineered resilient infrastructure for real-time log ingestion, anomaly enrichment, and distributed storage."
      ],
      technologies: "Go | Python | Ruby | ELK Stack | Kafka | MariaDB | Redis | GitLab CI/CD | Prometheus | Grafana"
    },
    {
      id: "exp-4",
      role: "Full-Stack Developer | Project Technical Manager",
      company: "Vesta Sanat Kavir Yazd Company",
      location: "Yazd, Iran",
      period: "June 2020 - September 2021",
      bullets: [
        "Directed architectural roadmaps, sprint milestones, and engineering reviews for a high-traffic commerce platform.",
        "Delivered 200+ RESTful APIs and 20+ responsive client interfaces maintaining sub-second latency.",
        "Designed normalized relational schemas with high write durability and multi-layered Redis caching."
      ],
      technologies: "PHP | Laravel | Vue.js | MySQL | Redis | REST APIs"
    }
  ],
  projects: [
    {
      id: "proj-2",
      title: "Enterprise Generative AI Assistant & RAG Engine",
      category: "AI / ML",
      meta: "Python • LangChain • Spring AI • OpenAI | 2024-2025",
      description: "Engineered a production-grade Retrieval-Augmented Generation (RAG) platform integrating semantic vector search, LLM orchestration, and automated document ingestion workflows—reducing enterprise knowledge discovery time by ~80%.",
      technologies: ["Python", "LangChain", "Spring AI", "OpenAI API", "Vector DB", "RAG"],
      link: "https://github.com/parmisu"
    },
    {
      id: "proj-4",
      title: "ECG5000 Deep Anomaly Detection",
      category: "AI / ML",
      meta: "Python • TensorFlow • Deep Learning | 2025",
      description: "Implemented an unsupervised deep autoencoder architecture for physiological time-series anomaly detection, achieving over 95% reconstruction accuracy through rigorous statistical thresholding.",
      technologies: ["Python", "TensorFlow", "Autoencoders", "Time-Series", "Anomaly Detection"],
      link: "https://github.com/parmisu"
    },
    {
      id: "proj-3",
      title: "DeepMovRS: Neural Recommender Framework",
      category: "AI / ML",
      meta: "Python • TensorFlow • IEEE Published | 2016-2018",
      description: "Architected novel deep collaborative filtering models for personalized content discovery on public datasets, forming the foundation of my M.Sc. thesis at the University of Tehran and an IEEE publication.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Collaborative Filtering", "Neural Networks"],
      link: "https://github.com/parmisu"
    },
    {
      id: "proj-1",
      title: "Exchange Rates Aggregator Microservice",
      category: "Backend & Microservices",
      meta: "Java 21 • Spring Boot 3.4 • Redis • Docker | 2025",
      description: "Architected a fault-tolerant REST microservice integrating multiple external financial providers with distributed Redis caching, strict schema validation, observability, and automated CI/CD pipelines.",
      technologies: ["Java 21", "Spring Boot", "Redis", "Docker", "REST API", "CI/CD"],
      link: "https://github.com/parmisu"
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of Tehran (UT)",
      degree: "M.Sc. in Computer Engineering (Algorithms & Computation)",
      location: "Tehran, Iran",
      period: "2015 - 2018",
      details: "Thesis: Deep Learning for Recommender Systems • GPA: 19.31 / 20.00 • Ranked 1st in graduating class"
    },
    {
      id: "edu-2",
      institution: "Shahid Rajaee Teacher Training University (SRU)",
      degree: "B.Sc. in Computer Engineering (Software Engineering)",
      location: "Tehran, Iran",
      period: "2013 - 2015",
      details: "GPA: 19.37 / 20.00 • Ranked 1st among 45 students"
    },
    {
      id: "edu-3",
      institution: "Shamsipour Technical and Vocational College",
      degree: "Associate Degree in Computer Engineering",
      location: "Tehran, Iran",
      period: "2011 - 2013",
      details: "GPA: 16.86 / 20.00 • Graduated in the Top 10% of the cohort"
    }
  ],
  certifications: [
    "Deep Learning Specialization — DeepLearning.AI (Andrew Ng)",
    "CS231n: Convolutional Neural Networks for Visual Recognition — Stanford University",
    "Machine Learning with Python — IBM",
    "LPIC-1 Linux Administrator Certification — Fanavaran Anisa"
  ],
  publications: [
    {
      id: "pub-2",
      title: "DeepMovRS: A Unified Framework for Deep Learning-Based Movie Recommender Systems",
      venue: "IEEE Conference Publication",
      year: "2018"
    },
    {
      id: "pub-1",
      title: "Deep Learning for Recommender Systems",
      venue: "Proceedings of the University of Guilan Conference (Civilica)",
      year: "2017"
    }
  ],
  achievements: [
    "Finalist in multiple national Data Science & AI competitions hosted by Quera (2021), including CodeCUP-5, Mofid Securities, and QueraConnect.",
    "Ranked 1st in both M.Sc. (University of Tehran) and B.Sc. Computer Engineering graduating cohorts with top academic honors."
  ],
  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Persian", proficiency: "Native / Bilingual" }
  ]
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [viewMode, setViewMode] = useState('portfolio');
  const [selectedSkillCat, setSelectedSkillCat] = useState('All');
  const [activeProjectFilter, setActiveProjectFilter] = useState('All');

  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorTab, setEditorTab] = useState('personal');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 600, y: 300 });

  const [cvData, setCvData] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.location.hash.length > 2) {
        const hashStr = window.location.hash.substring(1);
        const params = new URLSearchParams(hashStr);
        const encoded = params.get('cv');
        if (encoded) {
          return JSON.parse(decodeURIComponent(atob(encoded)));
        }
      }
    } catch (e) {
      console.warn("Could not parse CV from URL hash:", e);
    }

    try {
      const saved = localStorage.getItem('executive_ai_rose_portfolio_v4');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }

    return INITIAL_CV_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem('executive_ai_rose_portfolio_v4', JSON.stringify(cvData));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }, [cvData]);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin' || window.location.hash === '#edit') {
        setIsEditorOpen(true);
        window.history.replaceState(null, null, window.location.pathname);
      }
    };
    checkHash();

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setIsEditorOpen(prev => !prev);
        triggerToast("Studio Mode toggled");
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', checkHash);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopiedEmail(true);
    triggerToast("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 512, 512);
        ctx.drawImage(img, 0, 0, 512, 512);
        const dataUrl = canvas.toDataURL('image/png');
        setCvData(prev => ({
          ...prev,
          personal: { ...prev.personal, logoUrl: dataUrl }
        }));
        triggerToast("512×512 PNG Logo applied to header!");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `${cvData.personal.fullName.replace(/\s+/g, '_')}_Portfolio.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    triggerToast("Portfolio JSON exported!");
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.personal && imported.skills) {
          setCvData(imported);
          triggerToast("Portfolio data imported successfully!");
        } else {
          triggerToast("Invalid JSON structure.");
        }
      } catch {
        triggerToast("Error parsing JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const handleShareEmployerLink = () => {
    try {
      const jsonStr = JSON.stringify(cvData);
      const encoded = btoa(encodeURIComponent(jsonStr));
      const url = new URL(window.location.href);
      url.hash = `cv=${encoded}`;
      navigator.clipboard.writeText(url.toString());
      triggerToast("Employer link copied! (Editor remains hidden)");
    } catch {
      navigator.clipboard.writeText(window.location.href);
      triggerToast("Link copied to clipboard!");
    }
  };

  const handleReset = () => {
    setCvData(INITIAL_CV_DATA);
    localStorage.removeItem('executive_ai_rose_portfolio_v4');
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    setShowResetConfirm(false);
    triggerToast("Restored default AI Architect profile.");
  };

  const handlePrint = () => {
    if (viewMode !== 'cv') {
      setViewMode('cv');
      setTimeout(() => window.print(), 350);
    } else {
      window.print();
    }
  };

  const projectCategories = useMemo(() => {
    const cats = new Set(cvData.projects.map(p => p.category || 'Architecture'));
    return ['All', ...Array.from(cats)];
  }, [cvData.projects]);

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'All') return cvData.projects;
    return cvData.projects.filter(p => p.category === activeProjectFilter);
  }, [cvData.projects, activeProjectFilter]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen relative overflow-x-hidden ${
        darkMode ? 'dark bg-[#0b080d] text-zinc-100' : 'bg-[#fcf9fb] text-zinc-900'
      } font-poppins antialiased selection:bg-pink-400 selection:text-zinc-950 transition-colors duration-300`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-code { font-family: 'JetBrains Mono', monospace; }

        @media print {
          body { background: white !important; color: black !important; font-size: 10pt; font-family: 'Poppins', sans-serif !important; }
          .no-print { display: none !important; }
          .print-container { padding: 0 !important; margin: 0 !important; box-shadow: none !important; border: none !important; max-width: 100% !important; width: 100% !important; }
          a { text-decoration: none !important; color: black !important; }
        }
      `}</style>

      {viewMode === 'portfolio' && (
        <div className="no-print pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="fixed inset-0 transition-opacity duration-500"
            style={{
              background: darkMode
                ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 114, 182, 0.065), transparent 45%)`
                : `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 114, 182, 0.09), transparent 45%)`
            }}
          />
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-tr from-pink-500/10 via-rose-400/5 to-fuchsia-500/10 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '52px 52px'
            }}
          />
        </div>
      )}

      {/* HEADER */}
      <header className="no-print sticky top-4 z-40 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto h-16 px-5 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-[#130f17]/80 border border-pink-200/60 dark:border-pink-500/15 shadow-lg shadow-pink-950/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div
              onDoubleClick={() => { setIsEditorOpen(true); triggerToast("Studio Mode Unlocked"); }}
              className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/15 via-rose-500/10 to-fuchsia-500/15 border border-pink-300/60 dark:border-pink-400/25 flex items-center justify-center cursor-pointer select-none shadow-sm hover:scale-105 transition"
            >
              {cvData.personal.logoUrl ? (
                <img src={cvData.personal.logoUrl} alt="Logo" className="w-full h-full object-contain" />
              ) : (
                <span className="font-code font-bold text-sm text-pink-600 dark:text-pink-300">
                  {cvData.personal.fullName.charAt(0) || "A"}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                  {cvData.personal.fullName}
                </span>
                <span
                  onDoubleClick={() => { setIsEditorOpen(true); triggerToast("Studio Mode Unlocked"); }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-code font-medium bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20 cursor-pointer select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 dark:bg-pink-400 animate-pulse" />
                  <span className="hidden md:inline">{cvData.uiConfig?.statusBadge || "AI Architect"}</span>
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block">
                {cvData.uiConfig?.headerSubtitle || "Executive Technical Portfolio"}
              </p>
            </div>
          </div>

          <div className="flex items-center bg-pink-50/70 dark:bg-zinc-950/90 p-1 rounded-xl border border-pink-200/60 dark:border-zinc-800/90">
            <button
              onClick={() => setViewMode('portfolio')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'portfolio' ? 'bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-300 shadow-sm border border-pink-100 dark:border-pink-500/20' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-pink-500" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setViewMode('cv')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'cv' ? 'bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-300 shadow-sm border border-pink-100 dark:border-pink-500/20' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-pink-500" />
              <span>Formal CV</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCommandOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-code text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800 transition"
            >
              <Command className="w-3.5 h-3.5 text-pink-500" />
              <span className="hidden sm:inline text-[11px]">⌘K</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-500 text-white transition shadow-sm shadow-pink-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-pink-50 dark:hover:bg-zinc-800 transition"
            >
              {darkMode ? <Sun className="w-4 h-4 text-pink-300" /> : <Moon className="w-4 h-4 text-rose-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* PORTFOLIO VIEW */}
      {viewMode === 'portfolio' && (
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-24">
          
          {/* HERO BENTO */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
            <div className="lg:col-span-8 p-7 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#120e16]/90 border border-pink-200/60 dark:border-pink-500/15 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-code bg-pink-500/10 text-pink-700 dark:text-pink-300 border border-pink-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>{cvData.uiConfig?.heroBadge || "AI Architecture • Deep Learning • Distributed Backend"}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.18]">
                  {cvData.uiConfig?.heroTitlePrefix || "Architecting intelligent systems with"}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400">
                    {cvData.uiConfig?.heroTitleHighlight || "precision & grace."}
                  </span>
                </h1>

                <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-300/90 leading-relaxed max-w-2xl">
                  {cvData.personal.summary}
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-code font-medium bg-zinc-900 dark:bg-pink-50 text-white dark:text-zinc-950 transition shadow-sm"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-pink-500" /> : <Copy className="w-3.5 h-3.5 text-pink-400 dark:text-pink-600" />}
                  <span>{copiedEmail ? "Copied" : cvData.personal.email}</span>
                </button>

                {cvData.personal.github && (
                  <a href={cvData.personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-pink-50/70 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-200 border border-pink-200/70 dark:border-zinc-800 transition">
                    <Github className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}

                {cvData.personal.linkedin && (
                  <a href={cvData.personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-pink-50/70 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-200 border border-pink-200/70 dark:border-zinc-800 transition">
                    <Linkedin className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}

                <span className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs font-code text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-pink-500" />
                  {cvData.personal.location}
                </span>
              </div>
            </div>

            {/* DYNAMIC CODE TERMINAL */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#110d16] text-zinc-200 border border-pink-500/20 flex flex-col justify-between font-code text-xs shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800/90 pb-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-300/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400/80" />
                </div>
                <span className="text-[11px] text-pink-300/70">{cvData.uiConfig?.terminalFilename || "ai_architect.py"}</span>
              </div>

              <div className="space-y-2 text-[11.5px] leading-relaxed">
                <div>
                  <span className="text-pink-400">class</span>{' '}
                  <span className="text-rose-200 font-semibold">{cvData.uiConfig?.terminalClass || "AIArchitect"}</span>:
                </div>
                <div className="pl-4 text-zinc-400">
                  focus = <span className="text-pink-300">"{cvData.uiConfig?.terminalFocus || "LLMs, RAG & Scale"}"</span>
                </div>
                <div className="pl-4 text-zinc-400">
                  stack = [{(cvData.uiConfig?.terminalStack || "Python, PyTorch, Java").split(',').map((s, i, arr) => (
                    <span key={i}><span className="text-pink-300">"{s.trim()}"</span>{i < arr.length - 1 ? ', ' : ''}</span>
                  ))}]
                </div>
                <div className="pl-4 text-zinc-400">
                  domains = [
                  <div className="pl-4 text-fuchsia-300/90">
                    {(cvData.uiConfig?.terminalDomains || "Deep Learning, Distributed Systems").split(',').map((d, i, arr) => (
                      <div key={i}>"{d.trim()}"{i < arr.length - 1 ? ',' : ''}</div>
                    ))}
                  </div>
                  ]
                </div>
                <div className="pl-4 text-zinc-400">
                  precision = <span className="text-rose-300">{cvData.uiConfig?.terminalPrecision || "0.9998"}</span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/90 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-pink-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {cvData.uiConfig?.terminalFooterBadge || "Verified Profile"}
                </span>
                <span>{cvData.personal.phone}</span>
              </div>
            </div>

            {/* STATS */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {cvData.stats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/85 dark:bg-[#120e16]/80 border border-pink-200/50 dark:border-pink-500/15 transition group">
                  <div className="text-[11px] font-code uppercase tracking-wider text-pink-600/70 dark:text-pink-300/60">
                    0{idx + 1} // {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-2 group-hover:text-pink-500 transition-colors">
                    {stat.value}
                  </div>
                  {stat.sub && <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{stat.sub}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
              <div>
                <div className="text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">// 01. CORE COMPETENCIES</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">AI & Engineering Simantack</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSkillCat('All')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-code transition ${selectedSkillCat === 'All' ? 'bg-pink-500 text-white font-semibold' : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'}`}
                >
                  All Domains
                </button>
                {cvData.skills.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSkillCat(s.category)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-code transition ${selectedSkillCat === s.category ? 'bg-pink-500 text-white font-semibold' : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'}`}
                  >
                    {s.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cvData.skills.map((group, idx) => {
                const isHighlighted = selectedSkillCat === 'All' || selectedSkillCat === group.category;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedSkillCat(selectedSkillCat === group.category ? 'All' : group.category)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isHighlighted ? 'bg-white dark:bg-[#120e16]/90 border-pink-200/70 dark:border-pink-500/20 opacity-100 scale-100' : 'bg-zinc-100/40 dark:bg-zinc-950/30 border-zinc-200/30 opacity-35 scale-[0.98]'}`}
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        {group.category}
                      </span>
                      <span className="text-[11px] font-code text-zinc-400">{group.items.length}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 text-xs font-code rounded-lg bg-pink-50/60 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-pink-200/50 dark:border-zinc-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
              <div>
                <div className="text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">// 02. ARCHITECTURAL CASE STUDIES</div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected AI & Distributed Systems</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projectCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProjectFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-code transition ${activeProjectFilter === cat ? 'bg-zinc-900 dark:bg-pink-400 text-white dark:text-zinc-950 font-semibold' : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProjects.map((project, idx) => (
                <div key={project.id || idx} className="group p-6 rounded-3xl bg-white dark:bg-[#120e16]/90 border border-pink-200/70 dark:border-pink-500/15 hover:border-pink-400/60 transition-all flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-code uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20">
                        {project.category || "Architecture"}
                      </span>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg text-zinc-400 hover:text-pink-500 transition">
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-code text-zinc-400 dark:text-zinc-500 mt-1 mb-3">{project.meta}</div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">{project.description}</p>
                  </div>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-pink-100/80 dark:border-zinc-800/80">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-0.5 text-[11px] font-code rounded-md bg-pink-50/70 dark:bg-zinc-900 text-pink-700 dark:text-pink-300 border border-pink-200/40 dark:border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="space-y-8">
            <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
              <div className="text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">// 03. CAREER PROGRESSION</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Professional Experience & Leadership</h2>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-pink-200 dark:border-pink-500/20 space-y-10">
              {cvData.experience.map((exp, idx) => (
                <div key={exp.id || idx} className="relative group">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#0b080d] border-2 border-pink-500 group-hover:scale-125 transition" />
                  <div className="p-6 rounded-3xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 transition shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-pink-100/80 dark:border-zinc-800/80">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                        <div className="text-sm font-medium text-pink-600 dark:text-pink-300">
                          {exp.company}{exp.location ? ` • ${exp.location}` : ''}
                        </div>
                      </div>
                      <span className="text-xs font-code px-3 py-1 rounded-full bg-pink-50 dark:bg-zinc-900 text-pink-700 dark:text-pink-300 border border-pink-200/50 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pink-100/80 dark:border-zinc-800/80">
                        {exp.technologies.split('|').map((t, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-md text-[11px] font-code bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION, LANGUAGES & PUBLICATIONS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-3">
                <div className="text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">// 04. ACADEMIC EXCELLENCE</div>
                <h2 className="text-xl font-bold tracking-tight">Education & Languages</h2>
              </div>

              <div className="space-y-3.5">
                {cvData.education.map((edu, idx) => (
                  <div key={edu.id || idx} className="p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
                      <span className="text-xs font-code text-zinc-400">{edu.period}</span>
                    </div>
                    <div className="text-sm font-medium text-pink-600 dark:text-pink-300 mt-0.5 mb-2">{edu.degree}</div>
                    {edu.details && <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-code">{edu.details}</p>}
                  </div>
                ))}

                {/* LANGUAGES CARD */}
                {cvData.languages && cvData.languages.length > 0 && (
                  <div className="p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-3">
                    <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-pink-500" />
                      <span>Languages & Communication</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cvData.languages.map((lang, lIdx) => (
                        <div key={lIdx} className="p-3 rounded-xl bg-pink-50/50 dark:bg-zinc-900/90 border border-pink-200/40 dark:border-zinc-800 flex items-center justify-between">
                          <span className="font-semibold text-xs text-zinc-900 dark:text-white">{lang.language}</span>
                          <span className="text-[11px] font-code text-pink-600 dark:text-pink-300">{lang.proficiency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-3">
                <div className="text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">// 05. SCIENTIFIC RESEARCH</div>
                <h2 className="text-xl font-bold tracking-tight">Publications & Honors</h2>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-3">
                <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-pink-500" />
                  <span>Peer-Reviewed Publications</span>
                </div>
                {cvData.publications.map((pub, idx) => (
                  <div key={pub.id || idx} className="text-xs space-y-0.5">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">{pub.title}</div>
                    <div className="text-zinc-500 dark:text-zinc-400 font-code text-[11px]">{pub.venue} • {pub.year}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-2.5">
                <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                  <span>Certifications</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  {cvData.certifications.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-2.5">
                <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-rose-400" />
                  <span>Honors & Hackathons</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  {cvData.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <footer className="pt-10 pb-14 border-t border-pink-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2.5 font-code">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              <span>{cvData.personal.fullName} — {cvData.uiConfig?.footerTagline || "AI Developer & Architect"}</span>
            </div>
            <div className="flex items-center gap-4 font-code text-[11px]">
              <button onClick={() => setIsCommandOpen(true)} className="hover:text-pink-600 transition">Press ⌘K for Quick Actions</button>
              <span>•</span>
              <button onClick={() => setViewMode('cv')} className="hover:text-pink-600 transition">Formal Printable CV</button>
            </div>
          </footer>
        </main>
      )}

      {/* FORMAL CV VIEW */}
      {viewMode === 'cv' && (
        <main className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
          <article className="print-container bg-white text-neutral-900 p-8 sm:p-14 shadow-2xl rounded-sm border border-neutral-200 min-h-[1100px] font-poppins leading-relaxed">
            <header className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-1">{cvData.personal.fullName}</h1>
                <p className="text-sm sm:text-base font-medium text-neutral-800 mb-2">{cvData.personal.title}</p>
                <div className="flex flex-wrap items-center gap-x-2 text-xs font-code text-neutral-700">
                  {cvData.personal.email && (<><a href={`mailto:${cvData.personal.email}`} className="hover:underline">{cvData.personal.email}</a><span>|</span></>)}
                  {cvData.personal.phone && (<><span>{cvData.personal.phone}</span><span>|</span></>)}
                  {cvData.personal.location && (<><span>{cvData.personal.location}</span><span>|</span></>)}
                  {cvData.personal.github && (<><a href={cvData.personal.github} target="_blank" rel="noreferrer" className="hover:underline">{cvData.personal.github.replace('https://', '')}</a><span>|</span></>)}
                  {cvData.personal.linkedin && (<a href={cvData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">{cvData.personal.linkedin.replace('https://', '')}</a>)}
                </div>
              </div>
              {cvData.personal.logoUrl && (
                <img src={cvData.personal.logoUrl} alt="Logo" className="w-14 h-14 object-contain rounded-lg border border-neutral-200" />
              )}
            </header>

            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2">Professional Summary</h2>
              <p className="text-xs text-justify leading-relaxed text-neutral-800">{cvData.personal.summary}</p>
            </section>

            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2">Technical Skills</h2>
              <div className="space-y-1 text-xs text-neutral-800">
                {cvData.skills.map((skillGroup, idx) => (
                  <div key={idx} className="leading-snug">
                    <span className="font-semibold text-neutral-900">{skillGroup.category}: </span>
                    <span className="font-code text-[11.5px]">{skillGroup.items.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">Work Experience</h2>
              <div className="space-y-3.5">
                {cvData.experience.map((exp, idx) => (
                  <div key={exp.id || idx}>
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-bold text-neutral-900">{exp.role}</span>
                      <span className="font-code font-medium text-neutral-800">{exp.period}</span>
                    </div>
                    <div className="text-xs text-neutral-700 italic mb-1">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-neutral-800">
                      {exp.bullets.map((b, bIdx) => (<li key={bIdx} className="leading-relaxed">{b}</li>))}
                    </ul>
                    {exp.technologies && (
                      <div className="mt-1 text-xs text-neutral-800">
                        <span className="font-semibold">Technologies: </span>
                        <span className="font-code text-[11px]">{exp.technologies}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">Selected Projects</h2>
              <div className="space-y-2.5">
                {cvData.projects.map((proj, idx) => (
                  <div key={proj.id || idx}>
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-bold text-neutral-900">• {proj.title}</span>
                      <span className="text-[11px] font-code text-neutral-700">{proj.meta}</span>
                    </div>
                    <p className="text-xs text-neutral-800 mt-0.5 leading-relaxed pl-3">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {cvData.languages && cvData.languages.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-1.5">Languages</h2>
                <div className="text-xs text-neutral-800">
                  {cvData.languages.map((l, idx) => (
                    <span key={idx}><span className="font-bold">{l.language}</span> ({l.proficiency}){idx < cvData.languages.length - 1 ? ' • ' : ''}</span>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">Education</h2>
              <div className="space-y-2.5">
                {cvData.education.map((edu, idx) => (
                  <div key={edu.id || idx}>
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="font-bold text-neutral-900">{edu.institution}</span>
                      <span className="font-semibold text-neutral-800">{edu.location}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-neutral-700 italic">
                      <span>{edu.degree}</span>
                      <span className="font-code not-italic">{edu.period}</span>
                    </div>
                    {edu.details && <p className="text-xs text-neutral-800 mt-0.5">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>
      )}

      {/* COMMAND PALETTE */}
      {isCommandOpen && (
        <div onClick={() => setIsCommandOpen(false)} className="no-print fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 p-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#141019] border border-pink-200 dark:border-pink-500/20 shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-pink-100 dark:border-zinc-800 gap-2.5">
              <Search className="w-4 h-4 text-pink-500" />
              <input
                type="text"
                autoFocus
                value={commandQuery}
                onChange={(e) => setCommandQuery(e.target.value)}
                placeholder="Type a command (copy email, pdf, studio, theme)..."
                className="w-full bg-transparent text-sm focus:outline-none text-zinc-900 dark:text-white"
              />
              <button onClick={() => setIsCommandOpen(false)} className="text-[10px] font-code px-1.5 py-0.5 rounded bg-pink-50 dark:bg-zinc-800 text-zinc-500">ESC</button>
            </div>
            <div className="p-2 max-h-80 overflow-y-auto space-y-1 text-xs">
              <button onClick={() => { handleCopyEmail(); setIsCommandOpen(false); }} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
                <span className="flex items-center gap-2.5 font-medium"><Mail className="w-4 h-4 text-pink-500" />Copy Email ({cvData.personal.email})</span>
              </button>
              <button onClick={() => { setIsCommandOpen(false); handlePrint(); }} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 dark:hover:bg-zinc-800 transition">
                <span className="flex items-center gap-2.5 font-medium"><Printer className="w-4 h-4 text-pink-500" />Download PDF</span>
              </button>
              <button onClick={() => { setIsEditorOpen(true); setIsCommandOpen(false); }} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-500/10 text-pink-600 transition">
                <span className="flex items-center gap-2.5 font-semibold"><Sliders className="w-4 h-4" />Open Studio Editor (⌘E)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEALTH STUDIO CMS */}
      {isEditorOpen && (
        <div className="no-print fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-2xl bg-white dark:bg-[#141019] text-zinc-900 dark:text-zinc-100 h-full shadow-2xl flex flex-col border-l border-pink-200 dark:border-pink-500/20">
            <div className="px-6 py-4 border-b border-pink-200/70 dark:border-zinc-800 flex items-center justify-between bg-pink-50/40 dark:bg-zinc-950/60">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20"><Lock className="w-4 h-4" /></div>
                <div>
                  <h3 className="font-bold text-sm">Stealth Studio CMS (Edit Everything)</h3>
                  <p className="text-[11px] text-zinc-500">Hidden from employers • Use Ctrl+E</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleShareEmployerLink} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-500 text-white hover:bg-pink-400 transition flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5" /><span>Copy Link</span>
                </button>
                <button onClick={() => setIsEditorOpen(false)} className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition"><X className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="flex border-b border-pink-200/60 dark:border-zinc-800 px-6 gap-2 overflow-x-auto text-xs font-semibold py-2.5">
              {[
                { id: 'personal', label: 'Identity & Logo' },
                { id: 'ui', label: 'Hero & Terminal' },
                { id: 'stats', label: 'Metrics' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Edu & Languages' },
                { id: 'honors', label: 'Honors & Pubs' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setEditorTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition ${editorTab === tab.id ? 'bg-pink-500 text-white' : 'text-zinc-500 hover:bg-pink-50 dark:hover:bg-zinc-800'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {editorTab === 'personal' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl border border-pink-200 dark:border-pink-500/25 bg-pink-50/30 dark:bg-pink-950/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-code uppercase text-pink-600 dark:text-pink-300 font-semibold flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" /> Header Brand Logo (PNG 512×512)
                      </label>
                      {cvData.personal.logoUrl && (
                        <button onClick={() => setCvData({ ...cvData, personal: { ...cvData.personal, logoUrl: "" } })} className="text-[11px] text-rose-500 hover:underline font-code">Remove</button>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl border border-pink-300 dark:border-pink-500/30 bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden shrink-0">
                        {cvData.personal.logoUrl ? <img src={cvData.personal.logoUrl} alt="Logo" className="w-full h-full object-contain" /> : <span className="font-code text-lg font-bold text-pink-500">{cvData.personal.fullName.charAt(0)}</span>}
                      </div>
                      <div className="flex-1 space-y-2">
                        <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-pink-500 hover:bg-pink-400 text-white cursor-pointer transition shadow-sm">
                          <Upload className="w-3.5 h-3.5" /><span>Upload 512×512 PNG</span>
                          <input type="file" accept="image/png,image/webp,image/jpeg" onChange={handleLogoUpload} className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Full Name</label>
                      <input type="text" value={cvData.personal.fullName} onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, fullName: e.target.value } })} className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Title</label>
                      <input type="text" value={cvData.personal.title} onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, title: e.target.value } })} className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Email</label>
                      <input type="email" value={cvData.personal.email} onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, email: e.target.value } })} className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Phone</label>
                      <input type="text" value={cvData.personal.phone} onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, phone: e.target.value } })} className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Summary</label>
                    <textarea rows={5} value={cvData.personal.summary} onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, summary: e.target.value } })} className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                  </div>
                </div>
              )}

              {editorTab === 'ui' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-pink-200 dark:border-zinc-800 space-y-3">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Header & Hero Customization</h4>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">Status Badge</label>
                      <input type="text" value={cvData.uiConfig?.statusBadge || ''} onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, statusBadge: e.target.value } })} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">Hero Title Prefix</label>
                      <input type="text" value={cvData.uiConfig?.heroTitlePrefix || ''} onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, heroTitlePrefix: e.target.value } })} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">Hero Title Highlight</label>
                      <input type="text" value={cvData.uiConfig?.heroTitleHighlight || ''} onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, heroTitleHighlight: e.target.value } })} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  </div>
                </div>
              )}

              {editorTab === 'stats' && (
                <div className="space-y-4">
                  {cvData.stats.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                      <div className="grid grid-cols-3 gap-2 flex-1">
                        <input type="text" value={st.value} onChange={(e) => { const next = [...cvData.stats]; next[i].value = e.target.value; setCvData({ ...cvData, stats: next }); }} className="px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold" />
                        <input type="text" value={st.label} onChange={(e) => { const next = [...cvData.stats]; next[i].label = e.target.value; setCvData({ ...cvData, stats: next }); }} className="px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                        <input type="text" value={st.sub || ''} onChange={(e) => { const next = [...cvData.stats]; next[i].sub = e.target.value; setCvData({ ...cvData, stats: next }); }} className="px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                      </div>
                      <button onClick={() => setCvData({ ...cvData, stats: cvData.stats.filter((_, idx) => idx !== i) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                  <button onClick={() => setCvData({ ...cvData, stats: [...cvData.stats, { label: "New", value: "100%", sub: "Sub" }] })} className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Metric</button>
                </div>
              )}

              {editorTab === 'skills' && (
                <div className="space-y-4">
                  {cvData.skills.map((group, index) => (
                    <div key={index} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <input type="text" value={group.category} onChange={(e) => { const next = [...cvData.skills]; next[index].category = e.target.value; setCvData({ ...cvData, skills: next }); }} className="font-bold text-sm bg-transparent border-b border-transparent focus:border-pink-500 focus:outline-none" />
                        <button onClick={() => setCvData({ ...cvData, skills: cvData.skills.filter((_, i) => i !== index) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <input type="text" value={group.items.join(', ')} onChange={(e) => { const next = [...cvData.skills]; next[index].items = e.target.value.split(',').map(s => s.trim()).filter(Boolean); setCvData({ ...cvData, skills: next }); }} className="w-full px-3 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  ))}
                  <button onClick={() => setCvData({ ...cvData, skills: [...cvData.skills, { category: "New Category", items: ["Tool"] }] })} className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Skill Category</button>
                </div>
              )}

              {editorTab === 'experience' && (
                <div className="space-y-5">
                  {cvData.experience.map((exp, expIdx) => (
                    <div key={exp.id || expIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-code uppercase text-pink-500">Role #{expIdx + 1}</span>
                        <button onClick={() => setCvData({ ...cvData, experience: cvData.experience.filter((_, i) => i !== expIdx) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input type="text" value={exp.role} onChange={(e) => { const next = [...cvData.experience]; next[expIdx].role = e.target.value; setCvData({ ...cvData, experience: next }); }} placeholder="Role" className="px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold" />
                        <input type="text" value={exp.period} onChange={(e) => { const next = [...cvData.experience]; next[expIdx].period = e.target.value; setCvData({ ...cvData, experience: next }); }} placeholder="Period" className="px-2.5 py-1.5 text-xs font-code rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                      </div>
                      <input type="text" value={exp.company} onChange={(e) => { const next = [...cvData.experience]; next[expIdx].company = e.target.value; setCvData({ ...cvData, experience: next }); }} placeholder="Company" className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                      <textarea rows={3} value={exp.bullets.join('\n')} onChange={(e) => { const next = [...cvData.experience]; next[expIdx].bullets = e.target.value.split('\n').filter(Boolean); setCvData({ ...cvData, experience: next }); }} placeholder="Bullets" className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  ))}
                  <button onClick={() => setCvData({ ...cvData, experience: [...cvData.experience, { id: `exp-${Date.now()}`, role: "Engineer", company: "Corp", period: "2025", bullets: ["Task"] }] })} className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Experience</button>
                </div>
              )}

              {editorTab === 'projects' && (
                <div className="space-y-5">
                  {cvData.projects.map((proj, pIdx) => (
                    <div key={proj.id || pIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-code uppercase text-pink-500">Project #{pIdx + 1}</span>
                        <button onClick={() => setCvData({ ...cvData, projects: cvData.projects.filter((_, i) => i !== pIdx) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <input type="text" value={proj.title} onChange={(e) => { const next = [...cvData.projects]; next[pIdx].title = e.target.value; setCvData({ ...cvData, projects: next }); }} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold" />
                      <textarea rows={3} value={proj.description} onChange={(e) => { const next = [...cvData.projects]; next[pIdx].description = e.target.value; setCvData({ ...cvData, projects: next }); }} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                    </div>
                  ))}
                  <button onClick={() => setCvData({ ...cvData, projects: [...cvData.projects, { id: `proj-${Date.now()}`, title: "New Project", description: "Desc", technologies: ["Python"] }] })} className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Project</button>
                </div>
              )}

              {editorTab === 'education' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Education</h4>
                    {cvData.education.map((edu, eduIdx) => (
                      <div key={edu.id || eduIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-code text-zinc-400">Degree #{eduIdx + 1}</span>
                          <button onClick={() => setCvData({ ...cvData, education: cvData.education.filter((_, i) => i !== eduIdx) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                        </div>
                        <input type="text" value={edu.institution} onChange={(e) => { const next = [...cvData.education]; next[eduIdx].institution = e.target.value; setCvData({ ...cvData, education: next }); }} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold" />
                        <input type="text" value={edu.degree} onChange={(e) => { const next = [...cvData.education]; next[eduIdx].degree = e.target.value; setCvData({ ...cvData, education: next }); }} className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                      </div>
                    ))}
                    <button onClick={() => setCvData({ ...cvData, education: [...cvData.education, { id: `edu-${Date.now()}`, institution: "University", degree: "B.Sc." }] })} className="w-full py-2 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Degree</button>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Languages</h4>
                    {(cvData.languages || []).map((lang, lIdx) => (
                      <div key={lIdx} className="flex items-center gap-2">
                        <input type="text" value={lang.language} onChange={(e) => { const next = [...cvData.languages]; next[lIdx].language = e.target.value; setCvData({ ...cvData, languages: next }); }} placeholder="Language" className="flex-1 px-2.5 py-1.5 text-xs rounded border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold" />
                        <input type="text" value={lang.proficiency} onChange={(e) => { const next = [...cvData.languages]; next[lIdx].proficiency = e.target.value; setCvData({ ...cvData, languages: next }); }} placeholder="Proficiency" className="flex-1 px-2.5 py-1.5 text-xs font-code rounded border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                        <button onClick={() => setCvData({ ...cvData, languages: cvData.languages.filter((_, i) => i !== lIdx) })} className="text-zinc-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                    <button onClick={() => setCvData({ ...cvData, languages: [...(cvData.languages || []), { language: "New", proficiency: "Fluent" }] })} className="w-full py-2 rounded-xl border border-dashed border-zinc-400 text-xs font-bold flex items-center justify-center gap-1.5"><Plus className="w-4 h-4" /> Add Language</button>
                  </div>
                </div>
              )}

              {editorTab === 'honors' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-code uppercase text-pink-500 font-bold mb-1.5">Certifications (One per line)</label>
                    <textarea rows={4} value={cvData.certifications.join('\n')} onChange={(e) => setCvData({ ...cvData, certifications: e.target.value.split('\n').filter(Boolean) })} className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-xs font-code uppercase text-pink-500 font-bold mb-1.5">Achievements (One per line)</label>
                    <textarea rows={4} value={cvData.achievements.join('\n')} onChange={(e) => setCvData({ ...cvData, achievements: e.target.value.split('\n').filter(Boolean) })} className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-pink-200/60 dark:border-zinc-800 bg-pink-50/30 dark:bg-zinc-950/80 flex items-center justify-between text-xs">
              <button onClick={() => setShowResetConfirm(true)} className="px-2.5 py-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5" /> Reset</button>
              <button onClick={() => setIsEditorOpen(false)} className="px-4 py-1.5 rounded-lg font-semibold bg-pink-500 text-white hover:bg-pink-400 transition">Save & Close</button>
            </div>
          </div>
        </div>
      )}

      {showResetConfirm && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#141019] rounded-2xl p-6 max-w-sm w-full border border-pink-200 dark:border-pink-500/20 space-y-4">
            <h4 className="text-sm font-bold">Reset Profile Data?</h4>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowResetConfirm(false)} className="px-3 py-1.5 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800">Cancel</button>
              <button onClick={handleReset} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-600 text-white">Reset</button>
            </div>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="no-print fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-pink-50 text-white dark:text-zinc-950 text-xs font-semibold shadow-xl border border-pink-500/30">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 dark:text-pink-600" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}