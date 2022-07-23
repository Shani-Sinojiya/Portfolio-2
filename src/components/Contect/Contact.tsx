import axios from "axios";
import { FormEvent, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subj, setSubj] = useState("");
  const [Msg, setMsg] = useState("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      let headersList = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        name: Name,
        email: Email,
        subj: Subj,
        msg: Msg,
      });

      let reqOptions = {
        url: "https://portfolio-shanisinojiya.000webhostapp.com/send_mail_portfolio",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      const res = await axios.request(reqOptions);

      if (res.status === 200) {
        window.alert("Send Message Successfull");
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="contact section container" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form className="contact_form" onSubmit={submitForm}>
          <div className="contact_form_group">
            <div className="contact_form_div">
              <input
                type="text"
                className="contact_form_input"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact_form_div">
              <input
                type="email"
                className="contact_form_input"
                placeholder="Insert your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contact_form_div">
            <input
              type="text"
              className="contact_form_input"
              placeholder="Insert your subject"
              onChange={(e) => setSubj(e.target.value)}
              required
            />
          </div>
          <div className="contact_form_div contact_form_area">
            <textarea
              cols={30}
              rows={10}
              className="contact_form_input"
              placeholder="Write your message"
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
