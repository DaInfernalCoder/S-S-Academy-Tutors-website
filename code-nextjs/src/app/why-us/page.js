import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import HeaderBanner from "@/components/HeaderBanner";



export default function WhyUs() {
  // Modern, aesthetically pleasing styles
  const sectionWrapperStyle = {
    width: "100%",
    overflow: "hidden",
    padding: "70px 0",
    backgroundColor: "#fafafa",
  };

  const whiteBackgroundStyle = {
    backgroundColor: "white",
    padding: "70px 0",
    overflow: "hidden",
  };

  const featureCardStyle = {
    textAlign: "center", 
    marginBottom: "40px",
    padding: "40px 30px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
    border: "1px solid #f0f0f0",
  };

  const iconContainerStyle = {
    width: "90px", 
    height: "90px", 
    borderRadius: "50%", 
    background: "linear-gradient(135deg, #00265F, #0047AB)", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    margin: "0 auto 30px",
    boxShadow: "0 10px 25px rgba(0, 38, 95, 0.2)"
  };

  const featureTitleStyle = {
    fontSize: "22px", 
    fontWeight: "600", 
    marginBottom: "20px",
    color: "#333"
  };

  const featureTextStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#666",
    marginTop: "15px"
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderBanner 
        title="Why Choose S&S Academy Tutors"
        titleWidth="1000px"
        bannerType="about"
        showOverlay={false}
      />



      {/* Services Overview Section */}
      <section style={sectionWrapperStyle}>
        <div className="container">
          <SectionTitle 
            smTitle="Our Expertise"
            title="Professional Tutoring Services"
            description="We offer comprehensive tutoring solutions to help students navigate academic challenges and achieve sustainable success in their educational journey."
          />
          
          <div className="row" style={{ marginTop: "50px" }}>
            {/* Elementary & Middle School */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-child" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Elementary & Middle School (K-8)</h3>
                <p style={featureTextStyle}>
                  Comprehensive support for foundational learning in English, Math, Science, and Social Studies. 
                  We offer On-Level and AAC programs tailored to help younger students build strong academic foundations 
                  and develop essential study skills.
                </p>
              </div>
            </div>
            
            {/* High School & Advanced Courses */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-university" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>High School & Advanced Courses</h3>
                <p style={featureTextStyle}>
                  Expert instruction in high school subjects including English 1-2, Sciences (Biology, Chemistry, Physics), 
                  and Mathematics (Algebra 1, Geometry, Algebra 2, Pre-Calculus). Plus comprehensive AP courses and 
                  OnRamps programs for college-bound students.
                </p>
              </div>
            </div>
            
            {/* Test Prep & College Counseling */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-graduation-cap" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Test Prep & College Counseling</h3>
                <p style={featureTextStyle}>
                  Comprehensive preparation for STAAR exams, EOC tests, CBEs, SAT, ACT, and PSAT. 
                  Plus personalized college counseling including course planning, extracurricular guidance, 
                  and strategic college application support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={whiteBackgroundStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Our Approach"
                title="Why Choose S&S Academy Tutors"
                description="We deliver exceptional educational value through our personalized approach, expert instruction, and proven track record of student success"
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: "50px" }}>
            {/* Individualized Learning */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-lightbulb-o" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Individualized Learning</h3>
                <p style={featureTextStyle}>
                  Every student learns differently. We create customized learning plans that adapt to each 
                  student&apos;s unique learning style, pace, and academic goals to maximize their potential 
                  and build lasting confidence.
                </p>
              </div>
            </div>
            
            {/* Expert Instructors */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-graduation-cap" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Expert Instructors</h3>
                <p style={featureTextStyle}>
                  Our qualified tutors bring deep subject expertise and proven teaching methodologies. 
                  From elementary basics to advanced AP courses, we ensure students receive the highest 
                  quality instruction across all academic levels.
                </p>
              </div>
            </div>
            
            {/* Comprehensive Support */}
            <div className="col-lg-4 col-md-4 col-12">
              <div style={featureCardStyle} className="feature-card">
                <div style={iconContainerStyle}>
                  <i className="fa fa-users" style={{ fontSize: "36px", color: "#fff" }}></i>
                </div>
                <h3 style={featureTitleStyle}>Comprehensive Support</h3>
                <p style={featureTextStyle}>
                  Beyond tutoring, we provide complete academic support including test preparation, 
                  study skills development, college counseling, and ongoing progress monitoring to ensure 
                  long-term educational success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={sectionWrapperStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Student & Parent Success"
                title="What Our Students & Parents Say"
                description="Discover how our personalized tutoring has transformed academic journeys and built lasting confidence in learning"
              />
            </div>
          </div>
          
          <div className="row" style={{ marginTop: "50px" }}>
            {/* First Testimonial */}
            <div className="col-lg-6 col-md-6 col-12" style={{ marginBottom: "30px" }}>
              <div style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
                position: "relative",
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0"
              }}>
                <div style={{
                  fontSize: "60px",
                  color: "#00265F",
                  opacity: "0.1",
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  fontFamily: "Georgia, serif"
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: "1",
                  paddingLeft: "15px",
                  paddingTop: "10px"
                }}>
                  My daughter&apos;s grades in Algebra went from a C to an A in just one semester. The tutors not only explained the concepts clearly but also gave her the confidence she was missing in math. I can&apos;t thank them enough!
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#00265F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}>
                    SM
                  </div>
                  <div>
                    <h4 style={{
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Sarah M.
                    </h4>
                    <p style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "#666"
                    }}>
                      Parent
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="col-lg-6 col-md-6 col-12" style={{ marginBottom: "30px" }}>
              <div style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
                position: "relative",
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0"
              }}>
                <div style={{
                  fontSize: "60px",
                  color: "#00265F",
                  opacity: "0.1",
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  fontFamily: "Georgia, serif"
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: "1",
                  paddingLeft: "15px",
                  paddingTop: "10px"
                }}>
                  As a student preparing for the SAT, I was overwhelmed. The personalized practice and strategies I learned here helped me raise my score by 180 points. Now I feel fully ready for college applications!
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#00265F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}>
                    JL
                  </div>
                  <div>
                    <h4 style={{
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Jason L.
                    </h4>
                    <p style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "#666"
                    }}>
                      High School Junior
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className="col-lg-6 col-md-6 col-12" style={{ marginBottom: "30px" }}>
              <div style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
                position: "relative",
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0"
              }}>
                <div style={{
                  fontSize: "60px",
                  color: "#00265F",
                  opacity: "0.1",
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  fontFamily: "Georgia, serif"
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: "1",
                  paddingLeft: "15px",
                  paddingTop: "10px"
                }}>
                  What I love most is how patient and approachable the tutors are. They never make you feel bad for not understanding something right away. Learning here feels motivating and stress-free.
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#00265F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}>
                    PK
                  </div>
                  <div>
                    <h4 style={{
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Priya K.
                    </h4>
                    <p style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "#666"
                    }}>
                      10th Grade
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Testimonial */}
            <div className="col-lg-6 col-md-6 col-12" style={{ marginBottom: "30px" }}>
              <div style={{
                padding: "30px",
                borderRadius: "16px",
                backgroundColor: "white",
                position: "relative",
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0"
              }}>
                <div style={{
                  fontSize: "60px",
                  color: "#00265F",
                  opacity: "0.1",
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  fontFamily: "Georgia, serif"
                }}>
                  &quot;
                </div>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: "1",
                  paddingLeft: "15px",
                  paddingTop: "10px"
                }}>
                  We tried a few other tutoring services before, but none compared to this one. The tutors here genuinely care about their students&apos; progress, and it shows in the results. Highly recommend to any parent!
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#00265F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}>
                    MT
                  </div>
                  <div>
                    <h4 style={{
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333"
                    }}>
                      Mark T.
                    </h4>
                    <p style={{
                      margin: "0",
                      fontSize: "13px",
                      color: "#666"
                    }}>
                      Parent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
