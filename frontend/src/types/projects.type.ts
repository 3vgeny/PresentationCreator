export type ProjectT = {
  id: string;
  title: string;
  createdAt: Date;
  isDeleted: boolean;
  slides: string[];
  thumbnail: string;
  themeName: string;
}

export type OutlineCard = {
  title: string;
  order: number;
  id: string;
}