import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductItem from '.';

export default {
  title: 'Product Component',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const Default = Template.bind({});
/**
 * 이미지 잘 렌더링 되는 지 확인
 */
Default.args = {
  item_no: 1051973,
  item_name: '신지마운트 톡 탈부착 핸드폰 스마트톡 그립톡',
  detail_image_url:
    'https://img.29cm.co.kr/next-product/2020/11/23/82731cfe8a6a41d6a775556333432c93_20201123165022.jpg?width=500',
  price: 12900,
  score: 300,
};
