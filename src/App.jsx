import Accordion from "./components/accordion/Accordion";
import ListItem from "./components/searchableList/ListItem.jsx";
import SearchableList from "./components/searchableList/SearchableList";

function App() {
  return (
    <main>
      <section>
        <h2>Main Section</h2>
        <Accordion className="accordion">
          <Accordion.Item id="23972374wererwe" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Title
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="23972wewieu838erwe" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Another Title
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList itemKeyFn={(item) => item.id}>
          {(item) => <ListItem item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
