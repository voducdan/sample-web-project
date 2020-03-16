import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { HomeComponent } from './home/home.component';

const appRoute = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductComponent },
  { path: "products/:id", component: ProductDetailComponent }
];

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductDetailComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
