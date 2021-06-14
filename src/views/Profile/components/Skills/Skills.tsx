import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import { List, SkillsHeader, SkillsWrapper } from "./Skills-styles";
import { SkillElement } from "./SkillElement";
import SkillForm from "./SkillForm";

interface SkillsProps {
	userId: number;
	isAccountOwner: boolean;
}

const Skills: React.FC<SkillsProps> = ({ userId, isAccountOwner }) => {
	const [skills, setSkills] = useState<Skill[]>([]);

	async function fetchUserSkills(id: number) {
		try {
			const res = await axios.get<Skill[]>(`/StudentifyAccounts/Skills?id=${id}`);
			setSkills(res.data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchUserSkills(userId);
	}, [userId]);

	return (
		<SkillsWrapper>
			<div>
				<SkillsHeader>
					<h1>Skills</h1>
				</SkillsHeader>
				<hr />
				<br />

				<List>
					{skills.map((skill) => (
						<SkillElement skillData={skill} key={skill.id} />
					))}
				</List>
			</div>
			<br />
			<hr />
			<br />
			<div>
				{isAccountOwner ? null : <SkillForm ownerId={userId} fetchUserSkills={fetchUserSkills} />}
			</div>
		</SkillsWrapper>
	);
};

export default Skills;
