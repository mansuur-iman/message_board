# 💬 MiniMessageBoard

A lightweight message board web app where users can post, view, and delete messages — backed by PostgreSQL and rendered server-side with EJS.

## Features

- **Post Messages** — Submit a username and message via a simple form
- **View All Messages** — Chronological feed of all posted messages
- **Message Detail** — View a single message by ID
- **Delete Messages** — Remove any message from the board
- **Filter by User** — Retrieve all messages from a specific username
- **Seeded Data** — Database ships with sample messages out of the box

## Tech Stack

| Layer | Technology |
|---|---|
| Templating | EJS |
| Server | Express |
| Validation | express-validator |
| Database | PostgreSQL (via `pg`) |
| Config | dotenv |

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd minimessageboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   ```

4. Seed the database (creates the table and inserts sample messages):
   ```bash
   node db/seed.js
   ```

5. Start the server:
   ```bash
   node app.js
   ```

## Routes

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | View all messages |
| `GET` | `/new` | Show new message form |
| `POST` | `/new` | Submit a new message |
| `GET` | `/message/:id` | View a single message |
| `POST` | `/message/:id/delete` | Delete a message |

## Project Structure

```
.
├── app.js                        # Express app entry point
├── db/
│   ├── pool.js                   # PostgreSQL connection pool
│   ├── queries.js                # Database query functions
│   └── seed.js                   # Table creation and seed data
├── controllers/
│   └── messageController.js      # Route handler logic
├── routes/
│   └── messageRouter.js          # Express router
├── views/                        # EJS templates
└── .env                          # Environment variables (not committed)
```

## License

MIT
