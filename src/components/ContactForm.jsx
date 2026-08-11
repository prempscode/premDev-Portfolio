import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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
    <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="font-mono text-sm tracking-widest text-accent mb-2">
        [ CONTACT ]
      </h2>
      <p className="text-muted mb-8">
        Send a message — it'll show up as a GitHub Issue and I'll get back to
        you.
      </p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-border-light rounded p-6 font-mono text-sm text-white"
        >
          Message sent.{" "}
          <a
            href={issueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            View the issue on GitHub →
          </a>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
        </form>
      )}
    </section>
  );
};

export default ContactForm;
