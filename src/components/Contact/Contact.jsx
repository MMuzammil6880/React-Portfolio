import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_5pvz2eh","template_yu1mdyx", form.current, "Ve7EeDW9HgkFTZ2bJ")
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
        <div className="heading" id="contact">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
    <div className="contact-form" >
      {/* left side copy and paste from work section */}
      <div className='contact_options'>
          <article className='contact_option '>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4> Email </h4>
            <h5>muhammadmuzammil6880@gmail.com</h5>
            <a href="mailto:muhammadmuzammil6880@gmail.com" target='-blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4> Messenger </h4>
            <h5>Muhammad Muzammil</h5>
             <a href="https://m.me/muhammad.muzammil" target='-blank'>Send a message</a> 
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +92 3162530217</h5>
            <a href="https://api.whatsapp.com/send?phone+923162530217" target='-blank'>Send a message</a>
          </article>
        </div>
      {/* right side form */}
      <div className="c-right">
  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
