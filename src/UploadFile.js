import React from "react";
import axios from 'axios';
import "./UploadFile.css"

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.refInputFile = React.createRef();
        this.onUploadFileClick = this.onUploadFileClick.bind(this);
    }

    onUploadFileChange = (event) => {
        const file = event.target.files[0]
        event.preventDefault()
        const formData = new FormData();
        formData.append("files", file);
        try {
            const response = axios({
                method: "post",
                url: "http://localhost:1323/upload",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
        } catch(error) {
            console.log(error)
        }
        event.target.value = null
    }

    onUploadFileClick(event) {
        this.refInputFile.current.click();
    }

    render() {
        return (
            <div className="upload-backgroud">
                <div className="upload-lable1">
                    <div className="upload-title">
                        <p>Websites Checker</p>
                    </div>
                </div>
                <div className="upload-lable2">
                    <div>
                        <div className="upload-icon"></div>
                        <div className="upload-text1">
                            <p>Drag your .csv file here to start uploading.</p>
                        </div>
                        <div className="upload-text2">
                            <p>----- OR -----</p>
                        </div>
                        <form onSubmit={this.onUploadFileSubmit}>
                            <input className="upload-input" type="file" ref={this.refInputFile} onChange={this.onUploadFileChange} /> 
                            <input className="upload-button" type="button" onClick={this.onUploadFileClick} value="Browse File" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile;