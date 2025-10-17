import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Header from "./components/Header"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackListItem from "./components/FeedbackListItem"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"

function App(){
    return (
      <FeedbackProvider>
    <Router>
    <Header /> 
    <div className="container">

    <Routes>
      <Route path="/" element={
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackListItem />
        </>
      } />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
     
    <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
    )
}
export default App