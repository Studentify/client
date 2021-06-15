import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "state/rootReducer";
import { logout } from "state/auth/actions";

import { CustomLink, LogoutLink, Nav, NavList, StyledMenuIcon } from "./Navigation-styles";

const Navigation: React.FC = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const user = useSelector((state: StoreState) => state.auth.user);

	return (
		<Nav>
			<CustomLink to="/home" onClick={() => setIsOpen(!isOpen)}>
				<h1>Studentify</h1>
			</CustomLink>

			<div>
				<StyledMenuIcon onClick={() => setIsOpen(!isOpen)}>
					<MenuIcon />
				</StyledMenuIcon>

				<NavList open={isOpen}>
					<li>
						<CustomLink to="/threads" onClick={() => setIsOpen(!isOpen)}>
							Messages
						</CustomLink>
					</li>
					<li>
						<CustomLink
							to={user ? `/profile/${user.id}` : "/home"}
							onClick={() => setIsOpen(!isOpen)}
						>
							Profile
						</CustomLink>
					</li>
					<li>
						<LogoutLink
							to="/"
							onClick={() => {
								dispatch(logout());
								setIsOpen(!isOpen);
							}}
						>
							Log out
						</LogoutLink>
					</li>
				</NavList>
			</div>
		</Nav>
	);
};

export default Navigation;
