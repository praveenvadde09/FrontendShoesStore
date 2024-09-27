// pages/orders.js
import Head from 'next/head';
import Image from 'next/image';
import styles from './Orders.module.css'; // Import the CSS module

const Orders = () => {
  // Placeholder data for the orders, you should fetch this from an API or server in a real application
  const orders = [
    {
      id: '15vsf252',
      name: 'Shoes name',
      price: '74.98',
      category: 'Heels',
      size: '8.5',
      image: '/path-to-shoes-image.jpg', // Replace with your image path
    },
    // ... add more orders as needed
  ];

  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <div className={styles.container}>
        <h1>Orders</h1>
        <div className={styles.tabs}>
          <span>profile</span>
          <span className={styles.activeTab}>Orders</span>
        </div>
        {orders.map((order) => (
          <div key={order.id} className={styles.order}>
            <div className={styles.imageContainer}>
              <Image src={order.image} alt={order.name} width={100} height={100} />
            </div>
            <div className={styles.orderDetails}>
              <p className={styles.price}>${order.price}</p>
              <p className={styles.name}>{order.name}</p>
              <p>{order.category}</p>
              <p>Size {order.size}</p>
            </div>
            <div className={styles.orderId}>
              <p>Order #{order.id}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;