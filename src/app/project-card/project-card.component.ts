import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') thisProject: any;

  constructor() { }

  ngOnInit() {
    console.log('thisProject : ', this.thisProject);
  }

}
