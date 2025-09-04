// small helper to smooth-scroll with a little offset for the sticky navbar
export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}