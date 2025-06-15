import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Gallery from './Gallery';
import GalleryGrid from './GalleryGrid';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ isOpen, onClose }: GalleryModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);

  // Sample gallery images
  const galleryImages = [
    "/images/gallery/bus1.jpg",
    "/images/gallery/car 1.jpg",
    "/images/gallery/grace.jpg",
    "/images/gallery/shuttle.jpg",
    "/images/gallery/car 4.jpg",
    "/images/gallery/prius.jpg",
    "/images/gallery/v8 new.jpg",
    "/images/gallery/vezel.jpg",
    "/images/gallery/van 1.jpg",
    "/images/gallery/van 2.jpg",
    "/images/gallery/van 3.jpg",
    "/images/gallery/van 4.jpg"
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowFullGallery(true);
  };

  const handleOpenGallery = () => {
    setSelectedImageIndex(0);
    setShowFullGallery(true);
  };

  const handleCloseGallery = () => {
    setShowFullGallery(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Our Gallery
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <GalleryGrid
              images={galleryImages}
              onImageClick={handleImageClick}
              onOpenGallery={handleOpenGallery}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Gallery
        images={galleryImages}
        isOpen={showFullGallery}
        onClose={handleCloseGallery}
      />
    </>
  );
};

export default GalleryModal;