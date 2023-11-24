export async function load({ fetch }) {
	const response = await fetch('https://api.ipify.org?format=json');
	console.log(response);
	const info = await response.json();
	console.log(info);
	return {
		info
	};
}
