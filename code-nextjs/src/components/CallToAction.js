"use client";

import Link from "next/link";

export default function CallToAction({
  title = "Ready to Achieve Academic Success?",
  description = "If you're a student or parent looking to improve academic performance, S&S Academy Tutors would love to understand your learning goals and explore how we can help you achieve them.",
  buttonText = "Book a Consultation"
}) {
  return (
    <section className="call-action section-padding" style={{ 
      padding: "70px 0",
      backgroundImage: "url('/images/cta-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12 text-center">
            <div className="call-action-content">
              <h2 style={{ 
                color: "white", 
                fontSize: "36px", 
                fontWeight: "700",
                marginBottom: "20px",
                textShadow: "0 2px 5px rgba(0, 0, 0, 0.8)"
              }}>{title}</h2>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.95)", 
                fontSize: "18px", 
                lineHeight: "1.7",
                marginBottom: "30px",
                maxWidth: "800px",
                margin: "0 auto 30px",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)"
              }}>
                {description}
              </p>
              <div className="call-action-btn">
                <Link 
                  href="/#contact"
                  className="theme-btn"
                  style={{
                    display: "inline-block",
                    padding: "15px 35px",
                    backgroundColor: "white",
                    color: "#00265F",
                    borderRadius: "5px",
                    fontSize: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
