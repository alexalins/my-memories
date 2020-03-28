import { User } from './User';

export class Message {
    key ?: string;
    user ?: User;
    message ?: string;
    date ?: string;

    constructor() {}
}