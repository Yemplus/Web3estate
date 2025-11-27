const propertiesData = [
  {
    id: 1,
    title: "4 Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "95,000,000",
    image: "/images/property1.webp",
    status: "For Sale",
    description:
      "A beautifully finished 4-bedroom duplex featuring a fitted kitchen, spacious living area, all rooms en-suite, POP ceilings, modern lighting, and ample parking space in a secure and serene estate.",
  },
  {
    id: 2,
    title: "3 Bedroom Apartment",
    location: "Gwarinpa, Abuja",
    price: "3,500,000/year",
    image: "/images/property2.jpg",
    status: "For Rent",
    description:
      "A newly built 3-bedroom apartment with tiled floors, well-ventilated rooms, constant water supply, fitted wardrobes, and round-the-clock security in the heart of Gwarinpa.",
  },
  {
    id: 3,
    title: "2 Bedroom Flat",
    location: "Yaba, Lagos",
    price: "1,800,000/year",
    image: "/images/property3.jpg",
    status: "For Rent",
    description:
      "A spacious 2-bedroom flat ideal for students or working professionals. It offers proximity to Unilag, good road access, a secure compound, and constant water supply.",
  },
  {
    id: 4,
    title: "Detached Duplex",
    location: "Asaba, Delta State",
    price: "300,000/year",
    image: "/images/property4.jpg",
    status: "For Rent",
    description:
      "A clean and neatly maintained mini-apartment featuring tiled floors, kitchen cabinets, stable electricity in the area, and a peaceful neighborhood environment.",
  },
  {
    id: 5,
    title: "5 Bedroom Mansion",
    location: "Banana Island, Lagos",
    price: "550,000,000",
    image: "/images/property5.jpg",
    status: "For Sale",
    description:
      "An ultra-luxury 5-bedroom mansion with a private pool, cinema room, gym, automated lighting, high-end finishing, rooftop lounge, and excellent security within Banana Island.",
  },
  {
    id: 6,
    title: "3 Bedroom Semi-detached Duplex",
    location: "Ibadan, Oyo State",
    price: "45,000,000",
    image: "/images/property6.jpg",
    status: "For Sale",
    description:
      "A spacious semi-detached duplex offering POP ceilings, fully tiled floors, modern kitchen fittings, borehole water, and a fenced compound located in a rapidly developing area.",
  },
  {
    id: 7,
    title: "Detached Duplex",
    location: "Lekki, Lagos",
    price: "6,000,000/year",
    image: "/images/property7.png",
    status: "For Rent",
    description:
      "A modern detached duplex with contemporary finishing, fitted kitchen, good water supply, secure estate environment, and easy access to major Lekki roads.",
  },
  {
    id: 8,
    title: "5 Bedroom Duplex",
    location: "Ibeju-Lekki, Lagos",
    price: "250,000,000",
    image: "/images/property8.jpg",
    status: "For Sale",
    description:
      "A newly built 5-bedroom duplex with spacious interiors, quality finishing, water heaters, ample parking space, and located close to major developments in the Ibeju-Lekki corridor.",
  },
  {
    id: 9,
    title: "Mini Flat (2 Bedroom)",
    location: "Ogudu, Lagos",
    price: "1,800,000/year",
    image: "/images/property9.jpg",
    status: "For Rent",
    description:
      "A clean and well-maintained 2-bedroom mini flat in a gated compound offering reliable water supply, a secure neighborhood, and easy access to nearby commercial areas.",
  },
  {
    id: 10,
    title: "3 Bedrooom Semi Detached Duplex",
    location: "Port Harcourt, Rivers",
    price: "90,000,000",
    image: "/images/property10.jpeg",
    status: "For Sale",
    description:
      "A stylish semi-detached duplex featuring spacious living areas, fitted kitchen cabinets, all rooms en-suite, quality tiling, and located in a serene residential neighborhood.",
  },
  {
    id: 11,
    title: "Luxury 3 Bedroom Condo",
    location: "VI, Lagos",
    price: "190,000,000",
    image: "/images/property11.jpg",
    status: "For Sale",
    description:
      "This waterfront 3-bedroom luxury condo offers breathtaking views, fully furnished interiors, smart home automation, modern kitchen appliances, 24/7 power, and tight security.",
  },
  {
    id: 12,
    title: "4 Bedroom Terrace",
    location: "Abeokuta, Ogun State",
    price: "128,000,000",
    image: "/images/property12.jpeg",
    status: "For Sale",
    description:
      "A newly developed 4-bedroom terrace duplex with modern finishing, en-suite rooms, parking space for two cars, and located in a gated and secure mini-estate.",
  },
  {
    id: 13,
    title: "3 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: "6,500,000/year",
    image: "/images/property13.jpg",
    status: "For Rent",
    description:
      "A premium 3-bedroom duplex offering spacious rooms, high-quality finishing, fitted kitchen, dedicated parking, and located within one of Ikoyi’s most secure estates.",
  },
  {
    id: 14,
    title: "Detached Duplex",
    location: "Banana Island, Lagos",
    price: "25,000,000/year",
    image: "/images/property14.jpg",
    status: "For Rent",
    description:
      "A high-end detached duplex featuring multiple living rooms, premium finishing, beautiful landscape, 24/7 power, and located within Banana Island’s secure environment.",
  },
  {
    id: 15,
    title: "3 Bedroom Duplex",
    location: "Lekki phase 2, Lagos",
    price: "175,000,000",
    image: "/images/property15.jpg",
    status: "For Sale",
    description:
      "A beautifully finished modern 3-bedroom duplex with spacious rooms, quality fittings, POP ceiling designs, and located in a fast-developing neighborhood in Lekki Phase 2.",
  },
  {
    id: 16,
    title: "Luxury 2 Bedroom Shortlet",
    location: "Ikate, Lagos",
    price: "75,000/night",
    image: "/images/property16.jpg",
    status: "Shortlet",
    description:
      "A fully serviced luxury 2-bedroom shortlet featuring high-speed Wi-Fi, inverter backup, smart TV, fully equipped kitchen, 24/7 security, and located in a prime Ikate location.",
  },
  {
    id: 17,
    title: "Office Space",
    location: "Central Area, Abuja",
    price: "4,500,000/year",
    image: "/images/property17.jpeg",
    status: "For Rent",
    description:
      "Corporate-standard office space with private toilets, elevator access, ample parking, good power supply, and located in Abuja’s prime business district.",
  },
  {
    id: 18,
    title: "5 Bedroom Penthouse",
    location: "Enugu City",
    price: "95,000,000",
    image: "/images/property18.png",
    status: "For Sale",
    description:
      "A luxury penthouse featuring a spacious living area, rooftop terrace, city view, modern kitchen fittings, and located in a well-developed area of Enugu.",
  },
  {
    id: 19,
    title: "3 Bedroom Semi-Detached",
    location: "Wuse, Abuja",
    price: "4,000,000/year",
    image: "/images/property19.jpeg",
    status: "For Rent",
    description:
      "A well-maintained 3-bedroom semi-detached duplex with spacious rooms, secure compound, constant water supply, and located in the highly desirable Wuse district.",
  },
  {
    id: 20,
    title: "Detached Mansion",
    location: "Aso Drive, Abuja",
    price: "850,000,000",
    image: "/images/property20.jpg",
    status: "For Sale",
    description:
      "A premium-class luxury mansion featuring a swimming pool, private elevator, multiple lounges, exquisite finishing, landscaped compound, and top-tier security along Aso Drive.",
  },
];

export default propertiesData;
