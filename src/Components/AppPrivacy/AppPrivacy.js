import React from "react";

import "./AppPrivacy.css";
import Card from "./CardWapper/Card";
import data, { data_1 } from "./Data";

const AppPrivacy = () => {
  return (
    <div className="appPrivacy">
      <div className="row">
        <div className="col-12">
          <div className="mainHeading">
            <h2>App Privacy</h2>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
              See Details
            </button>
          </div>
          <p className="paraWidth">
            The developer, <b className="amana">AmanaCapital</b>, indicated that
            the app’s privacy practices may include handling of data as
            described below. For more information, see the{" "}
            <a href="https://amana.app/pdf/privacy-policy.pdf">
              developer’s privacy policy.
            </a>
          </p>
        </div>
        <div className="cardBlock">
          <div className="card">
            <div className="image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                aria-hidden="true"
              >
                <path d="M58.595 42c1.544 0 2.405.866 2.405 2.45v7.29c0 6.153-3.087 9.26-9.322 9.26h-7.244C42.861 61 42 60.134 42 58.61c0-1.554.86-2.42 2.434-2.42h7.185c2.91 0 4.6-1.582 4.6-4.69v-7.05c0-1.584.833-2.45 2.376-2.45zm-53.22 0c1.543 0 2.404.866 2.404 2.45v7.05c0 3.108 1.633 4.69 4.601 4.69h7.186c1.573 0 2.434.866 2.434 2.42 0 1.524-.86 2.39-2.434 2.39h-7.244C6.117 61 3 57.922 3 51.74v-7.29C3 42.866 3.83 42 5.375 42zM32 34C42.897 34 48 42.988 48 46.399c0 .949-.48 1.601-1.501 1.601H17.501C16.481 48 16 47.348 16 46.399 16 42.988 21.103 34 32 34zM32 14c4.438 0 8 3.82 8 8.412 0 4.916-3.562 8.618-8 8.588-4.437-.029-8-3.672-8-8.588C24 17.82 27.563 14 32 14zM51.678 3C57.913 3 61 6.076 61 12.231v7.32C61 21.103 60.168 22 58.595 22c-1.514 0-2.375-.896-2.375-2.45V12.5c0-3.108-1.692-4.691-4.601-4.691h-7.185c-1.573 0-2.434-.866-2.434-2.42C42 3.837 42.86 3 44.434 3h7.244zM19.566 3C21.139 3 22 3.836 22 5.39c0 1.553-.86 2.419-2.434 2.419H12.38c-2.968 0-4.601 1.583-4.601 4.69v7.051c0 1.554-.83 2.45-2.404 2.45C3.86 22 3 21.104 3 19.55v-7.319C3 6.076 6.117 3 12.322 3h7.244z"></path>
              </svg>
            </div>
            <h5>Data Used to Track You</h5>
            <p>
              The following data may be used to track you across apps and
              websites owned by other companies:
            </p>
            <div className="imgAndText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                className="privacy-type__glyph privacy-type__glyph--other"
                aria-hidden="true"
              >
                <path d="M32.09 61.568c16.185 0 29.586-13.43 29.586-29.587 0-16.186-13.43-29.587-29.616-29.587-16.157 0-29.558 13.4-29.558 29.587 0 16.156 13.43 29.587 29.587 29.587zM18.078 36.332c-2.379 0-4.351-1.944-4.351-4.38 0-2.408 1.972-4.351 4.35-4.351 2.408 0 4.381 1.943 4.381 4.35a4.358 4.358 0 01-4.38 4.38zm13.981 0a4.376 4.376 0 01-4.38-4.38c0-2.408 1.973-4.351 4.38-4.351a4.345 4.345 0 014.351 4.35 4.352 4.352 0 01-4.35 4.38zm13.981 0a4.358 4.358 0 01-4.38-4.38 4.352 4.352 0 014.38-4.351c2.38 0 4.352 1.943 4.352 4.35 0 2.437-1.973 4.38-4.352 4.38z"></path>
              </svg>
              <p>Other Data</p>
            </div>
          </div>
          {data.map(({ image, title, paragraph, icons }, index) => (
            <Card
              image={image}
              title={title}
              paragraph={paragraph}
              icons={icons}
              key={index}
            />
          ))}
          {data_1.map(({ image, title, paragraph, icons }, index) => (
            <Card
              image={image}
              title={title}
              paragraph={paragraph}
              icons={icons}
              key={index}
            />
          ))}
        </div>
        <div className="col-12">
          <p className="bottomP">
            Privacy practices may vary based on, for example, the features you
            use or your age.
            <span>
              <a href="https://apps.apple.com/story/id1538632801">Learn More</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppPrivacy;
