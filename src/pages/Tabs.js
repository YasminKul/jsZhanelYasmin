import React, { useState } from 'react';
import '../styles/Tabs.css';
import Modal from '../components/Modal';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOrderPlaced, setOrderPlaced] = useState(false);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOrderPlaced(false);
  };

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button onClick={() => toggleTab('delivery')} className={activeTab === 'delivery' ? 'active' : ''}>
          Доставка
        </button>
        <button onClick={() => toggleTab('location')} className={activeTab === 'location' ? 'active' : ''}>
          Нахождение
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'delivery' && (
          <div className="delivery-content">
            <h2>Наши преимущества доставки</h2>
            <div className="advantages">
              <div className="advantage-item">
                <img src="https://avatars.mds.yandex.net/get-altay/4667561/2a00000179894ed9fa6c51c04a69bdcfb562/L_height" alt="Быстрая доставка" />
                <p>Быстрая доставка</p>
              </div>
              <div className="advantage-item">
                <img src="https://static.tildacdn.com/tild3531-3863-4435-b732-333837356330/image.png" alt="Свежие продукты" />
                <p>Всегда на связи</p>
              </div>
              <div className="advantage-item">
                <img src="https://40.img.avito.st/image/1/1.rmw47Law-D6PTZiRaEHmTjX4rIaOTwKDiA.V36P8A5_gRmKegJYaRdX_9wWDwD0j34j2y-k7Th7-VA" alt="Отличное обслуживание" />
                <p>Отличное обслуживание</p>
              </div>
            </div>
            <button className="order-button" onClick={openModal}>Заказать сейчас</button>
          </div>
        )}
        {activeTab === 'location' && (
          <div className="location-content">
            <h2>Преимущества нашей кофейни</h2>
            <div className="advantages">
              <div className="advantage-item">
                <img src="https://aif-s3.aif.ru/images/017/975/1a8fb4114f198965b46470247d40e216.jpg" alt="Лучший кофе в городе" />
                <p>Готовят при вас</p>
              </div>
              <div className="advantage-item">
                <img src="https://amiel.club/uploads/posts/2022-10/1665157501_20-amiel-club-p-uyutnaya-kofeinya-dizain-oboi-22.jpg" alt="Уютная атмосфера" />
                <p>Уютная атмосфера</p>
              </div>
              <div className="advantage-item">
              <img src="https://welcome.kz/ru/assets/images/products/0_gallery/locations/almaty/gorky-park.jpeg" alt="Улицца" />
                <p>Адрес: ул. Примерная, 1, Алматы</p>
              </div>
            </div>
            <div className="map">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a href="https://yandex.kz/maps/ru/162/almaty/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                  Алматы
                </a>
                <a href="https://yandex.kz/maps/ru/162/almaty/?ll=76.914851%2C43.273564&utm_medium=mapframe&utm_source=maps&z=12" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                  Яндекс Карты — транспорт, навигация, поиск мест
                </a>
                <iframe
                  src="https://yandex.kz/map-widget/v1/?ll=76.914851%2C43.273564&z=12"
                  width="560"
                  height="400"
                  frameBorder="1"
                  allowFullScreen
                  style={{ position: 'relative' }}
                  title="Карта города Алматы"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
      {isModalOpen && !isOrderPlaced && <Modal closeModal={closeModal} handleOrder={handleOrder} />}
      {isOrderPlaced && (
        <div className="modal">
          <div className="modal-content order-confirmation">
            <p>В течение пяти минут вам позвонит наш менеджер Айнура.</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;

