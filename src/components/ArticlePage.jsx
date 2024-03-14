import { useParams, Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { getArticleById, patchVoteOnArticle } from './utils/api'


const ArticlePage = () => {
    const {article_id} = useParams()
    const [specificArticle, setSpecificArticle] = useState([])
    const [voteCount, setVoteCount] = useState(0)
            useEffect(() => {
            getArticleById(article_id).then((article) => {
                setSpecificArticle(article)
                setVoteCount(article.votes)
            })
        }, [])

    const handleClick = (voteAmount) => {
            setVoteCount((currVotes) => {
                return currVotes + voteAmount
            })
            patchVoteOnArticle(article_id ,voteAmount).catch((err) => {
                setVoteCount((currVotes) => {
                    return currVotes - voteAmount
                })
                alert('Vote not registered. Please try again.')
            })
        }

    return (
        <>
            <div id='specific-article-container'>
                <h2>{specificArticle.title}</h2>
                <h4>{specificArticle.author}</h4>
                <h4>{new Date(specificArticle.created_at).toString().substring(3, 15)}</h4>
                <h4>Votes:{voteCount}</h4>
                <button onClick={()=>{handleClick(1)}}>Upvote</button>
                <button onClick={()=>{handleClick(-1)}}>Downvote</button>
                <h4><Link to={`/articles/${specificArticle.article_id}/comments`}>Comments: </Link>{specificArticle.comment_count}</h4>
                <img src={specificArticle.article_img_url} />
                <p>{specificArticle.body}</p>
            </div>
        </>
    )
    }

export default ArticlePage