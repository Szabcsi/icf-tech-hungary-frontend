import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-systemconfiguration',
  templateUrl: './systemconfiguration.component.html',
  styleUrls: ['./systemconfiguration.component.css']
})
export class SystemConfigurationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }

}
