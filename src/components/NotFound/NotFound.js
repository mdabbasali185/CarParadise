import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="container mt-5">
      <div>
        <p className="mb-2 fs-1 bg-danger text-center text-white fst-italic fw-bold">Error 404</p>
        <h1 className="mb-4 fw-bold  ">
          Oops! The page you're looking for isn't here.
        </h1>
        <p className="mb-5">
          You might have the wrong address, or the page may have moved.
        </p>

      </div>
      <div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
            alt="notFound"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
