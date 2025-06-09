'use client'; // Mark as Client Component since we use hooks and event handlers

import { useState } from 'react';
import BackgroundWrapper from './BackgroundWrapper';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ text: '', color: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.email || !formData.subject || !formData.message) {
      setFormMessage({ text: 'Please fill out all required fields.', color: 'text-red-400' });
      return;
    }
    
    setFormMessage({ text: 'Sending your message...', color: 'text-blue-400' });

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormMessage({ text: 'Message sent successfully! We will get back to you soon.', color: 'text-green-400' });
      setFormData({
        firstName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    
    <div className="bg-[#000000] text-gray-300 h-screen flex flex-col gap-y-10 ">
         <div className="text-center mt-5">
          <h1 className="md:text-4xl sm:text-5xl  text-[#C8A97E ] tracking-wider font-['Playfair_Display']">Get in Touch</h1>
          <p className="mt-2 sm:mt-4   text-sm sm:text-base text-center text-[#C8A97E] font-['Lato'] w-[30%] mx-auto">
           Whether you're planning a private event, have questions about our menu, or just want to say hello, we'd love to hear from you 
           <br className="hidden sm:inline" />
          </p>
        </div>

   


   <div className="bg-[url('/assets/blackburnish.png')] bg-cover bg-center w-full  border-[#523D2C] border-b border-t  ">
        <div className="w-[60%] bg-[#000000] border border-[#523D2C] mx-auto px-5  md rounded-lg mt-15 mb-15 py-15">

         <div className="grid grid-cols-1 md:grid-cols-2 space-x-20 text-[#fcebd2] w-[95%] mx-auto">
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b border-[#523D2C] pb-2">Find Us</h3>
                
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>123 Barrel Lane<br />Old Town District<br />Brewville, NY 10001</p>
                </div>

                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p>
                    Monday - Thursday: 4pm - 12am<br />
                    Friday - Saturday: 12pm - 2am<br />
                    Sunday: 12pm - 10pm
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Contact</h4>
                  <p>📞 (555) 123-4567<br />✉️ info@rusticbarrel.com</p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fas fa-times"></i></a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <h3 className="text-xl font-semibold border-b border-[#4a3c2a] pb-2 mb-6">Send a Message</h3>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="bg-transparent border border-[#4a3c2a] px-4 py-2 rounded"/>
                    <input type="text" placeholder="Last Name" className="bg-transparent border border-[#4a3c2a] px-4 py-2 rounded"/>
                  </div>

                  <input type="email" placeholder="Email" className="w-full bg-transparent border border-[#4a3c2a] px-4 py-2 rounded"/>

                  <input type="text" placeholder="Subject" className="w-full bg-transparent border border-[#4a3c2a] px-4 py-2 rounded"/>

                  <textarea placeholder="How can we help you?" rows="4" className="w-full bg-transparent border border-[#4a3c2a] px-4 py-2 rounded"/>

                  <button type="submit" className="bg-[#d9b37c] text-[#1d120b] px-5 py-2 rounded hover:bg-[#c99d62]">
                    Send Message
                  </button>
                </form>
              </div>
        </div>
    
        
        {formMessage.text && (
          <div className={`mt-6 text-center text-sm ${formMessage.color}`}>
            {formMessage.text}
          </div>
        )}
      </div>
   
   
  </div>




    </div>
  );
};

export default ContactForm;