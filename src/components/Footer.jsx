import React from "react";
import "../css/footer.css";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>

      
      <footer>
              <div className="container-footer grid grid-four-column">
                <div className="footer-section footer-about">
                  <h3 className="footerh3">Crew-Rental</h3>
                  <p className = 'test1'>Completing your dream Projects!. </p>
                </div>
                <div className="footer-section footer-subscribe">
                  <h3 className="footerh3">Subscribe to get important updates</h3>
                  <form className="footerform" action="#">
                    <input type="email" name="email" placeholder="YOUR E-MAIL" />

                    <input type="submit" value="subscribe" />
                  </form>
                </div>
            <div className="footer-section footer-social">
              <h3 className="footerh3">Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                    <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-section footer-contact">
              <h3 className="footerh3">Call Us</h3>
              <h3 className="footerh3">+91 9511506049</h3>
            </div>
          </div>

			<div className="footer-right">

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>


			    </div>

			        <hr />
              <div className="container-footer grid grid-two-column ">
                <p className = 'test1'>
                  @{new Date().getFullYear()} Crew-Rentals. All Rights Reserved
                </p>
                <div>
                  <p className = 'test1'>PRIVACY POLICY</p>
                  <p className = 'test1'>TERMS & CONDITIONS</p>
                </div>
              </div>
		</footer>
    
    </>
  );
};




export default Footer;
