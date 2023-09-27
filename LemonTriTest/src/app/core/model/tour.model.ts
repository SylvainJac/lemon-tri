

export interface Teammate {
  id: string;
  name: string;
}

export interface Client {
  id: string;
  name: string;
  address: string;
}

export enum Quality {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE"
}

export enum Material {
  PAPER = "PAPER",
  CARTON = "CARTON",
  GLASS = "GLASS",
  CONFIDENTIAL_PAPER = "CONFIDENTIAL_PAPER",
  BIOWASTE = "BIOWASTE",
  BOTTLE = "BOTTLE",
  CAN = "CAN",
  FURNITURE = "FURNITURE"
}

export enum Container {
  BIG_ROLL = "BIG_ROLL",
  SMALL_ROLL = "SMALL_ROLL",
  CONTAINER_120 = "CONTAINER_120",
  CONTAINER_240 = "CONTAINER_240",
  CONTAINER_660 = "CONTAINER_660",
  PAPER_BAC = "PAPER_BAC =",
  ASH_CAN = "ASH_CAN",
}

export interface Waste {
  id: string;
  quantity: number;
  container: Container;
  material: Material;
  quality: Quality,
  weighed?: number
}

export interface Step {
  id: string;
  name: string;
  client: Client;
  wastes: Waste[];
}

export interface Tour {
  id: string;
  date: Date;
  name: string;
  teammate: Teammate;
  steps: Step[];
}
