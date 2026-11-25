import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Headphones, Search, Play, Pause, SkipBack, SkipForward, Heart, ListMusic,
  UserRound, ShieldCheck, LogOut, Music2, Disc3, Mic2, Clock3, Star,
  Plus, Trash2, Download, X, Menu, Home, Library, Users, AudioLines, Share2, Timer, LifeBuoy, CheckCircle2, MessageCircle
} from 'lucide-react'
import './styles.css'

const seedSongs = [
  { id: 's1', title: 'Midnight City', artist: 'M83', genre: 'Electronic', album: 'Hurry Up, We’re Dreaming', cover: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 's2', title: 'Golden Hour', artist: 'JVKE', genre: 'Pop', album: 'Golden Hour', cover: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 's3', title: 'Ocean Drive', artist: 'Duke Dumont', genre: 'House', album: 'Blasé Boys Club', cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 's4', title: 'Weightless', artist: 'Marconi Union', genre: 'Ambient', album: 'Weightless', cover: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 's5', title: 'Night Changes', artist: 'One Direction', genre: 'Pop', album: 'FOUR', cover: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: 's6', title: 'Stargazing', artist: 'The Neighbourhood', genre: 'Alternative', album: 'I Love You.', cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: 's7', title: 'Sunset Lover', artist: 'Petit Biscuit', genre: 'Electronic', album: 'Presence', cover: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { id: 's8', title: 'Bloom', artist: 'The Paper Kites', genre: 'Indie', album: 'Woodland', cover: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=85', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
]
const read = (key, fallback) => {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback } catch { return fallback }
}
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value))
const fmt = n => `${Math.floor((n || 0) / 60)}:${String(Math.floor((n || 0) % 60)).padStart(2, '0')}`

