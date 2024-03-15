
const CommentCard = ({comment}) => {

    return (
        <div>
            <h4>Author: {comment.author} Posted: {new Date(comment.created_at).toString().substring(3, 15)} Votes: {comment.votes}</h4>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentCard