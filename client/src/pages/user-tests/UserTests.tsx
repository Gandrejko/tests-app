import React, { FC } from 'react';
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import { getAllTests } from 'api/tests-api';
import { TestsList } from "components/tests-list/TestsList";
import { Layout } from "components/layout/Layout";

import * as styles from './UserTests.styles';

export const UserTests: FC = () => {
  const {data: tests, isSuccess} = useQuery({
    queryFn: () => getAllTests(),
    queryKey: ['tests'],
  });

  return (
    <Layout pageName="Tests" >
      <Box sx={styles.userTests}>
        {isSuccess && <TestsList tests={tests} />}
      </Box>
    </Layout>
  );
};
