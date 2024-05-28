import axios from "axios";

const client = axios.create({ baseURL: "http://192.168.46.190:4848/api" });

export default client;
