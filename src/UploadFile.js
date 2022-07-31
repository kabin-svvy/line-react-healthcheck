import React from "react";
import "./UploadFile.css"

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.refInputFile = React.createRef();
        this.onUploadFileClick = this.onUploadFileClick.bind(this);
        this.state = {
            uplaodFileSeleted: null
        }
    }
    
    onUploadFileChange = (event) => {
        const file = event.target.files[0]
        this.setState({
            uplaodFileSeleted: file 
        })
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
                        <input className="upload-input" type="file" ref={this.refInputFile} onChange={this.onUploadFileChange} /> 
                        <input className="upload-button" type="button" onClick={this.onUploadFileClick} value="Browse File" />
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile;