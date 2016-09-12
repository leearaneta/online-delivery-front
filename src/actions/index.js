const globalConfig = {
	API: `https://localhost:3000/api/v1`,
	header: {
		headers: {Authorization: sessionStorage.jwtToken}
	}
}

export default globalConfig