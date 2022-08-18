A simple E-Commmerce MERN project.

Backend                                            Frontend                        Database                           
 - NodeJs and Express                                - ReactJS                      - MongoDB

npm used                                           npm used
 - "bcryptjs": "^2.4.3",                            - Tailwond CSS,
 - "cookie-parser": "^1.4.6",                       - flowbite-react,
 - "cors": "^2.8.5",                                - heroicons
 - "dotenv": "^16.0.0",
 - "express": "^4.17.3",
 - "jsonwebtoken": "^8.5.1",
 - "method-override": "^3.0.0",
 - "mongoose": "^6.2.8",
 - "multer": "^1.4.4",
 - "nodemailer": "^6.7.3",
 - "nodemon": "^2.0.15"

Authenication Working
When a user logs in, the backend creates a token using JsonWebToken and sends it as a response to the frontend. Then the frontend uses concepts like context and serves the token throughout the application. The received token is also stored in the local storage of the browser for easy access. Later, when accessing certain routes, it needs the token whereby the token is used from localstorgae or the context and sent with every request via headers. After that, the token is decrypted by the middleware in the backend and checks its authenticity. If it is, it then lets the request through.
When Logging Out we just delete the token from localStorage and the reset the variable containing it in the context.



