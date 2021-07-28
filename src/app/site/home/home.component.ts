import { Component, OnInit } from '@angular/core';
import { FILMS } from '../shared/models/des-film';
import { Film } from '../shared/models/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   tabfilms : Film[] = FILMS;

  constructor() { }

  ngOnInit(): void {

  }

}
