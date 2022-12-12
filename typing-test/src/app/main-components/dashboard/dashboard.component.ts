import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public optionsSelected: boolean=false;
  public timeOptions: string[] = ["1 Minute", "2 Minute", "3 Minute"];
  public difficultyOptions: string[] = ["Easy", "Medium", "Hard"];
  public selectedTime: string = '';
  public selectedDiff: string = '';
  public startDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public submit(): void {
    this.optionsSelected=true;
  }

}
