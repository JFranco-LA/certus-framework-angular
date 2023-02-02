export class Message {
    id?: string;
    name: string;
    email: string;
    country: string;
    message: string;

    constructor(name: string, email: string, country: string, message: string){
        this.name = name;
        this.email = email;
        this.country = country;
        this.message = message;
    }
}