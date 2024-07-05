import React from 'react';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';

const MainLayout = () => {
  return (
    <div>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export default MainLayout;