import React, { FC } from 'react';
import { Button, ButtonProps } from "@mui/material";

export const AppButton: FC<ButtonProps> = (props) => {
  return (
    <Button {...props} />
  );
};