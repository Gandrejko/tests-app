import { green, red } from "@mui/material/colors";
import { SxProps } from "@mui/material/styles";

export const option: SxProps = {
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #000',
  borderRadius: '10px',
  padding: '10px 30px',
  cursor: 'pointer',
};

export const optionName: SxProps = {
  fontSize: '20px',
};

export const isCorrect: SxProps = {
  height: '100%',
  color: red[600],
  '&.Mui-checked': {
    color: green[800],
  },
};