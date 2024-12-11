import { Component, inject } from '@angular/core';
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
import { FlickrItem } from '../../../../data/flickr.interface';
import { catchError, EMPTY, take } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-flicker-search',
  standalone: true,
  imports: [ MatButtonModule, MatInputModule, MatIconModule,
             MatFormFieldModule, MatInputModule, FormsModule,
             CommonModule, MatProgressSpinnerModule, MatDialogModule,
             MatTooltipModule],
  providers:[FlickrService],
  templateUrl: './flicker-search.component.html',
  styleUrl: './flicker-search.component.css',
})
export class FlickerSearchComponent {
  value = '';
  msg='';
  flickrFeed: FlickrItem[] = [];
  isLoading = false;
  searchCompleted = false;
  readonly dialog = inject(MatDialog);
  constructor(private flickrService: FlickrService ){}

  startSearch(): void{
    this.searchCompleted = false;
    this.isLoading = true;
    this.flickrService.getFlickrFeed(this.value).pipe(
      take(1),
      catchError((err) =>{
        this.msg = err.message !== '' ? err.message : 'Ha ocurrido un error, porfavor intentar mas tarde';
        this.isLoading=false;
        this.searchCompleted=true;
        return EMPTY;
      })
    ).subscribe((res) => {
      this.isLoading=false;
      this.searchCompleted=true;
      this.flickrFeed = res?.data;
      this.msg  = res.message;
    });
  }

  openDialog(item: FlickrItem): void {
    if(!item.tags.includes(',')){
      const tags = item.tags.split(" ").join(', ');
      item.tags = tags;
    }
    this.dialog.open(FlickrModalComponent, {
      data: {...item},
    });
  }
}
