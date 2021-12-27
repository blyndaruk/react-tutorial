import React, { useMemo, useState } from 'react';
import Posts from './components/Posts';
import PostsFilter from './components/PostsFilter';
import Modal from './components/Modal';
import AddPostForm from './components/AddPostForm';

function App () {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Afasf title', description: 'Best description' },
    { id: 2, title: 'Ladgadg title2', description: 'Test description' },
    { id: 3, title: 'Casgas title3', description: 'West description' },
    { id: 4, title: 'Some title4', description: 'Cest description' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modalActive, setModalActive] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
      || post.description.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])

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
