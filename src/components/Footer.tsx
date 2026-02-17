const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span className="text-sm font-light tracking-[0.2em] uppercase">Aethernetics</span>
        <p className="text-xs text-muted-foreground font-light mt-1">
          Systems engineering for business-critical software.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <a href="mailto:hello@aethernetics.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          hello@aethernetics.com
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
