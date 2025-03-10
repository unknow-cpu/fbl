import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Profile = () => {
  const { userId } = useParams();
  const { fetchProfile, user, isAuthenticated, fetchUser } = useAuth();

  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [hasSentRequest, setHasSentRequest] = useState(false);
  const [hasReceivedRequest, setHasReceivedRequest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [expandedComments, setExpandedComments] = useState({});

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchProfile(userId);
        setProfileUser(profileData.profileUser);
        setPosts(profileData.posts);
        setIsOwnProfile(profileData.isOwnProfile);
        setIsFriend(profileData.isFriend);
        setHasSentRequest(profileData.hasSentRequest);
        setHasReceivedRequest(profileData.hasReceivedRequest);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadProfile();
  }, [userId, fetchProfile]);

  useEffect(() => {
    if (isAuthenticated && !user) {
      fetchUser();
    }
  }, [isAuthenticated, user, fetchUser]);

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
          headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` },
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
          headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` },
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

  const allCommen = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleAddFriend = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/users/add-friend/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } }
      );
      setHasSentRequest(true);
      alert('Đã gửi yêu cầu kết bạn!');
    } catch (err) {
      alert(err.response?.data?.message || 'Lỗi khi thêm bạn');
    }
  };

  const handleCancelRequest = async () => {
    try {
      await axios.post(
        `http://localhost:5000/api/users/cancel-friend/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } }
      );
      setHasSentRequest(false);
      alert('Đã hủy yêu cầu kết bạn!');
    } catch (err) {
      alert(err.response?.data?.message || 'Lỗi khi hủy yêu cầu');
    }
  };

  const handleAcceptRequest = async (friendId) => {
    try {
      await axios.post(
        `http://localhost:5000/api/users/accept-friend/${friendId}`,
        {},
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } }
      );
      setProfileUser((prev) => ({
        ...prev,
        listfriendid: [...prev.listfriendid, { _id: friendId }],
        listacceptfriendid: prev.listacceptfriendid.filter((r) => r._id.toString() !== friendId),
      }));
      if (friendId === userId) {
        setIsFriend(true);
        setHasReceivedRequest(false);
      }
      alert('Đã chấp nhận kết bạn!');
    } catch (err) {
      alert(err.response?.data?.message || 'Lỗi khi chấp nhận');
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return isNaN(d.getTime())
      ? 'Không xác định'
      : d.toLocaleString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  if (loading) return <div className={cx('profile-container')}>Đang tải...</div>;
  if (error) return <div className={cx('profile-container')}>{error}</div>;
  if (!profileUser) return <div className={cx('profile-container')}>Không tìm thấy người dùng</div>;

  return (
    <div className={cx('profile-container')}>
      <div className={cx('profile-header')}>
        <img src={profileUser.avatar || '/avata.jpg'} alt="Avatar" className={cx('user-avatar')} />
        <div className={cx('user-info')}>
          <h2>
            {profileUser.firstName} {profileUser.lastName}
          </h2>
          {!isOwnProfile && (
            <>
              {isFriend ? (
                <button className={cx('add-friend-btn')} disabled>
                  Bạn bè
                </button>
              ) : hasSentRequest ? (
                <button className={cx('add-friend-btn')} onClick={handleCancelRequest}>
                  Hủy yêu cầu
                </button>
              ) : (
                <button className={cx('add-friend-btn')} onClick={handleAddFriend}>
                  Thêm bạn
                </button>
              )}
            </>
          )}
          <p>Giới tính: {profileUser.gender || 'Chưa cung cấp'}</p>
          <p>Ngày sinh: {profileUser.bornDay ? formatDate(profileUser.bornDay) : 'Chưa cung cấp'}</p>
          <p>Địa chỉ: {profileUser.address || 'Chưa cung cấp'}</p>
        </div>
      </div>

      <div className={cx('friend-list')}>
        <h3>Danh sách bạn bè ({profileUser.listfriendid.length})</h3>
        {profileUser.listfriendid.length === 0 ? (
          <p>Chưa có bạn bè nào.</p>
        ) : (
          profileUser.listfriendid.map((friend) => (
            <div key={friend._id} className={cx('friend-item')}>
              <img src={friend.avatar || '/avata.jpg'} alt="Friend avatar" className={cx('friend-avatar')} />
              <Link 
                to={`/profile/${friend._id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                {friend.firstName }{' '}
                {friend.lastName }
              </Link>
              <button
                  className={cx('accept-btn')}
                  onClick={() => handleAcceptRequest()}
                >
                  nhắn tin
                </button>
            </div>
          ))
        )}
      </div>
      {isOwnProfile && (
        <div className={cx('friend-requests')}>
          <h3>Lời mời kết bạn ({profileUser.listacceptfriendid.length})</h3>
          {profileUser.listacceptfriendid.length === 0 ? (
            <p>Không có lời mời kết bạn nào.</p>
          ) : (
            profileUser.listacceptfriendid.map((requester) => (
              <div key={requester._id} className={cx('friend-request-item')}>
                <img
                  src={requester.avatar || '/avata.jpg'}
                  alt="Requester avatar"
                  className={cx('friend-avatar')}
                />
                <Link 
                to={`/profile/${friend._id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                >
                {requester.firstName }{' '}
                {requester.lastName }
              </Link>
                <button
                  className={cx('accept-btn')}
                  onClick={() => handleAcceptRequest(requester._id.toString())}
                >
                  Chấp nhận
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <div className={cx('posts-section')}>
        <h3>Bài đăng ({posts.length})</h3>
        {posts.map((post) => {
          const isExpanded = expandedComments[post._id];
          const displayedComments = isExpanded ? post.postcommen : post.postcommen.slice(-3);

          return (
            <div key={post._id} className={cx('post-item')}>
              <div className={cx('post-header')}>
                <img
                  src={post.userpostid?.avatar || '/avata.jpg'}
                  alt="avatar"
                  className={cx('user-avatar')}
                  style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%', overflow: 'hidden' }}
                />
                <div>
                  <h3>
                    {post.userpostid?.firstName || 'Unknown'} {post.userpostid?.lastName || 'User'}
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
              <div className={cx('post-content')}>
                <p>{post.posttext}</p>
                {post.postimage && (
                  <img
                    src={post.postimage ? `http://localhost:5000${post.postimage}` : '/default-image.jpg'}
                    alt="post content"
                    className={cx('post-image')}
                  />
                )}
              </div>
              <div className={cx('engagement-stats')}>
                <span>{post.postlike.length} lượt thích</span>
                <span>{post.postcommen.length} bình luận</span>
                <span>{post.postshare.length} lượt chia sẻ</span>
              </div>
              <div className={cx('action-buttons')}>
                <button onClick={() => handleLike(post._id)}>
                  👍 {post.postlike.includes(user?._id) ? 'Đã thích' : 'Thích'}
                </button>
                <button onClick={() => allCommen(post._id)}>
                  💬 {isExpanded ? 'Ẩn bớt' : 'Bình luận'} ({post.postcommen.length})
                </button>
                <button>↪️ Chia sẻ</button>
              </div>
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
                      style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%', overflow: 'hidden' }}
                    />
                    <div>
                      <strong>
                        {comment.user?.firstName || 'Unknown'} {comment.user?.lastName || 'User'}
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
    </div>
  );
};

export default Profile;