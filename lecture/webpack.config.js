const path = require('path'); // node에서 경로를 쉽게 잡을때 사용

module.exports ={
  name:'wordrelay-setting',
  mode:'development', //실서비스에서는 production
  devtool : 'eval', // 빠르게 한다
  resolve: {
    extensions:['.js','.jsx'] // entry에 확장자명을 안쓰는 대신 작성하여 webpack이 스스로 알아볼수 있게 만듬
  },
// 중요
  entry:{ // 입력 (합치려는 jsx파일)
    app:['./client.jsx','./WordRelay.jsx'] // 배열로 합치려는 폴더를 넣어줌 (현재는 client.jsx에서 WordRelay를 불러와서 작성하지 않아도 가능 // 파일안에서 다른 파일을 불러오면 다른파일은 써주지 않아도 webpack이 조합해줌 // js,css,json등도 묶어줄수 있음)
  },
  module:{ // entry의 파일을 읽어 module을 적용하여 output으로 보냄
    rules : [{
      test:/\.jsx?/, // 정규표현식으로 js파일과 jsx파일을 이 rule을 적용하겠다는 의미
      loader:'babel-loader', // 바벨의 문법 적용하겠다
      option: {
        presets:[['@babel/preset-env', {
          targets : {
            browsers:['>1% in KR'],
          },
          debug:true,
        }],
        '@babel/preset-react'], //js,jsx파일을 바벨에 적용할겠다 // loader의 preset은 plugin들의 집합으로 target으로 각각 지정도 가능
        plugin:['@babel/plugin-proposal-class-porperties'],
      },
    }],
  }, 
  output:{ // 출력(합쳐지는 app.js)
    path: path.join(__dirname,'dist'), // 현재폴더(path.join)에 들어있는 dist
    filename: 'app.js' //파일 이름
  }

};