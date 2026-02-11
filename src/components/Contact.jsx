import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms - Free form submission service
      // To set up: Go to https://web3forms.com and get your access key
      // Replace YOUR_ACCESS_KEY_HERE with your actual key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Get free key at web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto if Web3Forms fails
        const subject = encodeURIComponent(
          `Portfolio Contact: Message from ${formData.name}`,
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        );
        window.location.href = `mailto:singhps588@gmail.com?subject=${subject}&body=${body}`;
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback to mailto
      const subject = encodeURIComponent(
        `Portfolio Contact: Message from ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:singhps588@gmail.com?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singhps588@gmail.com",
      link: "mailto:singhps588@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/PankajSingh34",
      link: "https://github.com/PankajSingh34",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pankaj-singh-2a968b212",
      link: "https://www.linkedin.com/in/pankaj-singh-2a968b212/",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 theme-transition"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Get In <span style={{ color: "var(--accent)" }}>Touch</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                Let's Connect
              </h3>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                I'm always interested in hearing about new opportunities and
                exciting projects. Feel free to reach out if you'd like to
                collaborate or just want to say hello!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className="flex items-center gap-4 p-4 border-2 transition-all duration-200 theme-transition"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundColor: "var(--bg-card)",
                      boxShadow: "3px 3px 0px var(--shadow-brutal)",
                    }}
                  >
                    <info.icon size={24} style={{ color: "var(--accent)" }} />
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-brutal p-8 theme-transition"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border-2 focus:outline-none theme-transition"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border-2 focus:outline-none theme-transition"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border-2 focus:outline-none resize-none theme-transition"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                ></textarea>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div
                    className="p-3 border text-sm"
                    style={{
                      backgroundColor: "var(--green-accent-dim)",
                      borderColor: "var(--green-accent)",
                      color: "var(--green-accent)",
                    }}
                  >
                    ✅ Message sent successfully!
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-600/20 border border-red-500/30 text-red-400 text-sm">
                    ❌ Error sending message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-brutal btn-brutal-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
