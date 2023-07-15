import skaBand from "./json/ska-band.json"
import kpopBand from "./json/kpop-band.json"
import punkBand from "./json/punk-band.json"

import BandForm from "./BandForm";
import { Band } from "./types/Band";

function App(): JSX.Element {
  const bands: Band[] = [skaBand, kpopBand, punkBand];
  return (
    <div className="App">
      <BandForm band={bands[2]} />
    </div>
  );
}

export default App;
