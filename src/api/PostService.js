import axios from 'axios';

export default class PostService {
  static async getAll () {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return result?.data || []
  }
}
