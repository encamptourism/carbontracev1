import { useEffect } from "react";
import adminapi from "../../api/adminapi";

const Contactus = ({
  issuccess,
  setIssuccess,
  toggle,
  setToggle,
  bloading,
  setBloading,
  enquiry = {},
  setEnquiry,
  error = {},
  setError,
}) => {
  useEffect(() => {
    if (!toggle) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setToggle(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggle, setToggle]);

  const onChangeHandler = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
    if (error && error[e.target.name]) {
      setError({ ...error, [e.target.name]: "" });
    }
  };

  const validateEmail = (emails) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return Boolean(emails && emails.match(validRegex));
  };

  const submitDetails = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    let acterror = { ...error };
    let hasError = false;

    if (!enquiry.firstName || enquiry.firstName.trim() === "") {
      acterror.firstName = "First name is required";
      hasError = true;
    } else {
      acterror.firstName = "";
    }

    if (!enquiry.lastName || enquiry.lastName.trim() === "") {
      acterror.lastName = "Last name is required";
      hasError = true;
    } else {
      acterror.lastName = "";
    }

    if (
      !enquiry.contact ||
      enquiry.contact.trim().length < 10 ||
      enquiry.contact.trim().length > 13
    ) {
      acterror.contact = "Phone must be 10-13 digits";
      hasError = true;
    } else {
      acterror.contact = "";
    }

    if (!enquiry.email || !validateEmail(enquiry.email)) {
      acterror.email = "Valid email is required";
      hasError = true;
    } else {
      acterror.email = "";
    }

    setError(acterror);
    if (hasError) return;

    setBloading(true);
    const path = "/addinquiry";
    const newfullname = `${enquiry.firstName || ""} ${enquiry.lastName || ""}`.trim();
    const submissiondata = {
      name: newfullname,
      email: enquiry.email || "",
      phone: enquiry.contact || "",
      message: enquiry.message || "",
      tag: "carbonfootprintenquiry",
      info: {
        name: newfullname,
        email: enquiry.email || "",
        phone: enquiry.contact || "",
        message: enquiry.message || "",
      },
    };

    try {
      const localresponse = await adminapi.post(
        path,
        JSON.stringify(submissiondata)
      );
      if (localresponse?.data?.inquiry?._id !== undefined) {
        setIssuccess(true);
        setEnquiry({
          message: "",
          firstName: "",
          lastName: "",
          contact: "",
          email: "",
        });
        setBloading(false);
        setTimeout(() => {
          setToggle(false);
          setIssuccess(false);
        }, 4000);
      } else {
        setIssuccess(false);
        setBloading(false);
      }
    } catch (err) {
      setIssuccess(false);
      setBloading(false);
      console.error("Contact inquiry error:", err);
    }
  };

  return (
    <>
      <div
        data-no-cursor="true"
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 z-[99998] ${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setToggle(false)}
        aria-hidden="true"
      />

      <aside
        data-no-cursor="true"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Us Form"
        className={`contact-drawer cursor-default fixed top-0 right-0 h-full w-full sm:w-[460px] bg-[#090812] border-l border-white/10 shadow-[-25px_0_80px_rgba(0,0,0,0.95)] z-[100000] overflow-hidden transition-transform duration-300 ease-out text-[#f4f1ff] ${toggle ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 15%, rgba(0, 242, 143, 0.22) 0%, rgba(0, 198, 182, 0.08) 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-4 pt-4 pb-4 sm:px-7 sm:pt-4 sm:pb-6 flex flex-col justify-between h-full">
          <div className="border-b-2 border-white/15 pb-4">
            <div className="flex items-center justify-between gap-4">
              <h2
                className="text-[20px] sm:text-[27px] font-extrabold text-white tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Leave a <span className="text-[#00f28f]">Message</span>
              </h2>
              <button
                type="button"
                onClick={() => setToggle(false)}
                aria-label="Close"
                className="w-9 h-9 flex-shrink-0 -translate-y-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-[#9a95b5] font-normal">
              Send us a message and we'll get back to you shortly.
            </p>
          </div>

          {issuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-[#00f28f]/15 border border-[#00f28f]/30 flex items-center justify-center text-[#00f28f] shadow-[0_0_30px_rgba(0,242,143,0.25)] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                Thank you!
              </h3>
              <p className="text-sm text-[#9a95b5] max-w-[280px] leading-relaxed">
                Your submission has been received. We will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={submitDetails} autoComplete="off" className="flex flex-col gap-3">
              <style jsx>{`
                input:-webkit-autofill,
                textarea:-webkit-autofill {
                  -webkit-box-shadow: 0 0 0 1000px #121020 inset !important;
                  -webkit-text-fill-color: #f4f1ff !important;
                  caret-color: #f4f1ff !important;
                  transition: background-color 5000s ease-in-out 0s !important;
                }
              `}</style>
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="contact-firstName"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-2"
                  >
                    <svg
                      className="w-4 h-4 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>First Name</span>
                    <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    id="contact-firstName"
                    name="firstName"
                    type="text"
                    autoComplete="off"
                    placeholder="First name"
                    value={enquiry.firstName || ""}
                    onChange={onChangeHandler}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#121020] border text-sm text-[#f4f1ff] placeholder-white/25 outline-none transition-all duration-200 ${error?.firstName
                      ? "border-red-500/80 ring-1 ring-red-500/20"
                      : "border-white/10 hover:border-white/20 focus:border-[#00f28f]/70 focus:ring-1 focus:ring-[#00f28f]/30"
                      }`}
                  />
                  {error?.firstName && (
                    <p className="text-red-400 text-xs mt-1">{error.firstName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-lastName"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-2"
                  >
                    <svg
                      className="w-4 h-4 text-white/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Last Name</span>
                    <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    id="contact-lastName"
                    name="lastName"
                    type="text"
                    autoComplete="off"
                    placeholder="Last name"
                    value={enquiry.lastName || ""}
                    onChange={onChangeHandler}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#121020] border text-sm text-[#f4f1ff] placeholder-white/25 outline-none transition-all duration-200 ${error?.lastName
                      ? "border-red-500/80 ring-1 ring-red-500/20"
                      : "border-white/10 hover:border-white/20 focus:border-[#00f28f]/70 focus:ring-1 focus:ring-[#00f28f]/30"
                      }`}
                  />
                  {error?.lastName && (
                    <p className="text-red-400 text-xs mt-1">{error.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-2"
                >
                  <svg
                    className="w-4 h-4 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Phone</span>
                  <span className="text-[#ff4d4f]">*</span>
                </label>

                <div
                  className={`flex items-center rounded-xl bg-[#121020] border transition-all duration-200 px-3 py-1 ${error?.contact
                    ? "border-red-500/80 ring-1 ring-red-500/20"
                    : "border-white/10 hover:border-white/20 focus-within:border-[#00f28f]/70 focus-within:ring-1 focus-within:ring-[#00f28f]/30"
                    }`}
                >
                  <div className="flex items-center gap-1.5 pl-1 pr-1.5 select-none">
                    <span className="text-base leading-none">🇮🇳</span>
                    <svg
                      className="w-3 h-3 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <input
                    id="contact-phone"
                    name="contact"
                    type="tel"
                    autoComplete="off"
                    placeholder="+91 98765 43210"
                    value={enquiry.contact || ""}
                    onChange={onChangeHandler}
                    className="w-full pl-2.5 py-1.5 bg-transparent text-sm text-[#f4f1ff] placeholder-white/25 outline-none"
                  />
                </div>
                {error?.contact && (
                  <p className="text-red-400 text-xs mt-1">{error.contact}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-2"
                >
                  <svg
                    className="w-4 h-4 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email</span>
                  <span className="text-[#ff4d4f]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="name@example.com"
                  value={enquiry.email || ""}
                  onChange={onChangeHandler}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#121020] border text-sm text-[#f4f1ff] placeholder-white/25 outline-none transition-all duration-200 ${error?.email
                    ? "border-red-500/80 ring-1 ring-red-500/20"
                    : "border-white/10 hover:border-white/20 focus:border-[#00f28f]/70 focus:ring-1 focus:ring-[#00f28f]/30"
                    }`}
                />
                {error?.email && (
                  <p className="text-red-400 text-xs mt-1">{error.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-2"
                >
                  <svg
                    className="w-4 h-4 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <line x1="8" x2="16" y1="9" y2="9" />
                    <line x1="8" x2="14" y1="13" y2="13" />
                  </svg>
                  <span>Message</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  maxLength={500}
                  placeholder="Write your message..."
                  value={enquiry.message || ""}
                  onChange={onChangeHandler}
                  className="w-full px-4 py-2 rounded-xl bg-[#121020] border border-white/10 hover:border-white/20 focus:border-[#00f28f]/70 focus:ring-1 focus:ring-[#00f28f]/30 text-sm text-[#f4f1ff] placeholder-white/25 outline-none transition-all duration-200 resize-none min-h-[110px]"
                />
                <div className="text-right text-xs text-white/40 font-mono mt-0.5">
                  {(enquiry.message || "").length}/500
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={submitDetails}
                  disabled={bloading}
                  className="w-full py-3 sm:py-3.5 rounded-full text-sm font-bold tracking-wide text-white bg-gradient-to-r from-[#00f28f] via-[#00c8b3] to-[#2b66f6] shadow-[0_4px_25px_rgba(0,242,143,0.35)] hover:shadow-[0_6px_35px_rgba(0,200,179,0.55)] hover:brightness-105 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {bloading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      <span>Send Message</span>
                      <svg
                        className="w-4 h-4 ml-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </aside>
    </>
  );
};

export default Contactus;
