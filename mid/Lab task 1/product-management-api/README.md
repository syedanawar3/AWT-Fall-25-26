# Product Management API – Lab Task 1
 
## Student Details

| SL | Name | Student ID | Section |

| 28 | Syeda Faiza Nawar | 23-53850-3 | E |
 
## Database Setup

1. Install PostgreSQL and create a database: `CREATE DATABASE product_management;`

2. Copy `.env.example` to `.env` and set `DB_PASSWORD` (and other DB values) for your machine.

3. Run migrations: `pnpm run migration:run`
 
## Installation & Run

```bash

pnpm install

pnpm run migration:run

pnpm start:dev

```

Server runs at `http://localhost:5000`
 
## Endpoints

### Products

| Method | Endpoint | Description |


| POST | /products | Create a product |

| GET | /products | Get all products |

| GET | /products/:id | Get product by ID |

| PATCH | /products/:id | Update product |

| DELETE | /products/:id | Delete product |
 
### Employees

| Method | Endpoint | Description |



| POST | /employees | Create an employee |

| GET | /employees | Get all employees |

| GET | /employees/:id | Get employee by ID |

| PATCH | /employees/:id | Update employee |

| DELETE | /employees/:id | Delete employee |
 

Server runs at `http://localhost:5000`

# Krown Dex Backend – Setup & Run Guide
Please setup the pnpm and the node_module , use the boiler plate
````bash

guidance for set up and run the NestJS backend project locally.

##  Prerequisites
Before starting, ensure the following are installed:
- Node.js v22 or later
- PostgreSQL
- Redis
- npm, yarn, or pnpm (any package manager)
- Docker (optional, for containerized setup)

---

##  Install Dependencies
Use any of the following commands:

```bash
pnpm install
# or
yarn install
# or
npm install


````

#  Environment Variables

Go to the project root directory
Find the file .env.example
Create a .env file in the same directory
Copy all content from .env.example into .env
Update values based on your local environment
Example:

```bash
cp .env.example .env
```

#  Database Setup & Migrations

Create the database

```bash
create db krown_dex_db

```

Run migrations

```bash
pnpm run migration:run
# or
yarn migration:run
# or
npm run migration:run

```

#  Redis Setup

Option 1: Run Redis with Docker

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

Option 2: Native install- Start Redis manually, then ensure .env values match:

```bash
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

```

#  Running the Backend (Development)

Start the NestJS app:

```bash
pnpm start:dev
# or
yarn start:dev
# or
npm run start:dev

```

#  Production Build

Create a production build:

```bash
pnpm build
# or
yarn build
# or
npm run build

```

Start the production server:

```bash
pnpm start:prod
# or
yarn start:prod
# or
npm run start:prod

```

#  Project Structure (Overview)

```bash
/project-root
  ├─ src/
  │   ├─ modules/
  │   ├─ common/
  │   ├─ config/
  │   ├─ main.ts
  │   └─ app.module.ts
  ├─ migrations/
  ├─ test/
  ├─ .env.example
  ├─ package.json
  └─ tsconfig.json

```
