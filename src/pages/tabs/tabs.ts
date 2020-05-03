import { Component } from "@angular/core";

import { IonicPage, NavController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html",
})
export class TabsPage {
  public tabs = [
    {
      root: "HomePage",
      title: "Home",
      icon: "home",
    },
    {
      root: "DeliveriesPage",
      title: "Entregas",
      icon: "paper-plane",
    },
    { root: "ProfilePage", title: "Perfil", icon: "person" },
  ];

  constructor(public navCtrl: NavController) {}
}
