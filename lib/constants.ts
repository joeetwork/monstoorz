export const NAVLINKS = [
  { label: "Traits", path: "/traits" },
  { label: "Viewer", path: "/viewer" },
];

export const SPECIALPATTERNS = [
  {
    pattern: "Contains 420",
    traits: [
      {
        frequency: "1446 (17.9%)",
        function: 'Contains “4” and "0"',
        trait: "Cigarette",
      },
      {
        frequency: "38 (0.47%)",
        function: "Contains “420”",
        trait: "Sonic Screwdriver",
      },
    ],
  },
  {
    pattern: "Contains 8s",
    traits: [
      {
        frequency: "977 (12.1%)",
        function: 'Contains "8" and "8"',
        trait: "Necklace",
      },
      {
        frequency: "244 (3.0%)",
        function: "Contains “88”",
        trait: "Scarf",
      },
      {
        frequency: "17 (0.2%)",
        function: "Contains “888”",
        trait: "T-Shirt",
      },
      {
        frequency: "1 (<0.1%)",
        function: "Contains “8888”",
        trait: "High-Vis",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains “88888”",
        trait: "Suit",
      },
    ],
  },
  {
    pattern: "Contains 9s",
    traits: [
      {
        frequency: "473 (5.9%)",
        function: 'Contains "9" and "9"',
        trait: "Balloon",
      },
      {
        frequency: "244 (3.0%)",
        function: "Contains “99”",
        trait: "Hammer",
      },
      {
        frequency: "17 (0.2%)",
        function: "Contains “999”",
        trait: "Pickaxe",
      },
      {
        frequency: "1 (<0.1%)",
        function: "Contains “9999”",
        trait: "Gun",
      },
    ],
  },
  {
    pattern: "Contains 0s",
    traits: [
      {
        frequency: "2572 (31.9%)",
        function: "Contains “0”",
        trait: "Spiky Hair",
      },
      {
        frequency: "242 (3.0%)",
        function: "Contains “00”",
        trait: "Long Hair",
      },
      {
        frequency: "17 (0.2%)",
        function: "Contains “000”",
        trait: "Builders Hat",
      },
      {
        frequency: "1 (<0.1%)",
        function: "Contains “0000”",
        trait: "Hoodie",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains “00000”",
        trait: "Wif Hat",
      },
    ],
  },
  {
    pattern: "Contains 1s",
    traits: [
      {
        frequency: "152 (1.9%)",
        function: "Contains “1”",
        trait: "Stud",
      },
      {
        frequency: "8 (0.1%)",
        function: "Contains “11”",
        trait: "Hoops",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains “111”",
        trait: "Headphones",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains “1111”",
        trait: "Smoke",
      },
    ],
  },
  {
    pattern: "Contains perfect square",
    traits: [
      {
        frequency: "207 (2.5%)",
        function:
          "Contains 4 digit perfect square AND core trait single eye is TRUE",
        trait: "Laser Eye",
      },
      {
        frequency: "17 (0.2%)",
        function:
          "Contains 4 digit perfect square AND core trait four eyes is TRUE",
        trait: "Four Laser Eyes",
      },
      {
        frequency: "2 (<0.1%)",
        function:
          "Contains 4 digit perfect square AND core trait five eyes is TRUE",
        trait: "Five Laser Eyes Crossed",
      },
      {
        frequency: "43 (0.5%)",
        function: "Contains 5 digit perfect square",
        trait: "Ear Wound",
      },
      {
        frequency: "5 (<0.1%)",
        function: "Contains 6 digit perfect square",
        trait: "Diamond",
      },
    ],
  },
  {
    pattern: "Is multiple",
    traits: [
      {
        frequency: "672 (8.3%)",
        function: "Is multiple of “12”",
        trait: "Squint",
      },
      {
        frequency: "620 (7.7%)",
        function: "Is multiple of “13”",
        trait: "Bunny Teeth",
      },
      {
        frequency: "576 (7.1%)",
        function: "Is multiple of “14”",
        trait: "Tash",
      },
      {
        frequency: "536 (6.6%)",
        function: "Is multiple of “15”",
        trait: "Eye Lash",
      },
      {
        frequency: "504 (6.3%)",
        function: "Is multiple of “16”",
        trait: "bloodshot",
      },
      {
        frequency: "116 (1.4%)",
        function: "Is multiple of “69”",
        trait: "Monocle",
      },
    ],
  },
  {
    pattern: "Is multiple 11",
    traits: [
      {
        frequency: "732 (9.1%)",
        function: "Is multiple of 11",
        trait: "Tongue",
      },
      {
        frequency: "8 (0.1%)",
        function: "s multiple of “888”",
        trait: "Shield",
      },
    ],
  },
  {
    pattern: "Power of 7",
    traits: [
      {
        frequency: "2509 (31.1%)",
        function: "Contains power of 7",
        trait: "Lips",
      },
    ],
  },
  {
    pattern: "Contains 6-digit Palindrome",
    traits: [
      {
        frequency: "7 (<0.1%)",
        function: "Contains 6 digit palindrome",
        trait: "Goatee",
      },
    ],
  },
  {
    pattern: "Contains Fibonacci",
    traits: [
      {
        frequency: "283 (3.5%)",
        function: "Contains 3 digit fibonacci",
        trait: "Saliva",
      },
      {
        frequency: "4 (<0.1%)",
        function: "Contains 4 digit fibonacci",
        trait: "Blood",
      },
      {
        frequency: "1 (<0.1%)",
        function: "Contains 5 digit fibonacci",
        trait: "Abduction",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains 6 digit fibonacci",
        trait: "Scar",
      },
      {
        frequency: "0 (unreleased)",
        function: "Contains 7 digit fibonacci",
        trait: "Tired",
      },
    ],
  },
];

