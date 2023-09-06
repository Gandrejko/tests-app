import Textarea from "@mui/joy/Textarea";
import { NewOption } from "components/new-option/NewOption";
import { defaultOption, defaultQuestion } from "constants/default-values";
import React, { FC, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { v4 } from "uuid";

import * as styles from './NewQuestion.styles';
import { Question } from "types/tests";

type NewQuestionProps =  {
  question: Question;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export const NewQuestion: FC<NewQuestionProps> = ({question, setQuestions}) => {
  const [name, setName] = useState(question.name);
  const [options, setOptions] = useState(question.options);

  useEffect(() => {
    setQuestions((prevState) => {
      const questionIndex = prevState.findIndex((questionState) => questionState.id === question.id);
      prevState[questionIndex].name = name;
      prevState[questionIndex].options = options;
      return prevState;
    });
  }, [name, options]);

  const handleAddOption = () => {
    setOptions((prevState) => [...prevState, { ...defaultOption, id: v4() }]);
  };

  return (
    <Box sx={styles.question}>
      <Textarea
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Question..."
        required
      />
      <Box sx={styles.options}>
        {options.map((option, index) => <NewOption key={option.id} option={option} setOptions={setOptions} />)}
      </Box>
      <Button
        variant="contained"
        sx={styles.addOption}
        onClick={handleAddOption}
        size="small"
      >Add option</Button>
    </Box>
  );
};