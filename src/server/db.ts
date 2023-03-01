import { DataSource } from "typeorm";
import { Arranger } from "./entities/arranger";
import { Composer } from "./entities/composer";
import { Genre } from "./entities/genre";
import { Piece } from "./entities/piece";
import { Publisher } from "./entities/publisher";
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

export async function letsTryOutTheEntities(source: DataSource) {
    const a = new Arranger();
    a.name = "Kurti";
    await source.manager.save(a);

    const c = new Composer();
    c.name = "Monsieur Williams";
    await source.manager.save(c);

    const g = new Genre();
    g.name = "Jazz";
    await source.manager.save(g);

    const publisher = new Publisher();
    publisher.name = "Some scummy dude";
    publisher.somethingImportant = "very important";
    await source.manager.save(publisher);

    const piece = new Piece();
    piece.name = "Allgäu-Land, bestes Land";
    piece.genres = [g];
    piece.arrangers = [a];
    piece.composers = [c];
    piece.publisher = publisher;

    await source.manager.save(piece);

    console.log(await source.manager.findOneBy(Piece, {id: piece.id}));

}