import React, { useState } from "react";
import axios from "api/axiosInstance";

import { SkillFormWrapper, SkillInput } from "./Skills-styles";
import { Button } from "@material-ui/core";

interface SkillFormProps {
	ownerId: number;
	fetchUserSkills: (id: number) => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ ownerId, fetchUserSkills }) => {
	const [newSkill, setNewSkill] = useState<string>("");

	async function handleAddNewSkill() {
		setNewSkill("");

		try {
			await axios.post("/StudentifyAccounts/Skills", {
				name: newSkill,
				rate: 0,
				ownerId: ownerId,
			});
			fetchUserSkills(ownerId);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<SkillFormWrapper>
			<SkillInput
				type="text"
				value={newSkill}
				onChange={(e) => setNewSkill(e.target.value)}
				placeholder={"New Skill"}
			/>
			<Button variant="contained" color="primary" onClick={handleAddNewSkill}>
				Add Skill
			</Button>
		</SkillFormWrapper>
	);
};

export default SkillForm;
