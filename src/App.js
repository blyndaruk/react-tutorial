import React, { useState } from 'react';
import Posts from './components/Posts/Posts';
import AddPostForm from './components/AddPostForm/AddPostForm';

function App () {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Some title' },
    { id: 2, title: 'Some title' },
    { id: 3, title: 'Some title' },
  ])

  function onSubmit (newPost) {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        ...newPost
      }
    ])
  }

  return (
    <div className="App">
      <div className="container">
        <AddPostForm onSubmit={onSubmit}/>
        <Posts posts={posts} title="Some Posts"/>
      </div>
    </div>
  );
}

export default App;
