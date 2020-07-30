import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manageactiveclients',
  templateUrl: './manageactiveclients.component.html',
  styleUrls: ['./manageactiveclients.component.css']
})
export class ManageActiveClientsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
