/*
1.一个js的命名函数
2.在插件函数或者类里边实现一个apply方法
3.指定一个绑定到webpack自身的事件钩子
4.处理webpack内部实例的指定数据
5.功能完成后调用webpack提供的回调

*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const pluginName = 'MyPlugin'

//1.一个命名函数或者类
class MyPlugin{
    //2.实现一个apply方法
    apply(compiler){
        //3.指定一个绑定到webpack自身的事件钩子
        compiler.hooks.compilation.tap(pluginName,(compilation)=>{

            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName,
                (data,cb)=>{
                    //4.具体处理数据
                    data.html += '=_+';
                    //5.调用回调
                    cb(null,data);
                }
            )
        })

    }
}

module.exports = MyPlugin;