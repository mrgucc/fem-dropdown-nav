import { useState } from "react";
import styled from "styled-components";
import { Black, MediumGray, White } from "../../lib/Colors";
import { DropdownIcon } from "../Images/Images.styled";

const ButtonContainer = styled.div`
  position: relative;
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

export const DropdownCard = styled.div`
  padding: 24px;
  border-radius: 10px;
  width: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: absolute;
  /* right: 0; */
  opacity: 0;
  /* transition: 300ms all ease-in-out; */
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
  &.active {
    transition: 300ms all ease-in-out;
    opacity: 1;
  }
`;

export const MobileDropdownCard = styled.div`
  padding: 24px;
  border-radius: 10px;
  width: auto;
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

export const NavButton = ({ children, dropdown, left, right }) => {
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
      {dropdown && (
        <DropdownCard
          className={(left ? "left " : "right ") + (active && "active")}
        >
          {dropdown}
        </DropdownCard>
      )}
    </ButtonContainer>
  );
};
