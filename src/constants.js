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
                trait: "Catnip for cigarette",
            },
        ],
    },
    {
        pattern: "Contains 8s",
        traits: [
            {
                frequency: "977 (12.1%)",
                function: 'Contains "8" and "8"',
                trait: "Bow Right",
            },
            {
                frequency: "244 (3.0%)",
                function: "Contains “88”",
                trait: "Bow Left",
            },
            {
                frequency: "17 (0.2%)",
                function: "Contains “888”",
                trait: "Bow Tail",
            },
            {
                frequency: "1 (<0.1%)",
                function: "Contains “8888”",
                trait: "Alien Bow Tie",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains “88888”",
                trait: "Double Alien Bow Tie",
            },
        ],
    },
    {
        pattern: "Contains 9s",
        traits: [
            {
                frequency: "473 (5.9%)",
                function: 'Contains "9" and "9"',
                trait: "Trout",
            },
            {
                frequency: "244 (3.0%)",
                function: "Contains “99”",
                trait: "Salmon",
            },
            {
                frequency: "17 (0.2%)",
                function: "Contains “999”",
                trait: "Alien Fish",
            },
            {
                frequency: "1 (<0.1%)",
                function: "Contains “9999”",
                trait: "Giant Alien Fish",
            },
        ],
    },
    {
        pattern: "Contains 0s",
        traits: [
            {
                frequency: "2572 (31.9%)",
                function: "Contains “0”",
                trait: "Earring Left",
            },
            {
                frequency: "242 (3.0%)",
                function: "Contains “00”",
                trait: "Earring Right",
            },
            {
                frequency: "17 (0.2%)",
                function: "Contains “000”",
                trait: "Alien Earring Left",
            },
            {
                frequency: "1 (<0.1%)",
                function: "Contains “0000”",
                trait: "Alien Earring Right",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains “00000”",
                trait: "Alien Tiara",
            },
        ],
    },
    {
        pattern: "Contains 1s",
        traits: [
            {
                frequency: "152 (1.9%)",
                function: "Contains “1”",
                trait: "Fly",
            },
            {
                frequency: "8 (0.1%)",
                function: "Contains “11”",
                trait: "Fly’s earring",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains “111”",
                trait: "Fly’s alien earring",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains “1111”",
                trait: "Fly’s laser eyes",
            },
        ],
    },
    {
        pattern: "Contains perfect square",
        traits: [
            {
                frequency: "207 (2.5%)",
                function:
                    "Contains 4 digit perfect square AND core trait eyes look right is TRUE",
                trait: "Laser Eyes Right",
            },
            {
                frequency: "17 (0.2%)",
                function:
                    "Contains 4 digit perfect square AND core trait eyes look left is TRUE",
                trait: "Laser Eyes Left",
            },
            {
                frequency: "2 (<0.1%)",
                function:
                    "Contains 4 digit perfect square AND core trait eyes look crossed is TRUE",
                trait: "Laser Eyes Crossed",
            },
            {
                frequency: "43 (0.5%)",
                function: "Contains 5 digit perfect square",
                trait: "Yarn",
            },
            {
                frequency: "5 (<0.1%)",
                function: "Contains 6 digit perfect square",
                trait: "Laser Pointer",
            },
        ],
    },
    {
        pattern: "Is multiple",
        traits: [
            {
                frequency: "672 (8.3%)",
                function: "Is multiple of “12”",
                trait: "Rainbow Collar",
            },
            {
                frequency: "620 (7.7%)",
                function: "Is multiple of “13”",
                trait: "Pearls",
            },
            {
                frequency: "576 (7.1%)",
                function: "Is multiple of “14”",
                trait: "Orange Collar",
            },
            {
                frequency: "536 (6.6%)",
                function: "Is multiple of “15”",
                trait: "Headband",
            },
            {
                frequency: "504 (6.3%)",
                function: "Is multiple of “16”",
                trait: "Sunhat",
            },
            {
                frequency: "116 (1.4%)",
                function: "Is multiple of “69”",
                trait: "Spikes Collar",
            },
        ],
    },
    {
        pattern: "Is multiple 11",
        traits: [
            {
                frequency: "732 (9.1%)",
                function: "Is multiple of 11",
                trait: "Mouse",
            },
            {
                frequency: "8 (0.1%)",
                function: "s multiple of “888”",
                trait: "Alien Mouse",
            },
        ],
    },
    {
        pattern: "Power of 7",
        traits: [
            {
                frequency: "2509 (31.1%)",
                function: "Contains power of 7",
                trait: "Nightvision",
            },
        ],
    },
    {
        pattern: "Contains 6-digit Palindrome",
        traits: [
            {
                frequency: "7 (<0.1%)",
                function: "Contains 6 digit palindrome",
                trait: "Alien Diamond",
            },
        ],
    },
    {
        pattern: "Contains Fibonacci",
        traits: [
            {
                frequency: "283 (3.5%)",
                function: "Contains 3 digit fibonacci",
                trait: "Blood drips",
            },
            {
                frequency: "4 (<0.1%)",
                function: "Contains 4 digit fibonacci",
                trait: "Brow Piercing",
            },
            {
                frequency: "1 (<0.1%)",
                function: "Contains 5 digit fibonacci",
                trait: "Halo",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains 6 digit fibonacci",
                trait: "Hammer",
            },
            {
                frequency: "0 (unreleased)",
                function: "Contains 7 digit fibonacci",
                trait: "Vial",
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
                trait: "Eyes look right",
            },
            {
                frequency: "1424 (17.7%)",
                function: `Last 4 digits are > 5200
                (on left side of bitmap)`,
                trait: "Eyes look left",
            },
            {
                frequency: "352 (4.4%)",
                function: `Last 4 digits > 4800 and < 5200 (center of bitmap)`,
                trait: "Eyes cross-eyed",
            },
        ],
    },
    {
        pattern: "Digit 1 value",
        traits: [
            {
                frequency: "807 (10.0%)",
                function: `D1 = 0`,
                trait: "Head = Dark grey, shade 1",
            },
            {
                frequency: "807 (10.0%)",
                function: `D1 = 1`,
                trait: "Head = Indigo, shade 1",
            },
            {
                frequency: "804 (10.0%)",
                function: `D1 = 2`,
                trait: "Head = Lilac, shade 1",
            },
            {
                frequency: "804 (10.0%)",
                function: `D1 = 3`,
                trait: "Head = Yellow, shade 1",
            },
            {
                frequency: "805 (10.0%)",
                function: `D1 = 4`,
                trait: "Head = Blue, shade 1",
            },
            {
                frequency: "805 (10.0%)",
                function: `D1 = 5`,
                trait: "Head = Brown, shade 1",
            },
            {
                frequency: "808 (10.0%)",
                function: `D1 = 6`,
                trait: "Head = Light grey, shade 1",
            },
            {
                frequency: "808 (10.0%)",
                function: `D1 = 7`,
                trait: "Head = Green, shade 1",
            },
            {
                frequency: "808 (10.0%)",
                function: `D1 = 8`,
                trait: "Head = Pink, shade 1",
            },
            {
                frequency: "808 (10.0%)",
                function: `D1 = 9`,
                trait: "Head = Orange, shade 1",
            },
        ],
    },
    {
        pattern: "Digit 2 value",
        traits: [
            {
                frequency: "800 (10.0%)",
                function: `D2 = 0`,
                trait: "Head = Dark grey, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D2 = 1`,
                trait: "Head = Indigo, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D2 = 2`,
                trait: "Head = Lilac, shade 2",
            },
            {
                frequency: "804 (10.0%)",
                function: `D2 = 3`,
                trait: "Head = Yellow, shade 2",
            },
            {
                frequency: "816 (10.1%)",
                function: `D2 = 4`,
                trait: "Head = Blue, shade 2",
            },
            {
                frequency: "812 (10.1%)",
                function: `D2 = 5`,
                trait: "Head = Brown, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D2 = 6`,
                trait: "Head = Light grey, shade 2",
            },
            {
                frequency: "808 (10.0%)",
                function: `D2 = 7`,
                trait: "Head = Green, shade 2",
            },
            {
                frequency: "820 (10.2%)",
                function: `D2 = 8`,
                trait: "Head = Pink, shade 2",
            },
            {
                frequency: "804 (10.0%)",
                function: `D2 = 9`,
                trait: "Head = Orange, shade 2",
            },
        ],
    },
    {
        pattern: "Digit 3 value",
        traits: [
            {
                frequency: "800 (10.0%)",
                function: `D3 = 0`,
                trait: "Head = Dark grey, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 1`,
                trait: "Head = Indigo, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 2`,
                trait: "Head = Lilac, shade 2",
            },
            {
                frequency: "816 (10.1%)",
                function: `D3 = 3`,
                trait: "Head = Yellow, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 4`,
                trait: "Head = Blue, shade 2",
            },
            {
                frequency: "816 (10.1%)",
                function: `D3 = 5`,
                trait: "Head = Brown, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 6`,
                trait: "Head = Light grey, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 7`,
                trait: "Head = Green, shade 2",
            },
            {
                frequency: "800 (9.9%)",
                function: `D3 = 8`,
                trait: "Head = Pink, shade 2",
            },
            {
                frequency: "832 (10.3%)",
                function: `D3 = 9`,
                trait: "Head = Orange, shade 2",
            },
        ],
    },
    {
        pattern: "Digit 4 value",
        traits: [
            {
                frequency: "592 (7.3%)",
                function: `D4 = 0`,
                trait: "Head = Dark grey, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D4 = 1`,
                trait: "Head = Indigo, shade 2",
            },
            {
                frequency: "744 (9.2%)",
                function: `D4 = 2`,
                trait: "Head = Lilac, shade 2",
            },
            {
                frequency: "3000 (37.2%)",
                function: `D4 = 3`,
                trait: "Head = Yellow, shade 2",
            },
            {
                frequency: "2304 (28.6%)",
                function: `D4 = 4`,
                trait: "Head = Blue, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D4 = 5`,
                trait: "Head = Brown, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D4 = 6`,
                trait: "Head = Light grey, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D4 = 7`,
                trait: "Head = Green, shade 2",
            },
            {
                frequency: "424 (5.3%)",
                function: `D4 = 8`,
                trait: "Head = Pink, shade 2",
            },
            {
                frequency: "1000 (12.4%)",
                function: `D4 = 9`,
                trait: "Head = Orange, shade 2",
            },
        ],
    },
    {
        pattern: "Digit 5 value",
        traits: [
            {
                frequency: "0 (unreleased)",
                function: `D5 = 0`,
                trait: "Head = Dark grey, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 1`,
                trait: "Head = Indigo, shade 2",
            },
            {
                frequency: "5456 (67.7%)",
                function: `D5 = 2`,
                trait: "Head = Lilac, shade 2",
            },
            {
                frequency: "592 (7.3%)",
                function: `D5 = 3`,
                trait: "Head = Yellow, shade 2",
            },
            {
                frequency: "2016 (25.0%)",
                function: `D5 = 4`,
                trait: "Head = Blue, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 5`,
                trait: "Head = Brown, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 6`,
                trait: "Head = Light grey, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 7`,
                trait: "Head = Green, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 8`,
                trait: "Head = Pink, shade 2",
            },
            {
                frequency: "0 (unreleased)",
                function: `D5 = 9`,
                trait: "Head = Orange, shade 2",
            },
        ],
    },
    {
        pattern: "Digit 6 value",
        traits: [
            {
                frequency: "0 (unreleased)",
                function: `D6 = 0`,
                trait: "Head = Dark grey, shade 1",
            },
            {
                frequency: "2016 (25.0%)",
                function: `D6 = 1`,
                trait: "Head = Indigo, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 2`,
                trait: "Head = Lilac, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 3`,
                trait: "Head = Yellow, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 4`,
                trait: "Head = Blue, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 5`,
                trait: "Head = Brown, shade 1",
            },
            {
                frequency: "2016 (25.0%)",
                function: `D6 = 6`,
                trait: "Head = Light grey, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 7`,
                trait: "Head = Green, shade 1",
            },
            {
                frequency: "2016 (25.0%)",
                function: `D6 = 8`,
                trait: "Head = Pink, shade 1",
            },
            {
                frequency: "0 (unreleased)",
                function: `D6 = 9`,
                trait: "Head = Orange, shade 1",
            },
            {
                frequency: "2016 (25.0%)",
                function: `Null`,
                trait: "Stripes = None",
            },
        ],
    },
];
