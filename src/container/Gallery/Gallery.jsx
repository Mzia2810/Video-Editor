import React, { useEffect } from "react";
import { images } from "../../constants";
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination } from "swiper";
import { FreeMode } from "swiper";
import "swiper/swiper-bundle.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      className="container col-md-10 py-4 mt-2 justify-content-center"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h1 className="aboutheading mx-auto ">Our Team</h1>
      <hr className="col-md-1 mx-auto mb-5" />
      <Swiper
        freeMode={true}
        grabCursor={true}
        navigation
        modules={[FreeMode]}
        slidesPerView={3}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person3} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person2} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person3} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
            <div className="profile-card_image">
              <img src={images.person} alt="User" class="mb-4 shadow" />
            </div>
            <div className="profile-card_details">
              <h3 className="mb-0">Hamza Iqbal</h3>
              <p className="text-muted">CEO, Co-founder</p>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              </p>
            </div>
            <div className="profile-card_social text-center p-4">
              <a href="#!" className="d-inline-block">
                <img src={images.linkdin} alt="Linkedin" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.twitter} alt="Twitter" />
              </a>
              <a href="#!" className="d-inline-block">
                <img src={images.fb} alt="Facebook" />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
