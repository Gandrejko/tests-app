import { Box, Button } from "@mui/material";
import { AppInput } from "components/app-input/AppInput";
import { defaultQuestion } from "constants/default-values";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@mui/joy";

import * as styles from "./TestController.styles";
import { NewQuestion } from "components/new-question/NewQuestion";
import { Question, Test } from "types/tests";
import { v4 } from "uuid";

type TestControllerProps = {
  test?: Test;
  handleSubmit: (test: Omit<Test, "creatorId" | "_id">) => void;
}

export const TestController: FC<TestControllerProps> = ({ test, handleSubmit }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(test?.name || "");
  const [description, setDescription] = useState(test?.description || "");
  const [questions, setQuestions] = useState<Question[]>(test?.questions || []);

  const handleAddQuestion = () => {
    setQuestions((prevState) => ([...prevState, { ...defaultQuestion, _id: v4() }]));
  };

  return (
    <form onSubmit={() => handleSubmit({ name, description, questions })}>
      <Box sx={styles.test}>
        <Box sx={styles.info}>
          <Box sx={styles.row}>
            <AppInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Test name..."
              required
            />
            <Button
              variant="contained"
              sx={styles.submitBtn}
              type="submit"
            >Create test</Button>
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
              key={question._id}
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
    </form>
  );
};
