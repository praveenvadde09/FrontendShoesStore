// pages/dashboard.js or pages/[username].js
import Head from 'next/head';
import Image from 'next/image';
import styles from './Dashboard.module.css'; // Import the CSS module

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <div className={styles.container}>
        {/* Header component */}
        <header className={styles.header}>
          {/* Navigation and logo here */}
          <div className={styles.logo}>Eco Friendly Shoes</div>
          <nav>
            <a href="#">Heels</a>
            <a href="#">Sneakers</a>
            <a href="#">Boots</a>
            <a href="#">Sandals</a>
          </nav>
          <div className={styles.user}>
            {/* User icon and bag icon here */}
            <span>Yann</span>
            <span>Bag</span>
          </div>
        </header>

        {/* Main content component */}
        <main className={styles.main}>
          <div className={styles.welcome}>
            <h1>Welcome Back, Yann!</h1>
            <p>Thank you for joining us in our mission to redefine fashion  and pave the way towards a more sustainable future. By choosing our eco-friendly lady shoes, you're not only making a style statement but also contributing to positive change for our planet. Together, we're stepping towards a greener tomorrow, one stylish stride at a time. Your support means the world to us as we continue to innovate, inspire, and lead the way in ethical fashion. Here's to walking hand in hand towards a brighter, more sustainable future. Thank you for being a part of our journey!</p>
            {/* Image here */}
            <Image src="/flower-image.jpg" alt="Flower" width={100} height={100} />
          </div>
          <div className={styles.profile}>
            <section className={styles.about}>
              <h2>About Me</h2>
              <p>Yann Animam</p>
              {/* Other profile details */}
            </section>
            <section className={styles.contact}>
              <h2>Contact</h2>
              <p>Email Address: Yann@email.com</p>
              <p>Phone: 15287965847</p>
              {/* Other contact details */}
            </section>
            <section className={styles.address}>
              <h2>Shipping Address</h2>
              <p>Yann Animam</p>
              <p>123 Street Dr</p>
              <p>Denver, VA 20001</p>
            </section>
            <section className={styles.card}>
              <h2>Saved Card</h2>
              <p>Card Number: ****-****-****-(67)</p>
              <p>Yann Animam</p>
              <p>123 Street Dr</p>
              <p>Denver, VA 20001</p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

