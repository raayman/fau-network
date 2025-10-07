# FAU Network Project

Welcome to the FAU Network project! This document will guide you through the process of setting up and running the project locally.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- **Docker**: [Download Docker](https://www.docker.com/products/docker-desktop)
- **Docker Compose**: Usually comes bundled with Docker Desktop
- **Git**: For cloning the repository

To verify your installations, run:
```bash
docker --version
docker-compose --version
git --version
```
You can also just run docker from your terminal if your having problems.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone <repository-url>
cd fau-network
```

### 2. Set up environment variables

This project consists of a frontend and backend, each with its own environment variables. You'll need to create a `.env` file for each component.

**For the backend:**
```bash
cd backend
cp example.env .env
cd ..
```

**For the frontend:**
```bash
cd frontend
cp example.env .env
cd ..
```

**Important:** After copying the example files, update the variables in both `backend/.env` and `frontend/.env` with the necessary credentials and configuration values. Check with your team lead for the specific values needed.

### 3. Run the application

From the root of the project directory (not inside frontend or backend folders), run:

```bash
docker-compose up --build
```

This command will:
- Build the Docker images for both frontend and backend services
- Start the containers
- Set up networking between services

**Note:** The `--build` flag ensures that images are rebuilt with any recent changes. For subsequent runs, you can use just `docker-compose up` for faster startup.

### 4. Access the application

Once the containers are running successfully, you can access:

- **Frontend application**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

## Development Workflow

### Making changes
- The application supports live reloading, so changes to your code will automatically refresh
- Both frontend and backend directories are mounted as volumes, so file changes are synced immediately

### Stopping the application
```bash
docker-compose down
```

### Viewing logs
```bash
# View all logs
docker-compose logs

# View logs for a specific service
docker-compose logs frontend
docker-compose logs backend
```

### Rebuilding after dependency changes
If you add new dependencies to either frontend or backend, rebuild the containers:
```bash
docker-compose up --build
```

## Troubleshooting

- **Port conflicts**: If you get port binding errors, make sure ports 5173 and 8000 are not being used by other applications
- **Environment variables**: Double-check that your `.env` files are properly configured
- **Docker issues**: Try `docker-compose down` followed by `docker-compose up --build`
- **Permission errors**: On Linux/Mac, you might need to run Docker commands with `sudo`

## Project Structure

```
fau-network/
├── frontend/           # React/Vite frontend application
├── backend/            # Node.js backend API
├── docker-compose.yml  # Docker services configuration
└── README.md          # This file
```

That's it! You're now ready to start developing. If you run into any issues, please reach out to me for assistance (or ask chatGPT).
