import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineLike,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { RiAuctionLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const Hero = () => {
  const [showIcon1,setShowIcon1] = useState(false)
  const [showIcon2,setShowIcon2] = useState(false)
  return (
    <Wrapper>
      <section className="section section-center ">
        <div className="left  ">
          <h4>The first NFT marketplace</h4>
          <h4>for Youtube & TikTok creators 🔥</h4>
          <p>
            Buy sell & auction viral videos as NFTs from your favourite creators
          </p>
          <div className="hero-btns">
            <button className="hero-btn-1" onMouseOver={()=>setShowIcon1(true)} onMouseLeave={()=>setShowIcon1(false)}>
              Auction
              <span className={showIcon1 ? "" : "hero-btn-icon1"} style={{marginLeft:"8px"}}>
                <RiAuctionLine />
              </span>
            </button>
            <button className="hero-btn-2" onMouseOver={()=>setShowIcon2(true)} onMouseLeave={()=>setShowIcon2(false)}>
              Marketplace
              <span className={showIcon2 ? "" : "hero-btn-icon2"} style={{marginLeft:"8px"}}>
                <HiOutlineSpeakerphone />
              </span>
            </button>
          </div>
        </div>
        <div className="right ">
          <div className="container ">
            <img
              src="https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp"
              alt="nft"
            />

            <footer>
              <div className="top">
                <div>
                  <img
                    src="https://www.pinkvilla.com/imageresize/salman_khan__2.jpg?width=752&format=webp&t=pvorg"
                    alt="img1"
                  />
                  <img
                    src="https://www.pinkvilla.com/imageresize/salman_khan__2.jpg?width=752&format=webp&t=pvorg"
                    alt="img2"
                  />
                </div>
                <p>45.5k views</p>
              </div>
              <h6>Chivalry 2 funny moments - Sending Our</h6>
              <div className="end ">
                <div>
                  <h6>Highest bid</h6>
                  <h6 style={{ color: "#dd272d" }}>0.75 eth</h6>
                </div>
                <h6>#10/50</h6>
              </div>
              <div className="end ">
                <div>
                  <h6>Buy now</h6>
                  <h6 style={{ color: "#fb8d31" }}>@2.01 eth</h6>
                </div>
                <p>
                  <AiOutlineLike /> <span>25k</span>
                </p>
              </div>
            </footer>
          </div>
          <button className="btn-left">
            <AiOutlineArrowLeft />
          </button>
          <button className="btn-right">
            <AiOutlineArrowRight />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  height: 90vh;
  color: var(--clr-black);
  background-image: linear-gradient(142deg, #ee4d6c, #fbfbfb 9%);
  /* overflow-y: hidden; */
  /* margin-top: 5rem; */
  /* padding-top: 5rem; */
  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    
    
  }
  /* left  */
  .left {
    padding: 1rem 5rem;
    p {
      margin-top: 1.2rem;
      /* border: 1px solid black; */
      padding-right: 2rem;
    }

    .hero-btn-1 {
      padding: 0.5rem 1.5rem;
      margin-right: 1.2rem;
      background-color: #ffffff;
      border-color: #ee4d6c;
      color: grey;
      transition: var(--transition);
    
      &:hover {
        background-image: linear-gradient(
          45deg,
          var(--clr-grad-1) 10%,
          var(--clr-grad-2)
        );
        color: #ffffff;
      }
    
    }
    .hero-btn-2 {
      padding: 0.5rem 1.5rem;
      background-color: #ffffff;
      border-color: #ee4d6c;
      color: grey;
      transition: var(--transition);
    
      &:hover {
        background-image: linear-gradient(
          45deg,
          var(--clr-grad-1) 10%,
          var(--clr-grad-2)
        );
        color: #ffffff;
      }
      
    }
  }
  .hero-btn-icon1 {
        visibility: hidden;
        
      }
  .hero-btn-icon2 {
        visibility: hidden;
      }
  /* right  */
  .right {
    padding: 2rem 3rem;
    .container {
      border-radius: 20px;
      padding: 0.5rem;
      background-color: var(--clr-primary-9);
      /* --clr-grad-2 */
      background: linear-gradient(var(--clr-primary-9) 10%, #c57474);
      img {
        box-shadow: 0 0 5px 0px #ffffff;
        width: 20rem;
        border-radius: 20px;
        margin-bottom: 0.5rem;
      }
      footer {
        background-color: #ffffff;
        box-shadow: 0 0 5px 0px #ffffff;
        border-radius: 20px;
        padding: 1rem;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          img {
            height: 2rem;
            width: 2rem;
          }
          p {
            font-size: 0.7rem;
          }
        }

        h6 {
          font-size: 0.9rem;
        }

        .end {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          div {
            width: 50%;
            display: flex;
            justify-content: space-between;
            h6 {
              font-weight: 700;
              /* margin-right: 1rem; */
            }
          }
          h6 {
            font-size: 0.8rem;
          }
        }
      }
    }

    .btn-left {
      position: absolute;
      top: 51%;
      left: 54%;
      color: var(--clr-primary-5);
      padding: 0.3rem 1rem;
      font-size: 1.2rem;
      background-color: #ffffff;
      border-color: #ee4d6c;
      clip-path: polygon(0% 0, 70% 0, 100% 100%, 0% 100%);
    }
    .btn-right {
      position: absolute;
      top: 51%;
      left: 86%;
      color: var(--clr-primary-5);
      padding: 0.3rem 1rem;
      font-size: 1.2rem;
      background-color: #ffffff;
      border-color: #ee4d6c;
      clip-path: polygon(29% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;
