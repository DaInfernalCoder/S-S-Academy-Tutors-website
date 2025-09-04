"use client";

import { useState } from "react";
import HeaderBanner from "@/components/HeaderBanner";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

export default function CoursesClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const k8Courses = {
    title: "K-8 Courses",
    subtitle: "Elementary & Middle School",
    description: "Building strong foundations in core subjects for young learners",
    backgroundColor: "#f8fafc",
    textColor: "#000000",
    filterKey: "k8",
    subjects: [
      {
        name: "Math",
        icon: "fa fa-calculator",
        courses: ["K–2 Math", "3–5 Math", "6–8 Math"],
        description: "Comprehensive math curriculum from basic counting to pre-algebra"
      },
      {
        name: "Science",
        icon: "fa fa-flask",
        courses: ["K–2 Science", "3–5 Science", "6–8 Science"],
        description: "Hands-on science exploration covering life, earth, and physical sciences"
      },
      {
        name: "Social Studies",
        icon: "fa fa-globe",
        courses: ["K–2 Social Studies", "3–5 Social Studies", "6–8 Social Studies"],
        description: "Engaging history and geography lessons to understand our world"
      },
      {
        name: "English / Language Arts",
        icon: "fa fa-book",
        courses: ["K–2 English / Language Arts", "3–5 English / Language Arts", "6–8 English / Language Arts"],
        description: "Reading, writing, and communication skills development"
      }
    ]
  };

  const highSchoolCourses = {
    title: "High School Courses",
    subtitle: "Grades 9-12",
    description: "Advanced coursework preparing students for college and career success",
    backgroundColor: "#1e293b",
    textColor: "#ffffff",
    filterKey: "highschool",
    subjects: [
      {
        name: "Mathematics",
        icon: "fa fa-superscript",
        courses: [
          "Algebra 1", "Geometry", "Algebra 2", "Precalculus",
          "AP Precalculus", "AP Statistics", "AP Calculus AB",
          "AP Calculus BC", "OnRamps Algebra 2", "OnRamps Precalculus"
        ],
        description: "From foundational algebra to advanced calculus and statistics"
      },
      {
        name: "Science",
        icon: "fa fa-flask",
        courses: [
          "Biology", "Chemistry", "OnRamps Chemistry", "Physics 1 (Algebra-Based)",
          "AP Physics 1", "AP Physics C: Mechanics", "AP Physics C: Electricity & Magnetism",
          "AP Biology", "AP Environmental Science", "AP Chemistry"
        ],
        description: "Comprehensive science curriculum including AP and OnRamps courses"
      },
      {
        name: "English / Language Arts",
        icon: "fa fa-pencil",
        courses: [
          "English 1", "English 2", "AP English Language & Composition",
          "AP English Literature & Composition"
        ],
        description: "Advanced reading, writing, and critical thinking skills"
      },
      {
        name: "Social Studies",
        icon: "fa fa-university",
        courses: [
          "World Geography", "AP World History: Modern", "AP U.S. History",
          "AP U.S. Government & Politics", "AP Macroeconomics", "AP Microeconomics",
          "Sociology (OnRamps Sociology included)", "AP Psychology"
        ],
        description: "Comprehensive social studies including AP courses in history and government"
      },
      {
        name: "Computer Science & Technology",
        icon: "fa fa-code",
        courses: [
          "AP Computer Science Principles", "AP Computer Science A",
          "Computer Science 1/2/3"
        ],
        description: "Programming and computational thinking skills"
      }
    ]
  };

  const testPrepCourses = {
    title: "Test Prep, Contests, & College Prep",
    subtitle: "Specialized Programs",
    description: "Comprehensive preparation for standardized tests, academic competitions, and college applications",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    filterKey: "testprep",
    subjects: [
      {
        name: "Test Prep",
        icon: "fa fa-graduation-cap",
        courses: [
          "PSAT / NMSQT", "SAT (Math, Reading, Writing)", "ACT (Math, Science, English, Reading)",
          "AP Exam Prep (all listed AP courses)", "STAAR EOC (Biology, Algebra 1, English 1, English 2, U.S. History)"
        ],
        description: "Comprehensive test preparation for college admissions and state assessments"
      },
      {
        name: "Academic Contests",
        icon: "fa fa-trophy",
        courses: [
          "UIL Academics (Number Sense, Math, Science, Calculator, Computer Science etc.)",
          "TMSCA Math & Science", "AMC 8 / 10 / 12", "USAPhO / F=ma Physics Olympiad Prep",
          "Science Olympiad (select events, e.g. Scrambler, Physics-related)"
        ],
        description: "Competitive academic programs to excel in contests and olympiads"
      },
      {
        name: "College Prep",
        icon: "fa fa-lightbulb-o",
        courses: [
          "High School Course Selection & Academic Planning", "College Admissions Essay Coaching",
          "Resume & Extracurricular Packaging", "Study Skills & Academic Planning",
          "Time Management & Organization (Eisenhower Matrix, scheduling, etc.)",
          "Scholarship Applications Guidance", "Interview Prep (school leadership, college, internships)"
        ],
        description: "Complete college preparation including applications, essays, and life skills"
      }
    ]
  };

  const CourseSection = ({ sectionData, isReversed = false }) => {
    return (
      <section 
        id={sectionData.filterKey}
        className="course-section" 
        style={{ 
          backgroundColor: sectionData.backgroundColor
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 ${isReversed ? 'order-lg-2' : ''}`}>
              <div className="section-content">
                <div className="section-title">
                  <h6 style={{ 
                    color: sectionData.textColor
                  }}>{sectionData.subtitle}</h6>
                  <h2 style={{ 
                    color: sectionData.textColor
                  }} className="mb-4">{sectionData.title}</h2>
                  <div 
                    className="line-bot" 
                    style={{ 
                      backgroundColor: sectionData.textColor,
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  ></div>
                  <p style={{ 
                    color: sectionData.textColor
                  }} className="mb-4">{sectionData.description}</p>
                </div>
              </div>
            </div>
          <div className={`col-lg-6 ${isReversed ? 'order-lg-1' : ''}`}>
            <div className="course-subjects">
              <div className="row">
                {sectionData.subjects.map((subject, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="course-card">
                      <div className="course-header">
                        <div className="course-icon">
                          <i className={subject.icon}></i>
                        </div>
                        <h4>{subject.name}</h4>
                      </div>
                      <p className="course-description">{subject.description}</p>
                      <div className="course-list">
                        <h6>Available Courses:</h6>
                        <ul>
                          {subject.courses.map((course, courseIndex) => (
                            <li key={courseIndex}>{course}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="course-action">
                        <a href="/contact" className="btn btn-outline-primary btn-sm">
                          Book a Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };

  return (
    <>
      <HeaderBanner 
        title="Our Courses" 
        titleWidth="1000px"
        bannerType="courses"
        showOverlay={false}
      />

      {/* Course Overview Section */}
      <section className="course-overview-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Our Programs"
                title="Comprehensive Course Offerings"
                description="From foundational K-8 subjects to advanced high school coursework and specialized test preparation, we provide personalized tutoring to help every student succeed."
              />
            </div>
          </div>

          {/* Course Statistics */}
          <div className="row course-stats justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="stat-card">
                <div className="stat-progress"></div>
                <div className="stat-icon">
                  <i className="fa fa-book"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">50</h3>
                  <p>Course Offerings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="stat-card">
                <div className="stat-progress"></div>
                <div className="stat-icon">
                  <i className="fa fa-line-chart"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">12</h3>
                  <p>Grade Levels</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="stat-card">
                <div className="stat-progress"></div>
                <div className="stat-icon">
                  <i className="fa fa-star"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">25</h3>
                  <p>AP & Honors Courses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Filter */}
          <div className="course-filter-section">
            <div className="row">
              <div className="col-12">
                <div className="filter-buttons">
                  {[
                    { key: "all", label: "All Courses", icon: "fa-th-large" },
                    { key: "k8", label: "K-8 Courses", icon: "fa-graduation-cap" },
                    { key: "highschool", label: "High School", icon: "fa-university" },
                    { key: "testprep", label: "Test Prep", icon: "fa-pencil-square" }
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter.key)}
                    >
                      <i className={`fa ${filter.icon}`}></i>
                      <span>{filter.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K-8 Courses Section */}
      {(activeFilter === "all" || activeFilter === "k8") && (
        <CourseSection sectionData={k8Courses} />
      )}

      {/* High School Courses Section */}
      {(activeFilter === "all" || activeFilter === "highschool") && (
        <CourseSection sectionData={highSchoolCourses} isReversed={true} />
      )}

      {/* Test Prep & College Prep Section */}
      {(activeFilter === "all" || activeFilter === "testprep") && (
        <CourseSection sectionData={testPrepCourses} />
      )}

      {/* Call to Action Section */}
      <CallToAction 
        title="Ready to Get Started?"
        description="Contact us today to discuss your academic goals and find the perfect tutoring program for your needs."
        buttonText="Book Consultation"
      />
    </>
  );
}
