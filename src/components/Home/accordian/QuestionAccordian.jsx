import React, {useState} from 'react'
import { questionAccordian } from '../../../data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './QuestionAccordian.css'
const QuestionAccordian = () => {
    //State to hold the list of question and answer for the accordian
    const [questions, setQuestions] = useState(questionAccordian)
    //State to control which questions accordian is open
    const [openId, setOpenId] = useState(null)
    //Function to toggle the accordian state
    const toggleAccordian = (id) => {
        setOpenId((newid) => newid === id ? null : id)
    }
    return (
        <div className='myaccordian'>
            <div className='title-accordian'>
                <MdOutlineLibraryBooks color="orangered" size={30} />
                <h2 className='accordian-title'>سوالات متداول</h2>
                <div className='title-text'>
                    <p className='send-question'>بیشترین تعداد سوالاتی که تا به امروز پرسیده شده . سوال شما جزو سوالات نیست ؟</p>
                    <Link className='send-question' to='./Contact'>ارسال سوال </Link>
                </div>
            </div>
            <div className='accordian'>
                {
                    questions.map((item) => {
                        const { id, question, answer } = item
                        const isOpen = openId === id
                        return (
                            <div className='items' key={id}>
                                <header className='header-accordian'>
                                    <h6 className=''>{question}</h6>
                                    <button className='open-accordian-btn' onClick={() => toggleAccordian(id)}>
                                        {
                                            //If the question accordian is open show a minus icon otherwise show a plus icon
                                            isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />
                                        }
                                    </button>
                                </header>
                                {
                                    //If the accordion is open display the answer
                                    isOpen && <p className=''>{answer}</p>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default QuestionAccordian 
