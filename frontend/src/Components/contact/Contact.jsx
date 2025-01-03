import s from "./contact.module.css";

import logo from "../../assets/let's talk.jpg";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";
import { Call, EmailOutlined, LocationOnOutlined } from "@mui/icons-material";
import emailjs from '@emailjs/browser';



const Contact = () => {
  
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",

  //   // Add more fields as needed
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can perform validation here
  //   // Send the formData to your backend for processing
  //   console.log("Form Data:", formData);
  //   setFormData({
  //     name: "", 
  //     email: "",
  //     message: "",
  //   });
  //   toast("Your message send to Fisseha Ali", {
  //     duration: 3000,
  //     position: "top-right",
  //     style: {
        
  //       color:"#0c0c1d",
      
  //       backgroundColor:"gold",
  //     }
  //   })
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
   
                                    
    emailjs
      .sendForm('service_qphlexw', 'template_4411swt', form.current, {
        publicKey: 'x8hFdqu5ITzymHoXy',
      })
      .then(
        () => {
          toast("Your message send to Fisseha Ali", {
      duration: 3000,
      position: "top-right",
      style: {
        
        color:"#0c0c1d",
      
        backgroundColor:"gold",
      }
    })
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={s.contact}>
      <Toaster/>
      <div className={s.contactBox}>
        <div className={s.contactMe}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, ease: "linear" }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            Get in touch
          </motion.h1>
        </div>
        <div className={s.contactSide}>
          <div className={s.contactLeftSide}>
            <div className={s.contactImg}>
              <img src={logo} alt="Let's talk" />
            </div>
            <div className={s.contactText}>
              <p>
                Hey there! 👋 I'm currently open to taking on new React
                projects. Whether you need help with development, enhancements,
                I'm ready to dive in. Feel free to reach out anytime to discuss
                your project needs!
              </p>
            </div>
            <div>
              <div className={s.contactIcons}>
                {/* <EmailIcon /> */}
                <EmailOutlined/>
                <p>alifisseha@yahoo.com</p>
              </div>
              <div className={s.contactIcons}>
                {/* <CallIcon /> */}
                 <Call/>
                <p>+813-995-1523</p>
              </div>
              <div className={s.contactIcons}>
                {/* <LocationOnIcon />
                 */}
                <LocationOnOutlined/>
                Tampa Florida
              </div>
            </div>
          </div>
          <div className={s.contactRightSide}>
            <form ref={form} onSubmit={sendEmail} method="post">
              <div className="form-group">
                <label>Name</label>

                <input
                  type="text"
                 
                  className={s.inp}
                  name="user_name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label >Email</label>
                <br />
                <input
                  type="email"
                  
                  className={s.inp}
                  name="user_email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <br />
                <textarea
                  
                  className={s.message}
                  name="message"
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className={s.buttonSubmit}>
                <motion.button
                  //   initial={{scale:0.9}}
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{scale:0.9}}
                  type="submit" className={s.submitButton} value="Send">
                  Submit
                </motion.button>
                 
              </div>  
      
            </form>  
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
