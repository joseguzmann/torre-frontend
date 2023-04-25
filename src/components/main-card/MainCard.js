import { Button, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import user from "./user.json";

const MainCard = () => {
  // const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const userResponse = await fetch(
      //   "https://tranquil-thicket-22159.herokuapp.com/http://torre.bio/api/bios/jg175415"
      // );
      // const userData = await userResponse.json();

      console.log(user);
      // setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ "background-color": "red" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <h1>users</h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Button variant="contained" color="primary">
          Centrar botón
        </Button>
      </Box>
    </Container>
  );
};

export default MainCard;
