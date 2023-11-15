# Kantarnik Albina

## Milestone 1
* Create a basic form with an input (multiline textarea) and a button which allows the user to add notes
* Every note added should have the note’s text and the note’s created date
* Display the notes in a grid-like format.

## Milestone 2
* Display the date in human readable format: Aug 31th 12:30 PM
* Add a delete button that when clicked,  prompts the user with a message “Are you sure you want to delete your note?” (you can use JavaScript's default global confirm() function). If the user hits confirm, delete the note from the list

## Milestone 3
* Add an optional note title: 
-in the form add an input for note title;
-in the note, display the title above the text;
* The user can add a note without a title (then no title will be displayed in the note), but the note’s text is mandatory.

## Milestone 3.1
* Add the ability to resize your textarea dynamically when the user types text (add/remove rows)
* Remove the manual resize handler in the bottom right corner of the textarea 

## Milestone 4
* Add a popup modal to show a note
* When a note is clicked, the modal should show the note information

## Milestone 5
* In the modal, add the ability to edit the note (title and body). 
* Use your original form component in the modal to edit the note, so the form component will be used for your main form and in the modal (re-usable). If needed, update your form component to be usable as a new note form and as an update note form. (It will need to include both functionalities, but you will need to differentiate between them).
* After the note is edited, add an updated date to the note object.
* Display the update date in the note in addition to the created date and the note text.

## Milestone 5.1 (extra)
* Display the update date in the modal-note in addition to the created date.

## Milestone 6
* Deploy the app to Netlify - https://kantarnik-albina-notes-itc.netlify.app/

## Milestone 7
* Save the notes to users storage (localStorage). The notes should persist between reloads of the page
