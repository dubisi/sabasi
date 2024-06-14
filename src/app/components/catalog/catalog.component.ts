import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog/catalog.service';
import { ICatalog } from '../../models/interfaces/i-catalog';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, CommonModule, MatPaginatorModule, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit  {
  public catalog: ICatalog[] = [];
  public pagedItems: ICatalog[] = [];
  public pageSize = 4;
  public currentPage = 0;
  @Input() isHome: boolean = false;

  public constructor(private _catalogService: CatalogService) {

  }

  ngOnInit(): void {
    this.getCatalog();
    
  }
  getCatalog() {
    this._catalogService.retrieveCatalog().subscribe(x => {
      this.catalog = x;
      this.updatePagedItems();
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedItems();
  }

  updatePagedItems() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedItems = this.catalog.slice(startIndex, endIndex);
  }
}
