import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
}

const createPerson = (personObject) => {
	const request = axios.post(baseUrl, personObject);
	return request.then(response => response.data);
}

const deletePerson = (id) => {
	return axios.delete(`http://localhost:3001/persons/${id}`)
}

const updateNumber = (person) => {
	const request = axios.put(`${baseUrl}/${person.id}`, person)
	return request.then(response => response.data);
}

export default { getAll, createPerson, deletePerson, updateNumber }