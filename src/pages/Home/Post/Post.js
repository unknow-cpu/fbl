import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { useAuth } from '../../../context/AuthContext'; 

const cx = classNames.bind(styles);

const Post = () => {
  const { user, isAuthenticated, fetchUser, isLoading } = useAuth(); // Get auth data from context
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ text: '', image: '' });
  const [commentText, setCommentText] = useState('');

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        
      console.log('API Response:', res.data);
        setPosts(res.data.data.posts);
      } catch (err) {
        console.error('Lỗi tải bài đăng:', err);
      }
    };
    fetchPosts();
  }, []);

  // Fetch user data if not already loaded
  useEffect(() => {
    if (isAuthenticated && !user) {
      fetchUser();
    }
  }, [isAuthenticated, user, fetchUser]);

  // Handle creating a new post
  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      console.error('User must be authenticated to create a post');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('posttext', newPost.text);
      if (newPost.image) {
        formData.append('postimage', newPost.image); // Append the File object
      }
      console.log('FormData entries:', [...formData.entries()]); // Log FormData contents

      const res = await axios.post(
        'http://localhost:5000/api/posts',formData, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            // 'Content-Type': 'multipart/form-data', // Required for file uploads
          },
          withCredentials: true,
        });
        console.log('Response:', res.data); // Log successful response

      setPosts([res.data.data.post, ...posts]);
      setNewPost({ text: '', image: null });
    } catch (err) {
      console.error('Lỗi tạo bài đăng:', err.response?.data || err);
    }
  };

  // Handle liking a post
  const handleLike = async (postId) => {
    if (!isAuthenticated) {
      console.error('User must be authenticated to like a post');
      return;
    }
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/posts/like/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          },
          withCredentials: true,
        }
      );

      const updatedPosts = posts.map((post) =>
        post._id === postId ? res.data.data.post : post
      );
      setPosts(updatedPosts);
    } catch (err) {
      console.error('Lỗi like bài đăng:', err);
    }
  };

  // Handle adding a comment
  const handleComment = async (postId) => {
    if (!isAuthenticated) {
      console.error('User must be authenticated to comment');
      return;
    }
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/posts/comment/${postId}`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          },
          withCredentials: true,
        }
      );

      const updatedPosts = posts.map((post) =>
        post._id === postId ? res.data.data.post : post
      );
      setPosts(updatedPosts);
      setCommentText('');
    } catch (err) {
      console.error('Lỗi thêm bình luận:', err);
    }
  };
  // const [posts, setPosts] = useState([]);
  // const [commentText, setCommentText] = useState('');
  const [expandedComments, setExpandedComments] = useState({});
  
  const allCommen = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Toggle expanded state for this post
    }));
  };

  // Render loading state if authentication is still being checked
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render nothing or a login prompt if not authenticated
  if (!isAuthenticated) {
    return <div>Please log in to view and interact with posts.</div>;
  }

  return (
    <div className={cx('post-container')}>
      {/* Form to create a new post */}
      {/* <form className={cx('create-post')} onSubmit={handleCreatePost}>
        <textarea
          value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          placeholder="Bạn đang nghĩ gì?"
        />
        <input
          type="text"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
          placeholder="URL hình ảnh (tùy chọn)"
        />
        <button type="submit">Đăng</button>
      </form> */}

        <div className={cx('post-creatpost')}>
            <div className={cx('post-creatpost1')}>
                <div className={cx('post-creatpost11')}>
                    <span>tạo bài viết</span>
                </div>
            </div>
            <div className={cx('post-creatpost2')}>
                <div className={cx('post-creatpost21')}>
                    <textarea 
                        className={cx('textarea-creatpost')}
                        placeholder="Bạn đang nghĩ gì?"
                        value={newPost.text}
                        onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
                        
                    ></textarea>
                     {/* <input 
                        type="text" 
                        className={cx('input-creatpost')}
                        placeholder="Bạn đang nghĩ gì?"
                    /> */}
                </div>
            </div>
            <div className={cx('post-creatpost3')}>
                <div className={cx('post-creatpost31')}>
                    <div className={cx('post-creatpost311')}>
                        <label htmlFor="file-upload" className={cx('label-file-upload')}>
                            <i className="fas fa-camera"></i> Thêm ảnh
                        </label>
                        <input 
                            id="file-upload" 
                            type="file" 
                            accept="image/*"
                            className={cx('input-file-upload')}
                            onChange={(e) => {
                              const file = e.target.files[0]; // Get the first selected file
                              if (file) {
                                setNewPost({ ...newPost, image: file }); // Store the File object
                              }
                            }}
                    /></div>
                    <button className={cx('btn-creatpost312')} onClick={handleCreatePost} >Đăng bài</button>
                </div>
            </div>
        </div>;

      {/* List of posts */}
      {posts.map((post) => {
        const isExpanded = expandedComments[post._id]; // Check if this post's comments are expanded
        const displayedComments = isExpanded
          ? post.postcommen // Show all comments
          : post.postcommen.slice(-3); // Show only the 3 most recent

        return (
          <div key={post._id} className={cx('post-item')}>
            {/* Post header */}
            <div className={cx('post-header')}>
              <img
                src={post.userpostid?.avatar || '/avata.jpg'}
                alt="avatar"
                className={cx('user-avatar')}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              />
              <div>
                <h3>
                  {post.userpostid?.firstName || 'Unknown'}{' '}
                  {post.userpostid?.lastName || 'User'}
                </h3>
                <p>
                  {new Date(post.createdAt).toLocaleString('vi-VN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>

            {/* Post content */}
            <div className={cx('post-content')}>
              <p>{post.posttext}</p>
              {post.postimage && (
                <img
                  src={
                    post.postimage
                      ? `http://localhost:5000${post.postimage}`
                      : '/default-image.jpg'
                  }
                  alt="post content"
                  className={cx('post-image')}
                />
              )}
            </div>

            {/* Engagement stats */}
            <div className={cx('engagement-stats')}>
              <span>{post.postlike.length} lượt thích</span>
              <span>{post.postcommen.length} bình luận</span>
              <span>{post.postshare.length} lượt chia sẻ</span>
            </div>

            {/* Action buttons */}
            <div className={cx('action-buttons')}>
              <button onClick={() => handleLike(post._id)}>
                👍 {post.postlike.includes(user?._id) ? 'Đã thích' : 'Thích'}
              </button>
              <button onClick={() => allCommen(post._id)}>
                💬 {isExpanded ? 'Ẩn bớt' : 'Bình luận'} (
                {post.postcommen.length})
              </button>
              <button>↪️ Chia sẻ</button>
            </div>

            {/* Comments section */}
            <div className={cx('comments-section')}>
              <div className={cx('comment-input')}>
                <input
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Viết bình luận..."
                />
                <button onClick={() => handleComment(post._id)}>Gửi</button>
              </div>

              {displayedComments.map((comment) => (
                <div key={comment._id} className={cx('comment-item')}>
                  <img
                    src={comment.user?.avatar || '/avata.jpg'}
                    alt="avatar"
                    className={cx('comment-avatar')}
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      overflow: 'hidden',
                    }}
                  />
                  <div>
                    <strong>
                      {comment.user?.firstName || 'Unknown'}{' '}
                      {comment.user?.lastName || 'User'}
                    </strong>
                    <p>{comment.text}</p>
                    <small>
                      {new Date(comment.createdAt).toLocaleString('vi-VN', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;