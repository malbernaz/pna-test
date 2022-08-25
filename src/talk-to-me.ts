export function setup(element: HTMLButtonElement) {
  element.addEventListener("click", async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ say: "hello to my little friend" }),
    };

    fetch("http://localhost:4321/say", options)
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  });
}
