export interface ILink {
    url: string;
    icon: Object;
}
export interface IProject {
    title: string;
    desc: string;
    cat: string;
    image: string;
    links: ILink[]
}