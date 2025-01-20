import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3e107cc9-bbe0-4d6a-a799-d429adc33b6c");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({ name: "", phone: "", message: "" }); // Reset state
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-col'>
        <h3>Send Us A Message <img src={message}></img></h3>
        <p>Feel free to reach out through contact form or find
          information below. Your feedback, questios, and comments are 
          important to us and we strive to provide exceptional service
          to our university community.</p>
        <ul>
          <li><img src={mail} alt="" />Contact@GreatStack.dev</li>
          <li><img src={phone} alt="" />+1 123-456-7890</li>
          <li><img src={location} alt="" />77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required onChange={handleInputChange} value={formData.name}/>
          <label>Your Number</label>
          <input type='tel' name='phone' placeholder='Enter your number' required onChange={handleInputChange} value={formData.phone}/>
          <label>Your Message</label>
          <textarea name='message' placeholder='Enter your message' rows={6} required onChange={handleInputChange} value={formData.message}></textarea>
          <button type='submit' className='btn dark-btn'>Send Message<img src={arrow}/></button>
        </form>
        <span className='span'>{result}</span>
      </div>
    </div>
  )
}

export default Contact
