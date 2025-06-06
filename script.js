document.addEventListener('DOMContentLoaded', () => {
  const noteText = document.getElementById('noteText');
  const addNoteButton = document.getElementById('addNote');
  const notesList = document.getElementById('notesList');

  const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
      const li = document.createElement('li');
      li.textContent = note;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
      });
      li.appendChild(removeButton);
      notesList.appendChild(li);
    });
  };

  addNoteButton.addEventListener('click', () => {
    const text = noteText.value.trim();
    if (text) {
      const notes = JSON.parse(localStorage.getItem('notes') || '[]');
      notes.push(text);
      localStorage.setItem('notes', JSON.stringify(notes));
      noteText.value = '';
      loadNotes();
    }
  });

  loadNotes();
});
