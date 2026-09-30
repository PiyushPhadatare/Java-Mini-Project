/* =========================================================
   CineBook — data.js
   Static sample data: movies, theaters, seat pricing
   configuration, and generated shows.
   ========================================================= */

/* ---------- Movies ----------
   Poster URLs use TMDB open image CDN (publicly accessible,
   no API key needed for direct image links) and Wikimedia
   Commons — both are safe for educational/demo projects. */
const movies = [
  /* ── ORIGINAL 8 (kept exactly as-is) ── */
  {
    id: 1,
    title: "Crimson Horizon",
    genre: ["Action", "Adventure"],
    language: "English",
    duration: "2h 18m",
    rating: 8.2,
    certificate: "UA",
    releaseDate: "2026-08-14",
    description:
      "A demolitions expert is pulled back into one last job when a coastal city's flood barriers are sabotaged hours before a storm surge. Racing against the tide, she has to out-think a rival crew that always seems to be one step ahead.",
    poster: "assets/images/movies/crimson-horizon.svg",
    banner: "assets/images/banners/crimson-horizon.svg"
  },
  {
    id: 2,
    title: "Silver Static",
    genre: ["Sci-Fi", "Thriller"],
    language: "English",
    duration: "2h 05m",
    rating: 7.9,
    certificate: "UA",
    releaseDate: "2026-07-02",
    description:
      "When a signal-repair technician starts hearing her own voice on a dead frequency, she uncovers a experimental broadcast network that was never meant to be switched off — and it has plans for everyone still listening.",
    poster: "assets/images/movies/silver-static.svg",
    banner: "assets/images/banners/silver-static.svg"
  },
  {
    id: 3,
    title: "The Last Laugh",
    genre: ["Comedy"],
    language: "English",
    duration: "1h 52m",
    rating: 7.4,
    certificate: "U",
    releaseDate: "2026-09-05",
    description:
      "Three washed-up sketch comedians reunite for a one-night charity show, only to discover the venue double-booked them with a corporate gala, a wedding reception and a very confused magician.",
    poster: "assets/images/movies/the-last-laugh.svg",
    banner: "assets/images/banners/the-last-laugh.svg"
  },
  {
    id: 4,
    title: "Monsoon Diaries",
    genre: ["Drama"],
    language: "Hindi",
    duration: "2h 12m",
    rating: 8.6,
    certificate: "UA",
    releaseDate: "2026-06-19",
    description:
      "Across one rain-soaked season, a letter carrier in a small hill town becomes the quiet thread connecting a family that stopped speaking to each other years ago.",
    poster: "assets/images/movies/monsoon-diaries.svg",
    banner: "assets/images/banners/monsoon-diaries.svg"
  },
  {
    id: 5,
    title: "Iron Lotus",
    genre: ["Anime", "Action"],
    language: "Japanese",
    duration: "1h 48m",
    rating: 8.8,
    certificate: "UA",
    releaseDate: "2026-05-22",
    description:
      "A disgraced blacksmith's apprentice forges a blade said to cut through illusion itself, and must decide whether to use it to save her village or to finally see the truth she has been avoiding.",
    poster: "assets/images/movies/iron-lotus.svg",
    banner: "assets/images/banners/iron-lotus.svg"
  },
  {
    id: 6,
    title: "Whispering Pines",
    genre: ["Horror", "Thriller"],
    language: "English",
    duration: "1h 55m",
    rating: 7.1,
    certificate: "A",
    releaseDate: "2026-09-12",
    description:
      "A ranger assigned to a newly reopened national park notices the same four campsites keep emptying out overnight — and the check-in log keeps writing itself.",
    poster: "assets/images/movies/whispering-pines.svg",
    banner: "assets/images/banners/whispering-pines.svg"
  },
  {
    id: 7,
    title: "Two Left Feet",
    genre: ["Romance", "Comedy"],
    language: "English",
    duration: "2h 00m",
    rating: 7.6,
    certificate: "U",
    releaseDate: "2026-04-10",
    description:
      "A ballroom instructor who has never once fallen for a student finally meets her match: a client with zero rhythm, an inconvenient wedding to prepare for, and terrible timing.",
    poster: "assets/images/movies/two-left-feet.svg",
    banner: "assets/images/banners/two-left-feet.svg"
  },
  {
    id: 8,
    title: "Starbound Legacy",
    genre: ["Sci-Fi", "Adventure"],
    language: "English",
    duration: "2h 32m",
    rating: 8.9,
    certificate: "UA",
    releaseDate: "2026-08-28",
    description:
      "The last generation ship in a dying fleet finds a habitable world three years ahead of schedule — but landing means abandoning the engine core that has kept every previous colony alive.",
    poster: "assets/images/movies/starbound-legacy.svg",
    banner: "assets/images/banners/starbound-legacy.svg"
  },

  /* ── ANIME ── */
  {
    id: 9,
    title: "Demon Slayer: Mugen Train",
    genre: ["Anime", "Action", "Adventure"],
    language: "Japanese",
    duration: "1h 57m",
    rating: 8.2,
    certificate: "UA",
    releaseDate: "2020-10-16",
    description:
      "Tanjiro and his friends join the Flame Hashira Rengoku on the Mugen Train to investigate the disappearance of over forty people aboard a demon-infested locomotive.",
    poster: "https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/jqEjHDalQ0mMvJhX0NcMg8Bys0a.jpg"
  },
  {
    id: 10,
    title: "Jujutsu Kaisen 0",
    genre: ["Anime", "Action"],
    language: "Japanese",
    duration: "1h 45m",
    rating: 7.9,
    certificate: "UA",
    releaseDate: "2021-12-24",
    description:
      "Yuta Okkotsu, a high schooler haunted by the powerful cursed spirit of his childhood friend Rika, enrolls at Jujutsu High to learn to control her power before a sinister sorcerer exploits it.",
    poster: "https://image.tmdb.org/t/p/w500/23zzOHjECze4cEExFiPyXbmCVqX.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/59gFH53BIjOXJqF3qCj0dlHZFdP.jpg"
  },
  {
    id: 11,
    title: "Suzume",
    genre: ["Anime", "Adventure", "Romance"],
    language: "Japanese",
    duration: "2h 02m",
    rating: 8.0,
    certificate: "U",
    releaseDate: "2022-11-11",
    description:
      "A 17-year-old girl named Suzume discovers a mysterious door in ruins across Japan. On the other side lies a world of stars that could bring disaster to anyone who opens it.",
    poster: "https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/4MDF0VIhPPJVmGfRvpx2MmVuNBm.jpg"
  },
  {
    id: 12,
    title: "A Silent Voice",
    genre: ["Anime", "Drama", "Romance"],
    language: "Japanese",
    duration: "2h 10m",
    rating: 8.1,
    certificate: "UA",
    releaseDate: "2016-09-17",
    description:
      "A young man who bullied a deaf girl in elementary school seeks her forgiveness after years of guilt and social isolation, leading to a moving journey of redemption and connection.",
    poster: "https://image.tmdb.org/t/p/w500/tuFGtvSFsCBRFSmTkFXSfcLFQaL.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/rhtbOzKI0N0G1hJbH8C1Jd0jUaN.jpg"
  },

  /* ── ROMANCE / DRAMA ── */
  {
    id: 13,
    title: "Your Name",
    genre: ["Anime", "Romance", "Drama"],
    language: "Japanese",
    duration: "1h 46m",
    rating: 8.4,
    certificate: "U",
    releaseDate: "2016-08-26",
    description:
      "Two strangers find they are living each other's lives in a magical body-swap. As they try to meet, a mysterious disaster threatens to separate them forever across time.",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg"
  },
  {
    id: 14,
    title: "Past Lives",
    genre: ["Romance", "Drama"],
    language: "English",
    duration: "1h 46m",
    rating: 7.9,
    certificate: "U",
    releaseDate: "2023-06-02",
    description:
      "Nora and Hae Sung, two deeply connected childhood friends, are separated when Nora's family emigrates from South Korea. Twenty years later, they reunite in New York City for one week.",
    poster: "https://image.tmdb.org/t/p/w500/k3waqVXSnäckOGMTg0KCUQN7yPm.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/8Af6kRcFdJhWHd0oMVW1mIFPuIE.jpg"
  },
  {
    id: 15,
    title: "La La Land",
    genre: ["Romance", "Drama"],
    language: "English",
    duration: "2h 08m",
    rating: 8.0,
    certificate: "U",
    releaseDate: "2016-12-09",
    description:
      "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles, but success begins to complicate their relationship.",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/nadTlnTE6DdgmYsN4iLoCHpnFkn.jpg"
  },

  /* ── ACTION / ADVENTURE ── */
  {
    id: 16,
    title: "Spider-Man: Across the Spider-Verse",
    genre: ["Action", "Adventure", "Anime"],
    language: "English",
    duration: "2h 20m",
    rating: 8.7,
    certificate: "UA",
    releaseDate: "2023-06-02",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/nGxUxi3PzAFSRZMgTblQKb0jiPT.jpg"
  },
  {
    id: 17,
    title: "Dune: Part Two",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    duration: "2h 46m",
    rating: 8.5,
    certificate: "UA",
    releaseDate: "2024-03-01",
    description:
      "Paul Atreides unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
  },
  {
    id: 18,
    title: "Top Gun: Maverick",
    genre: ["Action", "Adventure"],
    language: "English",
    duration: "2h 10m",
    rating: 8.3,
    certificate: "UA",
    releaseDate: "2022-05-27",
    description:
      "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot. He must confront the ghosts of his past when he leads a dangerous mission.",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/AkB0pEFEgLfHXIiQjO4vvDhEBt.jpg"
  },
  {
    id: 19,
    title: "The Batman",
    genre: ["Action", "Drama"],
    language: "English",
    duration: "2h 56m",
    rating: 7.8,
    certificate: "UA",
    releaseDate: "2022-03-04",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/5P8SmMzik6q2QdaGDzMaaMcXN4x.jpg"
  },

  /* ── BRAND NEW (2024-2025 releases) ── */
  {
    id: 20,
    title: "Brand New Day",
    genre: ["Drama", "Romance"],
    language: "English",
    duration: "1h 58m",
    rating: 7.6,
    certificate: "UA",
    releaseDate: "2024-09-13",
    description:
      "After a sudden loss, a grieving songwriter retreats to her hometown where unexpected reconnections and a bittersweet romance push her toward a long-overdue fresh start.",
    poster: "https://image.tmdb.org/t/p/w500/qbkAqmmEIZfrCO8ZQAuIuV5RqBU.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/t5zCBSB5xMDKcSmQLopKM4KZUUX.jpg"
  }
];

