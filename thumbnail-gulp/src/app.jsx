var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a library for making fast, dynamic pages.' +
    'React is a library for making fast, dynamic pages.',
    imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
  }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.' +
    'Gulp will speed up your development workflow.',
    imageUrl: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/75971.jmzDf.90c44df7-1c42-4f1e-afcf-54debeba00fd.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
