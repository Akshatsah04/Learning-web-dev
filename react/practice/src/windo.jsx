import React from "react"

export default function WindowTracker() {

    const [winwid , setWinwid]=React.useState(window.innerWidth)

    window.addEventListener("resize" , ()=>{
        setWinwid(window.innerWidth)
    })
    return (
        <h1>Window width: {winwid}</h1>
    )
}
