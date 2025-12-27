
# NoteKeeper

A simple note-taking app built with MERN stack. Store, edit, and delete your notes easily with a clean dark UI.

## Features

- ✏️ Add new notes
- 📝 Edit existing notes
- 🗑️ Delete notes
- 👀 View all notes
- 🌙 Clean dark interface
- ⚡ Fast and responsive

## Tech Stack

- **Frontend:** React, Tailwind CSS, Context API
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or MongoDB Atlas account

### Steps

1. Clone the repository
    ```bash
    git clone <repo-url>
    cd notekeeper
    ```

2. Install frontend dependencies
    ```bash
    cd frontend
    npm install
    ```

3. Install backend dependencies
    ```bash
    cd ../backend
    npm install
    ```

## How to Run

### Backend
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm start
```
App opens on `http://localhost:3000`

## Folder Structure

```
notekeeper/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
└── README.md
```

## Future Improvements

- Add user authentication
- Sync notes across devices
- Add note categories/tags
- Search functionality
- Export notes as PDF

## Author

**Vivek Sharma**
