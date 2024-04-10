import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="23972374wererwe"
            title="We have a 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>You can&apos;t go wrong with us. </p>
              <p>We are in the business of planning trips for 20 years</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="23972wewieu838erwe"
            title="Plan Your Trip with Confidence"
            className="accordion-item"
          >
            <article>
              <p> Let us take the stress out of travel planning. </p>
              <p>
                With our proven track record, you can relax knowing your trip is
                in good hands.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="233284werwhgfgn8erwe"
            title="Unforgettable Trips, Guaranteed"
            className="accordion-item"
          >
            <article>
              <p>
                We&apos;re so confident you&apos;ll love your trip that we
                guarantee your satisfaction.
              </p>
              <p>Let us plan your next adventure, worry-free.</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
