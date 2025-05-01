import React from "react";
import "./noteItem.css";

const NoteItem = ({ note, onDelete }) => {
  // Display the note title and content, and provides delete button
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
