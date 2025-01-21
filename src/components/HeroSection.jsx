import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import hero from "../Images/hero.jpg";
import hero from "../Images/newframe.gif";
// import { Button } from "../styles/Button";
import { motion, useSpring } from "framer-motion";

const HeroSection = ({ myData }) => {
  // const { x } = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  //   config: { duration: 4000 },
  //   reset: true,
  //   loop: Infinity,
  // });

  return (
    <Wrapper>
      <div className="container-hero">
        <h1
          style={{
            fontFamily: "revert-layer",
            fontweight: "1000",
            fontSize: "50px",
          }}
        >
          {" "}
          Crew-Rental{" "}
        </h1>
        <div className="sub-container-hero">
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}

            
          >
            <p style={{ fontWeight: "500" }} className="intro-crew">
              Welcome &nbsp;
              <span style={{ fontWeight: "700" }}>
                {
                  JSON.parse(localStorage.getItem("user"))?.fullname.split(
                    " "
                  )[0]
                }
                &nbsp;!!
              </span>{" "}
              &nbsp; to Crew-Rental Store, where we make it easy and affordable
              to get the help you need for your projects! We offer a variety of
              services, including providing skilled labours, contractors, and
              engineers, all conveniently located in your local area.😁😁
            </p>
          </motion.div>

          <motion.div
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="hero-section-image"
          >
            <img src={hero} alt="hero-section-photo" className="img-style" />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  /* border: 1px solid red; */

  .container-hero {
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;

    justify-content: center;
    align-items: center;
  }

  .sub-container-hero {
    gap: 8rem;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }

  img {
    /* border: 1px solid red; */
    width: 600px;
    border-radius: 50px;

    /* width : 200px; */
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
  .intro-crew {
    border-radius: 30px;
    padding: 35px;
    background-color: #eef3f7;
    align-items: center;
    text-align: center;
    max-width: 500px;
    margin-top: 0;
    font-weight: bold;
    font-size: 1.8em;
  }

  .hero-section-image {
    width: 650px;
    height: 450px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  .hero-section-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
`;

export default HeroSection;
