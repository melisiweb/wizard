export interface ReviewImage {
  url: string,
  description?: string,
}

export interface ReviewPayload {
  id?: number,
  title: string,
  rating: number,
  description: string,
  image: ReviewImage,
  date: string,
}

export interface ReviewFormProps {
  itemId: number,
  stepId: number,
  review: Review,
}

export interface RatingFieldProps {
  rating: number,
  readOnly?: boolean,
  setRating?: function,
}

export type Review = ReviewPayload | null