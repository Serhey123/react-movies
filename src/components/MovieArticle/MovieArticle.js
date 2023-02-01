import styles from './MovieArticle.module.css';

export default function MovieArticle({ title, content }) {
  return (
    <article>
      {content && typeof content === 'string' ? (
        <>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.info}>{content}</p>
        </>
      ) : (
        content.length !== 0 && (
          <>
            <h3 className={styles.title}>{title}</h3>
            <ul>
              {content.map(el => (
                <li key={el.name} className={styles.list__item}>
                  {el.name}
                </li>
              ))}
            </ul>
          </>
        )
      )}
    </article>
  );
}
