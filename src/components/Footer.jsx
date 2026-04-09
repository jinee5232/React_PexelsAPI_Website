import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <p>© 2024 Steven Deng. All rights reserved.</p>
        <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
          <img
            src="https://images.pexels.com/lib/api/pexels.png"
            alt="Pexels Logo"
            width="60"
          />
          <span>Photos from Pexels</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
