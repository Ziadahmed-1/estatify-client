import React, { useEffect, useState } from 'react';
import Styles from '../components/propertiesSection/PropertiesSection.module.css';
import '@/App.css';
import type { Property } from '@/types/property/types';

function Property({ property }: { property: Property }) {
  const imageBuffer = property.images[0];

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (imageBuffer?.data) {
      const byteArray = new Uint8Array(imageBuffer.data);
      const blob = new Blob([byteArray], { type: 'image/png' }); // or 'image/png' if needed
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
    }
  }, [imageBuffer]);

  return (
    <div className={Styles.propertyCard} key={property.id}>
      <img src={imageSrc} alt={property.title} />
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
          <h3>${property.price}</h3>
        </div>
        <button className="glb-btn purble">View Details</button>
      </div>
    </div>
  );
}

export default Property;
