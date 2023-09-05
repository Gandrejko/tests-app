import React, { FC } from 'react';
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getAllTests } from '../../api/tests-api';
import { TestsList } from "../../components/tests-list/TestsList";
import { Layout } from "../../components/layout/Layout";

import * as styles from './MainPage.styles';

export const MainPage: FC = () => {
  const {data: tests, isSuccess} = useQuery({
    queryFn: () => getAllTests(),
    queryKey: ['tests'],
  });

  return (
    <Layout pageName="Tests" >
      <Box sx={styles.mainPage}>
        {isSuccess && <TestsList tests={tests} />}
      </Box>
    </Layout>
  );
};
