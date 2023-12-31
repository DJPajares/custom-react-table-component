import React, { FC, SVGProps } from 'react';

interface ArrowUpIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const ArrowUpIcon: FC<ArrowUpIconProps> = ({
  size = 36,
  color = 'black',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9393 1.93934C17.5251 1.35355 18.4748 1.35355 19.0606 1.93934L28.6066 11.4853C29.1923 12.0711 29.1923 13.0208 28.6066 13.6066C28.0208 14.1924 27.071 14.1924 26.4852 13.6066L19.5 6.62132L19.5 33C19.5 33.8284 18.8284 34.5 18 34.5C17.1715 34.5 16.5 33.8284 16.5 33L16.5 6.62132L9.51468 13.6066C8.92889 14.1924 7.97914 14.1924 7.39336 13.6066C6.80757 13.0208 6.80757 12.0711 7.39336 11.4853L16.9393 1.93934Z"
      fill="#222222"
    />
  </svg>
);

export default ArrowUpIcon;
