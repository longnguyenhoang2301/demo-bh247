import React from 'react';
import { Button } from 'antd';
import { BaseButtonProps } from "antd/lib/button/button";

/**
 * Primary UI component for user interaction
 */
export const BaseButton = ({
  label,
  onClick,
  ...props
} : { label: string; onClick: () => void } & BaseButtonProps) => {
  return (
    <Button
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
};
