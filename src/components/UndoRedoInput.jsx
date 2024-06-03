import React, { useState } from 'react';
import './UndoRedoInput.css';

function UndoRedoInput() {
    const [input, setInput] = useState('')
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const handleInput = (e) =>{
        setUndoStack([...undoStack, input]);
        setInput(e.target.value);
        setRedoStack([]);
    }

    const handleUndo = () => {
        if(undoStack.length === 0){
            return;
        }

        setRedoStack([...redoStack, input])
        setInput(undoStack.pop());
        setUndoStack([...undoStack])

    }

    const handleRedo = () => {
        if(redoStack.length === 0){
            return;
        }

        setUndoStack([...undoStack, input]);
        setInput(redoStack.pop());
        setRedoStack([...redoStack])

    }

  return (
    <div className='container'>
        <input
            value={input}
            onChange={handleInput}
        />
        <div className='buttons'>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
        </div>
       
    </div>
  )
}

export default UndoRedoInput