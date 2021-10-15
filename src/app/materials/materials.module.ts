import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion'; 

const MaterialComponents = [
  MatExpansionModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialsModule { }