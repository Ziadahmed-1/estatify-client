import '@/App.css';
import type { Property } from '@/types/property/types';
import { useEffect, useState } from 'react';
import Styles from '../components/propertiesSection/PropertiesSection.module.css';
import noPhoto from '../assets/noPhoto.png';

function Property({ property }: { property: Property }) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (property?.images?.length > 0) {
      const base64Images = property.images.map(image => {
        const byteArray = new Uint8Array(image.data.data);
        let binary = '';
        byteArray.forEach(byte => (binary += String.fromCharCode(byte)));
        return `data:image/jpeg;base64,${window.btoa(binary)}`; // or image/png if needed
      });
      setImages(base64Images);
    }
  }, [property]);

  return (
    <div className={Styles.propertyCard} key={property.id}>
      {images.length > 0 ? (
        <img src={images[0]} alt={property.title} />
      ) : (
        <img src={noPhoto} alt={property.title} />
      )}
      <h4 className={Styles.title}>{property.title}</h4>
      <p className={Styles.description}>{property.description}</p>
      <ul className={Styles.features}>
        {property.features?.map(feature => <li key={feature}>{feature}</li>)}
        <li>Furniture</li>
        <li>Furniture</li>
      </ul>
      <div className={Styles.footer}>
        <div>
          <span>Price</span>
          <h3>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
              property.price
            )}
          </h3>
        </div>
        <button className="glb-btn purble">View Details</button>
      </div>
    </div>
  );
}

export default Property;
