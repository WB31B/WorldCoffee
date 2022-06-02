import AppProductItem from "../app-product-item/app-product-item";

import './app-product.css';

const AppProduct = ({ data }) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <AppProductItem
        key={id}
        {...itemProps}/>
    );
  })

  return (
    <ul className="app-product">
      { elements }
    </ul>
  );
}

export default AppProduct;