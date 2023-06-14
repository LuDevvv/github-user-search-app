import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = () => {
  return (
    <>
      <Skeleton count={4} />
    </>
  );
};
