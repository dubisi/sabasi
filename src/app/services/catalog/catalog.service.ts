import { Injectable } from '@angular/core';
import { ICatalog } from '../../models/interfaces/i-catalog';
import { Observable, Subscriber, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService implements ICatalog {

  Image: string;
  ProductOverview: string;
  KeyBenefits: string[];
  Usage: string[];
  Key: string;
  private catalog: ICatalog[] = [];

  constructor() {
    this.Image = "assets/catalog/stomach_solution.png";
    this.ProductOverview = "STOMACH SOLUTION";
    this.KeyBenefits = ["Used for digestive disorders, bloating, constipation & ulcers", 
                        "Stomach cramps and inflammation of stomach lining",
                        "Good for heartburn and appetite stimulation",
                        "Relieve body pain & gout",
                        "Cleansing the blood , prevent hair loss & nail loss",
                        "Alleviate allergies, itching, eczema &  acne"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/immuno.png";
    this.ProductOverview = "IMMUNO";
    this.KeyBenefits = ["Strengthens immune system",
                        "Antioxidant & anti-inflammatory properties",
                        "Protects against cold & flu",
                        "Improves brain functioning & memory loss",
                        "Protects liver and Kidneys"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/bone_health.png";
    this.ProductOverview = "BONE HEALTH";
    this.KeyBenefits = ["Loosens muscular cramps and bone pains",
                        "Relieves headaches and rheumatism",
                        "Improves joint function and slows progression of osteoarthritis",
                        "speeds up the formation of new joint cartilage"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/circulation.png";
    this.ProductOverview = "CIRCULATION";
    this.KeyBenefits = ["Dilutes veins & support blood",
                        "Controls blood & sugar levels",
                        "Strengthens heart & eases muscle cramps",
                        "Reduce bronchitis, asthma & cholesterol",
                        "Good for liver disorders & headaches",
                        "Decreases stress, anxiety & sleeplessness"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/herbal_tea.png";
    this.ProductOverview = "HERBAL TEA";
    this.KeyBenefits = ["Good for sleeplessness/insomnia",
                        "Nervous disorders",
                        "Assist with high cholesterol",
                        "Asthma and inflammatory conditions",
                        "Good for hair loss, eczema and headaches",
                        "Helps to relieve flu & indigestion"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/rub_ointment.png";
    this.ProductOverview = "RUB OINTMENT";
    this.KeyBenefits = ["Good for muscle pains",
                        "Good for skin care",
                        "Alleviates general aches and pain",
                        "Good for arthritis & rheumatism"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/female_health.png";
    this.ProductOverview = "FEMALE HEALTH";
    this.KeyBenefits = ["Increase immunity to colds and infections",
                        "Helps with cramping pain in the womb",
                        "Ladies’ hormone stabilizer and menstrual cycle",
                        "Relaxes muscle spasms, rheumatism and female disorder",
                        "Enhances female fertility and vitality"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
    this.Image = "assets/catalog/male_health.png";
    this.ProductOverview = "MALE HEALTH";
    this.KeyBenefits = ["Strengthens immune system",
                        "Anti-anxiety and anti-inflammatory",
                        "Rejuvenating male fertility and libido",
                        "Increase testosterone and sperm count",
                        "Tonic for male reproductive system and prostatic problems"
                      ];
    this.Usage = [];
    this.Key = this.ProductOverview;
    this.catalog.push(this.getCatalog());
  }

  getCatalog(): ICatalog {
    return {Image: this.Image, ProductOverview: this.ProductOverview, KeyBenefits: this.KeyBenefits, Usage: this.Usage, Key: this.Key} as ICatalog;
  }

  retrieveCatalog(): Observable<ICatalog[]> {
    return of(this.catalog);
  }

  getProductById(key: string): Observable<ICatalog | null> {
    const product = this.catalog.find(product => product.Key === key);

    if (product) {
      return of(product);
    }

    return of({} as ICatalog)

  }
}
