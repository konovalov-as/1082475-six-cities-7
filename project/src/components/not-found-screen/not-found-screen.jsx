import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function NotFoundScreen() {
  return (
    <div className="page page--not-found-screen">
      <Header />
      <main className="page__main page__main--not-found-screen">
        <div className="page__not-found-screen-container container">
          <section className="not-found-screen">
            <h1 className="visually-hidden">404. Page not found</h1>
            <div className="not-found-screen__status-wrapper">
              <b className="not-found-screen__status">404</b>
              <p className="not-found-screen__status-description">Sorry we can’t find that page! Don’t worry, though everything is still awesome!</p>
              <Link to="/" className="button form__submit ">Go to the home page</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
