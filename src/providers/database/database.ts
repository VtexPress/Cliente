import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  constructor(public http: HttpClient) {
    console.log("Hello DatabaseProvider Provider");
  }
  public deliveries = [
    {
      id: "TESTE01",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
    {
      id: "TESTE02",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
    {
      id: "TESTE03",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
    {
      id: "TESTE04",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
    {
      id: "TESTE05",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
  ];

  public userDeliveries = [
    {
      id: "TESTE04",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
    {
      id: "TESTE05",
      deliveryEstimate: "02/05/2020",

      status: ["Aguardando entregador", "Saiu do estabelecimento", "A caminho"],
      establishiment: {
        name: "Vtex LTDA",
        address: {
          neigh: "Centro",
          street: "Rua da conquista",
          number: 3,
          zip_code: "45000-665",
          city: "VCA",
        },
      },
      customer: {
        name: "João Adalto",
        address: {
          neigh: "Felícia",
          street: "Rua dos anjos",
          number: 3,
          zip_code: "45055-702",
          city: "VCA",
        },
      },
    },
  ];

  public credentials = {
    deliveryMan: {
      email: "motorista@email.com",
      password: "1234",
    },
  };
}
