import React, { useState, useEffect } from "react";
import {
  MenuButtons,
  NavWrapper,
  UserButtons,
} from "../../Layout/Containers.styled";
import { DropdownIcon, HeightLogoImg } from "../Images/Images.styled";
import { NavButton, NavButtonStyle } from "../Buttons/NavButton";
import { CompanyMenu, FeaturesMenu } from "../DropdownCard/DropdownCard";
import NavModal from "./NavModal";

const Icon = () => {
  return <DropdownIcon src="/images/icon-arrow-down.svg" />;
};

export default function NavbarDesktop() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const updateViewport = () => {
    setIsDesktop(window.innerWidth > 850);
 
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    if (window.innerWidth < 850){
      setIsDesktop(false);
    }
    return () => window.removeEventListener("resize", updateViewport);
  },[]);



  const MenuButtonsSection = () => {
    return (
      <MenuButtons>
        <HeightLogoImg src="/images/logo.svg" />
        {!isDesktop ? <></> : (
          <>
            <NavButton dropdown={<FeaturesMenu />}>Features </NavButton>
            <NavButton left dropdown={<CompanyMenu />}>
              Company
            </NavButton>
            <NavButton>Careers</NavButton>
            <NavButton>About</NavButton>
          </>
        )}
      </MenuButtons>
    );
  };

  const UserButtonsSection = () => {
    return (
      <UserButtons>
        {isDesktop ? (
          <>
            <NavButton>Login</NavButton>
            <NavButtonStyle className="border" width="100px">
              Register
            </NavButtonStyle>
          </>
        ) : (
          <>
            <img style={{cursor: 'pointer'}} onClick={() => setModalOpen(true)} src="/images/icon-menu.svg" />
          </>
        )}
      </UserButtons>
    );
  };

  return (
    <>
      <NavModal open={modalOpen} setOpen={setModalOpen} />
      <NavWrapper>
        <div>
          <MenuButtonsSection />
          <UserButtonsSection />
        </div>
      </NavWrapper>
    </>
  );
}
