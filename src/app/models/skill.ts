export class Skill {
    public icon: string

    public get src(): string {
        return `/assets/img/skills/${ this.icon }`
    }
}
