import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Bot, TrendingUp, ShoppingCart, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise Authentication Platform",
      description: "Led the implementation of PKCE-enhanced OAuth 2.0 flows and unified social sign-in integration, serving millions of users with 99.99% uptime guarantee.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-600",
      technologies: ["OAuth 2.0", "PKCE", "Ruby on Rails", "Azure B2C"],
      features: ["Security Focus", "High Availability"]
    },
    {
      title: "AI-Powered Automation Suite",
      description: "Developed intelligent agents for workflow automation, reducing manual processes by 80% and enabling seamless integration with existing development workflows.",
      icon: Bot,
      gradient: "from-purple-500 to-pink-600",
      technologies: ["AI Agents", "Python", "Automation", "ML Integration"],
      features: ["AI-Powered", "Workflow"]
    },
    {
      title: "Distributed Monitoring System",
      description: "Built comprehensive alerting and service-level monitoring infrastructure, enabling proactive issue detection and maintaining 99.99% system availability.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      technologies: ["Monitoring", "Alerting", "New Relic", "DataDog"],
      features: ["Real-time", "Reliable"]
    },
    {
      title: "E-commerce API Platform",
      description: "Architected and maintained scalable REST APIs supporting e-commerce operations, with advanced data processing pipelines and optimized performance.",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-600",
      technologies: ["REST APIs", "E-commerce", "Data Processing", "Performance"],
      features: ["Scalable", "Optimized"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing secure authentication systems, AI automation, and scalable platform solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="text-white" size={64} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      {project.features[0] === "Security Focus" ? <Shield className="mr-2 h-4 w-4" /> : 
                       project.features[0] === "AI-Powered" ? <Bot className="mr-2 h-4 w-4" /> :
                       project.features[0] === "Real-time" ? <Eye className="mr-2 h-4 w-4" /> :
                       <Zap className="mr-2 h-4 w-4" />}
                      {project.features[0]}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      {project.features[1] === "High Availability" ? <TrendingUp className="mr-2 h-4 w-4" /> : 
                       project.features[1] === "Workflow" ? <Bot className="mr-2 h-4 w-4" /> :
                       project.features[1] === "Reliable" ? <Shield className="mr-2 h-4 w-4" /> :
                       <Zap className="mr-2 h-4 w-4" />}
                      {project.features[1]}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing potential collaborations?
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
