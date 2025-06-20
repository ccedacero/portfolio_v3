import { Card } from "@/components/ui/card";
import { Shield, Bot } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@assets/me_1750375113073.jpeg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Independent and pragmatic software engineer with a passion for
            building secure, scalable systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Backend engineer with 4+ years of total experience, including 3
              years at New Relic building secure authentication systems. My
              expertise lies in high-availability platforms serving a large user
              base with 99.99% uptime.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in OAuth 2.0 implementations and building AI agents
              that automate complex workflows, making systems more reliable and
              efficient.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">
                  Security Focus
                </h4>
                <p className="text-sm text-muted-foreground">
                  Authentication & Authorization
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Bot className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">
                  AI Integration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Automation & Efficiency
                </p>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={profileImage}
              alt="Cristian Cedacero - Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-primary-foreground"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
