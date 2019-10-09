import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-projects-wrapper',
  templateUrl: './projects-wrapper.component.html',
  styleUrls: ['./projects-wrapper.component.scss']
})
export class ProjectsWrapperComponent implements OnInit {
  projects: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const apiUrl = `assets\\projects.json`;
    this.http.get(apiUrl)
      .toPromise()
      .then((data: any[]) => {
        this.projects = data;
        debugger
      })
      .catch((error) => {  })
  }

}
