import React from 'react'
import Moviecard from './Moviecard'

function Movielist({Movies,search}) {
return (
    <div className='cards'>
        {
            Movies.filter((el)=>el.title==search).map((Movie)=><Moviecard Movie={Movie}/>)
        }
    </div>
)
}

export default Movielist