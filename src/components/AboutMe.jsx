import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/photo_2024-08-02_13-04-52.jpg'; 

const AboutMeContainer = styled.section`
  padding: 4rem;
  background: linear-gradient(-135deg,
    rgba(67, 21, 39, 1) 0%,
    rgba(255, 255, 255, 0.5) 8%,
    rgba(74, 14, 38, 0.76) 15%,
    rgba(67, 21, 39, 1) 60%,
    rgba(255, 255, 255, 0.5) 65%,
    rgba(67, 21, 39, 0.5) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ProfileImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  margin-left: 5rem;
  margin-right: 5rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Summary = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const EducationTable = styled.div`
  margin-top: 2rem;
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    text-align: left;
  }

  th {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Button = styled.button`
  background-color: #4E2D3A;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <ProfileImageContainer>
        <img src={profileImage} alt="Profile" />
      </ProfileImageContainer>
      <TextContainer>
        <Title data-aos="fade-up" data-aos-duration="800">About Me</Title>
        <Summary data-aos="fade-up" data-aos-duration="800">
          I am a passionate Frontend Developer and UI Designer, blending creativity with technology to craft intuitive digital experiences. My journey in Computer Science has equipped me with a strong foundation in design, problem-solving, and cutting-edge development.
        </Summary>
        <EducationTable data-aos="fade-up" data-aos-duration="800">
          <table>
            <thead>
              <tr>
                <th>Education</th>
                <th>Institution</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTech in Computer Science and Engineering</td>
                <td>St. Joseph’s College of Engineering & Tech, Palai (KTU)</td>
                <td>2020 - 2024</td>
              </tr>
              <tr>
                <td>Higher Secondary (Science - CBSE)</td>
                <td>Amrita Vidyalayam, Pandalam</td>
                <td>2018 - 2020</td>
              </tr>
            </tbody>
          </table>
        </EducationTable>
        <Button onClick={() => window.location.href = '#contact'} data-aos="fade-up" data-aos-duration="800">
          Contact me
        </Button>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