function App() {
  const [songs, setSongs] = useState(() => read('mw_songs', seedSongs))
  const [users, setUsers] = useState(() => read('mw_users', []))
  const [user, setUser] = useState(() => localStorage.getItem('mw_session') || '')
  const [admin, setAdmin] = useState(() => localStorage.getItem('mw_admin') === 'true')
  const [sharedPlaylist, setSharedPlaylist] = useState(() => {
    try { const raw = new URLSearchParams(window.location.search).get('sharedPlaylist'); return raw ? JSON.parse(raw) : null } catch { return null }
  })
  const [shareMessage, setShareMessage] = useState('')
  const [page, setPage] = useState(() => { try { return new URLSearchParams(window.location.search).has('sharedPlaylist') ? 'Shared playlist' : 'Home' } catch { return 'Home' } })
  const [authMode, setAuthMode] = useState('login')
  const [authName, setAuthName] = useState('')
  const [authPass, setAuthPass] = useState('')
  const [authMessage, setAuthMessage] = useState('')
  const [adminName, setAdminName] = useState('')
  const [adminPass, setAdminPass] = useState('')
  const [adminMessage, setAdminMessage] = useState('')
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('All')
  const [favorites, setFavorites] = useState(() => read('mw_favorites', []))
  const [ratings, setRatings] = useState(() => read('mw_ratings', {}))
  const [playlists, setPlaylists] = useState(() => read('mw_playlists', []))
  const [recent, setRecent] = useState(() => read('mw_recent', []))
  const [supportTickets, setSupportTickets] = useState(() => read('mw_support_tickets', []))
  const [supportSubject, setSupportSubject] = useState('Technical issue')
  const [supportMessage, setSupportMessage] = useState('')
  const [supportNotice, setSupportNotice] = useState('')
  const [playlistName, setPlaylistName] = useState('')
  const [activePlaylist, setActivePlaylist] = useState('')
  const [currentId, setCurrentId] = useState('')
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [sleepMinutes, setSleepMinutes] = useState(30)
  const [sleepRemaining, setSleepRemaining] = useState(0)
  const [sleepTimerActive, setSleepTimerActive] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const audioRef = useRef(null)
  const fileRef = useRef(null)

  useEffect(() => write('mw_songs', songs), [songs])
  useEffect(() => write('mw_users', users), [users])
  useEffect(() => write('mw_favorites', favorites), [favorites])
  useEffect(() => write('mw_ratings', ratings), [ratings])
  useEffect(() => write('mw_playlists', playlists), [playlists])
  useEffect(() => write('mw_recent', recent), [recent])
  useEffect(() => write('mw_support_tickets', supportTickets), [supportTickets])

  // Count down once per second; pause the current track when the timer expires.
  useEffect(() => {
    if (!sleepTimerActive) return undefined
    const timerId = window.setInterval(() => {
      setSleepRemaining(previous => {
        if (previous <= 1) {
          audioRef.current?.pause()
          setPlaying(false)
          setSleepTimerActive(false)
          return 0
        }
        return previous - 1
      })
    }, 1000)
    return () => window.clearInterval(timerId)
  }, [sleepTimerActive])

  const current = songs.find(s => s.id === currentId) || sharedPlaylist?.songs?.find(s => s.id === currentId)
  const genres = ['All', ...new Set(songs.map(s => s.genre).filter(Boolean))]
  const visibleSongs = useMemo(() => songs.filter(s =>
    (genre === 'All' || s.genre === genre) &&
    `${s.title} ${s.artist} ${s.album} ${s.genre}`.toLowerCase().includes(query.toLowerCase())
  ), [songs, genre, query])

  const playSong = async song => {
    const audio = audioRef.current
    if (!audio) return
    if (currentId !== song.id) {
      setCurrentId(song.id)
      setCurrentTime(0)
      setRecent(prev => [song.id, ...prev.filter(id => id !== song.id)].slice(0, 6))
      audio.src = song.audio
      audio.load()
    }
    try { await audio.play(); setPlaying(true) } catch { setPlaying(false) }
  }
  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (!current && songs[0]) { await playSong(songs[0]); return }
    if (audio.paused) { try { await audio.play(); setPlaying(true) } catch { setPlaying(false) } }
    else { audio.pause(); setPlaying(false) }
  }
  const stepSong = direction => {
    if (!songs.length) return
    const index = Math.max(0, songs.findIndex(s => s.id === currentId))
    const next = (index + direction + songs.length) % songs.length
    playSong(songs[next])
  }
  const toggleFavorite = id => {
    if (!user) { setAuthMode('login'); setPage('Login'); setAuthMessage('Please log in to save favorites.'); return }
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }
  const signup = e => {
    e.preventDefault()
    const name = authName.trim()
    if (name.length < 3 || authPass.length < 4) return setAuthMessage('Use a username (3+ characters) and password (4+ characters).')
    if (users.some(u => u.username.toLowerCase() === name.toLowerCase())) return setAuthMessage('That username is already registered.')
    const next = [...users, { username: name, password: authPass, joined: new Date().toISOString() }]
    setUsers(next); localStorage.setItem('mw_session', name); setUser(name); setAuthMessage('Account created. Welcome to MusicWave!'); setPage('Home'); setAuthName(''); setAuthPass('')
  }
  const login = e => {
    e.preventDefault()
    const found = users.find(u => u.username.toLowerCase() === authName.trim().toLowerCase() && u.password === authPass)
    if (!found) return setAuthMessage('Incorrect username or password.')
    localStorage.setItem('mw_session', found.username); setUser(found.username); setAuthMessage(''); setPage('Home'); setAuthName(''); setAuthPass('')
  }
  const logout = () => { localStorage.removeItem('mw_session'); setUser(''); setPage('Home') }
  const adminLogin = e => {
    e.preventDefault()
    if (adminName === 'admin' && adminPass === 'admin123') {
      localStorage.setItem('mw_admin', 'true'); setAdmin(true); setPage('Admin'); setAdminMessage('')
    } else setAdminMessage('Invalid admin username or password.')
  }
  const adminLogout = () => { localStorage.removeItem('mw_admin'); setAdmin(false); setPage('Home') }
  const createPlaylist = e => {
    e.preventDefault()
    if (!user) { setPage('Login'); setAuthMode('login'); return }
    if (!playlistName.trim()) return
    const item = { id: crypto.randomUUID(), name: playlistName.trim(), songs: [] }
    setPlaylists(prev => [...prev, item]); setActivePlaylist(item.id); setPlaylistName('')
  }
  const addToPlaylist = id => {
    if (!user) { setPage('Login'); setAuthMode('login'); return }
    if (!playlists.length) { setPage('Playlists'); return }
    const target = playlists[0]
    setPlaylists(prev => prev.map(p => p.id === target.id && !p.songs.includes(id) ? { ...p, songs: [...p.songs, id] } : p))
    setActivePlaylist(target.id)
  }
  const sharePlaylist = async playlist => {
    const tracks = playlist.songs.map(id => songs.find(song => song.id === id)).filter(Boolean).map(({id,title,artist,album,genre,cover,audio}) => ({id,title,artist,album,genre,cover,audio}))
    const payload = { name: playlist.name, owner: user || 'MusicWave listener', songs: tracks }
    const url = `${window.location.origin}${window.location.pathname}?sharedPlaylist=${encodeURIComponent(JSON.stringify(payload))}`
    try {
      if (navigator.share) await navigator.share({ title: `${playlist.name} · MusicWave`, text: 'Listen to this playlist on MusicWave', url })
      else { await navigator.clipboard.writeText(url); setShareMessage('Playlist link copied! Send it to your friends.') }
    } catch (error) {
      if (error?.name !== 'AbortError') {
        try { await navigator.clipboard.writeText(url); setShareMessage('Playlist link copied! Send it to your friends.') }
        catch { setShareMessage('Could not copy automatically. Your browser may block clipboard access.') }
      }
    }
  }
  const updateRating = (id, value) => setRatings(prev => ({ ...prev, [id]: value }))
  const submitSupportTicket = e => {
    e.preventDefault()
    if (!user) { setSupportNotice('Please log in before submitting a support request.'); setAuthMode('login'); setPage('Login'); return }
    if (!supportMessage.trim()) return
    const ticket = { id: crypto.randomUUID(), username: user, subject: supportSubject, message: supportMessage.trim(), status: 'Open', createdAt: new Date().toISOString() }
    setSupportTickets(prev => [ticket, ...prev]); setSupportMessage('')
    setSupportNotice('Your support request was submitted successfully.')
  }
  const updateTicketStatus = (id, status) => setSupportTickets(prev => prev.map(ticket => ticket.id === id ? { ...ticket, status } : ticket))
  const deleteTicket = id => setSupportTickets(prev => prev.filter(ticket => ticket.id !== id))
  const addSong = e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const title = String(data.get('title') || '').trim()
    const artist = String(data.get('artist') || '').trim()
    if (!title || !artist) return
    setSongs(prev => [...prev, { id: crypto.randomUUID(), title, artist, genre: String(data.get('genre') || 'Pop'), album: 'Single', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=85', audio: String(data.get('audio') || seedSongs[0].audio) }])
    e.currentTarget.reset()
  }
  const deleteSong = id => {
    setSongs(prev => prev.filter(s => s.id !== id))
    setFavorites(prev => prev.filter(x => x !== id))
    setPlaylists(prev => prev.map(p => ({ ...p, songs: p.songs.filter(x => x !== id) })))
    if (currentId === id) { audioRef.current?.pause(); setCurrentId(''); setPlaying(false) }
  }
  const deleteUser = name => {
    setUsers(prev => prev.filter(u => u.username !== name))
    if (user === name) logout()
  }
  const go = target => { setPage(target); setMobileNav(false); setQuery('') }
  const startSleepTimer = () => {
    if (!current) { setPage('Sleep Timer'); return }
    setSleepRemaining(sleepMinutes * 60)
    setSleepTimerActive(true)
  }
  const cancelSleepTimer = () => { setSleepTimerActive(false); setSleepRemaining(0) }
  const sleepTimeLabel = `${String(Math.floor(sleepRemaining / 60)).padStart(2, '0')}:${String(sleepRemaining % 60).padStart(2, '0')}`
  const navItems = [
    ['Home', Home], ['Discover', Search], ['Albums', Disc3], ['Artists', Mic2],
    ['Favorites', Heart], ['Playlists', ListMusic], ['Recently played', Clock3], ['Sleep Timer', Timer], ['Help & Support', LifeBuoy]
  ]

  return <div className="app-shell">
    <aside className={`sidebar ${mobileNav ? 'open' : ''}`}>
      <button className="brand" onClick={() => go('Home')}><span className="brand-icon"><AudioLines size={22}/></span> music<span>wave</span></button>
      <div className="nav-caption">MENU</div>
      <nav>{navItems.map(([label, Icon]) => <button key={label} className={`nav-link ${page === label ? 'active' : ''}`} onClick={() => go(label)}><Icon size={18}/>{label}</button>)}</nav>
      <div className="sidebar-bottom">
        <div className="upgrade-card"><div className="upgrade-orb"><Headphones size={22}/></div><strong>Your sound, your space.</strong><p>Build a library that feels like you.</p><button onClick={() => user ? go('Playlists') : go('Signup')}>Get started <span>↗</span></button></div>
        <button className={`nav-link ${page === 'Admin' || page === 'Admin login' ? 'active' : ''}`} onClick={() => go(admin ? 'Admin' : 'Admin login')}><ShieldCheck size={18}/>Admin module</button>
        <button className="nav-link" onClick={() => user ? go('Profile') : go('Login')}><UserRound size={18}/>{user || 'My account'}</button>
      </div>
    </aside>

    <main className="main-area">
      <header className="topbar">
        <button className="mobile-menu icon-btn" onClick={() => setMobileNav(v => !v)}><Menu/></button>
        <div className="breadcrumb">Your library <span>/</span> <b>{page}</b></div>
        <label className="search-box"><Search size={17}/><input value={query} onChange={e => { setQuery(e.target.value); if (page !== 'Discover') setPage('Discover') }} placeholder="Search songs, artists, albums..." /><kbd>⌘ K</kbd></label>
        <div className="top-actions">
          {user ? <button className="user-chip" onClick={() => go('Profile')}><span className="avatar">{user.slice(0,1).toUpperCase()}</span><span>{user}</span></button> : <><button className="text-btn" onClick={() => {setAuthMode('login');go('Login')}}>Log in</button><button className="primary-btn small" onClick={() => {setAuthMode('signup');go('Signup')}}>Sign up</button></>}
          <button className="outline-btn admin-shortcut" title="Open Admin module" onClick={() => go(admin ? 'Admin' : 'Admin login')}><ShieldCheck size={16}/> Admin</button>
        </div>
      </header>

      {page === 'Home' && <div className="content">
        <section className="hero-card">
          <div className="hero-copy"><span className="eyebrow"><span className="pulse"/> YOUR DAILY SOUNDTRACK</span><h1>Find your<br/><em>own rhythm.</em></h1><p>Fresh discoveries, familiar favorites, and everything in between. Your next obsession starts here.</p><button className="primary-btn" onClick={() => go('Discover')}>Explore music <span>↗</span></button></div>
          <div className="hero-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="hero-disc"><div className="disc-label"><AudioLines size={36}/></div></div><div className="floating-note note-a">♫</div><div className="floating-note note-b">♪</div><div className="hero-tag">NOW PLAYING<br/><b>GOOD VIBRATIONS</b></div></div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </section>
        <section className="section-block"><div className="section-heading"><div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Made for this moment</h2></div><button className="see-all" onClick={() => go('Discover')}>View all <span>→</span></button></div><div className="song-grid">{songs.slice(0,4).map((s,i) => <SongCard key={s.id} song={s} index={i} playing={currentId===s.id&&playing} favorite={favorites.includes(s.id)} rating={ratings[s.id]||0} onPlay={playSong} onFavorite={toggleFavorite} onRate={updateRating} onAdd={addToPlaylist}/>)}</div></section>
        <section className="section-block"><div className="section-heading"><div><span className="eyebrow">PICK UP WHERE YOU LEFT OFF</span><h2>Recently played</h2></div><button className="see-all" onClick={() => go('Recently played')}>See history →</button></div><div className="recent-row">{recent.length ? recent.map(id => songs.find(s=>s.id===id)).filter(Boolean).slice(0,5).map(s=><button className="recent-item" key={s.id} onClick={()=>playSong(s)}><img src={s.cover}/><span><b>{s.title}</b><small>{s.artist}</small></span><Play size={15}/></button>) : <p className="empty-inline">Your listening history will show up here.</p>}</div></section>
      </div>}

      {['Discover','Albums','Artists','Favorites','Recently played'].includes(page) && <div className="content">
        <PageIntro eyebrow={page==='Discover'?'THE MUSIC UNIVERSE':'YOUR COLLECTION'} title={page==='Discover'?'Explore the sound.':page==='Albums'?'Albums worth a replay.':page==='Artists'?'Meet your new favorites.':page==='Favorites'?'Your all-time loves.':'Back in the groove.'} subtitle={page==='Discover'?'Search the catalog and find something that moves you.':`A little more of what makes ${user || 'you'} feel something.`}/>
        {page === 'Discover' && <div className="filter-row">{genres.map(g=><button key={g} className={`filter-chip ${genre===g?'selected':''}`} onClick={()=>setGenre(g)}>{g}</button>)}</div>}
        {page === 'Albums' ? <div className="collection-grid">{[...new Set(songs.map(s=>s.album))].map(album=>{const s=songs.find(x=>x.album===album);return <button className="album-tile" key={album} onClick={()=>{setQuery(album);setPage('Discover')}}><img src={s.cover}/><b>{album}</b><small>{s.artist}</small></button>})}</div> :
        page === 'Artists' ? <div className="collection-grid artist-grid">{[...new Set(songs.map(s=>s.artist))].map(artist=>{const s=songs.find(x=>x.artist===artist);return <button className="artist-tile" key={artist} onClick={()=>{setQuery(artist);setPage('Discover')}}><img src={s.cover}/><b>{artist}</b><small>{songs.filter(x=>x.artist===artist).length} track(s)</small></button>})}</div> :
        <div className="song-grid">{(page==='Favorites'?songs.filter(s=>favorites.includes(s.id)):page==='Recently played'?recent.map(id=>songs.find(s=>s.id===id)).filter(Boolean):visibleSongs).map((s,i)=><SongCard key={s.id} song={s} index={i} playing={currentId===s.id&&playing} favorite={favorites.includes(s.id)} rating={ratings[s.id]||0} onPlay={playSong} onFavorite={toggleFavorite} onRate={updateRating} onAdd={addToPlaylist}/>)}</div>}
        {page==='Discover' && !visibleSongs.length && <div className="empty-state"><Search size={28}/><h3>No tracks found</h3><p>Try another title, artist or genre.</p></div>}
        {page==='Favorites' && !favorites.length && <div className="empty-state"><Heart size={28}/><h3>Your favorites live here</h3><p>Tap the heart on any track to save it.</p></div>}
      </div>}

      {page === 'Playlists' && <div className="content"><PageIntro eyebrow="CURATED BY YOU" title="Your playlists." subtitle="Make a collection for every version of you."/><form className="create-playlist" onSubmit={createPlaylist}><input value={playlistName} onChange={e=>setPlaylistName(e.target.value)} placeholder="Name your new playlist"/><button className="primary-btn"><Plus size={17}/> Create playlist</button></form><div className="playlist-layout"><div className="playlist-list">{playlists.map(p=><button key={p.id} className={`playlist-row ${activePlaylist===p.id?'selected':''}`} onClick={()=>setActivePlaylist(p.id)}><span className="playlist-cover"><ListMusic/></span><span><b>{p.name}</b><small>{p.songs.length} tracks</small></span><span className="row-arrow">→</span></button>)}{!playlists.length&&<div className="empty-state"><ListMusic/><h3>No playlists yet</h3><p>Create one above, then add tracks from Discover.</p></div>}</div><div className="playlist-detail">{activePlaylist&&playlists.find(p=>p.id===activePlaylist)?<><div className="section-heading"><div><span className="eyebrow">NOW CURATING</span><h2>{playlists.find(p=>p.id===activePlaylist).name}</h2><p className="share-note">Free playlist sharing · No premium required</p></div><div className="playlist-actions"><button className="outline-btn" onClick={()=>sharePlaylist(playlists.find(p=>p.id===activePlaylist))}><Share2 size={15}/> Share playlist</button><button className="icon-btn danger" onClick={()=>{setPlaylists(p=>p.filter(x=>x.id!==activePlaylist));setActivePlaylist('')}}><Trash2 size={17}/></button></div></div>{shareMessage&&<p className="form-message">{shareMessage}</p>}{playlists.find(p=>p.id===activePlaylist).songs.map(id=>songs.find(s=>s.id===id)).filter(Boolean).map(s=><div className="track-row" key={s.id}><img src={s.cover}/><span><b>{s.title}</b><small>{s.artist}</small></span><button className="icon-btn" onClick={()=>playSong(s)}><Play size={16}/></button><button className="icon-btn danger" onClick={()=>setPlaylists(p=>p.map(x=>x.id===activePlaylist?{...x,songs:x.songs.filter(i=>i!==s.id)}:x))}><X size={16}/></button></div>)}{!playlists.find(p=>p.id===activePlaylist).songs.length&&<p className="empty-inline">This playlist is waiting for its first track. Add songs from Discover.</p>}</>:<div className="empty-state"><Disc3/><h3>Select a playlist</h3><p>Choose a playlist to see what’s inside.</p></div>}</div></div></div>}

      {page === 'Help & Support' && <div className="content"><PageIntro eyebrow="WE’RE HERE TO HELP" title="Help & Support." subtitle="Find quick answers or send a support request."/><div className="support-layout"><section className="support-panel"><div className="section-heading"><div><span className="eyebrow">QUICK ANSWERS</span><h2>Frequently asked questions</h2></div></div>{[{q:'How do I create an account?',a:'Choose Sign up, enter a username and password, then create your account.'},{q:'How do I play a song?',a:'Open Discover or Home and select the Play button on a song.'},{q:'How do I create a playlist?',a:'Open Playlists, enter a name and choose Create playlist. Add songs from Discover.'},{q:'How do I save a favourite?',a:'Select the heart icon on a song. Your favourites appear in Favorites.'},{q:'Why is a song not playing?',a:'Check your internet connection and try another track. Some sample audio links may be unavailable.'}].map((item,i)=><details className="faq-item" key={i}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section><section className="support-panel"><div className="section-heading"><div><span className="eyebrow">CONTACT SUPPORT</span><h2>Send us a message</h2></div><MessageCircle/></div><form className="support-form" onSubmit={submitSupportTicket}><label>Issue type<select value={supportSubject} onChange={e=>setSupportSubject(e.target.value)}><option>Technical issue</option><option>Login problem</option><option>Song not playing</option><option>Playlist problem</option><option>Account question</option><option>Other</option></select></label><label>Your message<textarea value={supportMessage} onChange={e=>setSupportMessage(e.target.value)} rows={5} required placeholder="Describe the problem you are facing..."/></label><button className="primary-btn" type="submit">Submit support request <span>→</span></button></form>{supportNotice&&<p className="support-notice">{supportNotice}</p>}{!user&&<p className="support-hint">Please log in to submit a support request.</p>}</section></div>{user&&<section className="support-panel my-tickets"><div className="section-heading"><div><span className="eyebrow">YOUR REQUESTS</span><h2>My support requests</h2></div></div>{supportTickets.filter(t=>t.username===user).length?supportTickets.filter(t=>t.username===user).map(t=><div className="ticket-row" key={t.id}><div><b>{t.subject}</b><p>{t.message}</p><small>{new Date(t.createdAt).toLocaleString()}</small></div><span className={`ticket-status ${t.status.toLowerCase()}`}>{t.status}</span></div>):<p className="empty-inline">You have not submitted any support requests yet.</p>}</section>}</div>}

      {page === 'Sleep Timer' && <div className="content sleep-timer-page">
        <PageIntro eyebrow="WIND DOWN WITH MUSICWAVE" title="Sleep Timer" subtitle="Choose when your music should stop. Your timer keeps running while you browse MusicWave."/>
        <section className="sleep-timer-card">
          <div className="sleep-timer-icon"><Timer size={30}/></div>
          <span className="eyebrow">{sleepTimerActive ? 'TIMER IS RUNNING' : 'SET YOUR LISTENING TIME'}</span>
          <div className="sleep-countdown">{sleepTimerActive ? sleepTimeLabel : `${String(sleepMinutes).padStart(2, '0')}:00`}</div>
          <p>{sleepTimerActive ? 'Music will pause automatically when the countdown reaches zero.' : 'MusicWave will pause the current song when your selected time is up.'}</p>
          <div className="sleep-presets">{[15,30,45,60].map(minutes => <button key={minutes} className={`filter-chip ${sleepMinutes===minutes?'selected':''}`} disabled={sleepTimerActive} onClick={()=>setSleepMinutes(minutes)}>{minutes} min</button>)}</div>
          {sleepTimerActive ? <button className="outline-btn sleep-action" onClick={cancelSleepTimer}><X size={16}/> Cancel timer</button> : <button className="primary-btn sleep-action" onClick={startSleepTimer}><Timer size={16}/> Start sleep timer</button>}
          {!current && <small className="storage-note">Choose and start a song first. The timer will pause that song when it ends.</small>}
          {current && <div className="sleep-current"><img src={current.cover} alt=""/><span><b>Currently playing</b><small>{current.title} · {current.artist}</small></span></div>}
        </section>
      </div>}

      {page === 'Shared playlist' && <div className="content"><PageIntro eyebrow="SHARED WITH YOU" title={sharedPlaylist?.name || 'Playlist unavailable'} subtitle={sharedPlaylist ? `Shared by ${sharedPlaylist.owner || 'a MusicWave listener'} · Free to view, no premium required.` : 'This playlist link is invalid or incomplete.'}/>{sharedPlaylist && <><div className="shared-banner"><Share2 size={19}/><span>Someone shared this playlist with you. Sign in is not required to view it.</span></div><div className="track-list">{(sharedPlaylist.songs || []).map((song,i)=><div className="track-row" key={`${song.id}-${i}`}><img src={song.cover} alt=""/><span><b>{song.title}</b><small>{song.artist} · {song.album || song.genre || 'MusicWave'}</small></span><button className="icon-btn" onClick={()=>playSong(song)} title="Play song"><Play size={16}/></button></div>)}{!sharedPlaylist.songs?.length&&<p className="empty-inline">This playlist has no tracks yet.</p>}</div><button className="outline-btn" onClick={()=>{window.history.replaceState({},'',window.location.pathname);setSharedPlaylist(null);go('Home')}}>Explore MusicWave</button></>}</div>}

      {page === 'Login' || page === 'Signup' ? <div className="auth-wrap"><div className="auth-panel"><div className="auth-mark"><AudioLines size={25}/></div><span className="eyebrow">{authMode==='login'?'WELCOME BACK':'START YOUR COLLECTION'}</span><h1>{authMode==='login'?'Good to see you.':'Join the rhythm.'}</h1><p>{authMode==='login'?'Log in to pick up right where you left off.':'Create an account and make MusicWave yours.'}</p><form onSubmit={authMode==='login'?login:signup}><label>Username<input value={authName} onChange={e=>setAuthName(e.target.value)} autoComplete="username" required placeholder="Your username"/></label><label>Password<input type="password" value={authPass} onChange={e=>setAuthPass(e.target.value)} autoComplete={authMode==='login'?'current-password':'new-password'} required placeholder="At least 4 characters"/></label><button className="primary-btn auth-submit">{authMode==='login'?'Log in':'Create account'} <span>→</span></button></form>{authMessage&&<p className="form-message">{authMessage}</p>}<p className="auth-switch">{authMode==='login'?"New to MusicWave?":"Already have an account?"} <button onClick={()=>{setAuthMode(authMode==='login'?'signup':'login');setAuthMessage('')}}>{authMode==='login'?'Sign up':'Log in'}</button></p><small className="storage-note">Demo authentication · stored in this browser only</small></div></div>:null}

      {page === 'Profile' && <div className="content"><PageIntro eyebrow="YOUR ACCOUNT" title="Your space." subtitle="Your MusicWave account details."/><div className="profile-card"><div className="profile-avatar">{user.slice(0,1).toUpperCase()}</div><div><h2>{user||'Guest'}</h2><p>MusicWave listener</p></div><button className="outline-btn" onClick={logout}><LogOut size={16}/> Log out</button></div><div className="stats-row"><div><b>{favorites.length}</b><small>Favorites</small></div><div><b>{playlists.length}</b><small>Playlists</small></div><div><b>{recent.length}</b><small>Recent tracks</small></div></div></div>}

      {page === 'Admin login' && <div className="auth-wrap"><div className="auth-panel"><div className="auth-mark"><ShieldCheck size={25}/></div><span className="eyebrow">RESTRICTED AREA</span><h1>Admin access.</h1><p>Sign in to manage the MusicWave catalog and users.</p><form onSubmit={adminLogin}><label>Admin username<input value={adminName} onChange={e=>setAdminName(e.target.value)} required placeholder="Admin username"/></label><label>Password<input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} required placeholder="Admin password"/></label><button className="primary-btn auth-submit">Enter dashboard →</button></form>{adminMessage&&<p className="form-message">{adminMessage}</p>}<small className="storage-note">Demo credentials: admin / admin123</small></div></div>}

      {page === 'Admin' && admin && <div className="content"><PageIntro eyebrow="CONTROL CENTER" title="The back office." subtitle="Manage your catalog and keep an eye on your community."/><div className="admin-stats"><div><span>CATALOG TRACKS</span><b>{songs.length}</b><Music2/></div><div><span>REGISTERED USERS</span><b>{users.length}</b><Users/></div><div><span>PLAYLISTS CREATED</span><b>{playlists.length}</b><ListMusic/></div><div><span>OPEN SUPPORT TICKETS</span><b>{supportTickets.filter(t=>t.status==='Open').length}</b><LifeBuoy/></div></div><div className="admin-grid"><section className="admin-panel"><div className="section-heading"><div><span className="eyebrow">CATALOG MANAGEMENT</span><h2>Add a track</h2></div></div><form className="admin-form" onSubmit={addSong}><label>Track title<input name="title" required placeholder="Song title"/></label><label>Artist<input name="artist" required placeholder="Artist name"/></label><label>Genre<select name="genre"><option>Pop</option><option>Rock</option><option>Electronic</option><option>Jazz</option><option>Indie</option><option>Ambient</option><option>House</option></select></label><label>Audio URL<input name="audio" type="url" placeholder="https://... (optional)"/></label><button className="primary-btn"><Plus size={16}/> Add to catalog</button></form></section><section className="admin-panel"><div className="section-heading"><div><span className="eyebrow">COMMUNITY</span><h2>Registered users</h2></div></div>{users.length?users.map(u=><div className="admin-user" key={u.username}><span className="avatar">{u.username.slice(0,1).toUpperCase()}</span><span><b>{u.username}</b><small>Listener account</small></span><button className="icon-btn danger" onClick={()=>deleteUser(u.username)} title="Remove user"><Trash2 size={16}/></button></div>):<p className="empty-inline">No registered users yet.</p>}</section></div><section className="admin-panel support-admin-panel"><div className="section-heading"><div><span className="eyebrow">CUSTOMER CARE</span><h2>Help & Support tickets ({supportTickets.length})</h2></div></div>{supportTickets.length?supportTickets.map(t=><div className="admin-ticket" key={t.id}><div className="admin-ticket-main"><div><b>{t.subject}</b><small>{t.username} · {new Date(t.createdAt).toLocaleString()}</small></div><span className={`ticket-status ${t.status.toLowerCase()}`}>{t.status}</span></div><p>{t.message}</p><div className="ticket-actions"><button className="outline-btn" onClick={()=>updateTicketStatus(t.id,t.status==='Open'?'Resolved':'Open')}><CheckCircle2 size={14}/>{t.status==='Open'?'Mark resolved':'Reopen ticket'}</button><button className="icon-btn danger" onClick={()=>deleteTicket(t.id)} title="Delete ticket"><Trash2 size={16}/></button></div></div>):<p className="empty-inline">No support requests have been submitted yet.</p>}</section><section className="admin-panel catalog-panel"><div className="section-heading"><div><span className="eyebrow">ALL TRACKS</span><h2>Catalog ({songs.length})</h2></div><button className="outline-btn" onClick={adminLogout}><LogOut size={15}/> Admin logout</button></div>{songs.map(s=><div className="track-row" key={s.id}><img src={s.cover}/><span><b>{s.title}</b><small>{s.artist} · {s.genre}</small></span><button className="icon-btn danger" onClick={()=>deleteSong(s.id)}><Trash2 size={16}/></button></div>)}</section></div>}
      {page === 'Admin' && !admin && <div className="content"><div className="empty-state"><ShieldCheck/><h3>Admin session required</h3><p>Sign in to access the control center.</p><button className="primary-btn" onClick={()=>go('Admin login')}>Admin login</button></div></div>}
      <footer className="footer"><span>© 2026 MUSICWAVE</span><span>MADE FOR THE LOVE OF SOUND <AudioLines size={14}/></span></footer>
    </main>

    <div className="player">
      <div className="player-track">{current?<><img src={current.cover}/><span><b>{current.title}</b><small>{current.artist}</small></span><button className={`icon-btn ${favorites.includes(current.id)?'liked':''}`} onClick={()=>toggleFavorite(current.id)}><Heart size={17} fill={favorites.includes(current.id)?'currentColor':'none'}/></button></>:<><div className="player-placeholder"><Music2/></div><span><b>Choose a track</b><small>Your soundtrack starts here</small></span></>}</div>
      <div className="player-center"><div className="player-buttons"><button className="icon-btn" onClick={()=>stepSong(-1)}><SkipBack size={18} fill="currentColor"/></button><button className="play-button" onClick={togglePlay}>{playing?<Pause size={19} fill="currentColor"/>:<Play size={19} fill="currentColor"/>}</button><button className="icon-btn" onClick={()=>stepSong(1)}><SkipForward size={18} fill="currentColor"/></button></div><div className="progress-line"><span>{fmt(currentTime)}</span><input type="range" min="0" max={duration||100} value={Math.min(currentTime,duration||100)} onChange={e=>{if(audioRef.current){audioRef.current.currentTime=Number(e.target.value);setCurrentTime(Number(e.target.value))}}}/><span>{fmt(duration)}</span></div></div>
      <div className="player-extra"><VolumeIcon/><input aria-label="Volume" type="range" min="0" max="1" step=".01" value={volume} onChange={e=>setVolume(Number(e.target.value))}/><button className={`icon-btn ${sleepTimerActive?'timer-active':''}`} onClick={()=>go('Sleep Timer')} title={sleepTimerActive?`Sleep timer: ${sleepTimeLabel}`:'Sleep timer'}><Timer size={18}/></button><button className="icon-btn" onClick={()=>go('Playlists')}><ListMusic size={18}/></button></div>
    </div>
    <audio ref={audioRef} volume={volume} onTimeUpdate={e=>setCurrentTime(e.currentTarget.currentTime)} onLoadedMetadata={e=>setDuration(e.currentTarget.duration||0)} onEnded={()=>stepSong(1)} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}/>
  </div>
}

function VolumeIcon(){return <span className="volume-glyph">◖))</span>}
function PageIntro({eyebrow,title,subtitle}){return <div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{subtitle}</p></div>}
function SongCard({song,index,playing,favorite,rating,onPlay,onFavorite,onRate,onAdd}){
  return <article className="song-card"><div className="cover-wrap"><img src={song.cover} alt={`${song.album} cover`}/><button className="cover-play" onClick={()=>onPlay(song)}>{playing?<Pause size={20} fill="currentColor"/>:<Play size={20} fill="currentColor"/>}</button><span className="track-number">{String(index+1).padStart(2,'0')}</span></div><div className="song-meta"><div><h3>{song.title}</h3><p>{song.artist}</p></div><button className={`heart-btn ${favorite?'liked':''}`} onClick={()=>onFavorite(song.id)} aria-label="Toggle favorite"><Heart size={18} fill={favorite?'currentColor':'none'}/></button></div><div className="song-card-bottom"><span>{song.genre}</span><div className="rating">{[1,2,3,4,5].map(n=><button key={n} aria-label={`Rate ${n} stars`} onClick={()=>onRate(song.id,n)} className={n<=rating?'rated':''}><Star size={12} fill={n<=rating?'currentColor':'none'}/></button>)}</div></div><button className="add-track" onClick={()=>onAdd(song.id)}><Plus size={13}/> Add to playlist</button></article>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
