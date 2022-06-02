import AppAboutImage from './app-about-image/app-about-image';
import AppAboutInfo from './app-about-info/app-about-info';

import './app-about.css';

const AppAbout = () => {
  return (
    <div className="app-about">
      <AppAboutImage />
      <AppAboutInfo />
    </div>
  );
}

export default AppAbout;