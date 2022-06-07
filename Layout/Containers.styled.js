import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 80%;
  max-width: 1145px;
  margin: 0 auto;
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  margin-bottom: 50px;
`;

export const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;

  > div {
    display: flex;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 20px 0;
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const MenuButtons = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;
  align-items: center;
`;

export const UserButtons = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 850px){
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 108px 0px;
  padding-right: 30px;
  @media only screen and (max-width: 850px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
   gap: 20px;
   margin: 50px 0px;
  }
`;

export const LogoImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  align-items: center;
  gap: 40px;
  transition: all 100ms ease-in-out;
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px 10px;
    margin: auto;
  }
`;
