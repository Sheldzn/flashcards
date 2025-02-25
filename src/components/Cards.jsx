import { useState } from 'react'
import qaData from './QA.json'

const Cards = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const totalQuestions = qaData.qa_pairs.length
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100

  const prevBtn = () => {
    setShowAnswer(false)
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalQuestions -1 : prevIndex - 1))
  }
  const nextBtn = () => {
    setShowAnswer(false)
    setCurrentIndex(prevIndex => (prevIndex === totalQuestions -1 ? 0 : prevIndex + 1))
  }
  const toggleAnswer = () => {
    setShowAnswer(prevShowAnswer => !prevShowAnswer)
  }


  return (
    <section>
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          <span id="percent">{Math.round(progressPercent)}%</span>
          <span id="card-number">{`${currentIndex + 1} of ${totalQuestions}` }</span>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="card-content">
            { !showAnswer && (
            <div>
              <strong>Question: </strong>{ qaData.qa_pairs[currentIndex].question }
            </div>
            )}
            { showAnswer && (
              <div>
                <strong>Answer: </strong>{ qaData.qa_pairs[currentIndex].answer }
              </div>
            )}
          </div>
          <div className="card-footer">
            <button className="btn prev-btn" onClick={ prevBtn }>Prev</button>
            <button className="btn toggle-btn" onClick={ toggleAnswer }>{ showAnswer ? "Hide Answer" : "Show Answer" }</button>
            <button className="btn next-btn" onClick={ nextBtn }>Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards