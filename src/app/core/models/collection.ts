import { Movies } from "./movies";

export class Collection {
    public Id!: number;
    public Title!: string;
    public userId!: number;
    public Movies!: Movies[];

    public convertFromSource(item: any): Collection {
        if (item.backPlate) {
        }
        this.Id = item.id;
        this.Title = item.title;
        this.userId = item.userId;
        return this;
    }
}