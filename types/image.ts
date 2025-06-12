export interface ImageUpload {
  imageUrl: string;
  size: {
    width: number
    height: number
  }
}

export interface ImageUploadProps {
  image: ImageUpload
  onImageUploadChange: (image: ImageUpload) => void
}