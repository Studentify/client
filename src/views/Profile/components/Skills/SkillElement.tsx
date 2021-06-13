import React from "react";

import { SkillElementWrapper } from "./Skills-styles";

interface SkillElementProps {
	skillData: Skill;
}

export const SkillElement: React.FC<SkillElementProps> = ({ skillData }) => {
	return <SkillElementWrapper key={skillData.id}>{skillData.name}</SkillElementWrapper>;
};
