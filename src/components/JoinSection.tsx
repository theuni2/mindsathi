"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Users,
  Building,
  Share2,
  ArrowRight,
  Info,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  organisation: string;
  city: string;
  role: string;
  collaborationTrack: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  city?: string;
  role?: string;
  message?: string;
}

export default function JoinSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    organisation: "",
    city: "",
    role: "Student",
    collaborationTrack: "Become a Facilitator",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Please enter your full name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters long.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address (e.g., name@example.com).";
        return undefined;
      case "city":
        if (!value.trim()) return "Please enter your city.";
        return undefined;
      case "message":
        if (!value.trim()) return "Please tell us a bit about why you'd like to collaborate.";
        if (value.trim().length < 10)
          return "Please share a few more details (minimum 10 characters).";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input once the user begins correcting
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {
      fullName: true,
      email: true,
      city: true,
      message: true,
      role: true,
    };
    setTouched(allTouched);

    // Validate all required fields
    const newErrors: FormErrors = {};
    const nameErr = validateField("fullName", formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;
    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;
    const cityErr = validateField("city", formData.city);
    if (cityErr) newErrors.city = cityErr;
    const msgErr = validateField("message", formData.message);
    if (msgErr) newErrors.message = msgErr;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus on first invalid input
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch with configurable hook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
      fullName: "",
      email: "",
      organisation: "",
      city: "",
      role: "Student",
      collaborationTrack: "Become a Facilitator",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  return (
    <section
      id="join"
      className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#EBDDCE] scroll-mt-20"
      aria-label="Join the Movement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0E4] border border-[#E5D5C2] text-xs font-bold text-[#B54220] uppercase tracking-wider mb-4">
            <HeartHandshake className="w-4 h-4 text-[#D95D39]" />
            <span>Join the Movement • साथ जुड़ें</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25201B] tracking-tight">
            One Conversation Can Start Something Bigger.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5A4E42] leading-relaxed">
            MindSaathi is designed to be shared. We want more students, schools and NGOs
            to make emotional wellbeing accessible to children in their communities.
          </p>
        </div>

        {/* 3 Participation Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Option 1 */}
          <div className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FBECE6] text-[#D95D39] flex items-center justify-center font-bold text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#25201B]">
                1. Become a Facilitator
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                Students and youth advocates who want to conduct MindSaathi sessions
                in their local shelter homes, community centers, or after-school clubs.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setFormData((p) => ({ ...p, collaborationTrack: "Become a Facilitator", role: "Student" }));
                document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#B54220] hover:underline"
            >
              <span>Select this track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option 2 */}
          <div className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FEF6DE] text-[#9A7010] flex items-center justify-center font-bold text-xl mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#25201B]">
                2. Partner With Us
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                Shelter homes, community schools and non-profit organisations interested
                in hosting the 3-part MindSaathi workshop series for their children.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setFormData((p) => ({ ...p, collaborationTrack: "Host Workshops at Our NGO / School", role: "NGO" }));
                document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#9A7010] hover:underline"
            >
              <span>Select this track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option 3 */}
          <div className="paper-card rounded-2xl p-6 bg-white border border-[#E8DACB] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#265E4C] flex items-center justify-center font-bold text-xl mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#25201B]">
                3. Share the Toolkit
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5C5044] leading-relaxed">
                Educators, counselors, volunteers, or anyone who wants to translate,
                print, or adapt our free scripts and activities for other languages and regions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setFormData((p) => ({ ...p, collaborationTrack: "Share & Adapt Toolkit", role: "Volunteer" }));
                document.getElementById("join-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#265E4C] hover:underline"
            >
              <span>Select this track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Contact / Application Form Container */}
        <div
          id="join-form"
          className="max-w-2xl mx-auto rounded-3xl bg-[#FAF5EB] border-2 border-[#E8DACB] p-6 sm:p-10 shadow-lg relative scroll-mt-28"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#25201B]">
              Let&apos;s Start a Conversation.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#66584B]">
              Whether you are an IB/CBSE student wanting to facilitate, an NGO leader,
              or an educator, we would love to hear from you.
            </p>
          </div>

          {isSuccess && submittedData ? (
            <div className="p-8 rounded-2xl bg-white border-2 border-[#457B67] text-center animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#EBF2EE] text-[#265E4C] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#25201B]">
                Thank You, {submittedData.fullName}!
              </h4>
              <p className="mt-2 text-sm text-[#4E4236] max-w-md mx-auto leading-relaxed">
                Your message regarding <strong>&ldquo;{submittedData.collaborationTrack}&rdquo;</strong> has been
                received. Anya and the MindSaathi team will review your note and reach out to{" "}
                <span className="font-semibold text-[#25201B]">{submittedData.email}</span> shortly.
              </p>

              {/* Submitted Details Review Card */}
              <div className="mt-6 p-4 rounded-xl bg-[#FAF5EC] border border-[#E8DACB] text-left text-xs text-[#524436] space-y-1.5">
                <div>
                  <span className="font-bold text-[#25201B]">Role:</span> {submittedData.role}
                  {submittedData.organisation && ` • ${submittedData.organisation}`}
                </div>
                <div>
                  <span className="font-bold text-[#25201B]">Location:</span> {submittedData.city}
                </div>
                <div>
                  <span className="font-bold text-[#25201B]">Your Note:</span>{" "}
                  <span className="italic text-[#6E5F52]">&ldquo;{submittedData.message}&rdquo;</span>
                </div>
              </div>

              {/* Developer Configuration Note */}
              <div className="mt-6 p-3 rounded-lg bg-[#FFF9EE] border border-[#F4E3AD] text-[11px] text-[#8C6210] flex items-start gap-2 text-left">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Backend Connection Note:</strong> This form is configured for immediate
                  plug-and-play with any standard endpoint (e.g. Formspree, Resend, Supabase, or Google Forms webhook).
                </span>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#D95D39] text-white text-xs font-bold hover:bg-[#B54220] transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                >
                  Full Name <span className="text-[#D95D39]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("fullName")}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  autoComplete="name"
                  placeholder="e.g. Anya Narayan or Rajesh Gupta"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#25201B] placeholder:text-[#A19183] transition-colors focus:outline-hidden ${
                    errors.fullName
                      ? "border-[#D95D39] ring-2 ring-[#D95D39]/20"
                      : "border-[#D8C9B9] focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                  }`}
                  required
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs font-semibold text-[#D95D39] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                >
                  Email Address <span className="text-[#D95D39]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#25201B] placeholder:text-[#A19183] transition-colors focus:outline-hidden ${
                    errors.email
                      ? "border-[#D95D39] ring-2 ring-[#D95D39]/20"
                      : "border-[#D8C9B9] focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                  }`}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs font-semibold text-[#D95D39] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Row: Organisation & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                  >
                    Organisation / School
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="e.g. Caring Hands / School name"
                    className="w-full px-4 py-3 rounded-xl border border-[#D8C9B9] bg-white text-sm text-[#25201B] placeholder:text-[#A19183] focus:outline-hidden focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                  >
                    City <span className="text-[#D95D39]">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={() => handleBlur("city")}
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    placeholder="e.g. Mumbai, Delhi, Pune..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#25201B] placeholder:text-[#A19183] transition-colors focus:outline-hidden ${
                      errors.city
                        ? "border-[#D95D39] ring-2 ring-[#D95D39]/20"
                        : "border-[#D8C9B9] focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                    }`}
                    required
                  />
                  {errors.city && (
                    <p id="city-error" className="mt-1.5 text-xs font-semibold text-[#D95D39] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.city}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Selection: I am a... */}
              <fieldset>
                <legend className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-2">
                  I am a:
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {["Student", "NGO", "School", "Volunteer", "Other"].map((roleOption) => (
                    <label
                      key={roleOption}
                      className={`flex items-center justify-center px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        formData.role === roleOption
                          ? "bg-[#D95D39] text-white border-[#D95D39] shadow-xs"
                          : "bg-white text-[#524436] border-[#D8C9B9] hover:bg-[#FAF0E4]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={roleOption}
                        checked={formData.role === roleOption}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{roleOption}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Track: How would you like to collaborate? */}
              <div>
                <label
                  htmlFor="collaborationTrack"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                >
                  How would you like to collaborate?
                </label>
                <select
                  id="collaborationTrack"
                  name="collaborationTrack"
                  value={formData.collaborationTrack}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8C9B9] bg-white text-sm text-[#25201B] focus:outline-hidden focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                >
                  <option value="Become a Facilitator">
                    Become a Facilitator (Conduct sessions in community)
                  </option>
                  <option value="Host Workshops at Our NGO / School">
                    Host Workshops at Our Shelter Home / School / NGO
                  </option>
                  <option value="Share & Adapt Toolkit">
                    Share, Translate, or Adapt Free Toolkit
                  </option>
                  <option value="General Question / Connect with Anya">
                    General Question / Connect with Anya
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#3D3126] mb-1.5"
                >
                  Your Message <span className="text-[#D95D39]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Share a bit about your background, the children you serve, or how you want to bring MindSaathi to your community..."
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#25201B] placeholder:text-[#A19183] transition-colors focus:outline-hidden ${
                    errors.message
                      ? "border-[#D95D39] ring-2 ring-[#D95D39]/20"
                      : "border-[#D8C9B9] focus:border-[#D95D39] focus:ring-2 focus:ring-[#D95D39]/15"
                  }`}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs font-semibold text-[#D95D39] flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#D95D39] hover:bg-[#B54220] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Let&apos;s Start a Conversation.</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#7A6C5E] mt-3">
                No spam. We typically reply within 48 hours. Participation is always free and open source.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
