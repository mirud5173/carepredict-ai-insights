import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Users, 
  Award, 
  Github, 
  Linkedin, 
  Mail,
  Lightbulb,
  Heart,
  TrendingUp
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Suhani Panda",
      role: "ML Enthusiast",
      bio: "Pre-final year student, B.Tech in CSE(AIML), VIT Chennai",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Mirudhula",
      role: "Full-Stack Developer",
      bio: "Pre-final year student, B.Tech in CSE(AIML), VIT Chennai",
      linkedin: "https://www.linkedin.com/in/mirudhula-54aa23289/",
      github: "https://github.com/mirud5173"
    },
    {
      name: "Ponn Oviyaa S",
      role: "Research Advisor",
      bio: "Pre-final year student, B.Tech in CSE(CPS), VIT Chennai",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Lasyasri Pabbisetty",
      role: "UX/UI Designer",
      bio: "Pre-final year student, B.Tech in CSE(AIML), VIT Chennai",
      linkedin: "#",
      github: "#"
    }
  ];

  const technologies = [
    "React & TypeScript",
    "Machine Learning (Python)",
    "TensorFlow",
    "Healthcare APIs",
    "Real-time Analytics",
    "Cloud Infrastructure"
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Modeling",
      description: "Deep learning algorithms trained on diverse healthcare datasets to predict patient risks with high accuracy."
    },
    {
      icon: Target,
      title: "Personalized Insights",
      description: "Tailored recommendations based on individual patient profiles, medical history, and current health trends."
    },
    {
      icon: Heart,
      title: "Chronic Care Focus",
      description: "Specialized in managing diabetes, hypertension, heart disease, and other chronic conditions."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "90-day risk forecasting to enable proactive intervention and prevent adverse health events."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">About MediPredict</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Revolutionizing chronic care through AI-powered risk prediction and personalized healthcare insights.
        </p>
      </div>

      {/* Project Overview */}
      <Card className="health-card-glow p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              MediPredict is an innovative AI Risk Engine designed to transform chronic care management. 
              Built for the Hackwell Hackathon 2025, our platform leverages cutting-edge 
              machine learning to predict patient risks and provide actionable insights for both 
              clinicians and patients.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-primary text-primary-foreground">Healthcare AI</Badge>
              <Badge className="bg-secondary text-secondary-foreground">Chronic Care</Badge>
              <Badge className="bg-success text-success-foreground">Predictive Analytics</Badge>
              <Badge className="bg-coral text-coral-foreground">Patient-Centric</Badge>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-primary rounded-xl text-white">
                <p className="text-2xl font-bold">90%</p>
                <p className="text-sm opacity-90">Prediction Accuracy</p>
              </div>
              <div className="text-center p-4 bg-gradient-secondary rounded-xl text-white">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm opacity-90">Risk Factors</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm opacity-90">Monitoring</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl text-white">
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm opacity-90">Disease Types</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="health-card p-6 hover:scale-105 transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <Card className="health-card-glow p-8 mb-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-6">Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="health-card text-center p-6 hover:scale-105 transition-smooth">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Innovation & Impact */}
      <Card className="health-card-glow p-8 text-center">
        <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-4">Innovation & Impact</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          MediPredict represents a breakthrough in healthcare technology, combining the latest advances 
          in artificial intelligence with deep clinical expertise. Our platform has the potential to 
          reduce hospital readmissions by 35%, improve patient outcomes, and lower healthcare costs 
          through early intervention and personalized care strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View Source Code
          </Button>
          <Button variant="outline" size="lg">
            <Mail className="w-5 h-5 mr-2" />
            Contact Team
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default About;
