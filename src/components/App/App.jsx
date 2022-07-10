import * as styles from './App.module.css';

const heroImage = new URL('../../images/hero-image.jpg', import.meta.url);

function App() {
  return (
    <div className={styles.app}>
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
        <article className={styles.article}>
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
        {window.location.hash === '#img' && (
          <img
            src={heroImage}
            alt="Lorem ipsum dolar sit"
            width="375"
            height="250"
            className={styles['hero-image']}
          />
        )}
        {window.location.hash === '#svg-image' && (
          <svg
            width="375"
            height="250"
            xmlns="http://www.w3.org/1000/svg"
            viewBox="0 0 375 250"
            className={styles['hero-image']}
          >
            <image href={heroImage} width="375" height="250" />
          </svg>
        )}
        {window.location.hash === '#video-poster' && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            poster={heroImage}
            width="375"
            height="250"
            className={styles['hero-image']}
          />
        )}
        {window.location.hash === '#background-image' && (
          <div className={` ${styles['hero-image-background']}`} />
        )}
      </main>
      <footer className={styles.footer}>
        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit</small>
      </footer>
    </div>
  );
}

export default App;
