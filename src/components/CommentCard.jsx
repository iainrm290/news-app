import { deleteComment } from "./utils/api"
const CommentCard = ({ comment, setCommentsOnArticle }) => {
    const username = "tickle122"

    const handleClick = (comment_id, comment_author) => {
        if (comment_author !== username) {
            alert('You can only delete your own comments!')
            return
        }
        setCommentsOnArticle((currComments) => {
            const ammendedComments = [...currComments]
            for (const comment of ammendedComments) {
                if (comment.comment_id === comment_id) {
                    const index = ammendedComments.indexOf(comment)
                    ammendedComments.splice(index, 1)
                    return ammendedComments
                }
            }
        })
        return deleteComment(comment_id).then(() => {
            alert('Comment deleted...')
        })
    }

    return (
        <div>
            <h4>Author: {comment.author} Posted: {new Date(comment.created_at).toString().substring(3, 15)} Votes: {comment.votes}</h4>
            <p>{comment.body}</p>
            <button onClick={() => { handleClick(comment.comment_id, comment.author) }}>Delete this comment</button>
        </div>
    )
}

export default CommentCard