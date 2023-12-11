import { Movies } from "./movies";

export interface Collection {
    id: number;
    title: string;
    userId: number;
    Movies: Movies[];
}