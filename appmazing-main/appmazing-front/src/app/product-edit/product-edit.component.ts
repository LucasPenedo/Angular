import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/Category';
import { CategoriesService } from '../categories.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  product: any;
  category: Category = new Category();
  categories: any = [];
  constructor(
      private productService: ProductsService,
      private categoriesService: CategoriesService,
      private route: ActivatedRoute,
      private router: Router,
      private datePipe: DatePipe
  ) {}

  ngOnInit() {
      this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
          this.product = data;
          this.loadCategories();
          this.product.active = this.product.active.toString(); 
          this.formatDate();
      });
  }
  formatDate() {
    const date = new Date(this.product.date_added);
    this.product.date_added = this.datePipe.transform(date, 'yyyy-MM-dd')
  }

  loadCategories() {
      this.categoriesService.getCategories().subscribe(data => {
          this.categories = data;
          this.product.category = this.categories.find(any => any.id === this.product.category.id);
      });
  }

  updateProduct() {
      this.productService.updateProduct(this.product);
      this.navigateDetail();
  }

  cancelUpdate() {
      this.navigateDetail();
  }

  navigateDetail() {
      this.router.navigate(['/product', this.route.snapshot.params['id']]);
  }

  

}
  
