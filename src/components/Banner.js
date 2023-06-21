import React from 'react';
import BannerImage from '../images/hero-img.webp';
import data from '../json/counterdata';


export default function Banner() {
  // const bannerimage = {
  //   image: BannerImage
  // }
  const {counter} = data;
  return (
  <>
    {/* // <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-between">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
          <p data-aos="fade-up" data-aos-delay="100">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

          <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
            <input type="text" className="form-control" placeholder="ZIP code or CitY" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>

          <div className="row gy-4">
          {counter.map((count, b) => (
            <div key={b} className="col-lg-3 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span className="purecounter">{count.counter}</span>
                <p>{count.client}</p>
              </div>
            </div>
            ))}
            {/* <!-- End Stats Item --> */}

          </div>
        </div>

        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img src={BannerImage} className="img-fluid mb-3 mb-lg-0" alt="" />
        </div>

      </div>
    </div>
  </section>
  {/* <!-- End Hero Section --> */}
  </>  
  )
}
