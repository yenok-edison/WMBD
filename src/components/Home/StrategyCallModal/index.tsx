"use client";
import React, { useState, useEffect, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  teamSize: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  teamSize?: string;
}

const INITIAL: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  teamSize: "",
  message: "",
};

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];

// ── Component ────────────────────────────────────────────────────────
const StrategyCallModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.role.trim()) e.role = "Your role is required";
    if (!form.teamSize) e.teamSize = "Please select a team size";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
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
            ...form,
            sheetName: "Strategy Calls",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {

        setSubmitted(true);

        setForm(INITIAL);

        setTimeout(() => {

          setSubmitted(false);
          onClose();

        }, 2000);

      } else {

        alert("Something went wrong");

      }

    } catch (error) {

      console.error(error);
      alert("Server error");

    } finally {

      setLoading(false);

    }
  };


  const handleReset = () => {
    setForm(INITIAL);
    setErrors({});
    setSubmitted(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col">

        {/* ── Header ── */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 px-8 pt-8 pb-5 border-b border-gray-100 dark:border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>

          <p className="text-xs font-medium tracking-widest uppercase text-sky-500 mb-1">
            Free · 30 minutes
          </p>
          <h2
            id="modal-title"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            Book a Strategy Call
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tell us a little about yourself and we'll be in touch to confirm your slot.
          </p>
        </div>

        {/* ── Body ── */}
        <div className="px-8 py-6 flex-1">
          {submitted ? (
            // ── Success state ──
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900 dark:text-white"> 
                  Successfully Sent! 
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xs">
                  We'll reach out to <span className="text-gray-700 dark:text-gray-200 font-medium">{form.email}</span> within 24 hours to confirm your strategy call.
                </p>
              </div>
              {/* <button
                onClick={handleReset}
                className="mt-2 text-xs text-sky-500 hover:text-sky-600 underline underline-offset-2"
              >
                Submit another request
              </button> */}
            </div>
          ) : (
            // ── Form ──
            <div className="flex flex-col gap-5">

              {/* Row: Full name */}
              <Field label="Full name" error={errors.fullName} required>
                <input
                  ref={firstInputRef}
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Arjun Raj Urs"
                  className={inputCls(!!errors.fullName)}
                />
              </Field>

              {/* Row: Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Work email" error={errors.email} required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputCls(!!errors.email)}
                  />
                </Field>
                <Field label="Phone number" error={errors.phone} required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    // onChange={handleChange}
                    onChange={(e) => { const value = e.target.value.replace(/[^0-9+ ]/g, ""); setForm((prev) => ({ ...prev, phone: value, })); }}
                    placeholder="+91 98000 00000"
                    className={inputCls(!!errors.phone)}
                  />
                </Field>
              </div>

              {/* Row: Company */}
              <Field label="Company name" error={errors.company} required>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Pvt. Ltd."
                  className={inputCls(!!errors.company)}
                />
              </Field>

              {/* Row: Role + Team size */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="Your role" error={errors.role} required>
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="CEO / Founder / VP"
                    className={inputCls(!!errors.role)}
                  />
                </Field>
                <Field label="Organisation size" error={errors.teamSize} required>
                  <select
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className={selectCls(!!errors.teamSize)}
                  >
                    <option value="">Select…</option>
                    {TEAM_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row: Message (optional) */}
              <Field label="What would you like to discuss?" optional>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share a bit about your current challenges or goals…"
                  rows={3}
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-500/20 transition resize-none"
                />
              </Field>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-1 relative overflow-hidden rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Book my Strategy Call →"
                )}
              </button>

              <p className="text-center text-xs text-gray-400 dark:text-gray-600">
                No spam. Your details are only used to schedule your call.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Helper sub-components ────────────────────────────────────────────
const Field: React.FC<{
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}> = ({ label, error, required, optional, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
      {label}
      {required && <span className="text-sky-500">*</span>}
      {optional && <span className="text-gray-400 font-normal">(optional)</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs text-red-500 flex items-center gap-1">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M6 4v2.5M6 8h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        {error}
      </p>
    )}
  </div>
);

const inputCls = (hasError: boolean) =>
  `w-full rounded-xl border ${
    hasError
      ? "border-red-400 focus:ring-red-100 dark:focus:ring-red-500/20"
      : "border-gray-200 dark:border-white/10 focus:border-sky-400 focus:ring-sky-100 dark:focus:ring-sky-500/20"
  } bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 outline-none focus:ring-2 transition`;

const selectCls = (hasError: boolean) =>
  `w-full rounded-xl border ${
    hasError
      ? "border-red-400 focus:ring-red-100 dark:focus:ring-red-500/20"
      : "border-gray-200 dark:border-white/10 focus:border-sky-400 focus:ring-sky-100 dark:focus:ring-sky-500/20"
  } bg-gray-50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 transition appearance-none cursor-pointer`;

export default StrategyCallModal;
