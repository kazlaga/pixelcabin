var React = require('react');
var ReactDOM = require('react-dom');
import './index.css';
import Block from '../components/blocks/block';

const props = [
  {
    theme: 'blue',
    title: 'Zlatan Kazlagic',
    description: 'Pixelcabin works with some of the world’s most influential companies to engineer their e-commerce solutions, using the Shopify Plus platform.Whether it’s a bespoke app to provide your customers with a unique feature, an integration to connect with your 3PL provider, or integrating with your team to set up a cross-region platform and workflow - we have you covered.',
    button: 'GitHub',
    firstblock: "Visit my GitHub",
    secondblock: 'Contact info',
    image: '/images/sensation.png',
    about: [
      {
        address: 'Metropolestraat 32, 1315km, Almere',
        email: 'kazlaga@gmail.com',
        phone: '+31 6 5174 77 69'
      }
    ]
  },
  {
    theme: 'red',
    title: 'Education',
    description: "",
    image: '/images/ruby.png',
    education: [
      {
        period: '2016 - 2017',
        description: 'Elium, Node.JS Full-stack developer'
      },
      {
        period: '2009 – 2011',
        description: 'Trade Management Asia - Bachelor'
      },
      {
        period: '2005 – 2009',
        description: 'IT – Information Technology'
      }
    ]
  },
  {
    theme: 'green',
    title: 'Work Experience',
    description: "",
    education: null,
    image: '/images/resume.png',
    jobexperience: [
      {
        period: "2017 aug – 2018 dec",
        company: "Elements",
        title: "Junior Front-end developer",
        description: "At Elements I’ve worked as a Front-end developer where I worked with React and Redux for various projects such as Senstion.com, KPN Smartwall and VGN.nl. As a team we followed Agile principles."
      },
      {
        period: "2018 jan aug – 2018 apr",
        company: "AdCombi",
        title: "Intern Ruby on Rails trainee",
        description: "AdCombi gave me the opportunity the learn the basics of Ruby on Rails, and to dig deeper into the basics of backend development."
      },
      {
        period: "2014 – 2016",
        company: "designerprinzen",
        title: "Wordpress designer",
        description: "During my time here I was designing websites and logos. I’ve worked with a team of experienced designers who taught me the basic principles of design."
      },
      {
        period: "2011 - 2014",
        company: "Nacht-Service",
        title: "General Manager",
        description: "At the temp agency I was managing employees and client relations"
      },
      {
        period: "2008 feb – 2009 nov",
        company: "Peak-IT",
        title: "Internship",
        description: "Here I started as an intern at the servicedesk department dealing with system and network issues."
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        {props.map(prop => (
          <Block
            {...prop}
          />
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)