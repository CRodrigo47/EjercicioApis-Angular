export type FinalSpaceInterface = Characters[]

export interface Characters {
  id: number;
  name: string;
  status: string;
  species?: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
}
