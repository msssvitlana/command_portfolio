export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
  };
  excerpt?: string;
  publishedAt?: string;
  author?: {
    name?: string;
    role?: string;
  };
};
