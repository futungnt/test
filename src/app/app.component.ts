import { Component, OnInit } from '@angular/core';
import {GeneralService} from './general.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  
  data: any;

  constructor(private generalService: GeneralService) { }

  ngOnInit(){
    this.generalService.get('http://ip.jsontest.com').subscribe(data => {
      console.log(data);
      this.data = data;
    } )
  }
}
