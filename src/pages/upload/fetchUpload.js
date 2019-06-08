import React, { Component } from 'react';

export default class FetchUpload extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();

    this.state = {
      fileName: ''
    }
  }

  selectFile = () => {
    console.log('this.input', this.inputRef)
    this.inputRef.current.click();
  }

  upload = () => {
    var formData = new FormData();
    var fileField = document.querySelector("input[type='file']");

    formData.append('username', 'abc123');
    formData.append('avatar', fileField.files[0]);
    
    this.setState({
      fileName: fileField.files[0].name
    })

    fetch('https://example.com/profile/avatar', {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      this.inputRef.current.value = null // // 移除文件，可以保证上传同样的文件时，也会触发change事件
    });
  }

  render () {
    const { fileName } = this.state
    return (
      <div>
        <button type="button" onClick={this.selectFile}>
            <span>{fileName ? '重新上传' : '上传文件'}</span>
        </button>
        <span>{fileName}</span>
        <input type="file" ref={this.inputRef} style={{display: 'none'}} onChange={this.upload} accept="image/png, image/jpeg" />
      </div>
    )
  }
}