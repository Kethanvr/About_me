import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, MapPin, Terminal, Lightbulb } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// Custom Toast Component
const CustomToast = ({ message }) => (
  <div className="flex items-center bg-[rgb(38,38,38)] text-gray-200 px-4 py-3 rounded-lg border border-[#999999] shadow-lg">
    <span className="whitespace-pre-line">{message}</span>
  </div>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast(
          <CustomToast
            message={
              <>
                <Terminal className="inline-block mr-2" size={18} />
                Heads up!
                <br />
                Your inquiry has been sent.
              </>
            }
          />,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            className: "bg-transparent shadow-none p-0 m-0",
            bodyClassName: "p-0 m-0",
          }
        );

        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        toast(
          <CustomToast
            message={
              <>
                <Terminal className="inline-block mr-2" size={18} />
                Something went wrong!
                <br />
                Please try again.
              </>
            }
          />,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            className: "bg-transparent shadow-none p-0 m-0",
            bodyClassName: "p-0 m-0",
          }
        );
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="w-[100vw] px-6 my-5 md:my-30 md:py-8 md:px-15 select-none">
      {/* File Header */}
      <div className="w-full border-b border-[#474747] flex items-center mb-10 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-sm font-extralight">
            contact.jsx
          </span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">
              ×
            </span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col space-y-7 md:ml-25">
        {/* Comment Block */}
        <div className="text-sm text-[#4f4f4f]">
          <span>/**</span>
          <br />
          <span className="ml-2.5">* Contact Form Component</span>
          <br />
          <span className="ml-2.5">* @returns &#123;JSX.Element&#125;</span>
          <br />
          <span className="ml-2.5">*/</span>
        </div>

        {/* Form & Info Section (Responsive Flexbox) */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {/* Contact Form */}
          <div className="w-full md:w-[65%] bg-[rgb(38,38,38)] p-6 md:p-8 rounded-lg shadow-lg border border-[#474747]">
            <form className="space-y-3 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    const name ={" "}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="'Your Name'"
                    className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    const email ={" "}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="'your@email.com'"
                    className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">
                  const subject ={" "}
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="'Project Inquiry'"
                  className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  const message ={" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="'Your message here...'"
                  rows="6"
                  className="w-full bg-[rgb(23,23,23)] border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[rgb(9,105,230)] text-[#dddddd] py-2 px-6 rounded-lg hover:bg-[rgb(5,91,205)] transition"
                >
                  Send Message →
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs grid grid-cols-2 gap-3 md:w-[70%] md:grid-cols-1">
              {[
                {
                  icon: <Mail size={18} className="text-blue-400" />,
                  title: "Email",
                  value: "kethan.ise24@cmrit.ac.in",
                  link: "mailto:kethanvr@gmail.com",
                  id: "email-contact",
                },
                {
                  icon: <MapPin size={18} className="text-green-400" />,
                  title: "Location",
                  value: "Bangalore, Karnataka, India",
                  link: "https://maps.app.goo.gl/ASfWKxUyNsi7q6J58",
                  id: "location-contact",
                },
                {
                  icon: <Terminal size={18} className="text-purple-400" />,
                  title: "X (Twitter)",
                  value: "x.com/VrKethan",
                  link: "https://x.com/VrKethan",
                  id: "twitter-contact",
                },
                {
                  icon: <Lightbulb size={18} className="text-yellow-400" />,
                  title: "Fun Fact",
                  value: "I hack ethically & build awesome web apps 🚀",
                  link: "https://github.com/Kethanvr",
                  id: "funfact-contact",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-[#262626] border border-[#474747] rounded-lg shadow-lg px-6 py-6 flex flex-col items-center text-center"
                >
                  <div className="text-sm flex items-center gap-2">
                    {item.icon} {item.title}
                  </div>
                  <a
                    href={item.link}
                    className="text-xs md:text-sm text-gray-400 hover:underline"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
