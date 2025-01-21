import styled from "styled-components";
import Header from "./Header";
import Footer from "../Footer";
import contactgif from "../../Images/contactgif.gif"

const Contact = () => {
  const Wrapper = styled.section`
.container-main-contact{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:140px;
}
.contact-form {
    padding:20px;


.email-input-contactform{
  border : 2px solid red;
  width:"500px";
}

.contact-area{
    border-radius: 30px;
    padding: 20px;
    font-size: 20px;

}
color: white;
padding: 14px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 20px;
border-radius: 30px;
}
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

          
          }
        }
      }
    }
  `;


  const handleClick = () => {
    window.open("https://formsubmit.co/el/papobu");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <h2 className="common-heading">Contact page</h2>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27257.61673746354!2d75.458734!3d31.353402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b3c542e9bfa7c03!2sIK%20Gujral%20Punjab%20Technical%20University!5e0!3m2!1sen!2sin!4v1677095779925!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="container-main-contact">
          <div className="contact-form">

            <form
              action="https://formsubmit.co/el/papobu"
              method="POST"
              className="contact-inputs"
              onSubmit={() => window.open("https://formsubmit.co/el/papobu")}
            >
              <input
                type="text"
                placeholder="Email"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
              />

              {/* <input className="email-input-contactform"
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              /> */}

              <textarea
                className="contact-area"
                name="Message"
                cols="30"
                rows="5"
                required
                autoComplete="off"
                placeholder="Enter you message"
              ></textarea>

              <button style={{ fontSize: "20px", fontWeight: "600" }} type="submit">
                Send Message!!!
              </button>
            </form>
          </div>

          <div className="hero-section-image">

            <img
              src={contactgif}
              alt="hero-section-photo"
              className="img-style"
            />

          </div>


        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
