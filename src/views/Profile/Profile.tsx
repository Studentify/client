import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "api/axiosInstance";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { StoreState } from "state/rootReducer";
import { EventList, Skills } from "./components";
import { Avatar, ProfileLayout, Grid, GridELement, Content, UserNameBox } from "./Profile-styles";

interface ParamType {
	userId: string;
}

const Profile: React.FC = () => {
	const { userId } = useParams<ParamType>();
	const inspectedUserId = parseInt(userId);

	const ownerUserData = useSelector((state: StoreState) => state.auth.user);

	const [userData, setUserData] = useState<User>({
		id: -1,
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	useEffect(() => {
		fetchUserData(inspectedUserId);

		async function fetchUserData(id: number) {
			try {
				const res = await axios.get<User>(`/StudentifyAccounts/${id}`);
				setUserData(res.data);
			} catch (err) {
				console.log(err);
			}
		}
	}, [userId]);

	return (
		<ProfileLayout>
			<Grid container>
				<GridELement item xs={12} sm={6}>
					<Avatar>
						<AccountCircleIcon style={{ fontSize: 200 }} />
					</Avatar>
				</GridELement>
				<GridELement item xs={12} sm={6}>
					<Content>
						<UserNameBox>
							<h1>{userData.userName}</h1>
						</UserNameBox>
						<br />
						<hr />
						<br />
						<h3>{userData.firstName + " " + userData.lastName}</h3>
						<br />
						<h3>{userData.email}</h3>
					</Content>
				</GridELement>
				<Grid xs={12} item>
					<Content>
						<Skills
							userId={inspectedUserId}
							isAccountOwner={inspectedUserId === ownerUserData?.id}
						/>
					</Content>
				</Grid>
				<Grid item xs={12}>
					<EventList
						userId={inspectedUserId}
						isAccountOwner={inspectedUserId === ownerUserData?.id}
					/>
				</Grid>
			</Grid>
		</ProfileLayout>
	);
};

export default Profile;
