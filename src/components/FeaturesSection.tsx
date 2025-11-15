import { Shield, Eye, Sparkles, BarChart3, Cookie } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Shield,
    title: "Dark Pattern Detector",
    description: "Automatically identifies and highlights manipulative UI elements like fake countdowns, scarcity alerts, and forced engagement tricks.",
    badge: "Core Feature",
    color: "primary"
  },
  {
    icon: Eye,
    title: "Anti-Tracking Engine",
    description: "Blocks pixel trackers, session replay scripts, third-party tracking, and fingerprinting libraries before they can monitor you.",
    badge: "Privacy First",
    color: "destructive"
  },
  {
    icon: Sparkles,
    title: "Honest Mode",
    description: "Transforms websites automatically: unchecks hidden boxes, removes fake urgency, shows real prices, and makes cancel buttons visible.",
    badge: "Auto-Fix",
    color: "success"
  },
  {
    icon: BarChart3,
    title: "Transparency UI",
    description: "See exactly what dark patterns were detected and what trackers were blocked with a detailed manipulation score for each site.",
    badge: "Visual Insights",
    color: "secondary"
  },
  {
    icon: Cookie,
    title: "Auto Cookie Rejector",
    description: "Automatically clicks 'Reject All' on cookie banners, skips GDPR popups, and removes consent forms so you can browse freely.",
    badge: "Time Saver",
    color: "accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Protection That
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Actually Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Not just an ad blocker — a complete UX protection system that keeps websites honest.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-border group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-card-foreground">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
