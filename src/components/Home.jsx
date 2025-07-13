import ImageUpload from './Imageupload';
import ImagePreview from './Imagepreview';
import { useState } from 'react';
import { enhancedImageAPI } from '../utils/EnhancedImageAPI';

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedUrl = await enhancedImageAPI(file);
      setEnhancedImage(enhancedUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ImageUpload uploadImageHandler={uploadHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
    </>
  );
}

export default Home;
