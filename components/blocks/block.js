import React from 'react';
import './block.scss';

export default class Block extends React.Component {
  render() {
    return(
      <div className="block" id={this.props.id}>
        <div className={`block__left block__left--${this.props.theme}`}>
          <h1 className="block__left--title">{this.props.title}</h1>
          {/* <img className="block__left__image" src={this.props.image}></img> */}
          <div className="block__left__image" style={{backgroundImage: `url(${this.props.image})`}}></div>
        </div>
        <div className={`block__right block__right--${this.props.theme}`}>
          <div className="block__right--info1">
            <h1 className="block__right--title">{this.props.title}</h1>
            <p>{this.props.description}</p>

            <div className="block__right--info2">              
              {this.props.firstblock ? <h2 style={{margin: '1em 0 0.8em 0'}}>{this.props.firstblock}</h2> : null}
              {this.props.button ? <a href="https://github.com/kazlaga/pixelcabin" className="btn btn__1">{this.props.button}</a> : null}
              {this.props.secondblock ? <h2 style={{margin: '1em 0 0 0'}}>Contact info</h2> : null}
            </div>
            
            <div className="">
              {this.props.education && this.props.education.map(edu => {
                return (
                  <div className="block__right--education">
                    {edu.period ? <h3>{edu.period}</h3> : null}
                    {edu.description ? <h4 style={{marginLeft: '9em'}}>{edu.description}</h4> : null}
                  </div>
                )
              })}
            </div>

            <div className="">
              {this.props.jobexperience && this.props.jobexperience.map( job => {
                return (
                  <div className="experience"> 
                    {job.period ? <h5 className="experience__period">{job.period}</h5> : null }
                    <div className="experience__content">
                      {job.company ? <h5 className="experience__company">{job.company}</h5> : null }
                      {job.title ? <h5 className="experience__title">{job.title}</h5> : null }
                      {job.description ? <h5 className="experience__description">{job.description}</h5> : null }
                    </div>
                  </div>
                )
              } )}
            </div>

            <div>
              {this.props.about && this.props.about.map( item => {
                return (
                  <div className="about">
                    {item.email ? <h5 style={{margin: '2em 1em'}} className="about__email">{item.email}</h5> : null}
                    {item.address ? <h5 style={{margin: '2em 0em', borderRight: '1px white solid', borderLeft: '1px white solid', padding: '0 1em'}}>{item.address}</h5> : null}
                    {item.phone ? <h5 style={{margin: '2em 1em'}}>{item.phone}</h5> : null}
                  </div>
                )
              })}
            </div>
         
          </div>
        </div>
      </div>
    )
  }
}