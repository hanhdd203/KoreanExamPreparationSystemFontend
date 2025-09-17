import React from "react";

const teamMembers = [
  {
    id: 1,
    img: "img/team-1.jpg",
    name: "Instructor Name",
    designation: "Designation",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    delay: "0.1s",
  },
  {
    id: 2,
    img: "img/team-2.jpg",
    name: "Instructor Name",
    designation: "Designation",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    delay: "0.3s",
  },
  {
    id: 3,
    img: "img/team-3.jpg",
    name: "Instructor Name",
    designation: "Designation",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    delay: "0.5s",
  },
  {
    id: 4,
    img: "img/team-4.jpg",
    name: "Instructor Name",
    designation: "Designation",
    facebook: "#",
    twitter: "#",
    instagram: "#",
    delay: "0.7s",
  },
];

const TeamComponent = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Instructors
          </h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={member.img} alt={member.name} />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href={member.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{member.name}</h5>
                  <small>{member.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
