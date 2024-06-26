type SVGLogoProps = {
  width: string;
};

const Icon: React.FC<SVGLogoProps> = ({ width }) => {
  return (
    <svg
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      {/* <path fill="#7B8CDE" d="M0 0H600V600H0z"></path> */}
      <path
        fill="#EBEBEB"
        stroke="#000"
        strokeWidth="18"
        d="M518 116.411v374.178C518 517.308 496.308 539 469.589 539H95.411C68.692 539 47 517.308 47 490.589V116.411C47 89.692 68.692 68 95.411 68h374.178C496.308 68 518 89.692 518 116.411z"
        transform="translate(17.5 -3.5)"
      ></path>
      <path
        fill="#C0E6DE"
        stroke="#000"
        strokeWidth="23.89"
        d="M518 102.645v401.71C518 523.476 504.604 539 488.105 539H76.895C60.396 539 47 523.476 47 504.355v-401.71C47 83.524 60.396 68 76.895 68h411.21C504.604 68 518 83.524 518 102.645z"
        transform="matrix(.8068 0 0 .69618 72.08 115.16)"
      ></path>
      <g fillRule="nonzero">
        <path
          d="M196.419 235v-94.06h45.283c8.779 0 16.371 1.434 22.776 4.3 6.405 2.867 11.354 6.965 14.848 12.295 3.493 5.33 5.24 11.623 5.24 18.879 0 7.256-1.747 13.505-5.24 18.745-3.494 5.241-8.443 9.249-14.848 12.026-6.405 2.777-13.997 4.166-22.776 4.166h-27.681l14.109-13.034V235h-31.711zm56.301 0l-23.112-34.265h33.593L286.582 235H252.72zm-24.59-33.19l-14.109-14.377h25.665c4.39 0 7.637-.986 9.742-2.956 2.105-1.971 3.158-4.659 3.158-8.063 0-3.404-1.053-6.091-3.158-8.062-2.105-1.971-5.352-2.956-9.742-2.956h-25.665l14.109-14.378v50.792zM296.525 235v-94.06h26.068l37.624 61.408h-13.706l36.549-61.408h26.068l.269 94.06h-28.89l-.269-50.523h4.569l-24.993 42.058h-13.975l-26.068-42.058h5.644V235h-28.89zM473.357 237.15c-7.525 0-14.49-1.187-20.895-3.561-6.405-2.374-11.959-5.755-16.662-10.145-4.702-4.389-8.353-9.585-10.951-15.587-2.598-6.002-3.896-12.631-3.896-19.887s1.298-13.885 3.896-19.887c2.598-6.002 6.249-11.197 10.951-15.587 4.703-4.389 10.257-7.771 16.662-10.145 6.405-2.374 13.37-3.561 20.895-3.561 9.227 0 17.401 1.613 24.523 4.838 7.121 3.225 13.011 7.883 17.67 13.974l-20.022 17.872c-2.777-3.494-5.845-6.204-9.204-8.13-3.359-1.926-7.144-2.889-11.354-2.889-3.315 0-6.316.538-9.003 1.613-2.688 1.075-4.994 2.642-6.92 4.703-1.926 2.06-3.427 4.546-4.502 7.457-1.075 2.912-1.612 6.159-1.612 9.742 0 3.583.537 6.831 1.612 9.742 1.075 2.911 2.576 5.397 4.502 7.458 1.926 2.06 4.232 3.628 6.92 4.703 2.687 1.075 5.688 1.612 9.003 1.612 4.21 0 7.995-.963 11.354-2.889 3.359-1.926 6.427-4.636 9.204-8.129l20.022 17.871c-4.659 6.002-10.549 10.638-17.67 13.907-7.122 3.27-15.296 4.905-24.523 4.905z"
          transform="translate(-55.984 128)"
        ></path>
      </g>
      <g>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(-60 -56.545) scale(1.54545)"
        ></circle>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(-15.24 -56.545) scale(1.54545)"
        ></circle>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(29.52 -56.545) scale(1.54545)"
        ></circle>
      </g>
    </svg>
  );
};

export default Icon;
