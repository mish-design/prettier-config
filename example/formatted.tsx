import React from 'react';
import styles from './styles.module.css';
import Text from '@/components/ui/Text/Text';
import Title from '@/components/ui/Title/Title';
import SubCard from '@/components/OrderCard/components/SubCard/SubCard';
import PhotosContainer from '@/components/OrderCard/components/PhotosContainer/PhotosContainer';
import {ShortOrders} from '@/types/moySkladInterfaces';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {useWindowWidth} from '@react-hook/window-size';
import Button from '@/components/ui/Button/Button';

const OrderCard = ({
  date,
  price,
  orders,
  number,
  isDone,
  store,
}: ShortOrders) => {
  const orderDate = dayjs(new Date(date));
  const width = useWindowWidth();

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div>
          <Title variant='h3' color='white' className={styles.cardTitleText}>
            {width > 500 && 'Заказ от '}
            {orderDate
              .locale('ru')
              .format('DD/MMMM/YYYY')
              .toString()
              .split('/')
              .join(' ')}
          </Title>
          <Title variant='h3' color='white' className={styles.cardTitleText}>
            {price / 100} ₽
          </Title>
        </div>
        <div>
          <Text
            variant='body semi-bold'
            color='grey'
            className={styles.cardText}
          >
            № {number}
          </Text>
          <Text
            variant='body semi-bold'
            color='grey'
            className={styles.cardText}
            isComicCat
          >
            {isDone ? 'Оплачен' : 'будет оплачен онлайн'}
          </Text>
        </div>
      </div>
      <div className={styles.order}>
        <SubCard
          name={store.name}
          date={orderDate
            .locale('ru')
            .format('DD/MMMM')
            .toString()
            .split('/')
            .join(' ')}
          isDone={isDone}
          isDisplayTag={width > 500}
        />
        {width < 500 && (
          <Button variant={isDone ? 'yellow' : 'white'} size='s'>
            {isDone ? 'Получен' : 'Обрабатывается'}
          </Button>
        )}
        <PhotosContainer data={orders} />
      </div>
    </div>
  );
};

export default OrderCard;
