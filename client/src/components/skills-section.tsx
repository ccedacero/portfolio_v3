import { Card } from "@/components/ui/card";
import { Server, Lock, Palette, Cloud, Database, Brain } from "lucide-react";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Engineering",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      skills: ["Ruby on Rails", "Java & Python", "RESTful APIs"]
    },
    {
      icon: Lock,
      title: "Authentication & Security",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900",
      skills: ["OAuth 2.0 / PKCE", "SAML", "JWT & BCrypt"]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900",
      skills: ["AI Agents", "Workflow Automation", "Process Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-100 dark:bg-cyan-900",
      skills: ["AWS", "Docker", "High Availability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies for building scalable, secure applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`text-xl ${category.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <span className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full mr-3`}></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
