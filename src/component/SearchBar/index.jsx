import React from 'react'

export default function SearchBar() {
    return (
        <form className="form-search">
            <input type="text" placeholder="Search..." className="form-search_input" required />
            <button type="submit" className="form-search_button">Search</</button>
        </form>
    )
}