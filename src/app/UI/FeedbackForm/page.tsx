"use client"

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { useToast } from "@/hooks/use-toast"

// Zod Schema for Form Validation
const feedbackFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  parentEmail: z.string().email({ message: "Please enter a valid parent email" }).optional(),
  age: z.number().min(6, { message: "Age must be at least 6" }).max(18, { message: "Age must be 18 or younger" }),
  courseInterests: z.array(z.string()).min(1, { message: "Please select at least one course" }),
  overallExperience: z.enum(["1", "2", "3", "4", "5"], { 
    errorMap: () => ({ message: "Please rate your overall experience" }) 
  }),
  challengeLevel: z.enum(["TOO_EASY", "JUST_RIGHT", "CHALLENGING", "TOO_DIFFICULT"], {
    errorMap: () => ({ message: "Please select a challenge level" })
  }),
  suggestions: z.string().optional(),
  wouldRecommend: z.enum(["YES", "NO"], {
    errorMap: () => ({ message: "Please indicate if you would recommend our courses" })
  })
});

// Course Interest Options
const COURSE_INTERESTS = [
  { id: "coding", label: "Coding" },
  { id: "critical_thinking", label: "Critical Thinking" },
  { id: "finance", label: "Financial Literacy" },
  { id: "communication", label: "Communication Skills" },
  { id: "problem_solving", label: "Problem Solving" },
];

export default function FeedbackForm() {
  const { toast } = useToast()

  // Use Zod for type inference and validation
  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      parentEmail: "",
      age: 0,
      courseInterests: [],
      overallExperience: "3",
      challengeLevel: "JUST_RIGHT",
      suggestions: "",
      wouldRecommend: "YES",
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<z.infer<typeof feedbackFormSchema>> = async (data) => {
    try {
      // Simulate API submission or actual form processing
      console.log("Feedback Submitted:", data);
      
      // Show success toast
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      // Handle submission error
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your feedback. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Learning Platform Feedback</CardTitle>
        <CardDescription>
          Help us improve your learning experience by providing your valuable feedback.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Accordion type="single" collapsible>
              {/* Personal Information Section */}
              <AccordionItem value="personal-info">
                <AccordionTrigger>Personal Information</AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Your age" 
                              {...rest}
                              value={value === 0 ? '' : value}
                              onChange={(e) => {
                                const numValue = e.target.value === '' ? 0 : Number(e.target.value);
                                onChange(numValue);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent/Guardian Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Parent's email (optional)" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Course Interests Section */}
              <AccordionItem value="course-interests">
                <AccordionTrigger>Course Interests</AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="courseInterests"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Courses of Interest</FormLabel>
                          <FormDescription>
                            Select the courses you're most interested in.
                          </FormDescription>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          {COURSE_INTERESTS.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="courseInterests"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          const currentInterests = field.value || [];
                                          return checked
                                            ? field.onChange([...currentInterests, item.id])
                                            : field.onChange(
                                                currentInterests.filter(
                                                  (value) => value !== item.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>

              {/* Experience and Challenge Ratings */}
              <AccordionItem value="experience-ratings">
                <AccordionTrigger>Learning Experience</AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="overallExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Overall Experience Rating</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-4"
                            >
                              {["1", "2", "3", "4", "5"].map(rating => (
                                <FormItem key={rating} className="flex items-center space-x-2">
                                  <FormControl>
                                    <RadioGroupItem value={rating} />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {rating}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="challengeLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Challenge Level</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select challenge level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="TOO_EASY">Too Easy</SelectItem>
                              <SelectItem value="JUST_RIGHT">Just Right</SelectItem>
                              <SelectItem value="CHALLENGING">Challenging</SelectItem>
                              <SelectItem value="TOO_DIFFICULT">Too Difficult</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Suggestions and Recommendations */}
              <AccordionItem value="suggestions">
                <AccordionTrigger>Suggestions</AccordionTrigger>
                <AccordionContent>
                  <FormField
                    control={form.control}
                    name="suggestions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Suggestions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your thoughts on how we can improve..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="wouldRecommend"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel>Would You Recommend Us?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="YES" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="NO" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button type="submit" className="w-full">Submit Feedback</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}