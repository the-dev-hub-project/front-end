import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const NoteCreate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState({
        content: "",
        application: id
    })

    const createNewNote = async (e) => {
        try {
            await axios.post(`https://the-dev-hub-app.herokuapp.com/api/thedevhub/note/create/${id}`, newNote)
        } catch (err) {
            console.log(err)
        }
    }

    const handleInput = (e) => {
        e.preventDefault()
        const newNoteInput = { ...newNote }
        newNoteInput[e.target.name] = e.target.value
        setNewNote(newNoteInput)
    }

    return (
        <div>
            <div className='text-4xl text-center mx-44'>Create a note</div>
            <div className="flex justify-center">
                <form onSubmit={createNewNote} className='w-1/2 my-4 px-3 flex flex-col bg-white shadow-lg shadow-air-blue rounded-lg border-gray-300 border'>
                    <input
                        className="mt-5"
                        type='text'
                        placeholder='Content'
                        name='content'
                        value={newNote.content}
                        onChange={handleInput}
                        required />
                    <br />
                    <button className="rounded-lg text-lg px-2 py-2 text-white tracking-wider bg-paolo-green outline-none mx-44"><Link to={`/myhub/application/${id}`}>Back</Link></button>

                    <button className="rounded-lg text-lg my-5 px-2 py-2 text-white tracking-wider bg-air-blue outline-none mx-44">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NoteCreate