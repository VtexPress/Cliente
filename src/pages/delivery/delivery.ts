import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, Platform, NavParams } from "ionic-angular";

declare var google;
@IonicPage()
@Component({
  selector: "page-delivery",
  templateUrl: "delivery.html",
})
export class DeliveryPage {
  @ViewChild("map") mapElement: ElementRef;

  delivery: any;
  map: any;
  start: any = {};
  end: any = {};
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  loading = false;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public navParans: NavParams
  ) {
    this.delivery = navParans.get("delivery");
  }

  async ionViewDidLoad() {
    this.loading = true;
    await this.getLocation()
      .then(async (position: any) => {
        this.start.lat = position.coords.latitude;
        this.start.lng = position.coords.longitude;
        console.log(position, this.start);

        await this.initMap();
        await this.calculateAndDisplayRoute();
      })
      .catch((err = { code: 90 }) => this.errorHandler(err));
    this.loading = false;
  }

  get navigationLink() {
    return `https://www.google.com/maps/dir/?api=1&destination=+${this.delivery.customer.address.zip_code}&travelmode=transitg&dir_action=navigate`;
  }
  async initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: this.start,
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    console.log(this.start);

    this.directionsService.route(
      {
        origin: this.start,
        destination: this.delivery.customer.address.zip_code,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert("Erro inesperado, tente novamente " + status);
        }
      }
    );
  }

  errorHandler(err) {
    if (err.code == 1) {
      alert("Localização indisponível, ative seu GPS!");
      return;
    } else if (err.code == 2) {
      alert("Error: Position is unavailable!");
      return;
    }
    alert("Erro inesperado aconteceu");
  }
  async getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (err) => {
            reject(err);
            this.errorHandler(err);
          },
          options
        );
      } else {
        alert("Este navegador não suporta acesso a localização!");
      }
    });
  }
}
