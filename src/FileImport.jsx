import React, { useState } from "react";
import Papa from "papaparse";

let parsedOutput = '';

export function FileImport(props) {
    const [file, setFile] = useState();

    const fileReader = new FileReader();
    

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = async function (event) {
                 const csvOutput = event.target.result;
                 parsedOutput = Papa.parse(csvOutput, { header: true });
                 props.updateData(parsedOutput.data);
                 console.log(parsedOutput.data);
            };

            fileReader.readAsText(file);
        }
    };

    return (
        <div style={{margin: '24px'}}>
            <h1>Load CSV</h1>
            <form>
                <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                />

                <button
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                >
                    Load CSV
                </button>
            </form>
        </div>
    );
}

export default FileImport;

export function getFileData() {
    return parsedOutput;
}