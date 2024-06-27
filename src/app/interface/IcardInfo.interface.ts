import { Istack } from "./Istack.interface";

export interface IcardInfo {
    url: string;
    title: string;
    description: string;
    stack: Array<Istack>;
}