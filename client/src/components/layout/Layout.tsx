import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Header } from "../header/Header";

import * as styles from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
  pageName: string;
};

export const Layout: FC<LayoutProps> = ({ children, pageName }) => {
  return (
    <Box sx={styles.layout}>
      <Header pageName={pageName} />
      {children}
    </Box>
  );
};