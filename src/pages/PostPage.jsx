import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostService';
import Loader from '../components/UI/Loader';
import PostComments from '../components/PostComments';

const PostPage = () => {
  const routerParams = useParams()

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchingPost, isLoadingPost, errorPosts] = useFetching(async () => {
    const postData = await PostService.getPost(routerParams.id)
    setPost(postData[0])
  })
  const [fetchingComments, isLoadingComments, errorComments] = useFetching(async () => {
    const comments = await PostService.getPostComments(routerParams.id)
    setComments(comments)
  })

  useEffect(() => {
    fetchingPost()
    fetchingComments()
  }, [])


  return (
    <div className="post-page">
      {(isLoadingPost || !post)
        ? <Loader width="120px" height="120px" />
        : <div className="container">
          <div className="post">
            <h1 className="post__title">{post.id}. {post.title}</h1>
            <div>{post.body}</div>
          </div>
        </div>
      }

      {(isLoadingComments || !comments)
        ? <Loader width="120px" height="120px" />
        : <PostComments comments={comments} />
      }
    </div>
  );
};

export default PostPage;
