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
    
    // <section className="dark:bg-darkmode lg:py-24 py-16 overflow-hidden">
    <section className="bg-IcyBreeze dark:bg-darkmode py-16 lg:py-24 overflow-hidden">
      {showSuccess && (
        <div className="fixed top-6 right-6 z-[9999]">
          <div className="rounded-2xl bg-green-600 px-6 py-4 text-white shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
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

      <div className="container">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ================= LEFT ================= */}

          <div>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-secondary px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />

              <span className="text-[11px] uppercase tracking-[0.2em] text-white">
                Contact Us
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-secondary dark:text-white">
              Let's Discuss
              <br />

              <span className="text-primary">
                Your Growth Journey
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-SlateBlueText dark:text-white/70 max-w-xl">
              Whether you're facing leadership challenges, scaling your
              organisation, or strengthening execution, we're here to help you
              identify the right next step.
            </p>

            {/* Contact Card */}

            <div className="mt-10 rounded-3xl border border-border dark:border-dark_border bg-white dark:bg-darklight p-8 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6L12 13L20 6" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>

                </div>

                <div>

                  <p className="font-semibold text-secondary dark:text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@winmorebydesign.com"
                    className="mt-2 block text-SlateBlueText hover:text-primary transition"
                  >
                    info@winmorebydesign.com
                  </a>

                </div>

              </div>

            </div>

            {/* Success */}

            {submitted && (
              <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-5">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    ✓
                  </div>

                  <div>

                    <h4 className="font-semibold text-green-800">
                      Thank You!
                    </h4>

                    <p className="text-green-700 mt-1">
                      Your enquiry has been received.
                      Our team will connect with you shortly.
                    </p>

                  </div>

                </div>

              </div>
            )}

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:sticky lg:top-32">

            <div className="overflow-hidden rounded-[32px] border border-border dark:border-dark_border bg-white dark:bg-darklight shadow-xl">

              <Image
                src="/images/contact-page/contact_us.jpeg"
                alt="Contact"
                width={1000}
                height={600}
                className="h-[260px] md:h-[320px] w-full object-cover"
              />

              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="John"
                    />

                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Doe"
                    />

                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>

                <div className="mt-5">

                  <label className="mb-2 block text-sm font-medium">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  {errors.companyName && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.companyName}
                    </p>
                  )}

                </div>

                <div className="mt-5">

                  <label className="mb-2 block text-sm font-medium">
                    Message *
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border dark:border-dark_border bg-white dark:bg-darkmode px-5 py-4 outline-none focus:border-primary transition resize-none"
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
                  className="mt-8 w-full rounded-xl bg-primary py-4 text-lg font-semibold text-white transition hover:bg-secondary disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Book a Strategy Call"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;