import { useState } from 'react'

const BookShelf = () => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({ title: '', author: '' })


    const handleInputChange = (event) => {
        setNewBook({
            ...newBook, [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({ title: '', author: '' })
    }
    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} />
                        <label htmlFor="author">Author: </label>
                        <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />
                        <button type='submit'>Add book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div className='bookCard'> 
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default BookShelf