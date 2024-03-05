import React from "react";

interface ContactProps {
  email: string;
  phone: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone }) => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image"></div>
        <ul className="contact-info">
          {email && <li className="contact-email">{email}</li>}
          {phone && <li className="contact-phone">{phone}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
