import React from 'react';

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter-signup">
      <p>Sign up for our newsletter to get early access to events</p>
      <form name="submit-to-google-sheet">
        <input type="email" name="email" id="email" className="newsletter-input" placeholder="name@gmail.com" required />
        <button type="submit" className="subscribe">Subscribe</button>
      </form>
      <span id="msg"></span>
    </section>
  );
};

export default Newsletter;