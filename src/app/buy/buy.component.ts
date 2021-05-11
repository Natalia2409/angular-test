import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass']
})
export class BuyComponent implements OnInit {

  task:any = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getRandomTask() {
    this.http.get('https://www.boredapi.com/api/activity')
      .subscribe((res:any) => {
        this.task = res;
      })
  }

}
