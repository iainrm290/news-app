import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticlePage from './components/ArticlePage'
import CommentsPage from './components/CommentsOnArticle'
import './App.css'

function App() {


    return (
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/articles/:article_id' element={<ArticlePage />}/>
            <Route path='/articles/:article_id/comments' element={<CommentsPage />}/>
        </Routes>
            
        </>
    )
}

export default App
