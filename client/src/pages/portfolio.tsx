import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ExternalLink, Github, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cristian Cedacero</h3>
              <p className="text-slate-300 mb-4">
                Senior Backend Engineer specializing in secure authentication systems and AI-powered automation solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/ccedacero" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
                <a 
                  href="https://github.com/ccedacero" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:cristian.cedacero@gmail.com" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Backend Engineering</li>
                <li>• Authentication Systems</li>
                <li>• Distributed Architecture</li>
                <li>• AI Agent Development</li>
                <li>• High-Availability Systems</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Ruby on Rails, Java, Python</li>
                <li>• React, TypeScript, Node.js</li>
                <li>• OAuth 2.0, SAML, JWT</li>
                <li>• AWS, Docker, PostgreSQL</li>
                <li>• AI/ML Integration</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300">
              &copy; 2024 Cristian Cedacero. Built with modern web technologies and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
