import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Codknox",
            description: "Working on modern web technologies including Vue.js, TypeScript, and Vite. Responsible for building responsive admin dashboards and real-time data management systems.",
            duration: "Present (2 Months)",
            projects: [
                {
                    name: "Axora Portal",
                    desc: "A Vue.js app built with TypeScript and Vite. It gives admins a responsive dashboard to manage operations, track data, and handle users."
                }
            ]
        },
        {
            role: "Angular Developer Intern",
            company: "Codknox",
            description: "Started my professional journey as an intern, focusing on Angular development, API integration, and front-end optimization for enterprise-level applications.",
            duration: "3 Months",
            projects: []
        }
    ];

    return (
        <section id="experience" className="py-section px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-display mb-4 text-gradient">Work Experience</h2>
                    <p className="text-lg text-muted-foreground">
                        My professional journey and industry experience
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={exp.company}
                            className="animate-slide-up border-border/50 overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-col md:flex-row">
                                    <div className="bg-accent/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                                            <Briefcase className="h-6 w-6 text-accent-foreground" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                                        <p className="text-sm text-accent-foreground font-medium">{exp.duration}</p>
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                                        {exp.projects && exp.projects.length > 0 && (
                                            <div className="mt-4">
                                                <h5 className="text-sm font-semibold mb-2 uppercase tracking-wider text-muted-foreground">Key Contributions:</h5>
                                                {exp.projects.map((proj, pIdx) => (
                                                    <div key={pIdx} className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                                                        <h6 className="font-medium text-foreground mb-1">{proj.name}</h6>
                                                        <p className="text-sm text-muted-foreground">{proj.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
