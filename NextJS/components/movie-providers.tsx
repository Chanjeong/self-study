import { API_URL } from '../app/constants';
import styles from '../styles/movie-providers.module.css';

export const getProviders = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
};

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  return (
    <div className={styles.providersContainer}>
      {providers.AU.rent.map(provider => (
        <div className={styles.providerItem} key={provider.provider_id}>
          <img src={`${provider.logo_path}`} alt={`${provider.provider_name}`} />
        </div>
      ))}
    </div>
  );
}
