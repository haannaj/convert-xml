# Convert Txt to XML

_This application is an assignment to convert a txt-file to a xml-file. It's written in JavaScript/Node.js._\
_Executable files: https://github.com/haannaj/convert-xml/releases_


### Run application
    npm start

### Test application
    npm test


### About the code
The file **main.js** is reading a txt-file and writing the xml-file. The file **convertModel.js** contains functions to create jsonObject from the txt-file and to convert the jsonObject in to XML content. 

In main.js, after reading the txt-file, the data is send to the convertTojsonObj-function which returns a jsonObject. Thereafter it will send the jsonObject to the convertToXML-function that will return XML content and write **convertTxt.xml** with the jsonObject converted to XML.

The test assert that the written XML-file is what expected according to the input txt-file. 
