import React, {useState} from 'react'

export default function Button() {

    const [buttonText, setButtonText] = useState(false);

    return (
        <>
            <button onClick={() => setButtonText(!buttonText)}>
                {buttonText ? "true" : "false"}
            </button>
        </>
    )
}
