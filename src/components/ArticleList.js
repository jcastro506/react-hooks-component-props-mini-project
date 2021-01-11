import React from 'react'
import ArticleCard from './Article.js'


function ArticleList({ posts }) {
    const articles = posts.map((post) => (
      <ArticleCard
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    ));
    return <main>{articles}</main>;
  }

export default ArticleList