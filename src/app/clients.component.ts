import { Component, OnInit } from '@angular/core';

import { Client }                from './client';
import { ClientService }         from './client.service';

@Component({
  selector: 'my-clients',
  templateUrl: './clients.component.html',
  styleUrls: [ './clients.component.css' ]
})

export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  getClients(): void {
    this.clientService
        .getClients()
        .then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }
}
