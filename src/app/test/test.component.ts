import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  constructor(private router :Router)
  {

  }
  Test()
  {
    this.router.navigateByUrl('test')
  }

  back()
  {
    this.router.navigateByUrl('landing')
  }
}
