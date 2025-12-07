import { Award, Briefcase, Code, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Clean Street: Civic Issue Reporting & Tracking App",
      period: "Sept 2025 – Oct 2025",
      description: "Smart civic engagement platform for reporting and tracking local public issues",
      highlights: [
        "Designed user-friendly interfaces for submitting complaints with photos, descriptions, and location data",
        "Enabled real-time tracking of complaint status",
        "Created admin dashboards with graphs for monitoring"
      ],
      tags:["React.js", "MERN Stack" ]
    },
    {
      title: "AI-Driven Dynamic Expiry Management (AIDEM)",
      period: "Apr 2025 - July 2025",
      description: "Inventory management system with ML-powered expiry predictions",
      highlights: [
        "Built dynamic dashboards with interactive charts",
        "Designed forms for product entry and expiry prediction",
        "Implemented searchable inventory tables with real-time indicators",
        "Integrated ML insights with feature importance graphs"
      ],
      tags: ["React.js","Data Visualization"]
    }
  ];

  const experiences = [
    {
      company: "Infosys Springboard",
      role: "Frontend Developer Intern",
      period: "Sept 2025 - Oct 2025",
      description: "Contributed to Clean Street: Civic Issue Reporting & Tracking App"
    },
    {
      company: "DOCAPP",
      role: "Frontend Developer",
      period: "June 2025 - July 2025",
      description: "Designed and developed responsive landing page using React and Tailwind CSS"
    }
  ];

  const skills = {
    "Languages": ["Java"],
    "Web Development": ["HTML", "CSS", "JavaScript"],
    "Frameworks & Libraries": ["React.js", "Tailwind CSS"],
    "Tools": ["Canva"]
  };

  const awards = [
    "🥈 2nd place in Mastermind Quiz Contest - Sathyabama Institute",
    "🥈 2nd place in Hack4Ease Technology Hackathon",
    "🥉 3rd place in Innovation Sprint - Ingress Hackathon 2024"
  ];

  const certifications = [
    {
      title: "Programming in Java",
      issuer: "NPTEL (IITs & IISc)",
      period: "July 2024 - Oct 2024",
      score: "71% - Elite Rank"
    },
    {
      title: "Database Management System",
      issuer: "NPTEL (IITs & IISc)",
      period: "Jan 2025 - Mar 2025",
      score: "53%"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-999 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>

        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ADITYA A
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(item => (
              <a key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setActiveSection(prev => prev === "menu" ? "" : "menu")}
            className="md:hidden focus:outline-none text-purple-300"
          >
            {activeSection === "menu" ? (
              <span className="text-3xl font-bold">✕</span>
            ) : (
              <span className="text-3xl font-bold">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {activeSection === "menu" && (
          <div className="md:hidden flex flex-col items-center gap-5 py-5 bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/30 z-999">

            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map(item => (
              <a key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection("")}
                className="text-lg hover:text-purple-400 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold">
              AA
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building beautiful, responsive web experiences with React & Tailwind CSS
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <a href="https://github.com/ADISHAR2005" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-a-64993128a/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sharadityaa@gmail.com" className="hover:text-purple-400 transition-all hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
          <a href="#contact" className="inline-block bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-400 font-semibold">Sathyabama Institute of Science and Technology</p>
                  <p className="text-gray-300">B.E. Computer Science and Engineering</p>
                  <p className="text-sm text-gray-400">CGPA: 9.01/10 | Aug 2023 - Aug 2027</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold">Class 12 - CBSE</p>
                  <p className="text-sm text-gray-400">75% | Velammal Vidhyashram</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold">Class 10 - CBSE</p>
                  <p className="text-sm text-gray-400">90.2% | Velammal Vidhyashram</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <Code className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="space-y-3">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-purple-400 font-semibold mb-1">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="bg-purple-500/20 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all hover:transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-purple-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-purple-400">{exp.role}</h4>
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-purple-400" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <h4 className="text-lg font-bold text-purple-400 mb-1">{cert.title}</h4>
                  <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-2">{cert.period}</p>
                  <p className="text-purple-300 font-semibold text-sm">{cert.score}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-purple-400" />
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-linear-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30 text-center hover:scale-105 transition-transform">
                  <p className="text-gray-200">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:sharadityaa@gmail.com" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300 break-all">sharadityaa@gmail.com</p>
            </a>
            <a href="tel:+918610709465" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all hover:scale-105">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">+91-8610709465</p>
            </a>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Aditya A. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}