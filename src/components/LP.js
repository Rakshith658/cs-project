import React from 'react'
import { data } from './Liveprojects/books'
import SpecificBook from './Liveprojects/Book'
import './LP.css'

const LP = () => {
    return (
        <div>
            {/* <h1 className="ok">Book store</h1> */}
            <section className='booklist'>
                {data.map((book, index) => {
                return <SpecificBook key={book.id} {...book}></SpecificBook>;
                })}
            </section>
        </div>
    )
}

export default LP
