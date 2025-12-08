import client from '../client';

export const boardApi = {
  getList: async (category) => client.get('/posts', { params: { category } }),
  getDetail: async (id) => client.get(`/posts/${id}`),
  createPost: async (data) => client.post('/posts', data),
  updatePost: async (id, data) => client.put(`/posts/${id}`, data),
  deletePost: async (id) => client.delete(`/posts/${id}`),
};