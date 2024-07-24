import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactMeContainer = styled.section`
  background-color: #000;
  color: #fff;
  padding: 4rem;
  min-height: 70vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
  border-radius: 10px;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const AddressIcon = styled.span`
  margin-right: 0.5rem;
`;

const AddressText = styled.p`
  margin: 0;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
  transition: background-color 0.3s ease;

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ho99ach',
      'template_8khutg4',
      formData,
      '-y0V74T5mSJU56Bz7'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.log('FAILED. TRY AGAIN', err);
    });
  };

  return (
    <ContactMeContainer id="contact">
      <SectionTitle data-aos="fade-up" data-aos-duration="800">Let's Connect</SectionTitle>
      <ContactContent>
        <MapContainer>
          <MapFrame 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3938.278627853142!2d76.68169307502116!3d9.219356390849764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTMnMDkuNyJOIDc2wrA0MScwMy40IkU!5e0!3m2!1sen!2sin!4v1720617956495!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-aos="fade-up" data-aos-duration="800"
          ></MapFrame>
          <AddressContainer data-aos="fade-up" data-aos-duration="800"> 
            <AddressIcon ><FaMapMarkerAlt /></AddressIcon>
            <AddressText>
              Kizhakke Mukadiyil <br />
              Kadakkadu South, Pandalam P O <br />
              Pathanamthitta, Kerala <br/>
              Pincode 689501
            </AddressText>
          </AddressContainer>
        </MapContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <InputGroup data-aos="fade-up" data-aos-duration="800">
              <InputField 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
              />
            </InputGroup>
            <InputGroup data-aos="fade-up" data-aos-duration="800">
              <InputField 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
              />
            </InputGroup>
            <InputGroup data-aos="fade-up" data-aos-duration="800">
              <TextArea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
              />
            </InputGroup>
            <SubmitButton type="submit" data-aos="fade-up" data-aos-duration="800">Submit</SubmitButton>
          </form>
        </FormContainer>
      </ContactContent>
      <SocialIcons data-aos="fade-up" data-aos-duration="800">
        <IconLink href="https://www.linkedin.com/in/sreelakshmi01" target="_blank"><FaLinkedin /></IconLink>
        <IconLink href="https://wa.me/+918137866551" target="_blank"><FaWhatsapp /></IconLink>
        <IconLink href="https://www.instagram.com/sreelakshmi_s01/" target="_blank"><FaInstagram /></IconLink>
        <IconLink href="https://github.com/sreelakshmi-01" target="_blank"><FaGithub /></IconLink>
      </SocialIcons>
      
    </ContactMeContainer>
  );
};

export default ContactMe;
