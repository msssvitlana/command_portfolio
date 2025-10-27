type IconProps = {
  width: number,
  height: number,
  iconName: string,
  className?: string,
}

const Icon = ({width, height, className, iconName}: IconProps) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/icons.svg#${iconName}`}></use>
    </svg>
  );
}

export default Icon