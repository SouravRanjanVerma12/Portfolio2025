import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AshterDesigns SPA",
      description: "Modern Single Page Application for interior design services with AI-powered design inspiration, contact forms, and responsive design. Built with Next.js, TypeScript, and Tailwind CSS, optimized for static deployment.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "AI Integration"],
      type: "Web Application",
      features: ["AI Design Assistant", "Contact Forms", "Responsive Design", "Static Deployment"],
      githubUrl: "https://github.com/SouravRanjanVerma12/SPA_For_AshterDesigns",
      liveUrl: "https://ashterdesigns.vercel.app",
      emoji: "🎨"
    },
    {
      title: "FitForge Buddy",
      description: "Developed a cross-platform fitness app with workout tracking, nutrition management, and social features using React.js and Tailwind CSS. Leveraged AI tools to streamline design and development.",
      technologies: ["React.js", "Tailwind CSS", "AI Tools"],
      type: "Web/Mobile App",
      features: ["Workout tracking", "Nutrition management", "Social features", "Cross-platform"],
      githubUrl: "https://github.com/SouravRanjanVerma12/fitforge-buddy",
      liveUrl: "https://fitforge-buddy.vercel.app/",
      emoji: "💪"
    },
    {
      title: "D2D Cart Admin Panel",
      description: "Designed and developed a fully responsive Angular admin panel for D2D Cart, enabling seamless product, category, order, and customer management. Optimized for desktops, tablets, and mobiles.",
      technologies: ["Angular", "JavaScript", "REST API", "Tailwind CSS"],
      type: "Web Application",
      features: ["Real-time data management", "Role-based access", "Advanced Dashboard Analytics", "Product & Order Management"],
      githubUrl: "https://github.com/SouravRanjanVerma12/codknox_fetchit",
      emoji: "🛒"
    },
    {
      title: "Virtual Bus Conductor",
      description: "Developed an interactive virtual bus conductor website using HTML, CSS, and JavaScript (DOM). Helps people book tickets while travelling through government transports. (IoT Integration)",
      technologies: ["HTML", "CSS", "JavaScript", "DOM", "IoT"],
      type: "Web Application",
      features: ["Bus ticket booking", "Interactive UI", "Route management", "Real-time updates"],
      githubUrl: "https://github.com/SouravRanjanVerma12/Virtual-bus-services",
      emoji: "🚌"
    },
    {
      title: "Attendance Management System",
      description: "Web application using JavaScript for geolocation tracking, Firebase for data storage, and EmailJS for OTP verification. Helps organizations manage employee attendance efficiently.",
      technologies: ["JavaScript", "Firebase", "EmailJS", "Geolocation API"],
      type: "Web Application",
      features: ["Real-time location tracking", "OTP verification", "Database integration", "Employee management"],
      githubUrl: "https://github.com/SouravRanjanVerma12/attendance-management-system",
      emoji: "📊"
    }
  ];

  return (
    <section id="projects" className="py-secn px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Some of my recent work and project experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{project.emoji}</div>
                    <div className="text-sm text-muted-foreground font-medium">{project.title}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded-md">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    View Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Globe className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;