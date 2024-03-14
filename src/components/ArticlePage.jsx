import { useParams, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { getArticleById } from './utils/api'


const ArticlePage = () => {
    const {article_id} = useParams()
    const [specificArticle, setSpecificArticle] = useState([])
            useEffect(() => {
            getArticleById(article_id).then((article) => {
                setSpecificArticle(article)
            })
        }, [])
        
    return (
        <>
            <div id='specific-article-container'>
                <h2>{specificArticle.title}</h2>
                <h4>{specificArticle.author}</h4>
                <h4>{new Date(specificArticle.created_at).toString().substring(3, 15)}</h4>
                <h4>Votes:{specificArticle.votes}</h4>
                <h4><Link to={`/articles/${specificArticle.article_id}/comments`}>Comments: </Link>{specificArticle.comment_count}</h4>
                <img src={specificArticle.article_img_url} />
                <p>{specificArticle.body}</p>
            </div>
        </>
    )
}

export default ArticlePage