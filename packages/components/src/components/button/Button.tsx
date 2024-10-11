import { useNode, UserComponent } from '@craftjs/core';
import { Button as AntButton } from 'antd';
import { ButtonSettings } from './ButtonSetting';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link';
  onClick?: () => void;
  text: string;
}

export const Button: UserComponent<ButtonProps> = ({ text, ...props }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <AntButton
      ref={(ref) => connect(drag(ref as any))}
      {...props}
    >
      {text}
    </AntButton>
  );
};

Button.craft = {
  props: {
    text: 'Click me',
    type: 'default',
  },
  related: {
    settings: ButtonSettings,
  },
};