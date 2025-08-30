import React from 'react';

const Blog = ({ blogPosts }) => {
  return (
    <section id="blog" className="section">
      <h2 className="section-heading">Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="#" className="blog-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;