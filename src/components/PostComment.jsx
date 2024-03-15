import { useState } from "react"
import { postCommentOnArticle } from "./utils/api"

const PostComment = ({article_id, setCommentsOnArticle}) => {
    const [comment, setComment] = useState('')

    const username = "tickle122"

    const handleSubmit = (e) => {
        e.preventDefault()

        const newComment = {
            comment_id: 1000,
            author: username,
            created_at: new Date().toISOString(),
            votes: 0,
            body: comment
        }

        setCommentsOnArticle((currComments) => {
            return [newComment, ...currComments]
        })
        return postCommentOnArticle(article_id, comment, username).catch((err) => {
            setCommentsOnArticle((currComments) => {
                const previousComments = [...currComments]
                previousComments.shift()
                return previousComments
            })
            alert('Comment not posted. Please try again.')
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Add a comment: 
        <textarea
            value={comment}
            rows={5}
            onChange={e => setComment(e.target.value)} />
        </label>
        <button type='submit'>Save comment</button>
        </form>
    )
    
}

export default PostComment