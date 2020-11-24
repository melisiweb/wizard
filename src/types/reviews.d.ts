export interface ReviewImage {
  url: string,
  description?: string
}

export interface ReviewPayload {
  id?: number,
  title: string,
  rating: number,
  description: string,
  image: ReviewImage,
  date: string,
}

export type Review = ReviewPayload | null