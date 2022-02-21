export function loadScript(url: string, async?: boolean): Promise<void> {
  let resolver: any = null;

  const onloadPromise = new Promise((resolve) => {
    resolver = resolve;
  });

  const script = document.createElement("script");
  script.src = url;
  if (async) {
    script.async = true;
  }
  script.onload = () => resolver();
  document.body.appendChild(script);

  return onloadPromise as Promise<void>;
}
