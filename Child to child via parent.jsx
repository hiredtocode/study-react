//Child to Child with Parent

function Display({ number }) {
	return <div>{number}</div>;
}

function Dice({ callback }) {
	return <button onClick={() => callback(Math.floor(Math.random() * 6) + 1)}>Roll Dice</button>;
}

function Parent() {
	const [number, setNumber] = React.useState(1);

	return (
		<div className="app">
			<Display number={number} />
			<Dice callback={setNumber} />
		</div>
	);
}
