import { OptionCard } from "components/option-card/OptionCard";
import { UserTestCard } from "components/user-test-card/UserTestCard";
import React, { FC, useState } from 'react';
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getTestById, getUserTests } from "api/tests-api";
import { Layout } from "components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";

import * as styles from 'pages/test-page/TestPage.styles';
import { ModalDialog, Modal, Textarea } from "@mui/joy";

export const TestPage: FC = () => {
  const navigate = useNavigate();
  const {testId} = useParams();
  const [showAnswers, setShowAnswers] = useState(false);
  const [isTestEnded, setIsTestEnded] = useState(false);
  const {data: test} = useQuery({
    queryFn: () => getTestById(testId || ''),
    queryKey: ['test'],
    onError: (error: any) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  });
  const [selectedOptionsIds, setSelectedOptionsIds] = useState<Set<string>>(new Set());

  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const questionsCount = test?.questions.length || 0;

  const checkAnswer = () => {
    const allCorrect = test?.questions[questionIndex].options.every((option) => selectedOptionsIds.has(option._id) === option.isCorrect);
    allCorrect ? setCorrectAnswers(correctAnswers + 1) : setWrongAnswers(wrongAnswers + 1);
    setShowAnswers(true);
    setTimeout(() => {
      if (questionIndex === questionsCount - 1) {
        setIsTestEnded(true);
        return;
      }
      setShowAnswers(false);
      setQuestionIndex(questionIndex + 1);
    }, 2000)
  }

  return (
    <Layout pageName="My tests">
      <Box sx={styles.testPage}>
        <Box sx={styles.test}>
          <Box sx={styles.header}>
            <Typography>Current question: {questionIndex + 1}/{questionsCount}</Typography>
            <Typography>Correct answers: {correctAnswers}</Typography>
            <Typography>Wrong answers: {wrongAnswers}</Typography>
          </Box>
          <Typography sx={styles.question}>{test?.questions[questionIndex].name}</Typography>
          <Box sx={styles.options}>
            {test?.questions[questionIndex].options.map((option) =>
              <OptionCard
                key={option._id}
                option={option}
                setSelectedOptionsIds={setSelectedOptionsIds}
                selectedOptionsIds={selectedOptionsIds}
                showAnswers={showAnswers}
              />
            )}
          </Box>
          <Button
            variant="contained"
            sx={styles.nextQuestionBtn}
            onClick={checkAnswer}
          >Next question</Button>
        </Box>
      </Box>
      <Modal
        open={isTestEnded}
        sx={styles.modal}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <ModalDialog>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your score
          </Typography>
          <Typography id="modal-modal-description">
            <Typography>Correct answers: {correctAnswers}</Typography>
            <Typography>Wrong answers: {wrongAnswers}</Typography>
            <Typography>Result: {(correctAnswers / questionsCount).toFixed(0)}%</Typography>
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")} sx={styles.closeModalButton}>Go to main page</Button>
        </ModalDialog>
      </Modal>
    </Layout>
  );
};
