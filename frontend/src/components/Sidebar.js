// Modules
import React from "react";

// Style
import "../assets/styles/sidebar.scss";

function Sidebar({ title }) {
	return (
		<div className="sidebar">
			<div class="sidebar__head">
				<div class="sidebar__title">{title}</div>
			</div>
			<div class="sidebar__body"></div>
		</div>
	);
}

export default Sidebar;
