import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  deliveries = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  getDeliveries() {
    this.deliveries = [
      {
        id: 1,
        establishiment: {
          name: "Vitão LTDA",
          address: { neigh: "Felícia", city: "Conkas" },
        },
        customer: {
          address: {
            neigh: "Felícia",
            street: "Rua dos anjos",
            number: 3,
            zip_code: "565656",
            city: "Conkas",
          },
        },
      },
      {
        id: 2,
        establishiment: {
          name: "Vitão LTDA",
          address: { neigh: "Felícia", city: "Conkas" },
        },
        customer: {
          address: {
            neigh: "Felícia",
            street: "Rua dos anjos",
            number: 3,
            zip_code: "565656",
            city: "Conkas",
          },
        },
      },
      {
        id: 3,
        establishiment: {
          name: "Vitão LTDA",
          address: { neigh: "Felícia", city: "Conkas" },
        },
        customer: {
          address: {
            neigh: "Felícia",
            street: "Rua dos anjos",
            number: 3,
            zip_code: "565656",
            city: "Conkas",
          },
        },
      },
    ];
  }
  ionViewDidLoad() {
    this.getDeliveries();
  }
}
