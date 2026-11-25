import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6dd4246c"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=6dd4246c"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useMemo = __vite__cjsImport3_react["useMemo"]; const useRef = __vite__cjsImport3_react["useRef"]; const useState = __vite__cjsImport3_react["useState"];
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=6dd4246c"; const createRoot = __vite__cjsImport4_reactDom_client["createRoot"];
import {
  Headphones,
  Search,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  ListMusic,
  UserRound,
  ShieldCheck,
  LogOut,
  Music2,
  Disc3,
  Mic2,
  Clock3,
  Star,
  Plus,
  Trash2,
  Download,
  X,
  Menu,
  Home,
  Library,
  Users,
  AudioLines,
  Share2,
  Timer,
  LifeBuoy,
  CheckCircle2,
  MessageCircle
} from "/node_modules/.vite/deps/lucide-react.js?v=6dd4246c";
import "/src/styles.css";
const seedSongs = [
  { id: "s1", title: "Midnight City", artist: "M83", genre: "Electronic", album: "Hurry Up, We’re Dreaming", cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: "s2", title: "Golden Hour", artist: "JVKE", genre: "Pop", album: "Golden Hour", cover: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: "s3", title: "Ocean Drive", artist: "Duke Dumont", genre: "House", album: "Blasé Boys Club", cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: "s4", title: "Weightless", artist: "Marconi Union", genre: "Ambient", album: "Weightless", cover: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { id: "s5", title: "Night Changes", artist: "One Direction", genre: "Pop", album: "FOUR", cover: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { id: "s6", title: "Stargazing", artist: "The Neighbourhood", genre: "Alternative", album: "I Love You.", cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { id: "s7", title: "Sunset Lover", artist: "Petit Biscuit", genre: "Electronic", album: "Presence", cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { id: "s8", title: "Bloom", artist: "The Paper Kites", genre: "Indie", album: "Woodland", cover: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=85", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
];
const read = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const fmt = (n) => `${Math.floor((n || 0) / 60)}:${String(Math.floor((n || 0) % 60)).padStart(2, "0")}`;
function App() {
  _s();
  const [songs, setSongs] = useState(() => read("mw_songs", seedSongs));
  const [users, setUsers] = useState(() => read("mw_users", []));
  const [user, setUser] = useState(() => localStorage.getItem("mw_session") || "");
  const [admin, setAdmin] = useState(() => localStorage.getItem("mw_admin") === "true");
  const [sharedPlaylist, setSharedPlaylist] = useState(() => {
    try {
      const raw = new URLSearchParams(window.location.search).get("sharedPlaylist");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [shareMessage, setShareMessage] = useState("");
  const [page, setPage] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).has("sharedPlaylist") ? "Shared playlist" : "Home";
    } catch {
      return "Home";
    }
  });
  const [authMode, setAuthMode] = useState("login");
  const [authName, setAuthName] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminMessage, setAdminMessage] = useState("");
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [favorites, setFavorites] = useState(() => read("mw_favorites", []));
  const [ratings, setRatings] = useState(() => read("mw_ratings", {}));
  const [playlists, setPlaylists] = useState(() => read("mw_playlists", []));
  const [recent, setRecent] = useState(() => read("mw_recent", []));
  const [supportTickets, setSupportTickets] = useState(() => read("mw_support_tickets", []));
  const [supportSubject, setSupportSubject] = useState("Technical issue");
  const [supportMessage, setSupportMessage] = useState("");
  const [supportNotice, setSupportNotice] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [activePlaylist, setActivePlaylist] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [sleepMinutes, setSleepMinutes] = useState(30);
  const [sleepRemaining, setSleepRemaining] = useState(0);
  const [sleepTimerActive, setSleepTimerActive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const audioRef = useRef(null);
  const fileRef = useRef(null);
  useEffect(() => write("mw_songs", songs), [songs]);
  useEffect(() => write("mw_users", users), [users]);
  useEffect(() => write("mw_favorites", favorites), [favorites]);
  useEffect(() => write("mw_ratings", ratings), [ratings]);
  useEffect(() => write("mw_playlists", playlists), [playlists]);
  useEffect(() => write("mw_recent", recent), [recent]);
  useEffect(() => write("mw_support_tickets", supportTickets), [supportTickets]);
  useEffect(() => {
    if (!sleepTimerActive) return void 0;
    const timerId = window.setInterval(() => {
      setSleepRemaining((previous) => {
        if (previous <= 1) {
          audioRef.current?.pause();
          setPlaying(false);
          setSleepTimerActive(false);
          return 0;
        }
        return previous - 1;
      });
    }, 1e3);
    return () => window.clearInterval(timerId);
  }, [sleepTimerActive]);
  const current = songs.find((s) => s.id === currentId) || sharedPlaylist?.songs?.find((s) => s.id === currentId);
  const genres = ["All", ...new Set(songs.map((s) => s.genre).filter(Boolean))];
  const visibleSongs = useMemo(() => songs.filter(
    (s) => (genre === "All" || s.genre === genre) && `${s.title} ${s.artist} ${s.album} ${s.genre}`.toLowerCase().includes(query.toLowerCase())
  ), [songs, genre, query]);
  const playSong = async (song) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (currentId !== song.id) {
      setCurrentId(song.id);
      setCurrentTime(0);
      setRecent((prev) => [song.id, ...prev.filter((id) => id !== song.id)].slice(0, 6));
      audio.src = song.audio;
      audio.load();
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!current && songs[0]) {
      await playSong(songs[0]);
      return;
    }
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  const stepSong = (direction) => {
    if (!songs.length) return;
    const index = Math.max(0, songs.findIndex((s) => s.id === currentId));
    const next = (index + direction + songs.length) % songs.length;
    playSong(songs[next]);
  };
  const toggleFavorite = (id) => {
    if (!user) {
      setAuthMode("login");
      setPage("Login");
      setAuthMessage("Please log in to save favorites.");
      return;
    }
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };
  const signup = (e) => {
    e.preventDefault();
    const name = authName.trim();
    if (name.length < 3 || authPass.length < 4) return setAuthMessage("Use a username (3+ characters) and password (4+ characters).");
    if (users.some((u) => u.username.toLowerCase() === name.toLowerCase())) return setAuthMessage("That username is already registered.");
    const next = [...users, { username: name, password: authPass, joined: (/* @__PURE__ */ new Date()).toISOString() }];
    setUsers(next);
    localStorage.setItem("mw_session", name);
    setUser(name);
    setAuthMessage("Account created. Welcome to MusicWave!");
    setPage("Home");
    setAuthName("");
    setAuthPass("");
  };
  const login = (e) => {
    e.preventDefault();
    const found = users.find((u) => u.username.toLowerCase() === authName.trim().toLowerCase() && u.password === authPass);
    if (!found) return setAuthMessage("Incorrect username or password.");
    localStorage.setItem("mw_session", found.username);
    setUser(found.username);
    setAuthMessage("");
    setPage("Home");
    setAuthName("");
    setAuthPass("");
  };
  const logout = () => {
    localStorage.removeItem("mw_session");
    setUser("");
    setPage("Home");
  };
  const adminLogin = (e) => {
    e.preventDefault();
    if (adminName === "admin" && adminPass === "admin123") {
      localStorage.setItem("mw_admin", "true");
      setAdmin(true);
      setPage("Admin");
      setAdminMessage("");
    } else setAdminMessage("Invalid admin username or password.");
  };
  const adminLogout = () => {
    localStorage.removeItem("mw_admin");
    setAdmin(false);
    setPage("Home");
  };
  const createPlaylist = (e) => {
    e.preventDefault();
    if (!user) {
      setPage("Login");
      setAuthMode("login");
      return;
    }
    if (!playlistName.trim()) return;
    const item = { id: crypto.randomUUID(), name: playlistName.trim(), songs: [] };
    setPlaylists((prev) => [...prev, item]);
    setActivePlaylist(item.id);
    setPlaylistName("");
  };
  const addToPlaylist = (id) => {
    if (!user) {
      setPage("Login");
      setAuthMode("login");
      return;
    }
    if (!playlists.length) {
      setPage("Playlists");
      return;
    }
    const target = playlists[0];
    setPlaylists((prev) => prev.map((p) => p.id === target.id && !p.songs.includes(id) ? { ...p, songs: [...p.songs, id] } : p));
    setActivePlaylist(target.id);
  };
  const sharePlaylist = async (playlist) => {
    const tracks = playlist.songs.map((id) => songs.find((song) => song.id === id)).filter(Boolean).map(({ id, title, artist, album, genre: genre2, cover, audio }) => ({ id, title, artist, album, genre: genre2, cover, audio }));
    const payload = { name: playlist.name, owner: user || "MusicWave listener", songs: tracks };
    const url = `${window.location.origin}${window.location.pathname}?sharedPlaylist=${encodeURIComponent(JSON.stringify(payload))}`;
    try {
      if (navigator.share) await navigator.share({ title: `${playlist.name} · MusicWave`, text: "Listen to this playlist on MusicWave", url });
      else {
        await navigator.clipboard.writeText(url);
        setShareMessage("Playlist link copied! Send it to your friends.");
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(url);
          setShareMessage("Playlist link copied! Send it to your friends.");
        } catch {
          setShareMessage("Could not copy automatically. Your browser may block clipboard access.");
        }
      }
    }
  };
  const updateRating = (id, value) => setRatings((prev) => ({ ...prev, [id]: value }));
  const submitSupportTicket = (e) => {
    e.preventDefault();
    if (!user) {
      setSupportNotice("Please log in before submitting a support request.");
      setAuthMode("login");
      setPage("Login");
      return;
    }
    if (!supportMessage.trim()) return;
    const ticket = { id: crypto.randomUUID(), username: user, subject: supportSubject, message: supportMessage.trim(), status: "Open", createdAt: (/* @__PURE__ */ new Date()).toISOString() };
    setSupportTickets((prev) => [ticket, ...prev]);
    setSupportMessage("");
    setSupportNotice("Your support request was submitted successfully.");
  };
  const updateTicketStatus = (id, status) => setSupportTickets((prev) => prev.map((ticket) => ticket.id === id ? { ...ticket, status } : ticket));
  const deleteTicket = (id) => setSupportTickets((prev) => prev.filter((ticket) => ticket.id !== id));
  const addSong = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get("title") || "").trim();
    const artist = String(data.get("artist") || "").trim();
    if (!title || !artist) return;
    setSongs((prev) => [...prev, { id: crypto.randomUUID(), title, artist, genre: String(data.get("genre") || "Pop"), album: "Single", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=85", audio: String(data.get("audio") || seedSongs[0].audio) }]);
    e.currentTarget.reset();
  };
  const deleteSong = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
    setFavorites((prev) => prev.filter((x) => x !== id));
    setPlaylists((prev) => prev.map((p) => ({ ...p, songs: p.songs.filter((x) => x !== id) })));
    if (currentId === id) {
      audioRef.current?.pause();
      setCurrentId("");
      setPlaying(false);
    }
  };
  const deleteUser = (name) => {
    setUsers((prev) => prev.filter((u) => u.username !== name));
    if (user === name) logout();
  };
  const go = (target) => {
    setPage(target);
    setMobileNav(false);
    setQuery("");
  };
  const startSleepTimer = () => {
    if (!current) {
      setPage("Sleep Timer");
      return;
    }
    setSleepRemaining(sleepMinutes * 60);
    setSleepTimerActive(true);
  };
  const cancelSleepTimer = () => {
    setSleepTimerActive(false);
    setSleepRemaining(0);
  };
  const sleepTimeLabel = `${String(Math.floor(sleepRemaining / 60)).padStart(2, "0")}:${String(sleepRemaining % 60).padStart(2, "0")}`;
  const navItems = [
    ["Home", Home],
    ["Discover", Search],
    ["Albums", Disc3],
    ["Artists", Mic2],
    ["Favorites", Heart],
    ["Playlists", ListMusic],
    ["Recently played", Clock3],
    ["Sleep Timer", Timer],
    ["Help & Support", LifeBuoy]
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "app-shell", children: [
    /* @__PURE__ */ jsxDEV("aside", { className: `sidebar ${mobileNav ? "open" : ""}`, children: [
      /* @__PURE__ */ jsxDEV("button", { className: "brand", onClick: () => go("Home"), children: [
        /* @__PURE__ */ jsxDEV("span", { className: "brand-icon", children: /* @__PURE__ */ jsxDEV(AudioLines, { size: 22 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 242,
          columnNumber: 89
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 242,
          columnNumber: 60
        }, this),
        " music",
        /* @__PURE__ */ jsxDEV("span", { children: "wave" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 242,
          columnNumber: 126
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 242,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "nav-caption", children: "MENU" }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 243,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { children: navItems.map(([label, Icon]) => /* @__PURE__ */ jsxDEV("button", { className: `nav-link ${page === label ? "active" : ""}`, onClick: () => go(label), children: [
        /* @__PURE__ */ jsxDEV(Icon, { size: 18 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 244,
          columnNumber: 148
        }, this),
        label
      ] }, label, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 244,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 244,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "sidebar-bottom", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "upgrade-card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "upgrade-orb", children: /* @__PURE__ */ jsxDEV(Headphones, { size: 22 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 246,
            columnNumber: 68
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 246,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ jsxDEV("strong", { children: "Your sound, your space." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 246,
            columnNumber: 98
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "Build a library that feels like you." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 246,
            columnNumber: 138
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => user ? go("Playlists") : go("Signup"), children: [
            "Get started ",
            /* @__PURE__ */ jsxDEV("span", { children: "↗" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 246,
              columnNumber: 255
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 246,
            columnNumber: 181
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 246,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: `nav-link ${page === "Admin" || page === "Admin login" ? "active" : ""}`, onClick: () => go(admin ? "Admin" : "Admin login"), children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 18 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 247,
            columnNumber: 154
          }, this),
          "Admin module"
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 247,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "nav-link", onClick: () => user ? go("Profile") : go("Login"), children: [
          /* @__PURE__ */ jsxDEV(UserRound, { size: 18 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 248,
            columnNumber: 89
          }, this),
          user || "My account"
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 248,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 245,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 241,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "main-area", children: [
      /* @__PURE__ */ jsxDEV("header", { className: "topbar", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "mobile-menu icon-btn", onClick: () => setMobileNav((v) => !v), children: /* @__PURE__ */ jsxDEV(Menu, {}, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 254,
          columnNumber: 90
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 254,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "breadcrumb", children: [
          "Your library ",
          /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 255,
            columnNumber: 50
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV("b", { children: page }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 255,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 255,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("label", { className: "search-box", children: [
          /* @__PURE__ */ jsxDEV(Search, { size: 17 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 256,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ jsxDEV("input", { value: query, onChange: (e) => {
            setQuery(e.target.value);
            if (page !== "Discover") setPage("Discover");
          }, placeholder: "Search songs, artists, albums..." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 256,
            columnNumber: 59
          }, this),
          /* @__PURE__ */ jsxDEV("kbd", { children: "⌘ K" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 256,
            columnNumber: 220
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 256,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "top-actions", children: [
          user ? /* @__PURE__ */ jsxDEV("button", { className: "user-chip", onClick: () => go("Profile"), children: [
            /* @__PURE__ */ jsxDEV("span", { className: "avatar", children: user.slice(0, 1).toUpperCase() }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 258,
              columnNumber: 79
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: user }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 258,
              columnNumber: 143
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 258,
            columnNumber: 19
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("button", { className: "text-btn", onClick: () => {
              setAuthMode("login");
              go("Login");
            }, children: "Log in" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 258,
              columnNumber: 176
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "primary-btn small", onClick: () => {
              setAuthMode("signup");
              go("Signup");
            }, children: "Sign up" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 258,
              columnNumber: 272
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 258,
            columnNumber: 174
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "outline-btn admin-shortcut", title: "Open Admin module", onClick: () => go(admin ? "Admin" : "Admin login"), children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 16 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 259,
              columnNumber: 136
            }, this),
            " Admin"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 259,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 257,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 253,
        columnNumber: 7
      }, this),
      page === "Home" && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV("section", { className: "hero-card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "hero-copy", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "pulse" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 265,
                columnNumber: 64
              }, this),
              " YOUR DAILY SOUNDTRACK"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 265,
              columnNumber: 38
            }, this),
            /* @__PURE__ */ jsxDEV("h1", { children: [
              "Find your",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 265,
                columnNumber: 132
              }, this),
              /* @__PURE__ */ jsxDEV("em", { children: "own rhythm." }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 265,
                columnNumber: 138
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 265,
              columnNumber: 119
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Fresh discoveries, familiar favorites, and everything in between. Your next obsession starts here." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 265,
              columnNumber: 163
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "primary-btn", onClick: () => go("Discover"), children: [
              "Explore music ",
              /* @__PURE__ */ jsxDEV("span", { children: "↗" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 265,
                columnNumber: 345
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 265,
              columnNumber: 268
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 265,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hero-art", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "art-ring ring-one" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "art-ring ring-two" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 74
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "hero-disc", children: /* @__PURE__ */ jsxDEV("div", { className: "disc-label", children: /* @__PURE__ */ jsxDEV(AudioLines, { size: 36 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 166
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 138
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 111
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "floating-note note-a", children: "♫" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 202
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "floating-note note-b", children: "♪" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 247
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "hero-tag", children: [
              "NOW PLAYING",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 266,
                columnNumber: 329
              }, this),
              /* @__PURE__ */ jsxDEV("b", { children: "GOOD VIBRATIONS" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 266,
                columnNumber: 335
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 266,
              columnNumber: 292
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 266,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hero-index", children: [
            "01 ",
            /* @__PURE__ */ jsxDEV("span", { children: "/" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 267,
              columnNumber: 42
            }, this),
            " 04"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 267,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 264,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "section-block", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "HANDPICKED FOR YOU" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 269,
                columnNumber: 82
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: "Made for this moment" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 269,
                columnNumber: 133
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 269,
              columnNumber: 77
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "see-all", onClick: () => go("Discover"), children: [
              "View all ",
              /* @__PURE__ */ jsxDEV("span", { children: "→" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 269,
                columnNumber: 236
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 269,
              columnNumber: 168
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 269,
            columnNumber: 44
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "song-grid", children: songs.slice(0, 4).map((s, i) => /* @__PURE__ */ jsxDEV(SongCard, { song: s, index: i, playing: currentId === s.id && playing, favorite: favorites.includes(s.id), rating: ratings[s.id] || 0, onPlay: playSong, onFavorite: toggleFavorite, onRate: updateRating, onAdd: addToPlaylist }, s.id, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 269,
            columnNumber: 325
          }, this)) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 269,
            columnNumber: 265
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 269,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "section-block", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "PICK UP WHERE YOU LEFT OFF" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 270,
                columnNumber: 82
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: "Recently played" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 270,
                columnNumber: 141
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 270,
              columnNumber: 77
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "see-all", onClick: () => go("Recently played"), children: "See history →" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 270,
              columnNumber: 171
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 270,
            columnNumber: 44
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "recent-row", children: recent.length ? recent.map((id) => songs.find((s) => s.id === id)).filter(Boolean).slice(0, 5).map((s) => /* @__PURE__ */ jsxDEV("button", { className: "recent-item", onClick: () => playSong(s), children: [
            /* @__PURE__ */ jsxDEV("img", { src: s.cover }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 270,
              columnNumber: 471
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: [
              /* @__PURE__ */ jsxDEV("b", { children: s.title }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 270,
                columnNumber: 498
              }, this),
              /* @__PURE__ */ jsxDEV("small", { children: s.artist }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 270,
                columnNumber: 514
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 270,
              columnNumber: 492
            }, this),
            /* @__PURE__ */ jsxDEV(Play, { size: 15 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 270,
              columnNumber: 546
            }, this)
          ] }, s.id, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 270,
            columnNumber: 400
          }, this)) : /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "Your listening history will show up here." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 270,
            columnNumber: 577
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 270,
            columnNumber: 265
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 270,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 263,
        columnNumber: 27
      }, this),
      ["Discover", "Albums", "Artists", "Favorites", "Recently played"].includes(page) && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: page === "Discover" ? "THE MUSIC UNIVERSE" : "YOUR COLLECTION", title: page === "Discover" ? "Explore the sound." : page === "Albums" ? "Albums worth a replay." : page === "Artists" ? "Meet your new favorites." : page === "Favorites" ? "Your all-time loves." : "Back in the groove.", subtitle: page === "Discover" ? "Search the catalog and find something that moves you." : `A little more of what makes ${user || "you"} feel something.` }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 274,
          columnNumber: 9
        }, this),
        page === "Discover" && /* @__PURE__ */ jsxDEV("div", { className: "filter-row", children: genres.map((g) => /* @__PURE__ */ jsxDEV("button", { className: `filter-chip ${genre === g ? "selected" : ""}`, onClick: () => setGenre(g), children: g }, g, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 275,
          columnNumber: 80
        }, this)) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 275,
          columnNumber: 33
        }, this),
        page === "Albums" ? /* @__PURE__ */ jsxDEV("div", { className: "collection-grid", children: [...new Set(songs.map((s) => s.album))].map((album) => {
          const s = songs.find((x) => x.album === album);
          return /* @__PURE__ */ jsxDEV("button", { className: "album-tile", onClick: () => {
            setQuery(album);
            setPage("Discover");
          }, children: [
            /* @__PURE__ */ jsxDEV("img", { src: s.cover }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 276,
              columnNumber: 272
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: album }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 276,
              columnNumber: 293
            }, this),
            /* @__PURE__ */ jsxDEV("small", { children: s.artist }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 276,
              columnNumber: 307
            }, this)
          ] }, album, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 276,
            columnNumber: 174
          }, this);
        }) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 276,
          columnNumber: 30
        }, this) : page === "Artists" ? /* @__PURE__ */ jsxDEV("div", { className: "collection-grid artist-grid", children: [...new Set(songs.map((s) => s.artist))].map((artist) => {
          const s = songs.find((x) => x.artist === artist);
          return /* @__PURE__ */ jsxDEV("button", { className: "artist-tile", onClick: () => {
            setQuery(artist);
            setPage("Discover");
          }, children: [
            /* @__PURE__ */ jsxDEV("img", { src: s.cover }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 277,
              columnNumber: 291
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: artist }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 277,
              columnNumber: 312
            }, this),
            /* @__PURE__ */ jsxDEV("small", { children: [
              songs.filter((x) => x.artist === artist).length,
              " track(s)"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 277,
              columnNumber: 327
            }, this)
          ] }, artist, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 277,
            columnNumber: 190
          }, this);
        }) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 277,
          columnNumber: 30
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "song-grid", children: (page === "Favorites" ? songs.filter((s) => favorites.includes(s.id)) : page === "Recently played" ? recent.map((id) => songs.find((s) => s.id === id)).filter(Boolean) : visibleSongs).map((s, i) => /* @__PURE__ */ jsxDEV(SongCard, { song: s, index: i, playing: currentId === s.id && playing, favorite: favorites.includes(s.id), rating: ratings[s.id] || 0, onPlay: playSong, onFavorite: toggleFavorite, onRate: updateRating, onAdd: addToPlaylist }, s.id, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 278,
          columnNumber: 235
        }, this)) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 278,
          columnNumber: 9
        }, this),
        page === "Discover" && !visibleSongs.length && /* @__PURE__ */ jsxDEV("div", { className: "empty-state", children: [
          /* @__PURE__ */ jsxDEV(Search, { size: 28 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 279,
            columnNumber: 86
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { children: "No tracks found" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 279,
            columnNumber: 106
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "Try another title, artist or genre." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 279,
            columnNumber: 130
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 279,
          columnNumber: 57
        }, this),
        page === "Favorites" && !favorites.length && /* @__PURE__ */ jsxDEV("div", { className: "empty-state", children: [
          /* @__PURE__ */ jsxDEV(Heart, { size: 28 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 280,
            columnNumber: 84
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { children: "Your favorites live here" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 280,
            columnNumber: 103
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: "Tap the heart on any track to save it." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 280,
            columnNumber: 136
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 280,
          columnNumber: 55
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 273,
        columnNumber: 92
      }, this),
      page === "Playlists" && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "CURATED BY YOU", title: "Your playlists.", subtitle: "Make a collection for every version of you." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 283,
          columnNumber: 57
        }, this),
        /* @__PURE__ */ jsxDEV("form", { className: "create-playlist", onSubmit: createPlaylist, children: [
          /* @__PURE__ */ jsxDEV("input", { value: playlistName, onChange: (e) => setPlaylistName(e.target.value), placeholder: "Name your new playlist" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 234
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "primary-btn", children: [
            /* @__PURE__ */ jsxDEV(Plus, { size: 17 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 383
            }, this),
            " Create playlist"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 351
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 283,
          columnNumber: 174
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "playlist-layout", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "playlist-list", children: [
            playlists.map((p) => /* @__PURE__ */ jsxDEV("button", { className: `playlist-row ${activePlaylist === p.id ? "selected" : ""}`, onClick: () => setActivePlaylist(p.id), children: [
              /* @__PURE__ */ jsxDEV("span", { className: "playlist-cover", children: /* @__PURE__ */ jsxDEV(ListMusic, {}, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 683
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 650
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("b", { children: p.name }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 709
                }, this),
                /* @__PURE__ */ jsxDEV("small", { children: [
                  p.songs.length,
                  " tracks"
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 724
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 703
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "row-arrow", children: "→" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 769
              }, this)
            ] }, p.id, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 519
            }, this)),
            !playlists.length && /* @__PURE__ */ jsxDEV("div", { className: "empty-state", children: [
              /* @__PURE__ */ jsxDEV(ListMusic, {}, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 867
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { children: "No playlists yet" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 880
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: "Create one above, then add tracks from Discover." }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 905
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 838
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 466
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "playlist-detail", children: activePlaylist && playlists.find((p) => p.id === activePlaylist) ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "NOW CURATING" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1114
                }, this),
                /* @__PURE__ */ jsxDEV("h2", { children: playlists.find((p) => p.id === activePlaylist).name }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1159
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "share-note", children: "Free playlist sharing · No premium required" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1221
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 1109
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "playlist-actions", children: [
                /* @__PURE__ */ jsxDEV("button", { className: "outline-btn", onClick: () => sharePlaylist(playlists.find((p) => p.id === activePlaylist)), children: [
                  /* @__PURE__ */ jsxDEV(Share2, { size: 15 }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 283,
                    columnNumber: 1444
                  }, this),
                  " Share playlist"
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1334
                }, this),
                /* @__PURE__ */ jsxDEV("button", { className: "icon-btn danger", onClick: () => {
                  setPlaylists((p) => p.filter((x) => x.id !== activePlaylist));
                  setActivePlaylist("");
                }, children: /* @__PURE__ */ jsxDEV(Trash2, { size: 17 }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1627
                }, this) }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1488
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 1300
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 1076
            }, this),
            shareMessage && /* @__PURE__ */ jsxDEV("p", { className: "form-message", children: shareMessage }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 1685
            }, this),
            playlists.find((p) => p.id === activePlaylist).songs.map((id) => songs.find((s) => s.id === id)).filter(Boolean).map((s) => /* @__PURE__ */ jsxDEV("div", { className: "track-row", children: [
              /* @__PURE__ */ jsxDEV("img", { src: s.cover }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 1895
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("b", { children: s.title }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1922
                }, this),
                /* @__PURE__ */ jsxDEV("small", { children: s.artist }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 283,
                  columnNumber: 1938
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 1916
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "icon-btn", onClick: () => playSong(s), children: /* @__PURE__ */ jsxDEV(Play, { size: 16 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 2027
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 1970
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "icon-btn danger", onClick: () => setPlaylists((p) => p.map((x) => x.id === activePlaylist ? { ...x, songs: x.songs.filter((i) => i !== s.id) } : x)), children: /* @__PURE__ */ jsxDEV(X, { size: 16 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 2222
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 283,
                columnNumber: 2054
              }, this)
            ] }, s.id, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 1857
            }, this)),
            !playlists.find((p) => p.id === activePlaylist).songs.length && /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "This playlist is waiting for its first track. Add songs from Discover." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 2319
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 1074
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "empty-state", children: [
            /* @__PURE__ */ jsxDEV(Disc3, {}, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 2457
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { children: "Select a playlist" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 2466
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "Choose a playlist to see what’s inside." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 283,
              columnNumber: 2492
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 2428
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 283,
            columnNumber: 973
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 283,
          columnNumber: 433
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 283,
        columnNumber: 32
      }, this),
      page === "Help & Support" && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "WE’RE HERE TO HELP", title: "Help & Support.", subtitle: "Find quick answers or send a support request." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 285,
          columnNumber: 62
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "support-layout", children: [
          /* @__PURE__ */ jsxDEV("section", { className: "support-panel", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "QUICK ANSWERS" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 290
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: "Frequently asked questions" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 336
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 285
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 252
            }, this),
            [{ q: "How do I create an account?", a: "Choose Sign up, enter a username and password, then create your account." }, { q: "How do I play a song?", a: "Open Discover or Home and select the Play button on a song." }, { q: "How do I create a playlist?", a: "Open Playlists, enter a name and choose Create playlist. Add songs from Discover." }, { q: "How do I save a favourite?", a: "Select the heart icon on a song. Your favourites appear in Favorites." }, { q: "Why is a song not playing?", a: "Check your internet connection and try another track. Some sample audio links may be unavailable." }].map((item, i) => /* @__PURE__ */ jsxDEV("details", { className: "faq-item", children: [
              /* @__PURE__ */ jsxDEV("summary", { children: item.q }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1035
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: item.a }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1062
              }, this)
            ] }, i, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 997
            }, this))
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 217
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "support-panel", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "CONTACT SUPPORT" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 285,
                  columnNumber: 1172
                }, this),
                /* @__PURE__ */ jsxDEV("h2", { children: "Send us a message" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 285,
                  columnNumber: 1220
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1167
              }, this),
              /* @__PURE__ */ jsxDEV(MessageCircle, {}, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1252
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 1134
            }, this),
            /* @__PURE__ */ jsxDEV("form", { className: "support-form", onSubmit: submitSupportTicket, children: [
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Issue type",
                /* @__PURE__ */ jsxDEV("select", { value: supportSubject, onChange: (e) => setSupportSubject(e.target.value), children: [
                  /* @__PURE__ */ jsxDEV("option", { children: "Technical issue" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1437
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Login problem" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1469
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Song not playing" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1499
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Playlist problem" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1532
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Account question" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1565
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Other" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 285,
                    columnNumber: 1598
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 285,
                  columnNumber: 1354
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1337
              }, this),
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Your message",
                /* @__PURE__ */ jsxDEV("textarea", { value: supportMessage, onChange: (e) => setSupportMessage(e.target.value), rows: 5, required: true, placeholder: "Describe the problem you are facing..." }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 285,
                  columnNumber: 1656
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1637
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "primary-btn", type: "submit", children: [
                "Submit support request ",
                /* @__PURE__ */ jsxDEV("span", { children: "→" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 285,
                  columnNumber: 1891
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 1822
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 1275
            }, this),
            supportNotice && /* @__PURE__ */ jsxDEV("p", { className: "support-notice", children: supportNotice }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 1939
            }, this),
            !user && /* @__PURE__ */ jsxDEV("p", { className: "support-hint", children: "Please log in to submit a support request." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 1999
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 1099
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 285,
          columnNumber: 185
        }, this),
        user && /* @__PURE__ */ jsxDEV("section", { className: "support-panel my-tickets", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "YOUR REQUESTS" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 2183
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { children: "My support requests" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 2229
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 2178
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 2145
          }, this),
          supportTickets.filter((t) => t.username === user).length ? supportTickets.filter((t) => t.username === user).map((t) => /* @__PURE__ */ jsxDEV("div", { className: "ticket-row", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("b", { children: t.subject }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 2434
              }, this),
              /* @__PURE__ */ jsxDEV("p", { children: t.message }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 2452
              }, this),
              /* @__PURE__ */ jsxDEV("small", { children: new Date(t.createdAt).toLocaleString() }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 285,
                columnNumber: 2470
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 2429
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: `ticket-status ${t.status.toLowerCase()}`, children: t.status }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 285,
              columnNumber: 2531
            }, this)
          ] }, t.id, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 2390
          }, this)) : /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "You have not submitted any support requests yet." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 285,
            columnNumber: 2618
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 285,
          columnNumber: 2099
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 285,
        columnNumber: 37
      }, this),
      page === "Sleep Timer" && /* @__PURE__ */ jsxDEV("div", { className: "content sleep-timer-page", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "WIND DOWN WITH MUSICWAVE", title: "Sleep Timer", subtitle: "Choose when your music should stop. Your timer keeps running while you browse MusicWave." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 288,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "sleep-timer-card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "sleep-timer-icon", children: /* @__PURE__ */ jsxDEV(Timer, { size: 30 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 290,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 290,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: sleepTimerActive ? "TIMER IS RUNNING" : "SET YOUR LISTENING TIME" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 291,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "sleep-countdown", children: sleepTimerActive ? sleepTimeLabel : `${String(sleepMinutes).padStart(2, "0")}:00` }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 292,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: sleepTimerActive ? "Music will pause automatically when the countdown reaches zero." : "MusicWave will pause the current song when your selected time is up." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 293,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "sleep-presets", children: [15, 30, 45, 60].map((minutes) => /* @__PURE__ */ jsxDEV("button", { className: `filter-chip ${sleepMinutes === minutes ? "selected" : ""}`, disabled: sleepTimerActive, onClick: () => setSleepMinutes(minutes), children: [
            minutes,
            " min"
          ] }, minutes, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 294,
            columnNumber: 77
          }, this)) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 294,
            columnNumber: 11
          }, this),
          sleepTimerActive ? /* @__PURE__ */ jsxDEV("button", { className: "outline-btn sleep-action", onClick: cancelSleepTimer, children: [
            /* @__PURE__ */ jsxDEV(X, { size: 16 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 295,
              columnNumber: 103
            }, this),
            " Cancel timer"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 295,
            columnNumber: 31
          }, this) : /* @__PURE__ */ jsxDEV("button", { className: "primary-btn sleep-action", onClick: startSleepTimer, children: [
            /* @__PURE__ */ jsxDEV(Timer, { size: 16 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 295,
              columnNumber: 214
            }, this),
            " Start sleep timer"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 295,
            columnNumber: 143
          }, this),
          !current && /* @__PURE__ */ jsxDEV("small", { className: "storage-note", children: "Choose and start a song first. The timer will pause that song when it ends." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 296,
            columnNumber: 24
          }, this),
          current && /* @__PURE__ */ jsxDEV("div", { className: "sleep-current", children: [
            /* @__PURE__ */ jsxDEV("img", { src: current.cover, alt: "" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 297,
              columnNumber: 54
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: [
              /* @__PURE__ */ jsxDEV("b", { children: "Currently playing" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 297,
                columnNumber: 94
              }, this),
              /* @__PURE__ */ jsxDEV("small", { children: [
                current.title,
                " · ",
                current.artist
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 297,
                columnNumber: 118
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 297,
              columnNumber: 88
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 297,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 289,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 287,
        columnNumber: 34
      }, this),
      page === "Shared playlist" && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "SHARED WITH YOU", title: sharedPlaylist?.name || "Playlist unavailable", subtitle: sharedPlaylist ? `Shared by ${sharedPlaylist.owner || "a MusicWave listener"} · Free to view, no premium required.` : "This playlist link is invalid or incomplete." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 301,
          columnNumber: 63
        }, this),
        sharedPlaylist && /* @__PURE__ */ jsxDEV(Fragment, { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "shared-banner", children: [
            /* @__PURE__ */ jsxDEV(Share2, { size: 19 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 301,
              columnNumber: 385
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Someone shared this playlist with you. Sign in is not required to view it." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 301,
              columnNumber: 405
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 301,
            columnNumber: 354
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "track-list", children: [
            (sharedPlaylist.songs || []).map((song, i) => /* @__PURE__ */ jsxDEV("div", { className: "track-row", children: [
              /* @__PURE__ */ jsxDEV("img", { src: song.cover, alt: "" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 301,
                columnNumber: 624
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("b", { children: song.title }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 301,
                  columnNumber: 661
                }, this),
                /* @__PURE__ */ jsxDEV("small", { children: [
                  song.artist,
                  " · ",
                  song.album || song.genre || "MusicWave"
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 301,
                  columnNumber: 680
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 301,
                columnNumber: 655
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "icon-btn", onClick: () => playSong(song), title: "Play song", children: /* @__PURE__ */ jsxDEV(Play, { size: 16 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 301,
                columnNumber: 837
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 301,
                columnNumber: 759
              }, this)
            ] }, `${song.id}-${i}`, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 301,
              columnNumber: 573
            }, this)),
            !sharedPlaylist.songs?.length && /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "This playlist has no tracks yet." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 301,
              columnNumber: 906
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 301,
            columnNumber: 498
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "outline-btn", onClick: () => {
            window.history.replaceState({}, "", window.location.pathname);
            setSharedPlaylist(null);
            go("Home");
          }, children: "Explore MusicWave" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 301,
            columnNumber: 977
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 301,
          columnNumber: 352
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 301,
        columnNumber: 38
      }, this),
      page === "Login" || page === "Signup" ? /* @__PURE__ */ jsxDEV("div", { className: "auth-wrap", children: /* @__PURE__ */ jsxDEV("div", { className: "auth-panel", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "auth-mark", children: /* @__PURE__ */ jsxDEV(AudioLines, { size: 25 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 130
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 103
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: authMode === "login" ? "WELCOME BACK" : "START YOUR COLLECTION" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 160
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { children: authMode === "login" ? "Good to see you." : "Join the rhythm." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 258
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: authMode === "login" ? "Log in to pick up right where you left off." : "Create an account and make MusicWave yours." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 331
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: authMode === "login" ? login : signup, children: [
          /* @__PURE__ */ jsxDEV("label", { children: [
            "Username",
            /* @__PURE__ */ jsxDEV("input", { value: authName, onChange: (e) => setAuthName(e.target.value), autoComplete: "username", required: true, placeholder: "Your username" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 303,
              columnNumber: 526
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 303,
            columnNumber: 511
          }, this),
          /* @__PURE__ */ jsxDEV("label", { children: [
            "Password",
            /* @__PURE__ */ jsxDEV("input", { type: "password", value: authPass, onChange: (e) => setAuthPass(e.target.value), autoComplete: authMode === "login" ? "current-password" : "new-password", required: true, placeholder: "At least 4 characters" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 303,
              columnNumber: 682
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 303,
            columnNumber: 667
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "primary-btn auth-submit", children: [
            authMode === "login" ? "Log in" : "Create account",
            " ",
            /* @__PURE__ */ jsxDEV("span", { children: "→" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 303,
              columnNumber: 994
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 303,
            columnNumber: 897
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 456
        }, this),
        authMessage && /* @__PURE__ */ jsxDEV("p", { className: "form-message", children: authMessage }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 1040
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "auth-switch", children: [
          authMode === "login" ? "New to MusicWave?" : "Already have an account?",
          " ",
          /* @__PURE__ */ jsxDEV("button", { onClick: () => {
            setAuthMode(authMode === "login" ? "signup" : "login");
            setAuthMessage("");
          }, children: authMode === "login" ? "Sign up" : "Log in" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 303,
            columnNumber: 1187
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 1086
        }, this),
        /* @__PURE__ */ jsxDEV("small", { className: "storage-note", children: "Demo authentication · stored in this browser only" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 303,
          columnNumber: 1346
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 303,
        columnNumber: 75
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 303,
        columnNumber: 48
      }, this) : null,
      page === "Profile" && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "YOUR ACCOUNT", title: "Your space.", subtitle: "Your MusicWave account details." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 305,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "profile-card", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "profile-avatar", children: user.slice(0, 1).toUpperCase() }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 184
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h2", { children: user || "Guest" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 259
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "MusicWave listener" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 285
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 254
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "outline-btn", onClick: logout, children: [
            /* @__PURE__ */ jsxDEV(LogOut, { size: 16 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 365
            }, this),
            " Log out"
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 316
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 305,
          columnNumber: 154
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "stats-row", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("b", { children: favorites.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 440
            }, this),
            /* @__PURE__ */ jsxDEV("small", { children: "Favorites" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 465
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 435
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("b", { children: playlists.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 500
            }, this),
            /* @__PURE__ */ jsxDEV("small", { children: "Playlists" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 525
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 495
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("b", { children: recent.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 560
            }, this),
            /* @__PURE__ */ jsxDEV("small", { children: "Recent tracks" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 305,
              columnNumber: 582
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 305,
            columnNumber: 555
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 305,
          columnNumber: 408
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 305,
        columnNumber: 30
      }, this),
      page === "Admin login" && /* @__PURE__ */ jsxDEV("div", { className: "auth-wrap", children: /* @__PURE__ */ jsxDEV("div", { className: "auth-panel", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "auth-mark", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 25 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 116
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 89
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "RESTRICTED AREA" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 147
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { children: "Admin access." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 195
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Sign in to manage the MusicWave catalog and users." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 217
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: adminLogin, children: [
          /* @__PURE__ */ jsxDEV("label", { children: [
            "Admin username",
            /* @__PURE__ */ jsxDEV("input", { value: adminName, onChange: (e) => setAdminName(e.target.value), required: true, placeholder: "Admin username" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 307,
              columnNumber: 323
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 307,
            columnNumber: 302
          }, this),
          /* @__PURE__ */ jsxDEV("label", { children: [
            "Password",
            /* @__PURE__ */ jsxDEV("input", { type: "password", value: adminPass, onChange: (e) => setAdminPass(e.target.value), required: true, placeholder: "Admin password" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 307,
              columnNumber: 458
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 307,
            columnNumber: 443
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "primary-btn auth-submit", children: "Enter dashboard →" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 307,
            columnNumber: 594
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 274
        }, this),
        adminMessage && /* @__PURE__ */ jsxDEV("p", { className: "form-message", children: adminMessage }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 688
        }, this),
        /* @__PURE__ */ jsxDEV("small", { className: "storage-note", children: "Demo credentials: admin / admin123" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 307,
          columnNumber: 735
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 307,
        columnNumber: 61
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 307,
        columnNumber: 34
      }, this),
      page === "Admin" && admin && /* @__PURE__ */ jsxDEV("div", { className: "content", children: [
        /* @__PURE__ */ jsxDEV(PageIntro, { eyebrow: "CONTROL CENTER", title: "The back office.", subtitle: "Manage your catalog and keep an eye on your community." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 309,
          columnNumber: 62
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "admin-stats", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { children: "CATALOG TRACKS" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 225
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: songs.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 252
            }, this),
            /* @__PURE__ */ jsxDEV(Music2, {}, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 273
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 220
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { children: "REGISTERED USERS" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 294
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: users.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 323
            }, this),
            /* @__PURE__ */ jsxDEV(Users, {}, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 344
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 289
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { children: "PLAYLISTS CREATED" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 364
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: playlists.length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 394
            }, this),
            /* @__PURE__ */ jsxDEV(ListMusic, {}, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 419
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 359
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { children: "OPEN SUPPORT TICKETS" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 443
            }, this),
            /* @__PURE__ */ jsxDEV("b", { children: supportTickets.filter((t) => t.status === "Open").length }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 476
            }, this),
            /* @__PURE__ */ jsxDEV(LifeBuoy, {}, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 541
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 438
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 309,
          columnNumber: 191
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "admin-grid", children: [
          /* @__PURE__ */ jsxDEV("section", { className: "admin-panel", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "CATALOG MANAGEMENT" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 664
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: "Add a track" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 715
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 659
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 626
            }, this),
            /* @__PURE__ */ jsxDEV("form", { className: "admin-form", onSubmit: addSong, children: [
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Track title",
                /* @__PURE__ */ jsxDEV("input", { name: "title", required: true, placeholder: "Song title" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 813
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 795
              }, this),
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Artist",
                /* @__PURE__ */ jsxDEV("input", { name: "artist", required: true, placeholder: "Artist name" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 890
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 877
              }, this),
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Genre",
                /* @__PURE__ */ jsxDEV("select", { name: "genre", children: [
                  /* @__PURE__ */ jsxDEV("option", { children: "Pop" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 989
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Rock" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1009
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Electronic" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1030
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Jazz" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1057
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Indie" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1078
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "Ambient" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1100
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { children: "House" }, void 0, false, {
                    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                    lineNumber: 309,
                    columnNumber: 1124
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 968
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 956
              }, this),
              /* @__PURE__ */ jsxDEV("label", { children: [
                "Audio URL",
                /* @__PURE__ */ jsxDEV("input", { name: "audio", type: "url", placeholder: "https://... (optional)" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 1179
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1163
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "primary-btn", children: [
                /* @__PURE__ */ jsxDEV(Plus, { size: 16 }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 1289
                }, this),
                " Add to catalog"
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1257
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 747
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 593
          }, this),
          /* @__PURE__ */ jsxDEV("section", { className: "admin-panel", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "COMMUNITY" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1419
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: "Registered users" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1461
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 1414
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 1381
            }, this),
            users.length ? users.map((u) => /* @__PURE__ */ jsxDEV("div", { className: "admin-user", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "avatar", children: u.username.slice(0, 1).toUpperCase() }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1576
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("b", { children: u.username }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 1652
                }, this),
                /* @__PURE__ */ jsxDEV("small", { children: "Listener account" }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 1671
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1646
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "icon-btn danger", onClick: () => deleteUser(u.username), title: "Remove user", children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1804
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 1709
              }, this)
            ] }, u.username, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 1531
            }, this)) : /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "No registered users yet." }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 1843
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 1348
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 309,
          columnNumber: 565
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "admin-panel support-admin-panel", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "CUSTOMER CARE" }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2007
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { children: [
              "Help & Support tickets (",
              supportTickets.length,
              ")"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2053
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 2002
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 1969
          }, this),
          supportTickets.length ? supportTickets.map((t) => /* @__PURE__ */ jsxDEV("div", { className: "admin-ticket", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "admin-ticket-main", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("b", { children: t.subject }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 2254
                }, this),
                /* @__PURE__ */ jsxDEV("small", { children: [
                  t.username,
                  " · ",
                  new Date(t.createdAt).toLocaleString()
                ] }, void 0, true, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 2272
                }, this)
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2249
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: `ticket-status ${t.status.toLowerCase()}`, children: t.status }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2348
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2214
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: t.message }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2431
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "ticket-actions", children: [
              /* @__PURE__ */ jsxDEV("button", { className: "outline-btn", onClick: () => updateTicketStatus(t.id, t.status === "Open" ? "Resolved" : "Open"), children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 14 }, void 0, false, {
                  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                  lineNumber: 309,
                  columnNumber: 2597
                }, this),
                t.status === "Open" ? "Mark resolved" : "Reopen ticket"
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2481
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "icon-btn danger", onClick: () => deleteTicket(t.id), title: "Delete ticket", children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2782
              }, this) }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2689
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2449
            }, this)
          ] }, t.id, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 2173
          }, this)) : /* @__PURE__ */ jsxDEV("p", { className: "empty-inline", children: "No support requests have been submitted yet." }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 2827
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 309,
          columnNumber: 1916
        }, this),
        /* @__PURE__ */ jsxDEV("section", { className: "admin-panel catalog-panel", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "section-heading", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "ALL TRACKS" }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 2999
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { children: [
                "Catalog (",
                songs.length,
                ")"
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 3042
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 2994
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "outline-btn", onClick: adminLogout, children: [
              /* @__PURE__ */ jsxDEV(LogOut, { size: 15 }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 3135
              }, this),
              " Admin logout"
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 3081
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 2961
          }, this),
          songs.map((s) => /* @__PURE__ */ jsxDEV("div", { className: "track-row", children: [
            /* @__PURE__ */ jsxDEV("img", { src: s.cover }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 3239
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: [
              /* @__PURE__ */ jsxDEV("b", { children: s.title }, void 0, false, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 3266
              }, this),
              /* @__PURE__ */ jsxDEV("small", { children: [
                s.artist,
                " · ",
                s.genre
              ] }, void 0, true, {
                fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
                lineNumber: 309,
                columnNumber: 3282
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 3260
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "icon-btn danger", onClick: () => deleteSong(s.id), children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 3395
            }, this) }, void 0, false, {
              fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
              lineNumber: 309,
              columnNumber: 3326
            }, this)
          ] }, s.id, true, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 309,
            columnNumber: 3201
          }, this))
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 309,
          columnNumber: 2914
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 309,
        columnNumber: 37
      }, this),
      page === "Admin" && !admin && /* @__PURE__ */ jsxDEV("div", { className: "content", children: /* @__PURE__ */ jsxDEV("div", { className: "empty-state", children: [
        /* @__PURE__ */ jsxDEV(ShieldCheck, {}, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 310,
          columnNumber: 92
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { children: "Admin session required" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 310,
          columnNumber: 107
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "Sign in to access the control center." }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 310,
          columnNumber: 138
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "primary-btn", onClick: () => go("Admin login"), children: "Admin login" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 310,
          columnNumber: 182
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 310,
        columnNumber: 63
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 310,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ jsxDEV("footer", { className: "footer", children: [
        /* @__PURE__ */ jsxDEV("span", { children: "© 2026 MUSICWAVE" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 311,
          columnNumber: 34
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          "MADE FOR THE LOVE OF SOUND ",
          /* @__PURE__ */ jsxDEV(AudioLines, { size: 14 }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 311,
            columnNumber: 96
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 311,
          columnNumber: 63
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 311,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 252,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "player", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "player-track", children: current ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("img", { src: current.cover }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 50
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          /* @__PURE__ */ jsxDEV("b", { children: current.title }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 315,
            columnNumber: 83
          }, this),
          /* @__PURE__ */ jsxDEV("small", { children: current.artist }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 315,
            columnNumber: 105
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 77
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: `icon-btn ${favorites.includes(current.id) ? "liked" : ""}`, onClick: () => toggleFavorite(current.id), children: /* @__PURE__ */ jsxDEV(Heart, { size: 17, fill: favorites.includes(current.id) ? "currentColor" : "none" }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 266
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 143
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 315,
        columnNumber: 48
      }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "player-placeholder", children: /* @__PURE__ */ jsxDEV(Music2, {}, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 402
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 366
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          /* @__PURE__ */ jsxDEV("b", { children: "Choose a track" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 315,
            columnNumber: 424
          }, this),
          /* @__PURE__ */ jsxDEV("small", { children: "Your soundtrack starts here" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 315,
            columnNumber: 445
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 315,
          columnNumber: 418
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 315,
        columnNumber: 364
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 315,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "player-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "player-buttons", children: [
          /* @__PURE__ */ jsxDEV("button", { className: "icon-btn", onClick: () => stepSong(-1), children: /* @__PURE__ */ jsxDEV(SkipBack, { size: 18, fill: "currentColor" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 128
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 70
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "play-button", onClick: togglePlay, children: playing ? /* @__PURE__ */ jsxDEV(Pause, { size: 19, fill: "currentColor" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 243
          }, this) : /* @__PURE__ */ jsxDEV(Play, { size: 19, fill: "currentColor" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 285
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 179
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "icon-btn", onClick: () => stepSong(1), children: /* @__PURE__ */ jsxDEV(SkipForward, { size: 18, fill: "currentColor" }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 390
          }, this) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 333
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 316,
          columnNumber: 38
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "progress-line", children: [
          /* @__PURE__ */ jsxDEV("span", { children: fmt(currentTime) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 481
          }, this),
          /* @__PURE__ */ jsxDEV("input", { type: "range", min: "0", max: duration || 100, value: Math.min(currentTime, duration || 100), onChange: (e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
              setCurrentTime(Number(e.target.value));
            }
          } }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 512
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: fmt(duration) }, void 0, false, {
            fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
            lineNumber: 316,
            columnNumber: 749
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 316,
          columnNumber: 450
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 316,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "player-extra", children: [
        /* @__PURE__ */ jsxDEV(VolumeIcon, {}, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV("input", { "aria-label": "Volume", type: "range", min: "0", max: "1", step: ".01", value: volume, onChange: (e) => setVolume(Number(e.target.value)) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 51
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: `icon-btn ${sleepTimerActive ? "timer-active" : ""}`, onClick: () => go("Sleep Timer"), title: sleepTimerActive ? `Sleep timer: ${sleepTimeLabel}` : "Sleep timer", children: /* @__PURE__ */ jsxDEV(Timer, { size: 18 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 370
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 187
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "icon-btn", onClick: () => go("Playlists"), children: /* @__PURE__ */ jsxDEV(ListMusic, { size: 18 }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 459
        }, this) }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 317,
          columnNumber: 398
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 317,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 314,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV("audio", { ref: audioRef, volume, onTimeUpdate: (e) => setCurrentTime(e.currentTarget.currentTime), onLoadedMetadata: (e) => setDuration(e.currentTarget.duration || 0), onEnded: () => stepSong(1), onPlay: () => setPlaying(true), onPause: () => setPlaying(false) }, void 0, false, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 319,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
    lineNumber: 240,
    columnNumber: 10
  }, this);
}
_s(App, "SOJH3o/jwCtLro6rh4B+IbLTWJo=");
_c = App;
function VolumeIcon() {
  return /* @__PURE__ */ jsxDEV("span", { className: "volume-glyph", children: "◖))" }, void 0, false, {
    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
    lineNumber: 323,
    columnNumber: 31
  }, this);
}
_c2 = VolumeIcon;
function PageIntro({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "page-intro", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: eyebrow }, void 0, false, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 324,
      columnNumber: 86
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { children: title }, void 0, false, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 324,
      columnNumber: 128
    }, this),
    /* @__PURE__ */ jsxDEV("p", { children: subtitle }, void 0, false, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 324,
      columnNumber: 144
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
    lineNumber: 324,
    columnNumber: 58
  }, this);
}
_c3 = PageIntro;
function SongCard({ song, index, playing, favorite, rating, onPlay, onFavorite, onRate, onAdd }) {
  return /* @__PURE__ */ jsxDEV("article", { className: "song-card", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "cover-wrap", children: [
      /* @__PURE__ */ jsxDEV("img", { src: song.cover, alt: `${song.album} cover` }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 69
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "cover-play", onClick: () => onPlay(song), children: playing ? /* @__PURE__ */ jsxDEV(Pause, { size: 20, fill: "currentColor" }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 192
      }, this) : /* @__PURE__ */ jsxDEV(Play, { size: 20, fill: "currentColor" }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 234
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 121
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "track-number", children: String(index + 1).padStart(2, "0") }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 282
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 326,
      columnNumber: 41
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "song-meta", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { children: song.title }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 326,
          columnNumber: 394
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: song.artist }, void 0, false, {
          fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
          lineNumber: 326,
          columnNumber: 415
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 389
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: `heart-btn ${favorite ? "liked" : ""}`, onClick: () => onFavorite(song.id), "aria-label": "Toggle favorite", children: /* @__PURE__ */ jsxDEV(Heart, { size: 18, fill: favorite ? "currentColor" : "none" }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 565
      }, this) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 441
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 326,
      columnNumber: 362
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "song-card-bottom", children: [
      /* @__PURE__ */ jsxDEV("span", { children: song.genre }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 675
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "rating", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxDEV("button", { "aria-label": `Rate ${n} stars`, onClick: () => onRate(song.id, n), className: n <= rating ? "rated" : "", children: /* @__PURE__ */ jsxDEV(Star, { size: 12, fill: n <= rating ? "currentColor" : "none" }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 873
      }, this) }, n, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 752
      }, this)) }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 700
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 326,
      columnNumber: 641
    }, this),
    /* @__PURE__ */ jsxDEV("button", { className: "add-track", onClick: () => onAdd(song.id), children: [
      /* @__PURE__ */ jsxDEV(Plus, { size: 13 }, void 0, false, {
        fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
        lineNumber: 326,
        columnNumber: 1020
      }, this),
      " Add to playlist"
    ] }, void 0, true, {
      fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
      lineNumber: 326,
      columnNumber: 959
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
_c4 = SongCard;
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
  lineNumber: 329,
  columnNumber: 70
}, this) }, void 0, false, {
  fileName: "C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx",
  lineNumber: 329,
  columnNumber: 52
}, this));
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "VolumeIcon");
$RefreshReg$(_c3, "PageIntro");
$RefreshReg$(_c4, "SongCard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP/Documents/Downloads/musicwave-sleep-timer/mw_sleep/src/main.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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VSxVQUFVLFdBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEVBQUVnSCxJQUFJLENBQUFoRyxNQUFHLHVCQUFDLFlBQWUsY0FBWSxRQUFRQSxDQUFDLFVBQVUsU0FBUyxNQUFJK00sT0FBT3hHLEtBQUsxSCxJQUFHbUIsQ0FBQyxHQUFHLFdBQVdBLEtBQUc0TSxTQUFPLFVBQVEsSUFBSSxpQ0FBQyxRQUFLLE1BQU0sSUFBSSxNQUFNNU0sS0FBRzRNLFNBQU8saUJBQWUsVUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFzRCxLQUF6SjVNLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF3SyxDQUFTLEtBQTdOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK047QUFBQSxTQUExUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdTO0FBQUEsSUFBTSx1QkFBQyxZQUFPLFdBQVUsYUFBWSxTQUFTLE1BQUlnTixNQUFNekcsS0FBSzFILEVBQUUsR0FBRztBQUFBLDZCQUFDLFFBQUssTUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZTtBQUFBLE1BQUU7QUFBQSxTQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRGO0FBQUEsT0FBbCtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMitCO0FBQ3AvQjtBQUFDb08sTUFGUVA7QUFJVDdQLFdBQVdxUSxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUFPLHVCQUFDLE1BQU0sWUFBTixFQUFpQixpQ0FBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCLENBQW1CO0FBQUMsSUFBQUMsSUFBQWhCLEtBQUFJLEtBQUFRO0FBQUEsYUFBQUksSUFBQTtBQUFBLGFBQUFoQixLQUFBO0FBQUEsYUFBQUksS0FBQTtBQUFBLGFBQUFRLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIZWFkcGhvbmVzIiwiU2VhcmNoIiwiUGxheSIsIlBhdXNlIiwiU2tpcEJhY2siLCJTa2lwRm9yd2FyZCIsIkhlYXJ0IiwiTGlzdE11c2ljIiwiVXNlclJvdW5kIiwiU2hpZWxkQ2hlY2siLCJMb2dPdXQiLCJNdXNpYzIiLCJEaXNjMyIsIk1pYzIiLCJDbG9jazMiLCJTdGFyIiwiUGx1cyIsIlRyYXNoMiIsIkRvd25sb2FkIiwiWCIsIk1lbnUiLCJIb21lIiwiTGlicmFyeSIsIlVzZXJzIiwiQXVkaW9MaW5lcyIsIlNoYXJlMiIsIlRpbWVyIiwiTGlmZUJ1b3kiLCJDaGVja0NpcmNsZTIiLCJNZXNzYWdlQ2lyY2xlIiwic2VlZFNvbmdzIiwiaWQiLCJ0aXRsZSIsImFydGlzdCIsImdlbnJlIiwiYWxidW0iLCJjb3ZlciIsImF1ZGlvIiwicmVhZCIsImtleSIsImZhbGxiYWNrIiwidmFsdWUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid3JpdGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZm10IiwibiIsIk1hdGgiLCJmbG9vciIsIlN0cmluZyIsInBhZFN0YXJ0IiwiQXBwIiwiX3MiLCJzb25ncyIsInNldFNvbmdzIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXIiLCJzZXRVc2VyIiwiYWRtaW4iLCJzZXRBZG1pbiIsInNoYXJlZFBsYXlsaXN0Iiwic2V0U2hhcmVkUGxheWxpc3QiLCJyYXciLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsInNoYXJlTWVzc2FnZSIsInNldFNoYXJlTWVzc2FnZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGFzIiwiYXV0aE1vZGUiLCJzZXRBdXRoTW9kZSIsImF1dGhOYW1lIiwic2V0QXV0aE5hbWUiLCJhdXRoUGFzcyIsInNldEF1dGhQYXNzIiwiYXV0aE1lc3NhZ2UiLCJzZXRBdXRoTWVzc2FnZSIsImFkbWluTmFtZSIsInNldEFkbWluTmFtZSIsImFkbWluUGFzcyIsInNldEFkbWluUGFzcyIsImFkbWluTWVzc2FnZSIsInNldEFkbWluTWVzc2FnZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJzZXRHZW5yZSIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsInJhdGluZ3MiLCJzZXRSYXRpbmdzIiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwicmVjZW50Iiwic2V0UmVjZW50Iiwic3VwcG9ydFRpY2tldHMiLCJzZXRTdXBwb3J0VGlja2V0cyIsInN1cHBvcnRTdWJqZWN0Iiwic2V0U3VwcG9ydFN1YmplY3QiLCJzdXBwb3J0TWVzc2FnZSIsInNldFN1cHBvcnRNZXNzYWdlIiwic3VwcG9ydE5vdGljZSIsInNldFN1cHBvcnROb3RpY2UiLCJwbGF5bGlzdE5hbWUiLCJzZXRQbGF5bGlzdE5hbWUiLCJhY3RpdmVQbGF5bGlzdCIsInNldEFjdGl2ZVBsYXlsaXN0IiwiY3VycmVudElkIiwic2V0Q3VycmVudElkIiwicGxheWluZyIsInNldFBsYXlpbmciLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInZvbHVtZSIsInNldFZvbHVtZSIsInNsZWVwTWludXRlcyIsInNldFNsZWVwTWludXRlcyIsInNsZWVwUmVtYWluaW5nIiwic2V0U2xlZXBSZW1haW5pbmciLCJzbGVlcFRpbWVyQWN0aXZlIiwic2V0U2xlZXBUaW1lckFjdGl2ZSIsIm1vYmlsZU5hdiIsInNldE1vYmlsZU5hdiIsImF1ZGlvUmVmIiwiZmlsZVJlZiIsInVuZGVmaW5lZCIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsInByZXZpb3VzIiwiY3VycmVudCIsInBhdXNlIiwiY2xlYXJJbnRlcnZhbCIsImZpbmQiLCJzIiwiZ2VucmVzIiwiU2V0IiwibWFwIiwiZmlsdGVyIiwiQm9vbGVhbiIsInZpc2libGVTb25ncyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwbGF5U29uZyIsInNvbmciLCJwcmV2Iiwic2xpY2UiLCJzcmMiLCJsb2FkIiwicGxheSIsInRvZ2dsZVBsYXkiLCJwYXVzZWQiLCJzdGVwU29uZyIsImRpcmVjdGlvbiIsImxlbmd0aCIsImluZGV4IiwibWF4IiwiZmluZEluZGV4IiwibmV4dCIsInRvZ2dsZUZhdm9yaXRlIiwieCIsInNpZ251cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ0cmltIiwic29tZSIsInUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiam9pbmVkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibG9naW4iLCJmb3VuZCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJhZG1pbkxvZ2luIiwiYWRtaW5Mb2dvdXQiLCJjcmVhdGVQbGF5bGlzdCIsIml0ZW0iLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiYWRkVG9QbGF5bGlzdCIsInRhcmdldCIsInAiLCJzaGFyZVBsYXlsaXN0IiwicGxheWxpc3QiLCJ0cmFja3MiLCJwYXlsb2FkIiwib3duZXIiLCJ1cmwiLCJvcmlnaW4iLCJwYXRobmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5hdmlnYXRvciIsInNoYXJlIiwidGV4dCIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImVycm9yIiwidXBkYXRlUmF0aW5nIiwic3VibWl0U3VwcG9ydFRpY2tldCIsInRpY2tldCIsInN1YmplY3QiLCJtZXNzYWdlIiwic3RhdHVzIiwiY3JlYXRlZEF0IiwidXBkYXRlVGlja2V0U3RhdHVzIiwiZGVsZXRlVGlja2V0IiwiYWRkU29uZyIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJyZXNldCIsImRlbGV0ZVNvbmciLCJkZWxldGVVc2VyIiwiZ28iLCJzdGFydFNsZWVwVGltZXIiLCJjYW5jZWxTbGVlcFRpbWVyIiwic2xlZXBUaW1lTGFiZWwiLCJuYXZJdGVtcyIsImxhYmVsIiwiSWNvbiIsInYiLCJ0b1VwcGVyQ2FzZSIsImkiLCJnIiwicSIsImEiLCJ0IiwidG9Mb2NhbGVTdHJpbmciLCJtaW51dGVzIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIm1pbiIsIk51bWJlciIsIlZvbHVtZUljb24iLCJfYzIiLCJQYWdlSW50cm8iLCJleWVicm93Iiwic3VidGl0bGUiLCJfYzMiLCJTb25nQ2FyZCIsImZhdm9yaXRlIiwicmF0aW5nIiwib25QbGF5Iiwib25GYXZvcml0ZSIsIm9uUmF0ZSIsIm9uQWRkIiwiX2M0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHtcbiAgSGVhZHBob25lcywgU2VhcmNoLCBQbGF5LCBQYXVzZSwgU2tpcEJhY2ssIFNraXBGb3J3YXJkLCBIZWFydCwgTGlzdE11c2ljLFxuICBVc2VyUm91bmQsIFNoaWVsZENoZWNrLCBMb2dPdXQsIE11c2ljMiwgRGlzYzMsIE1pYzIsIENsb2NrMywgU3RhcixcbiAgUGx1cywgVHJhc2gyLCBEb3dubG9hZCwgWCwgTWVudSwgSG9tZSwgTGlicmFyeSwgVXNlcnMsIEF1ZGlvTGluZXMsIFNoYXJlMiwgVGltZXIsIExpZmVCdW95LCBDaGVja0NpcmNsZTIsIE1lc3NhZ2VDaXJjbGVcbn0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmNvbnN0IHNlZWRTb25ncyA9IFtcbiAgeyBpZDogJ3MxJywgdGl0bGU6ICdNaWRuaWdodCBDaXR5JywgYXJ0aXN0OiAnTTgzJywgZ2VucmU6ICdFbGVjdHJvbmljJywgYWxidW06ICdIdXJyeSBVcCwgV2XigJlyZSBEcmVhbWluZycsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTk2MDg0ODc5NTMtZTk5OWM4NmU3NDU1P3c9NzAwJnE9ODUnLCBhdWRpbzogJ2h0dHBzOi8vd3d3LnNvdW5kaGVsaXguY29tL2V4YW1wbGVzL21wMy9Tb3VuZEhlbGl4LVNvbmctMS5tcDMnIH0sXG4gIHsgaWQ6ICdzMicsIHRpdGxlOiAnR29sZGVuIEhvdXInLCBhcnRpc3Q6ICdKVktFJywgZ2VucmU6ICdQb3AnLCBhbGJ1bTogJ0dvbGRlbiBIb3VyJywgY292ZXI6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MDI1MjY0OTM3OC05YzI5NzQwYzlmYTg/dz03MDAmcT04NScsIGF1ZGlvOiAnaHR0cHM6Ly93d3cuc291bmRoZWxpeC5jb20vZXhhbXBsZXMvbXAzL1NvdW5kSGVsaXgtU29uZy0yLm1wMycgfSxcbiAgeyBpZDogJ3MzJywgdGl0bGU6ICdPY2VhbiBEcml2ZScsIGFydGlzdDogJ0R1a2UgRHVtb250JywgZ2VucmU6ICdIb3VzZScsIGFsYnVtOiAnQmxhc8OpIEJveXMgQ2x1YicsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDA1MzA4NTU2OTctYjU4NmQ4OWJhM2VlP3c9NzAwJnE9ODUnLCBhdWRpbzogJ2h0dHBzOi8vd3d3LnNvdW5kaGVsaXguY29tL2V4YW1wbGVzL21wMy9Tb3VuZEhlbGl4LVNvbmctMy5tcDMnIH0sXG4gIHsgaWQ6ICdzNCcsIHRpdGxlOiAnV2VpZ2h0bGVzcycsIGFydGlzdDogJ01hcmNvbmkgVW5pb24nLCBnZW5yZTogJ0FtYmllbnQnLCBhbGJ1bTogJ1dlaWdodGxlc3MnLCBjb3ZlcjogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4ODM3Njk1MDA1LTIwODMwOTNlZTM1Yj93PTcwMCZxPTg1JywgYXVkaW86ICdodHRwczovL3d3dy5zb3VuZGhlbGl4LmNvbS9leGFtcGxlcy9tcDMvU291bmRIZWxpeC1Tb25nLTQubXAzJyB9LFxuICB7IGlkOiAnczUnLCB0aXRsZTogJ05pZ2h0IENoYW5nZXMnLCBhcnRpc3Q6ICdPbmUgRGlyZWN0aW9uJywgZ2VucmU6ICdQb3AnLCBhbGJ1bTogJ0ZPVVInLCBjb3ZlcjogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAwNTM0NjIzMjgzLTMxMmFhZGU0ODViNz93PTcwMCZxPTg1JywgYXVkaW86ICdodHRwczovL3d3dy5zb3VuZGhlbGl4LmNvbS9leGFtcGxlcy9tcDMvU291bmRIZWxpeC1Tb25nLTUubXAzJyB9LFxuICB7IGlkOiAnczYnLCB0aXRsZTogJ1N0YXJnYXppbmcnLCBhcnRpc3Q6ICdUaGUgTmVpZ2hib3VyaG9vZCcsIGdlbnJlOiAnQWx0ZXJuYXRpdmUnLCBhbGJ1bTogJ0kgTG92ZSBZb3UuJywgY292ZXI6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2MjMzMTk0MDAyNS00OTZkZmJmYzc1NjQ/dz03MDAmcT04NScsIGF1ZGlvOiAnaHR0cHM6Ly93d3cuc291bmRoZWxpeC5jb20vZXhhbXBsZXMvbXAzL1NvdW5kSGVsaXgtU29uZy02Lm1wMycgfSxcbiAgeyBpZDogJ3M3JywgdGl0bGU6ICdTdW5zZXQgTG92ZXInLCBhcnRpc3Q6ICdQZXRpdCBCaXNjdWl0JywgZ2VucmU6ICdFbGVjdHJvbmljJywgYWxidW06ICdQcmVzZW5jZScsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDE3ODU4ODgwNDEtYWYzZWYyODViNDcwP3c9NzAwJnE9ODUnLCBhdWRpbzogJ2h0dHBzOi8vd3d3LnNvdW5kaGVsaXguY29tL2V4YW1wbGVzL21wMy9Tb3VuZEhlbGl4LVNvbmctNy5tcDMnIH0sXG4gIHsgaWQ6ICdzOCcsIHRpdGxlOiAnQmxvb20nLCBhcnRpc3Q6ICdUaGUgUGFwZXIgS2l0ZXMnLCBnZW5yZTogJ0luZGllJywgYWxidW06ICdXb29kbGFuZCcsIGNvdmVyOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5NzQyMzE1MzEtYzYyMjdkYjc2YjZlP3c9NzAwJnE9ODUnLCBhdWRpbzogJ2h0dHBzOi8vd3d3LnNvdW5kaGVsaXguY29tL2V4YW1wbGVzL21wMy9Tb3VuZEhlbGl4LVNvbmctOC5tcDMnIH0sXG5dXG5jb25zdCByZWFkID0gKGtleSwgZmFsbGJhY2spID0+IHtcbiAgdHJ5IHsgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpOyByZXR1cm4gdmFsdWUgPz8gZmFsbGJhY2sgfSBjYXRjaCB7IHJldHVybiBmYWxsYmFjayB9XG59XG5jb25zdCB3cml0ZSA9IChrZXksIHZhbHVlKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbmNvbnN0IGZtdCA9IG4gPT4gYCR7TWF0aC5mbG9vcigobiB8fCAwKSAvIDYwKX06JHtTdHJpbmcoTWF0aC5mbG9vcigobiB8fCAwKSAlIDYwKSkucGFkU3RhcnQoMiwgJzAnKX1gXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3NvbmdzLCBzZXRTb25nc10gPSB1c2VTdGF0ZSgoKSA9PiByZWFkKCdtd19zb25ncycsIHNlZWRTb25ncykpXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoKCkgPT4gcmVhZCgnbXdfdXNlcnMnLCBbXSkpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtd19zZXNzaW9uJykgfHwgJycpXG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gdXNlU3RhdGUoKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ213X2FkbWluJykgPT09ICd0cnVlJylcbiAgY29uc3QgW3NoYXJlZFBsYXlsaXN0LCBzZXRTaGFyZWRQbGF5bGlzdF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgdHJ5IHsgY29uc3QgcmF3ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3NoYXJlZFBsYXlsaXN0Jyk7IHJldHVybiByYXcgPyBKU09OLnBhcnNlKHJhdykgOiBudWxsIH0gY2F0Y2ggeyByZXR1cm4gbnVsbCB9XG4gIH0pXG4gIGNvbnN0IFtzaGFyZU1lc3NhZ2UsIHNldFNoYXJlTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoKCkgPT4geyB0cnkgeyByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5oYXMoJ3NoYXJlZFBsYXlsaXN0JykgPyAnU2hhcmVkIHBsYXlsaXN0JyA6ICdIb21lJyB9IGNhdGNoIHsgcmV0dXJuICdIb21lJyB9IH0pXG4gIGNvbnN0IFthdXRoTW9kZSwgc2V0QXV0aE1vZGVdID0gdXNlU3RhdGUoJ2xvZ2luJylcbiAgY29uc3QgW2F1dGhOYW1lLCBzZXRBdXRoTmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2F1dGhQYXNzLCBzZXRBdXRoUGFzc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2F1dGhNZXNzYWdlLCBzZXRBdXRoTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2FkbWluTmFtZSwgc2V0QWRtaW5OYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYWRtaW5QYXNzLCBzZXRBZG1pblBhc3NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthZG1pbk1lc3NhZ2UsIHNldEFkbWluTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZSgnQWxsJylcbiAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKCgpID0+IHJlYWQoJ213X2Zhdm9yaXRlcycsIFtdKSlcbiAgY29uc3QgW3JhdGluZ3MsIHNldFJhdGluZ3NdID0gdXNlU3RhdGUoKCkgPT4gcmVhZCgnbXdfcmF0aW5ncycsIHt9KSlcbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IHVzZVN0YXRlKCgpID0+IHJlYWQoJ213X3BsYXlsaXN0cycsIFtdKSlcbiAgY29uc3QgW3JlY2VudCwgc2V0UmVjZW50XSA9IHVzZVN0YXRlKCgpID0+IHJlYWQoJ213X3JlY2VudCcsIFtdKSlcbiAgY29uc3QgW3N1cHBvcnRUaWNrZXRzLCBzZXRTdXBwb3J0VGlja2V0c10gPSB1c2VTdGF0ZSgoKSA9PiByZWFkKCdtd19zdXBwb3J0X3RpY2tldHMnLCBbXSkpXG4gIGNvbnN0IFtzdXBwb3J0U3ViamVjdCwgc2V0U3VwcG9ydFN1YmplY3RdID0gdXNlU3RhdGUoJ1RlY2huaWNhbCBpc3N1ZScpXG4gIGNvbnN0IFtzdXBwb3J0TWVzc2FnZSwgc2V0U3VwcG9ydE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdXBwb3J0Tm90aWNlLCBzZXRTdXBwb3J0Tm90aWNlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGxheWxpc3ROYW1lLCBzZXRQbGF5bGlzdE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthY3RpdmVQbGF5bGlzdCwgc2V0QWN0aXZlUGxheWxpc3RdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjdXJyZW50SWQsIHNldEN1cnJlbnRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoMC43NSlcbiAgY29uc3QgW3NsZWVwTWludXRlcywgc2V0U2xlZXBNaW51dGVzXSA9IHVzZVN0YXRlKDMwKVxuICBjb25zdCBbc2xlZXBSZW1haW5pbmcsIHNldFNsZWVwUmVtYWluaW5nXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtzbGVlcFRpbWVyQWN0aXZlLCBzZXRTbGVlcFRpbWVyQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbW9iaWxlTmF2LCBzZXRNb2JpbGVOYXZdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3NvbmdzJywgc29uZ3MpLCBbc29uZ3NdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3VzZXJzJywgdXNlcnMpLCBbdXNlcnNdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X2Zhdm9yaXRlcycsIGZhdm9yaXRlcyksIFtmYXZvcml0ZXNdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3JhdGluZ3MnLCByYXRpbmdzKSwgW3JhdGluZ3NdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3BsYXlsaXN0cycsIHBsYXlsaXN0cyksIFtwbGF5bGlzdHNdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3JlY2VudCcsIHJlY2VudCksIFtyZWNlbnRdKVxuICB1c2VFZmZlY3QoKCkgPT4gd3JpdGUoJ213X3N1cHBvcnRfdGlja2V0cycsIHN1cHBvcnRUaWNrZXRzKSwgW3N1cHBvcnRUaWNrZXRzXSlcblxuICAvLyBDb3VudCBkb3duIG9uY2UgcGVyIHNlY29uZDsgcGF1c2UgdGhlIGN1cnJlbnQgdHJhY2sgd2hlbiB0aGUgdGltZXIgZXhwaXJlcy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNsZWVwVGltZXJBY3RpdmUpIHJldHVybiB1bmRlZmluZWRcbiAgICBjb25zdCB0aW1lcklkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFNsZWVwUmVtYWluaW5nKHByZXZpb3VzID0+IHtcbiAgICAgICAgaWYgKHByZXZpb3VzIDw9IDEpIHtcbiAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5wYXVzZSgpXG4gICAgICAgICAgc2V0UGxheWluZyhmYWxzZSlcbiAgICAgICAgICBzZXRTbGVlcFRpbWVyQWN0aXZlKGZhbHNlKVxuICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzIC0gMVxuICAgICAgfSlcbiAgICB9LCAxMDAwKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcklkKVxuICB9LCBbc2xlZXBUaW1lckFjdGl2ZV0pXG5cbiAgY29uc3QgY3VycmVudCA9IHNvbmdzLmZpbmQocyA9PiBzLmlkID09PSBjdXJyZW50SWQpIHx8IHNoYXJlZFBsYXlsaXN0Py5zb25ncz8uZmluZChzID0+IHMuaWQgPT09IGN1cnJlbnRJZClcbiAgY29uc3QgZ2VucmVzID0gWydBbGwnLCAuLi5uZXcgU2V0KHNvbmdzLm1hcChzID0+IHMuZ2VucmUpLmZpbHRlcihCb29sZWFuKSldXG4gIGNvbnN0IHZpc2libGVTb25ncyA9IHVzZU1lbW8oKCkgPT4gc29uZ3MuZmlsdGVyKHMgPT5cbiAgICAoZ2VucmUgPT09ICdBbGwnIHx8IHMuZ2VucmUgPT09IGdlbnJlKSAmJlxuICAgIGAke3MudGl0bGV9ICR7cy5hcnRpc3R9ICR7cy5hbGJ1bX0gJHtzLmdlbnJlfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxuICApLCBbc29uZ3MsIGdlbnJlLCBxdWVyeV0pXG5cbiAgY29uc3QgcGxheVNvbmcgPSBhc3luYyBzb25nID0+IHtcbiAgICBjb25zdCBhdWRpbyA9IGF1ZGlvUmVmLmN1cnJlbnRcbiAgICBpZiAoIWF1ZGlvKSByZXR1cm5cbiAgICBpZiAoY3VycmVudElkICE9PSBzb25nLmlkKSB7XG4gICAgICBzZXRDdXJyZW50SWQoc29uZy5pZClcbiAgICAgIHNldEN1cnJlbnRUaW1lKDApXG4gICAgICBzZXRSZWNlbnQocHJldiA9PiBbc29uZy5pZCwgLi4ucHJldi5maWx0ZXIoaWQgPT4gaWQgIT09IHNvbmcuaWQpXS5zbGljZSgwLCA2KSlcbiAgICAgIGF1ZGlvLnNyYyA9IHNvbmcuYXVkaW9cbiAgICAgIGF1ZGlvLmxvYWQoKVxuICAgIH1cbiAgICB0cnkgeyBhd2FpdCBhdWRpby5wbGF5KCk7IHNldFBsYXlpbmcodHJ1ZSkgfSBjYXRjaCB7IHNldFBsYXlpbmcoZmFsc2UpIH1cbiAgfVxuICBjb25zdCB0b2dnbGVQbGF5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9SZWYuY3VycmVudFxuICAgIGlmICghYXVkaW8pIHJldHVyblxuICAgIGlmICghY3VycmVudCAmJiBzb25nc1swXSkgeyBhd2FpdCBwbGF5U29uZyhzb25nc1swXSk7IHJldHVybiB9XG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkgeyB0cnkgeyBhd2FpdCBhdWRpby5wbGF5KCk7IHNldFBsYXlpbmcodHJ1ZSkgfSBjYXRjaCB7IHNldFBsYXlpbmcoZmFsc2UpIH0gfVxuICAgIGVsc2UgeyBhdWRpby5wYXVzZSgpOyBzZXRQbGF5aW5nKGZhbHNlKSB9XG4gIH1cbiAgY29uc3Qgc3RlcFNvbmcgPSBkaXJlY3Rpb24gPT4ge1xuICAgIGlmICghc29uZ3MubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBpbmRleCA9IE1hdGgubWF4KDAsIHNvbmdzLmZpbmRJbmRleChzID0+IHMuaWQgPT09IGN1cnJlbnRJZCkpXG4gICAgY29uc3QgbmV4dCA9IChpbmRleCArIGRpcmVjdGlvbiArIHNvbmdzLmxlbmd0aCkgJSBzb25ncy5sZW5ndGhcbiAgICBwbGF5U29uZyhzb25nc1tuZXh0XSlcbiAgfVxuICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IGlkID0+IHtcbiAgICBpZiAoIXVzZXIpIHsgc2V0QXV0aE1vZGUoJ2xvZ2luJyk7IHNldFBhZ2UoJ0xvZ2luJyk7IHNldEF1dGhNZXNzYWdlKCdQbGVhc2UgbG9nIGluIHRvIHNhdmUgZmF2b3JpdGVzLicpOyByZXR1cm4gfVxuICAgIHNldEZhdm9yaXRlcyhwcmV2ID0+IHByZXYuaW5jbHVkZXMoaWQpID8gcHJldi5maWx0ZXIoeCA9PiB4ICE9PSBpZCkgOiBbLi4ucHJldiwgaWRdKVxuICB9XG4gIGNvbnN0IHNpZ251cCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IG5hbWUgPSBhdXRoTmFtZS50cmltKClcbiAgICBpZiAobmFtZS5sZW5ndGggPCAzIHx8IGF1dGhQYXNzLmxlbmd0aCA8IDQpIHJldHVybiBzZXRBdXRoTWVzc2FnZSgnVXNlIGEgdXNlcm5hbWUgKDMrIGNoYXJhY3RlcnMpIGFuZCBwYXNzd29yZCAoNCsgY2hhcmFjdGVycykuJylcbiAgICBpZiAodXNlcnMuc29tZSh1ID0+IHUudXNlcm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuIHNldEF1dGhNZXNzYWdlKCdUaGF0IHVzZXJuYW1lIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4nKVxuICAgIGNvbnN0IG5leHQgPSBbLi4udXNlcnMsIHsgdXNlcm5hbWU6IG5hbWUsIHBhc3N3b3JkOiBhdXRoUGFzcywgam9pbmVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfV1cbiAgICBzZXRVc2VycyhuZXh0KTsgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ213X3Nlc3Npb24nLCBuYW1lKTsgc2V0VXNlcihuYW1lKTsgc2V0QXV0aE1lc3NhZ2UoJ0FjY291bnQgY3JlYXRlZC4gV2VsY29tZSB0byBNdXNpY1dhdmUhJyk7IHNldFBhZ2UoJ0hvbWUnKTsgc2V0QXV0aE5hbWUoJycpOyBzZXRBdXRoUGFzcygnJylcbiAgfVxuICBjb25zdCBsb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZvdW5kID0gdXNlcnMuZmluZCh1ID0+IHUudXNlcm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gYXV0aE5hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgJiYgdS5wYXNzd29yZCA9PT0gYXV0aFBhc3MpXG4gICAgaWYgKCFmb3VuZCkgcmV0dXJuIHNldEF1dGhNZXNzYWdlKCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXdfc2Vzc2lvbicsIGZvdW5kLnVzZXJuYW1lKTsgc2V0VXNlcihmb3VuZC51c2VybmFtZSk7IHNldEF1dGhNZXNzYWdlKCcnKTsgc2V0UGFnZSgnSG9tZScpOyBzZXRBdXRoTmFtZSgnJyk7IHNldEF1dGhQYXNzKCcnKVxuICB9XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHsgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ213X3Nlc3Npb24nKTsgc2V0VXNlcignJyk7IHNldFBhZ2UoJ0hvbWUnKSB9XG4gIGNvbnN0IGFkbWluTG9naW4gPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAoYWRtaW5OYW1lID09PSAnYWRtaW4nICYmIGFkbWluUGFzcyA9PT0gJ2FkbWluMTIzJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ213X2FkbWluJywgJ3RydWUnKTsgc2V0QWRtaW4odHJ1ZSk7IHNldFBhZ2UoJ0FkbWluJyk7IHNldEFkbWluTWVzc2FnZSgnJylcbiAgICB9IGVsc2Ugc2V0QWRtaW5NZXNzYWdlKCdJbnZhbGlkIGFkbWluIHVzZXJuYW1lIG9yIHBhc3N3b3JkLicpXG4gIH1cbiAgY29uc3QgYWRtaW5Mb2dvdXQgPSAoKSA9PiB7IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdtd19hZG1pbicpOyBzZXRBZG1pbihmYWxzZSk7IHNldFBhZ2UoJ0hvbWUnKSB9XG4gIGNvbnN0IGNyZWF0ZVBsYXlsaXN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF1c2VyKSB7IHNldFBhZ2UoJ0xvZ2luJyk7IHNldEF1dGhNb2RlKCdsb2dpbicpOyByZXR1cm4gfVxuICAgIGlmICghcGxheWxpc3ROYW1lLnRyaW0oKSkgcmV0dXJuXG4gICAgY29uc3QgaXRlbSA9IHsgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksIG5hbWU6IHBsYXlsaXN0TmFtZS50cmltKCksIHNvbmdzOiBbXSB9XG4gICAgc2V0UGxheWxpc3RzKHByZXYgPT4gWy4uLnByZXYsIGl0ZW1dKTsgc2V0QWN0aXZlUGxheWxpc3QoaXRlbS5pZCk7IHNldFBsYXlsaXN0TmFtZSgnJylcbiAgfVxuICBjb25zdCBhZGRUb1BsYXlsaXN0ID0gaWQgPT4ge1xuICAgIGlmICghdXNlcikgeyBzZXRQYWdlKCdMb2dpbicpOyBzZXRBdXRoTW9kZSgnbG9naW4nKTsgcmV0dXJuIH1cbiAgICBpZiAoIXBsYXlsaXN0cy5sZW5ndGgpIHsgc2V0UGFnZSgnUGxheWxpc3RzJyk7IHJldHVybiB9XG4gICAgY29uc3QgdGFyZ2V0ID0gcGxheWxpc3RzWzBdXG4gICAgc2V0UGxheWxpc3RzKHByZXYgPT4gcHJldi5tYXAocCA9PiBwLmlkID09PSB0YXJnZXQuaWQgJiYgIXAuc29uZ3MuaW5jbHVkZXMoaWQpID8geyAuLi5wLCBzb25nczogWy4uLnAuc29uZ3MsIGlkXSB9IDogcCkpXG4gICAgc2V0QWN0aXZlUGxheWxpc3QodGFyZ2V0LmlkKVxuICB9XG4gIGNvbnN0IHNoYXJlUGxheWxpc3QgPSBhc3luYyBwbGF5bGlzdCA9PiB7XG4gICAgY29uc3QgdHJhY2tzID0gcGxheWxpc3Quc29uZ3MubWFwKGlkID0+IHNvbmdzLmZpbmQoc29uZyA9PiBzb25nLmlkID09PSBpZCkpLmZpbHRlcihCb29sZWFuKS5tYXAoKHtpZCx0aXRsZSxhcnRpc3QsYWxidW0sZ2VucmUsY292ZXIsYXVkaW99KSA9PiAoe2lkLHRpdGxlLGFydGlzdCxhbGJ1bSxnZW5yZSxjb3ZlcixhdWRpb30pKVxuICAgIGNvbnN0IHBheWxvYWQgPSB7IG5hbWU6IHBsYXlsaXN0Lm5hbWUsIG93bmVyOiB1c2VyIHx8ICdNdXNpY1dhdmUgbGlzdGVuZXInLCBzb25nczogdHJhY2tzIH1cbiAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT9zaGFyZWRQbGF5bGlzdD0ke2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSl9YFxuICAgIHRyeSB7XG4gICAgICBpZiAobmF2aWdhdG9yLnNoYXJlKSBhd2FpdCBuYXZpZ2F0b3Iuc2hhcmUoeyB0aXRsZTogYCR7cGxheWxpc3QubmFtZX0gwrcgTXVzaWNXYXZlYCwgdGV4dDogJ0xpc3RlbiB0byB0aGlzIHBsYXlsaXN0IG9uIE11c2ljV2F2ZScsIHVybCB9KVxuICAgICAgZWxzZSB7IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybCk7IHNldFNoYXJlTWVzc2FnZSgnUGxheWxpc3QgbGluayBjb3BpZWQhIFNlbmQgaXQgdG8geW91ciBmcmllbmRzLicpIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yPy5uYW1lICE9PSAnQWJvcnRFcnJvcicpIHtcbiAgICAgICAgdHJ5IHsgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKTsgc2V0U2hhcmVNZXNzYWdlKCdQbGF5bGlzdCBsaW5rIGNvcGllZCEgU2VuZCBpdCB0byB5b3VyIGZyaWVuZHMuJykgfVxuICAgICAgICBjYXRjaCB7IHNldFNoYXJlTWVzc2FnZSgnQ291bGQgbm90IGNvcHkgYXV0b21hdGljYWxseS4gWW91ciBicm93c2VyIG1heSBibG9jayBjbGlwYm9hcmQgYWNjZXNzLicpIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgdXBkYXRlUmF0aW5nID0gKGlkLCB2YWx1ZSkgPT4gc2V0UmF0aW5ncyhwcmV2ID0+ICh7IC4uLnByZXYsIFtpZF06IHZhbHVlIH0pKVxuICBjb25zdCBzdWJtaXRTdXBwb3J0VGlja2V0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCF1c2VyKSB7IHNldFN1cHBvcnROb3RpY2UoJ1BsZWFzZSBsb2cgaW4gYmVmb3JlIHN1Ym1pdHRpbmcgYSBzdXBwb3J0IHJlcXVlc3QuJyk7IHNldEF1dGhNb2RlKCdsb2dpbicpOyBzZXRQYWdlKCdMb2dpbicpOyByZXR1cm4gfVxuICAgIGlmICghc3VwcG9ydE1lc3NhZ2UudHJpbSgpKSByZXR1cm5cbiAgICBjb25zdCB0aWNrZXQgPSB7IGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLCB1c2VybmFtZTogdXNlciwgc3ViamVjdDogc3VwcG9ydFN1YmplY3QsIG1lc3NhZ2U6IHN1cHBvcnRNZXNzYWdlLnRyaW0oKSwgc3RhdHVzOiAnT3BlbicsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICBzZXRTdXBwb3J0VGlja2V0cyhwcmV2ID0+IFt0aWNrZXQsIC4uLnByZXZdKTsgc2V0U3VwcG9ydE1lc3NhZ2UoJycpXG4gICAgc2V0U3VwcG9ydE5vdGljZSgnWW91ciBzdXBwb3J0IHJlcXVlc3Qgd2FzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuJylcbiAgfVxuICBjb25zdCB1cGRhdGVUaWNrZXRTdGF0dXMgPSAoaWQsIHN0YXR1cykgPT4gc2V0U3VwcG9ydFRpY2tldHMocHJldiA9PiBwcmV2Lm1hcCh0aWNrZXQgPT4gdGlja2V0LmlkID09PSBpZCA/IHsgLi4udGlja2V0LCBzdGF0dXMgfSA6IHRpY2tldCkpXG4gIGNvbnN0IGRlbGV0ZVRpY2tldCA9IGlkID0+IHNldFN1cHBvcnRUaWNrZXRzKHByZXYgPT4gcHJldi5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5pZCAhPT0gaWQpKVxuICBjb25zdCBhZGRTb25nID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgdGl0bGUgPSBTdHJpbmcoZGF0YS5nZXQoJ3RpdGxlJykgfHwgJycpLnRyaW0oKVxuICAgIGNvbnN0IGFydGlzdCA9IFN0cmluZyhkYXRhLmdldCgnYXJ0aXN0JykgfHwgJycpLnRyaW0oKVxuICAgIGlmICghdGl0bGUgfHwgIWFydGlzdCkgcmV0dXJuXG4gICAgc2V0U29uZ3MocHJldiA9PiBbLi4ucHJldiwgeyBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSwgdGl0bGUsIGFydGlzdCwgZ2VucmU6IFN0cmluZyhkYXRhLmdldCgnZ2VucmUnKSB8fCAnUG9wJyksIGFsYnVtOiAnU2luZ2xlJywgY292ZXI6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTM3OTkzODU0Ny1jMWY2OTQxOTg2OGQ/dz03MDAmcT04NScsIGF1ZGlvOiBTdHJpbmcoZGF0YS5nZXQoJ2F1ZGlvJykgfHwgc2VlZFNvbmdzWzBdLmF1ZGlvKSB9XSlcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVzZXQoKVxuICB9XG4gIGNvbnN0IGRlbGV0ZVNvbmcgPSBpZCA9PiB7XG4gICAgc2V0U29uZ3MocHJldiA9PiBwcmV2LmZpbHRlcihzID0+IHMuaWQgIT09IGlkKSlcbiAgICBzZXRGYXZvcml0ZXMocHJldiA9PiBwcmV2LmZpbHRlcih4ID0+IHggIT09IGlkKSlcbiAgICBzZXRQbGF5bGlzdHMocHJldiA9PiBwcmV2Lm1hcChwID0+ICh7IC4uLnAsIHNvbmdzOiBwLnNvbmdzLmZpbHRlcih4ID0+IHggIT09IGlkKSB9KSkpXG4gICAgaWYgKGN1cnJlbnRJZCA9PT0gaWQpIHsgYXVkaW9SZWYuY3VycmVudD8ucGF1c2UoKTsgc2V0Q3VycmVudElkKCcnKTsgc2V0UGxheWluZyhmYWxzZSkgfVxuICB9XG4gIGNvbnN0IGRlbGV0ZVVzZXIgPSBuYW1lID0+IHtcbiAgICBzZXRVc2VycyhwcmV2ID0+IHByZXYuZmlsdGVyKHUgPT4gdS51c2VybmFtZSAhPT0gbmFtZSkpXG4gICAgaWYgKHVzZXIgPT09IG5hbWUpIGxvZ291dCgpXG4gIH1cbiAgY29uc3QgZ28gPSB0YXJnZXQgPT4geyBzZXRQYWdlKHRhcmdldCk7IHNldE1vYmlsZU5hdihmYWxzZSk7IHNldFF1ZXJ5KCcnKSB9XG4gIGNvbnN0IHN0YXJ0U2xlZXBUaW1lciA9ICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnQpIHsgc2V0UGFnZSgnU2xlZXAgVGltZXInKTsgcmV0dXJuIH1cbiAgICBzZXRTbGVlcFJlbWFpbmluZyhzbGVlcE1pbnV0ZXMgKiA2MClcbiAgICBzZXRTbGVlcFRpbWVyQWN0aXZlKHRydWUpXG4gIH1cbiAgY29uc3QgY2FuY2VsU2xlZXBUaW1lciA9ICgpID0+IHsgc2V0U2xlZXBUaW1lckFjdGl2ZShmYWxzZSk7IHNldFNsZWVwUmVtYWluaW5nKDApIH1cbiAgY29uc3Qgc2xlZXBUaW1lTGFiZWwgPSBgJHtTdHJpbmcoTWF0aC5mbG9vcihzbGVlcFJlbWFpbmluZyAvIDYwKSkucGFkU3RhcnQoMiwgJzAnKX06JHtTdHJpbmcoc2xlZXBSZW1haW5pbmcgJSA2MCkucGFkU3RhcnQoMiwgJzAnKX1gXG4gIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgIFsnSG9tZScsIEhvbWVdLCBbJ0Rpc2NvdmVyJywgU2VhcmNoXSwgWydBbGJ1bXMnLCBEaXNjM10sIFsnQXJ0aXN0cycsIE1pYzJdLFxuICAgIFsnRmF2b3JpdGVzJywgSGVhcnRdLCBbJ1BsYXlsaXN0cycsIExpc3RNdXNpY10sIFsnUmVjZW50bHkgcGxheWVkJywgQ2xvY2szXSwgWydTbGVlcCBUaW1lcicsIFRpbWVyXSwgWydIZWxwICYgU3VwcG9ydCcsIExpZmVCdW95XVxuICBdXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYXBwLXNoZWxsXCI+XG4gICAgPGFzaWRlIGNsYXNzTmFtZT17YHNpZGViYXIgJHttb2JpbGVOYXYgPyAnb3BlbicgOiAnJ31gfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnJhbmRcIiBvbkNsaWNrPXsoKSA9PiBnbygnSG9tZScpfT48c3BhbiBjbGFzc05hbWU9XCJicmFuZC1pY29uXCI+PEF1ZGlvTGluZXMgc2l6ZT17MjJ9Lz48L3NwYW4+IG11c2ljPHNwYW4+d2F2ZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNhcHRpb25cIj5NRU5VPC9kaXY+XG4gICAgICA8bmF2PntuYXZJdGVtcy5tYXAoKFtsYWJlbCwgSWNvbl0pID0+IDxidXR0b24ga2V5PXtsYWJlbH0gY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYWdlID09PSBsYWJlbCA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZ28obGFiZWwpfT48SWNvbiBzaXplPXsxOH0vPntsYWJlbH08L2J1dHRvbj4pfTwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJvdHRvbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwZ3JhZGUtY2FyZFwiPjxkaXYgY2xhc3NOYW1lPVwidXBncmFkZS1vcmJcIj48SGVhZHBob25lcyBzaXplPXsyMn0vPjwvZGl2PjxzdHJvbmc+WW91ciBzb3VuZCwgeW91ciBzcGFjZS48L3N0cm9uZz48cD5CdWlsZCBhIGxpYnJhcnkgdGhhdCBmZWVscyBsaWtlIHlvdS48L3A+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1c2VyID8gZ28oJ1BsYXlsaXN0cycpIDogZ28oJ1NpZ251cCcpfT5HZXQgc3RhcnRlZCA8c3Bhbj7ihpc8L3NwYW4+PC9idXR0b24+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYWdlID09PSAnQWRtaW4nIHx8IHBhZ2UgPT09ICdBZG1pbiBsb2dpbicgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGdvKGFkbWluID8gJ0FkbWluJyA6ICdBZG1pbiBsb2dpbicpfT48U2hpZWxkQ2hlY2sgc2l6ZT17MTh9Lz5BZG1pbiBtb2R1bGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9eygpID0+IHVzZXIgPyBnbygnUHJvZmlsZScpIDogZ28oJ0xvZ2luJyl9PjxVc2VyUm91bmQgc2l6ZT17MTh9Lz57dXNlciB8fCAnTXkgYWNjb3VudCd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWFpbi1hcmVhXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInRvcGJhclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51IGljb24tYnRuXCIgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTmF2KHYgPT4gIXYpfT48TWVudS8+PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPllvdXIgbGlicmFyeSA8c3Bhbj4vPC9zcGFuPiA8Yj57cGFnZX08L2I+PC9kaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCI+PFNlYXJjaCBzaXplPXsxN30vPjxpbnB1dCB2YWx1ZT17cXVlcnl9IG9uQ2hhbmdlPXtlID0+IHsgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpOyBpZiAocGFnZSAhPT0gJ0Rpc2NvdmVyJykgc2V0UGFnZSgnRGlzY292ZXInKSB9fSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzb25ncywgYXJ0aXN0cywgYWxidW1zLi4uXCIgLz48a2JkPuKMmCBLPC9rYmQ+PC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYWN0aW9uc1wiPlxuICAgICAgICAgIHt1c2VyID8gPGJ1dHRvbiBjbGFzc05hbWU9XCJ1c2VyLWNoaXBcIiBvbkNsaWNrPXsoKSA9PiBnbygnUHJvZmlsZScpfT48c3BhbiBjbGFzc05hbWU9XCJhdmF0YXJcIj57dXNlci5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjxzcGFuPnt1c2VyfTwvc3Bhbj48L2J1dHRvbj4gOiA8PjxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1idG5cIiBvbkNsaWNrPXsoKSA9PiB7c2V0QXV0aE1vZGUoJ2xvZ2luJyk7Z28oJ0xvZ2luJyl9fT5Mb2cgaW48L2J1dHRvbj48YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnRuIHNtYWxsXCIgb25DbGljaz17KCkgPT4ge3NldEF1dGhNb2RlKCdzaWdudXAnKTtnbygnU2lnbnVwJyl9fT5TaWduIHVwPC9idXR0b24+PC8+fVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1idG4gYWRtaW4tc2hvcnRjdXRcIiB0aXRsZT1cIk9wZW4gQWRtaW4gbW9kdWxlXCIgb25DbGljaz17KCkgPT4gZ28oYWRtaW4gPyAnQWRtaW4nIDogJ0FkbWluIGxvZ2luJyl9PjxTaGllbGRDaGVjayBzaXplPXsxNn0vPiBBZG1pbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7cGFnZSA9PT0gJ0hvbWUnICYmIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29weVwiPjxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj48c3BhbiBjbGFzc05hbWU9XCJwdWxzZVwiLz4gWU9VUiBEQUlMWSBTT1VORFRSQUNLPC9zcGFuPjxoMT5GaW5kIHlvdXI8YnIvPjxlbT5vd24gcmh5dGhtLjwvZW0+PC9oMT48cD5GcmVzaCBkaXNjb3ZlcmllcywgZmFtaWxpYXIgZmF2b3JpdGVzLCBhbmQgZXZlcnl0aGluZyBpbiBiZXR3ZWVuLiBZb3VyIG5leHQgb2JzZXNzaW9uIHN0YXJ0cyBoZXJlLjwvcD48YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnRuXCIgb25DbGljaz17KCkgPT4gZ28oJ0Rpc2NvdmVyJyl9PkV4cGxvcmUgbXVzaWMgPHNwYW4+4oaXPC9zcGFuPjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1hcnRcIj48ZGl2IGNsYXNzTmFtZT1cImFydC1yaW5nIHJpbmctb25lXCIvPjxkaXYgY2xhc3NOYW1lPVwiYXJ0LXJpbmcgcmluZy10d29cIi8+PGRpdiBjbGFzc05hbWU9XCJoZXJvLWRpc2NcIj48ZGl2IGNsYXNzTmFtZT1cImRpc2MtbGFiZWxcIj48QXVkaW9MaW5lcyBzaXplPXszNn0vPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctbm90ZSBub3RlLWFcIj7imas8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLW5vdGUgbm90ZS1iXCI+4pmqPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJoZXJvLXRhZ1wiPk5PVyBQTEFZSU5HPGJyLz48Yj5HT09EIFZJQlJBVElPTlM8L2I+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWluZGV4XCI+MDEgPHNwYW4+Lzwvc3Bhbj4gMDQ8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWJsb2NrXCI+PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj48ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj5IQU5EUElDS0VEIEZPUiBZT1U8L3NwYW4+PGgyPk1hZGUgZm9yIHRoaXMgbW9tZW50PC9oMj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cInNlZS1hbGxcIiBvbkNsaWNrPXsoKSA9PiBnbygnRGlzY292ZXInKX0+VmlldyBhbGwgPHNwYW4+4oaSPC9zcGFuPjwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic29uZy1ncmlkXCI+e3NvbmdzLnNsaWNlKDAsNCkubWFwKChzLGkpID0+IDxTb25nQ2FyZCBrZXk9e3MuaWR9IHNvbmc9e3N9IGluZGV4PXtpfSBwbGF5aW5nPXtjdXJyZW50SWQ9PT1zLmlkJiZwbGF5aW5nfSBmYXZvcml0ZT17ZmF2b3JpdGVzLmluY2x1ZGVzKHMuaWQpfSByYXRpbmc9e3JhdGluZ3Nbcy5pZF18fDB9IG9uUGxheT17cGxheVNvbmd9IG9uRmF2b3JpdGU9e3RvZ2dsZUZhdm9yaXRlfSBvblJhdGU9e3VwZGF0ZVJhdGluZ30gb25BZGQ9e2FkZFRvUGxheWxpc3R9Lz4pfTwvZGl2Pjwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1ibG9ja1wiPjxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+PGRpdj48c3BhbiBjbGFzc05hbWU9XCJleWVicm93XCI+UElDSyBVUCBXSEVSRSBZT1UgTEVGVCBPRkY8L3NwYW4+PGgyPlJlY2VudGx5IHBsYXllZDwvaDI+PC9kaXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWUtYWxsXCIgb25DbGljaz17KCkgPT4gZ28oJ1JlY2VudGx5IHBsYXllZCcpfT5TZWUgaGlzdG9yeSDihpI8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInJlY2VudC1yb3dcIj57cmVjZW50Lmxlbmd0aCA/IHJlY2VudC5tYXAoaWQgPT4gc29uZ3MuZmluZChzPT5zLmlkPT09aWQpKS5maWx0ZXIoQm9vbGVhbikuc2xpY2UoMCw1KS5tYXAocz0+PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWNlbnQtaXRlbVwiIGtleT17cy5pZH0gb25DbGljaz17KCk9PnBsYXlTb25nKHMpfT48aW1nIHNyYz17cy5jb3Zlcn0vPjxzcGFuPjxiPntzLnRpdGxlfTwvYj48c21hbGw+e3MuYXJ0aXN0fTwvc21hbGw+PC9zcGFuPjxQbGF5IHNpemU9ezE1fS8+PC9idXR0b24+KSA6IDxwIGNsYXNzTmFtZT1cImVtcHR5LWlubGluZVwiPllvdXIgbGlzdGVuaW5nIGhpc3Rvcnkgd2lsbCBzaG93IHVwIGhlcmUuPC9wPn08L2Rpdj48L3NlY3Rpb24+XG4gICAgICA8L2Rpdj59XG5cbiAgICAgIHtbJ0Rpc2NvdmVyJywnQWxidW1zJywnQXJ0aXN0cycsJ0Zhdm9yaXRlcycsJ1JlY2VudGx5IHBsYXllZCddLmluY2x1ZGVzKHBhZ2UpICYmIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8UGFnZUludHJvIGV5ZWJyb3c9e3BhZ2U9PT0nRGlzY292ZXInPydUSEUgTVVTSUMgVU5JVkVSU0UnOidZT1VSIENPTExFQ1RJT04nfSB0aXRsZT17cGFnZT09PSdEaXNjb3Zlcic/J0V4cGxvcmUgdGhlIHNvdW5kLic6cGFnZT09PSdBbGJ1bXMnPydBbGJ1bXMgd29ydGggYSByZXBsYXkuJzpwYWdlPT09J0FydGlzdHMnPydNZWV0IHlvdXIgbmV3IGZhdm9yaXRlcy4nOnBhZ2U9PT0nRmF2b3JpdGVzJz8nWW91ciBhbGwtdGltZSBsb3Zlcy4nOidCYWNrIGluIHRoZSBncm9vdmUuJ30gc3VidGl0bGU9e3BhZ2U9PT0nRGlzY292ZXInPydTZWFyY2ggdGhlIGNhdGFsb2cgYW5kIGZpbmQgc29tZXRoaW5nIHRoYXQgbW92ZXMgeW91Lic6YEEgbGl0dGxlIG1vcmUgb2Ygd2hhdCBtYWtlcyAke3VzZXIgfHwgJ3lvdSd9IGZlZWwgc29tZXRoaW5nLmB9Lz5cbiAgICAgICAge3BhZ2UgPT09ICdEaXNjb3ZlcicgJiYgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcm93XCI+e2dlbnJlcy5tYXAoZz0+PGJ1dHRvbiBrZXk9e2d9IGNsYXNzTmFtZT17YGZpbHRlci1jaGlwICR7Z2VucmU9PT1nPydzZWxlY3RlZCc6Jyd9YH0gb25DbGljaz17KCk9PnNldEdlbnJlKGcpfT57Z308L2J1dHRvbj4pfTwvZGl2Pn1cbiAgICAgICAge3BhZ2UgPT09ICdBbGJ1bXMnID8gPGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWdyaWRcIj57Wy4uLm5ldyBTZXQoc29uZ3MubWFwKHM9PnMuYWxidW0pKV0ubWFwKGFsYnVtPT57Y29uc3Qgcz1zb25ncy5maW5kKHg9PnguYWxidW09PT1hbGJ1bSk7cmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPVwiYWxidW0tdGlsZVwiIGtleT17YWxidW19IG9uQ2xpY2s9eygpPT57c2V0UXVlcnkoYWxidW0pO3NldFBhZ2UoJ0Rpc2NvdmVyJyl9fT48aW1nIHNyYz17cy5jb3Zlcn0vPjxiPnthbGJ1bX08L2I+PHNtYWxsPntzLmFydGlzdH08L3NtYWxsPjwvYnV0dG9uPn0pfTwvZGl2PiA6XG4gICAgICAgIHBhZ2UgPT09ICdBcnRpc3RzJyA/IDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1ncmlkIGFydGlzdC1ncmlkXCI+e1suLi5uZXcgU2V0KHNvbmdzLm1hcChzPT5zLmFydGlzdCkpXS5tYXAoYXJ0aXN0PT57Y29uc3Qgcz1zb25ncy5maW5kKHg9PnguYXJ0aXN0PT09YXJ0aXN0KTtyZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9XCJhcnRpc3QtdGlsZVwiIGtleT17YXJ0aXN0fSBvbkNsaWNrPXsoKT0+e3NldFF1ZXJ5KGFydGlzdCk7c2V0UGFnZSgnRGlzY292ZXInKX19PjxpbWcgc3JjPXtzLmNvdmVyfS8+PGI+e2FydGlzdH08L2I+PHNtYWxsPntzb25ncy5maWx0ZXIoeD0+eC5hcnRpc3Q9PT1hcnRpc3QpLmxlbmd0aH0gdHJhY2socyk8L3NtYWxsPjwvYnV0dG9uPn0pfTwvZGl2PiA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZy1ncmlkXCI+eyhwYWdlPT09J0Zhdm9yaXRlcyc/c29uZ3MuZmlsdGVyKHM9PmZhdm9yaXRlcy5pbmNsdWRlcyhzLmlkKSk6cGFnZT09PSdSZWNlbnRseSBwbGF5ZWQnP3JlY2VudC5tYXAoaWQ9PnNvbmdzLmZpbmQocz0+cy5pZD09PWlkKSkuZmlsdGVyKEJvb2xlYW4pOnZpc2libGVTb25ncykubWFwKChzLGkpPT48U29uZ0NhcmQga2V5PXtzLmlkfSBzb25nPXtzfSBpbmRleD17aX0gcGxheWluZz17Y3VycmVudElkPT09cy5pZCYmcGxheWluZ30gZmF2b3JpdGU9e2Zhdm9yaXRlcy5pbmNsdWRlcyhzLmlkKX0gcmF0aW5nPXtyYXRpbmdzW3MuaWRdfHwwfSBvblBsYXk9e3BsYXlTb25nfSBvbkZhdm9yaXRlPXt0b2dnbGVGYXZvcml0ZX0gb25SYXRlPXt1cGRhdGVSYXRpbmd9IG9uQWRkPXthZGRUb1BsYXlsaXN0fS8+KX08L2Rpdj59XG4gICAgICAgIHtwYWdlPT09J0Rpc2NvdmVyJyAmJiAhdmlzaWJsZVNvbmdzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXN0YXRlXCI+PFNlYXJjaCBzaXplPXsyOH0vPjxoMz5ObyB0cmFja3MgZm91bmQ8L2gzPjxwPlRyeSBhbm90aGVyIHRpdGxlLCBhcnRpc3Qgb3IgZ2VucmUuPC9wPjwvZGl2Pn1cbiAgICAgICAge3BhZ2U9PT0nRmF2b3JpdGVzJyAmJiAhZmF2b3JpdGVzLmxlbmd0aCAmJiA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXN0YXRlXCI+PEhlYXJ0IHNpemU9ezI4fS8+PGgzPllvdXIgZmF2b3JpdGVzIGxpdmUgaGVyZTwvaDM+PHA+VGFwIHRoZSBoZWFydCBvbiBhbnkgdHJhY2sgdG8gc2F2ZSBpdC48L3A+PC9kaXY+fVxuICAgICAgPC9kaXY+fVxuXG4gICAgICB7cGFnZSA9PT0gJ1BsYXlsaXN0cycgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PFBhZ2VJbnRybyBleWVicm93PVwiQ1VSQVRFRCBCWSBZT1VcIiB0aXRsZT1cIllvdXIgcGxheWxpc3RzLlwiIHN1YnRpdGxlPVwiTWFrZSBhIGNvbGxlY3Rpb24gZm9yIGV2ZXJ5IHZlcnNpb24gb2YgeW91LlwiLz48Zm9ybSBjbGFzc05hbWU9XCJjcmVhdGUtcGxheWxpc3RcIiBvblN1Ym1pdD17Y3JlYXRlUGxheWxpc3R9PjxpbnB1dCB2YWx1ZT17cGxheWxpc3ROYW1lfSBvbkNoYW5nZT17ZT0+c2V0UGxheWxpc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJOYW1lIHlvdXIgbmV3IHBsYXlsaXN0XCIvPjxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIj48UGx1cyBzaXplPXsxN30vPiBDcmVhdGUgcGxheWxpc3Q8L2J1dHRvbj48L2Zvcm0+PGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdC1sYXlvdXRcIj48ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWxpc3RcIj57cGxheWxpc3RzLm1hcChwPT48YnV0dG9uIGtleT17cC5pZH0gY2xhc3NOYW1lPXtgcGxheWxpc3Qtcm93ICR7YWN0aXZlUGxheWxpc3Q9PT1wLmlkPydzZWxlY3RlZCc6Jyd9YH0gb25DbGljaz17KCk9PnNldEFjdGl2ZVBsYXlsaXN0KHAuaWQpfT48c3BhbiBjbGFzc05hbWU9XCJwbGF5bGlzdC1jb3ZlclwiPjxMaXN0TXVzaWMvPjwvc3Bhbj48c3Bhbj48Yj57cC5uYW1lfTwvYj48c21hbGw+e3Auc29uZ3MubGVuZ3RofSB0cmFja3M8L3NtYWxsPjwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJyb3ctYXJyb3dcIj7ihpI8L3NwYW4+PC9idXR0b24+KX17IXBsYXlsaXN0cy5sZW5ndGgmJjxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj48TGlzdE11c2ljLz48aDM+Tm8gcGxheWxpc3RzIHlldDwvaDM+PHA+Q3JlYXRlIG9uZSBhYm92ZSwgdGhlbiBhZGQgdHJhY2tzIGZyb20gRGlzY292ZXIuPC9wPjwvZGl2Pn08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWRldGFpbFwiPnthY3RpdmVQbGF5bGlzdCYmcGxheWxpc3RzLmZpbmQocD0+cC5pZD09PWFjdGl2ZVBsYXlsaXN0KT88PjxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+PGRpdj48c3BhbiBjbGFzc05hbWU9XCJleWVicm93XCI+Tk9XIENVUkFUSU5HPC9zcGFuPjxoMj57cGxheWxpc3RzLmZpbmQocD0+cC5pZD09PWFjdGl2ZVBsYXlsaXN0KS5uYW1lfTwvaDI+PHAgY2xhc3NOYW1lPVwic2hhcmUtbm90ZVwiPkZyZWUgcGxheWxpc3Qgc2hhcmluZyDCtyBObyBwcmVtaXVtIHJlcXVpcmVkPC9wPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtYWN0aW9uc1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1idG5cIiBvbkNsaWNrPXsoKT0+c2hhcmVQbGF5bGlzdChwbGF5bGlzdHMuZmluZChwPT5wLmlkPT09YWN0aXZlUGxheWxpc3QpKX0+PFNoYXJlMiBzaXplPXsxNX0vPiBTaGFyZSBwbGF5bGlzdDwvYnV0dG9uPjxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG4gZGFuZ2VyXCIgb25DbGljaz17KCk9PntzZXRQbGF5bGlzdHMocD0+cC5maWx0ZXIoeD0+eC5pZCE9PWFjdGl2ZVBsYXlsaXN0KSk7c2V0QWN0aXZlUGxheWxpc3QoJycpfX0+PFRyYXNoMiBzaXplPXsxN30vPjwvYnV0dG9uPjwvZGl2PjwvZGl2PntzaGFyZU1lc3NhZ2UmJjxwIGNsYXNzTmFtZT1cImZvcm0tbWVzc2FnZVwiPntzaGFyZU1lc3NhZ2V9PC9wPn17cGxheWxpc3RzLmZpbmQocD0+cC5pZD09PWFjdGl2ZVBsYXlsaXN0KS5zb25ncy5tYXAoaWQ9PnNvbmdzLmZpbmQocz0+cy5pZD09PWlkKSkuZmlsdGVyKEJvb2xlYW4pLm1hcChzPT48ZGl2IGNsYXNzTmFtZT1cInRyYWNrLXJvd1wiIGtleT17cy5pZH0+PGltZyBzcmM9e3MuY292ZXJ9Lz48c3Bhbj48Yj57cy50aXRsZX08L2I+PHNtYWxsPntzLmFydGlzdH08L3NtYWxsPjwvc3Bhbj48YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCk9PnBsYXlTb25nKHMpfT48UGxheSBzaXplPXsxNn0vPjwvYnV0dG9uPjxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG4gZGFuZ2VyXCIgb25DbGljaz17KCk9PnNldFBsYXlsaXN0cyhwPT5wLm1hcCh4PT54LmlkPT09YWN0aXZlUGxheWxpc3Q/ey4uLngsc29uZ3M6eC5zb25ncy5maWx0ZXIoaT0+aSE9PXMuaWQpfTp4KSl9PjxYIHNpemU9ezE2fS8+PC9idXR0b24+PC9kaXY+KX17IXBsYXlsaXN0cy5maW5kKHA9PnAuaWQ9PT1hY3RpdmVQbGF5bGlzdCkuc29uZ3MubGVuZ3RoJiY8cCBjbGFzc05hbWU9XCJlbXB0eS1pbmxpbmVcIj5UaGlzIHBsYXlsaXN0IGlzIHdhaXRpbmcgZm9yIGl0cyBmaXJzdCB0cmFjay4gQWRkIHNvbmdzIGZyb20gRGlzY292ZXIuPC9wPn08Lz46PGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPjxEaXNjMy8+PGgzPlNlbGVjdCBhIHBsYXlsaXN0PC9oMz48cD5DaG9vc2UgYSBwbGF5bGlzdCB0byBzZWUgd2hhdOKAmXMgaW5zaWRlLjwvcD48L2Rpdj59PC9kaXY+PC9kaXY+PC9kaXY+fVxuXG4gICAgICB7cGFnZSA9PT0gJ0hlbHAgJiBTdXBwb3J0JyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48UGFnZUludHJvIGV5ZWJyb3c9XCJXReKAmVJFIEhFUkUgVE8gSEVMUFwiIHRpdGxlPVwiSGVscCAmIFN1cHBvcnQuXCIgc3VidGl0bGU9XCJGaW5kIHF1aWNrIGFuc3dlcnMgb3Igc2VuZCBhIHN1cHBvcnQgcmVxdWVzdC5cIi8+PGRpdiBjbGFzc05hbWU9XCJzdXBwb3J0LWxheW91dFwiPjxzZWN0aW9uIGNsYXNzTmFtZT1cInN1cHBvcnQtcGFuZWxcIj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPlFVSUNLIEFOU1dFUlM8L3NwYW4+PGgyPkZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zPC9oMj48L2Rpdj48L2Rpdj57W3txOidIb3cgZG8gSSBjcmVhdGUgYW4gYWNjb3VudD8nLGE6J0Nob29zZSBTaWduIHVwLCBlbnRlciBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCwgdGhlbiBjcmVhdGUgeW91ciBhY2NvdW50Lid9LHtxOidIb3cgZG8gSSBwbGF5IGEgc29uZz8nLGE6J09wZW4gRGlzY292ZXIgb3IgSG9tZSBhbmQgc2VsZWN0IHRoZSBQbGF5IGJ1dHRvbiBvbiBhIHNvbmcuJ30se3E6J0hvdyBkbyBJIGNyZWF0ZSBhIHBsYXlsaXN0PycsYTonT3BlbiBQbGF5bGlzdHMsIGVudGVyIGEgbmFtZSBhbmQgY2hvb3NlIENyZWF0ZSBwbGF5bGlzdC4gQWRkIHNvbmdzIGZyb20gRGlzY292ZXIuJ30se3E6J0hvdyBkbyBJIHNhdmUgYSBmYXZvdXJpdGU/JyxhOidTZWxlY3QgdGhlIGhlYXJ0IGljb24gb24gYSBzb25nLiBZb3VyIGZhdm91cml0ZXMgYXBwZWFyIGluIEZhdm9yaXRlcy4nfSx7cTonV2h5IGlzIGEgc29uZyBub3QgcGxheWluZz8nLGE6J0NoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbiBhbmQgdHJ5IGFub3RoZXIgdHJhY2suIFNvbWUgc2FtcGxlIGF1ZGlvIGxpbmtzIG1heSBiZSB1bmF2YWlsYWJsZS4nfV0ubWFwKChpdGVtLGkpPT48ZGV0YWlscyBjbGFzc05hbWU9XCJmYXEtaXRlbVwiIGtleT17aX0+PHN1bW1hcnk+e2l0ZW0ucX08L3N1bW1hcnk+PHA+e2l0ZW0uYX08L3A+PC9kZXRhaWxzPil9PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzTmFtZT1cInN1cHBvcnQtcGFuZWxcIj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPkNPTlRBQ1QgU1VQUE9SVDwvc3Bhbj48aDI+U2VuZCB1cyBhIG1lc3NhZ2U8L2gyPjwvZGl2PjxNZXNzYWdlQ2lyY2xlLz48L2Rpdj48Zm9ybSBjbGFzc05hbWU9XCJzdXBwb3J0LWZvcm1cIiBvblN1Ym1pdD17c3VibWl0U3VwcG9ydFRpY2tldH0+PGxhYmVsPklzc3VlIHR5cGU8c2VsZWN0IHZhbHVlPXtzdXBwb3J0U3ViamVjdH0gb25DaGFuZ2U9e2U9PnNldFN1cHBvcnRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX0+PG9wdGlvbj5UZWNobmljYWwgaXNzdWU8L29wdGlvbj48b3B0aW9uPkxvZ2luIHByb2JsZW08L29wdGlvbj48b3B0aW9uPlNvbmcgbm90IHBsYXlpbmc8L29wdGlvbj48b3B0aW9uPlBsYXlsaXN0IHByb2JsZW08L29wdGlvbj48b3B0aW9uPkFjY291bnQgcXVlc3Rpb248L29wdGlvbj48b3B0aW9uPk90aGVyPC9vcHRpb24+PC9zZWxlY3Q+PC9sYWJlbD48bGFiZWw+WW91ciBtZXNzYWdlPHRleHRhcmVhIHZhbHVlPXtzdXBwb3J0TWVzc2FnZX0gb25DaGFuZ2U9e2U9PnNldFN1cHBvcnRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcm93cz17NX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB0aGUgcHJvYmxlbSB5b3UgYXJlIGZhY2luZy4uLlwiLz48L2xhYmVsPjxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0IHN1cHBvcnQgcmVxdWVzdCA8c3Bhbj7ihpI8L3NwYW4+PC9idXR0b24+PC9mb3JtPntzdXBwb3J0Tm90aWNlJiY8cCBjbGFzc05hbWU9XCJzdXBwb3J0LW5vdGljZVwiPntzdXBwb3J0Tm90aWNlfTwvcD59eyF1c2VyJiY8cCBjbGFzc05hbWU9XCJzdXBwb3J0LWhpbnRcIj5QbGVhc2UgbG9nIGluIHRvIHN1Ym1pdCBhIHN1cHBvcnQgcmVxdWVzdC48L3A+fTwvc2VjdGlvbj48L2Rpdj57dXNlciYmPHNlY3Rpb24gY2xhc3NOYW1lPVwic3VwcG9ydC1wYW5lbCBteS10aWNrZXRzXCI+PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj48ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj5ZT1VSIFJFUVVFU1RTPC9zcGFuPjxoMj5NeSBzdXBwb3J0IHJlcXVlc3RzPC9oMj48L2Rpdj48L2Rpdj57c3VwcG9ydFRpY2tldHMuZmlsdGVyKHQ9PnQudXNlcm5hbWU9PT11c2VyKS5sZW5ndGg/c3VwcG9ydFRpY2tldHMuZmlsdGVyKHQ9PnQudXNlcm5hbWU9PT11c2VyKS5tYXAodD0+PGRpdiBjbGFzc05hbWU9XCJ0aWNrZXQtcm93XCIga2V5PXt0LmlkfT48ZGl2PjxiPnt0LnN1YmplY3R9PC9iPjxwPnt0Lm1lc3NhZ2V9PC9wPjxzbWFsbD57bmV3IERhdGUodC5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9PC9zbWFsbD48L2Rpdj48c3BhbiBjbGFzc05hbWU9e2B0aWNrZXQtc3RhdHVzICR7dC5zdGF0dXMudG9Mb3dlckNhc2UoKX1gfT57dC5zdGF0dXN9PC9zcGFuPjwvZGl2Pik6PHAgY2xhc3NOYW1lPVwiZW1wdHktaW5saW5lXCI+WW91IGhhdmUgbm90IHN1Ym1pdHRlZCBhbnkgc3VwcG9ydCByZXF1ZXN0cyB5ZXQuPC9wPn08L3NlY3Rpb24+fTwvZGl2Pn1cblxuICAgICAge3BhZ2UgPT09ICdTbGVlcCBUaW1lcicgJiYgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHNsZWVwLXRpbWVyLXBhZ2VcIj5cbiAgICAgICAgPFBhZ2VJbnRybyBleWVicm93PVwiV0lORCBET1dOIFdJVEggTVVTSUNXQVZFXCIgdGl0bGU9XCJTbGVlcCBUaW1lclwiIHN1YnRpdGxlPVwiQ2hvb3NlIHdoZW4geW91ciBtdXNpYyBzaG91bGQgc3RvcC4gWW91ciB0aW1lciBrZWVwcyBydW5uaW5nIHdoaWxlIHlvdSBicm93c2UgTXVzaWNXYXZlLlwiLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xlZXAtdGltZXItY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlZXAtdGltZXItaWNvblwiPjxUaW1lciBzaXplPXszMH0vPjwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj57c2xlZXBUaW1lckFjdGl2ZSA/ICdUSU1FUiBJUyBSVU5OSU5HJyA6ICdTRVQgWU9VUiBMSVNURU5JTkcgVElNRSd9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xlZXAtY291bnRkb3duXCI+e3NsZWVwVGltZXJBY3RpdmUgPyBzbGVlcFRpbWVMYWJlbCA6IGAke1N0cmluZyhzbGVlcE1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJyl9OjAwYH08L2Rpdj5cbiAgICAgICAgICA8cD57c2xlZXBUaW1lckFjdGl2ZSA/ICdNdXNpYyB3aWxsIHBhdXNlIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgY291bnRkb3duIHJlYWNoZXMgemVyby4nIDogJ011c2ljV2F2ZSB3aWxsIHBhdXNlIHRoZSBjdXJyZW50IHNvbmcgd2hlbiB5b3VyIHNlbGVjdGVkIHRpbWUgaXMgdXAuJ308L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGVlcC1wcmVzZXRzXCI+e1sxNSwzMCw0NSw2MF0ubWFwKG1pbnV0ZXMgPT4gPGJ1dHRvbiBrZXk9e21pbnV0ZXN9IGNsYXNzTmFtZT17YGZpbHRlci1jaGlwICR7c2xlZXBNaW51dGVzPT09bWludXRlcz8nc2VsZWN0ZWQnOicnfWB9IGRpc2FibGVkPXtzbGVlcFRpbWVyQWN0aXZlfSBvbkNsaWNrPXsoKT0+c2V0U2xlZXBNaW51dGVzKG1pbnV0ZXMpfT57bWludXRlc30gbWluPC9idXR0b24+KX08L2Rpdj5cbiAgICAgICAgICB7c2xlZXBUaW1lckFjdGl2ZSA/IDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1idG4gc2xlZXAtYWN0aW9uXCIgb25DbGljaz17Y2FuY2VsU2xlZXBUaW1lcn0+PFggc2l6ZT17MTZ9Lz4gQ2FuY2VsIHRpbWVyPC9idXR0b24+IDogPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biBzbGVlcC1hY3Rpb25cIiBvbkNsaWNrPXtzdGFydFNsZWVwVGltZXJ9PjxUaW1lciBzaXplPXsxNn0vPiBTdGFydCBzbGVlcCB0aW1lcjwvYnV0dG9uPn1cbiAgICAgICAgICB7IWN1cnJlbnQgJiYgPHNtYWxsIGNsYXNzTmFtZT1cInN0b3JhZ2Utbm90ZVwiPkNob29zZSBhbmQgc3RhcnQgYSBzb25nIGZpcnN0LiBUaGUgdGltZXIgd2lsbCBwYXVzZSB0aGF0IHNvbmcgd2hlbiBpdCBlbmRzLjwvc21hbGw+fVxuICAgICAgICAgIHtjdXJyZW50ICYmIDxkaXYgY2xhc3NOYW1lPVwic2xlZXAtY3VycmVudFwiPjxpbWcgc3JjPXtjdXJyZW50LmNvdmVyfSBhbHQ9XCJcIi8+PHNwYW4+PGI+Q3VycmVudGx5IHBsYXlpbmc8L2I+PHNtYWxsPntjdXJyZW50LnRpdGxlfSDCtyB7Y3VycmVudC5hcnRpc3R9PC9zbWFsbD48L3NwYW4+PC9kaXY+fVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj59XG5cbiAgICAgIHtwYWdlID09PSAnU2hhcmVkIHBsYXlsaXN0JyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48UGFnZUludHJvIGV5ZWJyb3c9XCJTSEFSRUQgV0lUSCBZT1VcIiB0aXRsZT17c2hhcmVkUGxheWxpc3Q/Lm5hbWUgfHwgJ1BsYXlsaXN0IHVuYXZhaWxhYmxlJ30gc3VidGl0bGU9e3NoYXJlZFBsYXlsaXN0ID8gYFNoYXJlZCBieSAke3NoYXJlZFBsYXlsaXN0Lm93bmVyIHx8ICdhIE11c2ljV2F2ZSBsaXN0ZW5lcid9IMK3IEZyZWUgdG8gdmlldywgbm8gcHJlbWl1bSByZXF1aXJlZC5gIDogJ1RoaXMgcGxheWxpc3QgbGluayBpcyBpbnZhbGlkIG9yIGluY29tcGxldGUuJ30vPntzaGFyZWRQbGF5bGlzdCAmJiA8PjxkaXYgY2xhc3NOYW1lPVwic2hhcmVkLWJhbm5lclwiPjxTaGFyZTIgc2l6ZT17MTl9Lz48c3Bhbj5Tb21lb25lIHNoYXJlZCB0aGlzIHBsYXlsaXN0IHdpdGggeW91LiBTaWduIGluIGlzIG5vdCByZXF1aXJlZCB0byB2aWV3IGl0Ljwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRyYWNrLWxpc3RcIj57KHNoYXJlZFBsYXlsaXN0LnNvbmdzIHx8IFtdKS5tYXAoKHNvbmcsaSk9PjxkaXYgY2xhc3NOYW1lPVwidHJhY2stcm93XCIga2V5PXtgJHtzb25nLmlkfS0ke2l9YH0+PGltZyBzcmM9e3NvbmcuY292ZXJ9IGFsdD1cIlwiLz48c3Bhbj48Yj57c29uZy50aXRsZX08L2I+PHNtYWxsPntzb25nLmFydGlzdH0gwrcge3NvbmcuYWxidW0gfHwgc29uZy5nZW5yZSB8fCAnTXVzaWNXYXZlJ308L3NtYWxsPjwvc3Bhbj48YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCk9PnBsYXlTb25nKHNvbmcpfSB0aXRsZT1cIlBsYXkgc29uZ1wiPjxQbGF5IHNpemU9ezE2fS8+PC9idXR0b24+PC9kaXY+KX17IXNoYXJlZFBsYXlsaXN0LnNvbmdzPy5sZW5ndGgmJjxwIGNsYXNzTmFtZT1cImVtcHR5LWlubGluZVwiPlRoaXMgcGxheWxpc3QgaGFzIG5vIHRyYWNrcyB5ZXQuPC9wPn08L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cIm91dGxpbmUtYnRuXCIgb25DbGljaz17KCk9Pnt3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sJycsd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtzZXRTaGFyZWRQbGF5bGlzdChudWxsKTtnbygnSG9tZScpfX0+RXhwbG9yZSBNdXNpY1dhdmU8L2J1dHRvbj48Lz59PC9kaXY+fVxuXG4gICAgICB7cGFnZSA9PT0gJ0xvZ2luJyB8fCBwYWdlID09PSAnU2lnbnVwJyA/IDxkaXYgY2xhc3NOYW1lPVwiYXV0aC13cmFwXCI+PGRpdiBjbGFzc05hbWU9XCJhdXRoLXBhbmVsXCI+PGRpdiBjbGFzc05hbWU9XCJhdXRoLW1hcmtcIj48QXVkaW9MaW5lcyBzaXplPXsyNX0vPjwvZGl2PjxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj57YXV0aE1vZGU9PT0nbG9naW4nPydXRUxDT01FIEJBQ0snOidTVEFSVCBZT1VSIENPTExFQ1RJT04nfTwvc3Bhbj48aDE+e2F1dGhNb2RlPT09J2xvZ2luJz8nR29vZCB0byBzZWUgeW91Lic6J0pvaW4gdGhlIHJoeXRobS4nfTwvaDE+PHA+e2F1dGhNb2RlPT09J2xvZ2luJz8nTG9nIGluIHRvIHBpY2sgdXAgcmlnaHQgd2hlcmUgeW91IGxlZnQgb2ZmLic6J0NyZWF0ZSBhbiBhY2NvdW50IGFuZCBtYWtlIE11c2ljV2F2ZSB5b3Vycy4nfTwvcD48Zm9ybSBvblN1Ym1pdD17YXV0aE1vZGU9PT0nbG9naW4nP2xvZ2luOnNpZ251cH0+PGxhYmVsPlVzZXJuYW1lPGlucHV0IHZhbHVlPXthdXRoTmFtZX0gb25DaGFuZ2U9e2U9PnNldEF1dGhOYW1lKGUudGFyZ2V0LnZhbHVlKX0gYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgdXNlcm5hbWVcIi8+PC9sYWJlbD48bGFiZWw+UGFzc3dvcmQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e2F1dGhQYXNzfSBvbkNoYW5nZT17ZT0+c2V0QXV0aFBhc3MoZS50YXJnZXQudmFsdWUpfSBhdXRvQ29tcGxldGU9e2F1dGhNb2RlPT09J2xvZ2luJz8nY3VycmVudC1wYXNzd29yZCc6J25ldy1wYXNzd29yZCd9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiQXQgbGVhc3QgNCBjaGFyYWN0ZXJzXCIvPjwvbGFiZWw+PGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biBhdXRoLXN1Ym1pdFwiPnthdXRoTW9kZT09PSdsb2dpbic/J0xvZyBpbic6J0NyZWF0ZSBhY2NvdW50J30gPHNwYW4+4oaSPC9zcGFuPjwvYnV0dG9uPjwvZm9ybT57YXV0aE1lc3NhZ2UmJjxwIGNsYXNzTmFtZT1cImZvcm0tbWVzc2FnZVwiPnthdXRoTWVzc2FnZX08L3A+fTxwIGNsYXNzTmFtZT1cImF1dGgtc3dpdGNoXCI+e2F1dGhNb2RlPT09J2xvZ2luJz9cIk5ldyB0byBNdXNpY1dhdmU/XCI6XCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn0gPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e3NldEF1dGhNb2RlKGF1dGhNb2RlPT09J2xvZ2luJz8nc2lnbnVwJzonbG9naW4nKTtzZXRBdXRoTWVzc2FnZSgnJyl9fT57YXV0aE1vZGU9PT0nbG9naW4nPydTaWduIHVwJzonTG9nIGluJ308L2J1dHRvbj48L3A+PHNtYWxsIGNsYXNzTmFtZT1cInN0b3JhZ2Utbm90ZVwiPkRlbW8gYXV0aGVudGljYXRpb24gwrcgc3RvcmVkIGluIHRoaXMgYnJvd3NlciBvbmx5PC9zbWFsbD48L2Rpdj48L2Rpdj46bnVsbH1cblxuICAgICAge3BhZ2UgPT09ICdQcm9maWxlJyAmJiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48UGFnZUludHJvIGV5ZWJyb3c9XCJZT1VSIEFDQ09VTlRcIiB0aXRsZT1cIllvdXIgc3BhY2UuXCIgc3VidGl0bGU9XCJZb3VyIE11c2ljV2F2ZSBhY2NvdW50IGRldGFpbHMuXCIvPjxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jYXJkXCI+PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiPnt1c2VyLnNsaWNlKDAsMSkudG9VcHBlckNhc2UoKX08L2Rpdj48ZGl2PjxoMj57dXNlcnx8J0d1ZXN0J308L2gyPjxwPk11c2ljV2F2ZSBsaXN0ZW5lcjwvcD48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cIm91dGxpbmUtYnRuXCIgb25DbGljaz17bG9nb3V0fT48TG9nT3V0IHNpemU9ezE2fS8+IExvZyBvdXQ8L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInN0YXRzLXJvd1wiPjxkaXY+PGI+e2Zhdm9yaXRlcy5sZW5ndGh9PC9iPjxzbWFsbD5GYXZvcml0ZXM8L3NtYWxsPjwvZGl2PjxkaXY+PGI+e3BsYXlsaXN0cy5sZW5ndGh9PC9iPjxzbWFsbD5QbGF5bGlzdHM8L3NtYWxsPjwvZGl2PjxkaXY+PGI+e3JlY2VudC5sZW5ndGh9PC9iPjxzbWFsbD5SZWNlbnQgdHJhY2tzPC9zbWFsbD48L2Rpdj48L2Rpdj48L2Rpdj59XG5cbiAgICAgIHtwYWdlID09PSAnQWRtaW4gbG9naW4nICYmIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC13cmFwXCI+PGRpdiBjbGFzc05hbWU9XCJhdXRoLXBhbmVsXCI+PGRpdiBjbGFzc05hbWU9XCJhdXRoLW1hcmtcIj48U2hpZWxkQ2hlY2sgc2l6ZT17MjV9Lz48L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJleWVicm93XCI+UkVTVFJJQ1RFRCBBUkVBPC9zcGFuPjxoMT5BZG1pbiBhY2Nlc3MuPC9oMT48cD5TaWduIGluIHRvIG1hbmFnZSB0aGUgTXVzaWNXYXZlIGNhdGFsb2cgYW5kIHVzZXJzLjwvcD48Zm9ybSBvblN1Ym1pdD17YWRtaW5Mb2dpbn0+PGxhYmVsPkFkbWluIHVzZXJuYW1lPGlucHV0IHZhbHVlPXthZG1pbk5hbWV9IG9uQ2hhbmdlPXtlPT5zZXRBZG1pbk5hbWUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkbWluIHVzZXJuYW1lXCIvPjwvbGFiZWw+PGxhYmVsPlBhc3N3b3JkPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXthZG1pblBhc3N9IG9uQ2hhbmdlPXtlPT5zZXRBZG1pblBhc3MoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFkbWluIHBhc3N3b3JkXCIvPjwvbGFiZWw+PGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biBhdXRoLXN1Ym1pdFwiPkVudGVyIGRhc2hib2FyZCDihpI8L2J1dHRvbj48L2Zvcm0+e2FkbWluTWVzc2FnZSYmPHAgY2xhc3NOYW1lPVwiZm9ybS1tZXNzYWdlXCI+e2FkbWluTWVzc2FnZX08L3A+fTxzbWFsbCBjbGFzc05hbWU9XCJzdG9yYWdlLW5vdGVcIj5EZW1vIGNyZWRlbnRpYWxzOiBhZG1pbiAvIGFkbWluMTIzPC9zbWFsbD48L2Rpdj48L2Rpdj59XG5cbiAgICAgIHtwYWdlID09PSAnQWRtaW4nICYmIGFkbWluICYmIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjxQYWdlSW50cm8gZXllYnJvdz1cIkNPTlRST0wgQ0VOVEVSXCIgdGl0bGU9XCJUaGUgYmFjayBvZmZpY2UuXCIgc3VidGl0bGU9XCJNYW5hZ2UgeW91ciBjYXRhbG9nIGFuZCBrZWVwIGFuIGV5ZSBvbiB5b3VyIGNvbW11bml0eS5cIi8+PGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zdGF0c1wiPjxkaXY+PHNwYW4+Q0FUQUxPRyBUUkFDS1M8L3NwYW4+PGI+e3NvbmdzLmxlbmd0aH08L2I+PE11c2ljMi8+PC9kaXY+PGRpdj48c3Bhbj5SRUdJU1RFUkVEIFVTRVJTPC9zcGFuPjxiPnt1c2Vycy5sZW5ndGh9PC9iPjxVc2Vycy8+PC9kaXY+PGRpdj48c3Bhbj5QTEFZTElTVFMgQ1JFQVRFRDwvc3Bhbj48Yj57cGxheWxpc3RzLmxlbmd0aH08L2I+PExpc3RNdXNpYy8+PC9kaXY+PGRpdj48c3Bhbj5PUEVOIFNVUFBPUlQgVElDS0VUUzwvc3Bhbj48Yj57c3VwcG9ydFRpY2tldHMuZmlsdGVyKHQ9PnQuc3RhdHVzPT09J09wZW4nKS5sZW5ndGh9PC9iPjxMaWZlQnVveS8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJhZG1pbi1ncmlkXCI+PHNlY3Rpb24gY2xhc3NOYW1lPVwiYWRtaW4tcGFuZWxcIj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPkNBVEFMT0cgTUFOQUdFTUVOVDwvc3Bhbj48aDI+QWRkIGEgdHJhY2s8L2gyPjwvZGl2PjwvZGl2Pjxmb3JtIGNsYXNzTmFtZT1cImFkbWluLWZvcm1cIiBvblN1Ym1pdD17YWRkU29uZ30+PGxhYmVsPlRyYWNrIHRpdGxlPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiU29uZyB0aXRsZVwiLz48L2xhYmVsPjxsYWJlbD5BcnRpc3Q8aW5wdXQgbmFtZT1cImFydGlzdFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiQXJ0aXN0IG5hbWVcIi8+PC9sYWJlbD48bGFiZWw+R2VucmU8c2VsZWN0IG5hbWU9XCJnZW5yZVwiPjxvcHRpb24+UG9wPC9vcHRpb24+PG9wdGlvbj5Sb2NrPC9vcHRpb24+PG9wdGlvbj5FbGVjdHJvbmljPC9vcHRpb24+PG9wdGlvbj5KYXp6PC9vcHRpb24+PG9wdGlvbj5JbmRpZTwvb3B0aW9uPjxvcHRpb24+QW1iaWVudDwvb3B0aW9uPjxvcHRpb24+SG91c2U8L29wdGlvbj48L3NlbGVjdD48L2xhYmVsPjxsYWJlbD5BdWRpbyBVUkw8aW5wdXQgbmFtZT1cImF1ZGlvXCIgdHlwZT1cInVybFwiIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly8uLi4gKG9wdGlvbmFsKVwiLz48L2xhYmVsPjxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIj48UGx1cyBzaXplPXsxNn0vPiBBZGQgdG8gY2F0YWxvZzwvYnV0dG9uPjwvZm9ybT48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3NOYW1lPVwiYWRtaW4tcGFuZWxcIj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPkNPTU1VTklUWTwvc3Bhbj48aDI+UmVnaXN0ZXJlZCB1c2VyczwvaDI+PC9kaXY+PC9kaXY+e3VzZXJzLmxlbmd0aD91c2Vycy5tYXAodT0+PGRpdiBjbGFzc05hbWU9XCJhZG1pbi11c2VyXCIga2V5PXt1LnVzZXJuYW1lfT48c3BhbiBjbGFzc05hbWU9XCJhdmF0YXJcIj57dS51c2VybmFtZS5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCl9PC9zcGFuPjxzcGFuPjxiPnt1LnVzZXJuYW1lfTwvYj48c21hbGw+TGlzdGVuZXIgYWNjb3VudDwvc21hbGw+PC9zcGFuPjxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG4gZGFuZ2VyXCIgb25DbGljaz17KCk9PmRlbGV0ZVVzZXIodS51c2VybmFtZSl9IHRpdGxlPVwiUmVtb3ZlIHVzZXJcIj48VHJhc2gyIHNpemU9ezE2fS8+PC9idXR0b24+PC9kaXY+KTo8cCBjbGFzc05hbWU9XCJlbXB0eS1pbmxpbmVcIj5ObyByZWdpc3RlcmVkIHVzZXJzIHlldC48L3A+fTwvc2VjdGlvbj48L2Rpdj48c2VjdGlvbiBjbGFzc05hbWU9XCJhZG1pbi1wYW5lbCBzdXBwb3J0LWFkbWluLXBhbmVsXCI+PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj48ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImV5ZWJyb3dcIj5DVVNUT01FUiBDQVJFPC9zcGFuPjxoMj5IZWxwICYgU3VwcG9ydCB0aWNrZXRzICh7c3VwcG9ydFRpY2tldHMubGVuZ3RofSk8L2gyPjwvZGl2PjwvZGl2PntzdXBwb3J0VGlja2V0cy5sZW5ndGg/c3VwcG9ydFRpY2tldHMubWFwKHQ9PjxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tdGlja2V0XCIga2V5PXt0LmlkfT48ZGl2IGNsYXNzTmFtZT1cImFkbWluLXRpY2tldC1tYWluXCI+PGRpdj48Yj57dC5zdWJqZWN0fTwvYj48c21hbGw+e3QudXNlcm5hbWV9IMK3IHtuZXcgRGF0ZSh0LmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX08L3NtYWxsPjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17YHRpY2tldC1zdGF0dXMgJHt0LnN0YXR1cy50b0xvd2VyQ2FzZSgpfWB9Pnt0LnN0YXR1c308L3NwYW4+PC9kaXY+PHA+e3QubWVzc2FnZX08L3A+PGRpdiBjbGFzc05hbWU9XCJ0aWNrZXQtYWN0aW9uc1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZS1idG5cIiBvbkNsaWNrPXsoKT0+dXBkYXRlVGlja2V0U3RhdHVzKHQuaWQsdC5zdGF0dXM9PT0nT3Blbic/J1Jlc29sdmVkJzonT3BlbicpfT48Q2hlY2tDaXJjbGUyIHNpemU9ezE0fS8+e3Quc3RhdHVzPT09J09wZW4nPydNYXJrIHJlc29sdmVkJzonUmVvcGVuIHRpY2tldCd9PC9idXR0b24+PGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0biBkYW5nZXJcIiBvbkNsaWNrPXsoKT0+ZGVsZXRlVGlja2V0KHQuaWQpfSB0aXRsZT1cIkRlbGV0ZSB0aWNrZXRcIj48VHJhc2gyIHNpemU9ezE2fS8+PC9idXR0b24+PC9kaXY+PC9kaXY+KTo8cCBjbGFzc05hbWU9XCJlbXB0eS1pbmxpbmVcIj5ObyBzdXBwb3J0IHJlcXVlc3RzIGhhdmUgYmVlbiBzdWJtaXR0ZWQgeWV0LjwvcD59PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzTmFtZT1cImFkbWluLXBhbmVsIGNhdGFsb2ctcGFuZWxcIj48ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPkFMTCBUUkFDS1M8L3NwYW4+PGgyPkNhdGFsb2cgKHtzb25ncy5sZW5ndGh9KTwvaDI+PC9kaXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJvdXRsaW5lLWJ0blwiIG9uQ2xpY2s9e2FkbWluTG9nb3V0fT48TG9nT3V0IHNpemU9ezE1fS8+IEFkbWluIGxvZ291dDwvYnV0dG9uPjwvZGl2Pntzb25ncy5tYXAocz0+PGRpdiBjbGFzc05hbWU9XCJ0cmFjay1yb3dcIiBrZXk9e3MuaWR9PjxpbWcgc3JjPXtzLmNvdmVyfS8+PHNwYW4+PGI+e3MudGl0bGV9PC9iPjxzbWFsbD57cy5hcnRpc3R9IMK3IHtzLmdlbnJlfTwvc21hbGw+PC9zcGFuPjxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG4gZGFuZ2VyXCIgb25DbGljaz17KCk9PmRlbGV0ZVNvbmcocy5pZCl9PjxUcmFzaDIgc2l6ZT17MTZ9Lz48L2J1dHRvbj48L2Rpdj4pfTwvc2VjdGlvbj48L2Rpdj59XG4gICAgICB7cGFnZSA9PT0gJ0FkbWluJyAmJiAhYWRtaW4gJiYgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPjxTaGllbGRDaGVjay8+PGgzPkFkbWluIHNlc3Npb24gcmVxdWlyZWQ8L2gzPjxwPlNpZ24gaW4gdG8gYWNjZXNzIHRoZSBjb250cm9sIGNlbnRlci48L3A+PGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiIG9uQ2xpY2s9eygpPT5nbygnQWRtaW4gbG9naW4nKX0+QWRtaW4gbG9naW48L2J1dHRvbj48L2Rpdj48L2Rpdj59XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPjxzcGFuPsKpIDIwMjYgTVVTSUNXQVZFPC9zcGFuPjxzcGFuPk1BREUgRk9SIFRIRSBMT1ZFIE9GIFNPVU5EIDxBdWRpb0xpbmVzIHNpemU9ezE0fS8+PC9zcGFuPjwvZm9vdGVyPlxuICAgIDwvbWFpbj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci10cmFja1wiPntjdXJyZW50Pzw+PGltZyBzcmM9e2N1cnJlbnQuY292ZXJ9Lz48c3Bhbj48Yj57Y3VycmVudC50aXRsZX08L2I+PHNtYWxsPntjdXJyZW50LmFydGlzdH08L3NtYWxsPjwvc3Bhbj48YnV0dG9uIGNsYXNzTmFtZT17YGljb24tYnRuICR7ZmF2b3JpdGVzLmluY2x1ZGVzKGN1cnJlbnQuaWQpPydsaWtlZCc6Jyd9YH0gb25DbGljaz17KCk9PnRvZ2dsZUZhdm9yaXRlKGN1cnJlbnQuaWQpfT48SGVhcnQgc2l6ZT17MTd9IGZpbGw9e2Zhdm9yaXRlcy5pbmNsdWRlcyhjdXJyZW50LmlkKT8nY3VycmVudENvbG9yJzonbm9uZSd9Lz48L2J1dHRvbj48Lz46PD48ZGl2IGNsYXNzTmFtZT1cInBsYXllci1wbGFjZWhvbGRlclwiPjxNdXNpYzIvPjwvZGl2PjxzcGFuPjxiPkNob29zZSBhIHRyYWNrPC9iPjxzbWFsbD5Zb3VyIHNvdW5kdHJhY2sgc3RhcnRzIGhlcmU8L3NtYWxsPjwvc3Bhbj48Lz59PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1jZW50ZXJcIj48ZGl2IGNsYXNzTmFtZT1cInBsYXllci1idXR0b25zXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9eygpPT5zdGVwU29uZygtMSl9PjxTa2lwQmFjayBzaXplPXsxOH0gZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L2J1dHRvbj48YnV0dG9uIGNsYXNzTmFtZT1cInBsYXktYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGxheX0+e3BsYXlpbmc/PFBhdXNlIHNpemU9ezE5fSBmaWxsPVwiY3VycmVudENvbG9yXCIvPjo8UGxheSBzaXplPXsxOX0gZmlsbD1cImN1cnJlbnRDb2xvclwiLz59PC9idXR0b24+PGJ1dHRvbiBjbGFzc05hbWU9XCJpY29uLWJ0blwiIG9uQ2xpY2s9eygpPT5zdGVwU29uZygxKX0+PFNraXBGb3J3YXJkIHNpemU9ezE4fSBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtbGluZVwiPjxzcGFuPntmbXQoY3VycmVudFRpbWUpfTwvc3Bhbj48aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD17ZHVyYXRpb258fDEwMH0gdmFsdWU9e01hdGgubWluKGN1cnJlbnRUaW1lLGR1cmF0aW9ufHwxMDApfSBvbkNoYW5nZT17ZT0+e2lmKGF1ZGlvUmVmLmN1cnJlbnQpe2F1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU9TnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtzZXRDdXJyZW50VGltZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX19fS8+PHNwYW4+e2ZtdChkdXJhdGlvbil9PC9zcGFuPjwvZGl2PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItZXh0cmFcIj48Vm9sdW1lSWNvbi8+PGlucHV0IGFyaWEtbGFiZWw9XCJWb2x1bWVcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIuMDFcIiB2YWx1ZT17dm9sdW1lfSBvbkNoYW5nZT17ZT0+c2V0Vm9sdW1lKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfS8+PGJ1dHRvbiBjbGFzc05hbWU9e2BpY29uLWJ0biAke3NsZWVwVGltZXJBY3RpdmU/J3RpbWVyLWFjdGl2ZSc6Jyd9YH0gb25DbGljaz17KCk9PmdvKCdTbGVlcCBUaW1lcicpfSB0aXRsZT17c2xlZXBUaW1lckFjdGl2ZT9gU2xlZXAgdGltZXI6ICR7c2xlZXBUaW1lTGFiZWx9YDonU2xlZXAgdGltZXInfT48VGltZXIgc2l6ZT17MTh9Lz48L2J1dHRvbj48YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuXCIgb25DbGljaz17KCk9PmdvKCdQbGF5bGlzdHMnKX0+PExpc3RNdXNpYyBzaXplPXsxOH0vPjwvYnV0dG9uPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSB2b2x1bWU9e3ZvbHVtZX0gb25UaW1lVXBkYXRlPXtlPT5zZXRDdXJyZW50VGltZShlLmN1cnJlbnRUYXJnZXQuY3VycmVudFRpbWUpfSBvbkxvYWRlZE1ldGFkYXRhPXtlPT5zZXREdXJhdGlvbihlLmN1cnJlbnRUYXJnZXQuZHVyYXRpb258fDApfSBvbkVuZGVkPXsoKT0+c3RlcFNvbmcoMSl9IG9uUGxheT17KCk9PnNldFBsYXlpbmcodHJ1ZSl9IG9uUGF1c2U9eygpPT5zZXRQbGF5aW5nKGZhbHNlKX0vPlxuICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gVm9sdW1lSWNvbigpe3JldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ2b2x1bWUtZ2x5cGhcIj7il5YpKTwvc3Bhbj59XG5mdW5jdGlvbiBQYWdlSW50cm8oe2V5ZWJyb3csdGl0bGUsc3VidGl0bGV9KXtyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWludHJvXCI+PHNwYW4gY2xhc3NOYW1lPVwiZXllYnJvd1wiPntleWVicm93fTwvc3Bhbj48aDE+e3RpdGxlfTwvaDE+PHA+e3N1YnRpdGxlfTwvcD48L2Rpdj59XG5mdW5jdGlvbiBTb25nQ2FyZCh7c29uZyxpbmRleCxwbGF5aW5nLGZhdm9yaXRlLHJhdGluZyxvblBsYXksb25GYXZvcml0ZSxvblJhdGUsb25BZGR9KXtcbiAgcmV0dXJuIDxhcnRpY2xlIGNsYXNzTmFtZT1cInNvbmctY2FyZFwiPjxkaXYgY2xhc3NOYW1lPVwiY292ZXItd3JhcFwiPjxpbWcgc3JjPXtzb25nLmNvdmVyfSBhbHQ9e2Ake3NvbmcuYWxidW19IGNvdmVyYH0vPjxidXR0b24gY2xhc3NOYW1lPVwiY292ZXItcGxheVwiIG9uQ2xpY2s9eygpPT5vblBsYXkoc29uZyl9PntwbGF5aW5nPzxQYXVzZSBzaXplPXsyMH0gZmlsbD1cImN1cnJlbnRDb2xvclwiLz46PFBsYXkgc2l6ZT17MjB9IGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+fTwvYnV0dG9uPjxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLW51bWJlclwiPntTdHJpbmcoaW5kZXgrMSkucGFkU3RhcnQoMiwnMCcpfTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInNvbmctbWV0YVwiPjxkaXY+PGgzPntzb25nLnRpdGxlfTwvaDM+PHA+e3NvbmcuYXJ0aXN0fTwvcD48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT17YGhlYXJ0LWJ0biAke2Zhdm9yaXRlPydsaWtlZCc6Jyd9YH0gb25DbGljaz17KCk9Pm9uRmF2b3JpdGUoc29uZy5pZCl9IGFyaWEtbGFiZWw9XCJUb2dnbGUgZmF2b3JpdGVcIj48SGVhcnQgc2l6ZT17MTh9IGZpbGw9e2Zhdm9yaXRlPydjdXJyZW50Q29sb3InOidub25lJ30vPjwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic29uZy1jYXJkLWJvdHRvbVwiPjxzcGFuPntzb25nLmdlbnJlfTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPntbMSwyLDMsNCw1XS5tYXAobj0+PGJ1dHRvbiBrZXk9e259IGFyaWEtbGFiZWw9e2BSYXRlICR7bn0gc3RhcnNgfSBvbkNsaWNrPXsoKT0+b25SYXRlKHNvbmcuaWQsbil9IGNsYXNzTmFtZT17bjw9cmF0aW5nPydyYXRlZCc6Jyd9PjxTdGFyIHNpemU9ezEyfSBmaWxsPXtuPD1yYXRpbmc/J2N1cnJlbnRDb2xvcic6J25vbmUnfS8+PC9idXR0b24+KX08L2Rpdj48L2Rpdj48YnV0dG9uIGNsYXNzTmFtZT1cImFkZC10cmFja1wiIG9uQ2xpY2s9eygpPT5vbkFkZChzb25nLmlkKX0+PFBsdXMgc2l6ZT17MTN9Lz4gQWRkIHRvIHBsYXlsaXN0PC9idXR0b24+PC9hcnRpY2xlPlxufVxuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcig8UmVhY3QuU3RyaWN0TW9kZT48QXBwLz48L1JlYWN0LlN0cmljdE1vZGU+KVxuIl0sImZpbGUiOiJDOi9Vc2Vycy9IUC9Eb2N1bWVudHMvRG93bmxvYWRzL211c2ljd2F2ZS1zbGVlcC10aW1lci9td19zbGVlcC9zcmMvbWFpbi5qc3gifQ==