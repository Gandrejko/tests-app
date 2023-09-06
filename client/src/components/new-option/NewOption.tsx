import Textarea from "@mui/joy/Textarea";
import React, { FC, useEffect, useState } from "react";
import { Box, Checkbox } from "@mui/material";

import * as styles from 'components/new-option/NewOption.styles';
import { Option, Question } from "types/tests";

type NewOptionProps =  {
  option: Option;
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

export const NewOption: FC<NewOptionProps> = ({option, setOptions}) => {
  const [name, setName] = useState(option.name);
  const [checked, setChecked] = useState(option.isCorrect);

  useEffect(() => {
    setOptions((prevState) => {
      const optionIndex = prevState.findIndex((optionState) => optionState.id === option.id);
      prevState[optionIndex].name = name;
      prevState[optionIndex].isCorrect = checked;
      return prevState;
    });
  }, [name, checked]);

  return (
    <Box sx={styles.option}>
      <Textarea
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Option..."
        size="sm" sx={styles.optionName}
        required
      />
      <Checkbox
        sx={styles.isCorrect}
        checked={checked} onChange={() => setChecked(!checked)}
      />
    </Box>
  );
};