import React from "react";

const coursesData = [
  {
    id: 1,
    img: "img/course-1.jpg",
    price: "$149.00",
    rating: 5,
    reviews: 123,
    title: "Web Design & Development Course for Beginners",
    instructor: "John Doe",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    id: 2,
    img: "img/course-2.jpg",
    price: "$149.00",
    rating: 5,
    reviews: 123,
    title: "Web Design & Development Course for Beginners",
    instructor: "John Doe",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    id: 3,
    img: "img/course-3.jpg",
    price: "$149.00",
    rating: 5,
    reviews: 123,
    title: "Web Design & Development Course for Beginners",
    instructor: "John Doe",
    duration: "1.49 Hrs",
    students: 30,
  },
];

const renderStars = (count) => {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <small key={i} className="fa fa-star text-primary"></small>
    );
  }
  return stars;
};

const CoursesComponent = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={course.img} alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">{course.price}</h3>
                  <div className="mb-3">
                    {renderStars(course.rating)}
                    <small>({course.reviews})</small>
                  </div>
                  <h5 className="mb-4">{course.title}</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-user-tie text-primary me-2"></i>
                    {course.instructor}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2"></i>
                    {course.duration}
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>
                    {course.students} Students
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesComponent;
