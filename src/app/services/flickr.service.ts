import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { FlickrRoutes } from '../data/flickr.enums';
import { Observable } from 'rxjs';
import { FlickrRes } from '../data/flickr.interface';

@Injectable()
export class FlickrService {

  constructor(private http: HttpClient) { }

  getFlickrFeed(tags: string): Observable<FlickrRes> {
    let params = new HttpParams();
    params = params.set('tags', tags)
    return this.http.get<FlickrRes>(`${environment.api_host}${FlickrRoutes.Feeds}`, { params });
  }

}
