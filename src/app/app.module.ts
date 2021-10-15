import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialsModule, PostCreateComponent ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
