import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { getTestById } from "api/tests-api";
import { Layout } from "components/layout/Layout";
import * as styles from "./TestInfoPage.styles";
import React, { FC } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export const TestInfoPage: FC = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { data: test, isSuccess } = useQuery(
    [testId],
    () => getTestById(testId || ""), {
      onError: (error: any) => {
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    });

  return (
    <Layout pageName="Test info">
      <Typography sx={styles.name}>{test?.name}</Typography>
      <Typography sx={styles.description}>{test?.description}</Typography>
      {test?.questions.map((question) => (
        <Box sx={styles.question}>
          <Typography sx={styles.questionName}>{question.name}</Typography>
          {question.options.map((option) => (
            <Typography sx={{ ...styles.optionName, border: option.isCorrect ? `4px solid${green[400]}` : "2px solid #000" }}>{option.name}</Typography>
          ))}
        </Box>
      ))}
    </Layout>
  );
};