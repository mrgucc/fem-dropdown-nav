import styled from "styled-components";
import { MediumGray } from "../../lib/Colors";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

const LabelImg = styled.img`
  width: 14px;
  height: 14px;
`;
const MenuElement = styled.div`
  display: flex;
  gap: 10px;
  width: auto;
  color: ${MediumGray};
  cursor: pointer;
  white-space: nowrap;
`;

export const FeaturesMenu = () => {
  return (
    <MenuContainer>
      <MenuElement>
        <LabelImg src="/images/icon-todo.svg" /> Todo List
      </MenuElement>
      <MenuElement>
        <LabelImg src="/images/icon-calendar.svg" /> Calendar
      </MenuElement>
      <MenuElement>
        <LabelImg src="/images/icon-reminders.svg" /> Reminders
      </MenuElement>
      <MenuElement>
        <LabelImg src="/images/icon-planning.svg" /> Planning
      </MenuElement>
    </MenuContainer>
  );
};

export const CompanyMenu = () => {
  return (
    <>
      <MenuContainer>
        <MenuElement>History</MenuElement>
        <MenuElement>Our Team</MenuElement>
        <MenuElement>Blog</MenuElement>
      </MenuContainer>
    </>
  );
};

