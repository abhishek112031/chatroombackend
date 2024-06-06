# Secure Chat Room Implementation

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and set the following environment variables:
    DB_USER=
    DB_PASS=
    DB_NAME=
    DB_HOST=
    JWT_SECRET=
    PORT=


4. Run the application: `npm start`

## API Endpoints

### Auth
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login

### Chat Rooms
- `POST /api/chatrooms`: Create a chat room (Prime members only)
- `POST /api/joinroom`: Join a chat room

### Profile
- `GET /api/profile/:userId`: View user profile

### Friend Requests
- `POST /api/friend-requests`: Send a friend request
