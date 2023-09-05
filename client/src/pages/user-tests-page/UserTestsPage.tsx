import { UserTestCard } from "components/user-test-card/UserTestCard";
import React, { FC } from 'react';
import { Box } from "@mui/material";
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
    <Layout pageName="Tests" >
      <Box sx={styles.userTests}>
        {isSuccess && tests?.map((test) => <UserTestCard test={test} />)}
      </Box>
    </Layout>
  );
};
