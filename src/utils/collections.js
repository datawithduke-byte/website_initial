export async function getEpisodes() {
  const modules = import.meta.glob('/src/pages/episodes/*.md', { eager: true });
  return Object.entries(modules).map(([path, mod]) => {
    const url = path.replace('/src/pages', '').replace('.md','/');
    return { url, ...(mod.frontmatter || {}), Content: mod.default };
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}
export async function getBlogPosts() {
  const modules = import.meta.glob('/src/pages/blog/*.md', { eager: true });
  return Object.entries(modules).map(([path, mod]) => {
    const url = path.replace('/src/pages', '').replace('.md','/');
    return { url, ...(mod.frontmatter || {}), Content: mod.default };
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}
