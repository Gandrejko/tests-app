import React, { FC } from 'react';
import { Input, InputProps } from "@mui/material";

import * as styles from './AppInput.styles';

export const AppInput: FC<InputProps> = (props) => {
  return (
    <Input
      sx={styles.input}
      {...props}
    />
  );
};