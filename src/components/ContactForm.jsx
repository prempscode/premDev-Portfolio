import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [issueUrl, setIssueUrl] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setIssueUrl(data.url);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-4"
        >
          // SECTION_09
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" hover-effect text-4xl md:text-5xl font-black text-white mb-12 "
        >
          CONTACT.
        </motion.h2>

        {/* Content */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted mb-8"
          >
            Send a message — I'll get back to you.
          </motion.p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border-light rounded p-6 font-mono text-sm text-white"
            >
              Message sent.{" "}
              <a
                href={issueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                View your Comment →
              </a>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-transparent border border-border-light rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-accent"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email (optional)"
                className="w-full bg-transparent border border-border-light rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-accent"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={5}
                className="w-full bg-transparent border border-border-light rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-accent resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-mono text-xs tracking-wider text-white border border-border-light rounded px-6 py-3 hover:border-accent hover:text-accent transition-all disabled:opacity-50"
              >
                {status === "loading" ? "[ SENDING... ]" : "[ SEND MESSAGE ]"}
              </button>

              {status === "error" && (
                <p className="text-red-400 font-mono text-xs">
                  Something went wrong — try again, or email me directly.
                </p>
              )}
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
