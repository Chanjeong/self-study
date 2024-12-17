import { Suspense } from 'react';
import MovieCredits, { getCredit } from '../../../../../components/movie-credit';
import { IParams } from '../page';
import { getMovie } from '../../../../../components/movie-info';

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: `${movie.title}/Credit`
  };
}

export default function Credits({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Error</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}
