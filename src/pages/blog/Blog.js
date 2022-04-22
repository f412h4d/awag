import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      img: 'https://images.unsplash.com/photo-1422255198496-21531f12a6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
      title: 'Blog post title',
      category: 'Financial',
      date: 'april 16, 2022',
      comments: 7,
    },
    {
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Blog post title',
      category: 'Financial',
      date: 'april 16, 2022',
      comments: 7,
    },
    {
      img: 'https://images.unsplash.com/photo-1495987976467-244d20b4b39a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Blog post title',
      category: 'Financial',
      date: 'april 16, 2022',
      comments: 7,
    },
  ]);

  return (
    <main>
      <h1>Blog</h1>

      <div class='post-list post-list_grid'>
        {posts.map((post, index) => (
          <div key={index} class='post-list__post post'>
            <figure class='post__preview-img'>
              <a href='#'>
                <img src={post.img} alt='img description' />
              </a>
            </figure>

            <div class='post__header'>
              {/* // FIXME add date here */}
              <time datetime='2019-11-14' class='post__time'>
                {post.date}
              </time>
              <h2>
                {/* // FIXME dynamic link */}
                <a href='#'>Cum sociis natoque penatibus et</a>
              </h2>
            </div>

            <div class='post__meta'>
              <a href='#'>{post.category}</a>
              <a href='#' class='post__comments'>
                {post.comments}
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export const BlogMemo = React.memo(Blog);
