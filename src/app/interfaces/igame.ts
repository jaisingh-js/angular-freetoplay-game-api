import { IScreenshot } from "./iscreenshot";

export interface IGame {
    id?: number;
    title: string;
    genre: string;
    platform: string;
    publisher: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    freetogame_profile_url: string;
    description: string;
    screenshots: IScreenshot[];
    release_date: string;

}
