import React from "react";
import styled from "styled-components";

const NaviContainer = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
`;

function Navigation() {
  return <NaviContainer>Navigation</NaviContainer>;
}

export default Navigation;
