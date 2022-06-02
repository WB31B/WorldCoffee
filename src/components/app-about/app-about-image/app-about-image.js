import aboutIMG from '../../../images/aboutIMG.png';

import './app-about-image.css';

const AppAboutImage = (props) => {
  return (
    <div className="app-about-image">
      <img src={aboutIMG} alt="About" />
    </div>
  );
}

export default AppAboutImage;