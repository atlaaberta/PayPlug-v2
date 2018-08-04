import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CardNewPage } from "./card-new";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [CardNewPage],
  imports: [IonicPageModule.forChild(CardNewPage), ComponentsModule]
})
export class CardNewPageModule {}
