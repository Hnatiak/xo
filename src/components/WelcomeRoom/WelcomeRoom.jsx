// import { Container, Name, Section } from './WelcomeRoom.styled';

// const WelcomeRoomElement = () => {
//     return (
//         <Section>
//           <Container>
//             <Name>Hello World</Name>
//           </Container>
//         </Section>
//       );
// };

// export default WelcomeRoomElement;


// import React, { useState } from 'react';
// import { Container, Name, Section, Button } from './WelcomeRoom.styled';

// const WelcomeRoomElement = () => {
//   const [backgroundImages, setBackgroundImages] = useState([
//     '../../img/1.jpg',
//     '../../img/2.jpg',
//     '../../img/3.jpg',
//     '../../img/4.jpg',
//     '../../img/5.jpg',
//     '../../img/6.jpg',
//     '../../img/7.jpg',
//     '../../img/8.jpg',
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const changeBackgroundImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//   };

//   return (
//     <Section style={{ background: `url(${backgroundImages[currentIndex]})` }}>
//       <Container>
//         <Name>Hello World</Name>
//       </Container>
//         <Button onClick={changeBackgroundImage}>Change Background</Button>
//     </Section>
//   );
// };

// export default WelcomeRoomElement;




import React, { useState } from 'react';
import { Container, Name, Section, Button } from './WelcomeRoom.styled';

const WelcomeRoomElement = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackgroundImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <Section style={{ background: `url(${process.env.PUBLIC_URL}/${backgroundImages[currentIndex]})` }}>
      <Container>
        <Name>Hello World</Name>
      </Container>
      <Button onClick={changeBackgroundImage}>Change Background</Button>
    </Section>
  );
};

export default WelcomeRoomElement;