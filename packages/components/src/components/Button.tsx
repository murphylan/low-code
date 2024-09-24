import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'link';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props}>{props.children}</AntButton>;
};