import "reflect-metadata";
import express, { Request, Response } from "express";
import path from "path";
import { DataSource } from "typeorm";
import config from "../../config.json";
import { toNumber } from "./util";
import { init, letsTryOutTheEntities } from "./db";
import { Piece } from "./entities/piece";
import { Publisher } from "./entities/publisher";
import { Genre } from "./entities/genre";
import { Composer } from "./entities/composer";
import { Person } from "./entities/person";
import { Arranger } from "./entities/arranger";

console.log("Hello World!");

// INIT express
const app = express();
app.use(express.json());

// Serve static stuff
app.use("/", express.static(path.join(process.cwd(), "public")));
app.use("/images", express.static(path.join(process.cwd(), "images")));
app.use("/js", express.static(path.join(process.cwd(), "dist", "client")));
app.use("/bs", express.static(path.join(process.cwd(), "node_modules/bootstrap")));
app.use("/fa", express.static(path.join(process.cwd(), "node_modules/@fortawesome/fontawesome-free/")));


// Paths
app.get("/api/", async (req: Request, res: Response) => {
    console.log(req.url);
    res.json({ response: "hi" });
});

app.get("/letsgo", async (req: Request, res: Response) => {
    console.log(req.url);
    letsTryOutTheEntities(AppDataSource);
    res.json({ response: "hi" });
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/**
 * Database
 */

const DB_HOST: string | undefined = process.env.DB_HOST;
const DB_PORT: number | undefined = toNumber(process.env.DB_PORT, 10);

const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || config.host,
    port: DB_PORT || config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    entities: [Piece, Publisher, Genre, Person, Composer, Arranger],
    synchronize: true,
    logging: false,
});

init(AppDataSource);