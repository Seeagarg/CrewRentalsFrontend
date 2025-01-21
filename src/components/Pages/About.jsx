import React from "react";
import Footer from "../Footer";
import Header from "./Header";
import "../../css/aboutpage.css";
import aboutgif from "../../Images/gif (8).gif";
import problemsgif from "../../Images/problemsgif.gif";
import challengesgif from "../../Images/challengesgif.gif";

import { motion, useSpring } from "framer-motion";
const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <h1>About Crew-Rental</h1>
        <div className="about-gif">
          <motion.div

            
            className="about-page-container-about"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <h2>What is Construction Crew-Rentals?</h2>
            <p>
              Construction Crew-Rentals is an online platform that connects
              contractors, workers, and rental shop owners with customers who
              need help with their projects. Our platform solves the common
              challenges that customers face when looking for assistance with
              their construction or DIY projects. We reduce the communication
              gap between the parties involved so that they can connect with
              their targeted audience - the customers. This saves our customers
              time and effort in finding the perfect worker, contractor, or
              product for their project.
            </p>
          </motion.div>
          <motion.div 
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
           className="hero-section-image-about-page">
            <img
              src={aboutgif}
              alt="hero-section-photo"
              className="img-style"
            />
          </motion.div>
        </div>

        <div className="about-gif">
          <div className="hero-section-image-about-page-problems">
            <img
              src={problemsgif}
              alt="hero-section-photo"
              className="img-style"
            />
          </div>

          <div className="about-page-container-problems">
            <h2>The Problem Construction Crew-Rentals Solves</h2>
            <p>
              Our platform solves the following common challenges that customers
              face when looking for assistance with their construction or DIY
              projects:
            </p>
            <ul>
              <li>
                Communication gap between contractors, workers (labourers), and
                rental shop owners
              </li>
              <li>
                The need to search for different rental shops and compare
                prices, which can be time-consuming and frustrating
              </li>
              <li>
                Difficulty finding all the products they need in one place
              </li>
              <li>Unemployment of skilled laborers</li>
            </ul>
            <p>
              We address these challenges by providing a platform that offers a
              wide range of products and services, including:
            </p>
            <ul>
              <li>
                Construction equipment like JCBs, trucks, rollers, and more
              </li>
              <li>Smaller tools like screwdrivers and related items</li>
              <li>
                Rental options both on a single product basis and as a group
              </li>
              <li>
                Job opportunities to workers quickly by spreading their profiles
                in their local areas
              </li>
              <li>
                Artificial intelligence chatbot, powered by OpenAI API, that
                provides construction-related advice
              </li>
            </ul>
            <p>
              Our platform ensures that all the products available for rent are
              of high quality and well-maintained. This gives customers peace of
              mind, knowing that the products they rent will perform effectively
              and efficiently, thus reducing the risk of project delays or
              disruptions.
            </p>
          </div>
        </div>
        <div className="about-gif">
          <div className="about-page-container-challenges">
            <h2>Challenges We Ran Into</h2>
            <p>
              Despite our efforts to provide a convenient and affordable
              solution for customers, we faced some challenges in developing our
              platform. Here are some of the challenges we encountered and how
              we overcame them:
            </p>
            <ol>
              <li>
                <strong>Challenge 1:</strong> How to reach and register laborers
                on our site?
              </li>
              <p>
                <strong>Solution:</strong> To address this challenge, we sent
                bulk messages to laborers in specific areas or localities,
                inviting them to register on our platform. We also made it
                easier for them by providing the option to register at nearby
                cyber cafes.
              </p>

              <li>
                <strong>Challenge 2:</strong> How to verify their identity?
              </li>
              <p>
                <strong>Solution:</strong> To ensure that all registered
                laborers are genuine, we require them to provide their Aadhar{" "}
              </p>

              <li>
                <strong>Challenge 3:</strong> How to ensure that the laborers
                are skilled and experienced?
              </li>
              <p>
                <strong>Solution:</strong> To ensure that all registered
                laborers are genuine, we require them to provide their Aadhar{" "}
              </p>

              <li>
                <strong>Challenge 4:</strong> AI tool accuracy is low !
              </li>
              <p>
                <strong>Solution:</strong> We addressed this challenge by
                inputting thousands of use cases related to construction into
                our AI chatbot. This helped to improve the accuracy of our AI
                tool, allowing it to provide more accurate recommendations and
                advice to customers.{" "}
              </p>
            </ol>
          </div>

          <div className="hero-section-image-about-page-challenges">
            <img
              src={challengesgif}
              alt="hero-section-photo"
              className="img-style"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
