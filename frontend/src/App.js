// Modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Sidebar, { SidebarItem, SidebarGroup } from "./components/Sidebar";

function App() {
	return (
		<Router>
			<Sidebar title="Avocado">
				<SidebarItem label="Inbox" target="/" />
				<SidebarGroup name="Collections">
					<SidebarItem label="Fun" target="/collection/fun" />
					<SidebarItem label="Dev" target="/collection/dev" />
					<SidebarItem label="Cooking" target="/collection/cooking" />
				</SidebarGroup>
			</Sidebar>

			<div className="main-content">
				<Routes>
					<Route path="/" element="inbox" />
					<Route path="/collection/:name" element="collection" />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
