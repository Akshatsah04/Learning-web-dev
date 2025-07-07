import React from "react"
import padsData from "./data"
import Pad from "./pads"

export default function App() {
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(padin => (
        <Pad key={padin.id} color={padin.color} on={padin.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}