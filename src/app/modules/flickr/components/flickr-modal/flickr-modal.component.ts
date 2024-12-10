import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-flickr-modal',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './flickr-modal.component.html',
  styleUrl: './flickr-modal.component.css'
})
export class FlickrModalComponent {
  data = inject(MAT_DIALOG_DATA);
}
