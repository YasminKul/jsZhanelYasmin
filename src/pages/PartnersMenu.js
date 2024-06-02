import React from 'react';
import '../styles/PartnersMenu.css';
import PartnerItem from '../components/PartnerItem';
import ColleagueBlock from '../components/ColleagueBlock';


const PartnersMenu = () => {
  const partners = [
    {
      id: 1,
      name: 'Молочные продукты',
      description: 'Мы закупаем молоко у лучшего бренда. Наши поставщики гарантируют высокое качество и свежесть продукции.',
      types: ['Коровье молоко', 'Органическое молоко: Банановое, Соевое, Овсяное, Миндальное, Кокосовое'],
      image: 'https://veggiepeople.org/sites/default/files/styles/group_card_medium/public/brand-images/4424-alpro.jpg' 
    },
    {
      id: 2,
      name: 'Зерна',
      description: 'Наши зерна поставляются из европы у проверенного бренда, обеспечивая богатый и насыщенный вкус.',
      types: ['Арабика', 'Робуста', 'Бленды'],
      image: 'https://www.domcoffee.ru/upload/iblock/6ad/6ad14011096cfc4796ceec8b39f64cdf.jpg' 
    },
    {
      id: 3,
      name: 'Сахар',
      description: 'Мы используем только высококачественный сахар от проверенных поставщиков.',
      types: ['Белый сахар', 'Коричневый сахар', 'Тростниковый сахар'],
      image: 'https://www.swr.de/swraktuell/baden-wuerttemberg/mannheim/1713541223622%2Csuedzucker-102~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg' 
    }
  ];

  const colleagues = [
    {
      name: 'Антон',
      age: 28,
      position: 'Бариста',
      schedule: 'Пн-Пт: 8:00-16:00',
      image: 'https://drasler.ru/wp-content/uploads/2019/05/Фото-мужчин-30-лет-простых-из-жизни-подборка-001.jpg' 
    },
    {
      name: 'Алмаз',
      age: 19,
      position: 'Бариста',
      schedule: 'Пн-Пт: 16:00-00:00',
      image: 'https://www.zakon.kz/pbi/WEBP/2024-01-30/file-593d6049-c1ec-4536-94d3-7f051cdb2648/800x634.webp' 
    },
    {
      name: 'Юлия',
      age: 22,
      position: 'Кассир',
      schedule: 'Пн-Пт: 8:00-16:00',
      image: 'https://img.freepik.com/free-photo/portrait-of-blonde-woman-looking-at-photographer_23-2148348970.jpg' 
    },
    {
      name: 'Амина',
      age: 43,
      position: 'Тех-персонал',
      schedule: 'Пн-Пт: 16:00-00:00',
      image: 'https://static.365info.kz/uploads/2018/06/c4e5a215a62a9731386e25ae696330f5.jpg' 
    },
    {
      name: 'Айнура',
      age: 32,
      position: 'Менеджер',
      schedule: 'Пн-Вс: 24/7 онлайн',
      image: 'https://avatars.dzeninfra.ru/get-zen_doc/1587710/pub_5e63f4f513ba980e68fc83e2_5e63f501b86afa74c58d8188/scale_1200' 
    },
  ];

  return (
    <div className="partners-menu">
    <h2>Наши Партнеры</h2>
    <div className="quality-section">
      <h3>Качество</h3>
      <p>Мы строго следим за качеством всех наших продуктов, чтобы обеспечить нашим клиентам лучший опыт. Наша продукция проходит тщательный контроль на всех этапах производства.</p>
    </div>
    {partners.map(partner => (
      <PartnerItem key={partner.id} partner={partner} />
    ))}
      <h2>Наши Коллеги</h2>
      <div className="colleagues-section">
        {colleagues.map((colleague, index) => (
          <ColleagueBlock key={index} {...colleague} />
        ))}
      </div>
    </div>
  );
}

export default PartnersMenu;