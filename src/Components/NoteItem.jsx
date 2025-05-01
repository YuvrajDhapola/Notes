import React from "react";
import "./NoteItem.css"; // Import the CSS file for styling


const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
