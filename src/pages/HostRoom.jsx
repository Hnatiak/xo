import React from 'react';
// import { Outlet } from 'react-router-dom';
import HostRoomElement from '../components/HostRoom/HostRoom';
import TitleSection from '../components/TitleSection/TitleSection';
// import { useParams } from 'react-router-dom';

const HostRoom = () => {
  return (
    <div>
      <TitleSection title="Головна кімната" />
      <HostRoomElement />
    </div>
  );
};

export default HostRoom;