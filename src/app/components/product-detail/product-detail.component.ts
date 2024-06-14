import { Component, OnInit } from '@angular/core';
import { ICatalog } from '../../models/interfaces/i-catalog';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../services/catalog/catalog.service';
import { CommonModule } from '@angular/common';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  public product!: ICatalog;
  public faWhatsapp = faWhatsapp;
  private whatsapptoLink: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _catalogService: CatalogService
  ) { }

  ngOnInit(): void {
    this.getProductByKey();  
  }

  getProductByKey() {
    const key = this._route.snapshot.paramMap.get('id');
    if (!key) {
      return;
    }
    this._catalogService.getProductById(key).subscribe(p => {
      if (p) {
        this.product = p;
      } else {
        this.product = {} as ICatalog
      }
      
    })
  }

  onSubmit() {
      this.whatsapptoLink = `https://api.whatsapp.com/send?phone=%2B27722651415&text=Hello%20I%20would%20like%20to%20check%20if%20this%20Order: ${this.product.ProductOverview.toLowerCase()}%20is%20available?`;
      
      window.location.href = this.whatsapptoLink;
  }
}
