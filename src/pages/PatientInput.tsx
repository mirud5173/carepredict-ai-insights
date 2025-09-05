import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Heart, 
  Activity, 
  Pill, 
  Apple, 
  Moon, 
  Calendar,
  FileText,
  Save,
  Upload
} from "lucide-react";

const patientFormSchema = z.object({
  // Demographics
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  
  // Vitals
  bloodPressureSystolic: z.string().min(1, "Systolic BP is required"),
  bloodPressureDiastolic: z.string().min(1, "Diastolic BP is required"),
  heartRate: z.string().min(1, "Heart rate is required"),
  temperature: z.string().min(1, "Temperature is required"),
  
  // Lab Results
  bloodSugar: z.string().min(1, "Blood sugar is required"),
  cholesterol: z.string().optional(),
  hemoglobin: z.string().optional(),
  
  // Medications
  medications: z.string().min(1, "Current medications required"),
  medicationAdherence: z.string().min(1, "Medication adherence is required"),
  
  // Lifestyle
  exerciseFrequency: z.string().min(1, "Exercise frequency is required"),
  dietCompliance: z.string().min(1, "Diet compliance is required"),
  sleepHours: z.string().min(1, "Sleep hours required"),
  smokingStatus: z.string().min(1, "Smoking status is required"),
  
  // Medical History
  chronicConditions: z.string().min(1, "Chronic conditions required"),
  familyHistory: z.string().optional(),
  previousHospitalizations: z.string().optional(),
  
  // Additional Notes
  symptoms: z.string().optional(),
  concerns: z.string().optional(),
});

type PatientFormData = z.infer<typeof patientFormSchema>;

const PatientInput = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PatientFormData>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      bloodPressureSystolic: "",
      bloodPressureDiastolic: "",
      heartRate: "",
      temperature: "",
      bloodSugar: "",
      cholesterol: "",
      hemoglobin: "",
      medications: "",
      medicationAdherence: "",
      exerciseFrequency: "",
      dietCompliance: "",
      sleepHours: "",
      smokingStatus: "",
      chronicConditions: "",
      familyHistory: "",
      previousHospitalizations: "",
      symptoms: "",
      concerns: "",
    },
  });

  const onSubmit = async (data: PatientFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Patient data submitted:", data);
      toast({
        title: "Patient Data Saved",
        description: "The patient information has been successfully recorded and AI analysis is in progress.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const formSections = [
    {
      title: "Demographics",
      icon: User,
      fields: ["name", "age", "gender"]
    },
    {
      title: "Vitals",
      icon: Heart,
      fields: ["bloodPressureSystolic", "bloodPressureDiastolic", "heartRate", "temperature"]
    },
    {
      title: "Lab Results",
      icon: Activity,
      fields: ["bloodSugar", "cholesterol", "hemoglobin"]
    },
    {
      title: "Medications",
      icon: Pill,
      fields: ["medications", "medicationAdherence"]
    },
    {
      title: "Lifestyle",
      icon: Apple,
      fields: ["exerciseFrequency", "dietCompliance", "sleepHours", "smokingStatus"]
    },
    {
      title: "Medical History",
      icon: FileText,
      fields: ["chronicConditions", "familyHistory", "previousHospitalizations"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Patient Data Input</h1>
        <p className="text-muted-foreground">
          Enter comprehensive patient information for AI risk assessment
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {formSections.map((section) => {
            const Icon = section.icon;
            
            return (
              <Card key={section.title} className="health-card-glow p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.fields.map((fieldName) => (
                    <FormField
                      key={fieldName}
                      control={form.control}
                      name={fieldName as keyof PatientFormData}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            {getFieldLabel(fieldName)}
                          </FormLabel>
                          <FormControl>
                            {getFieldInput(fieldName, field)}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </Card>
            );
          })}

          {/* Additional Information */}
          <Card className="health-card-glow p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Additional Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="symptoms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Symptoms</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe any current symptoms..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="concerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient Concerns</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific health concerns or questions..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Card>

          {/* Submit Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Lab Files</span>
            </Button>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>{isSubmitting ? "Processing..." : "Save & Analyze"}</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

// Helper functions
const getFieldLabel = (fieldName: string): string => {
  const labels: Record<string, string> = {
    name: "Full Name",
    age: "Age",
    gender: "Gender",
    bloodPressureSystolic: "Systolic BP (mmHg)",
    bloodPressureDiastolic: "Diastolic BP (mmHg)",
    heartRate: "Heart Rate (bpm)",
    temperature: "Temperature (°F)",
    bloodSugar: "Blood Sugar (mg/dL)",
    cholesterol: "Cholesterol (mg/dL)",
    hemoglobin: "Hemoglobin (g/dL)",
    medications: "Current Medications",
    medicationAdherence: "Medication Adherence",
    exerciseFrequency: "Exercise Frequency",
    dietCompliance: "Diet Compliance",
    sleepHours: "Sleep Hours",
    smokingStatus: "Smoking Status",
    chronicConditions: "Chronic Conditions",
    familyHistory: "Family History",
    previousHospitalizations: "Previous Hospitalizations",
  };
  return labels[fieldName] || fieldName;
};

const getFieldInput = (fieldName: string, field: any) => {
  const selectFields = {
    gender: ["Male", "Female", "Other"],
    medicationAdherence: ["Excellent (>95%)", "Good (80-95%)", "Fair (60-80%)", "Poor (<60%)"],
    exerciseFrequency: ["None", "1-2 times/week", "3-4 times/week", "5+ times/week"],
    dietCompliance: ["Excellent", "Good", "Fair", "Poor"],
    smokingStatus: ["Never", "Former", "Current"],
  };

  const textareaFields = ["medications", "chronicConditions", "familyHistory", "previousHospitalizations"];

  if (selectFields[fieldName as keyof typeof selectFields]) {
    return (
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger>
          <SelectValue placeholder={`Select ${getFieldLabel(fieldName).toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {selectFields[fieldName as keyof typeof selectFields].map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  if (textareaFields.includes(fieldName)) {
    return (
      <Textarea
        placeholder={`Enter ${getFieldLabel(fieldName).toLowerCase()}...`}
        className="min-h-[80px]"
        {...field}
      />
    );
  }

  return (
    <Input
      placeholder={`Enter ${getFieldLabel(fieldName).toLowerCase()}`}
      {...field}
    />
  );
};

export default PatientInput;