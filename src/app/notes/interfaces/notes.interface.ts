
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
  note: NotesVO,
  newNote: boolean,
  shared: boolean
}

export interface AttachmentDialogData {
  note: NotesVO
}


// Models for the http requests and responses.

export interface NotesVO {
  notesId:	string,
  title:	string,
  authorName:	string,
  body:	string,
  attachment:	String, // [string($byte)]
  attachmentName:	string,
  attachmentType:	string,
  createdDate:	string,
  modifiedDate:	string
}

export function createEmptyNotesVO(): NotesVO {
  return {
    notesId:	'',
    title: '',
    authorName: '',
    body:	'',
    attachment:	'', // [string($byte)]
    attachmentName:	'',
    attachmentType:	'',
    createdDate: '',
    modifiedDate:	''
  }
}

export interface CreateNotesRequest {
  title:	string,
  authorName:	string,
  body:	string,
  attachment:	string,
  attachmentName:	string,
  attachmentType:	string
}
export interface CreateNotesResponse {
  responseMsg:	string,
  responseCode:	string,
  errorType:	string,
  notesId:	string
}
export interface GetNotesRequest {
    notesId:	string,
    title:	string,
    authorName:	string,
    body:	string,
    hasAttachment:	boolean
}
export interface GetNotesResponse {
    responseMsg:	string,
    responseCode:	string,
    errorType:	string,
    dataList: NotesVO[]
}
export interface UpdateNotesRequest {
  notesId:	string,
  title:	string,
  authorName:	string,
  body:	string,
  attachment:	string,
  attachmentName:	string,
  attachmentType:	string
}
export interface UpdateNotesResponse {
  responseMsg:	string,
  responseCode:	string,
  errorType:	string
}
export interface DeleteNotesRequest {
  notesId:	string
}
export interface DeleteNotesResponse {
  responseMsg:	string,
  responseCode:	string,
  errorType:	string
}
