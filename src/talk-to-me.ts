export function setup(element: HTMLButtonElement) {
  element.addEventListener("click", async () => {
    const ip = await getIP();
    const res = await fetch(`http://${ip}:4321/say`, {
      method: "POST",
      headers: {
        // "Access-Control-Request-Private-Network": "true",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        say: "hello to my little friend",
      }),
    });
    const data = await res.json();
    console.log(data);
  });
}

async function getIP(): Promise<string> {
  const res = await fetch("https://api.ipify.org");
  const ip = await res.text();
  return ip;
}
