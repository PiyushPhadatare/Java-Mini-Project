/* =========================================================
   CineBook — data.js
   Static sample data: movies, theaters, seat pricing
   configuration, and generated shows.
   ========================================================= */

/* ---------- Movies ----------
   Poster URLs use verified TMDB & Wikimedia Commons URLs
   (2:3 aspect ratio, HTTPS, publicly accessible). */
const movies = [
  /* ── BLOCKBUSTERS & CLASSICS (matching posters & genres) ── */
  {
    id: 1,
    title: "Oppenheimer",
    genre: ["Drama"],
    language: "English",
    duration: "3h 00m",
    rating: 8.6,
    certificate: "UA",
    releaseDate: "2023-07-21",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral and political fallout that followed.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    banner: "assets/images/banners/crimson-horizon.svg",
    prices: {
      regular:   300,
      executive: 330,
      premium:   380,
      recliner:  850
    }
  },
  {
    id: 2,
    title: "Blade Runner 2049",
    genre: ["Sci-Fi", "Action", "Drama"],
    language: "English",
    duration: "2h 44m",
    rating: 8.0,
    certificate: "UA",
    releaseDate: "2017-10-06",
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years in a dystopian Los Angeles.",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    banner: "assets/images/banners/silver-static.svg",
    prices: {
      regular:   230,
      executive: 260,
      premium:   300,
      recliner:  650
    }
  },
  {
    id: 3,
    title: "Knives Out",
    genre: ["Comedy", "Drama", "Thriller"],
    language: "English",
    duration: "2h 10m",
    rating: 7.9,
    certificate: "UA",
    releaseDate: "2019-11-27",
    description:
      "A detective investigates the death of the patriarch of an eccentric, combative family after a gathering gone wrong, where every family member has a motive.",
    poster: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    banner: "assets/images/banners/the-last-laugh.svg",
    prices: {
      regular:   200,
      executive: 230,
      premium:   270,
      recliner:  580
    }
  },
  {
    id: 4,
    title: "The Lunchbox",
    genre: ["Drama", "Romance"],
    language: "Hindi",
    duration: "1h 44m",
    rating: 7.8,
    certificate: "U",
    releaseDate: "2013-09-20",
    description:
      "A mistaken delivery in Mumbai's famous lunchbox delivery system connects a young housewife to an older man in the dusk of his life as they build a quiet bond through handwritten notes.",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/81/The_Lunchbox_poster.jpg",
    banner: "assets/images/banners/monsoon-diaries.svg",
    prices: {
      regular:   160,
      executive: 190,
      premium:   230,
      recliner:  480
    }
  },
  {
    id: 5,
    title: "Princess Mononoke",
    genre: ["Anime", "Action", "Adventure"],
    language: "Japanese",
    duration: "2h 14m",
    rating: 8.4,
    certificate: "UA",
    releaseDate: "1997-07-12",
    description:
      "On a journey to find the cure for a Tatarigami's curse, young warrior Ashitaka finds himself in the middle of a war between the forest gods and a mining colony, where he meets Princess Mononoke.",
    poster: "https://image.tmdb.org/t/p/w500/jHWmNr7m544fJ8eItsfNk8fs2Ed.jpg",
    banner: "assets/images/banners/iron-lotus.svg",
    prices: {
      regular:   210,
      executive: 240,
      premium:   280,
      recliner:  600
    }
  },
  {
    id: 6,
    title: "A Quiet Place",
    genre: ["Horror", "Thriller", "Drama"],
    language: "English",
    duration: "1h 30m",
    rating: 7.5,
    certificate: "A",
    releaseDate: "2018-04-06",
    description:
      "In a post-apocalyptic world, a family is forced to live in complete silence while hiding from monsters with ultra-sensitive hearing that hunt anything that makes a sound.",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    banner: "assets/images/banners/whispering-pines.svg",
    prices: {
      regular:   210,
      executive: 240,
      premium:   280,
      recliner:  600
    }
  },
  {
    id: 7,
    title: "About Time",
    genre: ["Romance", "Comedy", "Drama"],
    language: "English",
    duration: "2h 03m",
    rating: 7.8,
    certificate: "UA",
    releaseDate: "2013-09-04",
    description:
      "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg",
    banner: "assets/images/banners/two-left-feet.svg",
    prices: {
      regular:   180,
      executive: 210,
      premium:   250,
      recliner:  520
    }
  },
  {
    id: 8,
    title: "Interstellar",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    language: "English",
    duration: "2h 49m",
    rating: 8.7,
    certificate: "UA",
    releaseDate: "2014-11-07",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    banner: "assets/images/banners/starbound-legacy.svg",
    prices: {
      regular:   250,
      executive: 280,
      premium:   320,
      recliner:  700
    }
  },

  /* ── ANIME ── */
  {
    id: 9,
    title: "Demon Slayer: Infinity Castle",
    genre: ["Anime", "Action", "Adventure"],
    language: "Japanese",
    duration: "2h 15m",
    rating: 8.8,
    certificate: "UA",
    releaseDate: "2025-05-16",
    description:
      "The Demon Slayer Corps plunge into the Infinity Castle to face Muzan Kibutsuji and the remaining Upper Ranks in the ultimate, climactic battle.",
    poster: "assets/images/movies/demon-slayer-infinity-castle.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    prices: {
      regular:   250,
      executive: 280,
      premium:   320,
      recliner:  700
    }
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
    poster: "https://upload.wikimedia.org/wikipedia/en/7/77/Gekij%C5%8D-ban_Jujutsu_Kaisen_0.png",
    banner: "assets/images/banners/iron-lotus.svg",
    prices: {
      regular:   240,
      executive: 270,
      premium:   310,
      recliner:  680
    }
  },
  {
    id: 11,
    title: "Suzume",
    genre: ["Anime", "Adventure", "Romance"],
    language: "Japanese",
    duration: "2h 02m",
    rating: 8.3,
    certificate: "U",
    releaseDate: "2022-11-11",
    description:
      "A 17-year-old girl named Suzume discovers a mysterious door in ruins across Japan. On the other side lies a world of stars that could bring disaster to anyone who opens it.",
    poster: "assets/images/movies/suzume.jpg",
    banner: "https://image.tmdb.org/t/p/w1280/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    prices: {
      regular:   230,
      executive: 260,
      premium:   300,
      recliner:  650
    }
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
    poster: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
    banner: "assets/images/banners/monsoon-diaries.svg",
    prices: {
      regular:   200,
      executive: 230,
      premium:   270,
      recliner:  580
    }
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
    banner: "https://image.tmdb.org/t/p/w1280/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    prices: {
      regular:   220,
      executive: 250,
      premium:   290,
      recliner:  620
    }
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
    poster: "https://upload.wikimedia.org/wikipedia/en/d/da/Past_Lives_film_poster.png",
    banner: "assets/images/banners/two-left-feet.svg",
    prices: {
      regular:   190,
      executive: 220,
      premium:   260,
      recliner:  540
    }
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
    banner: "assets/images/banners/two-left-feet.svg",
    prices: {
      regular:   200,
      executive: 230,
      premium:   270,
      recliner:  580
    }
  },
  {
    id: 16,
    title: "The Notebook",
    genre: ["Romance", "Drama"],
    language: "English",
    duration: "2h 03m",
    rating: 7.8,
    certificate: "UA",
    releaseDate: "2004-06-25",
    description:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
    banner: "assets/images/banners/monsoon-diaries.svg",
    prices: {
      regular:   170,
      executive: 200,
      premium:   240,
      recliner:  500
    }
  },

  /* ── ACTION / ADVENTURE ── */
  {
    id: 17,
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
    banner: "assets/images/banners/crimson-horizon.svg",
    prices: {
      regular:   260,
      executive: 290,
      premium:   330,
      recliner:  750
    }
  },
  {
    id: 18,
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
    banner: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    prices: {
      regular:   280,
      executive: 320,
      premium:   360,
      recliner:  800
    }
  },
  {
    id: 19,
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
    banner: "assets/images/banners/crimson-horizon.svg",
    prices: {
      regular:   270,
      executive: 300,
      premium:   350,
      recliner:  780
    }
  },
  {
    id: 20,
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
    banner: "assets/images/banners/silver-static.svg",
    prices: {
      regular:   260,
      executive: 290,
      premium:   340,
      recliner:  750
    }
  },

  /* ── ONGOING / BRAND NEW & FAN FAVORITES ── */
  {
    id: 21,
    title: "Spider-Man: Brand New Day",
    genre: ["Action", "Adventure", "Drama"],
    language: "English",
    duration: "2h 28m",
    rating: 8.6,
    certificate: "UA",
    releaseDate: "2026-07-31",
    description:
      "Erased from the memories of everyone he loves, Peter Parker starts over in New York City as a street-level hero while a new underworld war pushes his double life to the breaking point.",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9a/Spider-Man_Brand_New_Day_poster.jpg",
    banner: "assets/images/banners/starbound-legacy.svg",
    prices: {
      regular:   310,
      executive: 340,
      premium:   380,
      recliner:  880
    }
  },
  {
    id: 22,
    title: "Raya and the Last Dragon",
    genre: ["Adventure", "Action"],
    language: "English",
    duration: "1h 47m",
    rating: 7.7,
    certificate: "U",
    releaseDate: "2021-03-05",
    description:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. Five hundred years later, a lone warrior named Raya must track down the legendary last dragon to restore the fractured land.",
    poster: "https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    banner: "assets/images/banners/starbound-legacy.svg",
    prices: {
      regular:   220,
      executive: 250,
      premium:   290,
      recliner:  640
    }
  },
  {
    id: 23,
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: "English",
    duration: "3h 01m",
    rating: 8.9,
    certificate: "UA",
    releaseDate: "2019-04-26",
    description:
      "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster: "assets/images/movies/avengers-endgame.jpg",
    banner: "assets/images/banners/crimson-horizon.svg",
    prices: {
      regular:   320,
      executive: 340,
      premium:   360,
      recliner:  900
    }
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
   Retains original rows A–F and adds G–J (12 seats per row). */
const seatConfig = {
  rowTypes: [
    { row: "A", type: "regular"   },
    { row: "B", type: "regular"   },
    { row: "C", type: "executive" },
    { row: "D", type: "executive" },
    { row: "E", type: "executive" },
    { row: "F", type: "premium"   },
    { row: "G", type: "premium"   },
    { row: "H", type: "premium"   },
    { row: "I", type: "recliner"  },
    { row: "J", type: "recliner"  }
  ],
  seatsPerRow: 12,
  aisleAfterSeat: 6,
  prices: {
    regular:   320,
    executive: 340,
    premium:   360,
    recliner:  900
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
