import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
     <div className="">
      <h4>Useful links</h4>
     </div>
     <div className="">
      <h4>Legal</h4>
     </div>
     <div className="">
<h4>Help</h4>
     </div>
     <div className="">
      <h4>Our Newsletter</h4> 
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
background-color: var(--clr-grey-10);

`