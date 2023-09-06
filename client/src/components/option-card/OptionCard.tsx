import Textarea from "@mui/joy/Textarea";
import React, { FC, useEffect, useState } from "react";
import { Box, Checkbox, Typography } from "@mui/material";
import { optionName } from "./OptionCard.styles";

import * as styles from './OptionCard.styles'
import { GetTest, type Option, type Question } from "types/tests";

type OptionCardProps =  {
  option: GetTest['questions'][0]['options'][0];
  setSelectedOptionsIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const OptionCard: FC<OptionCardProps> = ({option, setSelectedOptionsIds}) => {
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
      backgroundColor: selected ? "black" : "white",
    }}
    onClick={handleOptionClick}
    >
      <Typography sx={styles.optionName}>{option.name}</Typography>
    </Box>
  );
};