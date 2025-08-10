'use client'

import { useEffect, useState, useCallback } from 'react'

export default function Viewer() {

    const [htmlContent, setHtmlContent] = useState<string>("");
    const [blockNumber, setBlockNumber] = useState<string>("");

    // Define the color map with the given colors
    const colorMap = {
        // Orange
        0: "#585663",

        1: "#6D2BF8",

        // Purple
        2: "#AF89FE",

        // Lilac
        3: "#FDF64D",

        // Yellow
        4: "#2067F0",

        // Blue
        5: "#976F53",

        // Brown
        6: "#CBC7E3",

        // Light Grey
        7: "#15D96F",

        // Green
        8: "#FF64C1",
        // Pink
        9: "#F95E3C", // Grey
    };

    // Define the color map with the given colors
    const colorMap2 = {
        // Orange
        0: "#403F4A",

        1: "#5922CD",

        // Purple
        2: "#9C6EFE",

        // Lilac
        3: "#FDE14D",

        // Yellow
        4: "#1C54C0",

        // Blue
        5: "#725540",

        // Brown
        6: "#8F8DA5",

        // Light Grey
        7: "#17B35F",

        // Green
        8: "#F343AC",
        // Pink
        9: "#EC5331", // Dark Grey
    };

    function displayEyes(originalString: string, digits: number[], lookType: string) {
        //eyes
        if (originalString.length >= 0) {
            const eyeLidColor = () => {
                if (lookType === "cyclops") {
                    return "#35491B";
                }

                if (lookType === "robot") {
                    return "#767679";
                }

                if (lookType === "alien") {
                    return "#1A7D84";
                }
            };

            //pupil colour
            const colorForFirstDigit = colorMap[digits[0] as keyof typeof colorMap];

            const singleEye = `
  <div style="position: absolute; top: 176px; left: 186px;">
    <svg width="60" height="80" viewBox="0 0 138 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="69" cy="71" rx="69" ry="67" fill="white"/>
      <ellipse cx="68.5" cy="71.5" rx="28.5" ry="29.5" fill="${colorForFirstDigit}"/>
      <path d="M0 72C1.59983e-06 52.9044 7.26962 34.5909 20.2096 21.0883C33.1496 7.58569 50.7001 2.04866e-06 69 0C87.2999 -2.04866e-06 104.85 7.58569 117.79 21.0883C130.73 34.5909 138 52.9044 138 72L69 72L0 72Z" fill="${eyeLidColor()}"/>
    </svg>
  </div>
`;

            const fourEyes = `
  <div style="position: absolute; top: 143px; left: 167px;">
    <svg width="100" height="100" viewBox="0 0 83 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="41.977" cy="53.7903" rx="10.9713" ry="11.2098" fill="white"/>
<ellipse cx="41.977" cy="54.2672" rx="4.77011" ry="5.00862" fill="${colorForFirstDigit}"/>
<path d="M31.0057 52.3593C31.0057 49.6393 32.1616 47.0307 34.2191 45.1074C36.2767 43.184 39.0672 42.1035 41.977 42.1035C44.8868 42.1035 47.6773 43.184 49.7349 45.1074C51.7924 47.0307 52.9483 49.6393 52.9483 52.3593L41.977 52.3593L31.0057 52.3593Z" fill="${eyeLidColor()}"/>
<ellipse cx="10.9713" cy="38.0489" rx="10.9713" ry="11.2098" fill="white"/>
<ellipse cx="10.9713" cy="38.526" rx="4.77011" ry="5.00862" fill="${colorForFirstDigit}"/>
<path d="M0 36.6178C2.54379e-07 33.8978 1.1559 31.2892 3.21341 29.3659C5.27092 27.4426 8.0615 26.3621 10.9713 26.3621C13.881 26.3621 16.6716 27.4426 18.7291 29.3659C20.7866 31.2892 21.9425 33.8978 21.9425 36.6178L10.9713 36.6178L0 36.6178Z" fill="${eyeLidColor()}"/>
<ellipse cx="72.0288" cy="37.5718" rx="10.9713" ry="11.2098" fill="white"/>
<ellipse cx="72.0288" cy="38.0489" rx="4.77011" ry="5.00862" fill="${colorForFirstDigit}"/>
<path d="M61.0575 36.1408C61.0575 33.4208 62.2134 30.8122 64.2709 28.8888C66.3284 26.9655 69.119 25.885 72.0288 25.885C74.9385 25.885 77.7291 26.9655 79.7866 28.8888C81.8441 30.8122 83 33.4208 83 36.1408L72.0288 36.1408L61.0575 36.1408Z" fill="${eyeLidColor()}"/>
<ellipse cx="40.3302" cy="16.59" rx="16.0026" ry="15.536" fill="white"/>
<ellipse cx="40.2142" cy="16.706" rx="6.60976" ry="6.84048" fill="${colorForFirstDigit}"/>
<path d="M24.3276 16.8219C24.3276 12.394 26.0136 8.14743 29.0147 5.01644C32.0157 1.88544 36.0861 0.126465 40.3302 0.126465C44.5743 0.126464 48.6447 1.88544 51.6457 5.01643C54.6468 8.14743 56.3328 12.394 56.3328 16.8219L40.3302 16.8219L24.3276 16.8219Z" fill="${eyeLidColor()}"/>
</svg>

  </div>
`;

            const fiveEyes = `
  <div style="position: absolute; top: 159px; left: 123px;">
    <svg width="180" height="100" viewBox="0 0 419 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="109.263" cy="37.25" rx="34.263" ry="33.264" fill="white"/>
      <ellipse cx="109.015" cy="37.4982" rx="14.1521" ry="14.6461" fill="${colorForFirstDigit}"/>
      <path d="M75 37.7464C75 28.2659 78.6098 19.1736 85.0354 12.4699C91.461 5.76613 100.176 2 109.263 2C118.35 2 127.065 5.76613 133.491 12.4699C139.916 19.1736 143.526 28.2659 143.526 37.7464L109.263 37.7464L75 37.7464Z" fill="${eyeLidColor()}"/>
      <ellipse cx="29.9498" cy="76.8125" rx="29.9498" ry="29.0765" fill="white"/>
      <ellipse cx="29.7326" cy="77.0294" rx="12.3705" ry="12.8024" fill="${colorForFirstDigit}"/>
      <path d="M0 77.2464C6.94414e-07 68.9594 3.15541 61.0117 8.77208 55.1519C14.3887 49.292 22.0066 46 29.9497 46C37.8929 46 45.5108 49.292 51.1274 55.1519C56.7441 61.0117 59.8995 68.9594 59.8995 77.2464L29.9498 77.2464L0 77.2464Z" fill="${eyeLidColor()}"/>
      <ellipse cx="34.263" cy="33.264" rx="34.263" ry="33.264" transform="matrix(-1 0 0 1 343.526 1.98592)" fill="white"/>
      <ellipse cx="14.1521" cy="14.6461" rx="14.1521" ry="14.6461" transform="matrix(-1 0 0 1 323.663 20.8521)" fill="${colorForFirstDigit}"/>
      <path d="M343.526 35.7464C343.526 26.2659 339.916 17.1736 333.49 10.4699C327.065 3.76613 318.35 1.01711e-06 309.263 0C300.176 -1.01711e-06 291.461 3.76613 285.035 10.4699C278.61 17.1736 275 26.2659 275 35.7464L309.263 35.7464L343.526 35.7464Z" fill="${eyeLidColor()}"/>
      <ellipse cx="29.9498" cy="29.0765" rx="29.9498" ry="29.0765" transform="matrix(-1 0 0 1 418.526 45.7359)" fill="white"/>
      <ellipse cx="12.3705" cy="12.8024" rx="12.3705" ry="12.8024" transform="matrix(-1 0 0 1 401.164 62.2271)" fill="${colorForFirstDigit}"/>
      <path d="M418.526 75.2464C418.526 66.9594 415.37 59.0117 409.754 53.1519C404.137 47.292 396.519 44 388.576 44C380.633 44 373.015 47.292 367.398 53.1519C361.782 59.0117 358.626 66.9594 358.626 75.2464L388.576 75.2464L418.526 75.2464Z" fill="${eyeLidColor()}"/>
      <ellipse cx="215.848" cy="91.1111" rx="43.848" ry="42.5696" fill="white"/>
      <ellipse cx="215.53" cy="91.4288" rx="18.1111" ry="18.7433" fill="${colorForFirstDigit}"/>
      <path d="M172 91.7464C172 79.6137 176.62 67.9779 184.843 59.3988C193.066 50.8197 204.219 46 215.848 46C227.477 46 238.63 50.8197 246.853 59.3988C255.076 67.9779 259.696 79.6137 259.696 91.7464L215.848 91.7464L172 91.7464Z" fill="${eyeLidColor()}"/>
    </svg>
  </div>
`;

            //using fifth digit
            const eyeType = {
                0: fiveEyes,
                1: singleEye,
                2: singleEye,
                3: singleEye,
                4: fiveEyes,
                5: fourEyes,
                6: fourEyes,
                7: fourEyes,
                8: fourEyes,
                9: fiveEyes,
            };

            return `${
                originalString.length >= 5 ? eyeType[digits[4] as keyof typeof eyeType] : singleEye
            }`;
        }
    }

    function displayBackground(digits: number[], lookType: string) {
        const colorForSecondDigit = colorMap2[digits[1] as keyof typeof colorMap2] || "transparent";
        return `
        <div style="position: absolute; top: 0px; left: 0px; z-index:-1;">
            <svg width="425" height="425" viewBox="0 0 425 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="425" height="425" fill="${colorForSecondDigit}"/>
            </svg>
        </div>

        `;
    }

    //nft type
    function getLook(number: number) {
        const numberStr = number.toString();
        const lastFourDigits = parseInt(
            numberStr.substring(numberStr.length - 4)
        );

        if (lastFourDigits < 4800) {
            return "cyclops";
        } else if (lastFourDigits >= 4800 && lastFourDigits <= 5200) {
            return "alien";
        } else {
            return "robot";
        }
    }

    function generateLookSvg(digits: number[], lookType: string) {
        const bodyColor = () => {
            if (lookType === "cyclops") {
                return "#206227";
            }

            if (lookType === "robot") {
                return "#AAA9AD";
            }

            if (lookType === "alien") {
                return "#32BDC6";
            }
        };

        // colour ear tips
        const colorForThirdDigit = colorMap2[digits[2] as keyof typeof colorMap2] || "transparent";

        const head = `
  <div style="position: absolute; top: 138px; left: 105px;">
    <svg width="215" height="209" viewBox="0 0 215 209" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.8147e-06 0H215V188C215 195.732 207.732 203 200 203H15C7.267 203 -3.8147e-06 195.732 -3.8147e-06 188V0Z" fill="${bodyColor()}"/>
    </svg>
  </div>
`;

        const ears = `
  <div style="position: absolute; top: 136px; left: 46px; z-index:3;">
    <svg width="330" height="125" viewBox="0 0 775 125" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="83" y="51" width="85.6155" height="42.0018" transform="rotate(24.0638 83 51)" fill="${bodyColor()}"/>
      <path d="M35.815 89.5233C40.5183 92.4876 45.6723 94.6346 50.9829 95.8418C56.2934 97.0489 61.6564 97.2925 66.7657 96.5587C71.875 95.8249 76.6305 94.1281 80.7608 91.5651C84.891 89.002 88.315 85.623 90.8374 81.621C93.3597 77.6189 94.931 73.0722 95.4615 68.2403C95.9919 63.4085 95.4712 58.3863 93.9291 53.4603C92.3869 48.5343 89.8535 43.8011 86.4735 39.5309C83.0935 35.2607 78.9331 31.5372 74.2298 28.5729L55.0224 59.0481L35.815 89.5233Z" fill="${bodyColor()}"/>
      <path d="M45.0539 75.0424C47.7738 76.7567 50.7145 78.0615 53.7082 78.8823C56.7018 79.7032 59.6898 80.024 62.5015 79.8265C65.3132 79.629 67.8935 78.9171 70.0952 77.7313C72.2969 76.5455 74.0767 74.9092 75.3332 72.9156C76.5896 70.9221 77.2981 68.6104 77.418 66.1126C77.538 63.6148 77.0671 60.9798 76.0323 58.358C74.9975 55.7362 73.4191 53.179 71.3871 50.8323C69.355 48.4857 66.9093 46.3956 64.1894 44.6814L54.6217 59.8619L45.0539 75.0424Z" fill="${colorForThirdDigit}"/>
      <rect width="85.6155" height="42.0018" transform="matrix(-0.913092 0.407754 0.407754 0.913092 691.175 45)" fill="${bodyColor()}"/>
      <path d="M738.36 83.5233C733.657 86.4876 728.503 88.6346 723.192 89.8418C717.881 91.0489 712.518 91.2925 707.409 90.5587C702.3 89.8249 697.544 88.1281 693.414 85.5651C689.284 83.002 685.86 79.623 683.338 75.621C680.815 71.6189 679.244 67.0722 678.713 62.2403C678.183 57.4085 678.704 52.3863 680.246 47.4603C681.788 42.5343 684.321 37.8011 687.701 33.5309C691.081 29.2607 695.242 25.5372 699.945 22.5729L719.152 53.0481L738.36 83.5233Z" fill="${bodyColor()}"/>
      <path d="M729.137 69.0322C726.415 70.7478 723.472 72.0539 720.477 72.876C717.481 73.6981 714.491 74.0201 711.678 73.8236C708.865 73.627 706.283 72.9158 704.081 71.7305C701.878 70.5453 700.098 68.9092 698.842 66.9156C697.585 64.9221 696.877 62.6102 696.758 60.1118C696.639 57.6135 697.111 54.9778 698.147 52.355C699.184 49.7323 700.764 47.1739 702.798 44.826C704.832 42.4782 707.28 40.3867 710.002 38.6711L719.569 53.8517L729.137 69.0322Z" fill="${colorForThirdDigit}"/>
    </svg>
  </div>
`;

        const neck = `
  <div style="position: absolute; top: 315px; left: 57px;">
    <svg width="300" height="110" viewBox="0 0 671 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_9_57)">
        <path d="M335.986 0.414764L626.104 247.293H45.8674L335.986 0.414764Z" fill="${bodyColor()}"/>
        <path d="M196.757 47.4391H476.431V175.223H196.757V47.4391Z" fill="${bodyColor()}"/>
      </g>
      <defs>
        <clipPath id="clip0_9_57">
          <rect width="670" height="250" fill="white" transform="translate(0.985901)"/>
        </clipPath>
      </defs>
    </svg>
  </div>
`;

        let lookHtml = "";

        if (lookType === "cyclops") {
            lookHtml = `
    ${head}
    ${ears}
    ${neck}
  `;
        } else if (lookType === "robot") {
            lookHtml = `
    ${head}
    ${ears}
    ${neck}
  `;
        } else if (lookType === "alien") {
            lookHtml = `
    ${head}
    ${ears}
    ${neck}
  `;
        }
        return lookHtml;
    }

    function c420(number: number) {
        const numberStr = number.toString();
        return numberStr.includes("420");
    }

    function displayDiamond() {
        return `<div style="position: absolute; top: 370px; left: 181.5px; z-index: 5;">
<svg width="10" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9389 0.393633L27.8526 12.8181L20.8858 28.325L7.00544 31.4075L0.0917893 18.983L7.05852 3.47607L20.9389 0.393633Z" fill="#00F0FF"/>
</svg>

    </div>`;
    }

    function displayMouth(originalString: string, digits: number[], bunnyTeeth: string) {
        //mouth
        //mouth color
        const colorForSixthDigit =
            originalString.length >= 6 ? colorMap[digits[5] as keyof typeof colorMap] : "black";

        //tooth colour
        const colorForFourthDigit =
            originalString.length >= 4 ? colorMap2[digits[3] as keyof typeof colorMap2] : "#D9D9D9";

        return `
  <div style="position: absolute; top: 281px; left:146px; z-index-1">
    <svg width="150" height="75" viewBox="0 0 190 162" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M190 81C190 70.3629 187.543 59.83 182.769 50.0026C177.994 40.1753 170.997 31.2459 162.175 23.7243C153.354 16.2028 142.881 10.2364 131.355 6.16576C119.829 2.09513 107.476 -4.64961e-07 95 0C82.5244 4.64961e-07 70.171 2.09513 58.6451 6.16576C47.1191 10.2364 36.6464 16.2028 27.8249 23.7244C19.0033 31.2459 12.0056 40.1753 7.23144 50.0026C2.45725 59.83 -1.09065e-06 70.3629 0 81L95 81H190Z" fill="${colorForSixthDigit}"/>
      
    ${
        !bunnyTeeth
            ? `<path d="M43.6306 44.2193L57.8778 81.1561L28.4354 80.7763L43.6306 44.2193Z" fill="${colorForFourthDigit}"/>
    <path d="M138 47.0444L152.811 80.8308L123.366 80.9078L138 47.0444Z" fill="#D9D9D9"/>`
            : ""
    }
    </svg>
  </div>

  ${bunnyTeeth ? bunnyTeeth : ""}
`;
    }

    function c4a0(number: number) {
        const numberStr = number.toString();

        if (numberStr.includes("420")) {
            return false;
        }

        return numberStr.includes("4") && numberStr.includes("0");
    }

    function displaycig() {
        return `<div style="position: absolute; top: 226px; left: 251px; z-index: 5;">
        <svg width="72" height="92" viewBox="0 0 72 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="72" y="92" width="72" height="18" transform="rotate(-180 72 92)" fill="#FBFBFB"/>
            <rect x="72" y="56" width="18" height="56" transform="rotate(-180 72 56)" fill="#EEEEEE" fill-opacity="0.3"/>
            <rect x="72" y="92" width="18" height="18" transform="rotate(-180 72 92)" fill="#FF0034"/>
        </svg>
    </div>`;
    }

    function c0(number: number) {
        const numberStr = number.toString();

        if (numberStr.includes("00")) {
            return false;
        }

        if (numberStr.includes("0")) {
            return true;
        }
    }

    function displaySquint(lookType: string, eyeType: string) {
        const eyeLidColor = () => {
            if (lookType === "cyclops") {
                return "#35491B";
            }

            if (lookType === "robot") {
                return "#767679";
            }

            if (lookType === "alien") {
                return "#1A7D84";
            }
        };

        const eyeSquint = ({ top, left, width, height }: { top: number, left: number, width: number, height: number }) => {
            return `
      <div style="position: absolute; top: ${top}px; left: ${left}px; z-index:2;">
        <svg width="${width}" height="${height}" viewBox="0 0 135 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 0.5C0.5 13.363 12.06 29.6992 25 38.7947C37.94 47.8902 49.7001 53 68 53C86.2999 53 98.06 47.8902 111 38.7947C123.94 29.6992 135 13.363 135 0.5L68 4.5L0.5 0.5Z" fill="${eyeLidColor()}"/>
</svg>
</div>
      `;
        };

        if (eyeType === "four_eyes") {
            return `
      ${eyeSquint({ height: 53, left: 166.5, top: 181.5, width: 27.2 })}
      ${eyeSquint({ height: 53, left: 197, top: 158.5, width: 37.2 })}
      ${eyeSquint({ height: 53, left: 204.5, top: 200.5, width: 27.2 })}
      ${eyeSquint({ height: 53, left: 240.5, top: 181.5, width: 27.2 })}
`;
        }

        if (eyeType === "five_eyes") {
            return `
      ${eyeSquint({ height: 53, left: 123, top: 194, width: 25 })}
      ${eyeSquint({ height: 53, left: 155, top: 178, width: 30 })}
      ${eyeSquint({ height: 53, left: 197, top: 203, width: 37 })}
      ${eyeSquint({ height: 53, left: 277, top: 193, width: 25 })}
      ${eyeSquint({ height: 53, left: 241, top: 177, width: 30 })}  
    `;
        }

        return `
    ${eyeSquint({ height: 53, left: 186, top: 207, width: 60 })}
`;
    }

    function c00(number: number) {
        const numberStr = number.toString();

        if (numberStr.includes("000")) {
            return false;
        }

        if (numberStr.includes("00")) {
            return true;
        }
    }

    function displayTash() {
        return `<div style="position: absolute; top: 269px;
    left: 175px;
    z-index: 1;">
    <svg width="90" height="27" viewBox="0 0 120 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4496 11C24.4496 6.02944 28.4791 2 33.4496 2H87.2704C92.2409 2 96.2704 6.02944 96.2704 11V11H24.4496V11Z" fill="#341609"/>
<path d="M2.66601 26.518C1.19361 21.9362 3.41773 16.3405 7.6337 14.0197L25.4679 4.2022C29.6839 1.88136 34.2953 3.71422 35.7677 8.29601V8.29601L2.66601 26.518V26.518Z" fill="#341609"/>
<path d="M117.147 26.518C118.62 21.9362 116.395 16.3405 112.179 14.0197L94.3453 4.2022C90.1293 1.88136 85.5179 3.71422 84.0455 8.29601V8.29601L117.147 26.518V26.518Z" fill="#341609"/>
</svg>

    </div>`;
    }

    function c000(number: number) {
        const numberStr = number.toString();

        if (numberStr.includes("0000")) {
            return false;
        }

        if (numberStr.includes("000")) {
            return true;
        }
    }

    function displayEyeLash(eyeType: string) {
        const eyeLash = (top: number, left: number, width: number, height: number) => {
            return `<div style="position: absolute; top: ${top}px; left: ${left}px; z-index:3;">
      <svg width="${width}" height="${height}" viewBox="0 0 141 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="15.44" y1="2.42" x2="1.44" y2="50.42" stroke="black" stroke-width="3"/>
<line x1="124.39" y1="1.43644" x2="139.39" y2="38.4364" stroke="black" stroke-width="3"/>
<line x1="33.4802" y1="2.24266" x2="23.4802" y2="63.2427" stroke="black" stroke-width="3"/>
<line x1="105.372" y1="1.39288" x2="132.372" y2="62.3929" stroke="black" stroke-width="3"/>
<line x1="51.4866" y1="2.1997" x2="42.4866" y2="69.1997" stroke="black" stroke-width="3"/>
<line x1="70.489" y1="1.1811" x2="61.489" y2="75.1811" stroke="black" stroke-width="3"/>
<line x1="87.4837" y1="0.77945" x2="98.4837" y2="74.7794" stroke="black" stroke-width="3"/>
<line x1="82.4999" y1="2.97917" x2="83.4999" y2="74.9792" stroke="black" stroke-width="3"/>
<line x1="98.4207" y1="0.518789" x2="119.421" y2="62.5188" stroke="black" stroke-width="3"/>
</svg>
</div>
`;
        };

        if (eyeType === "four_eyes") {
            return `
      ${eyeLash(164, 196, 40, 40)}
      ${eyeLash(195, 239, 30, 20)}
      ${eyeLash(195, 164, 30, 20)}
      ${eyeLash(214, 202, 30, 20)}
      `;
        }

        if (eyeType === "five_eyes") {
            return `
      ${eyeLash(208, 196, 40, 40)}
      ${eyeLash(191, 241, 30, 20)}
      ${eyeLash(193, 155, 30, 20)}
      ${eyeLash(209, 121, 30, 20)}
      ${eyeLash(209, 275, 30, 20)}
    `;
        }

        return `
    ${eyeLash(210, 185, 60, 40)}`;
    }

    function c0000(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("00000")) {
            return false;
        }

        if (numberStr.includes("0000")) {
            return true;
        }
    }

    function displayMonocle() {
        return `<div style="position: absolute; top: 185px; left: 129px; z-index:4;">
        <svg width="119" height="182" viewBox="0 0 119 182" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.143 30.6357C59.143 44.8939 71.2524 56.7714 86.5917 56.7714C101.931 56.7714 114.04 44.8939 114.04 30.6357C114.04 16.3775 101.931 4.5 86.5917 4.5C71.2524 4.5 59.143 16.3775 59.143 30.6357Z" fill="#A7C7CB" fill-opacity="0.65" stroke="#FFD700" stroke-width="9"/>
<path d="M62.5208 47.7041C62.4007 48.7522 60.8817 49.7839 60.249 50.5679C58.8034 52.3591 57.8594 54.1545 57.0937 56.3201C55.6385 60.4359 55.4381 65.0428 54.3423 69.293C50.5789 83.8906 34.1222 90.2081 22.5373 97.9314C17.9728 100.974 14.3787 105.674 11.0774 109.925C5.62651 116.944 2.99997 125.975 2.99997 134.672C2.99997 149.448 2.99997 164.224 2.99997 179" stroke="#FFD700" stroke-width="5" stroke-linecap="round"/>
</svg>

    </div>`;
    }

    function displayBloodShot(eyeType: string) {
        const bloodShot = ({ top, left, height, width }: { top: number, left: number, height: number, width: number }) => {
            return `
        <div style="position: absolute; top: ${top}px; left: ${left}px; z-index:1;">
            <svg width="${width}" height="${height}" viewBox="0 0 110 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M38.1581 11.4865C37.9207 13.3856 31.5013 18.0168 29.6716 15.7297C27.3332 12.8066 23.8206 12.3261 20.6464 11.4192C16.2929 10.1753 6.38699 -0.136857 3 6.63712"
                     stroke="#930505"
                     stroke-width="5"
                     stroke-linecap="round"
                   />
                    <path
                      d="M58.7679 27.2471C55.6903 27.6318 50.3706 33.394 47.2506 35.1273C42.4051 37.8193 43.4269 37.1672 46.375 40.8523C48.5551 43.5774 37.0151 43.2577 35.7333 43.6138C31.7929 44.7083 25.8293 44.5278 23.6099 47.857"
                      stroke="#930505"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M74.5284 28.4595C74.898 29.8557 82.3042 49.048 83.0149 43.0076C83.1425 41.923 84.0751 37.5526 84.8334 36.9459C85.7159 36.2399 86.1535 38.7884 88.4704 39.3032C92.7259 40.2489 96.9541 40.8893 100.661 43.0076C103.538 44.6514 105.724 50.8431 107.262 53.9188"
                      stroke="#930505"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M96.3508 6.63704C94.3302 6.63704 100.392 6.63704 102.413 6.63704C105.784 6.63704 106.05 6.37147 106.05 3"
                      stroke="#930505"
                      stroke-width="5"
                      stroke-linecap="round"
                    />
            </svg>
        </div>`;
        };

        if (eyeType === "four_eyes") {
            return `
      ${bloodShot({ height: 50, left: 204, top: 199, width: 22 })}
      ${bloodShot({ height: 50, left: 198, top: 157, width: 28 })}
      ${bloodShot({ height: 50, left: 240, top: 180, width: 23 })}
      ${bloodShot({ height: 50, left: 168, top: 181, width: 21 })}
`;
        }

        if (eyeType === "five_eyes") {
            return `
      ${bloodShot({ height: 40, left: 197, top: 206, width: 31 })}
      ${bloodShot({ height: 40, left: 278, top: 197, width: 20 })}
      ${bloodShot({ height: 40, left: 242, top: 180, width: 23 })}
      ${bloodShot({ height: 40, left: 156, top: 181, width: 23 })}
      ${bloodShot({ height: 40, left: 124, top: 198, width: 20 })}    
    `;
        }

        return `
    ${bloodShot({ height: 50, left: 189, top: 203, width: 45 })}
    `;
    }

    function c00000(number: number) {
        const numberStr = number.toString();
        return numberStr.includes("00000");
    }

    function c11(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("111")) {
            return false;
        }

        if (numberStr.includes("11")) {
            return true;
        }
    }

    function displayStud() {
        return `<div style="position: absolute; top: 196px; left: 352px; z-index: 4;">
      <svg width="14" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="14" cy="12" rx="14" ry="12" fill="#FFD700"/>
</svg>
    </div>`;
    }

    function c111(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("1111")) {
            return false;
        }

        if (numberStr.includes("111")) {
            return true;
        }
    }

    function displayEarWound() {
        return `<div style="position: absolute; top: 188.5px; left: 319px; z-index: 4;">
      <svg width="20" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 10.5L10.5 6L23 0.5L21.7969 15.3333L30 19.3333L13.2031 16.3333L5 28.9999L8.125 11.6666L0.5 10.5Z" fill="black"/>
</svg>

    </div>`;
    }

    function c1111(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("11111")) {
            return false;
        }

        if (numberStr.includes("1111")) {
            return true;
        }
    }

    function displayHoops() {
        return `<div style="position: absolute; top: 154px; left: 46px; z-index: 4;">
        
<svg width="40" height="199" viewBox="0 0 75 199" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71 99.5C71 126.622 66.85 150.997 60.2735 168.446C56.9798 177.186 53.1547 183.981 49.1103 188.52C45.0628 193.062 41.1309 195 37.5 195C33.8691 195 29.9372 193.062 25.8897 188.52C21.8453 183.981 18.0202 177.186 14.7265 168.446C8.15 150.997 4 126.622 4 99.5C4 72.3784 8.15 48.0032 14.7265 30.5536C18.0202 21.8143 21.8453 15.0192 25.8897 10.4803C29.9372 5.93794 33.8691 4 37.5 4C41.1309 4 45.0628 5.93794 49.1103 10.4803C53.1547 15.0192 56.9798 21.8143 60.2735 30.5536C66.85 48.0032 71 72.3784 71 99.5Z" stroke="#FFD700" stroke-width="8"/>
</svg>
    </div>
    
    <div style="position: absolute; top: 154px; left: 337px;">
        
        <svg width="40" height="199" viewBox="0 0 75 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71 99.5C71 126.622 66.85 150.997 60.2735 168.446C56.9798 177.186 53.1547 183.981 49.1103 188.52C45.0628 193.062 41.1309 195 37.5 195C33.8691 195 29.9372 193.062 25.8897 188.52C21.8453 183.981 18.0202 177.186 14.7265 168.446C8.15 150.997 4 126.622 4 99.5C4 72.3784 8.15 48.0032 14.7265 30.5536C18.0202 21.8143 21.8453 15.0192 25.8897 10.4803C29.9372 5.93794 33.8691 4 37.5 4C41.1309 4 45.0628 5.93794 49.1103 10.4803C53.1547 15.0192 56.9798 21.8143 60.2735 30.5536C66.85 48.0032 71 72.3784 71 99.5Z" stroke="#FFD700" stroke-width="8"/>
        </svg>
            </div>
    `;
    }

    function c11111(number: number) {
        const numberStr = number.toString();
        return numberStr.includes("11111");
    }

    function displayHeadphones() {
        return `<div style="position: absolute; top: 158px; left: 51px; z-index:4;">
      <svg width="320" height="103" viewBox="0 0 740 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="710" cy="20.5" rx="30" ry="16.5" fill="#D9D9D9"/>
<rect x="722.284" y="21" width="18" height="68" transform="rotate(15.5977 722.284 21)" fill="#D9D9D9"/>
<path d="M700.5 41C697.414 41 694.358 40.4698 691.507 39.4395C688.656 38.4093 686.065 36.8993 683.883 34.9957C681.701 33.0921 679.97 30.8322 678.789 28.345C677.608 25.8578 677 23.1921 677 20.5C677 17.8079 677.608 15.1422 678.789 12.655C679.97 10.1678 681.701 7.90791 683.883 6.00431C686.065 4.1007 688.656 2.59069 691.507 1.56047C694.358 0.530246 697.414 -1.31579e-06 700.5 0L700.5 20.5L700.5 41Z" fill="black"/>
<ellipse cx="30" cy="16.5" rx="30" ry="16.5" transform="matrix(-1 0 0 1 60 15)" fill="#D9D9D9"/>
<rect width="18" height="68" transform="matrix(-0.963173 0.268881 0.268881 0.963173 17.7161 32)" fill="#D9D9D9"/>
<path d="M39.5 52C42.5861 52 45.6419 51.4698 48.4931 50.4395C51.3442 49.4093 53.9348 47.8993 56.117 45.9957C58.2992 44.0921 60.0302 41.8322 61.2112 39.345C62.3922 36.8578 63 34.1921 63 31.5C63 28.8079 62.3922 26.1422 61.2112 23.655C60.0302 21.1678 58.2992 18.9079 56.117 17.0043C53.9348 15.1007 51.3442 13.5907 48.4931 12.5605C45.6419 11.5302 42.5861 11 39.5 11L39.5 31.5L39.5 52Z" fill="black"/>
</svg>
            </div>`;
    }

    function c8a8(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("888")) {
            return false;
        }
        const count = (numberStr.match(/8/g) || []).length;
        return count >= 2 ? "c8a8" : null;
    }

    function displayNecklace() {
        return `<div style="position: absolute; top: 315px; left: 144px; z-index: 4;">
<svg width="126" height="90" viewBox="0 0 290 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M285.021 5C274.652 6.15216 265.657 19.597 255.269 20.7512C243.862 22.0186 232.884 33.7957 221.142 36.4052C202.842 40.4717 188.005 47.6188 168.151 48.7533C156.058 49.4444 144.329 50.5035 131.885 50.5035C120.797 50.5035 105.048 46.3869 95.1319 40.8777C84.6171 35.0362 73.2296 33.1026 62.7544 28.1407C44.4408 19.4658 22.3562 18.3209 5 6.75013" stroke="#5D514D" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="97.7781" cy="64.4886" rx="13" ry="20" transform="rotate(22.9868 97.7781 64.4886)" fill="#B79232"/>
</svg>
    </div>
    `;
    }

    function c88(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("888")) {
            return false;
        }

        if (numberStr.includes("88")) {
            return true;
        }
    }

    function displayScarf() {
        return `<div style="position: absolute; top: 275px; left: 145px; z-index:5">
      <svg width="145" height="150" viewBox="0 0 327 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L136.919 21.6593L283 0V50.3704L136.919 68L0 50.3704V0Z" fill="#671821"/>
<path d="M138 51.1968L163.247 21.4352L326.622 143.803L262.344 153.762L138 51.1968Z" fill="#671821"/>
<rect x="117" y="42.0896" width="50.1287" height="143.508" transform="rotate(-0.102369 117 42.0896)" fill="#671821"/>
<path d="M192 42C192 61.8823 174.091 78 152 78C129.909 78 112 61.8823 112 42C112 22.1178 129.909 18.5 152 18.5C174.091 18.5 192 22.1178 192 42Z" fill="#490A12"/>
</svg>
    </div>`;
    }

    function c888(number: number    ) {
        const numberStr = number.toString();
        if (numberStr.includes("8888")) {
            return false;
        }

        if (numberStr.includes("888")) {
            return true;
        }
    }

    function displayTShirt() {
        return `<div style="position: absolute; top: 328.5px; left: 71px; z-index: 3;">

      <svg width="270" height="96" viewBox="0 0 590 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M288.633 73.6353L581.237 189.332L1 189.332L288.633 73.6353Z" fill="#2874E5"/>
<path d="M151 5.51922L296.824 70.471L435 0.5L435 123.001L151 123.246L151 5.51922Z" fill="#2874E5"/>
<path d="M434 57.9998L372.627 177.248L586.5 186.5L434 57.9998Z" fill="#2874E5"/>
<path d="M151.499 57.9998L210.095 175.074L0.499999 189.5L151.499 57.9998Z" fill="#2874E5"/>
<path d="M110.349 93.8135L476.5 93.8135L493.5 108.069L94 108.069L110.349 93.8135Z" fill="#E6E6E6"/>
<path d="M16.5 175.67L574 175.67L590 189.467L0.5 189.467L16.5 175.67Z" fill="#E6E6E6"/>
<path d="M66.9999 131.523L521.5 131.523L537.5 145.319L51.19 145.319L66.9999 131.523Z" fill="#E6E6E6"/>
<path d="M151 47.8264L245.5 47.8264L267 57L151 57L151 47.8264Z" fill="#E6E6E6"/>
<path d="M343.581 48L435 48L435 57L326 57L343.581 48Z" fill="#E6E6E6"/>
<rect width="158.679" height="6.68423" transform="matrix(0.914371 0.404877 -0.463753 0.885965 154.1 0)" fill="#D9D9D9"/>
<path d="M435 0.5L293 65.3014L296.5 70.8199L435 6.5L435 0.5Z" fill="#D9D9D9"/>
</svg>

    </div>`;
    }

    function c8888(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("88888")) {
            return false;
        }

        if (numberStr.includes("8888")) {
            return true;
        }
    }

    function displayHighVis() {
        return `<div style="position: absolute; top: 337.7px; left: 47px; z-index: 3;">
<svg width="320" height="87" viewBox="0 0 600 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M437.407 65.8494L351.5 195L592.184 195.406L437.407 65.8494Z" fill="#DFFF00"/>
<path d="M161.5 67.5L274.5 195L0.845431 194.526L161.5 67.5Z" fill="#DFFF00"/>
<path d="M161.5 9L278 41.5001L278 47.5001L161.5 10.5001L161.5 9Z" fill="#D9D9D9"/>
<path d="M441.515 8.49999L349.5 42L349.5 49.5L441.515 15.5L441.515 8.49999Z" fill="#D9D9D9"/>
<path d="M161.5 10.5L278 47.5L274.515 195H162L161.5 10.5Z" fill="#DFFF00"/>
<path d="M441 15.4999L350 49.1309L351.5 195.2H438.5L441 15.4999Z" fill="#DFFF00"/>
<path d="M278 41.5L283.5 43L285 195H274.5L278 41.5Z" fill="#D9D9D9"/>
<path d="M344 45L350 42L351.5 195H345.5L344 45Z" fill="#D9D9D9"/>
<path d="M350 89H465L486.5 107H350V89Z" fill="#D9D9D9"/>
<path d="M350 136H521.2L542.7 154H350V136Z" fill="#D9D9D9"/>
<path d="M74 136H275V154H52L74 136Z" fill="#D9D9D9"/>
<path d="M133.5 89H278L276.197 107H112L133.5 89Z" fill="#D9D9D9"/>
</svg>
    </div>`;
    }

    function c88888(number: number) {
        const numberStr = number.toString();
        return numberStr.includes("88888");
    }

    function displaySuit() {
        return `<div style="position: absolute; top: 335px; left: 59.5px; z-index: 3;">

<svg width="290" height="90" viewBox="0 0 600 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M286.156 39.5L302.507 43.5L319.881 49L334.189 47.5L350.541 42L346.453 62L290.243 62L286.156 39.5Z" fill="#D9D9D9"/>
<path d="M265.716 54.0002L324.991 71.0002L383.244 54.0002L383.244 207L265.716 207L265.716 54.0002Z" fill="white"/>
<path d="M265.716 49.0002L319.881 57.5002L383.244 49.0002L383.244 55.5457L319.881 75.5002L265.716 55.5457L265.716 49.0002Z" fill="black"/>
<path d="M446.159 77.9864L358.363 207.137L604.339 207.543L446.159 77.9864Z" fill="black"/>
<path d="M164.186 79.6369L279.671 207.137L4.1063e-05 206.663L164.186 79.6369Z" fill="black"/>
<path d="M164.186 21.137L283.248 53.6371L283.248 59.6371L164.186 22.637L164.186 21.137Z" fill="#555555"/>
<path d="M450.357 20.6368L356.319 54.1368L356.319 61.6368L450.357 27.6368L450.357 20.6368Z" fill="#555555"/>
<path d="M164.186 22.637L283.248 59.637L279.686 207.137L164.697 207.137L164.186 22.637Z" fill="black"/>
<path d="M449.831 27.6368L356.83 61.2678L358.363 207.337L447.276 207.337L449.831 27.6368Z" fill="black"/>
<path d="M283.247 53.637L288.868 55.137L290.401 207.137L279.671 207.137L283.247 53.637Z" fill="#555555"/>
<path d="M350.698 57.137L356.83 54.137L358.363 207.137L352.231 207.137L350.698 57.137Z" fill="#555555"/>
<path d="M449.97 12.5L338.277 46.0002L334.189 62.5002L449.97 20.9919L449.97 12.5Z" fill="white"/>
<path d="M165.562 9.50006L303.018 43.0002L306.084 60.5002L165.562 20.9997L165.562 9.50006Z" fill="white"/>
<rect x="306.595" y="57" width="26.5716" height="24" rx="6" fill="black"/>
<path d="M310.683 77L328.057 77L328.057 207L319.37 207L310.683 207L310.683 77Z" fill="black"/>
</svg>
</div>`;
    }

    function cp6(number: number) {
        const numberStr = number.toString();
        // Loop through the number string
        for (let i = 0; i <= numberStr.length - 6; i++) {
            // Ensure there are at least 6 characters to check
            const substring = numberStr.substring(i, i + 6); // Get the substring of 6 characters
            // Check if the substring is a palindrome
            if (substring === substring.split("").reverse().join("")) {
                return "cp6";
            }
        }
        return null;
    }

    function displayGoatee() {
        return `<div style="position: absolute; top: 303px; left: 195px;">
      <svg width="50" height="67" viewBox="0 0 90 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 67L0.832703 0.25H89.1673L45 67Z" fill="#43291A"/>
</svg>
    </div>`;
    }

    function c9a9(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("99")) {
            return false;
        }
        const count = (numberStr.match(/9/g) || []).length;
        return count >= 2 ? "c9a9" : null;
    }

    function displayBalloon() {
        return `<div style="position: absolute; top: 223px; left: 302px; z-index: 6;">              
<svg width="97" height="202" viewBox="0 0 97 190" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="48.6159" cy="48.2961" rx="35.3878" ry="45.0887" transform="rotate(4.99072 48.6159 48.2961)" fill="#A31818"/>
<path d="M45.2955 93.2664C45.082 94.7168 44.3114 95.8964 43.7116 97.22C42.2068 100.541 41.9713 103.976 41.6587 107.556C41.1609 113.257 41.4884 116.303 44.8098 121.119C49.655 128.145 56.6132 132.607 64.1314 136.446C67.643 138.239 71.4545 139.87 74.0488 142.944C82.0003 152.365 85.32 159.083 81.1128 170.972C78.905 177.211 72.4432 181.18 67.6929 185.332C63.5855 188.922 61.914 195.22 59.0853 199.804" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
    </div>`;
    }

    function c99(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("999")) {
            return false;
        }

        if (numberStr.includes("99")) {
            return true;
        }
    }

    function displayHammer() {
        return `<div style="position: absolute; top: 274px; left: 273px; z-index: 6;">
      <svg width="140" height="150" viewBox="0 0 294 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="197.802" y="38.8684" width="26.7313" height="290.784" transform="rotate(26.2311 197.802 38.8684)" fill="#57504A"/>
<rect x="131.681" y="0.473633" width="48.2467" height="63.8943" transform="rotate(26.2311 131.681 0.473633)" fill="#D9D9D9"/>
<rect x="249.818" y="58.6843" width="48.2467" height="63.8943" transform="rotate(26.2311 249.818 58.6843)" fill="#D9D9D9"/>
<rect x="169.195" y="33.4951" width="83.4537" height="37.163" transform="rotate(26.2311 169.195 33.4951)" fill="#D9D9D9"/>
</svg>

    </div>`;
    }

    function c999(number: number) {
        const numberStr = number.toString();
        if (numberStr.includes("9999")) {
            return false;
        }

        if (numberStr.includes("999")) {
            return true;
        }
    }

    function displayPickaxe() {
        return `<div style="position: absolute; top: 275px; left: 263px; z-index: 6;">
      <svg width="160" height="150" viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="274.643" y="65.7522" width="29.5691" height="321.654" transform="rotate(28.3886 274.643 65.7522)" fill="#A1662F"/>
<path d="M379.481 210.387C379.994 189.597 370.555 166.038 352.588 143.268C334.622 120.498 309.105 99.754 279.891 84.1689C250.677 68.5838 219.353 59.0042 190.65 56.8769C161.947 54.7497 137.423 60.1903 120.784 72.3771L167.213 108.109C177.305 100.717 192.18 97.4171 209.59 98.7074C227 99.9977 245.999 105.808 263.719 115.261C281.439 124.714 296.916 137.297 307.813 151.108C318.71 164.919 324.436 179.208 324.125 191.819L379.481 210.387Z" fill="#6FE4FF"/>
</svg>

    </div>`;
    }

    function c9999(number: number) {
        const numberStr = number.toString();
        return numberStr.includes("9999");
    }

    function displayGun() {
        return `<div style="position: absolute; top: 223px; left: 285px; z-index: 6;">
      <svg width="150" height="202" viewBox="0 0 259 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.54016" y="87.0076" width="10.4078" height="23.8685" transform="rotate(-52.1971 5.54016 87.0076)" fill="#969292"/>
<rect x="21.8126" y="69.2476" width="10.4078" height="24.3572" transform="rotate(-41.4583 21.8126 69.2476)" fill="#969292"/>
<path d="M196.719 50.0904L214.917 24.6901L226.465 59.6557L196.719 50.0904Z" fill="#1950A2"/>
<rect x="42.4244" y="135.878" width="31.2994" height="58.4649" transform="rotate(-10.5249 42.4244 135.878)" fill="#1950A2"/>
<rect x="149.821" y="58.7385" width="59.0555" height="12.4017" transform="rotate(-18.277 149.821 58.7385)" fill="#969292"/>
<ellipse cx="56.2142" cy="108.623" rx="36.6144" ry="33.3664" transform="rotate(-18.277 56.2142 108.623)" fill="#1950A2"/>
<path d="M64.7853 81.8479L144.677 55.4617C151.965 53.055 159.823 57.0113 162.23 64.2984V64.2984C164.937 72.4963 160.486 81.337 152.288 84.0446L74.0455 109.886L64.7853 81.8479Z" fill="#1950A2"/>
<rect x="125.348" y="61.8457" width="7.67721" height="11.2205" transform="rotate(-18.277 125.348 61.8457)" fill="#B61F1F"/>
<rect x="97.3096" y="71.106" width="7.67721" height="11.2205" transform="rotate(-18.277 97.3096 71.106)" fill="#B61F1F"/>
<rect x="111.329" y="66.4758" width="7.67721" height="11.2205" transform="rotate(-18.277 111.329 66.4758)" fill="#4C1E5C"/>
<path d="M70.0355 83.8676C65.0101 80.3808 58.6509 78.8862 52.2555 79.6889C45.86 80.4915 39.9103 83.531 35.6204 88.187C31.3305 92.843 29.0238 98.7647 29.1708 104.744C29.3179 110.723 31.9077 116.308 36.4118 120.361L44.5648 112.483C42.1064 110.271 40.6929 107.222 40.6126 103.959C40.5324 100.695 41.7914 97.4631 44.1329 94.9218C46.4743 92.3806 49.7217 90.7216 53.2124 90.2835C56.7031 89.8454 60.174 90.6611 62.9169 92.5643L70.0355 83.8676Z" fill="#4C1E5C"/>
<ellipse cx="55.6587" cy="106.941" rx="7.08666" ry="6.20083" transform="rotate(-18.277 55.6587 106.941)" fill="black"/>
</svg>
    </div>`;
    }

    function cs5(number: number) {
        const numberStr = number.toString();
        for (let i = 0; i < numberStr.length - 4; i++) {
            // Ensure there are at least 3 characters to check
            const substring = numberStr.substring(i, i + 5); // Get the substring of 3 characters
            if (!substring.startsWith("0")) {
                // Exclude substrings starting with '0'
                const subNum = parseInt(substring, 10);
                const s = Math.sqrt(subNum);
                if (s === Math.floor(s)) {
                    // Check if s is a perfect square
                    return "cs5d"; // Return a different identifier for 3-digit perfect squares
                }
            }
        }
        return null;
    }

    function displaySmoke() {
        return `<div style="position: absolute; top: 80px;
    left: 3px;
    z-index: 4;">
            
      <svg width="420" height="191" viewBox="0 0 1148 191" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M211.851 99.5844L195.389 94.4755L197.037 78.4999L184.5 72.4999V61.4999L162 58L180 32.2279L162 28L157.5 19.2279L147 24.5L136.5 12L125 21.7721L113.5 4L106 16.5L83.5 7.5L71.5 13L55.1797 7.5V22L38.1502 28L55.1797 47L60.2886 76.3107L38.1502 70.6342L45.0603 90.7738L38.1502 108.667L15.4442 113.492L0 118.317L23.3913 125.788V145.655L55.1797 148.97L65.9651 158.144L62.5592 175.649L93.7799 165.432L117.621 173.947L125.568 167.135L161.321 170.423L178.928 175.082L191.716 183.531L203.336 180.758L219.629 190.5L232.287 182.461L240.811 190.268L252.037 182.87L251.597 169.434L235.693 156.349L237.395 148.402L223.204 133.076L225.475 118.317L211.851 99.5844Z" fill="#D9D9D9"/>
<path d="M935.186 95.5844L951.647 90.4755L950 74.4999L962.537 68.4999V57.4999L985.037 54L967.037 28.2279L985.037 24L989.537 15.2279L1000.04 20.5L1010.54 8L1022.04 17.7721L1033.54 0L1041.04 12.5L1063.54 3.5L1075.54 9L1091.86 3.5V18L1108.89 24L1091.86 43L1086.75 72.3107L1108.89 66.6342L1101.98 86.7738L1108.89 104.667L1131.59 109.492L1147.04 114.317L1123.65 121.788V141.655L1091.86 144.97L1081.07 154.144L1084.48 171.649L1053.26 161.432L1029.42 169.947L1021.47 163.135L985.716 166.423L968.109 171.082L955.321 179.531L943.7 176.758L927.408 186.5L914.75 178.461L906.226 186.268L895 178.87L895.439 165.434L911.344 152.349L909.641 144.402L923.833 129.076L921.562 114.317L935.186 95.5844Z" fill="#D9D9D9"/>
</svg>
    </div>`;
    }

    // Function to check if a number contains a 4-digit square as a substring
    function containsFourDigitSquare(number: number) {
        const numberStr = number.toString();
        for (let i = 0; i <= numberStr.length - 4; i++) {
            const substring = numberStr.substring(i, i + 4);
            const num = parseInt(substring, 10);
            if (Math.sqrt(num) % 1 === 0) {
                return true;
            }
        }
        return false;
    }

    // Determine the range for laser eyes based on the digit 5 value
    function getLaserEyeRange(digits: number[]) {
        const eyeType = {
            0: "five_eyes",
            1: "single_eye",
            2: "single_eye",
            3: "single_eye",
            4: "five_eyes",
            5: "four_eyes",
            6: "four_eyes",
            7: "four_eyes",
            8: "four_eyes",
            9: "five_eyes",
        };

        return eyeType[digits[4] as keyof typeof eyeType];
    }

    // Function to generate SVG for laser eyes based on direction
        function displayLaserEyes(digits: number[], eyeType: string) {
        const colorForFirstDigit = colorMap[digits[0] as keyof typeof colorMap];

        if (eyeType === "four_eyes") {
            return `
      <div style="position: absolute; top: 159px; left: 264px; z-index: 10; transform: rotate(127deg); background: linear-gradient(to top, ${colorForFirstDigit}, red, red); width: 7px; height: 216px;"></div>
<div style="position: absolute; top: 163px; left: 326px; z-index: 10; transform: rotate(126deg); background: linear-gradient(to top, ${colorForFirstDigit}, red, red); width: 7px; height: 185px;"></div>
<div style="position: absolute; top: 167px; left: 315px; z-index: 10; transform: rotate(126deg); background: linear-gradient(to top, ${colorForFirstDigit}, red, red); width: 7px; height: 250px;"></div>
<div style="position: absolute; top: 131px; left: 312px; z-index: 10; transform: rotate(128deg); background: linear-gradient(to top, ${colorForFirstDigit}, #06CDDA, #03F0FF); width: 7px; height: 250px;"></div>
`;
        } else if (eyeType === "five_eyes") {
            return `
      <div style="    position: absolute;
    top: 153px;
    left: 340px;
    z-index: 10;
    transform: rotate(127deg);
    background: linear-gradient(to top, ${colorForFirstDigit}, red, red);
    width: 4px;
    height: 216px;"></div>

      <div style="    position: absolute;
    top: 171px;
    left: 221px;
    z-index: 10;
    transform: rotate(127deg);
    background: linear-gradient(to top, ${colorForFirstDigit}, red, red);
    width: 4px;
    height: 216px;"></div>

<div style="    position: absolute;
    top: 171px;
    left: 375px;
    z-index: 10;
    transform: rotate(127deg);
    background: linear-gradient(to top, ${colorForFirstDigit}, red, red);
    width: 4px;
    height: 216px;"></div>

<div style="position: absolute; top: 172px; left: 312px; z-index: 10; transform: rotate(128deg); background: linear-gradient(to top, ${colorForFirstDigit}, #06CDDA, #03F0FF); width: 4px; height: 250px;"></div>

<div style="  position: absolute;
    top: 156px;
    left: 254px;
    z-index: 10;
    transform: rotate(128deg);
    background: linear-gradient(to top, #FDF64D, red, red);
    width: 4px;
    height: 216px;"></div>
`;
        } else {
            return `
  <div style="position: absolute;
    top: 182px;
    left: 300px;
    z-index: 10;
    transform: rotate(135deg);
    background: linear-gradient(to top, ${colorForFirstDigit}, red, red);;
    width: 7px;
    height: 250px;"> </div>
`;
        }
    }

    function cs6(number: number) {
        const numberStr = number.toString();
        for (let i = 0; i < numberStr.length - 5; i++) {
            // Ensure there are at least 3 characters to check
            const substring = numberStr.substring(i, i + 6); // Get the substring of 3 characters
            if (!substring.startsWith("0")) {
                // Exclude substrings starting with '0'
                const subNum = parseInt(substring, 10);
                const s = Math.sqrt(subNum);
                if (s === Math.floor(s)) {
                    // Check if s is a perfect square
                    return "cs3d"; // Return a different identifier for 3-digit perfect squares
                }
            }
        }
        return null;
    }

    function displaySonicScrewdriver() {
        return `<div style="position: absolute; top: 283px; left: 232px; z-index: 5;">
<svg width="190" height="45" viewBox="0 0 190 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.5132 25.5078C97.5132 31.0307 93.036 35.5078 87.5132 35.5078L13.0687 35.5078V11.0674L87.5132 11.0674C93.036 11.0674 97.5132 15.5446 97.5132 21.0674V25.5078Z" fill="url(#paint0_linear_61_1765)"/>
<rect x="127.672" y="29.9739" width="30.1587" height="12.9119" transform="rotate(-180 127.672 29.9739)" fill="#ADADAD"/>
<path d="M170.899 35.5078L137.672 35.5078C132.149 35.5078 127.672 31.0307 127.672 25.5078V21.0674C127.672 15.5445 132.149 11.0674 137.672 11.0674L170.899 11.0674V35.5078Z" fill="url(#paint1_linear_61_1765)"/>
<path d="M181.288 25.1198C181.288 30.857 176.637 35.5078 170.9 35.5078V35.5078V11.0674V11.0674C176.637 11.0674 181.288 15.7183 181.288 21.4554V25.1198Z" fill="#2874E5"/>
<path d="M13.0688 35.5078H12.2203C5.47124 35.5078 6.48499e-05 30.0366 6.48499e-05 23.2876V23.2876C6.48499e-05 16.5386 5.47124 11.0674 12.2203 11.0674H13.0688L13.0688 35.5078Z" fill="black"/>
<path d="M190 44.5L170.899 35.5078V11.0674L190 8.49366e-07V44.5Z" fill="#0047FF" fill-opacity="0.3"/>
<rect x="160.511" y="27.2073" width="11.0582" height="7.83938" rx="3.91969" transform="rotate(-180 160.511 27.2073)" fill="#5A5757"/>
<rect x="84.7795" y="25.3628" width="58.9771" height="3.68912" transform="rotate(-180 84.7795 25.3628)" fill="#393939"/>
<defs>
<linearGradient id="paint0_linear_61_1765" x1="97.5132" y1="23.2876" x2="13.0687" y2="23.2876" gradientUnits="userSpaceOnUse">
<stop stop-color="#6E6C6C"/>
<stop offset="1" stop-color="#929292"/>
</linearGradient>
<linearGradient id="paint1_linear_61_1765" x1="127.672" y1="23.2876" x2="170.899" y2="23.2876" gradientUnits="userSpaceOnUse">
<stop stop-color="#6E6C6C"/>
<stop offset="1" stop-color="#818080"/>
</linearGradient>
</defs>
</svg>
    </div>`;
    }

    function cf3(number: number) {
        let numberStr = number.toString();
        let a = 0,
            b = 1;
        let fibNumbers = new Set();

        // Generate 3-digit Fibonacci numbers
        while (b < 1000) {
            // 1000 is the smallest 4-digit number
            if (b >= 100) {
                // 100 is the smallest 3-digit number
                fibNumbers.add(b.toString());
            }
            [a, b] = [b, a + b]; // Update the Fibonacci sequence
        }

        // Check for 3-digit Fibonacci patterns
        for (let i = 0; i <= numberStr.length - 3; i++) {
            // Loop through the number string
            let substring = numberStr.substring(i, i + 3);
            if (fibNumbers.has(substring)) {
                return "cf3";
            }
        }

        return null;
    }

    function displaySaliva() {
        return `<div style="position: absolute; top: 300px; left: 243px;">
      <svg width="30" height="61" viewBox="0 0 78 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.9709 39.8567C65.097 45.834 65.1172 52.9745 61.0162 55.8055C56.9151 58.6364 50.2456 56.0858 46.1195 50.1084C41.9934 44.1311 42.5423 36.1023 42.4257 28.8741C47.2746 31.5969 56.8447 33.8794 60.9709 39.8567Z" fill="#2D62A1"/>
<path d="M66.0776 15.4591C72.3296 19.1559 75.3417 25.6301 72.8053 29.9196C70.2689 34.2091 63.1446 34.6896 56.8926 30.9928C50.6406 27.296 47.7729 19.7768 44.6366 13.2634C50.1803 13.7025 59.8257 11.7624 66.0776 15.4591Z" fill="#2D62A1"/>
<path d="M25.9709 16.1084C30.097 22.0857 30.1172 29.2262 26.0162 32.0572C21.9151 34.8881 15.2456 32.3375 11.1195 26.3602C6.99344 20.3828 7.54232 12.354 7.42566 5.12583C12.2746 7.8486 21.8447 10.1311 25.9709 16.1084Z" fill="#2D62A1"/>
</svg>
    </div>`;
    }

    function cf4(number: number) {
        let numberStr = number.toString();
        let a = 0,
            b = 1;
        let fibNumbers = new Set();

        // Generate 4-digit Fibonacci numbers
        while (b < 10000) {
            // 10000 is the smallest 5-digit number
            if (b >= 1000) {
                // 1000 is the smallest 4-digit number
                fibNumbers.add(b.toString());
            }
            [a, b] = [b, a + b]; // Update the Fibonacci sequence
        }

        // Check for 4-digit Fibonacci patterns
        for (let i = 0; i <= numberStr.length - 4; i++) {
            // Loop through the number string
            let substring = numberStr.substring(i, i + 4);
            if (fibNumbers.has(substring)) {
                return "cf4"; // Return identifier for 4-digit Fibonacci numbers
            }
        }

        return null;
    }

    function displayAbduction() {
        return `<div style="position: absolute; top: -310px; left: 65px; z-index:9;">
      <svg width="300" height="500" viewBox="0 0 668 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M183 0H444L668 805H0L183 0Z" fill="url(#paint0_linear_61_1754)" fill-opacity="0.2"/>
<defs>
<linearGradient id="paint0_linear_61_1754" x1="334" y1="240" x2="334" y2="-565" gradientUnits="userSpaceOnUse">
<stop stop-color="#57B8FF"/>
<stop offset="1" stop-color="#346F99"/>
</linearGradient>
</defs>
</svg>
    </div>`;
    }

    function cf5(number: number) {
        let numberStr = number.toString();
        let a = 0,
            b = 1;
        let fibNumbers = new Set();

        // Generate 5-digit Fibonacci numbers
        while (b < 100000) {
            // 100000 is the smallest 6-digit number
            if (b >= 10000) {
                // 10000 is the smallest 5-digit number
                fibNumbers.add(b.toString());
            }
            [a, b] = [b, a + b]; // Update the Fibonacci sequence
        }

        // Check for 5-digit Fibonacci patterns
        for (let i = 0; i <= numberStr.length - 5; i++) {
            // Loop through the number string
            let substring = numberStr.substring(i, i + 5);
            if (fibNumbers.has(substring)) {
                return "cf5";
            }
        }

        return null;
    }

    function displayBlood() {
        return `<div style="position: absolute; top: 295px; left: 173px;">
      <svg width="20" height="69" viewBox="0 0 51 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.001 24.4103C27.5364 32.8462 31.0396 68.5 8 68.5C-15.0396 68.5 23.8343 47.828 23.8343 31.7692C23.8343 15.7105 37.6248 20.641 47.001 0C55.9987 22.0769 47.001 8.35151 47.001 24.4103Z" fill="#F80000"/>
</svg>

    </div>`;
    }

    function cf6(number: number) {
        let numberStr = number.toString();
        let a = 0,
            b = 1;
        let fibNumbers = new Set();

        // Generate 6-digit Fibonacci numbers
        while (b < 1000000) {
            // 1000000 is the smallest 7-digit number
            if (b >= 100000) {
                // 100000 is the smallest 6-digit number
                fibNumbers.add(b.toString());
            }
            [a, b] = [b, a + b]; // Update the Fibonacci sequence
        }

        // Check for 6-digit Fibonacci patterns
        for (let i = 0; i <= numberStr.length - 6; i++) {
            // Loop through the number string
            let substring = numberStr.substring(i, i + 6);
            if (fibNumbers.has(substring)) {
                return "cf6";
            }
        }

        return null;
    }

    function displayScar() {
        return `<div style="position: absolute; top: 140px; left: 151px;">
      <svg width="25" height="73" viewBox="0 0 44 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1.01965" y1="1.89985" x2="42.0196" y2="39.8999" stroke="black" stroke-width="3"/>
<line x1="42.2401" y1="39.4807" x2="5.24011" y2="45.4807" stroke="black" stroke-width="3"/>
<line x1="6.10064" y1="44.9809" x2="31.1006" y2="71.9809" stroke="black" stroke-width="3"/>
</svg>

    </div>`;
    }

    function cf7(number: number) {
        let numberStr = number.toString();
        let a = 0,
            b = 1;
        let fibNumbers = new Set();

        // Generate 6-digit Fibonacci numbers
        while (b < 10000000) {
            // 10000000 is the smallest 8-digit number
            if (b >= 1000000) {
                // 1000000 is the smallest 7-digit number
                fibNumbers.add(b.toString());
            }
            [a, b] = [b, a + b]; // Update the Fibonacci sequence
        }

        // Check for 6-digit Fibonacci patterns
        for (let i = 0; i <= numberStr.length - 7; i++) {
            // Loop through the number string
            let substring = numberStr.substring(i, i + 7);
            if (fibNumbers.has(substring)) {
                return "cf7";
            }
        }

        return null;
    }

    function displayTired() {
        return `<div style="position: absolute; top: 233px; left: 245px; z-index:9;">
      <svg width="45" height="117" viewBox="0 0 95 117" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5942 105V100.49L27.9465 83.9595V83.7642H15.0558V77.7273H37.0551V82.6456L24.5196 98.7678V98.9631H37.5168V105H14.5942Z" fill="black"/>
<path d="M39.5942 87V82.4901L52.9465 65.9595V65.7642H40.0558V59.7273H62.0551V64.6456L49.5196 80.7678V80.9631H62.5168V87H39.5942Z" fill="black"/>
<path d="M57.5942 49V44.4901L70.9465 27.9595V27.7642H58.0558V21.7273H80.0551V26.6456L67.5196 42.7678V42.9631H80.5168V49H57.5942Z" fill="black"/>
</svg>
    </div>`;
    }

    function m12(number: number) {
        return number % 12 === 0;
    }

    function displaySpikyHair() {
        return `<div style="position: absolute; top: 11px; left: 90px;">
      <svg width="238.2" height="215" viewBox="0 0 570 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.4299 6.03382L96.4236 146.617L35.0571 156.163L35.4299 6.03382Z" fill="#FF6B00"/>
<path d="M533.277 16.208L551.226 165.535L489.056 161.398L533.277 16.208Z" fill="#FF6B00"/>
<path d="M486.082 11.5269L523.004 158.23L460.685 160.045L486.082 11.5269Z" fill="#FF6B00"/>
<path d="M474.111 14.1961L480.691 164.218L418.969 156.571L474.111 14.1961Z" fill="#FF6B00"/>
<path d="M428.501 13.5473L451.64 162.341L389.354 159.82L428.501 13.5473Z" fill="#FF6B00"/>
<path d="M71.8683 43.2033L114.651 158.785L52.5253 163.392L71.8683 43.2033Z" fill="#FF6B00"/>
<path d="M393.165 14.2276L417.321 162.9L355.019 160.697L393.165 14.2276Z" fill="#FF6B00"/>
<path d="M353.134 9.84643L376.463 158.618L314.174 156.156L353.134 9.84643Z" fill="#FF6B00"/>
<path d="M319.772 10.6137L330.357 160.465L268.447 154.049L319.772 10.6137Z" fill="#FF6B00"/>
<path d="M265.777 6.63812L284.111 155.93L221.93 151.913L265.777 6.63812Z" fill="#FF6B00"/>
<path d="M226.452 7.42288L240.401 157.068L178.358 151.691L226.452 7.42288Z" fill="#FF6B00"/>
<path d="M195.61 6.70997L190.577 156.777L129.584 145.587L195.61 6.70997Z" fill="#FF6B00"/>
<path d="M129.345 4.6098L165.874 151.387L103.551 153.077L129.345 4.6098Z" fill="#FF6B00"/>
<path d="M104.481 2.14087L123.811 151.339L61.6048 147.631L104.481 2.14087Z" fill="#FF6B00"/>
<path d="M35 148.559H549.5L551.5 165.833H35V148.559Z" fill="#FF6B00"/>
</svg>

    </div>`;
    }

    function m13(number: number) {
        return number % 13 === 0;
    }

    function displayBunnyTeeth() {
        return `<div style="position: absolute; top: 272px; left: 205px; z-index: 1;">
<svg width="30" height="36" viewBox="0 0 59 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 4L12.5 1L20.5 0H29H36.5L45.5 1L53.5 2L59 3.5L58.5 36H1.5L0.5 4Z" fill="#D9D9D9"/>
<line x1="30.5" x2="30.5" y2="36" stroke="black"/>
</svg>
    </div>`;
    }

    function m14(number: number ) {
        return number % 14 === 0;
    }

    function displayBuildersHat() {
        return `<div style="position: absolute; top: -159px; left: 105px;">
                
<svg width="215" height="485" viewBox="0 0 517 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M517 242.5C517 178.185 489.765 116.504 441.287 71.0266C392.809 25.549 327.058 4.85565e-06 258.5 0C189.942 -4.85565e-06 124.191 25.549 75.7129 71.0266C27.2348 116.504 1.0352e-05 178.185 0 242.5L258.5 242.5H517Z" fill="url(#paint0_linear_60_1731)"/>
<path d="M118 38.5L142 26L167 15.5V242H118V38.5Z" fill="url(#paint1_linear_60_1731)"/>
<path d="M227 1.5L251.5 0L276 0.5V242H227V1.5Z" fill="url(#paint2_linear_60_1731)"/>
<path d="M347 14.5L372 24.5L396 37V242H347V14.5Z" fill="url(#paint3_linear_60_1731)"/>
<defs>
<linearGradient id="paint0_linear_60_1731" x1="258.5" y1="0" x2="258.5" y2="485" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="0.48" stop-color="#999303"/>
</linearGradient>
<linearGradient id="paint1_linear_60_1731" x1="142.5" y1="15.5" x2="142.5" y2="242" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="0.0001" stop-color="#999300"/>
</linearGradient>
<linearGradient id="paint2_linear_60_1731" x1="251.5" y1="0" x2="251.5" y2="242" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="0.0001" stop-color="#999300"/>
</linearGradient>
<linearGradient id="paint3_linear_60_1731" x1="371.5" y1="14.5" x2="371.5" y2="242" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF500"/>
<stop offset="0.0001" stop-color="#999300"/>
</linearGradient>
</defs>
</svg>

    </div>`;
    }

    function m15(number: number) {
        return number % 15 === 0;
    }

    function displayLongHair() {
        return `<div style="position: absolute; top: 66px; left: 57px;">
<svg width="300" height="215" viewBox="0 0 593 215" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.1727 45.9672C44.578 35.4196 52.2687 26.7928 62.5865 24.1906L155.37 0.789474C157.449 0.265172 159.584 0 161.728 0H295L446.932 13.812C448.308 13.9371 449.673 14.1718 451.012 14.5139L546.619 38.933C557.328 41.6682 565.137 50.8749 566.088 61.8866L592.671 369.613C593.49 379.097 589.06 388.271 581.123 393.528L555.918 410.22C539.259 421.252 516.9 410.153 515.615 390.214L500.168 150.368C499.739 143.712 496.769 137.475 491.871 132.947L419.444 65.9949C415.573 62.4163 410.706 60.0991 405.487 59.3505L297.882 43.9134C295.967 43.6387 294.027 43.5786 292.098 43.7342L191.926 51.8198C186.45 52.2619 181.254 54.4275 177.085 58.0059L128.185 99.975C122.945 104.473 119.709 110.87 119.192 117.756L99.3849 381.271C98.1526 397.666 82.2028 408.815 66.3821 404.34L19.6706 391.129C7.23219 387.611 -0.732847 375.49 0.974369 362.677L43.1727 45.9672Z" fill="#F3E45E"/>
</svg>
    </div>`;
    }

    function m16(number: number) {
        return number % 16 === 0;
    }

        function displayHoodie() {
        return `<div style="position: absolute; top: 105px; left: 11.5px; z-index: 2;">               
<svg width="400" height="320" viewBox="0 0 600 710" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M289.135 598.278L581 713.3L0.500001 713.5L289.135 598.278Z" fill="#272424"/>
<path d="M151.75 527L297.714 591.657L431.44 527L431.44 589.5L430.739 651.6L151.75 649.098L151.75 527Z" fill="#272424"/>
<path d="M431 585.5L346.971 694.063L581.1 713.3L431 585.5Z" fill="#272424"/>
<path d="M152 584.5L205.137 700.602L0.499999 713.5L152 584.5Z" fill="#272424"/>
<path d="M64.5 21.5L114.5 134L89 487.041L107 528.5L89 525.5L73 522.5L63.5 519.508L53.5 515L49 512.5L44.5 509L42.5 505.5L41.6461 501.528V487.041V465.562V418.61V372.657V282.249V193.839L41 105.428L44 63L44.5 59L45.5 55L47 50L52 39L57.5 31L61.5 25.5L64.5 21.5Z" fill="#272424"/>
<path d="M578.219 34L512.247 123.5L541 525.5L548 523L555 519.5L560.5 515.5L564.5 511.5L571 503L575 494.5L576 492L577 488L577.5 483L578 480L578.219 470.5V396V34Z" fill="#272424"/>
<path d="M61 34C62.9155 14.7023 79.1493 0 98.5418 0H539.518C562.065 0 579.653 19.5193 577.313 41.9448L571.345 99.1231C569.083 120.795 549.098 136.13 527.579 132.706L319.995 99.6793C315.715 98.9982 311.349 99.0545 307.088 99.8458L104.471 137.465C80.7642 141.866 59.0053 123.361 59.5434 99.2553L61 34Z" fill="#272424"/>
<rect x="264.234" y="79" width="111.11" height="26" fill="#272424"/>
<path d="M297.231 557.919L135.835 499.5L82 473.5L87 522L297.231 591.009L297.231 557.919Z" fill="#272424"/>
<path d="M295 557L426.5 519.5L543 474L543 525L295 593L295 557Z" fill="#272424"/>
</svg>
    </div>`;
    }

    function m69(number: number) {
        return number % 69 === 0;
    }

    function displayWifHat() {
        return `<div style="position: absolute; top: -43px; left: 85px;">
                

      <svg width="250" height="250" viewBox="0 0 129 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="44" cy="7.5" rx="9" ry="7.5" fill="#D1B3AA"/>
<path d="M111.98 65C111.98 99.1448 86.146 63.1754 59.6364 63.1754C33.1267 63.1754 16.0205 99.1448 16.0205 65C16.0205 30.8552 37.4904 5 64.0001 5C90.5097 5 111.98 30.8552 111.98 65Z" fill="#E6C5BC"/>
<g filter="url(#filter0_i_112_1965)">
<path d="M128.246 77.0188C128.246 87.3586 93.7075 77.0188 58.2935 77.0188C22.8794 77.0188 0 87.3586 0 77.0188C0 66.679 28.7088 58.2969 64.1228 58.2969C99.5368 58.2969 128.246 66.679 128.246 77.0188Z" fill="#E6C5BC"/>
</g>
<defs>
<filter id="filter0_i_112_1965" x="0" y="58.2969" width="128.246" height="27.3174" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_112_1965"/>
</filter>
</defs>
</svg>
            </div>`;
    }

    function m11(number: number) {
        return number % 11 === 0;
    }

    function displayTongue() {
        return `<div style="position: absolute; top: 240px; left: 202px; z-index: 5;">
      <svg width="100" height="150" viewBox="0 0 192 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 62L60 58.5L191.023 139.326L113.854 135.02L120.408 199.845L0 62Z" fill="#E40000"/>
<line x1="111.657" y1="133.364" x2="41.657" y2="67.3638" stroke="black"/>
</svg>
    </div>`;
    }

    function m888(number: number) {
        return number % 888 === 0;
    }

    function displayShield() {
        return `<div style="position: absolute; top: 274px; left: 8px; z-index: 6;">
       
<svg width="175" height="150" viewBox="0 0 233 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="118.69" height="115.679" transform="matrix(0.829823 0.558027 -0.530394 0.847751 96.8952 24.9885)" fill="#A1662F"/>
<rect x="8.42346" y="70.3923" width="194" height="74" transform="rotate(-12.4589 8.42346 70.3923)" fill="#A1662F"/>
<rect x="110.423" y="93.4338" width="71.601" height="99.7164" transform="rotate(-12.4589 110.423 93.4338)" fill="#A1662F"/>
<rect width="34.3378" height="31.4982" transform="matrix(-0.531862 0.846831 0.846831 0.531862 184.766 84.6851)" fill="#A1662F"/>
<rect x="40.5087" y="117.979" width="34.3378" height="29" transform="rotate(32.9509 40.5087 117.979)" fill="#A1662F"/>
<rect x="41.1077" y="111.595" width="71.601" height="96.9368" transform="rotate(-12.4589 41.1077 111.595)" fill="#A1662F"/>
<path d="M128.425 113.475C129.802 119.71 125.183 126.354 117.621 128.025C110.059 129.695 103.071 125.616 101.693 119.381C100.315 113.145 104.935 106.502 112.497 104.831C120.059 103.16 127.047 107.239 128.425 113.475Z" fill="#464646" stroke="black" stroke-width="3"/>
<line x1="161.599" y1="37.2933" x2="192.556" y2="177.408" stroke="black" stroke-width="7"/>
<line x1="95.2961" y1="25.5552" x2="112.899" y2="105.227" stroke="black" stroke-width="7"/>
<line x1="117.806" y1="127.438" x2="131.829" y2="190.907" stroke="black" stroke-width="7"/>
<line x1="41.2606" y1="63.8811" x2="72.2179" y2="203.996" stroke="black" stroke-width="7"/>
<line x1="71.3452" y1="57.2342" x2="102.302" y2="197.349" stroke="black" stroke-width="7"/>
<line x1="133.633" y1="43.4722" x2="164.59" y2="183.587" stroke="black" stroke-width="7"/>
<line x1="8.36263" y1="70.7817" x2="24.4308" y2="143.507" stroke="#4F4F4F" stroke-width="4"/>
<line x1="198.105" y1="26.4345" x2="214.248" y2="99.4984" stroke="#4F4F4F" stroke-width="4"/>
<line x1="5.97825" y1="69.2602" x2="77.588" y2="53.4386" stroke="#4F4F4F" stroke-width="4"/>
<line x1="124.786" y1="43.0107" x2="200.139" y2="26.3622" stroke="#4F4F4F" stroke-width="4"/>
<line x1="75.5278" y1="54.9731" x2="96.5242" y2="23.3005" stroke="#4F4F4F" stroke-width="4"/>
<line x1="127.252" y1="43.3414" x2="94.5206" y2="24.0371" stroke="#4F4F4F" stroke-width="4"/>
<line y1="-2" x2="44.23" y2="-2" transform="matrix(0.538804 -0.842431 0.939065 0.34374 192.171 136.169)" stroke="#4F4F4F" stroke-width="4"/>
<line x1="200.592" y1="178.929" x2="190.752" y2="134.393" stroke="#4F4F4F" stroke-width="4"/>
<line y1="-2" x2="37.1807" y2="-2" transform="matrix(0.819785 0.572672 -0.733337 0.679866 22.4778 143.939)" stroke="#4F4F4F" stroke-width="4"/>
<line x1="54.5454" y1="163.145" x2="64.0206" y2="206.031" stroke="#4F4F4F" stroke-width="4"/>
<line x1="102.113" y1="198.637" x2="62.2831" y2="207.437" stroke="#4F4F4F" stroke-width="4"/>
<line y1="-2" x2="110.13" y2="-2" transform="matrix(-0.976451 0.215739 -0.0015228 -0.999999 201.766 174.635)" stroke="#4F4F4F" stroke-width="4"/>
</svg>
    </div>`;
    }

    function ce7(number: number) {
        let numberStr = number.toString();
        let exponent = 7;
        let power = 1;
        while (true) {
            let exponentStr = Math.pow(exponent, power).toString();
            if (numberStr.includes(exponentStr)) {
                return true;
            }
            if (Math.pow(exponent, power) > number) break; // Stop if the exponent value exceeds the number
            power++;
        }
        return false;
    }

    function displayLipsVision() {
        return `<div style="position: absolute;     top: 254px;
    left: 171px;
    z-index: 2;">
        <svg width="100" height="94" viewBox="0 0 218 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_48_758" fill="white">
<path d="M218 93.5C218 81.2214 215.181 69.063 209.703 57.7191C204.225 46.3752 196.196 36.0678 186.075 27.3855C175.953 18.7032 163.937 11.8161 150.712 7.11726C137.488 2.41845 123.314 -5.36714e-07 109 0C94.6859 5.36715e-07 80.512 2.41845 67.2875 7.11727C54.063 11.8161 42.0469 18.7032 31.9254 27.3855C21.8038 36.0678 13.7749 46.3752 8.29713 57.7191C2.81937 69.063 -1.25138e-06 81.2214 0 93.5L109 93.5H218Z"/>
</mask>
<path d="M218 93.5C218 81.2214 215.181 69.063 209.703 57.7191C204.225 46.3752 196.196 36.0678 186.075 27.3855C175.953 18.7032 163.937 11.8161 150.712 7.11726C137.488 2.41845 123.314 -5.36714e-07 109 0C94.6859 5.36715e-07 80.512 2.41845 67.2875 7.11727C54.063 11.8161 42.0469 18.7032 31.9254 27.3855C21.8038 36.0678 13.7749 46.3752 8.29713 57.7191C2.81937 69.063 -1.25138e-06 81.2214 0 93.5L109 93.5H218Z" stroke="#8B0909" stroke-width="26" mask="url(#path-1-inside-1_48_758)"/>
</svg>
            </div>`;
    }

    //fixed elements
    function generateHtmlBasedOnBlockNumber(blockNumber: string ) {
        const originalString = blockNumber;
        const blockNumberNumber = parseInt(blockNumber);
        const digits = originalString
            .padStart(7, "0")
            .split("")
            .map(Number)
            .reverse();

        const lookType = getLook(blockNumberNumber);
        const lookHtml = generateLookSvg(digits, lookType);
        const eyeType =
            originalString.length >= 5
                ? getLaserEyeRange(digits)
                : "single_eye";
        let sonicScrewdriver = c420(blockNumberNumber)
            ? displaySonicScrewdriver()
            : "";
        let cig = c4a0(blockNumberNumber) ? displaycig() : "";
        let spikyHair = c0(blockNumberNumber) ? displaySpikyHair() : "";
        let longHair = c00(blockNumberNumber) ? displayLongHair() : "";
        let buildersHat = c000(blockNumberNumber) ? displayBuildersHat() : "";
        let hoodie = c0000(blockNumberNumber) ? displayHoodie() : "";
        let wifHat = c00000(blockNumberNumber) ? displayWifHat() : "";
        let stud = c11(blockNumberNumber) ? displayStud() : "";
        let hoops = c111(blockNumberNumber) ? displayHoops() : "";
        let headphones = c1111(blockNumberNumber) ? displayHeadphones() : "";
        let smoke = c11111(blockNumberNumber) ? displaySmoke() : "";
        let necklace = c8a8(blockNumberNumber) ? displayNecklace() : "";
        let scarf = c88(blockNumberNumber) ? displayScarf() : "";
        let tShirt = c888(blockNumberNumber) ? displayTShirt() : "";
        let highVis = c8888(blockNumberNumber) ? displayHighVis() : "";
        let suit = c88888(blockNumberNumber) ? displaySuit() : "";
        let goatee = cp6(blockNumberNumber) ? displayGoatee() : "";
        let earWound = cs5(blockNumberNumber) ? displayEarWound() : "";
            let diamond = cs6(blockNumberNumber) ? displayDiamond() : "";
        let balloon = c9a9(blockNumberNumber) ? displayBalloon() : "";
        let hammer = c99(blockNumberNumber) ? displayHammer() : "";
        let pickaxe = c999(blockNumberNumber) ? displayPickaxe() : "";
        let gun = c9999(blockNumberNumber) ? displayGun() : "";
        let saliva = cf3(blockNumberNumber) ? displaySaliva() : "";
        let blood = cf4(blockNumberNumber) ? displayBlood() : "";
        let abduction = cf5(blockNumberNumber) ? displayAbduction() : "";
        let scar = cf6(blockNumberNumber) ? displayScar() : "";
        let tired = cf7(blockNumberNumber) ? displayTired() : "";
        let tongue = m11(blockNumberNumber) ? displayTongue() : "";
        let shield = m888(blockNumberNumber) ? displayShield() : "";
        let lips = ce7(blockNumberNumber) ? displayLipsVision() : "";
        let squint = m12(blockNumberNumber) ? displaySquint(lookType, eyeType) : "";
        let bunnyTeeth = m13(blockNumberNumber) ? displayBunnyTeeth() : "";
        let tash = m14(blockNumberNumber) ? displayTash() : "";
        let eyeLash = m15(blockNumberNumber) ? displayEyeLash(eyeType) : "";
        let bloodShot = m16(blockNumberNumber) ? displayBloodShot(eyeType) : "";
        let monocle = m69(blockNumberNumber) ? displayMonocle() : "";
        let mouth = displayMouth(originalString, digits, bunnyTeeth);
        const containsSquare = containsFourDigitSquare(blockNumberNumber);
        const laserEyes = containsSquare
            ? displayLaserEyes(digits, eyeType)
            : "";
        const eyes = displayEyes(originalString, digits, lookType);
        const background =
            originalString.length >= 2
                ? displayBackground(digits, lookType)
                : "";

        //construction
        setHtmlContent(
            squint +
            eyeLash +
            tash +
            monocle +
            lips +
            lookHtml +
            eyes +
            background +
            cig +
            diamond +
            stud +
            earWound +
            hoops +
            longHair +
            hoodie +
            scarf +
            necklace +
            tShirt +
            spikyHair +
            buildersHat +
            wifHat +
            mouth +
            highVis +
            suit +
            balloon +
            hammer +
            pickaxe +
            gun +
            smoke +
            sonicScrewdriver +
            abduction +
            saliva +
            scar +
            tired +
            tongue +
            blood +
            shield +
            goatee +
            bloodShot +
            headphones +
            laserEyes
        );
    }

    useEffect(() => {
        if (blockNumber) {
            generateHtmlBasedOnBlockNumber(blockNumber);
        }
        if (blockNumber === "") {
            setHtmlContent("");
        }
    }, [blockNumber, generateHtmlBasedOnBlockNumber]);

  return (
    <div className="flex min-h-[500px] flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1 className="w-1/2 text-3xl font-bold">Monstoorz Viewer</h1>
        <p className="w-1/2 text-lg">
          Enter a $DMT-Monstoorz block number to generate a Monstoorz.
        </p>

        <div className="w-1/2">
          <input
            id="blk"
            type="number"
            className="input-bordered input-warning input w-full max-w-xs"
            onChange={(e) => {
                setBlockNumber(e.target.value);
            }}
            placeholder="Enter block number..."
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        {htmlContent ? (
          <div 
            className="relative h-[425px] w-[425px]"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <div className="h-[425px] w-[425px] bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">Enter a block number to generate a Monstoorz</p>
          </div>
        )}
      </div>
    </div>
  )
}
