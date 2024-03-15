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

export const getCommentsOnArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`, {
    }).then((response) => {
        return response.data.comments;
    })
}

export const patchVoteOnArticle = (article_id, voteAmount) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: voteAmount}).then((response) => {
        return response.data.updated_article.votes
    })
}

export const postCommentOnArticle = (article_id, comment, username) => {
    return newsApi.post(`/articles/${article_id}/comments`, {
        username: username,
        body: comment}).then((response) => {
            return response.data
        })
}