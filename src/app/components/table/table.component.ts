import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { Product } from 'src/app/model/interfaces/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  Products!:Product[]
  pageSize:number = 5; // Set your desired page size
  currentPage:number = 1;
  totalPages:number = 1;
  constructor(private service :TableService) {
    
  }
  ngOnInit(): void {
    this.getProduct()
  }

  // get the products
  getProduct(){
    this.service.getProduct().subscribe((res)=>{
      this.Products=res;
      console.log(res);
      // get the total pages
      this.totalPages = Math.ceil(this.Products.length / this.pageSize);
    })
  }

  // set current page
  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // get pages for the pagination and create an array from 1 to the total pages
  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
