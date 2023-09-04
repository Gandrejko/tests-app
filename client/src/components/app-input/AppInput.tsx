import React, { FC } from 'react';
import { Input, InputProps } from "@mui/material";

import * as styles from './AppInput.styles';

type AppInputProps = InputProps & {

}

export const AppInput: FC<AppInputProps> = (props) => {
  return (
    <Input
      sx={styles.input}
      {...props}
    />
  );
};