let state = {
  profilePage: {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '15' },
        { id: 2, message: "It's me first post", likesCount: '20' },
        { id: 3, message: 'Yo', likesCount: '3' },
        { id: 4, message: 'message 1', likesCount: '4' },
    ],    
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Arsen' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Dima' },
      { id: 4, name: 'Mischa' },
      { id: 5, name: 'Sveta' },
      { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'message 1' },
        { id: 5, message: 'message 2' },
        { id: 6, message: 'message 3' }
    ]
  }
}

export default state;