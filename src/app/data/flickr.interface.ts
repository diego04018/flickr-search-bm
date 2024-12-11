export interface FlickrItem {
  title: string;
  image: string;
  description: string;
  published: string;
  tags: string;
  author: string;
  author_id: string;
}

export interface FlickrRes {
  data: FlickrItem[],
  error: string | null;
  message: string;
}
