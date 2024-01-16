import axios from 'axios';
import api from './api';


export async function getAll() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOne(id: string) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getByName(name: string) {
  try {
    const response = await api.get(`/users?name=${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function create(data: any) {
    console.log(data)
  try {
    const response = await api.post('/users', data);
    return response
  } catch (error) {
    console.log(error);
  }
}

export async function update(id: string, data: any) {
  try {
    const response = await axios.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function remove(id: string) {
  try {
    const response = await axios.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

