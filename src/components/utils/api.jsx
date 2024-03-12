import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://news-api-647q.onrender.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles', {
    }).then((response) => {
        return response.data.articles
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`, {
    }).then((response) => {
        return response.data.article;
    })
}