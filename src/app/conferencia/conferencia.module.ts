import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ConferenciaListComponent],
  declarations: [ConferenciaListComponent]
})
export class ConferenciaModule { }
