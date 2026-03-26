import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DesignStyle {
    id: string;
    tagline: string;
    name: string;
    description: string;
    category: Category;
}
export enum Category {
    portfolio = "portfolio",
    editorial = "editorial",
    blog = "blog",
    bold = "bold",
    minimal = "minimal",
    landing = "landing",
    ecommerce = "ecommerce"
}
export interface backendInterface {
    getAllDesignStyles(): Promise<Array<DesignStyle>>;
    getDesignStyleById(id: string): Promise<DesignStyle>;
    getDesignStylesByCategory(cat: Category): Promise<Array<DesignStyle>>;
}
