export class Configuration {
    apiKey: string = localStorage.getItem('token');
    username: string;
    password: string;
    accessToken: string | (() => string);
    withCredentials: boolean;
}