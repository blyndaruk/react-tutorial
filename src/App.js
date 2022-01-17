import React, { useEffect, useState } from 'react';

import PostService from './api/PostService';
import { getPagesCount } from './utils/pages';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';

import Posts from './components/Posts';
import PostsFilter from './components/PostsFilter';
import Modal from './components/Modal';
import AddPostForm from './components/AddPostForm';
import Loader from './components/UI/Loader';
import Pagination from './components/UI/Pagination';


function App () {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [postsTotalPages, setPostsTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPerPage] = useState(10)

  const [modalActive, setModalActive] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const postsData = await PostService.getPage({ page: currentPage, limit: limitPerPage })
    const posts = postsData.data
    const totalCount = postsData.count
    setPostsTotalPages(getPagesCount(totalCount, limitPerPage))
    setPosts(posts)
  })

  function onSubmit (newPost) {
    setPosts([...posts, newPost])
    setModalActive(false)
  }

  function deletePost (id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  function updatePage (current) {
    console.log(current);
    setCurrentPage(current)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  return (
    <div className="App">
      <div className="container">
        <PostsFilter filter={filter} setFilter={setFilter} setModalActive={setModalActive} />
        <hr />
        {postsError && <h2>Posts fetching error</h2>}
        {isPostsLoading
          ? <Loader width="120px" height="120px" />
          : <Posts posts={sortedAndSearchedPosts} title="Some Index" deletePost={deletePost} />
        }
        {currentPage}
        <Pagination updatePage={updatePage} totalPages={postsTotalPages} />
        <Modal type="add-post" width="500px" active={modalActive} setActive={setModalActive}>
          <AddPostForm onSubmit={onSubmit} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
