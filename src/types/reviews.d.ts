export interface ReviewImage {
  url: string,
  description?: string,
}

export interface ReviewPayload {
  id?: number,
  title: string,
  rating: number | string,
  description: string,
  image: ReviewImage,
  date: string,
}

export interface ReviewFormProps {
  itemId: number | string,
  stepId: number | string,
  review: Review,
}

export type Review = ReviewPayload | null