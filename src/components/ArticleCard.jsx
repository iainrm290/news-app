import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const ArticleCard = ({article}) => {
    return (
        <div>
            <h2><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h2>
            <img src={article.article_img_url} />
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
        </div>
    )
}

export default ArticleCard