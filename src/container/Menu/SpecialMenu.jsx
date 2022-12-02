import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const SpecialMenu = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    console.log("hidden");
  };

  return (
    <div className="app__specialMenu flex__center section__padding mt-5">
      <div className="app__specialMenu-title mt-5">
        <h1 className="aboutheading  mx-auto" id="menu">
          Our Services
        </h1>
        <p className="des-paragraph">We are Providing the following Services</p>
        <hr className="col-md-12 mx-auto " />
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">
            Mobile Development Service
          </p>
          <div className="app__specialMenu_menu_items ">
            {/* {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tag={wine.tags}
              />
            ))} */}
            <ul>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Cross-Platform App{" "}
                <span className="price">-------------$56</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Native app <span className="price">-------------$59</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Hybrid app <span className="price">-------------$44</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Progressive Web App{" "}
                <span className="price">-------------$31</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Android App <span className="price">-----$500-1000</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                iOS App <span className="price">-------------$26</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                UX/UI design <span className="price">---------------</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Quality Assurance & Maintenance{" "}
                <span className="price">---------</span>
              </li>
            </ul>
          </div>
        </div>

        {/*  */}

        <div className="app__specialMenu-menu_img my-auto">
          <img
            src={images.menu}
            alt="menu__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading01">
            Web Development Service
          </p>
          <div className="app__specialMenu_menu_items">
            <ul>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Turkey Web <span className="price">-------------$20</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Single Page Application{" "}
                <span className="price">-------------$16</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                CMS web <span className="price">-------------$10</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Cloud-based Web development{" "}
                <span className="price">-------------</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Front-end development <span className="price">--------</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Back-end development{" "}
                <span className="price">-------------$26</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Web-development & API-design{" "}
                <span className="price">---------------</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Quality Assurance & Maintenance{" "}
                <span className="price">---------------</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_devops flex__center02">
          <p className="app__specialMenu_menu_heading02">DevOps Service</p>
          <div className="app__specialMenu_menu_items col-md-12">
            <ul>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Cross-Platform App{" "}
                <span className="price">-------------$56</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Native app <span className="price">-------------$59</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Hybrid app<span className="price">-------------$44</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Progressive Web App{" "}
                <span className="price">-------------$31</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                iOS App<span className="price">----------$26</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Android App{" "}
                <span className="price">-------------$500-1000</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                UX/UI design <span className="price">---------------</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
                Quality Assurance & Maintenance{" "}
                <span className="price">------</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="app__specialMenu-menu_img my-auto ">
          <img
            src={images.menu2}
            alt="menu__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>

        <div className="app__specialMenu-menu_game flex__center0">
          <p className="app__specialMenu_menu_heading03">
            Game Development Service
          </p>
          <div className="app__specialMenu_menu_items ">
            <ul>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Unity 3D, 2D Development{" "}
                <span className="price">-------------$56</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Unreal Engine Development
                <span className="price">-------------$59</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Metaverse Development
                <span className="price">-------------$44</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Mobile Games Development{" "}
                <span className="price">-------------$31</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                AR & VR Games Development
                <span className="price">----------$26</span>
              </li>
              <li
                onClick={showModal}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Gamification Development Service{" "}
                <span className="price">----$500-1000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        show={isOpen}
        onHide={hideModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SpecialMenu;
