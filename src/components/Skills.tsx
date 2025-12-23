import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Angular", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "HTML / CSS / Tailwind", level: 95 },
    { name: "MongoDB / Firebase", level: 85 },
    { name: "MySQL / SQL", level: 80 },
    { name: "Docker / Kubernetes", level: 85 },
    { name: "Git / CI/CD Pipeline", level: 85 },
    { name: "Appwrite / Cloudinary", level: 75 },
    { name: "GSAP / Animations", level: 75 },
    { name: "Razorpay Integration", level: 80 },
    { name: "n8n Automation", level: 65 },
  ];

  return (
    <section id="skills" className="py-section px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4 text-gradient">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-2">5+ Months</h3>
              <p className="text-muted-foreground">Professional Experience</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-2">10+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-2">MCA</h3>
              <p className="text-muted-foreground">Student (2023-2025)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;