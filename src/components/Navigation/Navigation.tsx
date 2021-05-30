import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { CustomLink, LogoutLink, Nav, NavList, StyledMenuIcon } from "./Navigation-styles";

const Navigation = () => {
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
						<LogoutLink to="/" onClick={() => setIsOpen(!isOpen)}>
							Log out
						</LogoutLink>
					</li>
				</NavList>
			</div>
		</Nav>
	);
};

export default Navigation;
