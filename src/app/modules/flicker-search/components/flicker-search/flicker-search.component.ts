import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-flicker-search',
  standalone: true,
  imports: [ MatButtonModule, MatInputModule, MatIconModule,MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './flicker-search.component.html',
  styleUrl: './flicker-search.component.css'
})
export class FlickerSearchComponent {
  value = '';
}
