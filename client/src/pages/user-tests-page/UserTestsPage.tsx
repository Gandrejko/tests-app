import { UserTestCard } from "components/user-test-card/UserTestCard";
import React, { FC } from 'react';
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { getAllTests } from 'api/tests-api';
import { Layout } from "components/layout/Layout";

import * as styles from './UserTestsPage.styles';

export const UserTestsPage: FC = () => {
  const {data: tests, isSuccess} = useQuery({
    queryFn: () => getAllTests(),
    queryKey: ['tests'],
  });

  return (
    <Layout pageName="My tests" >
      <Box sx={styles.userTests}>
        <Button variant="contained" size="large" sx={styles.createTest}>Create test</Button>
        {isSuccess && tests?.map((test) => <UserTestCard test={test} />)}
      </Box>
    </Layout>
  );
};
