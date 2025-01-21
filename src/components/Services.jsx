import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container-services">
          {/* <div className="services-1"> */}
              <div className="icon-container" >
                <TbTruckDelivery className="icon" />
                <h3>Super Fast and Free Delivery</h3>
              </div>
              <div className="icon-container">
                  <MdSecurity className="icon" />
                  <h3>Non-contact Shipping</h3>
              </div>
              <div className="icon-container">
                <GiReceiveMoney className="icon" />
                <h3>Pocket-Friendly</h3>
              </div>
              <div className="icon-container">
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            {/* </div> */}
          </div>
         
       
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }
  .icon{
    
   
  }

  .icon-container{
    /* margin: auto; */
    display : flex;
    flex-direction: column;
    /* justify-items: center; */
    align-items: center; 
  
  }
  .icon-container h3{
    font-size: 1.5rem;
  }

  .container-services{
    padding: 2rem;
    border-radius:20px ;
    margin: auto;
    max-width: 90%;
    background-color: #eef3f7;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
    gap: 4rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    border : 2px solid red;
    display: flex;
    flex-direction: column;
    width: auto;
    height: 30rem;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default Services;
