import { Box, Button } from "@mui/material";
import { createTest } from "api/tests-api";
import { AppInput } from "components/app-input/AppInput";
import { Layout } from "components/layout/Layout";
import { defaultQuestion } from "constants/default-values";
import { FC, FormEventHandler, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from '@mui/joy';

import * as styles from './CreateTestPage.styles';
import { NewQuestion } from "components/new-question/NewQuestion";
import { CreateTest, Question } from "types/tests";
import { v4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";

export const CreateTestPage: FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const {mutate} = useMutation({
    mutationFn: createTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-tests'] });
    }
  })

  const handleAddQuestion = () => {
    setQuestions((prevState) => ([...prevState, { ...defaultQuestion, id: v4() }]));
  }

  const handleSubmit = () => {
    const testData = {
      name,
      description,
      questions: questions.map(question => {
        const { id, ...rest } = question;
        const newOptions = rest.options.map(option => {
          const { id, ...rest } = option;
          return rest;
        });
        return { ...rest, options: newOptions };
      })
    }
    mutate(testData);
  }

  return (
    <Layout pageName="Create test">
        <Box sx={styles.createTest}>
          <Box sx={styles.info}>
            <Box sx={styles.row}>
              <AppInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Test name..."
                required
              />
              <Button variant="contained" sx={styles.createTestButton} onClick={handleSubmit}>Create test</Button>
            </Box>
            <Textarea
              placeholder="Description..."
              minRows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Box sx={styles.questions}>
            {questions.map((question: Question) => (
              <NewQuestion
                key={question.id}
                question={question}
                setQuestions={setQuestions}
              />
            ))}
          </Box>
          <Button
            variant="contained"
            sx={styles.addQuestion}
            onClick={handleAddQuestion}
          >Add question</Button>
        </Box>
    </Layout>
  );
};
