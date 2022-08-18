import React, { FC } from "react";
import styled from "styled-components";

const SVG = styled("svg")`
  width: 100%;
  height: auto;
  position: sticky;
  bottom: 0;
  z-index: 10;
`;
const Skyline: FC<{
  primary: string;
  secondary: string;
  stopColor: string;
  stopColor2: string;
}> = ({ primary, secondary, stopColor, stopColor2 }) => {
  return (
    <SVG
      className="skyline"
      width="1920"
      height="900"
      viewBox="0 0 1920 850"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1491.19 419.083H1529.39V793.606H1491.19V419.083Z"
        fill={primary}
      />
      <path
        d="M1505.46 471.042C1505.98 472.143 1506.7 473.048 1507.54 473.673C1508.39 474.299 1509.33 474.627 1510.29 474.627C1511.25 474.627 1512.19 474.299 1513.04 473.673C1513.88 473.048 1514.6 472.143 1515.13 471.042L1537.38 424.518C1537.95 423.318 1538.28 421.927 1538.32 420.492C1538.37 419.057 1538.13 417.632 1537.64 416.368C1537.14 415.104 1536.41 414.048 1535.51 413.312C1534.61 412.575 1533.59 412.187 1532.54 412.187H1488.04C1486.99 412.187 1485.97 412.576 1485.07 413.312C1484.18 414.048 1483.44 415.104 1482.94 416.368C1482.45 417.632 1482.21 419.057 1482.26 420.491C1482.3 421.926 1482.63 423.317 1483.2 424.517L1505.46 471.042Z"
        fill={primary}
      />
      <path
        d="M1495.05 321.474H1525.91C1533.37 321.474 1539.42 329.787 1539.42 340.041V415.37C1539.42 425.624 1533.37 433.937 1525.91 433.937H1495.05C1487.59 433.937 1481.55 425.624 1481.55 415.37V340.041C1481.55 329.787 1487.59 321.474 1495.05 321.474Z"
        fill={primary}
      />
      <path
        d="M1510.1 399.986L1559.09 312.456H1461.1L1510.1 399.986Z"
        fill={primary}
      />
      <path d="M1453 303.438H1567.96V308.743H1453V303.438Z" fill={primary} />
      <path
        d="M1558.9 299.724L1568.74 288.054H1549.06L1558.9 299.724Z"
        fill={primary}
      />
      <path
        d="M1460.91 299.724L1470.75 288.054H1451.07L1460.91 299.724Z"
        fill={primary}
      />
      <path
        d="M1461.1 288.054H1559.09V299.724H1461.1V288.054Z"
        fill={primary}
      />
      <path
        d="M1433.71 280.096H1586.48V284.34H1433.71V280.096Z"
        fill={primary}
      />
      <path
        d="M1547.32 263.651L1526.69 275.322H1567.96L1547.32 263.651Z"
        fill={primary}
      />
      <path
        d="M1471.71 263.651L1451.07 275.322H1492.35L1471.71 263.651Z"
        fill={primary}
      />
      <path
        d="M1471.52 263.651H1547.52V275.322H1471.52V263.651Z"
        fill={primary}
      />
      <path
        d="M1534.4 231.292L1521.67 260.468H1547.13L1534.4 231.292Z"
        fill={primary}
      />
      <path
        d="M1484.25 231.292L1471.52 260.468H1496.98L1484.25 231.292Z"
        fill={primary}
      />
      <path
        d="M1484.25 231.292H1534.4V260.468H1484.25V231.292Z"
        fill={primary}
      />
      <path
        d="M1520.9 171.347L1507.4 228.639H1534.4L1520.9 171.347Z"
        fill={primary}
      />
      <path
        d="M1497.75 171.347L1484.25 228.639H1511.25L1497.75 171.347Z"
        fill={primary}
      />
      <path
        d="M1497.75 171.347H1520.9V221.213H1497.75V171.347Z"
        fill={primary}
      />
      <path
        d="M1497.95 168.164L1502 155.432H1493.89L1497.95 168.164Z"
        fill={primary}
      />
      <path
        d="M1520.32 168.164L1524.37 155.432H1516.27L1520.32 168.164Z"
        fill={primary}
      />
      <path
        d="M1497.75 155.432H1520.51V168.164H1497.75V155.432Z"
        fill={primary}
      />
      <path
        d="M1509.13 108.75L1497.75 152.249H1520.51L1509.13 108.75Z"
        fill={primary}
      />
      <path
        d="M1509.13 130.499L1518.2 117.768H1500.07L1509.13 130.499Z"
        fill={primary}
      />
      <path d="M1509.13 0L1505.47 117.768H1512.8L1509.13 0Z" fill={primary} />
      <path
        d="M1529 719.869L1518.58 793.606H1539.42L1529 719.869Z"
        fill={primary}
      />
      <path
        d="M1491.19 719.869L1480.78 793.606H1501.61L1491.19 719.869Z"
        fill={primary}
      />
      <path
        d="M1696.62 484.584H1782.41V793.606H1696.62V484.584Z"
        fill={primary}
      />
      <path
        d="M1544.91 519.538H1614.81V793.606H1544.91V519.538Z"
        fill={primary}
      />
      <path
        d="M1623.54 598.184H1687.89V793.606H1623.54V598.184Z"
        fill={primary}
      />
      <path
        d="M1739.44 486.02C1716.96 486.02 1698.74 477.752 1698.74 467.554C1698.74 457.355 1716.96 449.087 1739.44 449.087C1761.92 449.087 1780.14 457.355 1780.14 467.554C1780.14 477.752 1761.92 486.02 1739.44 486.02Z"
        stroke={primary}
        stroke-width="20"
      />
      <path
        d="M1586.48 687.815H1714.56V793.262H1586.48V687.815Z"
        fill={primary}
      />
      <path
        d="M1425.76 642.67H1501.22V793.606H1425.76V642.67Z"
        fill={primary}
      />
      <path
        d="M1373.33 541.781H1433.7V793.606H1373.33V541.781Z"
        fill={primary}
      />
      <path
        d="M1303.43 618.044H1364.59V793.606H1303.43V618.044Z"
        fill={primary}
      />
      <path
        d="M1349.61 570.057L1334.95 619.301H1364.27L1349.61 570.057Z"
        fill={primary}
      />
      <rect
        x="98"
        y="779"
        width="1348"
        height="129"
        fill="url(#paint0_linear_53_3)"
      />
      <path
        d="M1318.37 570.057L1303.71 619.301H1333.02L1318.37 570.057Z"
        fill={primary}
      />
      <path
        d="M1318.37 570.057H1349.61V619.301H1318.37V570.057Z"
        fill={primary}
      />
      <path
        d="M1349.61 736.524H1391.66V793.262H1349.61V736.524Z"
        fill={primary}
      />
      <path
        d="M1196.19 618.044H1272.45V793.606H1196.19V618.044Z"
        fill={primary}
      />
      <path
        d="M1130.26 803.934L808.56 703.045"
        stroke={primary}
        stroke-width="15"
      />
      <path d="M808.559 702.802H517.296" stroke={primary} stroke-width="15" />
      <path
        d="M517.296 703.07L254.967 782.825"
        stroke={primary}
        stroke-width="15"
      />
      <path
        d="M810.102 701.999L755.707 658.643"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M782.905 703.07V677.913" stroke={primary} stroke-width="5" />
      <path
        d="M782.905 677.913L769.017 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M519.611 702.535L570.148 658.643"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M800.265 737.595H819.939V797.009H800.265V737.595Z"
        fill={primary}
      />
      <path
        d="M800.457 737.862H819.746V796.741H800.457V737.862Z"
        stroke={primary}
      />
      <path
        d="M507.459 737.595H527.133V797.009H507.459V737.595Z"
        fill={primary}
      />
      <path
        d="M507.652 737.862H526.941V796.741H507.652V737.862Z"
        stroke={primary}
      />
      <path d="M546.422 702.535V677.377" stroke={primary} stroke-width="5" />
      <path
        d="M546.422 677.377L559.182 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M756.286 658.643H569.569" stroke={primary} stroke-width="5" />
      <path
        d="M570.148 658.643L559.182 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M570.148 658.643L581.335 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M593.68 658.643L581.335 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M593.68 658.643L603.71 699.858"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M613.741 658.108L603.71 699.859"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M613.741 658.108L626.085 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M636.887 658.108L626.085 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M636.887 658.108L650.004 703.07"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M659.263 658.643L650.004 703.07"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M659.263 658.643L673.922 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M684.724 658.643L673.922 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M684.724 658.643L697.455 703.07"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M710.957 658.643L697.455 703.07"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M710.957 658.643L723.688 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M735.647 658.643L723.688 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M735.647 658.643L746.834 699.323"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M755.707 658.643L746.834 699.323"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M755.707 658.643L769.981 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M769.981 669.349V701.464" stroke={primary} stroke-width="5" />
      <path
        d="M756.093 658.643L756.286 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M746.256 659.178L746.448 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M735.454 660.517L735.647 702.802"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M723.688 659.446L723.88 701.732"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M710.957 659.714L711.15 702" stroke={primary} stroke-width="5" />
      <path
        d="M697.069 659.178L697.262 701.464"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M684.724 660.784L684.917 703.07"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M673.151 657.573L673.344 699.859"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M659.649 658.108L659.841 700.394"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M649.426 658.108L649.618 700.394"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M637.081 660.517L637.273 702.802"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M625.7 659.446L625.893 701.732"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M613.741 661.587L613.933 703.873"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M593.295 659.714L593.487 702"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M593.295 659.714L593.487 702"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M581.335 658.108L581.528 700.394"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M569.762 658.643L569.955 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M558.382 668.546L558.767 701.732"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M603.518 658.643L603.71 700.929"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M808.559 742.679L762.651 702"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M1056.39 803.933L818.092 740.381"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M808.559 742.68V704.141" stroke={primary} stroke-width="5" />
      <path d="M843.279 748.032V713.775" stroke={primary} stroke-width="5" />
      <path d="M875.684 756.597V722.34" stroke={primary} stroke-width="5" />
      <path d="M908.09 765.161V730.904" stroke={primary} stroke-width="5" />
      <path d="M940.495 774.26V740.003" stroke={primary} stroke-width="5" />
      <path d="M972.9 784.43V753.92" stroke={primary} stroke-width="5" />
      <path d="M1005.69 793.262V762.752" stroke={primary} stroke-width="5" />
      <path d="M1038.12 808.228V777.718" stroke={primary} stroke-width="5" />
      <path
        d="M808.559 742.68L788.884 704.141"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M808.559 742.68L843.279 717.522"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M875.684 753.92L843.279 717.522"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M875.684 753.92L908.09 737.862"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M940.495 772.655L908.09 737.862"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M940.495 772.654L972.9 757.132"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M1005.55 790.429L972.987 757.064"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M559.346 704.141L517.296 739.468"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M511.895 739.468L337.523 785.501"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M517.296 702V739.468" stroke={primary} stroke-width="5" />
      <path d="M486.434 710.564V745.891" stroke={primary} stroke-width="5" />
      <path d="M455.571 719.931V755.258" stroke={primary} stroke-width="5" />
      <path d="M424.709 728.228V763.555" stroke={primary} stroke-width="5" />
      <path d="M393.847 737.862V771.584" stroke={primary} stroke-width="5" />
      <path d="M362.985 747.497V778.542" stroke={primary} stroke-width="5" />
      <path d="M332.122 756.061V787.107" stroke={primary} stroke-width="5" />
      <path
        d="M535.427 704.141L517.296 739.468"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M486.434 714.846L517.296 739.468"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M486.434 714.846L455.571 754.99"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M423.166 732.51L455.571 754.991"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M424.709 732.51L393.847 771.584"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M362.985 752.314L393.847 771.584"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M362.985 752.314L332.122 782.825"
        stroke={primary}
        stroke-width="5"
      />
      <path
        d="M303.574 767.837L332.122 782.825"
        stroke={primary}
        stroke-width="5"
      />
      <path d="M303.575 767.837V785.501" stroke={primary} stroke-width="5" />
      <path d="M659.263 630.81V658.108" stroke={primary} stroke-width="5" />
      <path
        d="M644.024 631.077H659.07V644.459H644.024V631.077Z"
        fill={primary}
      />
      <path d="M937 778H2112V908H1313.7L937 778Z" fill={secondary} />
      <path d="M460 778H-644V908H106.058L460 778Z" fill={secondary} />
      <defs>
        <linearGradient
          id="paint0_linear_53_3"
          x1="772"
          y1="779"
          x2="771.715"
          y2="959.128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={stopColor} />
          <stop
            offset="0.473958"
            stop-color={stopColor2}
            stop-opacity="0.526042"
          />
          <stop offset="1" stop-color={stopColor} stop-opacity="0" />
          <stop offset="1" stop-color={stopColor2} stop-opacity="0" />
        </linearGradient>
      </defs>
    </SVG>
  );
};

export default Skyline;
