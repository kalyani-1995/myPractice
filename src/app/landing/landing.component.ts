import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private router:Router)
  {
  }

  home()
  {
   this.router.navigateByUrl( 'home' )
  }

  addcircle()

    {
    this.router.navigateByUrl( 'addcircle')
    }


  }

