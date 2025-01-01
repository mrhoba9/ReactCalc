import { ACTIONS } from "./calc.jsx";

export default function DigitButton({ dispatch, digit }) {
	return (
		<button
			onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
		>
			{digit}
		</button>
	);
}
