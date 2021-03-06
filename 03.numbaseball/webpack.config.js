const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports ={
  name:'numbaseball',
  mode:'development',
  devtool:'inline-source-map',
  resolve:{
    extensions:['.jsx','.js'],
  },
  entry:{
    app:'./client',
  },
  module:{
    rules:[{
      test:/\.jsx?/,
      loader:'babel-loader',
      options:{
        presets:['@babel/preset-env', '@babel/preset-react'],
        plugins:['react-refresh/babel'],
      },
      exclude: path.join(__dirname,'node_modules'),
    }]
  },
  plugins:[
    new ReactRefreshWebpackPlugin()
  ],
  output:{
    path:path.join(__dirname,'dist'),
    filename:'app.js',
    publicPath:'/dist/'
  },
  devServer:{
    publicPath:'/dist/',
    hot:true,
  }
}