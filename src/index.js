import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Person = ({img, name, job, children}) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name='John' job="Developer"/>
      <Person img="22" name='Bob' job="Designer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac nisi 
          elementum, tincidunt purus eu, hendrerit nisi. Cras vitae elementum est.
        </p>
      </Person>
      <Person img="19" name='David' job="Boss"/>
    </section>
  )
};

ReactDOM.render(<PersonList></PersonList>,document.getElementById('root'));
