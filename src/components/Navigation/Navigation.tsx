import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";

import { logout } from "state/auth/actions";

import { CustomLink, LogoutLink, Nav, NavList, StyledMenuIcon } from "./Navigation-styles";

const Navigation: React.FC = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Nav>
			<CustomLink to="/" onClick={() => setIsOpen(!isOpen)}>
				<h1>Studentify</h1>
			</CustomLink>

			<div>
				<StyledMenuIcon onClick={() => setIsOpen(!isOpen)}>
					<MenuIcon />
				</StyledMenuIcon>

				<NavList open={isOpen}>
					<li>
						<CustomLink to="/friends" onClick={() => setIsOpen(!isOpen)}>
							Messages
						</CustomLink>
					</li>
					<li>
						<CustomLink to="/profile" onClick={() => setIsOpen(!isOpen)}>
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
