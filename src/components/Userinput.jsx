import { useState } from "react"

const UserInput = () => {

    const UserInput = () => {
        const {userInout, setUserInput} = useState({
            initialInvestment: 10000;
            anualInvestment: 1200;
            expectedReturn: 6;
            duration: 10;
        })
const handleChange = (inpuIdentifier, newValue) = {
    setUserInput((previousInput)) => 
}
    }

    return (
    <section id="users-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Anual investment</label>
                <input type="number" required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required/>
            </p>
        </div>
    <section/>
    )
}