import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Buzz.css';

const Buzz = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [anniversaries, setAnniversaries] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchAnniversaries();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://192.168.2.55:8081/Buzz/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchAnniversaries = async () => {
    try {
      const response = await axios.get('http://192.168.2.55:8081/Buzz/anniversaries');
      setAnniversaries(response.data);
    } catch (error) {
      console.error('Error fetching anniversaries:', error);
    }
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const formData = { content: post };
    try {
      await axios.post('http://192.168.2.55:8081/My-info/Buzz/add', formData);
      fetchPosts(); // Refresh posts after submitting
      setPost('');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div className="buzz-newsfeed">
      <div className="left-panel">
        <div className="post-box">
          <div className="post-input-wrapper">
            <div className="profile-pic"></div>
            <input 
              type="text" 
              value={post}
              onChange={handlePostChange}
              placeholder="What's on your mind?"
              className="post-input"
            />
          </div>
          <button onClick={handlePostSubmit} className="post-button">Post</button>
          <div className="share-options">
            <button className="share-button">Share Photos</button>
            <button className="share-button">Share Video</button>
          </div>
        </div>
        <div className="tabs">
          <button className="tab active">Most Recent Posts</button>
          <button className="tab">Most Liked Posts</button>
          <button className="tab">Most Commented Posts</button>
        </div>
        <div className="posts-list">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="post">
                {post.content}
              </div>
            ))
          ) : (
            <div className="no-posts">
              <div className="no-posts-icon"></div>
              <p>No Posts Available</p>
            </div>
          )}
        </div>
      </div>
      <div className="right-panel">
        <h3>Upcoming Anniversaries</h3>
        {anniversaries.length > 0 ? (
          anniversaries.map((anniversary, index) => (
            <div key={index} className="anniversary">
              {anniversary.name} - {anniversary.date}
            </div>
          ))
        ) : (
          <p>No Records Found</p>
        )}
      </div>
    </div>
  );
};

export default Buzz;
  