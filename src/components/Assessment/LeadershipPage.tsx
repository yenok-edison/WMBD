"use client";

import { useState } from "react";


export const QUESTIONS = [
  {
    id: 1,
    title: "I have clarity on 1 to 3 years career / business goals",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 2,
    title: "I have clarity on 3 to 5 years career / business goals.",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 3,
    title: "There is a process and structure in place to achieve my goals",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 4,
    title: "There are days when I have so many things to do, I don’t know where to begin and what to work on",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 5,
    title: "I know whether the tasks I am working on are 80-20 or 20-80",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 6,
    title: "I distinguish between PLANNED 80-20 or TO DO? ",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 7,
    title: "There are days when everything is urgent and I tend to give up or quality of output suffers",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 8,
    title: "I am confused when there is a conflict in priorities (many things look like a priority)",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 9,
    title: "I take time to plan and organise, even if there are too many things to do",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 10,
    title: "I estimate time for my tasks before starting and track the time taken for the task",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 11,
    title: "My life is WORK & HOME. There seems to be no time for anything else",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 12,
    title: "I do take out time to plan every goal I set",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 13,
    title: "I set aside time for planning and scheduling daily",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 14,
    title: "I schedule my 80-20 tasks",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },

  {
    id: 15,
    title: "I pay attention to my health and wellbeing, inspite of my busy schedule",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 16,
    title: "I pay attention to relationships that matter the most, inspite of my busy schedule",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 17,
    title: "I pay attention to my career (not job) / growth of business",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 18,
    title: "I pay attention to my personal finance",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 19,
    title: "I have a system/method and a plan to stay organised",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 20,
    title: "I ensure to focus on one thing at a time (not attempting do too many things at once)",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 21,
    title: "I keep a track of my tasks and check whether they are completed or pending at the end of the day",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 22,
    title: "I ensure that distractions are kept away while working on critical tasks",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 23,
    title: "I feel bad that I forget some pending jobs both at work and home.",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 24,
    title: "I schedule my day based on priorities nor complete what I've planned",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 25,
    title: "My goals are achieved by design (planned, organised and diligently executed)",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 26,
    title: "At the end of my work day, I feel that important tasks were incomplete",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 27,
    title: "My goals are achieved by design (planned, organised and diligently executed)",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 28,
    title: "At the end of my work day, I feel very little has been achieved even though I have been busy",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 29,
    title: "I do not have the habit of recording or making a note of daily tasks I need to do",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 30,
    title: "I diligently work on tasks and activities that need to be executed to achieve my goals",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 31,
    title: "I execute every goal I set as per plan and take the goal to its logical conclusion",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 32,
    title: "I tend to complete tasks well before time and do not keep it for last minute or last day",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
  {
    id: 33,
    title: "I often take work home and the relationship with my family, at times, get adversely impacted ",
    options: [
      { value: "1", label: "Yes" },
      { value: "2", label: "No" },
      { value: "3", label: "Sometimes" },
      { value: "4", label: "Most of the time" },
      { value: "5", label: "Did not understand" },
    ],
  },
];


// export default function AssessmentForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [answers, setAnswers] = useState({});

//   const [errors, setErrors] = useState<any>({});
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {

//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validate = () => {

//     const newErrors: any = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     if (!formData.companyName.trim()) {
//       newErrors.companyName = "Company name is required";
//     }

//     if (!formData.email.trim()) {

//       newErrors.email = "Email is required";

//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {

//       newErrors.email = "Enter valid email";

//     }

//     if (!formData.phone.trim()) {

//       newErrors.phone = "Phone number is required";

//     } else {

//       const cleanedPhone = formData.phone.replace(/\D/g, "");

//       if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
//         newErrors.phone = "Enter valid phone number";
//       }

//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {

//     if (!validate()) return;

//     setLoading(true);

//     try {

//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbyPdvNv-PT1oyX5Y-0Sd1_hZMdCDzTY1T0tEHdWDccJWfEh4OAZIgjT6zajdmDhwQ1D/exec",
//         {
//           method: "POST",
//           mode: "cors",
//           headers: {
//             "Content-Type": "text/plain;charset=utf-8",
//           },
//           body: JSON.stringify({
//             sheetName: "Contact Form",

//             ...formData,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {

//         setSubmitted(true);

//         setFormData({
//           fullName: "",
//           companyName: "",
//           email: "",
//           phone: "",
//           message: "",
//         });

//       } else {

//         alert("Something went wrong");

//       }

//     } catch (error) {

//       console.error(error);
//       alert("Server error");

//     } finally {

//       setLoading(false);

//     }
//   };



//   const handleAnswer = (questionId, value) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [questionId]: value,
//     }));
//   };

//   const toggleBarrier = (id: string) =>
//     setSelectedBarriers((prev) =>
//       prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
//     );

//   const toggleFocus = (id: string) =>
//     setFocusAreas((prev) =>
//       prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
//     );

//   if (submitted) {
//     return (
//       <section className="py-20 bg-IcyBreeze dark:bg-darkmode">
//         <div className="container max-w-lg mx-auto px-6 text-center">
//           <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 text-3xl text-primary font-bold">
//             ✓
//           </div>
//           <h2 className="text-3xl font-bold text-MidnightNavyText dark:text-IcyBreeze mb-3">
//             Assessment Submitted
//           </h2>
//           <p className="text-SlateBlueText dark:text-CadetBlue text-base leading-relaxed mb-8">
//             Thank you. Our team will review your responses and reach out within 24 hours with personalised insights.
//           </p>
//           <button
//             onClick={() => { setSubmitted(false); setCurrentStep(1); }}
//             className="px-8 py-3 rounded-xl bg-Salem text-white text-sm font-semibold hover:opacity-90 transition-opacity"
//           >
//             Start Over
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 bg-IcyBreeze dark:bg-darkmode">
//       <div className="container mx-auto px-1">

//         {/* Step tracker */}
//         <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-6 mb-8">

//           <div className="flex items-center justify-center gap-8 mb-5">
//             {["Company Profile", "Current State"].map((label, i) => {
//               const step = i + 1;
//               const status = currentStep > step ? "done" : currentStep === step ? "active" : "pending";
//               return (
//                 <div key={label} className="flex items-center">
//                   <div className="flex flex-col items-center gap-1.5">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
//                       ${status === "done" ? "bg-Salem text-white" : status === "active" ? "bg-primary text-secondary" : "bg-PaleSkyBlu dark:bg-darkmode text-CadetBlue"}`}>
//                       {status === "done" ? "✓" : step}
//                     </div>
//                     <span className={`text-[11px] font-medium whitespace-nowrap
//                       ${status === "active" ? "text-primary" : "text-CadetBlue"}`}>
//                       {label}
//                     </span>
//                   </div>
//                   {i < 2 && (
//                     <div className="flex-1 mx-3 mb-5">
//                       <div className="h-[2px] rounded-full bg-PaleSkyBlu dark:bg-dark_border overflow-hidden">
//                         <div
//                           className="h-full bg-primary rounded-full transition-all duration-500"
//                           style={{ width: currentStep > step ? "100%" : "0%" }}
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <div className="h-[3px] rounded-full bg-PaleSkyBlu dark:bg-dark_border overflow-hidden">
//             <div
//               className="h-full bg-primary rounded-full transition-all duration-500"
//               style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
//             />
//           </div>
//           <p className="text-xs text-CadetBlue mt-2">Step {currentStep} of 2</p>
//         </div>

//         {/* ── STEP 1 ── */}
//         {currentStep === 1 && (
//           <div className="space-y-6">
//             <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8">
//               <h3 className="text-lg font-bold text-MidnightNavyText dark:text-IcyBreeze mb-1">Company details</h3>
//               <p className="text-sm text-SlateBlueText dark:text-CadetBlue mb-6">Tell us about the organisation you represent</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {[
//                   { label: "Full name *", type: "text", placeholder: "Your full name" },
//                   { label: "Company name *", type: "text", placeholder: "Your organisation name" },
//                   { label: "Designation *", type: "text", placeholder: "Your Designation" },
//                   { label: "Department *", type: "text", placeholder: "Your Department" },
//                   { label: "Work email *", type: "email", placeholder: "you@company.com" },
//                   { label: "Phone number", type: "tel", placeholder: "+91 98765 43210" },
//                 ].map((f) => (
//                   <div key={f.label}>
//                     <label className="block text-xs font-semibold text-SlateBlueText dark:text-CadetBlue uppercase tracking-wider mb-2">{f.label}</label>
//                     <input
//                       type={f.type}
//                       placeholder={f.placeholder}
//                       className="w-full px-4 py-3.5 rounded-xl border border-PeriwinkleBorder dark:border-dark_border bg-PaleSkyBlu/30 dark:bg-dark_input text-MidnightNavyText dark:text-IcyBreeze text-sm placeholder:text-CadetBlue focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
//                     />
//                   </div>
//                 ))}

//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={() => {
//                   setCurrentStep(2);
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }}
//                 className="px-8 py-3.5 rounded-xl bg-secondary dark:bg-darklight border border-OceanDepthsDarkBorder text-IcyBreeze text-sm font-semibold hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
//               >
//                 Continue →
//               </button>
//             </div>
//           </div>
//         )}

