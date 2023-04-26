import { Box, Chip, Container, Typography, Avatar } from "@mui/material";

import { useLoading } from "../../context/loading.context";
import { useUser } from "../../context/user.context";
import UserInfo from "../user-info/UserInfo";
import { useSkill } from "../../context/skill.context";
import SkillInfo from "../skill-info/SkillInfo";
// import user from "./user?.json";

const MainCard = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { loading, setLoading } = useLoading();

  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(0,0,0, .4)",
            py: 2,
            px: 3,
            borderRadius: "20px 20px 0px 0px",
            boxShadow: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#ffddcc",
              fontWeight: "lighter",
              textTransform: "uppercase",
            }}
          >
            {user?.person?.name}
          </Typography>
          <Chip
            label="CHANGE USER"
            component="a"
            variant="outlined"
            clickable
            onClick={() => {
              setSkill(null);
              setUser(null);
            }}
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              borderColor: "rgba(255, 255, 255, 0.9)",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "rgba(0,0,0, .1)",
            py: 2,
          }}
        >
          <Avatar
            alt="User profile picture"
            src={user?.person?.picture}
            sx={{ width: 150, height: 150, boxShadow: 3 }}
          />
        </Box>
        {skill ? <SkillInfo /> : <UserInfo />}
      </Container>
    </>
  );
};

export default MainCard;
