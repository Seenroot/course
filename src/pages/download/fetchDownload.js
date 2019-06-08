import React, { Component } from 'react';
import { Button } from 'antd';

export default class FetchDownload extends Component {
  fetchDownload = () => {
    /**
     * 第一步，fetch 一个接口获取其内容并转成 blob 对象。
     * 第二步，将 blob 对象使用 createObjectURL 方法转化成 ObjectURL，等同于一个下载地址链接。
     * 第三步，创建一个 a 标签，并赋予 ObjectURL 且执行一次 click。
     * 第四步，通过 revokeObjectURL 回收 ObjectURL。
     */
    fetch('http://somehost/somefile.zip')
      .then(res => res.blob())
      .then(blob => {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(blob);
        var filename = 'myfile.zip';
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      })
  }
  
  render () {
    return (
      <div>
        <a href="http://somehost/somefile.zip" download="filename.zip">Download file</a>
        <Button type='primary' onClick={this.fetchDownload}>fetch模拟a标签实现下载</Button>
      </div>
    )
  }
}