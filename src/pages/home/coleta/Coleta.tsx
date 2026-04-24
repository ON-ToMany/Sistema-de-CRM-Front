import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { RiMapPin2Fill, RiRecycleLine } from "react-icons/ri";

delete (L.Icon.Default.prototype as any)._getIconUrl;

const greenPinIcon = L.divIcon({
  className: "",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 44" width="32" height="44">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 10.667 16 28 16 28S32 26.667 32 16C32 7.163 24.837 0 16 0z"
        fill="#15803d"/>
      <circle cx="16" cy="16" r="6.5" fill="white"/>
    </svg>
  `,
  iconSize: [32, 44],
  iconAnchor: [16, 44],
  popupAnchor: [0, -44],
});

const pontosDeColeta: { nome: string; coords: [number, number] }[] = [
  { nome: "Maracanã",              coords: [-22.9121, -43.2302] },
  { nome: "Botafogo",              coords: [-22.9519, -43.1868] },
  { nome: "Flamengo",              coords: [-22.9316, -43.1781] },
  { nome: "Bangu",                 coords: [-22.8874, -43.4712] },
  { nome: "Campo Grande",          coords: [-22.9027, -43.5603] },
  { nome: "Nova Iguaçu",           coords: [-22.7596, -43.4511] },
  { nome: "Campos dos Goytacazes", coords: [-21.7545, -41.3244] },
  { nome: "Central do Brasil",     coords: [-22.9097, -43.1801] },
  { nome: "Praça Mauá",            coords: [-22.8981, -43.1731] },
  { nome: "Bonsucesso",            coords: [-22.8826, -43.2522] },
  { nome: "Caxias",                coords: [-22.8056, -43.3109] },
  { nome: "Dutra (Gazola)",        coords: [-22.8425, -43.3812] },
  { nome: "Barra da Tijuca",       coords: [-23.0003, -43.3650] },
];

const centroRio: [number, number] = [-22.9068, -43.3500];

export default function Coleta() {
  return (
    <section className="w-full bg-gray-200">
      <div className="mx-auto flex flex-col lg:flex-row items-stretch w-full max-w-350">

        <div className="flex flex-col justify-center gap-4 px-8 py-10 lg:px-12 lg:py-14 lg:w-75 xl:w-85 shrink-0">

          <div className=" text-white/80">
            
            <span className=" flex items-center gap-2 bg-green-800 font-semibold text-[0.65rem] tracking-[0.14rem] px-4 py-1.5 rounded-full mb-4 uppercase">
              <RiRecycleLine className="text-base shrink-0" /> Ilustração + Mapa Interativo
            </span>
            
          </div>

          <h2 className="font-black text-green-900 leading-[1.05] text-4xl xl:text-5xl">
            Seu eletrônico merece um novo destino.
          </h2>

          <p className="text-gray-900/70 text-sm leading-relaxed max-w-60">
            Encontre o ponto de coleta mais próximo e faça parte da mudança.
          </p>

          <div className="mt-1">
            <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 active:scale-95 transition-all duration-150 text-white/80 hover:text-white text-sm font-semibold rounded-lg px-6 py-3.5 cursor-pointer">
              <RiMapPin2Fill className="text-base" />
              Explorar mapa
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-70 xl:w-80 shrink-0 px-4 py-8 lg:py-0">
          <img
            src="https://ik.imagekit.io/9yqf3fqpw/coleta-eletronica.png?updatedAt=1776960936419"
            alt="Ilustração de lixeira de reciclagem com eletrônicos"
            className="w-full max-w-70 object-contain select-none"
            draggable={false}
          />
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:py-10 lg:pr-10 lg:pl-4">
          <div
            className="w-full rounded-2xl overflow-hidden border border-gray-300 shadow-md"
            style={{ height: "360px" }}
          >
            <MapContainer
              center={centroRio}
              zoom={10}
              className="z-0"
              style={{ width: "100%", height: "100%" }}
              zoomControl={true}
              scrollWheelZoom={false}
              attributionControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {pontosDeColeta.map((ponto) => (
                <Marker key={ponto.nome} position={ponto.coords} icon={greenPinIcon}>
                  <Popup>
                    <span className="font-semibold text-green-700">{ponto.nome}</span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

      </div>
    </section>
  );
}