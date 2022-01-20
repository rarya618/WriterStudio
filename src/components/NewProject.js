import { getClassCode } from "../App";

const NewProject = props => {
	var color = props.color;
	var darkTheme = getClassCode("", props.isDarkTheme);

	return (
		<div className="container row spaced-small no-select">
			<div className={"text-box round-5px " + darkTheme + " flat-spaced"}>
				<input className="inner-text-box absolute push-left transparent left" type="text" placeholder="Project Name"/>
				<select 
					className={"label dropdown round-5px " + darkTheme + "-color absolute left " + color + " no-border"}
					onChange={e => props.changeColor(e.target.value)}>
					<option value="Screenplay" selected>Screenplay</option>
					<option value="Teleplay">Teleplay</option>
					<option value="Series">Series</option>
				</select>
			</div>
			<button className={"button " + color + " " + darkTheme + "-color " + color + "-border round-5px small-spaced"}>Create</button>
		</div>
	);
}

export default NewProject;