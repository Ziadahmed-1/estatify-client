import { Skeleton } from '@/components/ui/skeleton';
import Styles from '../components/propertiesSection/PropertiesSection.module.css';

interface Props {
  lines?: number;
}

export function SkeletonCard({ lines = 5 }: Props) {
  return (
    <div
      className={Styles.propertyCard}
      style={{ height: '455px', width: '350px', justifyContent: 'space-between' }}
    >
      <Skeleton className="h-[210px] w-full rounded-xl" />
      <div className="flex flex-col gap-5 items-center justify-between w-full">
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-full" />
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center justify-between w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-1/2" />
        ))}
      </div>
    </div>
  );
}

export default SkeletonCard;
