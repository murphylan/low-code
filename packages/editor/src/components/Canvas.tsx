import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Button } from '@low-code/components';

export const Canvas: React.FC = () => {
  return (
    <Editor resolver={{ Button }}>
      <Frame>
        <Element is={Button} canvas>
          Click me
        </Element>
      </Frame>
    </Editor>
  );
};