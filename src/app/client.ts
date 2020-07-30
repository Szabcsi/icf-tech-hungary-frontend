import { Role } from './role';

export interface IClient {
    id: number;
    name: string;
    password: string;
    lastlogin: string;
    roles: Role[];
}

export class Client {
    id: number;
    name: string;
    password: string;
    lastlogin: string;
    roles: Role[];
}
