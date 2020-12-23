import React from 'react'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class MyCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          ( <blockquote class="twitter-tweet" data-theme="dark"><p lang="pt" dir="ltr">Ela fez mil pessoas felizes, uma estragou a noite dela. E hoje só restam lembranças.</p>&mdash; ./pedro (@letspedroca) <a href="https://twitter.com/letspedroca/status/1337781336346595329?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> ),
          ( <blockquote class="twitter-tweet" data-theme="dark"><p lang="pt" dir="ltr">Ela fez mil pessoas felizes, uma estragou a noite dela. E hoje só restam lembranças.</p>&mdash; ./pedro (@letspedroca) <a href="https://twitter.com/letspedroca/status/1337781336346595329?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> ),
          ( <blockquote class="twitter-tweet" data-theme="dark"><p lang="pt" dir="ltr">Ela fez mil pessoas felizes, uma estragou a noite dela. E hoje só restam lembranças.</p>&mdash; ./pedro (@letspedroca) <a href="https://twitter.com/letspedroca/status/1337781336346595329?ref_src=twsrc%5Etfw">December 12, 2020</a></blockquote> ),
        ],
      }
      this.onchange = this.onchange.bind(this);
    }
  
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
      );
    }
  }

  export default MyCarousel