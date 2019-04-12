import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        ButtonModule,
        TableModule,
        FieldsetModule,
        SelectButtonModule,
        ChartModule,
    ],
    exports: [
        ButtonModule,
        TableModule,
        FieldsetModule,
        SelectButtonModule,
        ChartModule,
    ],
})

export class PrimeNgModule { }
