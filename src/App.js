import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, GraduationCap, Code, Award, Globe, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import profilePic from './assets/download.jpg';
import resumePDF from './assets/HARSHKUMAR PATEL_inter.pdf';  // Add this line

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* <img 
                src={profilePic}
                alt="Harshkumar Patel"
                className="w-8 h-8 rounded-full object-cover border-2 border-purple-400"
              /> */}
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HP
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === item ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src={profilePic}
              alt="Harshkumar Patel"
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-purple-500/50 hover:border-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Harshkumar Patel
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-purple-300">
            AI & ML Engineer
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Building intelligent solutions with Machine Learning, NLP, and Computer Vision
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:hrspatel2010@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-colors border border-purple-500/30">
              View Projects
            </button>
            <a 
              href={resumePDF} 
              download="Harshkumar_Patel_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-6 py-3 rounded-full transition-colors"
            >
              <ExternalLink size={20} />
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/hrspatell" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/hrsPatel20" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg mb-6 leading-relaxed">
              I'm an AI & ML Engineer with hands-on experience in developing and deploying machine learning, NLP, and computer vision solutions. I'm passionate about applying AI to solve real-world problems through model optimization, retrieval-augmented generation (RAG), and deep learning.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Currently completing my MSc in Artificial Intelligence & Machine Learning at Gujarat University (Expected July 2025), I specialize in building scalable data pipelines, integrating LLMs, and automating workflows using Python-based AI systems.
            </p>
            <div className="flex items-center gap-2 text-purple-400">
              <MapPin size={20} />
              <span>Ahmedabad, India</span>
              <span className="mx-2">•</span>
              <Globe size={20} />
              <span>Open to Global Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-8">
            {/* Work Experience */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">AI & ML Intern</h3>
                  <a href="https://www.nichetechsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mb-2 inline-flex items-center gap-2 transition-colors">
                    NicheTech Computer Solutions Pvt. Ltd., Ahmedabad
                    <ExternalLink size={16} />
                  </a>
                  <p className="text-gray-400 mb-4">Jan 2025 - Jun 2025</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Developed and deployed NLP and RAG-based AI chatbots to automate complaint handling and service analytics for manufacturing and service industries</li>
                    <li>• Built and optimized classification models to identify root causes of customer complaints, improving issue resolution time</li>
                    <li>• Designed data analysis and visualization dashboards using Pandas and Matplotlib for engineer performance tracking and product quality insights</li>
                    <li>• Collaborated with cross-functional teams to integrate models into production systems ensuring scalable deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Master of Science (MSc)</h3>
                  <p className="text-purple-400 mb-2">Artificial Intelligence & Machine Learning</p>
                  <p className="text-gray-400 mb-2">Gujarat University, Ahmedabad, India</p>
                  <p className="text-gray-400">Expected July 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Science (BSc)</h3>
                  <p className="text-purple-400 mb-2">Chemistry</p>
                  <p className="text-gray-400 mb-2">MG Science College, Gujarat, India</p>
                  <p className="text-gray-400">CGPA: 6.82</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-full h-40 rounded-lg mb-4 flex items-center justify-center">
                <Code size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Chatbot for Industry</h3>
              <p className="text-gray-300 mb-4">
                Built an NLP-based chatbot using LangChain, Hugging Face, and FAISS for complaint classification and trend analysis. Integrated RAG pipeline to enhance contextual responses.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">LangChain</span>
                <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">FAISS</span>
                <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">RAG</span>
              </div>
              <a href="https://github.com/hrsPatel20/Rostea" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <Github size={18} />
                View on GitHub
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-full h-40 rounded-lg mb-4 flex items-center justify-center">
                <Code size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Speech Emotion Recognition</h3>
              <p className="text-gray-300 mb-4">
                Developed a Speech Emotion Recognition system using LSTM networks achieving 96% accuracy. Compared performance with SVM, KNN, Random Forest, and Decision Tree models on TESS, RAVDESS, CREMA-D, and SAVEE datasets.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">LSTM</span>
                <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">MFCC</span>
                <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm">Librosa</span>
              </div>
              <a href="https://github.com/hrsPatel20/Speech-Emotion-Recognition" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Github size={18} />
                View on GitHub
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-600 to-teal-600 w-full h-40 rounded-lg mb-4 flex items-center justify-center">
                <Code size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sentiment Analysis</h3>
              <p className="text-gray-300 mb-4">
                Implemented VADER and RoBERTa models to analyze customer reviews for market insights and brand monitoring. Provides comprehensive sentiment scoring for business intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-600/30 px-3 py-1 rounded-full text-sm">VADER</span>
                <span className="bg-green-600/30 px-3 py-1 rounded-full text-sm">RoBERTa</span>
                <span className="bg-green-600/30 px-3 py-1 rounded-full text-sm">NLP</span>
              </div>
              <a href="https://github.com/hrsPatel20/Sentiment-Analysis-with-Vader-and-RoBERTa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                <Github size={18} />
                View on GitHub
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 w-full h-40 rounded-lg mb-4 flex items-center justify-center">
                <Code size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">Face Recognition Attendance System</h3>
              <p className="text-gray-300 mb-4">
                Designed an attendance tracking system using YOLOv8 + DenseNet121, achieving over 95% accuracy. Automated Excel reporting and real-time camera input processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-600/30 px-3 py-1 rounded-full text-sm">YOLOv8</span>
                <span className="bg-orange-600/30 px-3 py-1 rounded-full text-sm">DenseNet121</span>
                <span className="bg-orange-600/30 px-3 py-1 rounded-full text-sm">OpenCV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Machine Learning & AI</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LangChain', 'RAG', 'MLOps'].map(skill => (
                  <span key={skill} className="bg-purple-600/30 px-3 py-2 rounded-lg text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Computer Vision & NLP</h3>
              <div className="flex flex-wrap gap-2">
                {['OpenCV', 'YOLO', 'NLP', 'FAISS', 'LLM Integration'].map(skill => (
                  <span key={skill} className="bg-blue-600/30 px-3 py-2 rounded-lg text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Data Visualization'].map(skill => (
                  <span key={skill} className="bg-green-600/30 px-3 py-2 rounded-lg text-sm">{skill}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Development & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'ReactJS', 'Git', 'GitHub', 'Docker', 'Model Deployment'].map(skill => (
                  <span key={skill} className="bg-pink-600/30 px-3 py-2 rounded-lg text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 flex items-start gap-4">
                <Award className="text-purple-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Machine Learning Operations (MLOps) for Generative AI</h4>
                  <p className="text-gray-400 text-sm">Google Cloud • Feb 2025</p>
                </div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 flex items-start gap-4">
                <Award className="text-purple-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Front-End Development (ReactJS)</h4>
                  <p className="text-gray-400 text-sm">Jan 2023 - Jun 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 text-gray-300">
            Open to relocation or remote opportunities globally (Europe, Canada, US, UAE)
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hrspatel2010@gmail.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
            >
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">hrspatel2010@gmail.com</p>
            </a>
            
            <a href="tel:+919408024453" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <Phone className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91-9408024453</p>
            </a>
            
            <a href="https://linkedin.com/in/hrspatell" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">hrspatell</p>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <span className="bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/20">English</span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/20">Hindi</span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/20">Gujarati</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>© 2025 Harshkumar Patel. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}