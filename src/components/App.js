import React from "react";
import blogData from "../data/blog";
import Headers from "./Header.js"
import AboutInfo from "./About.js"
import ArticleLists from "./ArticleList.js"


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Headers name={blogData.name} />
      <AboutInfo image={blogData.image} about={blogData.about} />
      <ArticleLists posts={blogData.posts} />
    </div>
  );
}

export default App;
