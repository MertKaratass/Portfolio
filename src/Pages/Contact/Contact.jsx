import { MdMarkEmailRead } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Me ...</h1>

      <div className="informations">
        <div className="email">
          <a href="mailto:karatasdgncn21@gmail.com">
            <div className="icon">
              <MdMarkEmailRead /> Email
            </div>
            <div>mertkaratas255@gmail.com</div>
          </a>
        </div>

        <a href="tel:0555 555 55 55">
          <div className="icon">
            <IoMdPhonePortrait /> Phone
          </div>
          <div className="phone">0555 555 55 55</div>
        </a>

        <div>
          <div className="icon">
            <IoLocationOutline /> Location
          </div>
          <a>Erzurum/Palandöken</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
