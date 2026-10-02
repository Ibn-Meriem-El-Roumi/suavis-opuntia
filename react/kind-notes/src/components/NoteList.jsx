import NoteCard from './NoteCard';

export default function NoteList({ notes }) {
  if (notes.length === 0) {
    return <p className="empty-state">No notes yet. Be the first to drop one! {notes.length}</p>;
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard 
          key={note.id} 
          text={note.text} 
        />
      ))}
    </div>
  );
}