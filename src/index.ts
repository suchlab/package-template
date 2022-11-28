import { default as requestHelper, RequestParameters } from './helpers/request.js';

export default class Package {
	apiKey: string;
	headers: object;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.headers = {
			'Authorization': `Bearer ${this.apiKey}`,
			'Content-Type': 'application/json',
		};
	}

	// Utils
	async request(path: string = '', parameters: RequestParameters = {}) {
		return await requestHelper({
			method: parameters?.method || 'get',
			url: `${path}`,
			headers: this.headers,
			...parameters,
		});
	}

	// Scope
	public readonly scope1 = {
		create: async (parameters: object = {}): Promise<any> => {
			const result = await this.request('/scope1', { method: 'post', data: parameters });
			return result?.server || result;
		},
	};
};
