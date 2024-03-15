import { useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { getCommentsOnArticle, getArticleById } from './utils/api'
import CommentCard from './CommentCard'
import PostComment from './PostComment'

const CommentsPage = () => {
    const {article_id} = useParams()
    const [commentsOnArticle, setCommentsOnArticle] = useState([])
    const [specificArticle, setSpecificArticle] = useState([])
            useEffect(() => {
            getArticleById(article_id).then((article) => {
                setSpecificArticle(article)
            })
        }, [])

    useEffect(() => {
        getCommentsOnArticle(article_id).then((comments) => {
            setCommentsOnArticle(comments)
        })
    }, [])

    return (
        <>
            <div id='comments-container'>
                <h2>{specificArticle.title}</h2>
                <p>{specificArticle.body}</p>
                <h3>Comments</h3>
                <PostComment article_id={article_id} setCommentsOnArticle={setCommentsOnArticle}/>
                
                <ul>
                    {commentsOnArticle.map((comment) => {
                        return <li key={comment.comment_id}>
                            <CommentCard comment={comment} />
                        </li>
                    })}
                </ul>
            </div>
        </>
    )

}

export default CommentsPage