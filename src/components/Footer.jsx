import React from 'react'

const Footer = () => {
  return (
    <div className="footer text-center px-3 md:px-0">
      <p>Made with 💖 by <a href="https://github.com/orionos-prjkt">OrionOS</a> team.</p>
      <p className="font-bold">{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;