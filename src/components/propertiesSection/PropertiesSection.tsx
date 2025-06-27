import { getProperties } from '@/api/properties/propertiesAPI';
import '@/App.css';
import startsImg from '@/assets/icons/stars.png';
import type { PropertyResponse } from '@/types/property/types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Property from '../Property';
import Styles from './PropertiesSection.module.css';
import nextArrow from '@/assets/icons/rightArrow.png';
import prevArrow from '@/assets/icons/leftArrow.png';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const count = 3;
function PropertiesSection() {
  const [page, setPage] = useState(1);
  const { data: properties, isLoading } = useQuery<PropertyResponse>({
    queryKey: ['properties', page, count],
    queryFn: () => getProperties(page, count),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  function handleNextPage() {
    if (page >= properties?.meta?.totalPages) return;
    setPage(page + 1);
  }
  function handlePrevPage() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  return (
    <section className={Styles.sectionContainer}>
      <img src={startsImg} alt="starts" />
      <h3>Featured Properties</h3>
      <div className={Styles.line}>
        <p>
          Explore our handpicked selection of featured properties. Each listing offers a glimpse
          into exceptional homes and investments available through Estatein. Click "View Details"
          for more information.
        </p>
        <button className="glb-btn shaded">View All Properties</button>
      </div>

      <div className={Styles.cardsContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          properties?.data.map(property => <Property property={property} />)
        )}
      </div>
      <hr className=" w-full border-0.5 border-stone-500 mt-4 " />
      <div className={Styles.line}>
        <p>
          <span>{page}</span>
          <span className="text-neutral-400"> of {properties?.meta?.totalPages}</span>
        </p>
        <div className="flex gap-2">
          <button className="cursor-pointer" onClick={handlePrevPage}>
            <CircleArrowLeft className={page === 1 ? 'opacity-50' : ''} />
          </button>
          <button className="cursor-pointer" onClick={handleNextPage}>
            <CircleArrowRight
              className={page === properties?.meta?.totalPages ? 'opacity-50' : ''}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PropertiesSection;
