import { useState, useEffect } from 'react'
import './App.css'
import Article from './components/Article.jsx'

function App() {
  const [selectedCategory, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    if (e.key == "Enter")
      setCategory("");
      setSearchText(e.target.value);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    setSearchText("");
  }

  return (
    <div>
      <div className="container">
        <h1>News</h1>
        <nav>
          <button onClick={() => handleCategory("general")}>General</button>
          <button onClick={() => handleCategory("business")}>Business</button>
          <button onClick={() => handleCategory("entertainment")}>Entertainment</button>
          <button onClick={() => handleCategory("health")}>Health</button>
          <button onClick={() => handleCategory("science")}>Science</button>
          <button onClick={() => handleCategory("sports")}>Sports</button>
          <button onClick={() => handleCategory("technology")}>Technology</button>
        </nav>
        <input type="text" placeholder="Search" onKeyDown={handleSearch}></input>
        <Article category={selectedCategory} search={searchText}/>
        <div className="space"></div>
      </div>
      
      
    </div>
  )
}

export default App;
