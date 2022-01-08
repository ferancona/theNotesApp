
# Documentation

There are 4 types of notes:
- Plain text
- Ordered list
- Unordered list
- Checkboxes


Questions to answer for implementation:
- Will cards be of a set of defined colors?
  - If so, which ones?

# TODO (Priority)

For next meeting:

- Implement API endpoints...

[X] Disable the dialog pop when clicking on one of the card-menu button.
[X] Component: Editable Card 
[] CRUD note operations

[] Create a Pipe to display the content of a card.

Requirements
[] Attach files Dialog (lets you manage the files attached to the note)
  - Upload, delete... download? 
[] Share Dialog (lets you manage a list of emails who you share the note with)

Simple
- Add min width and height to a notes-card component

- How to use user data?

- RouteGuards (Sign In)


Card Menu - Functionalities
- Color (change) -> needs a Dialog showing possible colours 
- Format (change) -> needs a Dialog showing possible formats (text, checkbox)
- Duplicate Note -> function that creates a copy of a note in db
- Attach File -> something like "Share Note" but with files, maybe same component! (We can add/remove... can we open?)
- Share Note -> needs dialog box showing the list of emails with which the list has been shared
- Delete Note -> needs dialog asking are you sure 




- Use ExpansionPanel for file attachments and maybe the list of users who the card is shared with.



# TheNotesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
