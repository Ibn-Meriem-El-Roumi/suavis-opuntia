export default function NoteCard({ text }) {
  return (
    <div className="note-card">
      <p className="note-text">{text}</p>
    </div>
  );
}