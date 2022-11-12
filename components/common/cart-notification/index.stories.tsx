import { useEffect } from 'react';

import useStore from '@store/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartNotification from '.';

export default {} as ComponentMeta<typeof CartNotification>;

const Template: ComponentStory<typeof CartNotification> = () => (
  <CartNotification />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => {
    const addCart = useStore((state) => state.addCart);
    const reset = useStore((state) => state.reset);

    useEffect(() => {
      addCart({
        item_no: 122997,
        item_name: '스탠리 클래식 런치박스',
        detail_image_url:
          'https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500',
        price: 75000,
        score: 200,
      });
      return () => {
        reset();
      };
    }, []);

    return <Story />;
  },
];
