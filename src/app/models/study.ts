export class Study {
    public image: string

    public get src(): string {
        return `/assets/img/education/${ this.image }`
    }
}
