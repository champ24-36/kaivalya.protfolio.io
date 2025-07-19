import React, { useState, useEffect } from 'react';
import { Home, User, FolderOpen, FileText, MessageCircle, Github, Linkedin, Mail, Download, Star, Zap, Code, Brain } from 'lucide-react';

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [heroAnimationStage, setHeroAnimationStage] = useState(0);
  const [titleState, setTitleState] = useState({
    currentIndex: 0,
    displayedText: '',
    isTyping: true,
    charIndex: 0
  });

  const titles = [
    'GitHub Contributor',
    'Freelancer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Writer'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeroAnimationStage(1), 800);
    const timer2 = setTimeout(() => setHeroAnimationStage(2), 1600);
    const timer3 = setTimeout(() => setHeroAnimationStage(3), 2400);
    const timer4 = setTimeout(() => setHeroAnimationStage(4), 3200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (heroAnimationStage < 4) return;

    const interval = setInterval(() => {
      setTitleState(prev => {
        const currentTitle = titles[prev.currentIndex];
        
        if (prev.isTyping) {
          // Typing phase
          if (prev.charIndex < currentTitle.length) {
            return {
              ...prev,
              displayedText: currentTitle.slice(0, prev.charIndex + 1),
              charIndex: prev.charIndex + 1
            };
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => {
              setTitleState(current => ({ ...current, isTyping: false }));
            }, 2000);
            return prev;
          }
        } else {
          // Deleting phase
          if (prev.charIndex > 0) {
            return {
              ...prev,
              displayedText: currentTitle.slice(0, prev.charIndex - 1),
              charIndex: prev.charIndex - 1
            };
          } else {
            // Finished deleting, move to next title
            return {
              currentIndex: (prev.currentIndex + 1) % titles.length,
              displayedText: '',
              isTyping: true,
              charIndex: 0
            };
          }
        }
      });
    }, titleState.isTyping ? 100 : 50); // Typing speed vs deleting speed

    return () => clearInterval(interval);
  }, [heroAnimationStage, titleState.isTyping]);

  useEffect(() => {
    if (heroAnimationStage >= 4 && titleState.displayedText === '') {
      setTitleState({
        currentIndex: 0,
        displayedText: '',
        isTyping: true,
        charIndex: 0
      });
    }
  }, [heroAnimationStage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Shanti – Mental Health AI Companion",
      description: "Voice-enabled wellness platform using Whisper, Google TTS, and LangChain to offer guided therapy, journaling, and mood tracking.",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["Python", "Whisper", "LangChain", "Google TTS"],
      github: "https://github.com/champ24-36/shanti-mental-health"
    },
    {
      title: "Vakeel Saab AI – Legal Aid Chatbot",
      description: "Multilingual chatbot using HuggingFace and Dialogflow to provide plain-language legal support, especially for underserved communities.",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["HuggingFace", "Dialogflow", "Python", "NLP"],
      github: "https://github.com/champ24-36/vakeel-saab-ai"
    },
    {
      title: "Game Hub",
      description: "Interactive TypeScript React suite featuring games like Snake, Tetris, and Typing Challenge. Built for modular design and UI engagement.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=500",
      tech: ["TypeScript", "React", "JavaScript", "UI/UX"],
      github: "https://github.com/champ24-36/game-hub-tsx"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "C++", "Java", "JavaScript", "TypeScript"], icon: Code },
    { category: "Frameworks", items: ["React", "Node.js", "Firebase", "Flask", "JSP", "Servlets"], icon: Zap },
    { category: "Tools", items: ["Git", "MongoDB", "Whisper", "Dialogflow", "LangChain"], icon: Brain }
  ];

  const achievements = [
    {
      title: "AI Workshop Conductor",
      description: "Conducted a college workshop on AI fundamentals",
      icon: Brain,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Editorial Leadership",
      description: "Main Editor & Columnist – College Editorial Board",
      icon: FileText,
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Hackathon Participant",
      description: "Participant – GDSC Hackathon, Vizag",
      icon: Zap,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-purple-800/20"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <div className="w-1 h-1 bg-purple-400 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              K.
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'achievements', label: 'Achievements', icon: Star },
                { id: 'contact', label: 'Contact', icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-purple-600/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div 
            className="grid lg:grid-cols-2 gap-12 items-center w-full z-10 transition-all duration-1000"
            // Removed scroll-fade animation styles from here
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 
                  className={`text-5xl md:text-7xl font-bold text-white transition-all duration-1000 ${
                    heroAnimationStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  Hi There! <span className="inline-block animate-wave">👋</span>
                </h1>
                <h2 
                  className={`text-4xl md:text-6xl font-bold transition-all duration-1000 delay-500 ${
                    heroAnimationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  I'M <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">KAIVALYA</span>
                </h2>
                <div 
                  className={`text-2xl md:text-3xl font-semibold text-purple-300 transition-all duration-1000 delay-1000 ${
                    heroAnimationStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  This is my Journey in the Tech World
                </div>
                <div 
                  className={`text-xl md:text-2xl font-medium text-gray-300 min-h-[2rem] transition-all duration-1000 delay-1500 ${ // Changed h-8 to min-h-[2rem] for better visibility
                    heroAnimationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <span className="text-purple-300">
                    {titleState.displayedText}
                    <span className="animate-blink">|</span>
                  </span>
                </div>
              </div>
              <p 
                className={`text-lg text-gray-400 max-w-2xl leading-relaxed transition-all duration-1000 delay-2000 ${
                  heroAnimationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Computer Science undergraduate passionate about AI, mental health technology, and legal tech. 
                I build meaningful solutions that empower underserved communities.
              </p>
              <button
                className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  heroAnimationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onClick={() => scrollToSection('about')}
              >
                Explore My Journey
              </button>
            </div>

            {/* Right Content - Illustration */}
            <div 
              className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-1000 ${
                heroAnimationStage >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Developer Illustration */}
                <div className="w-96 h-96 relative">
                  {/* Desk */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-2xl"></div>
                  
                  {/* Monitor */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg border-4 border-gray-700 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded p-2">
                      <div className="w-full h-2 bg-purple-500 rounded-t mb-1"></div>
                      <div className="space-y-1">
                        <div className="w-3/4 h-1 bg-purple-300 rounded"></div>
                        <div className="w-1/2 h-1 bg-pink-300 rounded"></div>
                        <div className="w-2/3 h-1 bg-purple-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Person */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-20 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-full"></div>
                    <div className="w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full mx-auto -mt-2"></div>
                  </div>
                  
                  {/* Floating Code Elements */}
                  <div className="absolute top-10 right-10 w-20 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg backdrop-blur-sm border border-purple-400/30 p-2 animate-float">
                    <div className="text-xs text-purple-300 font-mono">&lt;/&gt;</div>
                  </div>
                  
                  <div className="absolute top-32 left-8 w-16 h-12 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg backdrop-blur-sm border border-pink-400/30 p-2 animate-float" style={{animationDelay: '1s'}}>
                    <div className="text-xs text-pink-300 font-mono">{ }</div>
                  </div>
                  
                  <div className="absolute bottom-32 right-4 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <div className="text-xs text-purple-300">AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science undergraduate with a deep interest in artificial intelligence, 
                mental health technology, and legal tech solutions. My journey in tech is driven by a desire to 
                create meaningful impact through innovative solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of technology to solve real-world problems and empower underserved 
                communities. Through my projects, I aim to bridge the gap between complex technology and 
                accessible solutions that make a difference in people's lives.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-black/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li>🎓 Computer Science Undergraduate</li>
                <li>🤖 AI & Machine Learning Enthusiast</li>
                <li>💡 Innovation & Problem Solving</li>
                <li>🌍 Community Impact Focus</li>
                <li>📝 Technical Writer & Editor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-black/50 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <skill.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-purple-300">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-purple-600/20 text-gray-300 px-3 py-2 rounded-lg text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gradient-to-r from-black/50 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements & Activities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <achievement.icon className="absolute top-4 right-4 w-8 h-8 text-purple-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-purple-300">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="bg-gradient-to-br from-purple-900/30 to-black/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 mb-8">
            <p className="text-xl text-gray-300 mb-8">
              Ready to collaborate on something amazing? Let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:iragavarapukaivalya@gmail.com"
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/champ24-36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/iragavarapu-kaivalya-91aab930b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://1drv.ms/w/c/10c409c44d68d67a/EeuUq7yJWRRJi_7tiKLiEgIBkzAlgQWAw6ky5iwrN3gu9g?e=3wA9SV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Iragavarapu Kaivalya. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
