import React, { useEffect, useState } from 'react';

import PostService from './api/PostService';
import { usePosts } from './hooks/usePosts';

import Posts from './components/Posts';
import PostsFilter from './components/PostsFilter';
import Modal from './components/Modal';
import AddPostForm from './components/AddPostForm';
import Loader from './components/UI/Loader';
import { useFetching } from './hooks/useFetching';


function App () {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modalActive, setModalActive] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = PostService.getAll()
    setPosts(await posts)
  })

  function onSubmit (newPost) {
    setPosts([...posts, newPost])
    setModalActive(false)
  }

  function deletePost (id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <PostsFilter filter={filter} setFilter={setFilter} setModalActive={setModalActive} />
        <hr />
        {postsError && <h2>Posts fetching error</h2>}
        {isPostsLoading
        ? <Loader width="140px" height="140px" />
        : <Posts posts={sortedAndSearchedPosts} title="Some Index" deletePost={deletePost} />
        }
        <Modal type="add-post" width="500px" active={modalActive} setActive={setModalActive}>
          <AddPostForm onSubmit={onSubmit} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
