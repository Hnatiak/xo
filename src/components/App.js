import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";

const NotFound = lazy(() => import("../pages/NotFound"));
const HostRoom = lazy(() => import("../pages/HostRoom"))
const PlayRoom = lazy(() => import("../pages/PlayRoom"))
const WelcomeRoom = lazy(() => import("../pages/WelcomeRoom"))

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* element={<SharedLayout />} */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomeRoom />} />
          <Route path="/play-room" element={<PlayRoom />} />
          <Route path="/host-room" element={<HostRoom />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};