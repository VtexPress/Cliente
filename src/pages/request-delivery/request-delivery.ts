import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import { AppNotificationsProvider } from "../../providers/app-notifications/app-notifications";

/**
 * Generated class for the RequestDeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-request-delivery",
  templateUrl: "request-delivery.html",
})
export class RequestDeliveryPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public database: DatabaseProvider,
    public notifications: AppNotificationsProvider
  ) {}
  newDelivery = "TESTE01";
  deliveries: any;
  getDeliveries() {
    this.deliveries = this.database.userDeliveries;
  }
  async ionViewDidLoad() {
    await this.getDeliveries();
    console.log(this.deliveries);
  }
  findDelivery() {
    const delivery = this.deliveries.find(
      (element) => element.id === this.newDelivery
    );
    if (delivery) this.openDelivery(delivery);
    else this.notifications.showToast("Entrega não encontrada");
  }
  openDelivery(delivery) {
    this.notifications.showToast("Em desenvolvimento");
  }
}
