import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

export class Login{
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

