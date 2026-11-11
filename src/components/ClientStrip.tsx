const clients = [
  { name: "Synergylabs", detail: "Imagine.bo · AI app builder" },
  { name: "Krinos AI", detail: "Dental diagnostics platform" },
  { name: "Mythyaverse", detail: "ECG prediction system" },
  { name: "Sharda University", detail: "ML research tooling" },
];

export default function ClientStrip() {
  return <section className="client-strip" aria-labelledby="clients-heading">
    <div className="wrap">
      <p className="eyebrow" id="clients-heading">CLIENTS WE’VE BUILT FOR</p>
      <ul>{clients.map(client => <li key={client.name}><strong>{client.name}</strong><span>{client.detail}</span></li>)}</ul>
    </div>
  </section>;
}
