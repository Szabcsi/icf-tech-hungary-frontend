import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from '../client';
import { ClientService } from '../clientservice/client.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientListComponent implements OnInit {
  filteredClients: IClient[];
  clients: IClient[] = [];

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }

}
