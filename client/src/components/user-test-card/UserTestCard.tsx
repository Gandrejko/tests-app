import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { Test } from "types/tests";

import * as styles from "./UserTestCard.styles";

type TestCardProps = {
  test: Test;
};

export const UserTestCard: FC<TestCardProps> = ({ test }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.info}>
        <Box sx={styles.name}>{test.name}</Box>
        <Box sx={styles.description}>{test.description}</Box>
      </Box>
      <Box sx={styles.buttons}>
        <Button variant="contained" size="small">Edit</Button>
        <Button variant="contained" color="error" size="small">Delete</Button>
      </Box>
    </Box>
  );
};