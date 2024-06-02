import React, { useState } from 'react';
import Slider from 'react-slick';
import ReviewItem from '../components/ReviewItem';
import ChatWindow from '../components/ChatWindow';
import '../styles/ReviewsPage.css';

const ReviewsPage = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const reviews = [
    {
      id: 1,
      image: 'https://kartinki.pics/uploads/posts/2022-03/1647515975_59-kartinkin-net-p-kofeinya-kartinki-59.jpg',
      avatar: 'https://cs10.pikabu.ru/post_img/2019/02/08/11/1549649183175163822.jpg',
      text: 'Отличная кофейня, с приятным оформлением и персоналом, хорошо подходит для эстетичных фоток!',
      author: 'Ирина Девальчук'
    },
    {
      id: 2,
      image: 'https://ssnab.ru/upload/iblock/cf7/ds28b5mau1t4l8b88rvjk3yfzcs8brt7.jpg',
      avatar: 'https://im.kommersant.ru/ISSUES.PHOTO/REGIONS/KRASNODAR_ONLINE/2020/08/24/photo21.jpg',
      text: 'Все было вкусно, кофе отменное, бариста Алмаз лучший!',
      author: 'Федор Шляпин'
    },
    {
        id: 3,
        image: 'https://alterainvest.ru/upload/iblock/a6d/a6da3468dc9cd06582ad4a1a446803a2.jpg',
        avatar: 'https://www.sostav.ru/images/news/2019/04/11/ym1qcllo.jpg',
        text: 'Здесь прекрасно все, я даже познакомилась с Селеной, я в шоке',
        author: 'Зарина Уралова'
      },
      {
        id: 4,
        image: 'https://www.torrefacto.ru/upload/medialibrary/e65/e655e1107f43976a31927e7d7430d2ac.jpg',
        avatar: 'https://n1s1.hsmedia.ru/0c/fa/a0/0cfaa07ade427f5df7e3173f903d8f38/600x600_1_111bf5236d97d25c74c6c555f8d514cf@1280x1280_0xac120004_3152866721681717524.jpeg',
        text: 'Советую всем побывать здесь, после невозможно будет пройти мимо',
        author: 'Ариана Гранде'
      },
      {
        id: 5,
        image: 'https://www.trial-market.ru/upload/guide/shutterstock_623686004.jpg',
        avatar: 'https://www.soyuz.ru/public/uploads/files/6/7185397/20180316170517afc94abe9e.jpg',
        text: 'Лучшая кофейня, уютно, красиво и персонал приветливый',
        author: 'Селена Гомес'
      },
      {
        id: 6,
        image: 'https://st3.depositphotos.com/1030327/16175/i/450/depositphotos_161757184-stock-photo-two-cups-of-cappuccino-coffee.jpg',
        avatar: 'https://kinotv.ru/upload/delight.webpconverter/upload/setka-editor/3c2/v9s21poo46yet08945iyklwoue7y5zre.jpeg.webp?1700055321301482',
        text: 'Самые лучшие шоколадные пироги в городе',
        author: 'Тимоти Шаламе'
      },
      {
        id: 7,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/f9/0c/be/caption.jpg',
        avatar: 'https://sun9-32.userapi.com/impg/lEbQIgW9XS2C-IC__HukHZrvwUB6jnDNTUdiaQ/lwvjyiaB1JY.jpg?size=453x604&quality=96&sign=4623555001c54bb64194cc8d4d953e6b&c_uniq_tag=Lril1fEfQrgl7ukTGydeLx0wr24_roOizaf_uiJ_EWU&type=album',
        text: 'Все было вкусно, чай классный, наваристый',
        author: 'Луис Партридж'
      }
  ];

  return (
    <div className="reviews-page">
      <Slider {...settings} className="full-page-slider">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </Slider>
      <button className="chat-toggle" onClick={() => setChatVisible(!chatVisible)}>Чат с менеджером</button>
      {chatVisible && (
        <div className="chat-popup">
          <button className="chat-close" onClick={() => setChatVisible(false)}>×</button>
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default ReviewsPage;
