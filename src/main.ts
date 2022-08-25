import "./style.css";

import { setup } from "./talk-to-me";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button">talk to me</button>
    </div>
  </div>
`;

setup(document.querySelector<HTMLButtonElement>("#counter")!);
