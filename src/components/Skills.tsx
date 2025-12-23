import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, logo: "https://cdn.simpleicons.org/react" },
    { name: "Node.js / Express", level: 85, logo: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Angular", level: 85, logo: "https://cdn.simpleicons.org/angular" },
    { name: "Vue.js", level: 80, logo: "https://cdn.simpleicons.org/vuedotjs" },
    { name: "JavaScript / TypeScript", level: 90, logo: "https://cdn.simpleicons.org/typescript" },
    { name: "HTML / CSS / Tailwind", level: 95, logo: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "MongoDB / Firebase", level: 85, logo: "https://cdn.simpleicons.org/mongodb" },
    { name: "MySQL / SQL", level: 80, logo: "https://cdn.simpleicons.org/mysql" },
    { name: "Docker / Kubernetes", level: 85, logo: "https://cdn.simpleicons.org/docker" },
    { name: "Git / CI/CD", level: 85, logo: "https://cdn.simpleicons.org/git" },
    { name: "Appwrite / Cloudinary", level: 75, logo: "https://cdn.simpleicons.org/appwrite" },
    { name: "GSAP / Animations", level: 75, logo: "https://cdn.simpleicons.org/greensock" },
    { name: "Razorpay", level: 80, logo: "https://cdn.simpleicons.org/razorpay" },
    { name: "n8n Automation", level: 65, logo: "https://cdn.simpleicons.org/n8n" },
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
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-md shadow-sm border border-border">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
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