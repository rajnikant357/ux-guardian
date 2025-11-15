import { Navbar } from "@/components/Navbar";
import { Shield, Target, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe privacy is a fundamental right. Every feature we build prioritizes user privacy and data protection.",
    },
    {
      icon: Target,
      title: "User-Centric",
      description: "Our mission is to empower users with tools to recognize and block manipulative practices online.",
    },
    {
      icon: Users,
      title: "Transparency",
      description: "We're open about how our extension works and what data we protect. No hidden agendas.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our detection algorithms to stay ahead of new dark patterns and tracking techniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">PrivacyShield</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make the internet a more honest place by protecting users from manipulative design patterns and invisible tracking.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="border-border/40 bg-gradient-subtle backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                PrivacyShield was created in response to the growing use of dark patterns and tracking technologies that manipulate users into making decisions they wouldn't normally make.
              </p>
              <p>
                Every day, websites use psychological tricks like fake countdown timers, hidden checkboxes, and deceptive UI elements to influence user behavior. Meanwhile, invisible trackers monitor every click, scroll, and mouse movement.
              </p>
              <p>
                We believe users deserve better. PrivacyShield is more than just an ad blocker - it's a comprehensive UX protector that gives you back control over your browsing experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-border/40 bg-card/50 backdrop-blur hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <p className="text-muted-foreground">Dark Patterns Blocked</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10M+
            </div>
            <p className="text-muted-foreground">Trackers Stopped</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Privacy Advocates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of security researchers, UX designers, and privacy advocates who are passionate about creating a more transparent internet.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
