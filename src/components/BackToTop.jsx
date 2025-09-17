import React from "react";

const BackToTop = () => {
  // Hàm scroll lên đầu trang khi click
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
