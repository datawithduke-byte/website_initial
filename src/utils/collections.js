function parseDate(d) {
  // Only trust YYYY-MM-DD; otherwise treat as very old
  return /^\d{4}-\d{2}-\d{2}$/.test(String(d)) ? new Date(d).getTime() : 0;
}

export async function getEpisodes() {
  const modules = import.meta.glob('/src/pages/episodes/*.md', { eager: true });
  return Object.entries(modules)
    .map(([path, mod]) => {
      const url = path.replace('/src/pages', '').replace('.md','/');
      const fm = mod.frontmatter || {};
      return { url, ...fm, Content: mod.default, _ts: parseDate(fm.date) };
    })
    .sort((a,b) => b._ts - a._ts);
}

export async function getBlogPosts() {
  const modules = import.meta.glob('/src/pages/blog/*.md', { eager: true });
  return Object.entries(modules).map(([path, mod]) => {
    const url = path.replace('/src/pages', '').replace('.md','/');
    return { url, ...(mod.frontmatter || {}), Content: mod.default };
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}
