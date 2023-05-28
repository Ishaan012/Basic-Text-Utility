import React, { useState } from 'react';



export default function Form(props) {
    const handleOnClickU = () => {
        const newTextU = text.toUpperCase();
        setText(newTextU);
    }

    const handleOnClickL = () => {
        const newTextL = text.toLowerCase();
        setText(newTextL);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    const [text, setText] = useState("Enter text here");


    return (
        <div>
            <div class="mb-3 p-5">
                <div className="text-xl font-bold">{props.heading}</div>
                <label for="myBox" class="form-label"></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <div className="mt-3">
                    <div className='mt-10'>
                        <button className="btn btn-primary mr-10" onClick={handleOnClickU}>Convert to UpperCase</button>
                        <button className="btn btn-primary " onClick={handleOnClickL}>Convert to LowerCase</button>
                    </div>
                    {/* <div className='mr-2'>
                        <button className="btn btn-primary ">Convert to UpperCase</button>
                    </div>
                    <div className='mr-2'>
                        <button className="btn btn-primary ">Convert to UpperCase</button>
                    </div> */}
                </div>

                <div className="mt-5 text-xl font-bold">Your Text Summary: <span className="font-normal" >{text.length} characters and {text.split(" ").length} words</span>  </div>
                <div className="text-xl font-bold">Read Time: <span className="font-normal" >{(text.split(" ").length * (1 / 128)) * 60} sec</span>  </div>
            </div>
        </div>
    )
}

