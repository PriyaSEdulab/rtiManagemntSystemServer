import express, { Express, Request, Response } from 'express';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import cors from 'cors';

const app: Express = express();

const hostName = 'localhost';
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*', credentials: true })); 

// Define a route for the root URL
app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Welcome to Express JS")
});

// Start the server
app.listen(port, hostName, () => {
    console.info(`Express server is started at http://${hostName}:${port}`)
})

AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });