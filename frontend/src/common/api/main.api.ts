export const MAIN_URL = 'http://127.0.0.1:8000';

async function makeRequest<T>(request: IRequest, method: string): Promise<T> {
	let url = `${MAIN_URL}/${request.endpoint}`;

	if (request.params)
		Object.keys(request.params).forEach((param, ind) => {
			url += `${ind === 0 ? '?' : '&'}${param}=${request.params[param]}`;
		});

	const headers = {
		'Content-Type': 'application/json',
		...request.headers
	} as unknown as Headers;

	try {
		return fetch(url, {
			method: method,
			headers: headers,
			body: request.data ? JSON.stringify(request.data) : null
		}).then(res => {
			if (res.ok) return res.json();
			else {
				// TODO: Get Error
			}
		});
	} catch (e) {
		console.log(e);
	}
}

export async function get<T>(request: IRequest): Promise<T> {
	return await makeRequest(request, 'GET');
}

export async function patch<T>(request: IRequest): Promise<T> {
	return await makeRequest(request, 'PATCH');
}

export async function post<T>(request: IRequest): Promise<T> {
	return await makeRequest(request, 'POST');
}

export async function del<T>(request: IRequest): Promise<T> {
	return await makeRequest(request, 'DELETE');
}