//         {/* ── STEP 2 ── */}
//         {currentStep === 2 && (
//           <div className="space-y-6">

//             {/* Productivity level */}
//             <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8">
//               <p className="text-sm text-SlateBlueText dark:text-CadetBlue mb-6"></p>
//               <div className="flex flex-col gap-2">

//                 {QUESTIONS.map((question) => (
//                   <div
//                     key={question.id}
//                     className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-8 mb-6"
//                   >
//                     <h3 className="text-lg font-bold text-MidnightNavyText dark:text-IcyBreeze mb-6">
//                       {question.title}
//                     </h3>

//                     <div className="flex flex-col gap-2">
//                       {question.options.map((opt) => (
//                         <div
//                           key={opt.value}
//                           onClick={() => handleAnswer(question.id, opt.value)}
//                           className={`flex items-center gap-2 p-2 rounded-xl border-2 cursor-pointer transition-all
//                             ${answers[question.id] === opt.value
//                               ? "border-primary bg-LightYellow/10 dark:bg-primary/5"
//                               : "border-PeriwinkleBorder dark:border-dark_border bg-PaleSkyBlu/20 dark:bg-darkmode hover:border-primary/50"
//                             }`}
//                         >
//                           <div
//                             className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0
//                               ${answers[question.id] === opt.value
//                                 ? "bg-primary text-secondary"
//                                 : "bg-PaleSkyBlu dark:bg-dark_input text-SlateBlueText"
//                               }`}
//                           >
//                             {opt.value}
//                           </div>

