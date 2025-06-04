import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Kontak Saya</h2>
      <form
        action="https://formsubmit.co/pejayra@satyaterrabhinneka.ac.id"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Nama"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder="Pesan"
          rows="5"
          required
        ></textarea>

        {/* Optional: menonaktifkan CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Optional: redirect setelah sukses */}
        <input type="hidden" name="_next" value="https://jayongport.vercel.app/thanks" />

        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Contact;
