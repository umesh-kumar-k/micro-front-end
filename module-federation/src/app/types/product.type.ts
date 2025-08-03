export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string; // ISO Date string
        updatedAt: string; // ISO Date string
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

type Review = {
  rating: number;
  comment: string;
  date: string; // ISO Date string
  reviewerName: string;
  reviewerEmail: string;
};

type Pagination = {
    limit: number;
    skip: number;
    total: number;
}

export type ProductResponse = {
    products: Product[];
    pagination: Pagination;
}