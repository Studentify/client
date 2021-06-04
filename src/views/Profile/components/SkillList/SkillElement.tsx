import React from "react";

import { makeStyles, createStyles, withStyles, Theme } from "@material-ui/core/styles";
import CircularProgress, { CircularProgressProps } from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Skill } from "./types";

const ProgressBar = withStyles((theme: Theme) =>
	createStyles({
		root: {
			height: 10,
			borderRadius: 5,
		},
		colorPrimary: {
			backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
		},
		bar: {
			borderRadius: 5,
			backgroundColor: "#1a90ff",
		},
	})
)(LinearProgress);

interface SkillElementProps {
	skill: Skill;
}

const SkillElement: React.FC<SkillElementProps> = ({ skill }) => {
	return <></>;
};
