export interface ICatalog {
    Key: string;
    Image: string;
    ProductOverview: string;
    KeyBenefits: string[];
    Usage: string[];

    getCatalog(): ICatalog;
}