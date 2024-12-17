import { Suspense } from 'react';
import MovieProviders from '../../../../../components/movie-providers';
import { IParams } from '../page';

export default function Providers({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <MovieProviders id={id} />
      </Suspense>
    </div>
  );
}
