import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CatalogComponent } from "../catalog/catalog.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TopBarComponent, RouterOutlet, MatToolbarModule, RouterModule, CatalogComponent]
})
export class HomeComponent {

}
