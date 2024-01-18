import axios from 'axios';
import api from './api';
import { User } from 'next-auth';


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
    const response = await api.get(`/users/${id}`);
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

export async function getByEmail(email: string) {
  try {
    const response = await api.post(`/users/email/${email}`);
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
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export async function login(data:any) {
  try{
    const response = await api.post('/users/login', data)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function updateTask(id: string, data: any) {
  try {
    const response = await api.patch(`/tasks/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export async function removeTask(id:string) {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

export async function createTask(data: any) {
  try {
    const response = await api.post('/tasks', data);
    return response
  } catch (error) {
    console.log(error);
  }
}