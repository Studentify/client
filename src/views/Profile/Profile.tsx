import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "api/axiosInstance";

import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import { AccountCircle as AccountCircleIcon, Settings as SettingsIcon } from "@material-ui/icons";

import { updateUser } from "state/auth/actions";
import { StoreState } from "state/rootReducer";
import { EventList, Skills, ModifyAccountForm } from "./components";
import { Avatar, ProfileLayout, Grid, GridELement, Content, UserNameBox } from "./Profile-styles";

interface ParamType {
	userId: string;
}

const Profile: React.FC = () => {
	const dispatch = useDispatch();
	const { userId } = useParams<ParamType>();
	const inspectedUserId = parseInt(userId);

	const ownerUserData = useSelector((state: StoreState) => state.auth.user);
	const isAccountOwner = inspectedUserId === ownerUserData?.id;

	const [isEditAccountModal, setIsEditAccountModal] = useState(false);
	const [userData, setUserData] = useState<User>({
		id: -1,
		userName: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	useEffect(() => {
		fetchUserData(inspectedUserId);
	}, [inspectedUserId]);

	async function fetchUserData(id: number) {
		try {
			const res = await axios.get<User>(`/StudentifyAccounts/${id}`);
			setUserData(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
		}
	}

	async function refreshUserData(id: number) {
		try {
			const res = await fetchUserData(id);
			if (res) {
				dispatch(updateUser({ ...res }));
			}
		} catch (err) {
			console.log(err);
		}
	}

	const openEditAccountModal = () => {
		setIsEditAccountModal(true);
	};

	const closeEditAccountModal = () => {
		setIsEditAccountModal(false);
	};

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
							{isAccountOwner ? (
								<IconButton onClick={openEditAccountModal}>
									<SettingsIcon />
								</IconButton>
							) : null}
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
						<Skills userId={inspectedUserId} isAccountOwner={isAccountOwner} />
					</Content>
				</Grid>
				<Grid item xs={12}>
					<EventList userId={inspectedUserId} isAccountOwner={isAccountOwner} />
				</Grid>
			</Grid>

			{/* line 103 is temporary -> ownerUserData cannot be undefined here */}
			{ownerUserData ? (
				<Modal open={isEditAccountModal} onClose={closeEditAccountModal}>
					<ModifyAccountForm
						closeModal={closeEditAccountModal}
						refreshUserData={refreshUserData}
						currentData={ownerUserData}
					/>
				</Modal>
			) : null}
		</ProfileLayout>
	);
};

export default Profile;
