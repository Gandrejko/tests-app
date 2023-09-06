import { red } from "@mui/material/colors";
import { SxProps } from "@mui/material/styles";

export const card: SxProps = {
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  border: "2px solid #000",
  borderRadius: "5px"
};

export const info: SxProps = {
  display: "flex",
  gap: "40px",
};

export const name: SxProps = {
};

export const description: SxProps = {
};

export const buttons: SxProps = {
  display: "flex",
  gap: "20px",
};

export const deleteButton: SxProps = {
  marginTop: "10px",
  backgroundColor: red[600]
};