import { Button } from "@/components/ui/button";
import { Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shield.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container px-4 py-20 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Shield className="w-4 h-4" />
              <span>Your Privacy, Protected</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Block Dark Patterns & 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Hidden Trackers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              A lightweight browser extension that automatically detects and blocks manipulative UI tricks, fake urgency, and invisible tracking used to deceive you.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/auth">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg">
                  <Download className="w-5 h-5" />
                  Install Extension
                </Button>
              </Link>
              <Link to="/watch-demo">
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">100K+</div>
                <div className="text-sm text-muted-foreground">Users Protected</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">500M+</div>
                <div className="text-sm text-muted-foreground">Trackers Blocked</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="PrivacyShield protecting your browser from dark patterns and tracking" 
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
