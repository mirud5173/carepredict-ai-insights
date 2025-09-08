import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Droplets, 
  Users, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Brain,
  Eye,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<"clinician" | "patient">("clinician");

  const patientData = {
    name: "Anumitha Asokan",
    age: 73,
    id: "PT-2024-001",
    riskLevel: "high" as const,
    confidence: 93,
    nextAppointment: "2024-01-15",
    conditions: ["Type 2 Diabetes", "Hypertension", "High Blood Pressure"]
  };

  const vitals = [
    { label: "Blood Pressure", value: "234/89", status: "high", icon: Heart, trend: "up" },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: Activity, trend: "stable" },
    { label: "Temperature", value: "98.6°F", status: "normal", icon: Thermometer, trend: "stable" },
    { label: "Blood Sugar", value: "165 mg/dL", status: "high", icon: Droplets, trend: "up" }
  ];

  const riskFactors = [
    { factor: "Medication Adherence", impact: 35, status: "concerning" },
    { factor: "Blood Pressure Trends", impact: 28, status: "high" },
    { factor: "Exercise Frequency", impact: 20, status: "low" },
    { factor: "Diet Compliance", impact: 17, status: "moderate" }
  ];

  const recommendations = [
    {
      priority: "high",
      title: "Schedule Cardiology Consult",
      description: "BP readings consistently elevated. Recommend specialist review within 2 days.",
      icon: AlertTriangle
    },
    {
      priority: "medium",
      title: "Increase Exercise",
      description: "Add 30 minutes of moderate activity, 3x per week to improve cardiovascular health.",
      icon: TrendingUp
    },
    {
      priority: "low",
      title: "Medication Reminder",
      description: "Set up automated reminders for evening diabetes medication.",
      icon: CheckCircle
    }
  ];

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "low":
        return <Badge className="risk-low">Low Risk</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">Medium Risk</Badge>;
      case "high":
        return <Badge className="risk-high">High Risk</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-success";
      case "high":
      case "concerning":
        return "text-coral";
      case "low":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-coral bg-coral/5";
      case "medium":
        return "border-l-warning bg-warning/5";
      case "low":
        return "border-l-success bg-success/5";
      default:
        return "border-l-muted";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h1>
          <p className="text-muted-foreground">AI-powered health risk assessment and monitoring</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === "clinician" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("clinician")}
              className="text-xs"
            >
              <Brain className="w-4 h-4 mr-1" />
              Clinician View
            </Button>
            <Button
              variant={viewMode === "patient" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("patient")}
              className="text-xs"
            >
              <Eye className="w-4 h-4 mr-1" />
              Patient View
            </Button>
          </div>
        </div>
      </div>

      {/* Patient Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="health-card-glow lg:col-span-2 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-1">{patientData.name}</h2>
              <p className="text-muted-foreground">Age {patientData.age} • ID: {patientData.id}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Active Patient</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {patientData.conditions.map((condition, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {condition}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Next: {new Date(patientData.nextAppointment).toLocaleDateString()}
              </span>
            </div>
            <Button variant="outline" size="sm">
              View Full Profile
            </Button>
          </div>
        </Card>

        <Card className="health-card-glow p-6">
          <div className="text-center">
            <div className="mb-4">
              <Brain className="w-12 h-12 mx-auto text-primary mb-2" />
              <h3 className="text-lg font-semibold">AI Health Risk Assessment</h3>
            </div>
            
            <div className="mb-4">
              {getRiskBadge(patientData.riskLevel)}
            </div>
            
            <div className="mb-2">
              <p className="text-2xl font-bold text-foreground">{patientData.confidence}%</p>
              <p className="text-sm text-muted-foreground">Confidence Score</p>
            </div>
            
            <Progress value={patientData.confidence} className="mb-4" />
            
            <p className="text-xs text-muted-foreground">
              Next 90-day risk prediction based on current health trends
            </p>
          </div>
        </Card>
      </div>

      {/* Vitals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {vitals.map((vital, index) => {
          const Icon = vital.icon;
          const TrendIcon = vital.trend === "up" ? TrendingUp : vital.trend === "down" ? TrendingDown : Activity;
          
          return (
            <Card key={index} className="health-card p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${getStatusColor(vital.status)}`} />
                <TrendIcon className={`w-4 h-4 ${getStatusColor(vital.status)}`} />
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{vital.label}</h3>
              <p className="text-xl font-bold text-foreground">{vital.value}</p>
              <Badge 
                variant="outline" 
                className={`text-xs mt-2 ${getStatusColor(vital.status)}`}
              >
                {vital.status.charAt(0).toUpperCase() + vital.status.slice(1)}
              </Badge>
            </Card>
          );
        })}
      </div>

      {/* Risk Factors & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Factors */}
        <Card className="health-card-glow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-coral" />
            Risk Factor Analysis
          </h3>
          
          <div className="space-y-4">
            {riskFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{factor.factor}</p>
                  <div className="flex items-center mt-1">
                    <Progress value={factor.impact} className="flex-1 mr-3" />
                    <span className="text-xs text-muted-foreground">{factor.impact}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {viewMode === "clinician" && (
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View Detailed Analysis
            </Button>
          )}
        </Card>

        {/* Recommendations */}
        <Card className="health-card-glow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-success" />
            AI Recommendations
          </h3>
          
          <div className="space-y-4">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              
              return (
                <div key={index} className={`border-l-4 pl-4 py-2 ${getPriorityColor(rec.priority)}`}>
                  <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 mt-0.5 text-muted-foreground" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground">{rec.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {viewMode === "patient" ? rec.description.split('.')[0] + '.' : rec.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Button variant="secondary" size="sm" className="mt-4 w-full">
            View All Recommendations
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
