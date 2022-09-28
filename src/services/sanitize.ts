import DOMPurify from "dompurify";

DOMPurify.setConfig({ ADD_ATTR: ["target"] });

DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if (node.tagName === "A") {
    if (node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener");
    }
  }
});

export const sanitize = (html: string) => {
  return DOMPurify.sanitize(html);
};
