import React from 'react'
import mainImg from "./investment-calculator-logo.png"
import MainSection from './MainSection'

const App = () => {
    return (
        <>
            <header>
                <div className="head">
                    <div className='center'>

                        <div className="img">
                            <img src={mainImg} alt="Investment Calculator image" width="90vw" />

                        </div>
                        <p className='title'>Investment Calculator</p>
                    </div>
                </div>
            </header>

            <MainSection />

            <footer>

            </footer>
        </>
    )
}

export default App