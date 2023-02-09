import styles from './MovieArticleList.module.css';

export default function MovieArticleList({ title, content }) {
  return (
    <>
      {content?.length !== 0 && (
        <article>
          <h3 className={styles.title}>{title}</h3>
          <ul>
            {content.map(el => (
              <li key={el.name} className={styles.list__item}>
                {el.name}
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
}
