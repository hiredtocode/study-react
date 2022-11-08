// Child to Parent

function Child({ callback }) {
	const data = 1234;

	return <button onClick={() => callback(data)}>Pass data to Parent Component</button>;
}

function Parent() {
	const callThisFromChildComponent = (value) => {
		console.log(`Child passed in ${value}`);
	};

	return <Child callback={callThisFromChildComponent} />;
}
