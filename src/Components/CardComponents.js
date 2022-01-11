import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const { htmlToText } = require('html-to-text');

export default function CardComponents() {
  const [articles, setArticles] = useState([]);
  const paragraphRef = useRef('');
  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/reactjs.json')
      .then((res) => {
        setArticles(res.data.data.children);
        console.log(res.data.data.children);
      })
      .catch((err) => console.log(err));
  }, []);
  const showRequiredHTML = (comingHtml) => {
    return (paragraphRef.current.innerHTML = comingHtml);
  };
  const decodeHTML = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div>
      <div className="card_container">
        {articles.map((item) => (
          <div class="card">
            <div class="card-body">
              <p
                class="card-title"
                style={{ fontSize: '1.5rem', color: '#0056D2', width: '100%' }}
              >
                {item.data.title}
              </p>
              <p
                class="card-subtitle "
                style={{ color: 'green', fontSize: '1rem', width: '100%' }}
              >
                Score: {item.data.score}
              </p>
              <p
                class="card-subtitle"
                style={{ fontSize: '1rem', color: 'orange', width: '100%' }}
              >
                Link : {item.data.url}
              </p>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'black',
                  paddingRight: '20px',
                  width: '100%',
                }}
                dangerouslySetInnerHTML={{
                  __html: decodeHTML(item.data.selftext_html),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
