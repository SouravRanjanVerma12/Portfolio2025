import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  X,
  Send,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("TJU0mrJeeCHZ6auvq");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: 'sourav2000ranjan@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        sent_date: new Date().toLocaleDateString()
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_v1opc3j', // Your EmailJS service ID
        'template_ugby5n8', // Your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sourav2000ranjan@gmail.com",
      href: "#",
      onClick: () => setIsModalOpen(true)
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6207841629",
      href: "tel:+916207841629"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with me",
      href: "https://wa.me/916207841629"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Mohali, Punjab",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/SouravRanjanVerma12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/souravranjan-verma-b59292143/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sourav_ranjan_verma/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/MecEmperor15788", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-section px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your next project? Let's work together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card
                key={contact.label}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <a
                    href={contact.href}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    onClick={contact.onClick}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to start your next project?</h3>
          <Button
            size="lg"
            className="group"
            onClick={() => setIsModalOpen(true)}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Let's Talk
          </Button>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-6">Follow me on social media</h4>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Get in Touch</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-md">
                    ✅ Email sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
                    ❌ Failed to send message. Please try again or contact directly via email.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;