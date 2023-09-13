import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    height: 100vh;
    padding-block: 5rem;
    width: min(1200px, 100% - 2rem);
    margin-inline: auto;  
    background: var(--crl-neutral-900) url("./images/pod/image-host.jpg");
    line-height: 1; 
}
`;

const Wrapper = styled.div`
  h1 {
    display: flex;
    gap: 0.5 rem;
    color: var(--crl-neutral-100);
  }
`;

function Pod() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>
          <img src="./images/pod/logo.svg" alt="" />
          <span>pod</span>
        </h1>
      </Wrapper>
    </>
  );
}

export default Pod;
