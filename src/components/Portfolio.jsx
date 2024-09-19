import React, { useState } from 'react';
import styled from 'styled-components';
import yummy from '../images/yummy.png';
import ladychef from '../images/ladychef.png';
import chocolate from '../images/Ad.png';
import cat from '../images/cat day.png';
import cookie from '../images/cookie day.png';
import coding from '../images/CREATIVE CODING USING PYTHON (1).png';
import inde from '../images/gradient.png';
import hap from '../images/Happy.jpg';
import sam from '../images/notice.png';
import ui2 from '../images/ui2.png';
import ui1 from '../images/ui1.png';
import ui3 from '../images/ui3.png';
import ui4 from '../images/ui4.png';
import ui5 from '../images/ui5.png';
import uber1 from '../images/uber1.png';
import uber2 from '../images/uber2.png';
import uber3 from '../images/uber3.png';
import uber4 from '../images/uber4.png';
import p1 from '../images/s1.jpg';
import p2 from '../images/s2.jpg';
import p3 from '../images/s9.jpg';
import p4 from '../images/s10.jpg';
import p5 from '../images/s16.jpg';
import w1 from '../images/WanderWise-home.png';
import w2 from '../images/Accomodation.png';
import w3 from '../images/Destination.png';
import w4 from '../images/Explore.png';
import gs1 from '../images/GS1.png';
import gs2 from '../images/gs2.png';
import gs3 from '../images/gs3.png';
import gs4 from '../images/gs4.png';

const works = {
  mobileApp: [
    {
      id: 1,
      title: 'Passify',
      description: 'Passify is a cutting-edge mobile app crafted by a dynamic team of four talented students. Harnessing the power of Flutter for seamless cross-platform development and Firebase for robust backend support, Passify revolutionizes bus pass management for college students. Our team\'s innovative approach ensures a user-friendly experience, allowing students to search buses, book passes online, and enjoy real-time seat availability. With Passify, we are redefining how technology enhances student commutes.',
      detailedDescription: 'Passify provides a detailed overview of bus schedules, real-time tracking, and notifications for upcoming renewals. The app integrates with multiple payment gateways, ensuring secure and quick transactions. It also offers features like pass sharing and feedback submission, fostering a community-driven approach to public transport improvement.',
      thumbnail: p2,
      images: [p1,p2,p3,p4,p5],
      githubUrl: 'https://www.behance.net/gallery/203950489/PASSIFY',
    },
    {
      id: 2,
      title: 'WanderWise',
      description: 'WanderWise is a comprehensive travel guide app that offers curated destination insights, accommodation and culinary recommendations, and favorite collections for seamless travel planning.',
      detailedDescription: 'WanderWise is a meticulously designed travel guide app that enhances your travel experiences by offering a comprehensive and user-friendly interface. The app allows users to explore curated travel destinations with captivating visuals and provides in-depth information for each location. WanderWise also includes detailed insights into accommodation options, helping users find the best places to stay, and highlights local culinary delights by showcasing popular eateries. Additionally, users can save and revisit their favorite spots through the app\'s Favorite Collections feature. WanderWise serves as your personal travel companion, offering all necessary details and contact information without the hassle of bookings or payments, making travel planning seamless and enjoyable.',
      thumbnail: w1,
      images: [w1, w2, w3, w4],
      githubUrl: 'https://www.behance.net/gallery/204173503/WanderWise-Your-Ultimate-Travel-Companion',
    },
  ],
  website: [
    {
      id: 3,
      title: 'TalkSync',
      description: `
This project is a real-time video conferencing platform with integrated translation features. Users can either create a new meeting room or join an existing one through a simple and intuitive UI. Once inside a meeting, participants can toggle their microphone and camera on or off as needed.

The platform supports real-time audio and video streaming using WebRTC. For language translation, the Web Speech API handles Speech-to-Text (STT) and Text-to-Text (TTT) on the client side. Translated text is sent to the server and then broadcasted to other participants. Google APIs facilitate Text-to-Text (TTT) and Text-to-Speech (TTS) conversions, ensuring smooth communication across different languages.

The backend, powered by Node.js and Socket.io, manages room creation, user connections, and real-time updates, providing a seamless and interactive meeting experience.
`,

      detailedDescription: 'Detailed description of Website 1.',
      thumbnail: ui2,
      images: [ui1, ui2, ui3, ui4, ui5],
      githubUrl: 'https://github.com/sreelakshmi-01',
    },
    {
      id: 4,
      title: 'Uber (Clone)',
      description: 'This project is a meticulously crafted clone of the Uber website, designed using Figma. The aim was to replicate the sleek and user-friendly interface of Uber, capturing its essential features and aesthetics.',
      detailedDescription: 'Tools Used: Figma: Utilized Figma for creating high-fidelity prototypes, allowing for collaborative design and real-time feedback.Plugins: Leveraged Figma plugins for icons, illustrations, and real-time data to enhance the design process.',
      thumbnail: uber1,
      images: [uber1, uber2, uber3, uber4],
      githubUrl: 'https://www.behance.net/gallery/203996499/Uber-Clone-Website',
    },
  ],
  poster: [
    { id: 5, title: 'Burger', thumbnail: yummy, images: [yummy] },
    { id: 6, title: 'LadyChef', thumbnail: ladychef, images: [ladychef] },
    { id: 9, title: 'Chocolate', thumbnail: chocolate, images: [chocolate] },
    { id: 10, title: 'Cat Day', thumbnail: cat, images: [cat] },
    { id: 11, title: 'Cookie Day', thumbnail: cookie, images: [cookie] },
    { id: 12, title: 'Coding Competition', thumbnail: coding, images: [coding] },
    { id: 13, title: 'Independence Day', thumbnail: inde, images: [inde] },
    { id: 14, title: 'Women\'s Day', thumbnail: hap, images: [hap] },
    { id: 15, title: 'Samsung Ad', thumbnail: sam, images: [sam] },
  ],
  dashboard: [
    {
      id: 16,
      title: 'Global Superstore 2016',
      description: `
This project was built using the Global Superstore dataset and serves as a detailed and interactive view of key business performance metrics in retail. Leveraging Power BI, I was able to create a dynamic and visually engaging dashboard.`,

      detailedDescription: 'Detailed description of Dashboard 1.',
      thumbnail: gs1,
      images: [gs1, gs2, gs3, gs4,],
      githubUrl: '',
    },
    
  ],
  /*
  other: [
    { id: 7, title: 'Other 1', description: 'Description of Other 1' },
    { id: 8, title: 'Other 2', description: 'Description of Other 2' },
  ],
  */
};

