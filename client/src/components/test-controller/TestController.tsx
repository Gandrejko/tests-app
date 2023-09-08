import { Box, Button } from "@mui/material";
import { AppInput } from "components/app-input/AppInput";
import { defaultQuestion } from "constants/default-values";
import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@mui/joy";
import { toast } from "react-toastify";

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

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    const moreThanTwoQuestions = questions.length >= 2;
    if(!moreThanTwoQuestions) {
      toast("Please make sure there are at least two questions");
      return;
    }

    const allQuestionsAreDifferent = new Set(questions.map((question) => question.name)).size === questions.length;
    if(!allQuestionsAreDifferent) {
      toast("Please make sure all questions are different");
      return false;
    }

    const allOptionsAreValid = questions.every((question) => {
      const atLeastOneCorrectAnswer = !question.options.every((option) => option.isCorrect === false);
      if(!atLeastOneCorrectAnswer) {
        toast(`Please make sure there is at least one correct answer for question "${question.name}"`);
        return false;
      }

      const moreThanTwoOptions = question.options.length >= 2;
      if(!moreThanTwoOptions) {
        toast(`Please make sure there are at least two options for question "${question.name}"`);
        return false;
      }

      const allOptionsAreDifferent = new Set(question.options.map((option) => option.name)).size === question.options.length;
      if(!allOptionsAreDifferent) {
        toast(`Please make sure all options are different for question "${question.name}"`);
        return false;
      }

      return true;
    });
    if(!allOptionsAreValid) {
      return;
    }

    handleSubmit({ name, description, questions });
  };

  return (
    <form onSubmit={handleSubmitForm}>
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
            >Submit</Button>
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
