'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Section from '@/components/Ui/Section/Section';
import ProjectCard from './ProjectCard';
import styles from './ProjectPage.module.css';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'Сучасне персональне портфоліо з адаптивним дизайном і анімаціями для презентації ваших робіт.',
      image: '/images/projects/project_image.png',
      link: 'https://vyacheslav-chop.github.io/project-persistent-portfolio',
    },
    {
      title: 'TravelTrucks App',
      description:
        'Платформа для оренди кемперів по Україні: плануйте подорожі зручно та без зайвого клопоту.',
      image: '/images/projects/Picture.jpg',
      link: 'https://travel-trucks-app-9ej7.vercel.app/',
    },
    {
      title: 'Online Pregnancy Tracker',
      description:
        'Зручний трекер для майбутніх мам: відстеження вагітності, завдань та щоденних нотаток.',
      image:
        'https://raw.githubusercontent.com/Vyacheslav-Chop/project-stork-front/refs/heads/main/public/image/profile/og_profile.webp',
      link: 'https://project-stork-front.vercel.app',
    },
    {
      title: 'Watch Catalog',
      description:
        'Інтерактивна сторінка-каталог для годинників із фільтрами, описами та привабливим UI.',
      image:
        'https://raw.githubusercontent.com/Vyacheslav-Chop/Project-Persistent/refs/heads/main/src/img/about-us/watch-about-desktop.jpg',
      link: 'https://vyacheslav-chop.github.io/Project-Persistent',
    },
    {
      title: 'NoteHub — Note Manager',
      description:
        'Менеджер нотаток для організації та збереження ваших ідей і списків справ у одному місці.',
      image: '/images/projects/back_about_us3.jpg',
      link: 'https://09-auth-tan.vercel.app/',
    },
  ];

  return (
    <Section className={styles.section}>
      <h1 className={styles.title}>Наші веб-чудеса</h1>

      <div className={styles.subtitleWrapper}>
        <p className={styles.subtitle}>
          Від маленьких ідей до великих проєктів — подивіться, що ми створили!
        </p>
      </div>

      <div className={styles.swiperOuter}>
        <div className={`swiper-button-prev ${styles.customPrev}`}></div>

        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Mousewheel]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          simulateTouch={true}
          className={styles.swiperContainer}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
              },
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -30,
              centeredSlides: true,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: false,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`swiper-button-next ${styles.customNext}`}></div>
      </div>
    </Section>
  );
}
