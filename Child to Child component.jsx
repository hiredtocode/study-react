//Child to Child

const counter = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
};

const Counter = () => {
	const onIncrement = () => store.dispatch({ type: "INCREMENT" });
	const onDecrement = () => store.dispatch({ type: "DECREMENT" });

	return (
		<div className="container">
			<div className="display">{store.getState()}</div>
			<div>
				<button onClick={onIncrement}></button>
				<button onClick={onDecrement}></button>
				<button></button>
			</div>
		</div>
	);
};
