import axios from 'axios';

export default class PostService {
  static async getAll () {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return result?.data || []
  }

  static async getPage ({ page, limit = 10 }) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    })
    return { data: result?.data || [], count: result.headers['x-total-count'] }
  }

  static async getPost (id) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        id,
      },
    })
    return result?.data || []
  }

  static async getPostComments (id) {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return result?.data || []
  }
}
