import React from "react";
import "./UploadFile.css"

class UploadFile extends React.Component {
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
                        <image className="upload-icon"></image>
                        <div className="upload-text1">
                            <p>Drag your .csv file here to start uploading.</p>
                        </div>
                        <div className="upload-text2">
                            <p>----- OR -----</p>
                        </div>
                        <button className="upload-button">Browse File</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile;