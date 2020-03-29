import * as React from 'react';
import { Carousel } from 'antd'
import BreadCrumbBar from './common/BreadCrumbBar'

const quotes = [
  'What would you like to automate today?',
  'Are you ready to Arbitrate?',
  'This is what automated automations looks like',
  'Automated Message',
  'let me arbitrate you',
  'You’re either the one that creates the automation or you’re getting automated.',
  'The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.',
  "As technology advances, it reverses the characteristics of every situation again and again. The age of automation is going to be the age of 'do it yourself.'",
  "I think one of the most interesting things about automation isn't on the practical side. I think it's about creating magic and wonder and moments of splendor.",
  "In many cases, jobs that used to be done by people are going to be able to be done through automation. I don't have an answer to that. That's one of the more perplexing problems of society."
]

const Home = () => <React.Fragment>
  <BreadCrumbBar items={[]}/>
  <Carousel
    autoplay
    draggable
    pauseOnHover
    dots
    className="text-center"
    initialSlide={Math.floor(Math.random() * quotes.length) + 1 }
    style={{ minHeight: "90vh", padding: "10px" }}>
    {quotes.map((quote) => <div
      key={quote}>
      <h3>{quote}</h3>
    </div>)}
  </Carousel>
</React.Fragment>

export default Home
