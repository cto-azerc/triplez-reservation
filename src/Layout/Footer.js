import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
`;
function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
