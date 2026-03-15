import type { PhotosInterface } from "./PhotosInterFace";
export interface FetchPhotosHookInterface {
  photos : PhotosInterface[];
  isLoading : boolean;
  error : string;
}

