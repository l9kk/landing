import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container foot-links">
        <a 
          href="https://app.termly.io/document/privacy-policy/6bbf7848-09a8-45c9-aa42-52948ea4bb9c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a 
          href="https://app.termly.io/document/terms-of-service/cfe3517e-a1f5-430c-935e-6279bbb934cb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </a>
        <a href="mailto:support@skinai.co">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
