export function scrollTop() {
  document.querySelector(".content")?.scrollTo({ top: 0, behavior: "instant" });
}
