"use client";

import { useState } from "react";

const INDUSTRIES = [
  "Technology & Software", "Financial Services", "Healthcare & Pharma",
  "Manufacturing", "Retail & E-commerce", "Education",
  "Consulting & Professional Services", "Real Estate",
  "Logistics & Supply Chain", "Other",
];

const COMPANY_SIZES = [
  "1–10 (Micro)", "11–50 (Small)", "51–200 (Mid-size)",
  "201–500 (Growing)", "501–1000 (Large)", "1000+ (Enterprise)",
];

const REGIONS = [
  "Submit Response",
];

export const QUESTIONS = [
  {
    id: 1,
    title: "Is the organisation's goal(s) / objective(s) defined?",
    options: [
      { value: "1", label: "Not defined" },
      { value: "2", label: "Have a vague idea" },
      { value: "3", label: "Defined partially" },
      { value: "4", label: "Mostly defined" },
      { value: "5", label: "Precisely and clearly defined" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 2,
    title: "Do key employees know what is the goal(s) / objective(s) of the organisation?",
    options: [
      { value: "1", label: "They are not aware" },
      { value: "2", label: "Have a vague idea" },
      { value: "3", label: "They know to a limited extent" },
      { value: "4", label: "They have very good understanding" },
      { value: "5", label: "They precisely know" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 3,
    title: "Are the goal(s) of key employees defined to achieve the overall organisation goal?",
    options: [
      { value: "1", label: "Not defined" },
      { value: "2", label: "Have shared very vaguely" },
      { value: "3", label: "Has defined to a limited extent" },
      { value: "4", label: "Mostly defined" },
      { value: "5", label: "Precisely and clearly defined" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 4,
    title: "Is each key employee aware of his / her respective goal(s)?",
    options: [
      { value: "1", label: "Not aware" },
      { value: "2", label: "Has a vague understanding of it" },
      { value: "3", label: "Is aware to a limited extent" },
      { value: "4", label: "Mostly aware" },
      { value: "5", label: "Fully aware" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 5,
    title: "Have you derived the steps and details of what to do to achieve your goals?",
    options: [
      { value: "1", label: "Have not given a thought" },
      { value: "2", label: "Have thought of it but haven't derived the steps and details" },
      { value: "3", label: "Have thought and have derived some steps and details" },
      { value: "4", label: "Mostly derived the steps and details" },
      { value: "5", label: "All the steps and details are derived" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 6,
    title: "Do you monitor the actions required to achieve your goals? ",
    options: [
      { value: "1", label: "Do not monitor" },
      { value: "2", label: "Rarely monitor" },
      { value: "3", label: "Monitor to a limited extent" },
      { value: "4", label: "Monitor it mostly" },
      { value: "5", label: "Monitor regularly as required" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 7,
    title: "Do you track the progress of your team members' goals?",
    options: [
      { value: "1", label: "Do not track" },
      { value: "2", label: "Hardly track" },
      { value: "3", label: "Track to a limited extent" },
      { value: "4", label: "Mostly tracked" },
      { value: "5", label: "Track regularly and as required" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 8,
    title: "Have you defined milestones for your goals ?",
    options: [
      { value: "1", label: "Not defined" },
      { value: "2", label: "Have a vague understanding of it" },
      { value: "3", label: "Have defined to a limited extent" },
      { value: "4", label: "Mostly defined" },
      { value: "5", label: "Fully defined" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 9,
    title: "Have key employees defined milestones for their goals ?",
    options: [
      { value: "1", label: "They have not defined" },
      { value: "2", label: "They have a vague understanding of it" },
      { value: "3", label: "They have defined to a limited extent" },
      { value: "4", label: "They have mostly defined" },
      { value: "5", label: "They have fully defined" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 10,
    title: "Do you track the progress of your milestones?",
    options: [
      { value: "1", label: "I do not keep a track of the milestones" },
      { value: "2", label: "Have a vague sense of it" },
      { value: "3", label: "Keep a track to a limited extent" },
      { value: "4", label: "Mostly tracked" },
      { value: "5", label: "Always tracked" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 11,
    title: "Do you track the progress of your employees' milestones?",
    options: [
      { value: "1", label: "Milestones are not tracked" },
      { value: "2", label: "Have a vague sense of their milestones" },
      { value: "3", label: "Keep a track to a limited extent" },
      { value: "4", label: "Mostly tracked" },
      { value: "5", label: "Always tracked as required" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 12,
    title: "At the start of the day, do you walk in with a plan for the day?",
    options: [
      { value: "1", label: "There is no plan for the day" },
      { value: "2", label: "I plan but rarely" },
      { value: "3", label: "I plan and not as consistently" },
      { value: "4", label: "I have a plan for most of the days" },
      { value: "5", label: "I always walk with a plan for the days" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 13,
    title: "At the start of the day, do your key employees, walk in with a plan for the day?",
    options: [
      { value: "1", label: "I do not know whether they walk in with a plan" },
      { value: "2", label: "I think they plan it mostly in their minds" },
      { value: "3", label: "Some of the key employees walk in with a plan" },
      { value: "4", label: "Many of the key employees walk in with a plan" },
      { value: "5", label: "All of them walk in with a plan" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 14,
    title: "Is there a schedule for your tasks ?",
    options: [
      { value: "1", label: "I rarely schedule the work or do work adhoc or what is urgent or at the top of my mind" },
      { value: "2", label: "I have a schedule but only in the mind" },
      { value: "3", label: "I have written down schedule but hardly stick to it" },
      { value: "4", label: "I have a written down schedule and mostly follow it" },
      { value: "5", label: "I have a schedule and follow it diligently" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },

  {
    id: 15,
    title: "Do your key employees schedule their tasks?",
    options: [
      { value: "1", label: "They do not schedule the work or do work adhoc or what is urgent or at the top of my mind" },
      { value: "2", label: "They have a schedule but only in the mind" },
      { value: "3", label: "They have a written down schedule but hardly stick to it" },
      { value: "4", label: "They have a written down schedule and mostly follow it" },
      { value: "5", label: "They have a schedule and follow it diligently" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 16,
    title: "Is time estimated for your tasks?",
    options: [
      { value: "1", label: "I do not estimate time before attempting tasks" },
      { value: "2", label: "Sometimes I estimate time but in my mind" },
      { value: "3", label: "I write down time estimation for tasks but do not stick to it" },
      { value: "4", label: "I write down time estimation for tasks and mostly stick to it" },
      { value: "5", label: "I write down time estimation for all the tasks and have mastered time estimation" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 17,
    title: "Do your key employees estimate time for their tasks? ",
    options: [
      { value: "1", label: "They do not estimate time before attempting tasks" },
      { value: "2", label: "Sometimes they do estimate time but in their minds" },
      { value: "3", label: "They write down the time estimation for tasks but do not stick to it" },
      { value: "4", label: "They write down time estimation for tasks and mostly stick to it" },
      { value: "5", label: "They write down time estimation for all the tasks and have mastered time estimation" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 18,
    title: "Do you complete your tasks on or before the set timeline?",
    options: [
      { value: "1", label: "Hardly" },
      { value: "2", label: "Occasionally" },
      { value: "3", label: "I somehow manage to complete before the set timeline and end up stressed" },
      { value: "4", label: "I complete most of the tasks before the set timeline but do not have any spare time for contingencies" },
      { value: "5", label: "I complete the tasks before the set timeline and everything happens in a planned manner with time factored for contingencies" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },
  {
    id: 19,
    title: "Do your key employees complete their tasks on or before mutually agreed timeline?",
    options: [
      { value: "1", label: "Hardly" },
      { value: "2", label: "Occasionally" },
      { value: "3", label: "They somehow manage to complete before the set timeline and end up stressed" },
      { value: "4", label: "They complete most of the tasks before the set timeline but do not have any spare time for contingencies" },
      { value: "5", label: "They complete the tasks before the set timeline and everything happens in a planned manner with time factored for contingencies" },
      { value: "6", label: "I do not know / I am not aware" },
    ],
  },

];

export default function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  // const [answers, setAnswers] = useState({});

  const [errors, setErrors] = useState<any>({});
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState<{
    [key: number]: string;
  }>({});


  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    opaReportNo: "",
    industry: "",
    companySize: "",
    opaAuditStatus: "",
    reportDate: "",
  });

  const validateStep1 = () => {

    const newErrors: any = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Company Name
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    // Email
    if (!formData.email.trim()) {

      newErrors.email = "Email is required";

    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {

      newErrors.email = "Enter valid email";
    }

    // Phone
    if (!formData.phone.trim()) {

      newErrors.phone = "Phone number is required";

    } else {

      const cleanedPhone = formData.phone.replace(/\D/g, "");

      if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
        newErrors.phone = "Enter valid phone number";
      }

    }

    // OPA Report No
    if (!formData.opaReportNo.trim()) {
      newErrors.opaReportNo = "OPA Report No is required";
    }

    // Industry
    if (!formData.industry) {
      newErrors.industry = "Select industry";
    }

    // Company Size
    if (!formData.companySize) {
      newErrors.companySize = "Select company size";
    }

    // Audit Status
    if (!formData.opaAuditStatus) {
      newErrors.opaAuditStatus = "Select audit status";
    }

    // Report Date
    if (!formData.reportDate) {
      newErrors.reportDate = "Select report date";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {

    const newErrors: any = {};

    // Questions validation
    for (let i = 1; i <= QUESTIONS.length; i++) {

      if (!answers[i]) {
        newErrors[`question_${i}`] = true;
      }

    }

    // Consent validation
    if (!consent) {
      newErrors.consent = true;
    }

    setErrors((prev: any) => ({
      ...prev,
      ...newErrors,
    }));

    return Object.keys(newErrors).length === 0;
  };


  const handleAnswer = (
    questionId: number,
    value: string,
    label: string
  ) => {

    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        value,
        label,
      },
    }));
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const toggleBarrier = (id: string) =>
    setSelectedBarriers((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );

  const toggleFocus = (id: string) =>
    setFocusAreas((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  if (submitted) {
    return (
      <section className="py-20 bg-IcyBreeze dark:bg-darkmode">
        <div className="container max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 text-3xl text-primary font-bold">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-MidnightNavyText dark:text-IcyBreeze mb-3">
            Assessment Submitted
          </h2>
          <p className="text-SlateBlueText dark:text-CadetBlue text-base leading-relaxed mb-8">
            Thank you. Our team will review your responses and reach out within 24 hours with personalised insights.
          </p>
          <button
            onClick={() => { setSubmitted(false); setCurrentStep(1); }}
            className="px-8 py-3 rounded-xl bg-Salem text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start Over
          </button>
        </div>
      </section>
    );
  }

  const handleSubmit = async () => {

    if (!validateStep2()) return;
    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyPdvNv-PT1oyX5Y-0Sd1_hZMdCDzTY1T0tEHdWDccJWfEh4OAZIgjT6zajdmDhwQ1D/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            sheetName: "OPA",
            ...formData,
            answers,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        setSubmitted(true);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      } else {

        alert("Something went wrong");

      }

    } catch (error) {

      console.error(error);
      alert("Server error");

    }
  };

  const getFieldError = (field: string) => {
    return errors[field] ? (
      <p className="text-red-500 text-xs mt-1">
        {errors[field]}
      </p>
    ) : null;
  };

  return (
    <section className="py-16 bg-IcyBreeze dark:bg-darkmode">
      <div className="container mx-auto px-1">

        {/* Step tracker */}
        <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-6 mb-8">

          <div className="flex items-center justify-center gap-8 mb-5">
            {["Company Profile", "Current State"].map((label, i) => {
              const step = i + 1;
              const status = currentStep > step ? "done" : currentStep === step ? "active" : "pending";
              return (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                      ${status === "done" ? "bg-Salem text-white" : status === "active" ? "bg-primary text-secondary" : "bg-PaleSkyBlu dark:bg-darkmode text-CadetBlue"}`}>
                      {status === "done" ? "✓" : step}
                    </div>
                    <span className={`text-[11px] font-medium whitespace-nowrap
                      ${status === "active" ? "text-primary" : "text-CadetBlue"}`}>
                      {label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="flex-1 mx-3 mb-5">
                      <div className="h-[2px] rounded-full bg-PaleSkyBlu dark:bg-dark_border overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: currentStep > step ? "100%" : "0%" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="h-[3px] rounded-full bg-PaleSkyBlu dark:bg-dark_border overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            />
          </div>
          <p className="text-xs text-CadetBlue mt-2">Step {currentStep} of 2</p>
        </div>

        {/* ── STEP 1 ── */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8">
              <h3 className="text-lg font-bold text-MidnightNavyText dark:text-IcyBreeze mb-1">Company details</h3>
              <p className="text-sm text-SlateBlueText dark:text-CadetBlue mb-6">Tell us about the organisation you represent</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {[
                  { label: "Full name *", type: "text", placeholder: "Your full name", col: 2, field: "fullName" },
                  { label: "Company name *", type: "text", placeholder: "Your organisation name", field: "companyName" },
                  { label: "Work email *", type: "email", placeholder: "you@company.com", field: "email" },
                  { label: "Phone number *", type: "tel", placeholder: "+91 98765 43210", field: "phone" },
                  { label: "OPA Report No *", type: "text", placeholder: "25-02", field: "opaReportNo" },
                ].map((f) => (

                  <div
                    key={f.label}
                    className={f.col === 2 ? "md:col-span-2" : ""}
                  >

                    <label className="block text-xs font-semibold text-SlateBlueText dark:text-CadetBlue uppercase tracking-wider mb-2">
                      {f.label}
                    </label>

                    <input
                      type={f.type}
                      name={f.field}
                      value={formData[f.field as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-PaleSkyBlu/30 dark:bg-dark_input text-MidnightNavyText dark:text-IcyBreeze text-sm placeholder:text-CadetBlue focus:outline-none focus:ring-2 transition-all
                        
                        ${
                          errors[f.field]
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-PeriwinkleBorder dark:border-dark_border focus:border-primary focus:ring-primary/20"
                        }
                      `}
                    />

                    {getFieldError(f.field)}

                  </div>
                ))}

                {[
                  {
                    label: "Industry *",
                    options: INDUSTRIES,
                    placeholder: "Select industry",
                    field: "industry",
                  },
                  {
                    label: "Company size *",
                    options: COMPANY_SIZES,
                    placeholder: "Select team size",
                    field: "companySize",
                  },
                  {
                    label: "OPA Audit Status *",
                    options: REGIONS,
                    placeholder: "Select status",
                    field: "opaAuditStatus",
                  },
                ].map((f) => (

                  <div key={f.label}>

                    <label className="block text-xs font-semibold text-SlateBlueText dark:text-CadetBlue uppercase tracking-wider mb-2">
                      {f.label}
                    </label>

                    <select
                      name={f.field}
                      value={formData[f.field as keyof typeof formData]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-PaleSkyBlu/30 dark:bg-dark_input text-MidnightNavyText dark:text-IcyBreeze text-sm focus:outline-none focus:ring-2 transition-all appearance-none

                        ${
                          errors[f.field]
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-PeriwinkleBorder dark:border-dark_border focus:border-primary focus:ring-primary/20"
                        }
                      `}
                    >
                      <option value="">{f.placeholder}</option>

                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>

                    {getFieldError(f.field)}

                  </div>
                ))}

                <div>

                  <label className="block text-xs font-semibold text-SlateBlueText dark:text-CadetBlue uppercase tracking-wider mb-2">
                    Report Date *
                  </label>

                  <input
                    type="date"
                    name="reportDate"
                    value={formData.reportDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-PaleSkyBlu/30 dark:bg-dark_input text-MidnightNavyText dark:text-IcyBreeze text-sm focus:outline-none focus:ring-2 transition-all
                      
                      ${
                        errors.reportDate
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-PeriwinkleBorder dark:border-dark_border focus:border-primary focus:ring-primary/20"
                      }
                    `}
                  />

                  {getFieldError("reportDate")}

                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {

                  if (!validateStep1()) return;

                  setCurrentStep(2);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                }}

                className="px-8 py-3.5 rounded-xl bg-secondary dark:bg-darklight border border-OceanDepthsDarkBorder text-IcyBreeze text-sm font-semibold hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2 ── */}
        {currentStep === 2 && (
          <div className="space-y-6">

            {/* Productivity level */}
            <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8">
              {/* <h3 className="text-lg font-bold text-MidnightNavyText dark:text-IcyBreeze mb-1">Is the organisation's goal(s) / objective(s) defined?</h3> */}
              <p className="text-sm text-SlateBlueText dark:text-CadetBlue mb-6"></p>
              <div className="flex flex-col gap-2">

                {QUESTIONS.map((question) => (
                  <div
                    key={question.id}
                    className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8 mb-6"
                  >
                    <h3 className="text-lg font-bold text-MidnightNavyText dark:text-IcyBreeze mb-6">
                      {question.title}
                    </h3>

                    <div className="flex flex-col gap-2">
                      {question.options.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => handleAnswer(question.id, opt.value, opt.label)}
                          className={`flex items-center gap-2 p-2 rounded-xl border-2 cursor-pointer transition-all
                            ${answers[question.id]?.value === opt.value
                              ? "border-primary bg-LightYellow/10 dark:bg-primary/5"
                              : "border-PeriwinkleBorder dark:border-dark_border bg-PaleSkyBlu/20 dark:bg-darkmode hover:border-primary/50"
                            }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0
                              ${answers[question.id]?.value === opt.value
                                ? "bg-primary text-secondary"
                                : "bg-PaleSkyBlu dark:bg-dark_input text-SlateBlueText"
                              }`}
                          >
                            {opt.value}
                          </div>

                          <div className="flex-1">
                            <p
                              className={`text-sm 
                                ${answers[question.id]?.value === opt.value
                                  ? "text-OliveDrab dark:text-primary"
                                  : "text-MidnightNavyText dark:text-IcyBreeze"
                                }`}
                            >
                              {opt.label}
                            </p>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                              ${answers[question.id]?.value === opt.value
                                ? "border-primary bg-primary"
                                : "border-CadetBlue"
                              }`}
                          >
                            {answers[question.id]?.value === opt.value && (
                              <span className="text-secondary text-[10px] font-bold">
                                ✓
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-6">
              <label className="flex items-start gap-3 cursor-pointer">
                {/* <input type="checkbox" className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0" /> */}
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0"
                />

                <span className="text-sm text-SlateBlueText dark:text-CadetBlue leading-relaxed">
                  I consent to Arjun Raj Urs and his team contacting me based on my responses. My data will be kept confidential and used solely for assessment purposes.
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                // onClick={() => setCurrentStep(1)}
                className="px-6 py-3.5 rounded-xl border border-PeriwinkleBorder dark:border-dark_border text-SlateBlueText dark:text-CadetBlue text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                ← Back
              </button>
              {/* <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3.5 rounded-xl bg-secondary dark:bg-darklight border border-OceanDepthsDarkBorder text-IcyBreeze text-sm font-semibold hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
              >
                Continue →
              </button> */}
              <button
                // onClick={() => setSubmitted(true)}
                onClick={handleSubmit}
                // onClick={() => {
                //   setSubmitted(true);
                //   window.scrollTo({
                //     top: 0,
                //     behavior: "smooth",
                //   });
                // }}
                className="px-8 py-3.5 rounded-xl bg-primary text-secondary text-sm font-semibold border border-primary hover:brightness-110 transition-all duration-300 flex items-center gap-2"
              >
                Submit Assessment →
              </button>
            </div>
          </div>
        )}


        <p className="text-center text-xs text-CadetBlue mt-10 pb-4">
          🔒 Your responses are confidential · Arjun Raj Urs Business Coaching
        </p>
      </div>
    </section>
  );
}