import constants from '../constants';

class TodosService {
	url = constants.apiUrl;
	apiKey = constants.apiKey;

	async getTodos() {
		const endpoint = "todos/all";
		try {
			const response = await fetch(`${this.url}/${endpoint}/6383e670bef7c500081168c0`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: this.apiKey,
				}
			});

			if (!response.ok) {
				throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
			}

			const json = await response.json();

			if (json.success) {
				return json.data;
			} else {
				throw new Error(`Could not fetch ${this.endpoint}, received ${json.message}`);
			}
		} catch (error) {
			console.error(error);

			return [];
		}
	}
}

export default TodosService;