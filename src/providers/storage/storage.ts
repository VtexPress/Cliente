import { Injectable } from "@angular/core";
@Injectable()
export class StorageProvider {
  constructor() {}

  /**
   * salva os dados do usuário em local storage
   * @param user dados do usuároio
   */
  setUserData(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  /**
   * retorna os dados do usuário salvas em local storage
   */
  getUserData() {
    return JSON.parse(localStorage.getItem("user"));
  }

  /**
   * salva o token de autenticação do usuário em local storage
   * @param token token do usuároio
   */
  setUserToken(token: string) {
    localStorage.setItem("token", token);
  }

  /**
   * retorna o token do usuário
   */
  getUserToken() {
    return localStorage.getItem("token");
  }

  setLocation(location) {
    localStorage.setItem("location", JSON.stringify(location));
  }

  getLocation() {
    return JSON.parse(localStorage.getItem("location"));
  }
}
