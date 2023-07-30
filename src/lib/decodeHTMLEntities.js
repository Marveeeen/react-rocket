export function decodeHTMLEntities(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.documentElement.textContent;
}
