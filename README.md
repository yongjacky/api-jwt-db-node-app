# API JWT DB NODE APPLICATION
## Index
- [Setup Datavase](#setup-database-environment)
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
