import React from "react";
import { styled } from "styled-components";

import HotelListBox from "../Components/HotelListBox";

const HomeContainer = styled.div`
  width: 100vw;
`;
const Title = styled.div`
  font-size: 20px;
  color: gray;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>RESERVATION</Title>
      <HotelListBox></HotelListBox>
    </HomeContainer>
  );
}

export default Home;
