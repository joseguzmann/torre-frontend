import { useLoading } from "../../context/loading.context";
import { useSkill } from "../../context/skill.context";
import { useUser } from "../../context/user.context";

import { Chip, Typography, Link } from "@mui/material";

import "./SkillDetails.css";
import { useProficiency } from "../../context/proficiency.context";
import {
  fetchRelatedExperiences,
  fetchUsersWithSimilarSkill,
} from "../../lib/api";
import { Avatar } from "../../../node_modules/@mui/material/index";

const SkillDetails = () => {
  const { user, setUser } = useUser();
  const { skill, setSkill } = useSkill();
  const { loading, setLoading } = useLoading();
  const { proficiency, setProficiency } = useProficiency();

  return (
    <div className="inside-div inside-div-2">
      <div className="header dashboard-header">
        <span className="span">{`${skill.info.name} details`}</span>
        <Chip
          label="CLEAR SKILL"
          component="a"
          variant="outlined"
          clickable
          onClick={() => {
            setSkill(null);
          }}
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(255, 255, 255, 0.9)",
          }}
        />
      </div>
      <div className="legend-2 legend-2-recommend">
        <span className="normal-text">
          Proficiency:{" "}
          {skill?.info?.proficiency == "no-experience-interested"
            ? "No experience, but interested"
            : skill?.info?.proficiency.charAt(0).toUpperCase() +
              skill?.info?.proficiency.slice(1)}
        </span>
        <span className="normal-text">
          Recomendations : {skill?.info?.recomendations || "0"}
        </span>
      </div>
      <div className="legend-1-details">
        <span>Job experience:</span>
      </div>
      <div className="content content-dashboard">
        <div className="list-flexbox">
          {skill?.relatedInfo?.relatedExperiences.length > 0 ? (
            <>
              {skill?.relatedInfo?.relatedExperiences.map((experience) => (
                <>
                  <div className="flex-item">
                    <span className="text1">
                      {experience?.organizations[0]?.name || "Unavailable"} (
                      {experience?.category || "Unavailable"})
                    </span>
                    <br />
                    <span className="text2">
                      {experience?.name || "Unavailable"}
                    </span>
                    <br />
                    <span className="text3">
                      From {experience?.fromMonth || "Unavailable"},{" "}
                      {experience?.fromYear || "Unavailable"} to{" "}
                      {experience?.toMonth || "Unavailable"},{" "}
                      {experience?.toYear || "Unavailable"}
                    </span>
                    <br />
                    <span className="text4">
                      {experience?.remote ? "Remote" : "On-site"}
                    </span>
                  </div>
                </>
              ))}
            </>
          ) : (
            <span className="normal-text">
              There are no experiences with this skill
            </span>
          )}
        </div>
      </div>
      <div className="legend-1-details">
        <span>People with same skill proficiency:</span>
      </div>
      <div className="content content-dashboard">
        <div className="list-flexbox">
          {skill?.relatedUsers?.results.length > 0 ? (
            <>
              {skill?.relatedUsers?.results.map(
                (result) =>
                  result.username != user.person.publicId && (
                    <>
                      <div className="flex-item">
                        <img
                          alt="User profile"
                          className="profile-picture"
                          src={result?.picture}
                        />
                        <br />
                        <span className="text1">
                          <Link
                            href={`https://torre.co/${result?.username}`}
                            underline="hover"
                            variant="h5"
                          >
                            {result?.name || "Unavailable"}
                          </Link>
                        </span>
                        <br />
                        <span className="text2">
                          {result?.professionalHeadline || "Unavailable"}
                        </span>
                        <br />
                        <span className="text3">
                          {result?.locationName || "Unavailable"}
                        </span>
                        <br />
                        <span className="text4">
                          Username: {result?.username || "Unavailable"}
                        </span>
                      </div>
                    </>
                  )
              )}
            </>
          ) : (
            <span className="normal-text">
              There are no experiences with this skill
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
