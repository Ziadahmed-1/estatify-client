import heroImage from '../../assets/heroImage.png';
import heroLogo from '../../assets/heroLogo.png';
import image1 from '../../assets/icons/heroIcon1.png';
import image2 from '../../assets/icons/heroIcon2.png';
import image3 from '../../assets/icons/heroIcon3.png';
import image4 from '../../assets/icons/heroIcon4.png';

import styles from './HeroSection.module.css';

function HeroSection() {
  const cards = [
    {
      id: 1,
      title: '200+',
      description: 'Happy Customers',
    },
    {
      id: 2,
      title: '10k+',
      description: 'Properties For Clients',
    },
    {
      id: 3,
      title: '16+',
      description: 'Years of Experience',
    },
  ];

  const mainCards = [
    {
      id: 1,
      image: image1,
      title: 'Find Your Dream Home',
    },
    {
      id: 2,
      image: image2,
      title: 'Unlock Property Value',
    },
    {
      id: 3,
      image: image3,
      title: 'Effortless Property Management',
    },
    {
      id: 4,
      image: image4,
      title: 'Smart Investments, Informed Decisions',
    },
  ];
  return (
    <main className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Your Dream Property with Estatein</h1>
          <p className={styles.heroDescription}>
            Your journey to finding the perfect property begins here. Explore our listings to find
            the home that matches your dreams.
          </p>
          <div className={styles.heroButtons}>
            <button className="glb-btn filled">Learn More</button>
            <button className="glb-btn purble">Browse Properties</button>
          </div>
          <div className={styles.cardsContainer}>
            {cards.map(card => (
              <div key={card.id} className={styles.card}>
                <h3 className={styles.heroCardTitle}>{card.title}</h3>
                <span className={styles.heroCardDescription}>{card.description}</span>
              </div>
            ))}
          </div>
          {/* <div className={styles.heroLogo}>
            <img src={heroLogo} alt="Trade mark" />
          </div> */}
        </div>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} className={styles.heroImage} alt="Hero Image" />
        </div>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.mainCardsContainer}>
          {mainCards.map(card => (
            <div key={card.id} className={styles.mainCard}>
              <img src={card.image} alt={card.title} className={styles.mainCardIcon} />
              <h3 className={styles.mainCardTitle}>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
