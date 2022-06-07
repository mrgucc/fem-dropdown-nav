import styled from "styled-components";
import { DropdownIcon } from "../Images/Images.styled";
import { Black, MediumGray, White } from "../../lib/Colors";
import { useState } from "react";

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
`;

export const NavButtonStyle = styled.button`
  cursor: pointer;
  background-color: ${White};
  color: ${MediumGray};
  border: none;
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  gap: 10px;
  :hover {
    color: ${Black};
  }
  &.border {
    border: 1.5px solid ${MediumGray};
    :hover {
      border: 1.5px solid ${Black};
    }
  }
  &.active {
    color: ${Black};
    > img {
      transform: rotate(180deg);
    }
  }
`;

const DropdownSection = styled.div`
    width: 100%;
    padding-left: 20px;
    
`

export const MobileNavButton = ({ children, dropdown }) => {
  const [active, setActive] = useState(false);
  return (
    <ButtonContainer>
      <NavButtonStyle
        className={active && "active"}
        onClick={() => setActive(!active)}
      >
        {children}
        {dropdown && <DropdownIcon src="/images/icon-arrow-down.svg" />}
      </NavButtonStyle>
      {active && dropdown && <DropdownSection>{dropdown}</DropdownSection>}
      
    </ButtonContainer>
  );
};
