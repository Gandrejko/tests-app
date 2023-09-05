import { Box } from "@mui/material";
import React, { FC } from "react";
import { TestCard } from "../test-card/TestCard";
import { Test } from "types/tests";

import * as styles from "./TestsList.styles";

type TestsListProps = {
  tests: Test[];
};

export const TestsList: FC<TestsListProps> = ({ tests }) => {
  return (
    <Box sx={styles.testsList}>
      {tests.map((test) => <TestCard test={test} />)}
    </Box>
  );
};