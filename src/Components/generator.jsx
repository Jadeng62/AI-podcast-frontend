import { useState } from "react"

import "../Styles/generator.css"

const Generator = () => {
    const [input, setInput] = useState([])
    const [textInput, setTextInput] = useState("")

    const URL = import.meta.env.API_BASE_URL


    const handleGeneration = () => {
        e.preventDefault()
        fetch(`${URL}/generate`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({})
        })
        .then(res => res.text())
        .then(data => setInput(data))
        .catch(err => console.error("Error", err))
    }

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }



    return (
        <>
        <div className="generator-wrapper">
           <section className="generator-options">
            <div className="generator-audio audio">
                <p className="audio">Upload Audio</p>
            </div>
            <div className="generator-text text">
            <p className="text">Upload Text</p>
            </div>
           </section>
        <div className="generator-container">
           <form className="generator-form" onSubmit={handleGeneration}>
            <textarea 
            className="generator-text-area"
            placeholder="Paste your transcript here"
            value={textInput}
            onChange={handleChange}
            />
            <button className="generator-btn">Genatate</button>
           </form>
        </div>
        </div>
        </>
    )
}

export default Generator