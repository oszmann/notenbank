import { DataSource } from "typeorm";
/**
 * Initializes Database
 * @param source
 */
export function init(source: DataSource) {
    source
        .initialize()
        .then(async () => {
            console.log("Database connection is up.");
        })
        .catch(error => {
            console.log("error: ", error);
            init(source);
        });
}