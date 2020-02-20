export class Hobby {
    public image: string

    public get src(): string {
        return `/assets/img/hobbies/${ this.image }`
    }
}
