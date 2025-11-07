type Props = {
  date: string | Date | undefined;
};

export const formatDate = ({ date }: Props) => {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
