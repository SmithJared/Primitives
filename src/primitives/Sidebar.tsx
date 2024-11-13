import { useEffect, useState } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
	StrikethroughIcon,
	TextAlignLeftIcon,
	TextAlignCenterIcon,
	TextAlignRightIcon,
	FontBoldIcon,
	FontItalicIcon,
} from "@radix-ui/react-icons";
import styles from "../styles/Sidebar.module.scss";

const Sidebar = () => {
	const [isVisible, setIsVisible] = useState(false);

	const threshold = 70; // The distance from the top of the screen where the menu appears

	// Set up the event listener when the component mounts
	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (event.clientX <= threshold) {
				setIsVisible(true); // Show the menu
			} else {
				setIsVisible(false); // Hide the menu
			}
		};
		document.addEventListener("mousemove", handleMouseMove);

		// Cleanup event listener when the component unmounts
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.Sidebar}>
			<Toolbar.Root
				className={styles.Root}
				orientation="vertical"
				data-visible={isVisible}
				aria-label="Formatting options"
			>
				<Toolbar.ToggleGroup
					className={styles.ToggleGroup}
					type="multiple"
					aria-label="Text formatting"
				>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="bold"
						aria-label="Bold"
					>
						<FontBoldIcon />
					</Toolbar.ToggleItem>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="italic"
						aria-label="Italic"
					>
						<FontItalicIcon />
					</Toolbar.ToggleItem>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="strikethrough"
						aria-label="Strike through"
					>
						<StrikethroughIcon />
					</Toolbar.ToggleItem>
				</Toolbar.ToggleGroup>
				<Toolbar.Separator className={styles.Separator} orientation="horizontal" />
				<Toolbar.ToggleGroup
					type="single"
					defaultValue="center"
					aria-label="Text alignment"
					className={styles.ToggleGroup}
				>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="left"
						aria-label="Left aligned"
					>
						<TextAlignLeftIcon />
					</Toolbar.ToggleItem>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="center"
						aria-label="Center aligned"
					>
						<TextAlignCenterIcon />
					</Toolbar.ToggleItem>
					<Toolbar.ToggleItem
						className={styles.ToggleItem}
						value="right"
						aria-label="Right aligned"
					>
						<TextAlignRightIcon />
					</Toolbar.ToggleItem>
				</Toolbar.ToggleGroup>
				<Toolbar.Separator className={styles.Separator} />
				<Toolbar.Button
					className={styles.Button}
					style={{ marginLeft: "auto" }}
				>
					Share
				</Toolbar.Button>
			</Toolbar.Root>
		</div>
	);
};

export default Sidebar;
