import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FlickrItem } from '../../../../data/flickr.interface';

@Component({
  selector: 'app-flickr-modal',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './flickr-modal.component.html',
  styleUrl: './flickr-modal.component.css'
})
export class FlickrModalComponent {
  data: FlickrItem = inject(MAT_DIALOG_DATA);
}
