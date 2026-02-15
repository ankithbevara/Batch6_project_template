/**
 * api/client.ts
 * This file sets up an Axios instance for making API calls to the backend server.
 * The baseURL is configured to point to the local development server at http://localhost:8000.
 * This allows us to easily make requests to our backend API throughout the application by importing this client.
 */
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
});