//                           <div className="flex-1">
//                             <p
//                               className={`text-sm 
//                                 ${answers[question.id] === opt.value
//                                   ? "text-OliveDrab dark:text-primary"
//                                   : "text-MidnightNavyText dark:text-IcyBreeze"
//                                 }`}
//                             >
//                               {opt.label}
//                             </p>
//                           </div>

//                           <div
//                             className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
//                               ${answers[question.id] === opt.value
//                                 ? "border-primary bg-primary"
//                                 : "border-CadetBlue"
//                               }`}
//                           >
//                             {answers[question.id] === opt.value && (
//                               <span className="text-secondary text-[10px] font-bold">
//                                 ✓
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>


//             <div className="bg-white dark:bg-darklight border border-PowderBlueBorder dark:border-dark_border rounded-2xl p-6">
//               <label className="flex items-start gap-3 cursor-pointer">
//                 <input type="checkbox" className="mt-0.5 w-4 h-4 accent-primary flex-shrink-0" />
//                 <span className="text-sm text-SlateBlueText dark:text-CadetBlue leading-relaxed">
//                   I consent to Arjun Raj Urs and his team contacting me based on my responses. My data will be kept confidential and used solely for assessment purposes.
//                 </span>
//               </label>
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 onClick={() => {
//                   setCurrentStep(1);
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }}
//                 className="px-6 py-3.5 rounded-xl border border-PeriwinkleBorder dark:border-dark_border text-SlateBlueText dark:text-CadetBlue text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
//               >
//                 ← Back
//               </button>

//               <button
//                 onClick={() => {
//                   setSubmitted(true);
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }}
//                 className="px-8 py-3.5 rounded-xl bg-primary text-secondary text-sm font-semibold border border-primary hover:brightness-110 transition-all duration-300 flex items-center gap-2"
//               >
//                 Submit Assessment →
//               </button>
//             </div>
//           </div>
//         )}


//         <p className="text-center text-xs text-CadetBlue mt-10 pb-4">
//           🔒 Your responses are confidential · Arjun Raj Urs Business Coaching
//         </p>
//       </div>
//     </section>
//   );
// }

export default function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const [errors, setErrors] = useState<any>({});
  const [consent, setConsent] = useState(false);


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
    designation: "",
    department: ""
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

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
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
            sheetName: "Leadership",
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
                  { label: "Full name *", type: "text", placeholder: "Your full name", field: "fullName" },
                  { label: "Company name *", type: "text", placeholder: "Your organisation name", field: "companyName" },
                  { label: "Designation *", type: "text", placeholder: "Your Designation", field: "designation" },
                  { label: "Department *", type: "text", placeholder: "Your Department", field: "department" },
                  { label: "Work email *", type: "email", placeholder: "you@company.com", field: "email" },
                  { label: "Phone number", type: "tel", placeholder: "+91 98765 43210", field: "phone" },
                ].map((f) => (

                  <div
                    key={f.label}
                    // className={f.col === 2 ? "md:col-span-2" : ""}
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
                className="px-6 py-3.5 rounded-xl border border-PeriwinkleBorder dark:border-dark_border text-SlateBlueText dark:text-CadetBlue text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
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