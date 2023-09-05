import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { Test } from "../../types/tests";

import * as styles from "./TestCard.styles";

type TestCardProps = {
  test: Test;
};

export const TestCard: FC<TestCardProps> = ({ test }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.info}>
        <Box sx={styles.name}>{test.name}</Box>
        <Box sx={styles.description}>{test.description}</Box>
      </Box>
      <Button variant="contained" color="success" size="small">Start test</Button>
    </Box>
  );
};