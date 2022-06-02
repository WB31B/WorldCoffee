import productIMG from '../../images/productIMG.png';

import './app-product-item.css';

const AppProductItem = ({ name, price }) => {
  return(
    <li className="app-product-item">
      <img src={productIMG} alt="Product" />
      <p className='protuct-title'>AROMISTICO Coffee 1 kg</p>
      <div className="product-info">
        <p className="product-name">{ name }</p>
        <p className="product-price">{ price + '$'}</p>
      </div>
    </li>
  );
}

export default AppProductItem;