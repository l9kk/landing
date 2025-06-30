import './MobileDownloadButton.css';

const MobileDownloadButton = () => {
  return (
    <a 
      href="https://apps.apple.com" 
      className="btn-download badge-mobile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
      </svg>
      Download App
    </a>
  );
};

export default MobileDownloadButton;
