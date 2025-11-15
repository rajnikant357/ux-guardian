import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

const examples = [
  {
    type: "Fake Countdown",
    before: "⏰ Only 2 minutes left! Complete your purchase now!",
    after: "Regular product listing without artificial urgency",
    severity: "High"
  },
  {
    type: "Hidden Checkbox",
    before: "☑ Yes, I want to receive promotional emails (pre-checked)",
    after: "☐ Opt-in to receive promotional emails (unchecked by default)",
    severity: "Medium"
  },
  {
    type: "Fake Scarcity",
    before: "🔥 Only 1 left in stock! 47 people viewing!",
    after: "In stock - Add to cart",
    severity: "High"
  },
  {
    type: "Forced Action",
    before: "Sign in to continue reading this article",
    after: "Full article access without forced registration",
    severity: "Medium"
  }
];

const DarkPatternsExamples = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Before & After
            <span className="bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent"> Protection</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how PrivacyShield transforms manipulative websites into honest experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-card-foreground">{example.type}</h3>
                  <Badge variant={example.severity === "High" ? "destructive" : "secondary"}>
                    {example.severity}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-destructive mb-1">BEFORE</div>
                        <p className="text-sm text-card-foreground">{example.before}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-success mb-1">AFTER</div>
                        <p className="text-sm text-card-foreground">{example.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkPatternsExamples;
