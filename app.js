angular.module('notepadApp', [])
    .controller('NotepadController', function () {
        var notepadCtrl = this;
        notepadCtrl.notes = [];
        notepadCtrl.note = '';

        notepadCtrl.save = function () {
            if (notepadCtrl.note.trim()) {
                var title = prompt("Please enter a title for your note:");
                if (title) {
                    notepadCtrl.notes.push({ title: title, text: notepadCtrl.note });
                    notepadCtrl.note = '';
                }
            }
        };

        notepadCtrl.clear = function () {
            notepadCtrl.note = '';
        };

        notepadCtrl.load = function (note) {
            notepadCtrl.note = note.text;
        };

        notepadCtrl.delete = function (note) {
            var index = notepadCtrl.notes.indexOf(note);
            if (index !== -1) {
                notepadCtrl.notes.splice(index, 1);
            }
        };
    });
