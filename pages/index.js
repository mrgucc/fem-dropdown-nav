import { useEffect, useState } from 'react';
import { StandardButton } from '../components/Buttons/StandardButton';
import { HeroImg, LogoImg } from '../components/Images/Images.styled';
import { LayoutGrid, LogoImgGrid, ParagraphContainer, SectionWrapper } from '../Layout/Containers.styled';
import { MediumGray } from '../lib/Colors';
import { BodyM, ButtonText, Heading } from '../lib/Typography';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  const updateViewport = () => {
    setIsDesktop(window.innerWidth > 850);
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  });

  const ParagraphSection = () => {
    return (
      <ParagraphContainer>
        <Heading>Make {isDesktop && <br />} remote work</Heading>
        <BodyM color={MediumGray} maxWidth='445px'>
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
          productivity soar.
        </BodyM>
        <StandardButton>
          <ButtonText>Learn More</ButtonText>
        </StandardButton>
      </ParagraphContainer>
    );
  };

  const LogoSection = () => {
    return (
      <LogoImgGrid>
        <LogoImg src='/images/client-databiz.svg' />
        <LogoImg src='/images/client-audiophile.svg' />
        <LogoImg src='/images/client-meet.svg' />
        <LogoImg src='/images/client-maker.svg' />
      </LogoImgGrid>
    );
  };

  return (
    <SectionWrapper id='section-wrapper'>
      <LayoutGrid>
        <div>
          <ParagraphSection />
          <LogoSection />
        </div>
        <HeroImg />
      </LayoutGrid>
    </SectionWrapper>
  );
}
