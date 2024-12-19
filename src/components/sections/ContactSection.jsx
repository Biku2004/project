import React from 'react';
import { CONTACT_INFO } from '../../utils/constants';

const ContactSection = () => {
  return (
    <div className="mt-16 border-t border-slate-800 pt-8">
      <div className="text-center text-slate-400">
        <h3 className="text-lg font-medium mb-2">Contact Information</h3>
        <p>Email: {CONTACT_INFO.email}</p>
        <p>Phone: {CONTACT_INFO.phone}</p>
        <div className="mt-2">
          {CONTACT_INFO.socials.map((social, index) => (
            <React.Fragment key={social.name}>
              {index > 0 && ' • '}
              <a 
                href={social.href} 
                className="text-secondary hover:text-accent"
              >
                {social.name}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;