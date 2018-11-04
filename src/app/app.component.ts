import { Component, OnInit } from '@angular/core';
import { default as Siema } from 'siema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    new Siema();
  }
}
