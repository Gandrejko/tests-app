import { getAllTests } from "api/tests-api";
import { TestCard } from "components/test-card/TestCard";
import React, { FC } from 'react';
import { Box } from "@mui/material";
import { Layout } from "components/layout/Layout";
import { useQuery } from "react-query";

import * as styles from './MainPage.styles';

export const MainPage: FC = () => {
  const { data: tests, isSuccess } = useQuery({
    queryFn: () => getAllTests(),
    queryKey: ["tests"]
  });
  return (
    <Layout pageName="Tests" >
      <Box sx={styles.mainPage}>
        <Box sx={styles.testsList}>
          {isSuccess && tests?.map((test) => <TestCard test={test} />)}
        </Box>
      </Box>
    </Layout>
  );
};
