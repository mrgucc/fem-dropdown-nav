import styled from "styled-components";
import React from "react";
import { Black } from "../../lib/Colors";
import { NavWrapper, UserButtons } from "../../Layout/Containers.styled";
import { CompanyMenu, FeaturesMenu } from "../DropdownCard/DropdownCard";
import { MobileNavButton } from "../Buttons/MobileNavButton";
import { NavButton, NavButtonStyle } from "../Buttons/NavButton";

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Black};
  opacity: 0.7;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const ModalSection = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 1;
  background-color: white;
  z-index: 3;
  height: 100vh;
  width: 70%;
`;

const ExitBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export default function NavModal({ open, setOpen, children }) {
  return (
    <>
      {open && (
        <>
          <ModalBackground />
          <ModalSection>
            <ExitBar>
              <img
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(false)}
                src="/images/icon-close-menu.svg"
              />
            </ExitBar>
            {children}
            <MobileNavButton dropdown={<FeaturesMenu />}>
              Features
            </MobileNavButton>
            <MobileNavButton dropdown={<CompanyMenu />}>
              Company
            </MobileNavButton>
            <MobileNavButton>Careers</MobileNavButton>
            <MobileNavButton>About</MobileNavButton>
            <UserButtons>
              <NavButton>Login</NavButton>
              <NavButtonStyle width="195px" className="border">
                Register
              </NavButtonStyle>
            </UserButtons>
          </ModalSection>
        </>
      )}
    </>
  );
}
