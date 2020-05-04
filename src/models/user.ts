import { Roles } from './roles';

export interface User {
    name:string,
    uid:string,
    roles: Roles
}