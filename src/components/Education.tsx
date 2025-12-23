import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master in Computer Application (MCA)",
      institution: "Panjab Technical University",
      college: "Chandigarh Group of Colleges, Jhanjeri",
      duration: "June 2023 - June 2025",
      type: "completed"
    },
    {
      degree: "Bachelor of Science Honours in Physics",
      institution: "Patliputra University",
      college: "Jagat Narayan Loyal College, Khagaul",
      duration: "May 2020 - May 2023",
      type: "completed"
    }
  ];

  const certifications = [
    {
      title: "C, C++, DSA Certification",
      organization: "AZtech Technologies",
      type: "Programming"
    },
    {
      title: "Python Development Course",
      organization: "CGCJ",
      type: "Development"
    },
    {
      title: "Web Development Certification",
      organization: "TechnoHacks",
      type: "Web Technologies"
    }
  ];

  const aiTools = [
    "Lovable", "Claude", "Perplexity", "Bolt",
    "Vercel", "Cursor", "VS Code", "Git", "n8n", "Antigravity"
  ];

  return (
    <section id="education" className="py-section px-6 bg-subtle-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-accent-foreground mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={edu.degree}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.college}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-md ${edu.type === 'ongoing'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                        }`}>
                        {edu.type === 'ongoing' ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & AI Tools */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-accent-foreground mr-3" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4 mb-12">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent-foreground rounded-md">
                        {cert.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Tools */}
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-accent-foreground mr-3" />
              <h3 className="text-2xl font-semibold">Known AI Tools</h3>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Leveraging AI tools to streamline design and development processes
                </p>
              </CardContent>
            </Card>

            {/* Languages Known */}
            <div className="flex items-center mb-6 mt-8">
              <div className="h-6 w-6 text-accent-foreground mr-3 flex items-center justify-center">
                <span className="text-xl">🌐</span>
              </div>
              <h3 className="text-2xl font-semibold">Languages Known</h3>
            </div>

            <Card className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">English</span>
                  <span className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">Hindi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;