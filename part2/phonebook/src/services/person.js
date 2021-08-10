import axios from "axios";

const baseUrl = "/api/people";
const request = axios.get(baseUrl);

const getAll = () => {
    return request.then((response) => response.data);
};

const createPerson = (personObject) => {
    const request = axios.post(baseUrl, personObject);
    return request.then((response) => response.data);
};

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

const updateNumber = (person) => {
    const request = axios.put(`${baseUrl}/${person.id}`, person);
    return request.then((response) => response.data);
};

export default { getAll, createPerson, deletePerson, updateNumber };
