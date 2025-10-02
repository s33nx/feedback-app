import { useState } from "react"
import Header from "./components/Header"
import FeedbackListItem from "./components/FeedbackListItem"
import FeedbackData from "./data/FeedbackData"

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    return (
    <>
    <Header /> 
    <div className="container">
        
        <FeedbackListItem  feedback={feedback}/>
    </div>
    </>
    )
}
export default App