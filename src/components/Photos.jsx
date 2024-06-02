import photo1 from "../assets/slider/1.jpg";
import photo2 from "../assets/slider/2.jpg";
import photo3 from "../assets/slider/3.jpg";
import photo4 from "../assets/slider/4.jpg";
import photo5 from "../assets/slider/5.jpg";

function Photos() {
  return (
    <section id="carouselSection">
      <div className="container mt-5">
        <div className="row justify-content-center text-center my-5">
          <h3>One of Kind Hobbies</h3>
        </div>
        <div className="row">
          <div className="col-lg-7 mb-3">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={photo1}
                    className="d-block w-100"
                    alt="Rose Blackpink"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={photo2}
                    className="d-block w-100"
                    alt="Shuhua Gidle"
                  />
                </div>
                <div className="carousel-item">
                  <img src={photo3} className="d-block w-100" alt="ITZY" />
                </div>
                <div className="carousel-item">
                  <img
                    src={photo4}
                    className="d-block w-100"
                    alt="Ryujin ITZY"
                  />
                </div>
                <div className="carousel-item">
                  <img src={photo5} className="d-block w-100" alt="TWICE" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <h3 className="text-center text-md-start">Another side of me</h3>
            <p className="lead text-justify side-text">
              One of my hobbies is Korean Pop. I really like several groups
              including Twice, Blackpink, ITZY, and many others. Here is a
              collection of photos of my favourite groups. This collection is
              original. I hope to attend their concerts in the future.
              Therefore, I am striving to learn programming well to earn a
              better income and have a better career so that one of my hobbies
              can come true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photos;
