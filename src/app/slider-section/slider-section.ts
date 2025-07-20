import { Component, Input, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slider-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-section.html',
  styleUrl: './slider-section.css'
})
export class SliderSectionComponent implements OnInit, AfterViewInit {
  @Input() section: any;
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  hovering: boolean = false;
  shouldShowScroll: boolean = false;

  ngOnInit() {
    this.shouldShowScroll = this.section?.data?.length > 4;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const container = this.slider.nativeElement;
      this.shouldShowScroll = container.scrollWidth > container.clientWidth;
    });
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
