import { TextField, styled } from "@mui/material";

const MyTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px rgba(10, 10, 10, .9) inset !important",
      backgroundColor: "rgba(0, 0, 0, .4) !important",
    },
    "& .MuiInputBase-input:-internal-autofill-selected": {
      WebkitBoxShadow: "0 0 0 1000px rgba(10, 10, 10, .9) inset !important",
      backgroundColor: "rgba(0, 0, 0, .4) !important",
    },
  },
});

export default MyTextField;
