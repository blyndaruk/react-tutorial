import React, { useState } from 'react';
import Posts from './components/Posts';
import PostsFilter from './components/PostsFilter';
import Modal from './components/Modal';
import AddPostForm from './components/AddPostForm';
import { usePosts } from './hooks/usePosts';

function App () {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First title', description: 'Best description' },
    { id: 2, title: 'Second title2', description: 'Test description' },
    { id: 3, title: 'Third title3', description: 'West description' },
    { id: 4, title: 'www title4', description: 'Cest description' },
    { id: 5, title: 'Aaa title4', description: 'Cest description' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modalActive, setModalActive] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  function onSubmit (newPost) {
    setPosts([...posts, newPost])
    setModalActive(false)
  }

  function deletePost (id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <PostsFilter filter={filter} setFilter={setFilter} setModalActive={setModalActive} />
        <hr />
        <Posts posts={sortedAndSearchedPosts} title="Some Index" deletePost={deletePost} />
        <Modal type="add-post" width="500px" active={modalActive} setActive={setModalActive}>
          <AddPostForm onSubmit={onSubmit} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
