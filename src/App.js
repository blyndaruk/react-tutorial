import React, { useMemo, useState } from 'react';
import AddPostForm from './components/AddPostForm';
import BaseSelect from './components/UI/BaseSelect';
import BaseInput from './components/UI/Input';
import Posts from './components/Posts';

function App () {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Afasf title', description: 'Best description' },
    { id: 2, title: 'Ladgadg title2', description: 'Test description' },
    { id: 3, title: 'Casgas title3', description: 'West description' },
    { id: 4, title: 'Some title4', description: 'Cest description' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } else {
      return posts
    }
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
      || post.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, sortedPosts])


  function onSubmit (newPost) {
    setPosts([...posts, newPost])
  }

  function deletePost (id) {
    setPosts(posts.filter((post) => post.id !== id))
  }

  function search (e) {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <AddPostForm onSubmit={onSubmit}/>
        <hr/>
        <BaseSelect
          value={selectedSort}
          options={[
            { name: 'By Title', value: 'title' },
            { name: 'By Description', value: 'description' }
          ]}
          defaultValue="Sort By"
          onChange={sort => setSelectedSort(sort)}
        />
        <BaseInput placeholder="Search..." onChange={search}/>
        {searchQuery}
        {sortedAndSearchedPosts.length
          ? <Posts posts={sortedAndSearchedPosts} title="Some Index" deletePost={deletePost}/>
          : <h2 style={{ textAlign: 'center' }}>No posts found!</h2>
        }
      </div>
    </div>
  );
}

export default App;
