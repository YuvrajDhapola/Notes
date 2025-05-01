import React from "react";
import NoteItem from "./NoteItem.jsx";
import "./noteList.css";

const NoteList = ({ notes, onDelete }) => {
  // Check if there are no notes to display
  if (notes.length === 0) return <p className="no-notes">No notes yet.</p>;

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
