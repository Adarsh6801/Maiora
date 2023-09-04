import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http : HttpClient) { }
  
 // This function retrieves a list of products from a JSON file using HTTP GET request.
   getProduct():Observable<Product[]>{
    return this.http.get<Product[]>('./assets/product.data.json')
  }
}
