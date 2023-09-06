import Textarea from "@mui/joy/Textarea";
import { OptionCard } from "components/option-card/OptionCard";
import { UserTestCard } from "components/user-test-card/UserTestCard";
import React, { FC, useState } from 'react';
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getTestById, getUserTests } from "api/tests-api";
import { Layout } from "components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";

import * as styles from 'pages/test-page/TestPage.styles';

export const TestPage: FC = () => {
  const navigate = useNavigate();
  const {testId} = useParams();
  const {data: test} = useQuery({
    queryFn: () => getTestById(testId || ''),
    queryKey: ['test'],
  });
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<Set<string>>(new Set());

  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const questionsCount = test?.questions.length;

  const checkAnswer = () => {
    const allCorrect = test?.questions[questionIndex].options.every((option) => selectedOptionsIds.has(option._id) === option.isCorrect);
    allCorrect ? setCorrectAnswers(correctAnswers + 1) : setWrongAnswers(wrongAnswers + 1);
    setTimeout(() => {
      setQuestionIndex(questionIndex + 1);
    }, 2000)
  }

  return (
    <Layout pageName="My tests" >
      <Box sx={styles.testPage}>
        <Box sx={styles.test}>
          <Box sx={styles.header}>
            <Typography>Current question: {questionIndex}/{questionsCount}</Typography>
            <Typography>Correct answers: {correctAnswers}</Typography>
            <Typography>Wrong answers: {wrongAnswers}</Typography>
          </Box>
          <Typography sx={styles.question}>{test?.questions[questionIndex].name}</Typography>
          <Box sx={styles.options}>
            {test?.questions[questionIndex].options.map((option) =>
              <OptionCard key={option._id} option={option} setSelectedOptionsIds={setSelectedOptionsIds} />
            )}
          </Box>
          <Button
            variant="contained"
            sx={styles.nextQuestionBtn}
            onClick={checkAnswer}
          >Next question</Button>
        </Box>
      </Box>
    </Layout>
  );
};
