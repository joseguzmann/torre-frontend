import { useLoading } from "../../context/loading.context";
import { useSkill } from "../../context/skill.context";
import { useUser } from "../../context/user.context";

import { Chip } from "@mui/material";

import { useProficiency } from "../../context/proficiency.context";
import {
  fetchRelatedExperiences,
  fetchUsersWithSimilarSkill,
} from "../../lib/api";
import "./ProficientSkill.css";

const ProficientSkill = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { loading, setLoading } = useLoading();
  const { proficiency, setProficiency } = useProficiency();

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
    <div className="inside-div inside-div-2">
      <div className="header dashboard-header">
        <span className="span">{`${proficiency} Skills`}</span>
        <Chip
          label="CLEAR PROFICIENCY"
          component="a"
          variant="outlined"
          clickable
          onClick={() => {
            setProficiency(null);
          }}
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(255, 255, 255, 0.9)",
          }}
        />
      </div>
      {user?.strengths.filter((strength) => strength.proficiency == proficiency)
        .length > 0 ? (
        <>
          <div className="legend-2 legend-2-select">
            <span className="normal-text">
              Please, select a skill you want to explore
            </span>
          </div>
          <div className="content content-dashboard">
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
          </div>
        </>
      ) : (
        <div className="legend-2 legend-2-select legend-2-not-found">
          <span className="normal-text">
            There are no skills on this proficiency level
          </span>
        </div>
      )}
    </div>
  );
};

export default ProficientSkill;
