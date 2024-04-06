import React from 'react';
// import { Outlet } from 'react-router-dom';
// import TitleSection from '../components/TitleSection/TitleSection';
import WelcomeRoomElement from 'components/WelcomeRoom/WelcomeRoom';
// import { useParams } from 'react-router-dom';

const HostRoom = () => {
  return (
    <section>
      {/* <TitleSection title="Вітаю всіх" /> */}
      <WelcomeRoomElement />
    </section>
  );
};

export default HostRoom;