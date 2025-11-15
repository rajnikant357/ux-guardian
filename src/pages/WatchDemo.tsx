import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Shield, Eye, AlertTriangle, Ban } from "lucide-react";
import { Link } from "react-router-dom";

const WatchDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="bg-gradient-primary bg-clip-text text-transparent">PrivacyShield</span> in Action
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Watch how PrivacyShield detects and blocks dark patterns, trackers, and manipulative UI elements in real-time.
          </p>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="aspect-video bg-gradient-subtle rounded-lg border border-border/40 flex items-center justify-center relative overflow-hidden shadow-elegant">
              <div className="absolute inset-0 bg-grid opacity-10"></div>
              <div className="relative z-10 text-center">
                <Play className="h-24 w-24 text-primary mx-auto mb-4" />
                <p className="text-xl font-semibold">Demo Video Coming Soon</p>
                <p className="text-muted-foreground mt-2">Interactive demonstration of PrivacyShield features</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dark Pattern Detection</CardTitle>
              <CardDescription>
                Automatically identifies fake countdown timers, scarcity alerts, and manipulative UI tricks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Fake urgency timers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  False stock alerts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Hidden checkboxes
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tracker Blocking</CardTitle>
              <CardDescription>
                Blocks invisible trackers, session replay scripts, and fingerprinting attempts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Pixel trackers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Session replay
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Fingerprinting
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Honest Mode</CardTitle>
              <CardDescription>
                Transforms websites to show the real deal - no tricks, just honest information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Auto-uncheck hidden options
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Remove fake timers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Show real prices
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Ban className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Cookie Rejector</CardTitle>
              <CardDescription>
                Automatically clicks "Reject All" on cookie banners and GDPR popups.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Auto-reject cookies
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Skip GDPR popups
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Remove consent banners
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Privacy?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who browse the web without manipulation and tracking.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/auth">
              <Button size="lg" className="shadow-elegant">
                Get Started Free
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchDemo;
