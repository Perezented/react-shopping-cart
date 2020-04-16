import React, { useState } from "react"
import ReactDOM from "react-dom"

function App() {
    // React Hooks declarations
    const [searches, setSearches] = useState([])
    const [query, setQuery] = useState("")

    const handleClick = () => {
        // Save search term state to React Hooks
    }

    setSearches([query].concat(searches)) // prepend to React State