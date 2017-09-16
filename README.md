# API JWT DB NODE APPLICATION
## Index
- [Setup Database](#setup-database-environment)
- [Environment Variables](#environment-variables)
- [Operations](#operations)
- [API End Points](#api-end-points)
### Setup Database Environment
#### Postgresql : psql's command line
```
   CREATE DATABASE api_jwt_db_node_app;
```
#### Migrate Pre-defined Table Schemas
```
    knex migrate:latest
```
#### Load development data into database
```
    knex seed:run
``` 
### Environment Variables
You have rename .env-example to .env and configure those variables as below:
```
APP_LISTEN_PORT=1234

JWT_SECRET_KEY=9B743EBD815B8E73D7E365A11EC77

DB_CLIENT=postgresql
DB_HOST=127.0.0.1
DB_NAME=api_jwt_db_node_app
DB_USER=postgres
DB_PWD=password
DB_CONN_POOL_MIN=2
DB_CONN_POOL_MAX=10
```
### Operations
#### Run as development
```
    npm run dev
```
#### Build for production
```
    npm run build
```
#### Run as production
```
    npm run serve
```
### API End Points
#### Authentication and Return JWT
API:POST: /api/session
Request Body:
```
    {
	    "username": "admin",
	    "password": "notmypassword"
    }
``` 
Response:
```
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTUwNTU2NzA1MSwiZXhwIjoxNTA1NjUzNDUxfQ.sM6u5VHvVnck12mvHA-kLAblHFq2MFTsYR_g4YSDcqg",
        "user": {
            "id": 1,
            "username": "admin"
        }
    }
```
#### Verify User Session
API:GET: /api/session
Request Header:
```
    auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTUwNTU2NzA1MSwiZXhwIjoxNTA1NjUzNDUxfQ.sM6u5VHvVnck12mvHA-kLAblHFq2MFTsYR_g4YSDcqg
```
Response:
```
    {
        "user": {
            "id": 1,
            "username": "admin",
            "iat": 1505541457,
            "exp": 1505627857
        }
    }
```