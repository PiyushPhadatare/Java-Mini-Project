/* =========================================================
   CineBook — data.js
   Static sample data only: movies, theaters, seat pricing
   configuration, and generated shows. This file simulates
   what would normally come from a backend/database. Nothing
   in here touches the DOM.
   ========================================================= */

/* ---------- Movies ---------- */
const movies = [
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
   Rows A & B are regular, C & D are premium, E & F are
   recliner. Seats are generated dynamically by seats.js
   using this configuration — no seat is hand-written in HTML. */
const seatConfig = {
  rowTypes: [
    { row: "A", type: "regular" },
    { row: "B", type: "regular" },
    { row: "C", type: "premium" },
    { row: "D", type: "premium" },
    { row: "E", type: "recliner" },
    { row: "F", type: "recliner" }
  ],
  seatsPerRow: 8,
  aisleAfterSeat: 4,
  prices: {
    regular: 200,
    premium: 250,
    recliner: 350
  },
  convenienceFee: 30,
  maxSeatsPerBooking: 6
};

/* ---------- Date helper ----------
   Shows are generated for "today", "tomorrow" and "the day
   after" relative to whenever the project is actually opened,
   so the demo always has live dates to pick from. */
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

/* ---------- Shows ----------
   Generated programmatically: every movie plays at every
   theater, on every available date, across that theater's
   fixed daily time slots. */
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
