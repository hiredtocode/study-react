// Passing data from Parent to Child

function Child(props) {
	// 2. here it'll receive the names passed down from Parent component through props
	return <div>{props.name}</div>;
}

function Parent() {
	return (
		/* 1. Here, we're sending name through the 'name' props to Child component */
		<div>
			<Child name="Chris" />
			<Child name="Alan" />
			<Child name="Jay" />
		</div>
	);
}