export const COREPATTERNS = [
  {
    pattern: "Side of Bitmap",
    traits: [
      {
        frequency: "6288 (78.0%)",
        function: `Last 4 digits are < 4800
                (on left side of bitmap)`,
        trait: "Ogre",
      },
      {
        frequency: "1424 (17.7%)",
        function: `Last 4 digits are > 5200
                (on left side of bitmap)`,
        trait: "Robot",
      },
      {
        frequency: "352 (4.4%)",
        function: `Last 4 digits > 4800 and < 5200 (center of bitmap)`,
        trait: "Alien",
      },
    ],
  },
  {
    pattern: "Digit 1 value",
    traits: [
      {
        frequency: "807 (10.0%)",
        function: `D1 = 0`,
        trait: "Pupil = Dark grey, shade 1",
      },
      {
        frequency: "807 (10.0%)",
        function: `D1 = 1`,
        trait: "Pupil = Indigo, shade 1",
      },
      {
        frequency: "804 (10.0%)",
        function: `D1 = 2`,
        trait: "Pupil = Lilac, shade 1",
      },
      {
        frequency: "804 (10.0%)",
        function: `D1 = 3`,
        trait: "Pupil = Yellow, shade 1",
      },
      {
        frequency: "805 (10.0%)",
        function: `D1 = 4`,
        trait: "Pupil = Blue, shade 1",
      },
      {
        frequency: "805 (10.0%)",
        function: `D1 = 5`,
        trait: "Pupil = Brown, shade 1",
      },
      {
        frequency: "808 (10.0%)",
        function: `D1 = 6`,
        trait: "Pupil = Light grey, shade 1",
      },
      {
        frequency: "808 (10.0%)",
        function: `D1 = 7`,
        trait: "Pupil = Green, shade 1",
      },
      {
        frequency: "808 (10.0%)",
        function: `D1 = 8`,
        trait: "Pupil = Pink, shade 1",
      },
      {
        frequency: "808 (10.0%)",
        function: `D1 = 9`,
        trait: "Pupil = Orange, shade 1",
      },
    ],
  },
  {
    pattern: "Digit 2 value",
    traits: [
      {
        frequency: "800 (10.0%)",
        function: `D2 = 0`,
        trait: "Background = Dark grey, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D2 = 1`,
        trait: "Background = Indigo, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D2 = 2`,
        trait: "Background = Lilac, shade 2",
      },
      {
        frequency: "804 (10.0%)",
        function: `D2 = 3`,
        trait: "Background = Yellow, shade 2",
      },
      {
        frequency: "816 (10.1%)",
        function: `D2 = 4`,
        trait: "Background = Blue, shade 2",
      },
      {
        frequency: "812 (10.1%)",
        function: `D2 = 5`,
        trait: "Background = Brown, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D2 = 6`,
        trait: "Background = Light grey, shade 2",
      },
      {
        frequency: "808 (10.0%)",
        function: `D2 = 7`,
        trait: "Background = Green, shade 2",
      },
      {
        frequency: "820 (10.2%)",
        function: `D2 = 8`,
        trait: "Background = Pink, shade 2",
      },
      {
        frequency: "804 (10.0%)",
        function: `D2 = 9`,
        trait: "Background = Orange, shade 2",
      },
    ],
  },
  {
    pattern: "Digit 3 value",
    traits: [
      {
        frequency: "800 (10.0%)",
        function: `D3 = 0`,
        trait: "Ear Tip = Dark grey, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 1`,
        trait: "Ear Tip = Indigo, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 2`,
        trait: "Ear Tip = Lilac, shade 2",
      },
      {
        frequency: "816 (10.1%)",
        function: `D3 = 3`,
        trait: "Ear Tip = Yellow, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 4`,
        trait: "Ear Tip = Blue, shade 2",
      },
      {
        frequency: "816 (10.1%)",
        function: `D3 = 5`,
        trait: "Ear Tip = Brown, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 6`,
        trait: "Ear Tip = Light grey, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 7`,
        trait: "Ear Tip = Green, shade 2",
      },
      {
        frequency: "800 (9.9%)",
        function: `D3 = 8`,
        trait: "Ear Tip = Pink, shade 2",
      },
      {
        frequency: "832 (10.3%)",
        function: `D3 = 9`,
        trait: "Ear Tip = Orange, shade 2",
      },
    ],
  },
  {
    pattern: "Digit 4 value",
    traits: [
      {
        frequency: "592 (7.3%)",
        function: `D4 = 0`,
        trait: "Tooth = Dark grey, shade 2",
      },
      {
        frequency: "0 (unreleased)",
        function: `D4 = 1`,
        trait: "Tooth = Indigo, shade 2",
      },
      {
        frequency: "744 (9.2%)",
        function: `D4 = 2`,
        trait: "Tooth = Lilac, shade 2",
      },
      {
        frequency: "3000 (37.2%)",
        function: `D4 = 3`,
        trait: "Tooth = Yellow, shade 2",
      },
      {
        frequency: "2304 (28.6%)",
        function: `D4 = 4`,
        trait: "Tooth = Blue, shade 2",
      },
      {
        frequency: "0 (unreleased)",
        function: `D4 = 5`,
        trait: "Tooth = Brown, shade 2",
      },
      {
        frequency: "0 (unreleased)",
        function: `D4 = 6`,
        trait: "Tooth = Light grey, shade 2",
      },
      {
        frequency: "0 (unreleased)",
        function: `D4 = 7`,
        trait: "Tooth = Green, shade 2",
      },
      {
        frequency: "424 (5.3%)",
        function: `D4 = 8`,
        trait: "Tooth = Pink, shade 2",
      },
      {
        frequency: "1000 (12.4%)",
        function: `D4 = 9`,
        trait: "Tooth = Orange, shade 2",
      },
    ],
  },
  {
    pattern: "Digit 5 value",
    traits: [
      {
        frequency: "0 (unreleased)",
        function: `D5 = 0`,
        trait: "Five eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 1`,
        trait: "Single Eye",
      },
      {
        frequency: "5456 (67.7%)",
        function: `D5 = 2`,
        trait: "Single Eye",
      },
      {
        frequency: "592 (7.3%)",
        function: `D5 = 3`,
        trait: "Single Eye",
      },
      {
        frequency: "2016 (25.0%)",
        function: `D5 = 4`,
        trait: "Five eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 5`,
        trait: "Four eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 6`,
        trait: "Four eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 7`,
        trait: "Four eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 8`,
        trait: "Four eyes",
      },
      {
        frequency: "0 (unreleased)",
        function: `D5 = 9`,
        trait: "Five eyes",
      },
    ],
  },
  {
    pattern: "Digit 6 value",
    traits: [
      {
        frequency: "0 (unreleased)",
        function: `D6 = 0`,
        trait: "Mouth = Dark grey, shade 1",
      },
      {
        frequency: "2016 (25.0%)",
        function: `D6 = 1`,
        trait: "Mouth = Indigo, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 2`,
        trait: "Mouth = Lilac, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 3`,
        trait: "Mouth = Yellow, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 4`,
        trait: "Mouth = Blue, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 5`,
        trait: "Mouth = Brown, shade 1",
      },
      {
        frequency: "2016 (25.0%)",
        function: `D6 = 6`,
        trait: "Mouth = Light grey, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 7`,
        trait: "Mouth = Green, shade 1",
      },
      {
        frequency: "2016 (25.0%)",
        function: `D6 = 8`,
        trait: "Mouth = Pink, shade 1",
      },
      {
        frequency: "0 (unreleased)",
        function: `D6 = 9`,
        trait: "Mouth = Orange, shade 1",
      },
      {
        frequency: "2016 (25.0%)",
        function: `Null`,
        trait: "Mouth = None",
      },
    ],
  },
];
