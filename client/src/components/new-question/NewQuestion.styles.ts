import { red } from "@mui/material/colors";
import { SxProps } from "@mui/material/styles";

export const question: SxProps = {
  padding: '20px',
  border: '2px solid #000',
  borderRadius: '10px',
};

export const options: SxProps = {
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: "10px"
};

export const buttons: SxProps = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
};

export const addOption: SxProps = {

};

export const deleteQuestion: SxProps = {
  bgcolor: red[600],
  '&:hover': {
    bgcolor: red[800],
  }
};