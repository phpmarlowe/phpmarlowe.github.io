---
title: 图片
createTime: 2025/03/15 23:00:26
permalink: /image/
---

<Swiper :items="[
  'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird1.jpg',
   'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird2.jpg',
   'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/pic1.jpg']" 
    effect="cards"
/>

<Swiper :items="[ 'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/image_20220626_200153.gif']" effect="cube" />

<Swiper :items="[
  'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird1.jpg',
   'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird2.jpg',
   'https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/pic1.jpg']" 
   mode="carousel"
  :height="200"
  :slides-per-view="3"
  :space-between="20"
  :speed="5500" 
/>

<CardGrid>
  <ImageCard
    image="https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird1.jpg"
    title="雨中小鸟"
    description="吃完早餐散步,看见雨中有一只小鸟停在那里.雨越下越大也不飞走可能它还在饿着肚子吧"
    href="/"
    author="lm"
    date="2025/06/07"
  />
  <ImageCard
    image="https://phpmarlowe-test.oss-cn-beijing.aliyuncs.com/home/bird2.jpg"
    title="雨中小鸟"
    description="这张照片拍摄于一条小小的河道,雨中小鸟也不飞走,不置是等待雨停还是等一条小船"
    href="/test"
    author="lm"
    date="2025/06/07"
  />
</CardGrid>
