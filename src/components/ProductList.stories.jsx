import React from 'react';
import ProductList from '../components/ProductList';
import products from '../assets/ProductsData'; // Import product data
import '../components/ProductList.css'; // Ensure the CSS is imported

export default {
  title: 'ProductList',
  component: ProductList,
};

const Template = (args) => <ProductList {...args} />;

export const WeedCategory = Template.bind({});
WeedCategory.args = {
  products: products.filter((product) => product.category === 'weed'), // Filter products by category
};