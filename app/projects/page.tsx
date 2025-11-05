'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import ProjectCard from './ProjectCard';
import styles from './ProjectPage.module.css';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'Сучасне персональне портфоліо з адаптивним дизайном і анімаціями для презентації ваших робіт.',
      image:
        'https://raw.githubusercontent.com/Vyacheslav-Chop/project-persistent-portfolio/refs/heads/main/src/img/hero/lloyd-jefferson-avatar.avif',
    },
    {
      title: 'TravelTrucks App',
      description:
        'Платформа для оренди кемперів по Україні: плануйте подорожі зручно та без зайвого клопоту.',
      image:
        'https://raw.githubusercontent.com/msssvitlana/TravelTrucks_app/main/public/image/homePage/Picture.jpg',
    },
    {
      title: 'Online Pregnancy Tracker',
      description:
        'Зручний трекер для майбутніх мам: відстеження вагітності, завдань та щоденних нотаток',
      image:
        'https://raw.githubusercontent.com/Vyacheslav-Chop/project-stork-front/refs/heads/main/public/image/profile/og_profile.webp',
    },
    {
      title: 'Watch Catalog',
      description:
        'Інтерактивна сторінка-каталог для годинників із фільтрами, описами та привабливим UI.',
      image:
        'https://raw.githubusercontent.com/Vyacheslav-Chop/Project-Persistent/refs/heads/main/src/img/about-us/watch-about-desktop.jpg',
    },
    {
      title: 'NoteHub — Note Manager',
      description:
        'Менеджер нотаток для організації та збереження ваших ідей і списків справ у одному місці.',
      image: 'https://raw.githubusercontent.com/username/notehub/main/screenshot.png',
    },
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Наші веб-чудеса </h1>
      <p className={styles.subtitle}>
        Від маленьких ідей до великих проєктів — подивіться, що ми створили!
      </p>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        navigation={true} 
        grabCursor={true} 
        centeredSlides={true}
        slidesPerView={2} 
        loop={true}
        spaceBetween={-50}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        simulateTouch={true} 
        touchRatio={1}
        touchStartPreventDefault={false} 
        className={styles.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
