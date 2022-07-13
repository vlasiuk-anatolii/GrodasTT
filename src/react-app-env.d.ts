/// <reference types="react-scripts" />
export interface Image {
  id: number,
  image: string,
  tags: string[],
  title: string,
  url: string,
  age: number,
  rating: number,
}

export interface NewImage extends Image {
  localurl: string,
}
