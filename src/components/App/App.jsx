import * as styles from './App.module.css';

const heroImage = new URL('../../images/hero-image.jpg', import.meta.url);

function App() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles['nav-list']}>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Amet</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <article>
          <h1 className={styles['primary-heading']}>
            Lorem ipsum dolor sit amet
          </h1>
          <section>
            <h2 className={styles['secondary-heading']}>
              Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium ducimus laborum possimus, quis sed inventore voluptate
              quod blanditiis illo expedita adipisci itaque, dolorum molestiae
              asperiores. Nesciunt aspernatur possimus eos debitis!
            </p>
          </section>
        </article>
        <svg
          width="375"
          height="250"
          xmlns="http://www.w3.org/1000/svg"
          viewBox="0 0 375 250"
          className={styles['hero-image']}
        >
          <image href={heroImage} width="375" height="250" />
        </svg>
      </main>
    </>
  );
}

export default App;
