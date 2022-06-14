import DOMPurify from "dompurify";

export const sanitizeHTML = (html: string) => {
  if (typeof window === "undefined") return html;
  return DOMPurify.sanitize(html);
};
