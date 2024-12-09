"use client"

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { Button } from "@/components/ui/button"
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';

// Course Interest Options
const COURSE_INTERESTS = [
  { id: "coding", label: "Coding" },
  { id: "critical_thinking", label: "Critical Thinking" },
  { id: "finance", label: "Financial Literacy" },
  { id: "communication", label: "Communication Skills" },
  { id: "problem_solving", label: "Problem Solving" },
];

export default function FeedbackForm() {
  // State management
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [age, setAge] = useState(0);
  const [courseInterests, setCourseInterests] = useState<string[]>([]);
  const [overallExperience, setOverallExperience] = useState('3');
  const [challengeLevel, setChallengeLevel] = useState('JUST_RIGHT');
  const [suggestions, setSuggestions] = useState('');
  const [wouldRecommend, setWouldRecommend] = useState('YES');
  const router =useRouter();
  
  // Dialog state for feedback submission messages
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  // Supabase client (replace with your actual Supabase URL and API key)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );


  useEffect(()=>{
     if(!Cookies.get('userId')){
      router.push('/Authentication/login')
     }
  },[name, email])

  // Form validation
  const validateForm = () => {
    const errors: string[] = [];

    if (name.trim().length < 2) {
      errors.push("Name must be at least 2 characters");
    }

    if (!email.includes('@')) {
      errors.push("Please enter a valid email address");
    }

    if (age < 6 || age > 18) {
      errors.push("Age must be between 6 and 18");
    }

    if (courseInterests.length === 0) {
      errors.push("Please select at least one course");
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setDialogMessage(validationErrors.join('\n'));
      setDialogOpen(true);
      return;
    }

    try {
      // 1. Check if cookie with userid exists 
      const userId = Cookies.get('userId');
      if (!userId) {
        setDialogMessage('User ID not found. Please log in.');
        setDialogOpen(true);
        return;
      }
      console.log("1")
      // 2. Check if user exists in database
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
   
      if (userError || !userData) {
        setDialogMessage('User not found in database.');
        setDialogOpen(true);
        return;
      }
      console.log("2")
      // 3. Check if user has already submitted feedback
      const { data: existingFeedback } = await supabase
        .from('feedback')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (existingFeedback) {
        setDialogMessage('You have already submitted feedback. You cannot submit again.');
        setDialogOpen(true);
        return;
      }
      console.log("3")
      // 4. If all checks pass, submit feedback
      const { error } = await supabase.from('feedback').insert({
        user_id: userId,
        name,
        email,
        parent_email: parentEmail,
        age,
        course_interests: courseInterests,
        overall_experience: overallExperience,
        challenge_level: challengeLevel,
        suggestions,
        would_recommend: wouldRecommend
      });
      console.log("4")
      if (error) {
        return (error);
      }
      console.log("5")
      // Reset form and show success message
      resetForm();
      setDialogMessage('Feedback submitted successfully!');
      setDialogOpen(true);

    } catch (error) {
      console.log('Submission error:', error);
      setDialogMessage('An error occurred while submitting feedback.');
      setDialogOpen(true);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName('');
    setEmail('');
    setParentEmail('');
    setAge(0);
    setCourseInterests([]);
    setOverallExperience('3');
    setChallengeLevel('JUST_RIGHT');
    setSuggestions('');
    setWouldRecommend('YES');
  };

  // Handle course interest toggle
  const toggleCourseInterest = (courseId: string) => {
    setCourseInterests(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Learning Platform Feedback</CardTitle>
        <CardDescription>
          Help us improve your learning experience by providing your valuable feedback.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="full-name">Full Name</label>
              <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="Age">Age</label>
              <Input 
                type="number"
                value={age === 0 ? '' : age}
                onChange={(e) => setAge(e.target.value ? Number(e.target.value) : 0)}
                placeholder="Your age"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="parent-email">Parent/Guardian Email (Optional)</label>
              <Input 
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="Parent's email"
              />
            </div>
          </div>

          {/* Course Interests */}
          <div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1255999291. */}
            <label htmlFor="course-of-interests">Courses of Interest</label>
            <div className="grid md:grid-cols-3 gap-4">
              {COURSE_INTERESTS.map((course) => (
                <div key={course.id} className="flex items-center space-x-2">
                  <Checkbox
                    checked={courseInterests.includes(course.id)}
                    onCheckedChange={() => toggleCourseInterest(course.id)}
                  />
                  <label htmlFor="course-label">{course.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Ratings */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="Overall">Overall Experience Rating</label>
              <RadioGroup 
                value={overallExperience} 
                onValueChange={setOverallExperience}
                className="flex space-x-4"
              >
                {['1', '2', '3', '4', '5'].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <RadioGroupItem value={rating} />
                    <label htmlFor="rating">{rating}</label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <label htmlFor="Challenge">Challenge Level</label>
              <Select 
                value={challengeLevel}
                onValueChange={setChallengeLevel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select challenge level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TOO_EASY">Too Easy</SelectItem>
                  <SelectItem value="JUST_RIGHT">Just Right</SelectItem>
                  <SelectItem value="CHALLENGING">Challenging</SelectItem>
                  <SelectItem value="TOO_DIFFICULT">Too Difficult</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Suggestions Section */}
          <div>
            <label htmlFor="Additional">Additional Suggestions</label>
            <Textarea
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              placeholder="Share your thoughts on how we can improve..."
            />
          </div>

          {/* Recommendation Section */}
          <div>
            <label htmlFor="would">Would You Recommend Us?</label>
            <RadioGroup 
              value={wouldRecommend}
              onValueChange={setWouldRecommend}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="YES" />
                <label htmlFor="YES">Yes</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="NO" />
                <label htmlFor="NO">No</label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </CardContent>

      {/* Dialog for messages */}
      {dialogOpen && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Feedback Submission</DialogTitle>
              <DialogDescription>
                {dialogMessage}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  );
}