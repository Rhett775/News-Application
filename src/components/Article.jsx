import {useState,useEffect} from "react";
import '../App.css';

const Article = ({category, search}) => {

    const [articles, setArticles] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey="+apiKey+"&category="+category+"&q="+search)
    .then(response => response.json())
    .then(data => setArticles(data.articles))}, [category,search]);

    return (
        
        <div className="article">
        {articles.length > 0 ? (
            <div>
            {articles.map((article) => (
                <div key={article.title} className="card">
                    <a href={article.url}>
                        <img src={article.urlToImage} height="300px" width="500px" alt={article.title} />
                    </a>
                    <div>
                        <a href={article.url} className="card-title">{article.title}</a>
                        <p className="card-text">{article.description}</p>
                    </div>
                </div>
            ))}
            </div>
        ) : (
            <p>No Articles Found</p>
        )}
        </div>

    )


}

export default Article;