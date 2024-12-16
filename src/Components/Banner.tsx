import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import h2 from '../assets/profile.png';

// Typewriter keyframe animation
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Blink cursor keyframe animation
const blink = keyframes`
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
`;

// Slide left-to-right animation
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Slide right-to-left animation
const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 700px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  animation: ${slideInLeft} 1s ease-out;

  @media (min-width: 768px) {
    margin-left: 180px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    margin: 10px auto;
    padding: 10px;
    text-align: center;
  }
`;

const SubTitle = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto 10px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 0.5s steps(30, end), ${blink} 0.25s step-end infinite;
  font-family: 'Ribeye Marrow', serif;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 25px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${slideInRight} 1s ease-out;

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-basis: 70%;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  height: 550px;

  @media (max-width: 480px) {
    max-width: 90%;
  }

  @media (max-width: 320px) {
    max-width: 90%; 
    height: 350px;
  }
`;

const Button = styled.a`
  font-size: 1.2rem;
  background: linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #33bace 100%, #406aff 117.04%);
  color: white;
  font-weight: bold;
  padding: 13px 23px;
  cursor: pointer;
  border-radius: 25px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 30px;
  margin-left:5px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #ff56f6;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

interface BannerProps {
  onClick: () => void;
  id: string;
}

const roles = ["Front-end Developer!"];

const Banner: React.FC<BannerProps> = ({ onClick, id }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerContainer id={id} onClick={onClick}>
      <TextContainer>
        <SubTitle>Hi, there I am a</SubTitle>
        <Title>{roles[currentRole]}</Title>
        <Description>
          I am a web developer with a passion for creating responsive web applications.
          <br /> My goal is to deliver high-quality solutions that meet the needs.
        </Description>
        <Button href="#contact">Contact me</Button>
        <SocialLinks>
          <SocialIcon href="https://www.linkedin.com/in/rimsha-malik-99a237242/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/Rimsha820" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
        </SocialLinks>
      </TextContainer>
      <ImageContainer>
        <BannerImage src={h2} alt="Home" />
      </ImageContainer>
    </BannerContainer>
  );
};

export default Banner;
