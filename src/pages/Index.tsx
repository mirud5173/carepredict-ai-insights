import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  TrendingUp, 
  Shield, 
  Users, 
  Activity,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Stethoscope
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms analyze patient data to predict health risks with 90% accuracy.",
      color: "bg-gradient-primary"
    },
    {
      icon: Heart,
      title: "Chronic Care Management",
      description: "Specialized monitoring for diabetes, hypertension, and cardiovascular conditions.",
      color: "bg-gradient-secondary"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "90-day forecasting enables proactive intervention and personalized care plans.",
      color: "bg-gradient-success"
    },
    {
      icon: Shield,
      title: "Clinical Decision Support",
      description: "Evidence-based recommendations help clinicians make informed treatment decisions.",
      color: "bg-gradient-coral"
    }
  ];

  const benefits = [
    "Reduce hospital readmissions by 35%",
    "Early detection of health deterioration",
    "Personalized treatment recommendations",
    "Improved patient engagement",
    "Lower healthcare costs",
    "Better clinical outcomes"
  ];

  const stats = [
    { number: "90%", label: "Prediction Accuracy", icon: BarChart3 },
    { number: "35%", label: "Reduced Readmissions", icon: TrendingUp },
    { number: "24/7", label: "Continuous Monitoring", icon: Activity },
    { number: "30+", label: "Risk Factors Analyzed", icon: Stethoscope }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern healthcare technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-up text-shadow">
                MediPredict
                <span className="block text-2xl lg:text-3xl font-medium text-white/90 mt-2">
                  AI Risk Engine for Chronic Care
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 animate-fade-up max-w-2xl">
                Predict, Prevent, Personalize Chronic Care with AI
              </p>
              
              <p className="text-lg text-white/80 mb-8 animate-fade-up max-w-xl">
                Revolutionary AI platform that transforms chronic disease management through 
                predictive analytics, personalized insights, and proactive care coordination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
                <Link to="/dashboard">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Play className="w-5 h-5 mr-2" />
                    Try Demo
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="xl" 
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="health-card-glow p-4 lg:p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Revolutionizing Healthcare with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI platform provides clinicians and patients with the tools needed 
              for proactive chronic care management and improved health outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="health-card p-6 text-center hover:scale-105 transition-smooth">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Transforming Patient Outcomes
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                MediPredict leverages cutting-edge AI to deliver measurable improvements in 
                chronic care management, helping healthcare providers achieve better outcomes 
                while reducing costs.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="health-card-glow p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Dual-Mode Interface
                </h3>
                <p className="text-muted-foreground mb-6">
                  Specialized views for clinicians and patients ensure everyone gets 
                  the right information at the right level of detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Brain className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">Clinician View</p>
                    <p className="text-xs text-muted-foreground">Detailed analytics</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium">Patient View</p>
                    <p className="text-xs text-muted-foreground">Simple insights</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Chronic Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the future of healthcare with our AI-powered risk prediction platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/patient">
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                Start Patient Assessment
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                View Dashboard Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
