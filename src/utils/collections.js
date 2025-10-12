function parseDate(d) {
  // Only trust YYYY-MM-DD; otherwise treat as very old
  return /^\d{4}-\d{2}-\d{2}$/.test(String(d)) ? new Date(d).getTime() : 0;
}

function toTimestamp(d) {
  // If Astro/gray-matter parsed it as a Date object
  if (d instanceof Date) return d.getTime();

  // If it's a string, parse robustly
  if (typeof d === 'string') {
    const s = d.trim();
    const t = Date.parse(s); // handles YYYY-MM-DD safely
    return Number.isNaN(t) ? 0 : t;
  }

  // Anything else: treat as very old
  return 0;
}

export async function getEpisodes() {
  const modules = import.meta.glob('/src/content/episodes/*.md', { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter || {};
      return {
        url: path.replace('/src/content', '').replace('.md', '/'),
        ...fm,
        Content: mod.default,
        _ts: toTimestamp(fm.date),
        _slug: path.toLowerCase(),
      };
    })
    // date desc, then slug asc for stability
    .sort((a, b) => (b._ts - a._ts) || (a._slug > b._slug ? 1 : -1));
}
export async function getLessons() {
  const modules = import.meta.glob('/src/content/lessons/*.md', { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const fm = mod.frontmatter || {};
      return {
        url: path.replace('/src/content', '').replace('.md', '/'),
        ...fm,
        Content: mod.default,
        _ts: toTimestamp(fm.date),
        _slug: path.toLowerCase(),
      };
    })
    // date desc, then slug asc for stability
    .sort((a, b) => (b._ts - a._ts) || (a._slug > b._slug ? 1 : -1));
}

export async function getBlogPosts() {
  const modules = import.meta.glob('/src/content/blogs/*.md', { eager: true });
  return Object.entries(modules).map(([path, mod]) => {
    const url = path.replace('/src/content', '').replace('.md','/');
    return { url, ...(mod.frontmatter || {}), Content: mod.default };
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}
