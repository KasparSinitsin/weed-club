import React from 'react';
import ProductCard from './ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Blue Dream',
  description: 'A balanced hybrid strain with sweet berry aroma.',
  price: 15,
  image: 'path_to_image',
};
