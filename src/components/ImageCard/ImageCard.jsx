import styles from './ImageCard.module.css';

const ImageCard = ({ photo, onClick }) => {
  
  return (
    <div className={styles.card} onClick={() => onClick(photo)}>
      <img
        src={photo.urls.small} 
        alt={photo.alt_description || 'Unsplash image'} 
        className={styles.image}
      />
      <div className={styles.overlay}>
        <p className={styles.author}>{photo.user.name}</p>
        {photo.description && (
          <p className={styles.description}>{photo.description}</p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;