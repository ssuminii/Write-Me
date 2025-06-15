export interface ImageUpload {
  imageUrl: string;
  size: {
    width: number
    height: number
  }
}

export interface ImageUploadProps {
  label?: boolean
  image: ImageUpload
  onImageUploadChange: (image: ImageUpload) => void
}