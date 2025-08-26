import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";

export default function Service() {
  return (
    <>
      {/* <!-- Service Area --> */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle 
                smTitle="Our Expertise"
                title="Professional Services"
                description="We offer comprehensive tutoring solutions to help students navigate academic challenges and achieve sustainable success in their educational journey."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
            <SingleService
              cardNumberClass="number"
              cardNumber="1"
              icon="fa fa-child"
              title="Elementary & Middle School (K-8)"
              description="Comprehensive support for foundational learning in English, Math, Science, and Social Studies. We offer On-Level and AAC programs tailored to help younger students build strong academic foundations and develop essential study skills."
              btnURL="courses#k8"
              image="https://images.unsplash.com/photo-1604307743907-df8d5fe9f1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
            <SingleService
              cardNumberClass="number"
              cardNumber="2"
              icon="fa fa-university"
              title="High School & Advanced Courses"
              description="Experienced in Dual Credit, On-Level, AP, AAC, and OnRamps."
              btnURL="courses#highschool"
              image="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
            <SingleService
              cardNumberClass="number last"
              cardNumber="3"
              icon="fa fa-graduation-cap"
              title="Test Prep & College Counseling"
              description="Comprehensive preparation for STAAR exams, EOC tests, CBEs, SAT, ACT, and PSAT. Plus personalized college counseling including course planning, extracurricular guidance, and strategic college application support."
              btnURL="courses#testprep"
              image="https://images.unsplash.com/photo-1542959864-4b02e6607fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}
    </>
  );
}
