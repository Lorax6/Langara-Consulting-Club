import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74a562b9-5b33-4e60-b2e2-e1770eb5bc40");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success"
    });
    }
  };


  return (
    <div>
      <h2 className="section-title">Contact Us</h2>
      <div className='contact'>
        <form onSubmit={onSubmit} className='contact-form'>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box">
                <label>Your message</label>
                <textarea name="message" id="" className='field msg' placeholder='Enter your message' required></textarea>
            </div>
            <button type='submit' className='contact-sub'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
