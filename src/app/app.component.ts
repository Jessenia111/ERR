import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
@ViewChild('slider', {static:false }) slider!: ElementRef;

  scrollRight(): void {
    console.log("clicked");
    this.slider.nativeElement.scrollLeft += 150;
  }
  scrollLeft(): void {
    console.log("clicked");
    this.slider.nativeElement.scrollLeft -= 150;
  }

}
