export class Post {

    public Author: string;
    public Title: string;
    public Content: string;
    public Slug: string;
    public HeaderImage: string;
    public DateCreated: number;
    public uid: string;
    public DocumentRef: string;

    constructor() {
        this.Author = "";
        this.Title = "";
        this.Content = "";
    }
}