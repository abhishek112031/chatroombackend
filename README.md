# Secure Chat Room Implementation
# POSTMAN COLLECTION LINK: `https://www.postman.com/christtube/workspace/chatroom/collection/20945916-f2c0f0d1-31a3-4e0c-ae22-4f63c7e0485a?action=share&creator=20945916`


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
## Base URL:`http://localhost:3000`

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

### message:
`POST  /api/messages:Send Messages`
