import { Box, Container, Typography, TextField, Button } from "@mui/material";

import { useEffect, useState } from "react";
import { useLoading } from "../../context/loading.context";
import { useUser } from "../../context/user.context";
// import user from "./user?.json";

const MainCard = () => {
  const { user, setUser } = useUser();
  const { loading, setLoading } = useLoading();

  const [id, setId] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = () => {
    alert(id);
  };

  return (
    <Container maxWidth="sm" sx={{ "background-color": "red" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "blue",
        }}
      >
        <Typography variant="body1">Input username</Typography>
        <TextField
          id="outlined-basic"
          label="User id"
          variant="outlined"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <Button variant="outlined" type="button" onClick={handleSubmit}>
          Outlined
        </Button>
      </Box>
    </Container>
  );
};

export default MainCard;
