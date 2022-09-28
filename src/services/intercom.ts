export const hideIntercom = (hide = false) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ic = window.Intercom;
  if (typeof ic === "function") ic("update", { hide_default_launcher: hide });
};
