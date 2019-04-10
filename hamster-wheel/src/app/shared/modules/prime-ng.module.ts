import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FieldsetModule
    ],
    exports: [
        ButtonModule,
        TableModule,
        FieldsetModule
    ],
})

export class PrimeNgModule { }
