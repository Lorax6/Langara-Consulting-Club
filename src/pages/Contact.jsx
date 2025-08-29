import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className="section-title">Contact Us</h2>
      <div className='contact'>
        <form action="" className='contact-form'>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className='field' placeholder='Enter your email' required />
            </div>
            <div className="input-box">
                <label>Your message</label>
                <textarea name="" id="" className='field msg' placeholder='Enter your message' required></textarea>
            </div>
            <button type='submit' className='contact-sub'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
