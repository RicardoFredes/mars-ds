import DOMPurify from "dompurify";

export const sanitize = (html: string) => {
  try {
    DOMPurify.setConfig({ ADD_ATTR: ["target"] });

    DOMPurify.addHook("afterSanitizeAttributes", function (node) {
      if (node.tagName === "A") {
        if (node.getAttribute("target") === "_blank") {
          node.setAttribute("rel", "noopener");
        }
      }
    });

    return DOMPurify.sanitize(html);
  } catch (error) {
    return html;
  }
};
