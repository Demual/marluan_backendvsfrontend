import { Component, OnInit } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[]

  constructor(
    public _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._httpService.getTechnologies().subscribe((technologies: Technology[]) => {
      this.technologies = technologies['data']
    })
  }

}
