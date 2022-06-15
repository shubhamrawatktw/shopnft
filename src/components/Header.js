import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAuctionLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsBarChartLine, BsClock } from "react-icons/bs";
const Header = () => {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="logo">NFTBOOK.IO</div>
        <form className="search-bar">
          <AiOutlineSearch className="search-icon"/>
          <input type="text" placeholder="Search here" />
        </form>
        <ul className="links">
          <li> <span><AiOutlineSearch/></span><span>Explore</span></li>
          <li><span> <RiAuctionLine/></span><span>Auction</span></li>
          <li><span> <HiOutlineSpeakerphone/></span><span>Marketplace</span></li>
          <li><span> <BsBarChartLine/></span><span>Stats</span></li>
          <li><span> <BsClock/></span><span>Activity</span></li>
        </ul>
        <div className="btn"> <h6>Connect wallet</h6></div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid black; */
    /* padding: 0.8rem 0rem; */
    box-shadow: var(--light-shadow);
    
     

    width: 100vw;
    height: 10vh;
    /* z-index: 30; */

.logo{
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--clr-primary-5);
   cursor: pointer;

}
}

.search-bar {
   position: relative;
   display: flex;
   align-items: center;
   border:none;
   outline:transparent;
  

.search-icon{
    position: absolute;
    font-size: 1.3rem;
    left: 0.3rem;
}

input{
    padding: 0.4rem 2rem;
    font-size: 0.8rem;
    border: 1px solid var(--clr-grey-8);
   outline: none;
   border-radius: var(--radius);
   cursor: pointer;
   transition: var(--transition);

}

&:hover{
box-shadow: 0 1px 3px  var(--clr-primary-9);
transition: var(--transition);

input{
    border: 1px solid white;
    border-radius: var(--radius);
}
 
.search-icon{
    color: var(--clr-primary-5);
}

}

} 
    
    .links {
        display: flex;
        /* border: 1px solid black; */
        font-size: 1rem;
        font-weight: 400;
       li{
        /* margin: 0 1rem; */
        margin-right: 1rem;
        /* border: 1px solid red; */
      letter-spacing: var(--spacing);

        padding-left: 1.8rem;
        padding-right: 0.5rem;
        text-align: center;
        position: relative;
        cursor: pointer;

        &:hover{
            color: var(--clr-primary-5);
        }

     svg{
        color: var(--clr-primary-5);
         margin-right: 0.3rem;
        font-size: 1.3rem;
        font-weight: 500;
        position: absolute;
        left: 0;
        top : 0.2rem;

     }
      
       
       }
        
    }
`;
