import { AlertTriangle, Eye, MousePointer, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fake Urgency",
    description: "Countdown timers and 'only 2 left' alerts designed to pressure you into quick decisions.",
    color: "text-accent"
  },
  {
    icon: Eye,
    title: "Hidden Tracking",
    description: "Invisible pixels, mouse movement trackers, and session replay scripts watching your every move.",
    color: "text-destructive"
  },
  {
    icon: MousePointer,
    title: "Tricky UI",
    description: "Auto-checked boxes, hidden cancel buttons, and forced sign-ins that manipulate your choices.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Time Wasters",
    description: "Cookie popups, consent forms, and fake warnings that waste your time and collect your data.",
    color: "text-secondary"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Websites Are
            <span className="bg-gradient-to-r from-destructive to-accent bg-clip-text text-transparent"> Manipulating You</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Every day, websites use deceptive patterns and hidden trackers to trick you into actions you don't want to take.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${problem.color}/20 to-transparent flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
