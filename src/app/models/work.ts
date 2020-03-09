export class Work {
    public image: string
    public icon: string

    public get src(): string {
        return `/assets/img/experience/detail/${ this.image }`
    }

    public get logo(): string {
        return `/assets/img/experience/list/${ this.icon }`
    }
}