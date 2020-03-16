import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../api.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  product: any;
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.api.getBooksDetail(id).subscribe(
      res => {
        console.log(res);
        this.product = res[0];
      },
      err => {
        console.log(err);
      }
    );
  }
}
