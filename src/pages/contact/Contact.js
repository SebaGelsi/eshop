import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_7xyhwen",
        form.current,
        "user_hKs2aRfLoozcqA28UpUyz"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contactanos</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Sujeto</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Mensaje</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn">Enviar mensaje</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Nuestra informacion de contacto</h3>
              <p>Complete el formulario o contáctenos a través de otros canales enumerados a continuación.</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+54 9 11 xxxx-xxxx</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@suport.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Buenos Aires, Argentina</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@LugarDelMate</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;