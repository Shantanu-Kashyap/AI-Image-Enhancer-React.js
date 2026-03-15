import { useEffect, useState } from 'react';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import { enhancedImageAPI } from '../utils/EnhancedImageAPI';

function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originalFileName, setOriginalFileName] = useState('enhanced-image');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    return () => {
      if (uploadImage) {
        URL.revokeObjectURL(uploadImage);
      }
    };
  }, [uploadImage]);

  const uploadHandler = async (file) => {
    if (uploadImage) {
      URL.revokeObjectURL(uploadImage);
    }

    setUploadImage(URL.createObjectURL(file));
    setOriginalFileName(file.name.replace(/\.[^/.]+$/, '') || 'enhanced-image');
    setEnhancedImage(null);
    setErrorMessage('');
    setLoading(true);

    try {
      const enhancedUrl = await enhancedImageAPI(file);
      if (!enhancedUrl) {
        throw new Error('No enhanced image returned from API.');
      }
      setEnhancedImage(enhancedUrl);
    } catch (error) {
      console.error(error);
      setErrorMessage('Enhancement failed. Please try another image in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='w-full max-w-6xl'>
      <ImageUpload uploadImageHandler={uploadHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
        originalFileName={originalFileName}
      />

      {errorMessage && (
        <p className='mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700'>
          {errorMessage}
        </p>
      )}
    </section>
  );
}

export default Home;
