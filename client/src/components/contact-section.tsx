import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need consultation on authentication systems, want to explore AI automation solutions, or have an interesting project opportunity, I'm always open to meaningful conversations.
              </p>
            </div>
            
            <div className="space-y-6">
              <a 
                href="mailto:cristian.cedacero@gmail.com"
                className="flex items-center p-4 bg-card rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">cristian.cedacero@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/ccedacero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/ccedacero</p>
                </div>
              </a>
              
              <div className="flex items-center p-4 bg-card rounded-lg">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Albany, NY</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 p-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h4 className="font-semibold text-green-800 dark:text-green-200">Available for Opportunities</h4>
              </div>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Open to new opportunities in backend engineering, authentication systems, and AI automation.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project">Project Consultation</SelectItem>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="technical">Technical Discussion</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Form submissions will be processed securely. Expect a response within 24-48 hours.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
