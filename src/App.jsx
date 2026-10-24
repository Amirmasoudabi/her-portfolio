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
  ShieldCheck,
  Lock,
  Search,
  CheckCircle2,
  Image as ImageIcon,
  Eye,
  EyeOff
} from 'lucide-react';

// --- CUSTOM BRAND SVG ICONS ---
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

const STORAGE_KEY = 'executive_ai_rose_portfolio_v6';

// --- INITIAL CV DATA ---
const INITIAL_CV_DATA = {
  sections: {
    terminal: true,
    stats: true,
    skills: true,
    projects: true,
    experience: true,
    education: true,
    languages: true,
    publications: true,
    certifications: true,
    achievements: true
  },
  uiConfig: {
    statusBadge: "AI Architect",
    headerSubtitle: "Executive Technical Portfolio",
    heroBadge: "AI Architecture • Deep Learning • Distributed Systems",
    heroTitlePrefix: "Architecting intelligent systems with",
    heroTitleHighlight: "precision & grace.",
    terminalFilename: "ai_architect.py",
    terminalClass: "AIArchitect",
    terminalFocus: "LLMs, RAG & Scale",
    terminalStack: "Python, PyTorch, FastAPI",
    terminalDomains: "Deep Learning, Neural Search, Distributed Cloud",
    terminalPrecision: "0.9998",
    terminalFooterBadge: "Verified Profile",
    sectionSkillsTag: "// 01. CORE COMPETENCIES",
    sectionSkillsTitle: "AI & Engineering Stack",
    sectionProjectsTag: "// 02. ARCHITECTURAL CASE STUDIES",
    sectionProjectsTitle: "Selected AI & Distributed Systems",
    sectionExpTag: "// 03. CAREER PROGRESSION",
    sectionExpTitle: "Professional Experience & Leadership",
    sectionEduTag: "// 04. ACADEMIC EXCELLENCE",
    sectionEduTitle: "Education & Languages",
    sectionPubTag: "// 05. SCIENTIFIC RESEARCH",
    sectionPubTitle: "Publications & Honors",
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
    { label: "Engineering Experience", value: "8+ Yrs", sub: "AI & Distributed Systems" },
    { label: "Model Accuracy", value: "99.4%", sub: "Production Inference" },
    { label: "AI & API Services", value: "150+", sub: "High-Throughput Endpoints" },
    { label: "Academic Distinction", value: "Rank 1", sub: "Honors Graduate" }
  ],
  skills: [
    {
      category: "AI & Deep Learning",
      items: ["PyTorch", "TensorFlow", "LangChain", "RAG Architectures", "OpenAI API", "HuggingFace", "NLP", "Computer Vision", "Vector Databases", "Scikit-learn"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript", "Java", "SQL", "C++", "Go", "Bash"]
    },
    {
      category: "Backend & Architecture",
      items: ["FastAPI", "Spring Boot", "Microservices", "REST & gRPC", "Async I/O", "Event-Driven Systems", "Domain-Driven Design"]
    },
    {
      category: "Data & Vector Stores",
      items: ["PostgreSQL", "Pinecone", "Qdrant", "Redis", "Elasticsearch", "MongoDB"]
    },
    {
      category: "Cloud & MLOps",
      items: ["Docker", "Kubernetes", "AWS", "MLflow", "GitHub Actions", "CI/CD Pipelines", "Terraform"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior AI Developer & Backend Architect",
      company: "Enterprise AI Lab",
      location: "Remote",
      period: "2023 - Present",
      bullets: [
        "Architected and deployed multi-agent LLM workflows and enterprise RAG systems reducing document retrieval latency by 75%.",
        "Designed high-concurrency Python/FastAPI inference microservices serving thousands of concurrent requests with automated GPU scaling.",
        "Led cross-functional code reviews, model evaluation benchmarks, and MLOps pipeline automation."
      ],
      technologies: "Python | PyTorch | LangChain | FastAPI | PostgreSQL | Redis | Docker | Kubernetes"
    },
    {
      id: "exp-2",
      role: "Machine Learning Engineer",
      company: "DataTech Innovations",
      location: "Tehran, Iran",
      period: "2020 - 2023",
      bullets: [
        "Developed deep anomaly detection and predictive time-series models achieving over 95% precision in production.",
        "Built resilient data ingestion and feature engineering pipelines processing millions of daily records."
      ],
      technologies: "Python | TensorFlow | Scikit-learn | Apache Kafka | Elasticsearch | GitLab CI/CD"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Enterprise Generative AI Assistant & RAG Engine",
      category: "AI / ML",
      meta: "Python • LangChain • OpenAI • Vector DB | 2025",
      description: "Engineered a production-grade Retrieval-Augmented Generation (RAG) platform integrating semantic vector search, hybrid re-ranking, and LLM orchestration—reducing enterprise knowledge discovery time by ~80%.",
      technologies: ["Python", "LangChain", "OpenAI API", "Vector DB", "FastAPI", "RAG"],
      link: "https://github.com/Amirmasoudabi"
    },
    {
      id: "proj-2",
      title: "Deep Neural Time-Series Anomaly Detection",
      category: "AI / ML",
      meta: "Python • PyTorch • Deep Autoencoders | 2024",
      description: "Implemented an unsupervised deep autoencoder architecture for real-time physiological and financial time-series anomaly detection, achieving 96.4% reconstruction accuracy.",
      technologies: ["Python", "PyTorch", "Autoencoders", "Time-Series", "Anomaly Detection"],
      link: "https://github.com/Amirmasoudabi"
    },
    {
      id: "proj-3",
      title: "High-Throughput Model Inference Gateway",
      category: "Backend & MLOps",
      meta: "FastAPI • Redis • Docker • Prometheus | 2024",
      description: "Designed a fault-tolerant API gateway for routing, semantic caching, and rate-limiting distributed LLM and deep learning inference workloads.",
      technologies: ["FastAPI", "Redis", "Docker", "Prometheus", "Microservices"],
      link: "https://github.com/Amirmasoudabi"
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of Tehran",
      degree: "M.Sc. in Computer Engineering (Artificial Intelligence)",
      location: "Tehran, Iran",
      period: "2018 - 2020",
      details: "Thesis: Deep Neural Architectures for Personalized Recommender Systems • Ranked Top Class Honors"
    },
    {
      id: "edu-2",
      institution: "Technical University",
      degree: "B.Sc. in Computer Engineering (Software Engineering)",
      location: "Iran",
      period: "2014 - 2018",
      details: "Graduated with First-Class Honors"
    }
  ],
  certifications: [
    "Deep Learning Specialization — DeepLearning.AI (Andrew Ng)",
    "Natural Language Processing with Attention Models — DeepLearning.AI",
    "Machine Learning Engineering for Production (MLOps) — Coursera"
  ],
  publications: [
    {
      id: "pub-1",
      title: "A Unified Deep Learning Framework for Context-Aware Recommender Systems",
      venue: "IEEE International Conference",
      year: "2021"
    }
  ],
  achievements: [
    "Finalist in National Artificial Intelligence & Data Science Hackathon.",
    "Ranked 1st in graduating Computer Engineering cohort with top academic distinction."
  ],
  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Persian", proficiency: "Native / Bilingual" }
  ]
};

// Merge helper to ensure older saved localStorage never breaks new fields
function mergeWithDefaults(saved) {
  if (!saved || typeof saved !== 'object') return INITIAL_CV_DATA;
  return {
    ...INITIAL_CV_DATA,
    ...saved,
    sections: { ...INITIAL_CV_DATA.sections, ...(saved.sections || {}) },
    uiConfig: { ...INITIAL_CV_DATA.uiConfig, ...(saved.uiConfig || {}) },
    personal: { ...INITIAL_CV_DATA.personal, ...(saved.personal || {}) },
    stats: Array.isArray(saved.stats) ? saved.stats : INITIAL_CV_DATA.stats,
    skills: Array.isArray(saved.skills) ? saved.skills : INITIAL_CV_DATA.skills,
    experience: Array.isArray(saved.experience) ? saved.experience : INITIAL_CV_DATA.experience,
    projects: Array.isArray(saved.projects) ? saved.projects : INITIAL_CV_DATA.projects,
    education: Array.isArray(saved.education) ? saved.education : INITIAL_CV_DATA.education,
    certifications: Array.isArray(saved.certifications) ? saved.certifications : INITIAL_CV_DATA.certifications,
    publications: Array.isArray(saved.publications) ? saved.publications : INITIAL_CV_DATA.publications,
    achievements: Array.isArray(saved.achievements) ? saved.achievements : INITIAL_CV_DATA.achievements,
    languages: Array.isArray(saved.languages) ? saved.languages : INITIAL_CV_DATA.languages
  };
}

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
          return mergeWithDefaults(JSON.parse(decodeURIComponent(atob(encoded))));
        }
      }
    } catch (e) {
      console.warn("Could not parse CV from URL hash:", e);
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return mergeWithDefaults(JSON.parse(saved));
    } catch (e) {
      console.warn("Could not load from localStorage:", e);
    }

    return INITIAL_CV_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
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
        triggerToast("Studio CMS toggled");
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
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopiedEmail(true);
    triggerToast("Email copied to clipboard!");
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
        triggerToast("512×512 PNG Logo applied!");
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
    a.setAttribute("download", `${(cvData.personal.fullName || 'Portfolio').replace(/\s+/g, '_')}_Data.json`);
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
        setCvData(mergeWithDefaults(imported));
        triggerToast("Portfolio data imported successfully!");
      } catch {
        triggerToast("Error parsing JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const handleShareEmployerLink = () => {
    try {
      const clone = JSON.parse(JSON.stringify(cvData));
      // Keep URL clean if logo is a large base64 string
      if (clone.personal?.logoUrl?.startsWith('data:image')) {
        delete clone.personal.logoUrl;
      }
      const jsonStr = JSON.stringify(clone);
      const encoded = btoa(encodeURIComponent(jsonStr));
      const url = new URL(window.location.href);
      url.hash = `cv=${encoded}`;
      navigator.clipboard.writeText(url.toString());
      triggerToast("Shareable link copied!");
    } catch {
      navigator.clipboard.writeText(window.location.href);
      triggerToast("Link copied!");
    }
  };

  const handleReset = () => {
    // Clear all previous version keys as well
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith('executive_ai_rose_portfolio')) {
        localStorage.removeItem(k);
      }
    });
    setCvData(INITIAL_CV_DATA);
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    setShowResetConfirm(false);
    triggerToast("Restored to code defaults!");
  };

  const handlePrint = () => {
    if (viewMode !== 'cv') {
      setViewMode('cv');
      setTimeout(() => window.print(), 350);
    } else {
      window.print();
    }
  };

  const toggleSection = (key) => {
    setCvData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [key]: !prev.sections?.[key]
      }
    }));
  };

  const projectCategories = useMemo(() => {
    const cats = new Set((cvData.projects || []).map(p => p.category || 'Architecture'));
    return ['All', ...Array.from(cats)];
  }, [cvData.projects]);

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'All') return cvData.projects || [];
    return (cvData.projects || []).filter(p => p.category === activeProjectFilter);
  }, [cvData.projects, activeProjectFilter]);

  const sec = cvData.sections || INITIAL_CV_DATA.sections;
  const hasEduColumn = (sec.education && cvData.education?.length > 0) || (sec.languages && cvData.languages?.length > 0);
  const hasPubColumn = (sec.publications && cvData.publications?.length > 0) || (sec.certifications && cvData.certifications?.length > 0) || (sec.achievements && cvData.achievements?.length > 0);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen w-full overflow-x-hidden ${
        darkMode ? 'dark bg-[#0b080d] text-zinc-100' : 'bg-[#fcf9fb] text-zinc-900'
      } font-poppins antialiased selection:bg-pink-400 selection:text-zinc-950 transition-colors duration-300`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-poppins { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif; }
        .font-code { font-family: 'JetBrains Mono', monospace; font-feature-settings: "liga" 1, "calt" 1; }

        /* Hide scrollbars on horizontal pill navs */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media print {
          body { background: white !important; color: black !important; font-size: 10pt; font-family: 'Poppins', sans-serif !important; }
          .no-print { display: none !important; }
          .print-container { padding: 0 !important; margin: 0 !important; box-shadow: none !important; border: none !important; max-width: 100% !important; width: 100% !important; }
          a { text-decoration: none !important; color: black !important; }
        }
      `}</style>

      {/* AMBIENT BACKGROUND */}
      {viewMode === 'portfolio' && (
        <div className="no-print pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="fixed inset-0 transition-opacity duration-500 hidden sm:block"
            style={{
              background: darkMode
                ? `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 114, 182, 0.065), transparent 45%)`
                : `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 114, 182, 0.09), transparent 45%)`
            }}
          />
          <div className="absolute -top-36 sm:-top-48 left-1/2 -translate-x-1/2 w-[340px] sm:w-[900px] h-[240px] sm:h-[380px] bg-gradient-to-tr from-pink-500/10 via-rose-400/5 to-fuchsia-500/10 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: '52px 52px'
            }}
          />
        </div>
      )}

      {/* =========================================================================
          RESPONSIVE FLOATING HEADER
         ========================================================================= */}
      <header className="no-print sticky top-2 sm:top-4 z-40 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto h-14 sm:h-16 px-3 sm:px-5 rounded-2xl backdrop-blur-xl bg-white/85 dark:bg-[#130f17]/85 border border-pink-200/60 dark:border-pink-500/15 shadow-lg shadow-pink-950/5 flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div
              onDoubleClick={() => { setIsEditorOpen(true); triggerToast("Studio CMS Unlocked"); }}
              title="Double-click to open Studio CMS"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/15 via-rose-500/10 to-fuchsia-500/15 border border-pink-300/60 dark:border-pink-400/25 flex items-center justify-center shrink-0 cursor-pointer select-none shadow-sm hover:scale-105 transition"
            >
              {cvData.personal.logoUrl ? (
                <img src={cvData.personal.logoUrl} alt="Logo" className="w-full h-full object-contain" />
              ) : (
                <span className="font-code font-bold text-sm text-pink-600 dark:text-pink-300">
                  {(cvData.personal.fullName || "A").charAt(0)}
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs sm:text-sm tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
                  {cvData.personal.fullName}
                </span>
                {cvData.uiConfig?.statusBadge && (
                  <span
                    onDoubleClick={() => { setIsEditorOpen(true); triggerToast("Studio CMS Unlocked"); }}
                    className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-code font-medium bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20 cursor-pointer select-none shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 dark:bg-pink-400 animate-pulse" />
                    <span>{cvData.uiConfig.statusBadge}</span>
                  </span>
                )}
              </div>
              {cvData.uiConfig?.headerSubtitle && (
                <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 truncate hidden sm:block">
                  {cvData.uiConfig.headerSubtitle}
                </p>
              )}
            </div>
          </div>

          {/* Center View Mode Switcher */}
          <div className="flex items-center bg-pink-50/70 dark:bg-zinc-950/90 p-0.5 sm:p-1 rounded-xl border border-pink-200/60 dark:border-zinc-800/90 shrink-0">
            <button
              onClick={() => setViewMode('portfolio')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                viewMode === 'portfolio'
                  ? 'bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-300 shadow-sm border border-pink-100 dark:border-pink-500/20'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setViewMode('cv')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all ${
                viewMode === 'cv'
                  ? 'bg-white dark:bg-zinc-900 text-pink-600 dark:text-pink-300 shadow-sm border border-pink-100 dark:border-pink-500/20'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span>Formal CV</span>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => setIsCommandOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-code text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-900/90 hover:border-pink-400/40 border border-zinc-200/70 dark:border-zinc-800 transition"
              title="Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
              <span className="hidden md:inline text-[11px]">⌘K</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white transition shadow-sm shadow-pink-500/20"
              title="Export Official PDF Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download PDF</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-pink-50 dark:hover:bg-zinc-800/80 transition"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-pink-300" /> : <Moon className="w-4 h-4 text-rose-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          VIEW 1: EXECUTIVE PORTFOLIO
         ========================================================================= */}
      {viewMode === 'portfolio' && (
        <main className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 py-6 sm:py-10 space-y-16 sm:space-y-24">
          
          {/* 1. HERO BENTO */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 pt-1">
            
            {/* Bio Card */}
            <div className={`${sec.terminal ? 'lg:col-span-8' : 'lg:col-span-12'} p-5 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#120e16]/90 border border-pink-200/60 dark:border-pink-500/15 backdrop-blur-md flex flex-col justify-between space-y-5 sm:space-y-6 shadow-sm`}>
              <div className="space-y-3.5 sm:space-y-4">
                {cvData.uiConfig?.heroBadge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-code bg-pink-500/10 text-pink-700 dark:text-pink-300 border border-pink-500/20 max-w-full">
                    <Sparkles className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 shrink-0" />
                    <span className="truncate">{cvData.uiConfig.heroBadge}</span>
                  </div>
                )}

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
                  {cvData.uiConfig?.heroTitlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400">
                    {cvData.uiConfig?.heroTitleHighlight}
                  </span>
                </h1>

                <p className="text-xs sm:text-[15px] text-zinc-600 dark:text-zinc-300/90 leading-relaxed max-w-3xl font-normal">
                  {cvData.personal.summary}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                {cvData.personal.email && (
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-code font-medium bg-zinc-900 dark:bg-pink-50 text-white dark:text-zinc-950 hover:opacity-90 transition shadow-sm max-w-full"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-pink-400 dark:text-pink-600 shrink-0" />
                    )}
                    <span className="truncate">{copiedEmail ? "Copied to Clipboard" : cvData.personal.email}</span>
                  </button>
                )}

                {cvData.personal.github && (
                  <a
                    href={cvData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-medium bg-pink-50/70 dark:bg-zinc-900/90 hover:border-pink-400/50 text-zinc-700 dark:text-zinc-200 border border-pink-200/70 dark:border-zinc-800 transition"
                  >
                    <Github className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}

                {cvData.personal.linkedin && (
                  <a
                    href={cvData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-medium bg-pink-50/70 dark:bg-zinc-900/90 hover:border-pink-400/50 text-zinc-700 dark:text-zinc-200 border border-pink-200/70 dark:border-zinc-800 transition"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                )}

                {cvData.personal.location && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1.5 text-xs font-code text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400 shrink-0" />
                    <span>{cvData.personal.location}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Code Terminal Card (Optional via toggle) */}
            {sec.terminal && (
              <div className="lg:col-span-4 p-5 sm:p-6 rounded-3xl bg-[#110d16] text-zinc-200 border border-pink-500/20 flex flex-col justify-between font-code text-xs shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800/90 pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-300/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400/80" />
                  </div>
                  <span className="text-[11px] text-pink-300/70 truncate">{cvData.uiConfig?.terminalFilename || "ai_architect.py"}</span>
                </div>

                <div className="space-y-2 text-[11px] sm:text-[11.5px] leading-relaxed break-words overflow-x-auto">
                  <div>
                    <span className="text-pink-400">class</span>{' '}
                    <span className="text-rose-200 font-semibold">{cvData.uiConfig?.terminalClass || "AIArchitect"}</span>:
                  </div>
                  <div className="pl-3 sm:pl-4 text-zinc-400">
                    focus = <span className="text-pink-300">"{cvData.uiConfig?.terminalFocus}"</span>
                  </div>
                  <div className="pl-3 sm:pl-4 text-zinc-400">
                    stack = [{(cvData.uiConfig?.terminalStack || "").split(',').filter(Boolean).map((s, i, arr) => (
                      <span key={i}><span className="text-pink-300">"{s.trim()}"</span>{i < arr.length - 1 ? ', ' : ''}</span>
                    ))}]
                  </div>
                  <div className="pl-3 sm:pl-4 text-zinc-400">
                    domains = [
                    <div className="pl-3 sm:pl-4 text-fuchsia-300/90">
                      {(cvData.uiConfig?.terminalDomains || "").split(',').filter(Boolean).map((d, i, arr) => (
                        <div key={i}>"{d.trim()}"{i < arr.length - 1 ? ',' : ''}</div>
                      ))}
                    </div>
                    ]
                  </div>
                  <div className="pl-3 sm:pl-4 text-zinc-400">
                    precision = <span className="text-rose-300">{cvData.uiConfig?.terminalPrecision}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/90 flex items-center justify-between gap-2 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-pink-300 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cvData.uiConfig?.terminalFooterBadge || "Verified Profile"}
                  </span>
                  <span className="truncate">{cvData.personal.phone}</span>
                </div>
              </div>
            )}

            {/* Metrics Cards (Optional via toggle) */}
            {sec.stats && cvData.stats?.length > 0 && (
              <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {cvData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/85 dark:bg-[#120e16]/80 border border-pink-200/50 dark:border-pink-500/15 hover:border-pink-400/50 transition group"
                  >
                    <div className="text-[10px] sm:text-[11px] font-code uppercase tracking-wider text-pink-600/70 dark:text-pink-300/60 truncate">
                      0{idx + 1} // {stat.label}
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-1.5 sm:mt-2 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors truncate">
                      {stat.value}
                    </div>
                    {stat.sub && (
                      <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                        {stat.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 2. SKILLS MATRIX */}
          {sec.skills && cvData.skills?.length > 0 && (
            <section id="skills" className="space-y-5 sm:space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
                <div>
                  <div className="text-[11px] sm:text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">
                    {cvData.uiConfig?.sectionSkillsTag || "// 01. CORE COMPETENCIES"}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                    {cvData.uiConfig?.sectionSkillsTitle || "AI & Engineering Stack"}
                  </h2>
                </div>

                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  <button
                    onClick={() => setSelectedSkillCat('All')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-code whitespace-nowrap transition ${
                      selectedSkillCat === 'All'
                        ? 'bg-pink-500 text-white font-semibold shadow-sm'
                        : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-pink-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    All Domains
                  </button>
                  {cvData.skills.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSkillCat(s.category)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-code whitespace-nowrap transition ${
                        selectedSkillCat === s.category
                          ? 'bg-pink-500 text-white font-semibold shadow-sm'
                          : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-pink-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {s.category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                {cvData.skills.map((group, idx) => {
                  const isHighlighted = selectedSkillCat === 'All' || selectedSkillCat === group.category;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSkillCat(selectedSkillCat === group.category ? 'All' : group.category)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isHighlighted
                          ? 'bg-white dark:bg-[#120e16]/90 border-pink-200/70 dark:border-pink-500/20 hover:border-pink-400/60 opacity-100'
                          : 'bg-zinc-100/40 dark:bg-zinc-950/30 border-zinc-200/30 dark:border-zinc-900 opacity-35'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-pink-500 dark:bg-pink-400 shrink-0" />
                          <span className="truncate">{group.category}</span>
                        </span>
                        <span className="text-[11px] font-code text-zinc-400 shrink-0">
                          {group.items.length}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-xs font-code rounded-lg bg-pink-50/60 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-pink-200/50 dark:border-zinc-800"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 3. PROJECTS */}
          {sec.projects && cvData.projects?.length > 0 && (
            <section id="projects" className="space-y-5 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
                <div>
                  <div className="text-[11px] sm:text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">
                    {cvData.uiConfig?.sectionProjectsTag || "// 02. ARCHITECTURAL CASE STUDIES"}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                    {cvData.uiConfig?.sectionProjectsTitle || "Selected AI & Distributed Systems"}
                  </h2>
                </div>

                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {projectCategories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveProjectFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-code whitespace-nowrap transition ${
                        activeProjectFilter === cat
                          ? 'bg-zinc-900 dark:bg-pink-400 text-white dark:text-zinc-950 font-semibold'
                          : 'bg-pink-50/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-pink-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id || idx}
                    className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#120e16]/90 border border-pink-200/70 dark:border-pink-500/15 hover:border-pink-400/60 transition-all flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-code uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20 truncate">
                          {project.category || "Architecture"}
                        </span>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-pink-500 dark:hover:text-pink-300 hover:bg-pink-50 dark:hover:bg-zinc-800 transition shrink-0"
                            title="View Project"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.meta && (
                        <div className="text-[11px] sm:text-xs font-code text-zinc-400 dark:text-zinc-500 mt-1 mb-3">
                          {project.meta}
                        </div>
                      )}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                        {project.description}
                      </p>
                    </div>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-pink-100/80 dark:border-zinc-800/80">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-code rounded-md bg-pink-50/70 dark:bg-zinc-900 text-pink-700 dark:text-pink-300 border border-pink-200/40 dark:border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. EXPERIENCE TIMELINE */}
          {sec.experience && cvData.experience?.length > 0 && (
            <section id="experience" className="space-y-6 sm:space-y-8">
              <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-4">
                <div className="text-[11px] sm:text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">
                  {cvData.uiConfig?.sectionExpTag || "// 03. CAREER PROGRESSION"}
                </div>
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                  {cvData.uiConfig?.sectionExpTitle || "Professional Experience & Leadership"}
                </h2>
              </div>

              <div className="relative pl-4 sm:pl-8 border-l border-pink-200 dark:border-pink-500/20 space-y-6 sm:space-y-10">
                {cvData.experience.map((exp, idx) => (
                  <div key={exp.id || idx} className="relative group">
                    <span className="absolute -left-[23px] sm:-left-[39px] top-2 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white dark:bg-[#0b080d] border-2 border-pink-500 dark:border-pink-400 group-hover:scale-125 transition" />

                    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 hover:border-pink-400/40 transition shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-pink-100/80 dark:border-zinc-800/80">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <div className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-300">
                            {exp.company}
                            {exp.location && (
                              <span className="text-zinc-400 dark:text-zinc-500 font-normal">
                                {' '}• {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                        {exp.period && (
                          <span className="text-[11px] sm:text-xs font-code px-3 py-1 rounded-full bg-pink-50 dark:bg-zinc-900 text-pink-700 dark:text-pink-300 border border-pink-200/50 dark:border-zinc-800 self-start sm:self-auto shrink-0">
                            {exp.period}
                          </span>
                        )}
                      </div>

                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2 leading-relaxed">
                              <ChevronRight className="w-4 h-4 text-pink-500 dark:text-pink-400 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pink-100/80 dark:border-zinc-800/80">
                          {exp.technologies.split('|').filter(Boolean).map((t, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-code bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                            >
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
          )}

          {/* 5. EDUCATION, LANGUAGES, PUBLICATIONS & HONORS */}
          {(hasEduColumn || hasPubColumn) && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Education & Languages */}
              {hasEduColumn && (
                <div className={`${hasPubColumn ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
                  <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-3">
                    <div className="text-[11px] sm:text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">
                      {cvData.uiConfig?.sectionEduTag || "// 04. ACADEMIC EXCELLENCE"}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                      {cvData.uiConfig?.sectionEduTitle || "Education & Languages"}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {sec.education && cvData.education?.map((edu, idx) => (
                      <div
                        key={edu.id || idx}
                        className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                            {edu.institution}
                          </h3>
                          <span className="text-xs font-code text-zinc-400">
                            {edu.period}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-300 mt-0.5 mb-2">
                          {edu.degree}
                        </div>
                        {edu.details && (
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-code">
                            {edu.details}
                          </p>
                        )}
                      </div>
                    ))}

                    {sec.languages && cvData.languages?.length > 0 && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-3">
                        <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                          <span>Languages & Communication</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cvData.languages.map((lang, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-3 rounded-xl bg-pink-50/50 dark:bg-zinc-900/90 border border-pink-200/40 dark:border-zinc-800 flex items-center justify-between gap-2"
                            >
                              <span className="font-semibold text-xs text-zinc-900 dark:text-white">
                                {lang.language}
                              </span>
                              <span className="text-[11px] font-code text-pink-600 dark:text-pink-300 text-right">
                                {lang.proficiency}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Right Column: Publications, Certifications & Honors */}
              {hasPubColumn && (
                <div className={`${hasEduColumn ? 'lg:col-span-5' : 'lg:col-span-12'} space-y-4`}>
                  <div className="border-b border-pink-200/60 dark:border-zinc-800/80 pb-3">
                    <div className="text-[11px] sm:text-xs font-code uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-1">
                      {cvData.uiConfig?.sectionPubTag || "// 05. SCIENTIFIC RESEARCH"}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                      {cvData.uiConfig?.sectionPubTitle || "Publications & Honors"}
                    </h2>
                  </div>

                  {sec.publications && cvData.publications?.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-3">
                      <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                        <span>Peer-Reviewed Publications</span>
                      </div>
                      {cvData.publications.map((pub, idx) => (
                        <div key={pub.id || idx} className="text-xs space-y-0.5">
                          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {pub.title}
                          </div>
                          <div className="text-zinc-500 dark:text-zinc-400 font-code text-[11px]">
                            {pub.venue}{pub.year ? ` • ${pub.year}` : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {sec.certifications && cvData.certifications?.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-2.5">
                      <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
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
                  )}

                  {sec.achievements && cvData.achievements?.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#120e16]/85 border border-pink-200/70 dark:border-pink-500/15 space-y-2.5">
                      <div className="text-xs font-code uppercase text-zinc-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-rose-400" />
                        <span>Honors & Awards</span>
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
                  )}
                </div>
              )}
            </section>
          )}

          {/* FOOTER */}
          <footer className="pt-8 pb-12 border-t border-pink-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2.5 font-code text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
              <span>{cvData.personal.fullName} — {cvData.uiConfig?.footerTagline || "AI Developer & Architect"}</span>
            </div>
            <div className="flex items-center gap-4 font-code text-[11px]">
              <button onClick={() => setIsCommandOpen(true)} className="hover:text-pink-600 dark:hover:text-pink-300 transition">
                Quick Actions (⌘K)
              </button>
              <span>•</span>
              <button onClick={() => setViewMode('cv')} className="hover:text-pink-600 dark:hover:text-pink-300 transition">
                Formal Printable CV
              </button>
            </div>
          </footer>
        </main>
      )}

      {/* =========================================================================
          VIEW 2: FORMAL PRINTABLE CV
         ========================================================================= */}
      {viewMode === 'cv' && (
        <main className="py-6 sm:py-8 px-3 sm:px-6 max-w-4xl mx-auto">
          <article className="print-container bg-white text-neutral-900 p-6 sm:p-14 shadow-2xl rounded-sm border border-neutral-200 min-h-[1050px] font-poppins leading-relaxed">
            
            <header className="mb-6 flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-1">
                  {cvData.personal.fullName}
                </h1>
                <p className="text-xs sm:text-base font-medium text-neutral-800 mb-2">
                  {cvData.personal.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-code text-neutral-700">
                  {cvData.personal.email && (
                    <>
                      <a href={`mailto:${cvData.personal.email}`} className="hover:underline">{cvData.personal.email}</a>
                      <span>|</span>
                    </>
                  )}
                  {cvData.personal.phone && (
                    <>
                      <span>{cvData.personal.phone}</span>
                      <span>|</span>
                    </>
                  )}
                  {cvData.personal.location && (
                    <>
                      <span>{cvData.personal.location}</span>
                      <span>|</span>
                    </>
                  )}
                  {cvData.personal.github && (
                    <>
                      <a href={cvData.personal.github} target="_blank" rel="noreferrer" className="hover:underline">
                        {cvData.personal.github.replace('https://', '')}
                      </a>
                      <span>|</span>
                    </>
                  )}
                  {cvData.personal.linkedin && (
                    <a href={cvData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                      {cvData.personal.linkedin.replace('https://', '')}
                    </a>
                  )}
                </div>
              </div>

              {cvData.personal.logoUrl && (
                <img
                  src={cvData.personal.logoUrl}
                  alt="Logo"
                  className="w-14 h-14 object-contain rounded-lg border border-neutral-200 shrink-0"
                />
              )}
            </header>

            {cvData.personal.summary && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs text-justify leading-relaxed text-neutral-800">
                  {cvData.personal.summary}
                </p>
              </section>
            )}

            {sec.skills && cvData.skills?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-1 text-xs text-neutral-800">
                  {cvData.skills.map((skillGroup, idx) => (
                    <div key={idx} className="leading-snug">
                      <span className="font-semibold text-neutral-900">{skillGroup.category}: </span>
                      <span className="font-code text-[11px]">{skillGroup.items.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {sec.experience && cvData.experience?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">
                  Work Experience
                </h2>
                <div className="space-y-3.5">
                  {cvData.experience.map((exp, idx) => (
                    <div key={exp.id || idx}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs">
                        <span className="font-bold text-neutral-900">{exp.role}</span>
                        <span className="font-code font-medium text-neutral-800">{exp.period}</span>
                      </div>
                      <div className="text-xs text-neutral-700 italic mb-1">
                        {exp.company}{exp.location ? `, ${exp.location}` : ''}
                      </div>
                      <ul className="list-disc ml-4 space-y-0.5 text-xs text-neutral-800">
                        {(exp.bullets || []).map((b, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">{b}</li>
                        ))}
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
            )}

            {sec.projects && cvData.projects?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">
                  Selected Projects
                </h2>
                <div className="space-y-2.5">
                  {cvData.projects.map((proj, idx) => (
                    <div key={proj.id || idx}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs">
                        <span className="font-bold text-neutral-900">• {proj.title}</span>
                        <span className="text-[11px] font-code text-neutral-700">{proj.meta}</span>
                      </div>
                      <p className="text-xs text-neutral-800 mt-0.5 leading-relaxed pl-3">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {sec.publications && cvData.publications?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-1.5">
                  Publications
                </h2>
                <div className="space-y-1 text-xs text-neutral-800">
                  {cvData.publications.map((pub, idx) => (
                    <div key={pub.id || idx}>
                      <span className="font-bold">• {pub.title}</span> — {pub.venue}{pub.year ? `, ${pub.year}` : ''}.
                    </div>
                  ))}
                </div>
              </section>
            )}

            {sec.certifications && cvData.certifications?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-1.5">
                  Certifications
                </h2>
                <p className="text-xs text-neutral-800 leading-relaxed">
                  {cvData.certifications.join(" • ")}
                </p>
              </section>
            )}

            {sec.achievements && cvData.achievements?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-1.5">
                  Honors & Achievements
                </h2>
                <ul className="list-disc ml-4 space-y-0.5 text-xs text-neutral-800">
                  {cvData.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </section>
            )}

            {sec.languages && cvData.languages?.length > 0 && (
              <section className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-1.5">
                  Languages
                </h2>
                <div className="text-xs text-neutral-800">
                  {cvData.languages.map((l, idx) => (
                    <span key={idx}>
                      <span className="font-bold">{l.language}</span> ({l.proficiency})
                      {idx < cvData.languages.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {sec.education && cvData.education?.length > 0 && (
              <section className="mb-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-1 mb-2.5">
                  Education
                </h2>
                <div className="space-y-2.5">
                  {cvData.education.map((edu, idx) => (
                    <div key={edu.id || idx}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs">
                        <span className="font-bold text-neutral-900">{edu.institution}</span>
                        <span className="font-semibold text-neutral-800">{edu.location}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-xs text-neutral-700 italic">
                        <span>{edu.degree}</span>
                        <span className="font-code not-italic">{edu.period}</span>
                      </div>
                      {edu.details && (
                        <p className="text-xs text-neutral-800 mt-0.5">{edu.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>
      )}

      {/* =========================================================================
          COMMAND PALETTE (Cmd/Ctrl + K)
         ========================================================================= */}
      {isCommandOpen && (
        <div
          onClick={() => setIsCommandOpen(false)}
          className="no-print fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-24 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#141019] border border-pink-200 dark:border-pink-500/20 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-pink-100 dark:border-zinc-800 gap-2.5">
              <Search className="w-4 h-4 text-pink-500" />
              <input
                type="text"
                autoFocus
                value={commandQuery}
                onChange={(e) => setCommandQuery(e.target.value)}
                placeholder="Type a command (email, pdf, studio, theme)..."
                className="w-full bg-transparent text-sm focus:outline-none text-zinc-900 dark:text-white"
              />
              <button
                onClick={() => setIsCommandOpen(false)}
                className="text-[10px] font-code px-1.5 py-0.5 rounded bg-pink-50 dark:bg-zinc-800 text-zinc-500"
              >
                ESC
              </button>
            </div>

            <div className="p-2 max-h-80 overflow-y-auto space-y-1 text-xs">
              <button
                onClick={() => { handleCopyEmail(); setIsCommandOpen(false); }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 dark:hover:bg-zinc-800/80 transition"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Mail className="w-4 h-4 text-pink-500" />
                  Copy Email ({cvData.personal.email})
                </span>
                <span className="font-code text-[10px] text-zinc-400">Action</span>
              </button>

              <button
                onClick={() => { setIsCommandOpen(false); handlePrint(); }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 dark:hover:bg-zinc-800/80 transition"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Printer className="w-4 h-4 text-pink-500" />
                  Download / Print Formal CV (PDF)
                </span>
                <span className="font-code text-[10px] text-zinc-400">PDF</span>
              </button>

              <button
                onClick={() => { setDarkMode(!darkMode); setIsCommandOpen(false); }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-50 dark:hover:bg-zinc-800/80 transition"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  {darkMode ? <Sun className="w-4 h-4 text-pink-400" /> : <Moon className="w-4 h-4 text-rose-500" />}
                  Switch to {darkMode ? 'Light' : 'Dark'} Mode
                </span>
                <span className="font-code text-[10px] text-zinc-400">Theme</span>
              </button>

              <button
                onClick={() => { setIsCommandOpen(false); setIsEditorOpen(true); }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-pink-500/10 text-pink-600 dark:text-pink-300 transition"
              >
                <span className="flex items-center gap-2.5 font-semibold">
                  <Sliders className="w-4 h-4" />
                  Open Studio CMS
                </span>
                <span className="font-code text-[10px]">⌘E</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          STEALTH STUDIO CMS DRAWER (Full Control over All Sections & Items)
         ========================================================================= */}
      {isEditorOpen && (
        <div className="no-print fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-2xl bg-white dark:bg-[#141019] text-zinc-900 dark:text-zinc-100 h-full shadow-2xl flex flex-col border-l border-pink-200 dark:border-pink-500/20">
            
            {/* Studio Header */}
            <div className="px-4 sm:px-6 py-4 border-b border-pink-200/70 dark:border-zinc-800 flex items-center justify-between gap-2 bg-pink-50/40 dark:bg-zinc-950/60">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20 shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm truncate">Stealth Studio CMS</h3>
                  <p className="text-[11px] text-zinc-500 truncate">
                    Press <code className="font-code">Ctrl+E</code> or double-click logo anytime
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleShareEmployerLink}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-500 text-white hover:bg-pink-400 transition flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Link</span>
                </button>
                <button
                  onClick={() => setIsEditorOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Studio Navigation Tabs (All 8 Tabs) */}
            <div className="flex border-b border-pink-200/60 dark:border-zinc-800 px-4 sm:px-6 gap-1.5 overflow-x-auto no-scrollbar text-xs font-semibold py-2.5 shrink-0">
              {[
                { id: 'personal', label: 'Identity & Logo' },
                { id: 'ui', label: 'Sections & UI' },
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
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition ${
                    editorTab === tab.id
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'text-zinc-500 hover:bg-pink-50 dark:hover:bg-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Studio Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* TAB 1: Identity & 512x512 PNG Logo */}
              {editorTab === 'personal' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl border border-pink-200 dark:border-pink-500/25 bg-pink-50/30 dark:bg-pink-950/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-code uppercase text-pink-600 dark:text-pink-300 font-semibold flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Header Brand Logo (PNG 512×512)
                      </label>
                      {cvData.personal.logoUrl && (
                        <button
                          onClick={() => setCvData({ ...cvData, personal: { ...cvData.personal, logoUrl: "" } })}
                          className="text-[11px] text-rose-500 hover:underline font-code"
                        >
                          Remove Logo
                        </button>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl border border-pink-300 dark:border-pink-500/30 bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden shrink-0">
                        {cvData.personal.logoUrl ? (
                          <img src={cvData.personal.logoUrl} alt="Preview" className="w-full h-full object-contain" />
                        ) : (
                          <span className="font-code text-lg font-bold text-pink-500">
                            {(cvData.personal.fullName || "A").charAt(0)}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-pink-500 hover:bg-pink-400 text-white cursor-pointer transition shadow-sm">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload 512×512 PNG File</span>
                          <input
                            type="file"
                            accept="image/png,image/webp,image/jpeg,image/svg+xml"
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                        </label>
                        <input
                          type="text"
                          value={cvData.personal.logoUrl || ''}
                          onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, logoUrl: e.target.value } })}
                          placeholder="Or paste direct PNG image URL"
                          className="w-full px-3 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={cvData.personal.fullName}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, fullName: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Website URL</label>
                      <input
                        type="text"
                        value={cvData.personal.website || ''}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, website: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Headline / Role</label>
                    <input
                      type="text"
                      value={cvData.personal.title}
                      onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, title: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Email</label>
                      <input
                        type="email"
                        value={cvData.personal.email}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, email: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Phone</label>
                      <input
                        type="text"
                        value={cvData.personal.phone}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, phone: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Location</label>
                      <input
                        type="text"
                        value={cvData.personal.location}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, location: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-code uppercase text-zinc-400 mb-1">GitHub URL</label>
                      <input
                        type="text"
                        value={cvData.personal.github}
                        onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, github: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-code uppercase text-zinc-400 mb-1">LinkedIn URL</label>
                    <input
                      type="text"
                      value={cvData.personal.linkedin}
                      onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, linkedin: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code uppercase text-zinc-400 mb-1">Executive Summary</label>
                    <textarea
                      rows={5}
                      value={cvData.personal.summary}
                      onChange={(e) => setCvData({ ...cvData, personal: { ...cvData.personal, summary: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: Section Visibility Toggles, Hero, Terminal & UI Labels */}
              {editorTab === 'ui' && (
                <div className="space-y-6">
                  
                  {/* Master Section Visibility Toggles */}
                  <div className="p-4 rounded-2xl border border-pink-200 dark:border-pink-500/25 bg-pink-50/30 dark:bg-pink-950/10 space-y-3">
                    <div>
                      <h4 className="text-xs font-code uppercase text-pink-600 dark:text-pink-300 font-bold">
                        Show / Hide Sections (Remove Any Section)
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Turn off any section below to completely hide it from both the Portfolio and Formal CV.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {[
                        { key: 'terminal', label: 'Code Terminal Box' },
                        { key: 'stats', label: 'Metrics / Stats Row' },
                        { key: 'skills', label: 'Skills & Tech Stack' },
                        { key: 'projects', label: 'Projects Section' },
                        { key: 'experience', label: 'Work Experience' },
                        { key: 'education', label: 'Education Section' },
                        { key: 'languages', label: 'Languages Card' },
                        { key: 'publications', label: 'Publications Card' },
                        { key: 'certifications', label: 'Certifications Card' },
                        { key: 'achievements', label: 'Honors & Awards Card' }
                      ].map(item => {
                        const isVisible = sec[item.key] !== false;
                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => toggleSection(item.key)}
                            className={`flex items-center justify-between px-3 py-2 rounded-xl border text-xs font-medium transition ${
                              isVisible
                                ? 'bg-white dark:bg-zinc-900 border-pink-300 dark:border-pink-500/30 text-zinc-900 dark:text-zinc-100'
                                : 'bg-zinc-100/60 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 text-zinc-400 line-through'
                            }`}
                          >
                            <span>{item.label}</span>
                            {isVisible ? (
                              <Eye className="w-4 h-4 text-pink-500" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-zinc-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Header & Hero Texts */}
                  <div className="p-4 rounded-2xl border border-pink-200/70 dark:border-zinc-800 space-y-3">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Header & Hero Texts</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Status Badge</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.statusBadge || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, statusBadge: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Header Subtitle</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.headerSubtitle || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, headerSubtitle: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">Hero Top Tag</label>
                      <input
                        type="text"
                        value={cvData.uiConfig?.heroBadge || ''}
                        onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, heroBadge: e.target.value } })}
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Hero Title Prefix</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.heroTitlePrefix || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, heroTitlePrefix: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Hero Highlight (Pink Gradient)</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.heroTitleHighlight || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, heroTitleHighlight: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Code Terminal Window */}
                  <div className="p-4 rounded-2xl border border-pink-200/70 dark:border-zinc-800 space-y-3">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Code Terminal Window (JetBrains Mono)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Filename</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.terminalFilename || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalFilename: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Class Name</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.terminalClass || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalClass: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">focus =</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.terminalFocus || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalFocus: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">precision =</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.terminalPrecision || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalPrecision: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">stack = (Comma-separated)</label>
                      <input
                        type="text"
                        value={cvData.uiConfig?.terminalStack || ''}
                        onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalStack: e.target.value } })}
                        className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-code text-zinc-400 mb-1">domains = (Comma-separated)</label>
                      <input
                        type="text"
                        value={cvData.uiConfig?.terminalDomains || ''}
                        onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, terminalDomains: e.target.value } })}
                        className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Section Headings Customization */}
                  <div className="p-4 rounded-2xl border border-pink-200/70 dark:border-zinc-800 space-y-3">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Section Titles & Footer</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Skills Section Title</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.sectionSkillsTitle || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, sectionSkillsTitle: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Projects Section Title</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.sectionProjectsTitle || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, sectionProjectsTitle: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Experience Section Title</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.sectionExpTitle || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, sectionExpTitle: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-code text-zinc-400 mb-1">Footer Tagline</label>
                        <input
                          type="text"
                          value={cvData.uiConfig?.footerTagline || ''}
                          onChange={(e) => setCvData({ ...cvData, uiConfig: { ...cvData.uiConfig, footerTagline: e.target.value } })}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Metrics / Stats */}
              {editorTab === 'stats' && (
                <div className="space-y-4">
                  {cvData.stats.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                        <input
                          type="text"
                          value={st.value}
                          onChange={(e) => {
                            const next = [...cvData.stats];
                            next[i].value = e.target.value;
                            setCvData({ ...cvData, stats: next });
                          }}
                          placeholder="Value (e.g. 8+ Yrs)"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                        />
                        <input
                          type="text"
                          value={st.label}
                          onChange={(e) => {
                            const next = [...cvData.stats];
                            next[i].label = e.target.value;
                            setCvData({ ...cvData, stats: next });
                          }}
                          placeholder="Label"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <input
                          type="text"
                          value={st.sub || ''}
                          onChange={(e) => {
                            const next = [...cvData.stats];
                            next[i].sub = e.target.value;
                            setCvData({ ...cvData, stats: next });
                          }}
                          placeholder="Subtitle"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <button
                        onClick={() => setCvData({ ...cvData, stats: cvData.stats.filter((_, idx) => idx !== i) })}
                        className="text-zinc-400 hover:text-rose-500 p-1.5"
                        title="Delete Metric"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => setCvData({ ...cvData, stats: [...cvData.stats, { label: "New Metric", value: "100%", sub: "Description" }] })}
                    className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    <Plus className="w-4 h-4" /> Add Metric Card
                  </button>
                </div>
              )}

              {/* TAB 4: Skills */}
              {editorTab === 'skills' && (
                <div className="space-y-4">
                  {cvData.skills.map((group, index) => (
                    <div key={index} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <input
                          type="text"
                          value={group.category}
                          onChange={(e) => {
                            const next = [...cvData.skills];
                            next[index].category = e.target.value;
                            setCvData({ ...cvData, skills: next });
                          }}
                          placeholder="Category Name"
                          className="font-bold text-sm bg-transparent border-b border-transparent focus:border-pink-500 focus:outline-none flex-1"
                        />
                        <button
                          onClick={() => setCvData({ ...cvData, skills: cvData.skills.filter((_, i) => i !== index) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Category"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={group.items.join(', ')}
                        onChange={(e) => {
                          const next = [...cvData.skills];
                          next[index].items = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          setCvData({ ...cvData, skills: next });
                        }}
                        placeholder="Comma-separated skills (e.g. Python, PyTorch, LangChain)"
                        className="w-full px-3 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => setCvData({ ...cvData, skills: [...cvData.skills, { category: "New Domain", items: ["Skill 1", "Skill 2"] }] })}
                    className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    <Plus className="w-4 h-4" /> Add Skill Category
                  </button>
                </div>
              )}

              {/* TAB 5: Experience */}
              {editorTab === 'experience' && (
                <div className="space-y-5">
                  {cvData.experience.map((exp, expIdx) => (
                    <div key={exp.id || expIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-code uppercase text-pink-500">Role #{expIdx + 1}</span>
                        <button
                          onClick={() => setCvData({ ...cvData, experience: cvData.experience.filter((_, i) => i !== expIdx) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Role"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => {
                            const next = [...cvData.experience];
                            next[expIdx].role = e.target.value;
                            setCvData({ ...cvData, experience: next });
                          }}
                          placeholder="Job Title"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                        />
                        <input
                          type="text"
                          value={exp.period}
                          onChange={(e) => {
                            const next = [...cvData.experience];
                            next[expIdx].period = e.target.value;
                            setCvData({ ...cvData, experience: next });
                          }}
                          placeholder="Period (e.g. 2023 - Present)"
                          className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            const next = [...cvData.experience];
                            next[expIdx].company = e.target.value;
                            setCvData({ ...cvData, experience: next });
                          }}
                          placeholder="Company"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <input
                          type="text"
                          value={exp.location || ''}
                          onChange={(e) => {
                            const next = [...cvData.experience];
                            next[expIdx].location = e.target.value;
                            setCvData({ ...cvData, experience: next });
                          }}
                          placeholder="Location"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <textarea
                        rows={3}
                        value={(exp.bullets || []).join('\n')}
                        onChange={(e) => {
                          const next = [...cvData.experience];
                          next[expIdx].bullets = e.target.value.split('\n').filter(Boolean);
                          setCvData({ ...cvData, experience: next });
                        }}
                        placeholder="Bullets (One per line)"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                      <input
                        type="text"
                        value={exp.technologies || ''}
                        onChange={(e) => {
                          const next = [...cvData.experience];
                          next[expIdx].technologies = e.target.value;
                          setCvData({ ...cvData, experience: next });
                        }}
                        placeholder="Technologies separated by | (e.g. Python | PyTorch | Docker)"
                        className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => setCvData({
                      ...cvData,
                      experience: [
                        ...cvData.experience,
                        {
                          id: `exp-${Date.now()}`,
                          role: "AI Engineer",
                          company: "Company Name",
                          location: "Remote",
                          period: "2025 - Present",
                          bullets: ["Architected and deployed deep learning models."],
                          technologies: "Python | PyTorch | FastAPI"
                        }
                      ]
                    })}
                    className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    <Plus className="w-4 h-4" /> Add Work Experience
                  </button>
                </div>
              )}

              {/* TAB 6: Projects */}
              {editorTab === 'projects' && (
                <div className="space-y-5">
                  {cvData.projects.map((proj, pIdx) => (
                    <div key={proj.id || pIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-code uppercase text-pink-500">Project #{pIdx + 1}</span>
                        <button
                          onClick={() => setCvData({ ...cvData, projects: cvData.projects.filter((_, i) => i !== pIdx) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const next = [...cvData.projects];
                            next[pIdx].title = e.target.value;
                            setCvData({ ...cvData, projects: next });
                          }}
                          placeholder="Project Title"
                          className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                        />
                        <input
                          type="text"
                          value={proj.category || ''}
                          onChange={(e) => {
                            const next = [...cvData.projects];
                            next[pIdx].category = e.target.value;
                            setCvData({ ...cvData, projects: next });
                          }}
                          placeholder="Category (e.g. AI / ML)"
                          className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <input
                          type="text"
                          value={proj.meta || ''}
                          onChange={(e) => {
                            const next = [...cvData.projects];
                            next[pIdx].meta = e.target.value;
                            setCvData({ ...cvData, projects: next });
                          }}
                          placeholder="Subtitle / Stack & Year"
                          className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <input
                          type="text"
                          value={proj.link || ''}
                          onChange={(e) => {
                            const next = [...cvData.projects];
                            next[pIdx].link = e.target.value;
                            setCvData({ ...cvData, projects: next });
                          }}
                          placeholder="GitHub / Live URL"
                          className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                      <textarea
                        rows={3}
                        value={proj.description}
                        onChange={(e) => {
                          const next = [...cvData.projects];
                          next[pIdx].description = e.target.value;
                          setCvData({ ...cvData, projects: next });
                        }}
                        placeholder="Project Description"
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                      <input
                        type="text"
                        value={(proj.technologies || []).join(', ')}
                        onChange={(e) => {
                          const next = [...cvData.projects];
                          next[pIdx].technologies = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          setCvData({ ...cvData, projects: next });
                        }}
                        placeholder="Technologies (Comma-separated)"
                        className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => setCvData({
                      ...cvData,
                      projects: [
                        ...cvData.projects,
                        {
                          id: `proj-${Date.now()}`,
                          title: "New AI System",
                          category: "AI / ML",
                          meta: "Python • PyTorch | 2025",
                          description: "Architectural overview and impact.",
                          technologies: ["Python", "PyTorch"],
                          link: "https://github.com"
                        }
                      ]
                    })}
                    className="w-full py-2.5 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    <Plus className="w-4 h-4" /> Add Project
                  </button>
                </div>
              )}

              {/* TAB 7: Education & Languages */}
              {editorTab === 'education' && (
                <div className="space-y-6">
                  {/* Education */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Academic Degrees</h4>
                    {cvData.education.map((edu, eduIdx) => (
                      <div key={edu.id || eduIdx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-code text-zinc-400">Degree #{eduIdx + 1}</span>
                          <button
                            onClick={() => setCvData({ ...cvData, education: cvData.education.filter((_, i) => i !== eduIdx) })}
                            className="text-zinc-400 hover:text-rose-500 p-1"
                            title="Delete Degree"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => {
                              const next = [...cvData.education];
                              next[eduIdx].institution = e.target.value;
                              setCvData({ ...cvData, education: next });
                            }}
                            placeholder="University / Institution"
                            className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                          />
                          <input
                            type="text"
                            value={edu.period || ''}
                            onChange={(e) => {
                              const next = [...cvData.education];
                              next[eduIdx].period = e.target.value;
                              setCvData({ ...cvData, education: next });
                            }}
                            placeholder="Period (e.g. 2018 - 2020)"
                            className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                          />
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => {
                              const next = [...cvData.education];
                              next[eduIdx].degree = e.target.value;
                              setCvData({ ...cvData, education: next });
                            }}
                            placeholder="Degree & Major"
                            className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                          />
                          <input
                            type="text"
                            value={edu.location || ''}
                            onChange={(e) => {
                              const next = [...cvData.education];
                              next[eduIdx].location = e.target.value;
                              setCvData({ ...cvData, education: next });
                            }}
                            placeholder="Location"
                            className="px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                          />
                        </div>
                        <input
                          type="text"
                          value={edu.details || ''}
                          onChange={(e) => {
                            const next = [...cvData.education];
                            next[eduIdx].details = e.target.value;
                            setCvData({ ...cvData, education: next });
                          }}
                          placeholder="Thesis, GPA, Honors..."
                          className="w-full px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => setCvData({
                        ...cvData,
                        education: [
                          ...cvData.education,
                          {
                            id: `edu-${Date.now()}`,
                            institution: "University Name",
                            degree: "M.Sc. in Artificial Intelligence",
                            location: "City, Country",
                            period: "2020 - 2022",
                            details: "Thesis & Honors"
                          }
                        ]
                      })}
                      className="w-full py-2 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-4 h-4" /> Add Degree
                    </button>
                  </div>

                  {/* Languages */}
                  <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Languages</h4>
                    {(cvData.languages || []).map((lang, lIdx) => (
                      <div key={lIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={lang.language}
                          onChange={(e) => {
                            const next = [...cvData.languages];
                            next[lIdx].language = e.target.value;
                            setCvData({ ...cvData, languages: next });
                          }}
                          placeholder="Language (e.g. English)"
                          className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                        />
                        <input
                          type="text"
                          value={lang.proficiency}
                          onChange={(e) => {
                            const next = [...cvData.languages];
                            next[lIdx].proficiency = e.target.value;
                            setCvData({ ...cvData, languages: next });
                          }}
                          placeholder="Proficiency (e.g. Native / Fluent)"
                          className="flex-1 px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <button
                          onClick={() => setCvData({ ...cvData, languages: cvData.languages.filter((_, i) => i !== lIdx) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Language"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setCvData({
                        ...cvData,
                        languages: [...(cvData.languages || []), { language: "New Language", proficiency: "Professional Working Proficiency" }]
                      })}
                      className="w-full py-2 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-4 h-4" /> Add Language
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 8: Publications, Certifications & Honors (With Individual Delete Buttons) */}
              {editorTab === 'honors' && (
                <div className="space-y-6">
                  {/* Publications */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Publications</h4>
                    {cvData.publications.map((pub, pubIdx) => (
                      <div key={pub.id || pubIdx} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-code text-zinc-400">Paper #{pubIdx + 1}</span>
                          <button
                            onClick={() => setCvData({ ...cvData, publications: cvData.publications.filter((_, i) => i !== pubIdx) })}
                            className="text-zinc-400 hover:text-rose-500 p-1"
                            title="Delete Publication"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={pub.title}
                          onChange={(e) => {
                            const next = [...cvData.publications];
                            next[pubIdx].title = e.target.value;
                            setCvData({ ...cvData, publications: next });
                          }}
                          placeholder="Publication Title"
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent font-bold"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="text"
                            value={pub.venue}
                            onChange={(e) => {
                              const next = [...cvData.publications];
                              next[pubIdx].venue = e.target.value;
                              setCvData({ ...cvData, publications: next });
                            }}
                            placeholder="Conference / Journal"
                            className="col-span-2 px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                          />
                          <input
                            type="text"
                            value={pub.year}
                            onChange={(e) => {
                              const next = [...cvData.publications];
                              next[pubIdx].year = e.target.value;
                              setCvData({ ...cvData, publications: next });
                            }}
                            placeholder="Year"
                            className="px-2.5 py-1.5 text-xs font-code rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => setCvData({
                        ...cvData,
                        publications: [...cvData.publications, { id: `pub-${Date.now()}`, title: "New Paper Title", venue: "IEEE Conference", year: "2025" }]
                      })}
                      className="w-full py-2 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-4 h-4" /> Add Publication
                    </button>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Certifications</h4>
                    {cvData.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={cert}
                          onChange={(e) => {
                            const next = [...cvData.certifications];
                            next[cIdx] = e.target.value;
                            setCvData({ ...cvData, certifications: next });
                          }}
                          className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <button
                          onClick={() => setCvData({ ...cvData, certifications: cvData.certifications.filter((_, i) => i !== cIdx) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Certification"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setCvData({ ...cvData, certifications: [...cvData.certifications, "New Certification"] })}
                      className="w-full py-2 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-4 h-4" /> Add Certification
                    </button>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-code uppercase text-pink-500 font-bold">Honors & Achievements</h4>
                    {cvData.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={ach}
                          onChange={(e) => {
                            const next = [...cvData.achievements];
                            next[aIdx] = e.target.value;
                            setCvData({ ...cvData, achievements: next });
                          }}
                          className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent"
                        />
                        <button
                          onClick={() => setCvData({ ...cvData, achievements: cvData.achievements.filter((_, i) => i !== aIdx) })}
                          className="text-zinc-400 hover:text-rose-500 p-1"
                          title="Delete Honor"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setCvData({ ...cvData, achievements: [...cvData.achievements, "New Achievement / Honor"] })}
                      className="w-full py-2 rounded-xl border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-bold flex items-center justify-center gap-1.5 hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-4 h-4" /> Add Achievement
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Studio Footer */}
            <div className="p-4 border-t border-pink-200/60 dark:border-zinc-800 bg-pink-50/30 dark:bg-zinc-950/80 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleExportJSON}
                  className="px-2.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" /> Export JSON
                </button>
                <label className="px-2.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition flex items-center gap-1 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" /> Import JSON
                  <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                </label>
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="px-2.5 py-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition flex items-center gap-1 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset to Code Defaults
                </button>
              </div>

              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-1.5 rounded-lg font-semibold bg-pink-500 text-white hover:bg-pink-400 transition"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET CONFIRMATION MODAL */}
      {showResetConfirm && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#141019] rounded-2xl p-6 max-w-sm w-full border border-pink-200 dark:border-pink-500/20 space-y-4">
            <h4 className="text-sm font-bold">Reload Default Data from Code?</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              This will clear browser cache storage and load the latest <code className="font-code">INITIAL_CV_DATA</code> written inside your <code className="font-code">src/App.jsx</code> file.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3 py-1.5 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-rose-600 text-white"
              >
                Reset & Reload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="no-print fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-pink-50 text-white dark:text-zinc-950 text-xs font-semibold shadow-xl border border-pink-500/30 max-w-[90vw]">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 dark:text-pink-600 shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}