const fs = require('fs')

const add = function(note, oldNote) {
    const newNote = JSON.parse(oldNote);
// add newNote to oldNote
    newNote.push(note);

    fs.writeFileSync('Note.txt', JSON.stringify(newNote));
}

module.exports = add