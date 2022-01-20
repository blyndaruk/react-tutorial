import React, { useEffect, useRef, useState } from 'react';

import PostService from '../api/PostService';
import { getPagesCount } from '../utils/pages';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { useObserver } from '../hooks/useObserver';

import Posts from '../components/Posts';
import PostsFilter from '../components/PostsFilter';
import Modal from '../components/Modal';
import AddPostForm from '../components/AddPostForm';
import Loader from '../components/UI/Loader';
import Pagination from '../components/UI/Pagination';
import BaseSelect from '../components/UI/BaseSelect';


function PostsPage () {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [postsTotalPages, setPostsTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limitPerPage, setLimitPerPage] = useState(10)

  const [modalActive, setModalActive] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const lastPost = useRef()

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const postsData = await PostService.getPage({ page: currentPage, limit: limitPerPage })
    const newPosts = postsData.data
    const totalCount = postsData.count
    setPostsTotalPages(getPagesCount(totalCount, limitPerPage))
    setPosts([...posts, ...newPosts])
  })

  function onSubmit (newPost) {
    setPosts([...posts, newPost])
    setModalActive(false)
  }

  function deletePost (id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  function updatePage (current) {
    setCurrentPage(current)
  }

  function setLimit (val) {
    setLimitPerPage(val)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage, limitPerPage])

  useObserver(lastPost, currentPage < postsTotalPages, isPostsLoading, () => {
    setCurrentPage(currentPage + 1)
  })

  return (
    <div className="App">
      <div className="container">
        <PostsFilter filter={filter} setFilter={setFilter} setModalActive={setModalActive} />
        <BaseSelect
          value={limitPerPage}
          onChange={limit => setLimit(limit)}
          defaultValue="Posts amount"
          options={[
            { name: '5', value: 5 },
            { name: '10', value: 10 },
            { name: '15', value: 15 },
            { name: '20', value: 20 },
            { name: '25', value: 25 },
            { name: '50', value: 50 },
          ]}
        />
        <hr />
        {postsError && <h2>Posts fetching error</h2>}
        <Posts posts={sortedAndSearchedPosts} title="Some Index" deletePost={deletePost} />

        {/*temp*/}
        <div ref={lastPost} style={{ height: 20 }} />

        {isPostsLoading && <Loader width="120px" height="120px" />}
        {sortedAndSearchedPosts.length ? <Pagination updatePage={updatePage} totalPages={postsTotalPages} /> : ''}
        <Modal type="add-post" width="500px" active={modalActive} setActive={setModalActive}>
          <AddPostForm onSubmit={onSubmit} />
        </Modal>
      </div>
    </div>
  );
}

export default PostsPage;
