import React, { FC, useState } from "react";
import { Box, Typography } from "@mui/material";

import * as styles from './OptionCard.styles'
import { Option } from "types/tests";
import { green, red } from "@mui/material/colors";

type OptionCardProps =  {
  option: Option;
  setSelectedOptionsIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedOptionsIds: Set<string>;
  showAnswers: boolean;
}

export const OptionCard: FC<OptionCardProps> = ({option, setSelectedOptionsIds, selectedOptionsIds, showAnswers}) => {
  const [selected, setSelected] = useState(false);

  const handleOptionClick = () => {
    const newSelectedValue = !selected;
    setSelected(newSelectedValue);
    setSelectedOptionsIds((prevState) => {
      newSelectedValue ? prevState.add(option._id) : prevState.delete(option._id);
      return prevState;
    })
  }

  return (
    <Box sx={{
      ...styles.option,
      color: selected ? "white" : "black",
      backgroundColor: selected ? (showAnswers ? (selectedOptionsIds.has(option._id) === option.isCorrect ? green[600] : red[600] ) : "black") : "white",
    }}
    onClick={handleOptionClick}
    >
      <Typography sx={styles.optionName}>{option.name}</Typography>
    </Box>
  );
};