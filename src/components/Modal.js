import React, { useState } from 'react';
import '../styles/Modal.css';

const Modal = ({ closeModal, handleOrder }) => {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [coffee, setCoffee] = useState('');
  const [dish, setDish] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const submitOrder = () => {
    handleOrder();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Оформление заказа</h2>
        <form>
          <label>
            ФИО:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Район:
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value="">Выберите район</option>
              <option value="Алмалинский">Алмалинский</option>
              <option value="Медеуский">Медеуский</option>
              <option value="Ауэзовский">Ауэзовский</option>
              <option value="Бостандыкский">Бостандыкский</option>
              <option value="Алатауский">Алатауский</option>
            </select>
          </label>
          <label>
            Выбор кофе:
            <select value={coffee} onChange={(e) => setCoffee(e.target.value)}>
              <option value="">Выберите кофе</option>
              <option value="Нет">Нет</option>
              <option value="Капучино">Капучино</option>
              <option value="Латте">Латте</option>
              <option value="Экспрессо">Экспрессо</option>
            </select>
          </label>
          <label>
            Выбор блюд:
            <select value={dish} onChange={(e) => setDish(e.target.value)}>
              <option value="">Выберите блюдо</option>
              <option value="Нет">Нет</option>
              <option value="Круассан">Круассан</option>
              <option value="Сэндвич">Сэндвич</option>
              <option value="Торт">Торт</option>
            </select>
          </label>
          <label>
            Адрес:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <label>
            Номер телефона:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <button className="order-button" onClick={submitOrder}>
            Заказать
          </button>
          <button className="close-button" onClick={closeModal}>
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

