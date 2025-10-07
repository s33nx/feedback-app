import { useState } from "react"
import Header from "./components/Header"
import FeedbackListItem from "./components/FeedbackListItem"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
    <>
    <Header /> 
    <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackListItem  feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
    )
}
export default App