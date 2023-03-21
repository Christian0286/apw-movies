const baseUrl = 'http://api.themoviedb.org/3';
export class constantUri {
    public static readonly apikey = 'd6ee8a74fc33601f812c222d8f545065';
    public static readonly validateWithLogin = baseUrl+ '/authentication/token/validate_with_login';
    public static readonly tokenNew = baseUrl+ '/authentication/token/new';
}
