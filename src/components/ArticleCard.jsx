import { Link} from 'react-router-dom';

const ArticleCard = ({article}) => {
    return (
        <Link to={`/articles/${article.article_id}`}>
        <div>
            <h2>{article.title}</h2>
            <img src={article.article_img_url} />
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
        </div>
        </Link>
    )
}

export default ArticleCard