import React from "react";
import { styled } from "styled-components";

import HotelUnit from "../Molecule/HotelUnit";

const HotelList = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function HotelListBox() {
  return (
    <>
      <HotelList>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
        <HotelUnit></HotelUnit>
      </HotelList>
    </>
  );
}

export default HotelListBox;
