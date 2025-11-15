import styles from './ProjectPage.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div
      className={styles.projectCard}
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
