export class Serie 
{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descriptions: string;  
    webpages: string;
    poster: string;

    constructor(id: number, name: string, channel: string, seasons: number, descriptions: string, webpages: string, poster: string) 
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descriptions = descriptions;
        this.webpages = webpages;
        this.poster = poster;
    }
}
