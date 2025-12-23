import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Sourav_Verma_CV.pdf';
    link.download = 'Sourav_Verma_CV.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden border-4 border-border shadow-lg">
            <img
              src="/lovable-uploads/a05fc74a-304d-498a-901d-4c9ebeb94ba6.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="animate-slide-up">
          <h1 className="text-hero mb-6 text-gradient leading-tight">
            Sourav Verma
          </h1>

          <div className="text-2xl md:text-3xl mb-6 text-muted-foreground font-light">
            I'm a <span className="text-foreground font-semibold">Full Stack Developer</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Motivated MCA student and full stack developer skilled in building dynamic web applications.
            Experienced in creating efficient solutions like Virtual Bus Conductor and Attendance Management System,
            committed to leveraging technical expertise for organisational success and staying updated with industry trends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Floating Animation Element */}
        <div className="mt-16 animate-float">
          <div className="w-8 h-8 rounded-full bg-accent/20 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;