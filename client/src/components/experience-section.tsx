import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "New Relic - Authentication Platform",
      period: "2022 - Present",
      color: "bg-blue-600",
      achievements: [
        "Lead implementation of PKCE for OAuth 2.0 security enhancement",
        "Built unified authentication system with social sign-in integration",
        "Achieved 99.99% uptime through advanced monitoring and alerting",
        "Provide Tier-2 technical support and crisis management"
      ],
      technologies: ["Ruby on Rails", "OAuth 2.0", "Azure B2C", "Monitoring"]
    },
    {
      title: "Associate Software Engineer",
      company: "New Relic - Authentication Platform",
      period: "2021 - 2022",
      color: "bg-green-600",
      achievements: [
        "Collaborated with product management on user behavior analysis",
        "Developed audit event systems for critical user actions",
        "Contributed to high-availability system design",
        "Enhanced platform security with modern auth flows"
      ],
      technologies: ["Ruby on Rails", "Audit Systems", "High Availability", "Security"]
    },
    {
      title: "Associate Software Engineer",
      company: "Abound - Internal Tools",
      period: "2021 - 2022",
      color: "bg-purple-600",
      achievements: [
        "Built and maintained REST APIs for e-commerce platform",
        "Developed UI interfaces for enhanced user experience",
        "Implemented data parsing and ingest processes",
        "Documented and supported data processing workflows"
      ],
      technologies: ["REST APIs", "E-commerce", "Data Processing", "UI Development"]
    },
    {
      title: "Early Career & Education",
      company: "Various Roles & Flatiron School",
      period: "2019 - 2021",
      color: "bg-orange-600",
      achievements: [
        "Comprehensive Software Engineering Bootcamp completion",
        "IT support and troubleshooting expertise at U.S. Census Bureau",
        "Web design and SEO optimization for small businesses",
        "Google IT Support Professional Certificate"
      ],
      technologies: ["Full-Stack Development", "IT Support", "SEO", "Web Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building secure, scalable systems at leading technology companies
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:transform lg:-translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex items-center w-full ${
                  index % 2 === 0 ? "lg:w-1/2 lg:pr-8" : "lg:w-1/2 lg:pl-8"
                }`}>
                  <div className={`flex-shrink-0 w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                    index % 2 === 0 ? "lg:order-2 lg:ml-8" : ""
                  }`}>
                    {exp.company.split(' ')[0].substring(0, 2).toUpperCase()}
                  </div>
                  <Card className={`flex-1 p-6 shadow-lg hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? "ml-6 lg:ml-0 lg:mr-6 lg:order-1" : "ml-6"
                  }`}>
                    <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-primary mb-1">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.period}</p>
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            • {achievement}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
