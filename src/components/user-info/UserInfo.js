import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useLoading } from "../../context/loading.context";
import { useSkill } from "../../context/skill.context";
import { useUser } from "../../context/user.context";
import {
  fetchRelatedExperiences,
  fetchUsersWithSimilarSkill,
} from "../../lib/api";

const UserInfo = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { loading, setLoading } = useLoading();

  const proficiencyList = [
    "master",
    "expert",
    "proficient",
    "novice",
    "no-experience-interested",
  ];

  const selectSkill = async (skill) => {
    setLoading(true);
    try {
      const relatedExperiencesData = await fetchRelatedExperiences(
        user?.person?.publicId,
        skill.id
      );
      const relatedUsersData = await fetchUsersWithSimilarSkill(
        skill?.name,
        skill?.proficiency
      );
      const newSkillObject = {
        info: skill,
        relatedInfo: relatedExperiencesData,
        relatedUsers: relatedUsersData,
      };
      setSkill(newSkillObject);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      {proficiencyList.map((proficiency, index) => (
        <Accordion
          sx={{
            backgroundColor: "rgba(0,0,0,0)",
          }}
          key={index}
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
              {proficiency == "no-experience-interested"
                ? "NO EXPERIENCE, BUT INTERESTED"
                : proficiency.toUpperCase()}
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
            {user?.strengths.filter(
              (strength) => strength.proficiency == proficiency
            ).length > 0 ? (
              <>
                {user?.strengths
                  .filter((strength) => strength.proficiency == proficiency)
                  .map((strength, index, array) => (
                    <Chip
                      label={strength.name}
                      component="a"
                      variant="outlined"
                      key={strength.id}
                      clickable
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        borderColor: "rgba(255, 255, 255, 0.9)",
                        m: 1,
                      }}
                      onClick={() => selectSkill(strength)}
                    />
                  ))}
              </>
            ) : (
              <Typography
                variant="body"
                sx={{
                  color: "rgba(255,255,255, 0.9)",
                  fontWeight: "lighter",
                }}
              >
                Empty
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UserInfo;
