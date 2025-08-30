interface Props extends React.HTMLAttributes<SVGElement> {
  size?: number;
  color?: string;
}

function DashboardIcon({
  size = 25,
  color = '#D9D9D9',
  ...props
}: Readonly<Props>): React.JSX.Element {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_4655_7124"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <rect
          x="0.918457"
          y="0.816895"
          width="24"
          height="24"
          fill={color}
        />
      </mask>
      <g mask="url(#mask0_4655_7124)">
        <path
          d="M13.9185 9.81689V3.81689H21.9185V9.81689H13.9185ZM3.91846 13.8169V3.81689H11.9185V13.8169H3.91846ZM13.9185 21.8169V11.8169H21.9185V21.8169H13.9185ZM3.91846 21.8169V15.8169H11.9185V21.8169H3.91846ZM5.91846 11.8169H9.91846V5.81689H5.91846V11.8169ZM15.9185 19.8169H19.9185V13.8169H15.9185V19.8169ZM15.9185 7.81689H19.9185V5.81689H15.9185V7.81689ZM5.91846 19.8169H9.91846V17.8169H5.91846V19.8169Z"
          className="fill-current"
        />
      </g>
    </svg>
  );
}

export default DashboardIcon;
