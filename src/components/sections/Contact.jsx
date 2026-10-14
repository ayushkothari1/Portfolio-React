import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCheck,
} from "react-icons/fi";
import { staggerContainer, staggerItem } from "../../utils/animations";
import Button from "../ui/Button";
import GradientText from "../ui/GradientText";

const SOCIAL = [
  { icon: FiGithub, href: "https://github.com/ayushkothari1", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/ayushko1/",
    label: "LinkedIn",
  },

  { icon: FiMail, href: "mailto:pahadiayush61@gmail.com", label: "Email" },
];

/** Animated form input field */
function FormField({
  label,
  id,
  type = "text",
  rows,
  value,
  onChange,
  required,
  placeholder,
}) {
  const Tag = rows ? "textarea" : "input";

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--color-text)]"
      >
        {label} {required && <span className="text-indigo-400">*</span>}
      </label>
      <Tag
        id={id}
        name={id}
        {...(!rows ? { type } : {})}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          w-full px-4 py-3 rounded-xl text-sm
          border border-subtle bg-white/5 dark:bg-white/3
          text-[var(--color-text)] placeholder-[var(--color-text-muted)]
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40
          transition-all duration-200
          resize-none
        "
        style={{ fontFamily: "inherit" }}
      />
    </div>
  );
}

/**
 * Contact — form + social links + availability status
 */
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\nReply to: ${form.email}`;
    window.location.href = `mailto:pahadiayush61@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="badge">Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent max-w-[120px]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl md:text-5xl leading-tight mb-4 text-[var(--color-text)]"
        >
          Let's <GradientText>Work Together</GradientText>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[var(--color-text-muted)] max-w-lg mb-12"
        >
          Send me a note by email. The form opens a draft in your email app for
          you to review and send.
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — form */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.form
              variants={staggerItem}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-subtle space-y-5"
            >
              <FormField
                id="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <FormField
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
              <FormField
                id="message"
                label="Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
              />

              {/* Submit button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                <>
                  <FiSend size={18} /> Open Email Draft
                </>
              </Button>

              {/* Status messages */}
              {status === "opened" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  aria-live="polite"
                  className="flex items-center gap-2 text-sm text-emerald-400 font-medium"
                >
                  <FiCheck size={15} /> Your email app should open with the
                  message ready to review.
                </motion.p>
              )}
            </motion.form>
          </motion.div>

          {/* Right — info */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Availability card */}
            <motion.div
              variants={staggerItem}
              className="glass rounded-2xl p-6 border border-subtle"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-semibold text-[var(--color-text)]">
                  Get in touch
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                For questions about a project or to get in touch, send me an
                email.
              </p>
            </motion.div>

            {/* Contact details */}
            <motion.div
              variants={staggerItem}
              className="glass rounded-2xl p-6 border border-subtle space-y-4"
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-2">
                Direct Contact
              </h3>
              <a
                href="mailto:pahadiayush61@gmail.com"
                className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-indigo-400 transition-colors duration-200"
              >
                <FiMail size={16} className="text-indigo-400 flex-shrink-0" />
                pahadiayush61@gmail.com
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={staggerItem}
              className="glass rounded-2xl p-6 border border-subtle"
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-4">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      border border-subtle text-sm text-[var(--color-text-muted)]
                      hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10
                      transition-all duration-200
                    "
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
