import React, { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([note, ...notes]);

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));

  return (
    <div className="app-container">
      <h1>📝 My Notes</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
