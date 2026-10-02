const clients = ["Imagine.bo", "Synergylabs", "Krinos AI", "Mythyaverse", "Sharda University"];

const ClientStrip = () => (
  <section aria-label="Clients" className="relative px-6 py-12 bg-background border-y border-foreground/10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
      <p className="shrink-0 text-[10px] tracking-[0.35em] uppercase font-medium text-foreground/45">
        Trusted by teams at
      </p>
      <ul className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-4 w-full">
        {clients.map((c) => (
          <li
            key={c}
            className="text-lg md:text-xl font-display font-bold tracking-tight text-foreground/40 hover:text-foreground/80 transition-colors duration-300"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ClientStrip;
