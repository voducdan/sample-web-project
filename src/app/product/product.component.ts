import { Component, OnInit } from "@angular/core";

import { ApiService } from "../api.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  constructor(private api: ApiService) {}

  books: any;
  ngOnInit() {
    this.books = [{ name: "Vo duc dan" }];
    // this.api.getBooks().subscribe(
    //   res => {
    //     console.log(res);
    //     this.books = res;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}
