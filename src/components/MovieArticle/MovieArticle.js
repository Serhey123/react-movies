import styles from './MovieArticle.module.css';

export default function MovieArticle({ title, content }) {
  return (
    <>
      {content && (
        <article>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.info}>{content}</p>
        </article>
      )}
    </>
  );
}
