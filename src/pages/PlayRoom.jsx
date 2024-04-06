import React from 'react';
// import { Outlet } from 'react-router-dom';
import TitleSection from '../components/TitleSection/TitleSection';
import PlayRoomElement from 'components/PlayRoom/PlayRoom';
// import { useParams } from 'react-router-dom';

const HostRoom = () => {
  return (
    <div>
      <TitleSection title="Ігрова кімната" />
      <PlayRoomElement />
    </div>
  );
};

export default HostRoom;