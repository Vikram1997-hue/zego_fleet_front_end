import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.scss']
})
export class TextCarouselComponent implements OnInit {
  content=[
    {
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
    },
    {
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
    },
    {
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas nulla quam aliquam enim elit etiam. Interdum sit ante facilisis tempus nunc pretium. '
    }
  ]

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    autoWidth: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
