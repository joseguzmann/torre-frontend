import { Button, styled } from "@mui/material";

const MyButton = styled(Button)({
  boxShadow: 2,
  textTransform: "none",
  fontSize: 14,
  fontWeight: "light",
  color: "#DADCE0",
  padding: "12px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "rgba(0,0,0, .6)",
  borderColor: "rgba(105,105,105)",
  "&:hover": {
    backgroundColor: "rgba(0,0,0, .6)",
    borderColor: "rgba(0, 0, 0, 0.4)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0, .6)c",
    borderColor: "rgb(169,169,169)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(119,136,153,.5)",
  },
});

export default MyButton;
