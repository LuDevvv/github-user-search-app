import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardSkeleton = () => {
  return (
    <div className="card-user">
      <div className="flex-ct">
        <div className="left-ct">
          <Skeleton count={2} />
        </div>
        <div className="rihgt-ct">
          <Skeleton circle width={150} height={150} />
        </div>
      </div>

      <Skeleton
        height={90}
        count={3}
        style={{
          marginBottom: '5px',
        }}
      />
    </div>
  );
};
