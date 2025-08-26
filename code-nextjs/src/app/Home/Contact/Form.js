export default function Form() {
  return (
    <div className="contact-form">
      <div className="google-form-container">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSc8_qUx6vSLhqu_FAo5dFNakoDozL-FjPfVDnjMpg8u9Y5xxQ/viewform?embedded=true"
          width="100%" 
          height="600" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Contact Form"
          className="google-form-iframe"
          style={{
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}