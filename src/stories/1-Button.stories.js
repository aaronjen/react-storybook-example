import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  // 修改 group title
  title: 'ButtonExample',
};

// 修改子項目 title
export const textHelloButton = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// 修改子項目 title
export const emojiIsCool = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);