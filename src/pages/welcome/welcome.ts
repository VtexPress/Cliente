import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { User } from "../../providers";
import { MainPage } from "..";

@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html",
})
export class WelcomePage {
  constructor(public navCtrl: NavController, public user: User) {}

  goDeliveryMan() {
    this.navCtrl.push(this.user.getLocalUserToken() ? MainPage : "LoginPage");
  }
  goRequestDelivery() {}
  logout() {}
}
