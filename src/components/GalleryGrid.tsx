import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryGridProps {
  images: string[];
  onImageClick: (index: number) => void;
  onOpenGallery: () => void;
}

const GalleryGrid = ({ images, onImageClick, onOpenGallery }: GalleryGridProps) => {
  // Show first 6 images in the grid
  const displayImages = images.slice(0, 6);
  const remainingCount = images.length - 6;

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg mb-4">No photos available yet</p>
        <p className="text-gray-400 text-sm">Check back soon for amazing photos from Sri Lanka!</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => onImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {index === 5 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold text-lg">
                +{remainingCount} more
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length > 6 && (
        <div className="text-center">
          <Button
            onClick={onOpenGallery}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Camera className="h-4 w-4 mr-2" />
            View All Photos ({images.length})
          </Button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;