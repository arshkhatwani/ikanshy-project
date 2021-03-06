# Ikanshy project

## To run this project

_Note_: You need to have Node.js, Postgres installed in your machine.

- Download the code.
- Run command `npm install` in project directory.
- Set up a `.env` file in project directory which would contain token secret and DB credentials.
- Run all the commands in `dbCommands.sql` file in your Postgres terminal.
- Use command `npm start` to start the project.
- Use command `npm run devStart` to start the project in development mode.

## Api documentation

_Note_: The transaction APIs and login API also check if the user is present or not. Incase there is no user with the request credentials the APIs return a 404 status response.

### User Registration

| Description  | User Registration                          |
| ------------ | ------------------------------------------ |
| Request Type | POST                                       |
| Endpoint     | /user/register                             |
| Body         | { "username": "arsh", "password": "1234" } |
| Response     | { "username": "arsh", "balance": "0" }     |

_Note_: If a user with same username already exists this API will return 400 response with a message saying "User with the same username already exists"

\
&nbsp;

### User Login

| Description  | User Login                                 |
| ------------ | ------------------------------------------ |
| Request Type | POST                                       |
| Endpoint     | /user/login                                |
| Body         | { "username": "arsh", "password": "1234" } |
| Response     | { "token": "eyJhbGciOiJIUz...G8LnczXg" }   |

\
&nbsp;

### View transaction

| Description  | View transaction                               |
| ------------ | ---------------------------------------------- |
| Request Type | GET                                            |
| Headers      | { "auth": "bearer eyJhbGciOiJIUz...G8LnczXg" } |
| Endpoint     | /transaction/view/balance                      |
| Response     | { "currentBalance": 0 }                        |

\
&nbsp;

### Credit transaction

| Description  | Credit transaction         |
| ------------ | -------------------------- |
| Request Type | POST                       |
| Headers      | { "auth": "bearer token" } |
| Query        | { "type": "credit" }       |
| Body         | { "amount": 150 }          |
| Endpoint     | /transaction?type=credit   |
| Response     | { "currentBalance": 150 }  |

\
&nbsp;

### Debit transaction

| Description  | Debit transaction          |
| ------------ | -------------------------- |
| Request Type | POST                       |
| Headers      | { "auth": "bearer token" } |
| Query        | { "type": "debit" }        |
| Body         | { "amount": 50 }           |
| Endpoint     | /transaction?type=debit    |
| Response     | { "currentBalance": 100 }  |

_Note_: This API returns a 400 status response if the amount to be debited is greater than currrent balance.

## Middlewares

### validateCredentials

This middleware is present in the /user endpoint and it validates the username and password coming in the request body.
It returns a 400(Bad Request) status response if validation fails.

### verifyAndDecodeToken

This middleware is present in the /transaction endpoint and it validates the auth token coming in the request headers.
It returns a 403(Forbidden) status response if validation fails.
