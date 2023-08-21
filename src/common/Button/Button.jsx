import 'common/Button/button.css';

export function Button(props) {
	return (
		<button class='button' onClick={props.handleClick}>
			{props.text}
		</button>
	);
}
