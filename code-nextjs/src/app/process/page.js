"use client";

import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";
import HeaderBanner from "@/components/HeaderBanner";

export default function Process() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <HeaderBanner 
        title="Our Tutoring Process" 
        titleWidth="1000px"
        bannerType="process"
        showOverlay={false}
      />
      
      {/* Section Title */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="How We Work"
                title="Our 5-Step Tutoring Process"
                description="We follow a proven methodology to ensure every student receives personalized academic support that leads to measurable success and sustained academic growth."
              />
            </div>
          </div>

          {/* Process Steps in Grid Layout */}
          <div className="row">
            {/* Step 1: Consultation */}
            <div className="col-lg-6 mb-5">
              <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
                <div style={{ 
                  fontSize: '120px', 
                  fontWeight: '800', 
                  lineHeight: '1', 
                  opacity: '0.8',
                  marginRight: '25px',
                  color: '#E67E22'
                }}>
                  01
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700', color: '#26313c' }}>
                    <i className="fa fa-comments" style={{ marginRight: '10px', color: '#E67E22' }}></i>
                    Consultation
                  </h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#333' }}>
                    We start with a comprehensive consultation to understand your student&apos;s academic goals, 
                    learning style, current challenges, and areas that need improvement. This helps us create 
                    a foundation for successful tutoring.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Identify learning goals and challenges</span>
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Understand preferred learning style</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Discuss scheduling and preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: Assessment */}
            <div className="col-lg-6 mb-5">
              <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
                <div style={{ 
                  fontSize: '120px', 
                  fontWeight: '800', 
                  lineHeight: '1', 
                  opacity: '0.8',
                  marginRight: '25px',
                  color: '#E67E22'
                }}>
                  02
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700', color: '#26313c' }}>
                    <i className="fa fa-search" style={{ marginRight: '10px', color: '#E67E22' }}></i>
                    Assessment
                  </h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#333' }}>
                    Our expert tutors conduct a thorough academic assessment to identify specific knowledge gaps, 
                    strengths, and learning patterns. This diagnostic evaluation ensures targeted and effective tutoring.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Diagnostic testing and evaluation</span>
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Identify knowledge gaps and strengths</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Create detailed learning profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: Match */}
            <div className="col-lg-6 mb-5">
              <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
                <div style={{ 
                  fontSize: '120px', 
                  fontWeight: '800', 
                  lineHeight: '1', 
                  opacity: '0.8',
                  marginRight: '25px',
                  color: '#E67E22'
                }}>
                  03
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700', color: '#26313c' }}>
                    <i className="fa fa-handshake-o" style={{ marginRight: '10px', color: '#E67E22' }}></i>
                    Match
                  </h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#333' }}>
                    Based on the assessment results and consultation insights, we carefully match your student 
                    with the ideal tutor who specializes in their subject areas and connects with their learning style.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Select qualified subject-matter expert</span>
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Match personality and teaching style</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Arrange introductory meeting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4: Sessions */}
            <div className="col-lg-6 mb-5">
              <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
                <div style={{ 
                  fontSize: '120px', 
                  fontWeight: '800', 
                  lineHeight: '1', 
                  opacity: '0.8',
                  marginRight: '25px',
                  color: '#E67E22'
                }}>
                  04
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700', color: '#26313c' }}>
                    <i className="fa fa-graduation-cap" style={{ marginRight: '10px', color: '#E67E22' }}></i>
                    Sessions
                  </h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#333' }}>
                    Regular one-on-one or small group tutoring sessions begin, featuring personalized lesson plans, 
                    interactive learning activities, and targeted practice to address specific academic needs and goals.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Customized lesson plans and materials</span>
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Interactive teaching methods</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Regular homework and practice support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5: Progress */}
            <div className="col-lg-6 mb-5">
              <div style={{ display: 'flex', height: '100%', alignItems: 'flex-start' }}>
                <div style={{ 
                  fontSize: '120px', 
                  fontWeight: '800', 
                  lineHeight: '1', 
                  opacity: '0.8',
                  marginRight: '25px',
                  color: '#E67E22'
                }}>
                  05
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700', color: '#26313c' }}>
                    <i className="fa fa-line-chart" style={{ marginRight: '10px', color: '#E67E22' }}></i>
                    Progress
                  </h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#333' }}>
                    We continuously monitor and track your student&apos;s academic progress through regular assessments, 
                    detailed progress reports, and ongoing communication with families to ensure success and growth.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: '0', marginTop: '15px' }}>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Regular progress assessments</span>
                    </li>
                    <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Detailed progress reports to families</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#E67E22', 
                        borderRadius: '50%', 
                        marginRight: '12px' 
                      }}></span>
                      <span style={{ color: '#333', fontSize: '14px' }}>Ongoing plan adjustments as needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
