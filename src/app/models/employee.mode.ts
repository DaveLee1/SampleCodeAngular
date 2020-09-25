import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

export class Employee {
    id: number;
    name: string;
    email?: string;
    photoPath?: string; 
}

