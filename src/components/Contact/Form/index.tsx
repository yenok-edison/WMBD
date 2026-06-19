"use client";

// import React from "react";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors: any = {};

      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";

      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";

      if (!formData.companyName.trim())
        newErrors.companyName = "Company name is required";

      if (!formData.message.trim())
        newErrors.message = "Message is required";

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
      ) {
        newErrors.email = "Enter a valid email";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else {
        const cleanedPhone = formData.phone.replace(/\D/g, "");

        if (cleanedPhone.length < 10 || cleanedPhone.length > 15) {
          newErrors.phone = "Enter a valid phone number";
        }
      }

      setErrors(newErrors);

      return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

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
            sheetName: "Contact",
            ...formData,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setShowSuccess(true);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
        });

        setTimeout(() => {
          setShowSuccess(false);
          window.location.reload();
        }, 2500);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
  "w-full h-14 px-5 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darkmode text-secondary dark:text-white outline-none focus:border-ElectricAqua focus:ring-4 focus:ring-ElectricAqua/10 transition-all duration-300";

  return (
    
    <section className="dark:bg-darkmode lg:py-24 py-16 overflow-hidden">
      {showSuccess && (
        <div className="fixed top-6 right-6 z-[9999] animate-in slide-in-from-right duration-300">
          <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px]">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              ✓
            </div>

            <div>
              <p className="font-semibold">
                Form Submitted Successfully
              </p>
              <p className="text-sm text-green-100">
                We will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6">

            <span className="text-ElectricAqua uppercase tracking-[3px] text-sm font-semibold">
              Contact Us
            </span>

            <h2 className="text-secondary dark:text-white lg:text-[52px] text-[36px] leading-tight font-bold mt-4">
              Connect with us
            </h2>

            <p className="text-SlateBlueText dark:text-gray-300 text-lg leading-8 mt-6 max-w-[580px]">
              We help Organisations remove growth barriers through strategic
              coaching and business transformation programs. Connect with our
              experts to discuss your business goals.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-5">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ElectricAqua/10 flex items-center justify-center shrink-0">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-ElectricAqua"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4H20V20H4V4Z" stroke="none" />
                    <path d="M4 6L12 13L20 6" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                </div>

                <div>
                  <p className="text-secondary dark:text-white font-semibold text-lg">
                    Email Us
                  </p>

                  <a
                    href="mailto:info@winmorebydesign.com"
                    className="text-SlateBlueText dark:text-gray-300 hover:text-ElectricAqua transition-all duration-300"
                  >
                    info@winmorebydesign.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ElectricAqua/10 flex items-center justify-center shrink-0">
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-ElectricAqua"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C10.51 20.92 2 12.41 2 1.92C2 1.37 2.45 0.92 3 0.92H6C6.55 0.92 7 1.37 7 1.92V4.92C7 5.47 6.55 5.92 6 5.92H4.09C4.57 8.46 6.46 10.35 9 10.83V8.92C9 8.37 9.45 7.92 10 7.92H13C13.55 7.92 14 8.37 14 8.92V11.92C14 12.47 13.55 12.92 13 12.92H10C10.48 15.46 12.37 17.35 14.91 17.83V15.92C14.91 15.37 15.36 14.92 15.91 14.92H18.91C19.46 14.92 19.91 15.37 19.91 15.92V18.92C19.91 19.47 19.46 19.92 18.91 19.92H21" />
                  </svg>
                </div>

                <div>
                  <p className="text-secondary dark:text-white font-semibold text-lg">
                    Call Us
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="text-SlateBlueText dark:text-gray-300 hover:text-ElectricAqua transition-all duration-300"
                  >
                    +91 99999 99999
                  </a>
                </div>
              </div> */}
            </div>

            {/* Form */}
            {/* <form className="mt-12"> */}
            {submitted && (
              <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Enquiry Submitted Successfully
                    </h4>
                    <p className="text-sm text-green-700">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* <form className="mt-12" onSubmit={handleSubmit}> */}
            <form
              onSubmit={handleSubmit}
              className="mt-12 bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-3xl p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">

                <div>
                  <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter first name"
                  />

                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Enter last name"
                  />

                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@company.com"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 9876543210"
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                  Company Name *
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your company name"
                />

                {errors.companyName && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-secondary dark:text-white">
                  Message *
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darkmode text-secondary dark:text-white outline-none focus:border-ElectricAqua focus:ring-4 focus:ring-ElectricAqua/10 transition-all duration-300 resize-none"
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full h-14 rounded-xl bg-ElectricAqua text-secondary font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Make an Appointment"}
              </button>
            
            </form>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">

            <div className="relative z-10">
              <Image
                src="/images/contact-page/contact_us.jpeg"
                alt="Contact"
                width={1000}
                height={1000}
                quality={100}
                className="w-full h-auto object-contain rounded-3xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;