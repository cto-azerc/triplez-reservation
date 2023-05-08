import React from "react";
import { styled } from "styled-components";

const Hotel = styled.div`
  width: 100vw;
  height: 300px;
  margin-top: 4px;
  background-color: dodgerblue;
`;
function HotelUnit() {
  return <Hotel>Hotel Name</Hotel>;
}

export default HotelUnit;
