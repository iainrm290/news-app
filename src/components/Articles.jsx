import { useState, useEffect } from "react";
import { getArticles } from './utils/api'
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setAllArticles(articles)
        })
    }, [])

    return (
        <>
            <div id='articles-container'>
                <ul>
                    {allArticles.map((article) => {
                        return <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    })}
                </ul>
            </div>
        </>

    )
}

export default Articles