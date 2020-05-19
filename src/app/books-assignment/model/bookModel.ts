export interface IBookModel {
  id: string;
  title: string;
  description: string;
  imageLinks: {
    thumbnail?: string
  };
  authors: [string];
  publishedDate: string;
  categories: [string];
  pageCount: number;
}
