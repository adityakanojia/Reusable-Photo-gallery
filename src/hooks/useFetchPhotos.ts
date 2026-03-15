import type { PhotosInterface } from "../types/PhotosInterFace";
import type { FetchPhotosHookInterface } from "../types/FetchPhotoHookInterface";
import { useState, useEffect } from "react";


export default  function useFetchPhotos(photosUrl: string ): FetchPhotosHookInterface{
  const [photos, setPhotos] = useState<PhotosInterface[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
      const fetchPhotosUrl = async () => {
        try {
        const photosResponce = await fetch(photosUrl);
        if(!photosResponce.ok) { 
          setIsLoading(false); 
          setError("Photos not found");
          return 
        }
        const photosData = await photosResponce.json();
        setPhotos(photosData);
        setIsLoading(false);
 
        } catch (error) {
         setError(`Unable to fetch photos due to ${error}`) 
        }
      }
      
      fetchPhotosUrl();
  
    }
  ,[photosUrl]);
  
  return {
    photos,
    isLoading,
    error
  }

}

