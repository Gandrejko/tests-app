import { green, red } from "@mui/material/colors";
import { SxProps } from "@mui/material/styles";

export const option: SxProps = {
  width: '100%',
  display: 'flex',
};

export const optionName: SxProps = {
  flexBasis: '100%',
};

export const isCorrect: SxProps = {
  height: '100%',
  color: red[600],
  '&.Mui-checked': {
    color: green[800],
  },
};