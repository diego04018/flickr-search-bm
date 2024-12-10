import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlickrService } from '../../../../services/flickr.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FlickrModalComponent } from '../flickr-modal/flickr-modal.component';


@Component({
  selector: 'app-flicker-search',
  standalone: true,
  imports: [ MatButtonModule, MatInputModule, MatIconModule,
             MatFormFieldModule, MatInputModule, FormsModule,
             CommonModule, MatProgressSpinnerModule, MatDialogModule],
  providers:[FlickrService],
  templateUrl: './flicker-search.component.html',
  styleUrl: './flicker-search.component.css',
})
export class FlickerSearchComponent implements OnInit{
  value = '';
  msg='';
  flickrFeed: { image: string; }[] = [];
  isLoading = false;
  searchCompleted = false;
  readonly dialog = inject(MatDialog);
  constructor(private flickrService: FlickrService ){}

  ngOnInit(): void {

  }

  startSearch(): void{
    this.searchCompleted = false;
    this.isLoading = true;
    this.flickrFeed = this.flickrService.getFlickrFeed();
    setTimeout(()=>{
      this.msg = 'No se encontraron resultados';
      this.isLoading=false;
      this.searchCompleted=true;
    },3000);
  }

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(FlickrModalComponent, {
      data: {item},
    });
  }
}
