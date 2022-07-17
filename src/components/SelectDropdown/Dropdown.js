import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Dropdown = ({ dropdownList = [], onChange }) => {
	const [selectedItem, setSelectedItem] = React.useState("");

	const handleChange = (event) => {
		const val = event.target.value;
		setSelectedItem(val);
		onChange(val);
	};

	return (
		<>
			<FormControl variant="standard" style={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-standard-label">Sort By</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={selectedItem}
					onChange={handleChange}
					label="Age">
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{dropdownList.map((i) => (
						<MenuItem key={i.value} name={i.label} value={i.value}>
							{i.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default Dropdown;
