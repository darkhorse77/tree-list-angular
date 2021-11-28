import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeItemComponent } from './tree-item/tree-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TreeControlService } from './tree-control.service';


@NgModule({
  declarations: [
    AppComponent,
    TreeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [TreeControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
