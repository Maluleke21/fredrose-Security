export default function ResponseBand() {
  return (
    <>
      <div className="chevron-divider"></div>
      <section className="response-band">
        <div className="wrap response-inner">
          <div>
            <h2>
              24HR
              <span>Armed Response</span>
            </h2>
            <p className="response-quote">&quot;Security doesn&apos;t keep office hours.&quot;</p>
            <div className="response-actions">
              <a href="tel:0152800343" className="btn btn-gold">
                Call For Assistance
              </a>
            </div>
          </div>
          <div className="response-numbers">
            <div className="rn-item">
              <div className="rn-label">Telephone</div>
              <a className="rn-value" href="tel:0152800343">
                015 280 0343
              </a>
            </div>
            <div className="rn-item">
              <div className="rn-label">Cell</div>
              <a className="rn-value" href="tel:0740971465">
                074 097 1465
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
