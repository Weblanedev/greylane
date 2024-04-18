const navmenu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about-us",
    },
    {
        id: 3,
        name: "Visa Consultation",
        link: "",
        subLinks: [
            { name: "Medical", subLink: "/medical" },
            { name: "Visa", subLink: "/visa" },
            { name: "Immigration", subLink: "/immigration" },
            { name: "Study", subLink: "/study" },
            // { name: "Timeline", subLink: "/timeline" },
        ],
    },
    {
        id: 4,
        name: "Flights",
        link: "/flights",
    },
    {
        id: 5,
        name: "Vacation Packages",
        link: "/vacation-packages",
    },
    {
        id: 5,
        name: "Contact Us",
        link: "/contact-us",

    },
];

export default navmenu;
