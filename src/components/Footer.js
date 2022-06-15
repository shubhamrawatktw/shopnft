import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
     <div className="">
      <h5>Useful links</h5>
      <div className="f-1">
        <div className="">
         <h6>Explore</h6>
         <h6>Auction</h6>
         <h6>Stats</h6>
        </div>
        <div className="">
         <h6>Marketplace</h6>
         <h6>Real-Time</h6>
        </div>
      </div>
     </div>
     <div className="f-2">
      <h5>Legal</h5>
      <div className="">
        <h6>Terms & Conditions</h6>
        <h6>Privacy Policy</h6>
      </div>
     </div>
     <div className="">
<h5>Help</h5>
<div className="">
  <h6>Support</h6>
  <h6>Contact</h6>
</div>
     </div>
     <div className="">
      <h5>Our Newsletter</h5> 
      <div className="f-4">
        <input type="text" placeholder='Email' />
        <button>Send</button>
      </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
background-color: var(--clr-grey-10);
padding: 2rem 0;
display: flex;
justify-content: space-evenly;
/* align-items: center; */
h6{
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.f-1{
  display: flex;
  width: 150px;
  justify-content: space-between;

}

.f-4{
  input{
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
    border: 1px solid var(--clr-grey-8);
   outline: none;
   border-radius: var(--radius);
   background-image: linear-gradient(
          45deg,
          var(--clr-grad-1) 30%,
          var(--clr-grad-2)
        );
   cursor: pointer;
   color: white;
   transition: var(--transition);
   &::placeholder{
    color: white;
   }
  }

  button{
    padding: 0.3rem 0.5rem;
    margin-left: 1rem;
   outline: none;
border-color: var(--clr-primary-5);
background-color: white;
  }
}


`