import { useState } from 'react';
import Landing from '../Landing';
import Homepage from '../Homepage';
export default function Container() {

    const [page, setPage] = useState("landing")
    
    return (
        <div className="container">
            {page === "landing" && <Landing setPage={setPage} />}
            {page === "home" && <Homepage />}
        </div>
    );
}