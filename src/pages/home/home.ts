import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  deliveries = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: DatabaseProvider
  ) {}

  getDeliveries() {
    this.deliveries = this.database.deliveries;
  }
  ionViewDidLoad() {
    this.getDeliveries();
  }

  openDelivery(delivery) {
    this.navCtrl.push("DeliveryPage", { delivery });
  }
}
