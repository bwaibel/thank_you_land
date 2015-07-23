import React from 'react';
import Header from './components/Header.jsx'

React.render(
  (
    <div>
      <Header />
      <main>
          <aside>
              <a href="#">New Thank You</a>
          </aside>
          <section>
              <h1>Latest cards</h1>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
              <card>
                  <h1>card Title</h1>
                  <p>...</p>
              </card>
          </section>
          <section>
            section 2
          </section>
      </main>
      <footer>
          <p>Example Footer</p>
      </footer
    ></div>
  ),
  document.getElementById('app')
);
