
export interface Note {
  id: string,
  ownerId: string,
  title: string,
  body: string,
  attachments: string[],
  color: string,
  type: NoteContentType
}

export function createEmptyNote(): Note {
  return {
    id: '',
    ownerId: '',
    title: "",
    body: "",
    attachments: [],
    color: '',
    type: NoteContentType.PlainText
  };
}

export interface User {
  id: string,
  username: string,
  email: string
}

export enum NoteContentType {
  OrderedList = "OrderedList",
  UnorderedList = "UnorderedList",
  PlainText =  "PlainText",
  Checkboxes = "Checkboxes"
}

export interface CardDialogData {
  note: Note,
  newNote: boolean,
  shared: boolean
}
