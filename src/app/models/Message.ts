import { User } from './User';

export class Message {
    id ?: string;
    user ?: User;
    message ?: string;
    date ?: string;

    constructor() {}
}