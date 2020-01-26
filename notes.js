const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes added!'))
    }
    else{
        console.log(chalk.red.inverse('Notes title already exists!'))
    }
}


module.exports = {
    addNote: addNote
}