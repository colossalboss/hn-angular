import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

const QUERY = `
  {
    graphQLHub
    hn {
      topStories(limit: 30) {
        title
        id
        descendants
        url
        timeISO
        time
        score
        by {
          id
        }
      }
    }
  }
`;
const URL = 'https://www.graphqlhub.com/graphql';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(URL, {
        query: QUERY,
      },
      {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
    // return this.http.get<any[]>('../api/products/products.json');
    // return this.http.get<any[]>('https://www.graphqlhub.com/graphql');
  }
}
