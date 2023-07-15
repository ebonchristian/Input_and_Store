import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  heartRate!: number;
  bloodPressure!: number;
  oxygenLevel!: number;

  constructor(private router: Router) {}

  submitData() {
    // Store the input values in local storage
    localStorage.setItem('heartRate', this.heartRate.toString());
    localStorage.setItem('bloodPressure', this.bloodPressure.toString());
    localStorage.setItem('oxygenLevel', this.oxygenLevel.toString());
  }

  viewReport() {
    // Navigate to the report page
    this.router.navigateByUrl('/report');
  }
  ngOnInit() {
      
  }
}
