import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ApiService } from './api.service';
import { SliderSectionComponent } from './slider-section/slider-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SliderSectionComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
@ViewChild('slider', {static:false }) slider!: ElementRef;

  api = inject(ApiService);
  frontPageData: any[] = [];


  
  ngOnInit(): void {
    this.api.getData().subscribe((response) => {
      console.log(response);
      this.frontPageData = response.data.category.frontPage;
      
    });
  }
  scrollRight(): void {
    console.log("clicked");
    this.slider.nativeElement.scrollLeft += 150;
  }
  scrollLeft(): void {
    console.log("clicked");
    this.slider.nativeElement.scrollLeft -= 150;
  }

}
