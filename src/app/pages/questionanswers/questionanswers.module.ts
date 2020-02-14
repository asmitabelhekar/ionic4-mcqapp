import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionanswersPageRoutingModule } from './questionanswers-routing.module';

import { QuestionanswersPage } from './questionanswers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionanswersPageRoutingModule
  ],
  declarations: [QuestionanswersPage]
})
export class QuestionanswersPageModule {}
