require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
//通过json获取图片的数据：
//注意：这里新版本一定要通过 json！ 来获取json
var imgDatas = require('json!../data/imgData.json');
//通过自执行函数遍历json数组获取图片url
imgDatas = (function genImgUrl(imgDataArr){
  for(var i=0; i<imgDataArr.length;i++){
    var singleImgData = imgDataArr[i];
    singleImgData.imgUrl = require('../images/'+singleImgData.fileName);
    imgDataArr[i] = singleImgData;
  }
  return imgDataArr;
})(imgDatas);
var ImgFigure = React.createClass({
  render() {
    return (
      <figure>
        <img src={this.props.data.imgUrl}/>
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
});

class AppComponent extends React.Component {

  render() {
    var controllerUtils = [],imgfigures =  [];
    for(var i=0; i<imgDatas.length; i++){
      imgfigures.push(<ImgFigure data={imgDatas[i]}/>);
    }
    return (
      <section>
        <section>{imgfigures}</section>
        <nav>{controllerUtils}</nav>
      </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
