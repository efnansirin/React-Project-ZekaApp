import React from "react";

const Footer = () => (
  <>
  <footer className="page-footer font-small pt-4">
    <div className="footer-copyright text-center py-3">
      <div className="container-fluid">
        © {new Date().getFullYear()} Copyright:
        <a href="https://www.yigisoft.com"> yigisoft.com</a>
      </div>
    </div>
  </footer>
</>
);

export default Footer;