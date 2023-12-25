import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <h1>Contact Me ...</h1>

      <a href="mailto:wednesday@nevermoreacademy.edu" >
        <div><MdOutlineMarkEmailRead /> Email </div>
      <div>wednesday@nevermoreacademy.edu</div>
      
      </a>

      <a href="tel:+40 (571) 360-1234">
<div><MdOutlinePhoneAndroid /> Phone</div>
<div>+40 (571) 360-1234</div>
      </a>

      <div>
<div><MdOutlineLocationOn /> Location</div>
<div>Strada Zamorei 1, Bușteni 105500, Romania</div>
      </div>
      <iframe
  className="w-100  "
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10435.918653198158!2d8.988941064642868!3d47.69553019954191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a8afd597b43af%3A0x864acf973193bada!2sCampingplatz%20Horn!5e0!3m2!1str!2str!4v1654182512749!5m2!1str!2str"
  style={{ border: 0 ,width:"500px"}}
  allowFullScreen=""
  loading="lazy"
  height="700px"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  )
}

export default Contact