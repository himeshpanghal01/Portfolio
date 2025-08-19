import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import MessageToaster from './Toaster'
import emailjs from '@emailjs/browser';





const Contact = () => {

  const form = useRef();
  const [result, setResult] = React.useState("")
  const [toastType, setToastType] = React.useState("")

  // email js code  

  const sendEmail = (e) => {
    e.preventDefault();
    const template_id = 'template_zevcbab';
    const public_key = '3w0JJWDF2_soY07sQ';
    const service_id = 'service_he5knxj';

    // Show sending toast and keep its id
    const sendingToastId = toast.loading("Sending...");
    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then(() => {
        toast.dismiss(sendingToastId); // Remove sending toast
        setResult(" Your message was send To Himesh !");
        setToastType("success");
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.dismiss(sendingToastId); // Remove sending toast
        setResult("Something went wrong. Please try again.");
        setToastType("error");
        toast.error("Something went wrong. Please try again.");
        console.error(error);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "himeshpanghal86@gmail.com",
      link: "mailto:himeshpanghal86@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9499468253",
      link: "tel:+919499468253",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sonipat, Haryana",
      link: "https://maps.app.goo.gl/L2786n5YgbqFXrKx6",
    },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/himeshpanghal01", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/himesh-panghal-165b982b2", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <MessageToaster type={toastType} />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">Let’s Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have an Question or want to chat ? Drop a message or connect via socials!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <div className="space-y-10">

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center gap-4 p-5 bg-slate-800/40 hover:bg-slate-800/70 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40">
                    <info.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{info.title}</h4>
                    <p className="text-slate-300 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Follow Me</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-transform transform hover:scale-110 group"
                  >
                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-slate-800/40 p-10 rounded-2xl shadow-xl backdrop-blur-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            <form ref={form} className="space-y-6" onSubmit={sendEmail}>


              {/* name section  */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2"> Name </label>
                <input id="name" name="name" type="text" required className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your name" />
              </div>


              {/* email section   */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2"> Email </label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="your.email@example.com" />
              </div>


              {/* subject section  */}
              <div >
                <label htmlFor="subject" className="font-semibold  text-slate-300">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Subject" name='subject' required />
              </div>


              {/* message section   */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">  Message </label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" placeholder="Enter your message !" />
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105" >
                <Send className="w-4 h-4" />
                Send Message
              </button>
              {result && <p className="mt-4 text-center text-base text-green-600">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
