import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Chip,
  Typography,
  Divider,
  Tooltip,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";

import WestIcon from "@mui/icons-material/West";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useUser } from "../../context/user.context";
import { useSkill } from "../../context/skill.context";
import { useEffect } from "react";

const SkillInfo = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "rgba(0,0,0, .4)",
          padding: 1,
          boxShadow: 2,
        }}
      >
        <Grid
          container
          spacing={9}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={4}>
            <Tooltip title="Go back to user">
              <IconButton
                onClick={() => {
                  setSkill(null);
                }}
              >
                <WestIcon />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              sx={{
                color: "#ffddcc",
                textTransform: "uppercase",
              }}
            >
              {skill?.info?.name.toUpperCase()}
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "rgba(0,0,0, .1)",
          py: 2,
          color: "white",
        }}
      >
        <Typography
          variant="body"
          sx={{
            color: "rgba(255,255,255, 0.9)",
            fontWeight: "lighter",
          }}
        >
          Proficiency -{" "}
          {skill?.info?.proficiency == "no-experience-interested"
            ? "No experience, but interested"
            : skill?.info?.proficiency.charAt(0).toUpperCase() +
              skill?.info?.proficiency.slice(1)}
        </Typography>
        <Typography
          variant="body"
          sx={{
            color: "rgba(255,255,255, 0.9)",
            fontWeight: "lighter",
          }}
        >
          Recommendations : {skill?.info?.recommendations}
        </Typography>
      </Box>
      <Accordion
        sx={{
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "rgba(0,0,0,.4)",
          }}
        >
          <Typography
            sx={{
              color: "#ffddcc",
              fontWeight: "lighter",
              textTransform: "uppercase",
            }}
          >
            Related experiences
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "rgba(0,0,0, .1)",
            py: 2,
            color: "white",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {skill?.relatedInfo?.relatedExperiences.map((experience) => (
              <Grid item xs={6}>
                <Card
                  sx={{
                    backgroundColor: "rgba(0,0,0,.7)",
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {experience?.organizations[0]?.name || "Unavailable"} (
                      {experience?.category || "Unavailable"})
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      color="rgba(209, 223, 73, .8)"
                    >
                      {experience?.name || "Unavailable"}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      From {experience?.fromMonth || "Unavailable"},{" "}
                      {experience?.fromYear || "Unavailable"} to{" "}
                      {experience?.toMonth || "Unavailable"},{" "}
                      {experience?.toYear || "Unavailable"}
                    </Typography>
                    <Typography variant="body2">
                      {experience?.remote ? "Remote" : "On-site"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "rgba(0,0,0,.4)",
          }}
        >
          <Typography
            sx={{
              color: "#ffddcc",
              fontWeight: "lighter",
              textTransform: "uppercase",
            }}
          >
            People with same skill
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "rgba(0,0,0, .1)",
            py: 2,
            color: "white",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {skill?.relatedUsers?.results.map((result) => (
              <Grid item xs={6}>
                <Card
                  sx={{
                    backgroundColor: "rgba(0,0,0,.7)",
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Link
                      href={`https://torre.co/${result?.username}`}
                      underline="hover"
                      variant="h5"
                    >
                      {result?.name || "Unavailable"}
                    </Link>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {result?.professionalHeadline || "Unavailable"}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {result?.locationName || "Unavailable"}
                    </Typography>
                    <Typography variant="body2">
                      Username: {result?.username || "Unavailable"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SkillInfo;
