import { API_URL } from '../app/constants';
import styles from '../styles/movie-credit.module.css';

export const getCredit = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
};

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredit(id);
  return (
    <div>
      <div className={styles.container}>
        {credits.map(credit => (
          <div key={credit.id} className={styles.creditItem}>
            <div className={styles.creditName}>{credit.name}</div>
            <img
              src={`${credit.profile_path ? credit.profile_path : 'https://via.placeholder.com/185x278'}`}
              alt={credit.original_name}
              className={styles.creditImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
