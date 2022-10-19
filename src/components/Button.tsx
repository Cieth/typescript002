import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const Button = (props: ButtonProps) => {
  const { children, type } = props;

  return <button type={type}>{children}</button>;
};

export default Button;
