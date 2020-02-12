export class Technology {
    public image: string

    public get src(): string {
        return `/assets/img/technologies/${ this.image }`
    }
}
