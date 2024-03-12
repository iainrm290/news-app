import { useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { getArticleById } from './utils/api'

const ArticlePage = () => {
    const [specificArticle, setSpecificArticle] = useState({})
    const {article_id} = useParams()
        useEffect(() => {
            getArticleById(article_id).then((article) => {
                setSpecificArticle(article)
            })
        }, [])
    return (
        <>
            <div id='specific-article-container'>
                <h2>{specificArticle.title}</h2>
                <h3>By {specificArticle.author}</h3>
                <img src={specificArticle.article_img_url} />
                <p>{specificArticle.body}</p>
            </div>
        </>
    )
}

export default ArticlePage