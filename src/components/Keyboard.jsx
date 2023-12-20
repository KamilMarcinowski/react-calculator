function RenderKeyBoard()
{
    return (
        <>
            <center className="KeyBoard">
                <button id="clear">C</button>
                <button id="operation">2^</button>
                <button id="operation">%</button>
                <button id="operation">/</button>
                <button id="number">7</button>
                <button id="number">8</button>
                <button id="number">9</button>
                <button id="operation">*</button>
                <button id="number">4</button>
                <button id="number">5</button>
                <button id="number">6</button>
                <button id="operation">-</button>
                <button id="number">1</button>
                <button id="number">2</button>
                <button id="number">3</button>
                <button id="operation">+</button>
                <button id="number">0</button>
                <button id="number">00</button>
                <button id="number">.</button>
                <button id="result">=</button>
            </center>
        </>
    )
}

export default RenderKeyBoard;