export type TContact = {
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type Category = {
  id: number;
  name: string;
};

type Tag = {
  id: number;
  name: string;
};

export type TProject = {
  id: number;
  title: string;
  slug: string;
  category: Category;
  featured_image: string;
  tags: Tag[];
  is_documented: boolean;
  live_link: string;
};

interface ImageData {
  id: number;
  image: string;
}

export interface SlickSliderProps {
  images: ImageData[];
}
