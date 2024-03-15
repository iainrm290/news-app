import Header from "./Header";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from 'react'
import { getTopics, getArticlesByTopic } from "./utils/api";
import { useParams, Link} from 'react-router-dom'


const Topics = () => {
    const [allTopics, setAllTopics] = useState([])
    const [articlesByTopic, setArticlesByTopic] = useState([])

    useEffect(() => {
        getTopics().then((topics) => {
            setAllTopics(topics)
        })
    }, [])
    

    
    const handleClick = (topic) => {
            return getArticlesByTopic(topic).then((articles) => {
                setArticlesByTopic(articles)
            })
        
    }
    


    return (
        <>  
            <h3>Click on one of the topics below to view articles on that theme</h3>
            <div id='topics-container'>
                <ul>
                    {allTopics.map((topic) => {
                        return <li key= {topic.slug}>
                            <button onClick={()=>handleClick(topic.slug)}>{topic.slug}</button>
                        </li>
                    })}
                </ul>
            </div>
            <div id='articles-by-topic-container'>
                
                <ul>
                    {articlesByTopic.map((article) => {
                        return <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    })}
                </ul>

            </div>
        
        </>

    )





}

export default Topics
