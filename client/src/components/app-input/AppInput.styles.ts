import { SxProps } from "@mui/system";

export const input: SxProps = {
  marginTop: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  padding: "10px",
  fontSize: "16px",
  color: "black",
  transition: "border-color 0.2s",

  "&:focus": {
    borderColor: "blue",
  },
};