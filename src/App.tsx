import { useState } from "react";
import styles from "./styles/App.module.scss";
import ToolbarDemo from "./primitives/ToolBarDemo";
import Sidebar from "./primitives/Sidebar";

function App() {

	return (
		<>
			<div className={styles.App}>
				<ToolbarDemo/>
				<Sidebar/>
			</div>
		</>
	);
}

export default App;
