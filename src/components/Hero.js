import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section section-center ">
        <div className="left ">
          <h4>The first NFT marketplace</h4>
          <h4>for Youtube & TikTok creators 🔥</h4>
          <p>
            Buy sell & auction viral videos as NFTs from your favourite creators
          </p>
          <div className="hero-btns">
            <button>Auction</button>
            <button>Marketplace</button>
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
                <p>2 logo</p>
                <p>45.5k views</p>
              </div>
              <h6>Chivalry 2 funny moments - Sending Our</h6>
              <div className="end">
                <h6>Highest bid</h6>
                <h6>0.75 eth</h6>
                <h6>#10/50</h6>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  height: 90vh;
  background-image: linear-gradient(142deg, #ee4d6c, #fbfbfb 9%);
  color: var(--clr-black);

  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  /* left  */
  .left {
  }

  /* right  */
  .right {
    padding: 2rem 3rem;
    .container {
      border-radius: 20px;
      padding: 0.5rem;
      background-color: var(--clr-primary-9);
      /* --clr-grad-2 */
      background: linear-gradient(var(--clr-primary-9) 10%,#c57474);
      img {
        box-shadow: 0 0 5px 0px #ffffff;
        width: 20rem;
        border-radius: 20px;
        margin-bottom: 0.5rem;
      }
footer{
  background-color: #ffffff;
  box-shadow: 0 0 5px 0px #ffffff;
  border-radius: 20px;
  padding: 1rem;
}


    }
  }
`;