/* ---------- Theaters ---------- */
const theaters = [
  {
    id: 1,
    name: "Aurora Cinemas",
    location: "Grand Street",
    screen: "Screen 1",
    timeSlots: ["10:00 AM", "01:30 PM", "06:30 PM"]
  },
  {
    id: 2,
    name: "Nova Multiplex",
    location: "Lakeside Mall",
    screen: "Screen 2",
    timeSlots: ["11:00 AM", "03:30 PM", "07:00 PM"]
  },
  {
    id: 3,
    name: "Horizon Theatres",
    location: "Uptown Square",
    screen: "Screen 1",
    timeSlots: ["12:00 PM", "04:00 PM", "08:30 PM"]
  }
];

/* ---------- Seat configuration ----------
   Rows A–D → Regular (economy)
   Rows E–G → Premium
   Rows H–J → Recliner (VIP)
   12 seats per row, aisle after seat 6. */
const seatConfig = {
  rowTypes: [
    { row: "A", type: "regular"  },
    { row: "B", type: "regular"  },
    { row: "C", type: "regular"  },
    { row: "D", type: "regular"  },
    { row: "E", type: "premium"  },
    { row: "F", type: "premium"  },
    { row: "G", type: "premium"  },
    { row: "H", type: "recliner" },
    { row: "I", type: "recliner" },
    { row: "J", type: "recliner" }
  ],
  seatsPerRow: 12,
  aisleAfterSeat: 6,
  prices: {
    regular:  200,
    premium:  350,
    recliner: 550
  },
  convenienceFee: 30,
  maxSeatsPerBooking: 8
};

/* ---------- Date helper ---------- */
function getUpcomingDates(count) {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().slice(0, 10);
    dates.push({ iso, dateObj: d });
  }
  return dates;
}

const availableDates = getUpcomingDates(3);

/* ---------- Shows ---------- */
const shows = (function generateShows() {
  const list = [];
  let nextId = 101;

  movies.forEach((movie) => {
    theaters.forEach((theater) => {
      availableDates.forEach((dateInfo) => {
        theater.timeSlots.forEach((time) => {
          list.push({
            id: nextId++,
            movieId: movie.id,
            theaterId: theater.id,
            theater: theater.name,
            location: theater.location,
            screen: theater.screen,
            date: dateInfo.iso,
            time: time
          });
        });
      });
    });
  });

  return list;
})();