const PortfolioContainer = styled.section`
  padding: 4rem;
  background: linear-gradient(135deg, 
    rgba(67, 21, 39, 0.5) 0%, 
    rgba(255, 255, 255, 0.5) 26%, 
    rgba(67, 21, 39, 0.5) 44%, 
    rgba(255, 255, 255, 0.5) 65%, 
    rgba(67, 21, 39, 0.5) 100%);
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #431527;
  text-align: center;
  margin-bottom: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${({ isActive }) => (isActive ? '#431527' : 'rgba(67, 21, 39, 0.7)')};
  margin: 0 1rem;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    width: 100%;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const WorkItem = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const WorkTitle = styled.h3`
  font-size: 1.5rem;
  color: #431527;
`;

const WorkThumbnail = styled.img`
  width: 100%;
  height: 190px;
  object-fit: contain;
  border-radius: 10px;
`;

const PopupOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  overflow-y: auto; /* Add overflow */
  max-height: 80vh; /* Fixed height */
`;

const PopupTitle = styled.h2`
  margin-top: 0;
  color: #431527;
`;

const PopupDescription = styled.p`
  color: #333;
  text-align: justify;
`;

const PopupImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  margin: 1rem 0;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CloseButton = styled.button`
  background-color: #431527;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const GitHubButton = styled.a`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;
`;

const SliderButton = styled.button`
  background-color: #431527;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('mobileApp');
  const [selectedWork, setSelectedWork] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setReadMore(false);
  };

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setReadMore(false);
    setActiveImageIndex(0); // Reset image index when selecting a new work
  };

  const closePopup = () => {
    setSelectedWork(null);
    setIsFullscreen(false);
    setReadMore(false);
  };

  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % selectedWork.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + selectedWork.images.length) % selectedWork.images.length);
  };

  return (
    <PortfolioContainer id="portfolio">
      <SectionTitle data-aos="fade-up" data-aos-duration="800">PORTFOLIO</SectionTitle>
      <Tabs data-aos="fade-up" data-aos-duration="800">
        <TabButton isActive={activeTab === 'mobileApp'} onClick={() => handleTabClick('mobileApp')} >Mobile App</TabButton>
        <TabButton isActive={activeTab === 'website'} onClick={() => handleTabClick('website')}>Website</TabButton>
        <TabButton isActive={activeTab === 'poster'} onClick={() => handleTabClick('poster')}>Poster</TabButton>
        <TabButton isActive={activeTab === 'dashboard'} onClick={() => handleTabClick('dashboard')}>Dashboard</TabButton>
        
      </Tabs>
      <WorksGrid>
        {works[activeTab].map((work) => (
          <WorkItem key={work.id} onClick={() => handleWorkClick(work)} data-aos="fade-up" data-aos-duration="1200">
            <WorkThumbnail src={work.thumbnail} alt={work.title} />
            <WorkTitle>{work.title}</WorkTitle>
          </WorkItem>
        ))}
      </WorksGrid>
      {selectedWork && (
        <PopupOverlay isOpen={!!selectedWork} data-aos-duration="800">
          <PopupContent data-aos="fade-up" data-aos-duration="800">
            <PopupTitle data-aos="fade-up" data-aos-duration="800">{selectedWork.title}</PopupTitle>
            {!readMore && (
              <>
                {selectedWork.images && selectedWork.images.length > 0 && (
                  <div>
                    <PopupImage
                      src={selectedWork.images[activeImageIndex]}
                      alt={selectedWork.title}
                      onClick={handleImageClick}
                      style={{ cursor: isFullscreen ? 'zoom-out' : 'zoom-in' }}
                      data-aos="fade-up" data-aos-duration="800"
                    />
                    <ButtonContainer>
                      <SliderButton onClick={prevImage}>&lt; Prev</SliderButton>
                      <SliderButton onClick={nextImage}>Next &gt;</SliderButton>
                    </ButtonContainer>
                  </div>
                )}
                <PopupDescription data-aos="fade-up" data-aos-duration="800">{selectedWork.description}</PopupDescription>
              </>
            )}
            <ButtonContainer>
              {selectedWork.githubUrl && (
                <GitHubButton
                  href={selectedWork.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  View More
                </GitHubButton>
              )}
              <CloseButton onClick={closePopup} data-aos="fade-up" data-aos-duration="800">Close</CloseButton>
            </ButtonContainer>
          </PopupContent>
        </PopupOverlay>
      )}
      {isFullscreen && selectedWork && selectedWork.images && selectedWork.images.length > 0 && (
        <PopupOverlay isOpen={isFullscreen} onClick={handleImageClick}>
          <PopupImage
            src={selectedWork.images[activeImageIndex]}
            alt={selectedWork.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              cursor: 'zoom-out',
            }}
          />
        </PopupOverlay>
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
