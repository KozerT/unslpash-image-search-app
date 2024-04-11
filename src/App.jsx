import Accordion from "./components/accordion/Accordion";
import Place from "./components/searchableList/Place.jsx";
import SearchableList from "./components/searchableList/SearchableList";
import PLACES from "./places.js";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="23972374wererwe" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We have a 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us. </p>
                <p>We are in the business of planning trips for 20 years</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="23972wewieu838erwe" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Plan Your Trip with Confidence
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p> Let us take the stress out of travel planning. </p>
                <p>
                  With our proven track record, you can relax knowing your trip
                  is in good hands.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="233284werwhgfgn8erwe" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Unforgettable Trips, Guaranteed
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  We&apos;re so confident you&apos;ll love your trip that we
                  guarantee your satisfaction.
                </p>
                <p>Let us plan your next adventure, worry-free.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList
          items={["item 1", "item 2"]}
          itemKeyFn={(item) => item.id}
        >
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
