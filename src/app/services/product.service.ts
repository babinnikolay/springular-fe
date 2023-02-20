import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/product";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  products: IProduct[] = []


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/products')
      .pipe(
        tap(products => this.products = products),
      )

  }

  create(product: IProduct): Observable<IProduct>{
    console.log(product)
    return this.http.post<IProduct>('http://localhost:8080/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }
}
