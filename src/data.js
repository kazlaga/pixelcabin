
const data = [
  {
    id: "intro",
    theme: 'purple',
    title: 'Zlatan Kazlagic',
    description: 'Front-end developer with two years of experience with modern front-end technologies, and two years of experience with design. Passionate and knowledgeable about computers, having studied and worked within the IT field.',
    image: '/images/sensation.png',
    cta: {
      title: 'Visit my Github',
      buttonText: 'Github'
    },
    footer: {
      title: 'Contact info',
      items: [
        { text: 'kazlaga@gmail.com' },
        { text: 'Metropolestraat 32, 1315 KM, Almere' },
        { text: '+31 6 5174 77 69' }
      ]
    }
  },
  {
    theme: 'red',
    id: "education",
    title: 'Education',
    description: "",
    image: '/images/education.png',
    timeline: [
      {
        period: '2016 - 2017',
        title: 'Elium Academy',
        subtitle: 'Full stack development course'
      },
      {
        period: '2009 – 2011',
        title: 'Hogeschool van Amsterdam',
        subtitle: 'Trade Management Asia, BSc'
      },
      {
        period: '2005 – 2009',
        title: 'ROC Lelystad',
        subtitle: 'Information Technology, MBO'
      }
    ]
  },
  {
    theme: 'green',
    id: "work",
    title: 'Work Experience',
    description: "",
    education: null,
    image: '/images/resume.png',
    timeline: [
      {
        period: "2017 Aug – 2018 Dec",
        title: "Elements",
        subtitle: "Junior Front-end developer",
        description: "At Elements I worked as a front-end developer, using technologies such as React, Redux, Webpack and Sass. I worked on projects such as Sensation.com, KPN Smartwall and VGN.nl, following agile principles."
      },
      {
        period: "2018 Jan – 2018 Apr",
        title: "AdCombi",
        subtitle: "Intern Ruby on Rails trainee",
        description: "AdCombi gave me the opportunity the learn the basics of Ruby on Rails, and to dig deeper into the basics of backend development."
      },
      {
        period: "2014 – 2016",
        title: "designerprinzen",
        subtitle: "Wordpress Designer",
        description: "During my time here I designed and deployed Wordpress websites. I worked with a team of experienced designers who greatly improved my knowledge of design principles."
      },
      {
        period: "2011 - 2014",
        title: "Nacht-Service",
        subtitle: "General Manager",
        description: "Nacht-Service is an agency specialized in providing temporary workers for hotels. My resposibilities as general manager included managing both employees and clients."
      },
      {
        period: "2008 Feb – 2009 Nov",
        title: "Peak-IT",
        subtitle: "Service Desk Intern",
        description: "During my IT studies, I worked in the service desk department of Peak-IT. Tasks included dealing with system and network issues, often by debugging remotely."
      }
    ]
  }
];

export default data;