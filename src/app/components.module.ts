import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MyBoardComponent } from './my-board/my-board.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    MyBoardComponent
  ],
  exports: [
    MyBoardComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
