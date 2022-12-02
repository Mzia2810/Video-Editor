import React, { useEffect } from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <h1 className="aboutheading mt-5 mx-auto " id="process">
        Process
      </h1>
      <p className="des-paragraph col-md-1 mx-auto">Process we follow</p>
      <hr className="col-md-1 mx-auto " />
      <section className="our-blog p-0 m-0 bg-silver">
        <div className="container work-process  pb-5 pt-5">
          {/* <!-- ============ step 1 =========== --> */}
          <div className="row">
            <div className="col-md-5">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">01</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right"></div>
            </div>
          </div>
          {/* <!-- ============ step 2 =========== --> */}
          <div className="row">
            <div className="col-md-5">
              <div className="process-point-left"></div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 mt-3">
              <div
                className="process-box process-right"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">02</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <div
                className="process-box process-left"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">03</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right"></div>
            </div>
          </div>
          {/* <!-- ============ step 4 =========== --> */}
          <div className="row">
            <div className="col-md-5">
              <div className="process-point-left"></div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div
                className="process-box process-right mt-4"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="row">
                  <div className="col-md-5 ">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">04</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          {/* <!-- ============ step 3 =========== --> */}
          <div className="row">
            <div className="col-md-5">
              <div
                className="process-box process-left mt-3"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step">
                      <p className="m-0 p-0">Step</p>
                      <h2 className="m-0 p-0">05</h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>What is Lorem Ipsum?</h5>
                    <p>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="process-point-right process-last"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

{
  /* <div classNameName="processContent col-md-11 mx-auto"> */
}
{
  /* <div classNameName="processImgContainer border py-5 col-md-6">
  <div classNameName="imgSection">
    <img src={images.process} alt="menu__img" />{" "}
  </div>
</div> */
}

{
  /*  */
}
{
  /* <div classNameName="processTexContainer border py-5 col-md-6">
  <div
    classNameName="accordion accordion-flush col-md-8 mx-auto"
    id="accordionFlushExample"
  >
    <div classNameName="accordion-item">
      <h2 classNameName="accordion-header" id="flush-headingOne">
        <button
          classNameName="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <span classNameName="numbering">1</span> Step 1
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        classNameName="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div classNameName="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> classNameName. This is
          the first item's accordion body.
        </div>
      </div>
    </div>
    <div classNameName="accordion-item">
      <h2 classNameName="accordion-header" id="flush-headingTwo">
        <button
          classNameName="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          <span classNameName="numbering">2</span> Accordion Item #2
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        classNameName="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
      >
        <div classNameName="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> classNameName. This is
          the second item's accordion body. Let's imagine this being
          filled with some actual content.
        </div>
      </div>
    </div>
    <div classNameName="accordion-item">
      <h2 classNameName="accordion-header" id="flush-headingThree">
        <button
          classNameName="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          <span classNameName="numbering">3</span> Accordion Item #3
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        classNameName="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div classNameName="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> classNameName. This is
          the third item's accordion body. Nothing more exciting happening
          here in terms of content, but just filling up the space to make
          it look, at least at first glance, a bit more representative of
          how this would look in a real-world application.
        </div>
      </div>
    </div>
  </div>
</div> */
}
{
  /* </div> */
}
