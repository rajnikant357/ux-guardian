import { Button } from "@/components/ui/button";
import { Shield, Download, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-4">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground">
            Start Browsing Honestly
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who have taken back control of their online experience. 
            Free, open-source, and built for privacy.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
              >
                <Download className="w-5 h-5" />
                Install PrivacyShield
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Github className="w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Privacy First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default CTASection;
