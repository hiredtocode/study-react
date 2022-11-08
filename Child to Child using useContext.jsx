//Child to Child using useContext

const CountContext = React.createContext();

const Counter2 = () => {
	const { count, onIncrement, onDecrement } = React.useContext(CountContext);

	return (
		<div className="container">
			<div className="display">{count}</div>
			<div>
				<button onClick={onIncrement}></button>
				<button onClick={onDecrement}></button>
				<ADeeperComponent />
			</div>
		</div>
	);
};

const ADeeperComponent = () => {
	const { count } = React.useContext(CountContext);

	return (
		<>
			<div> A Deeper Component: {count}</div>
		</>
	);
};

const App = () => {
	const [count, setCount] = React.useState(0);

	const onIncrement = () => {
		setCount(count + 1);
	};
	const onDecrement = () => {
		setCount(count - 1);
	};
	return (
		<CountContext.Provider value={{ count, onIncrement, onDecrement }}>
			<Counter2 />
		</CountContext.Provider>
	);
};
