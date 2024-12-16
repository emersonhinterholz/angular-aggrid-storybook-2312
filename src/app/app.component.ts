import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AggridPlaceholderComponent } from './aggrid-placeholder/aggrid-placeholder.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AggridPlaceholderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
