// Modules
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Style
import "../assets/styles/sidebar.scss";

export default function Sidebar({ title, children }) {
	return (
		<div className="sidebar">
			<div className="sidebar__head">
				<div className="sidebar__title">{title}</div>
			</div>
			<div className="sidebar__body">{children}</div>
		</div>
	);
}

export function SidebarGroup({ name, dropdown, children }) {
	const [toggled, setToggled] = useState(false);

	return (
		<div className="sidebar__group">
			<div
				className={"sidebar__group__head" + (toggled ? " active" : "")}
				onClick={() => setToggled(!toggled)}
			>
				<div className="sidebar__group__name">{name}</div>
				<div className="sidebar__group__expand material-icons">expand_more</div>
			</div>
			<div className={"sidebar__group__items" + (toggled ? " expanded" : "")}>{children}</div>
		</div>
	);
}

export function SidebarItem({ label, target }) {
	return (
		<Link to={target}>
			<div className="sidebar__item">{label}</div>
		</Link>
	);
}
