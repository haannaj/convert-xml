import * as convert from "xml-js";

const convertModel = {
  convertTojsonObj: function convertTojsonObj(data) {
    let personIndex = -1;
    let familyMember = -1;

    let jsonObj = {
      people: [
        {
          person: [],
        },
      ],
    };

    data = data.split("\n");

    Object.keys(data).forEach((key, index) => {
      let dataRow = data[index].split("|");
      let firstLetter = dataRow[0];
      let personObj = jsonObj["people"][0]["person"];

      switch (firstLetter) {
        case "P":
          personObj[personObj.length] = {
            firstname: dataRow[1],
            lastname: dataRow[2],
          };
          familyMember = -1;
          personIndex += 1;
          break;

        case "A":
          if (familyMember == -1) {
            personObj[personIndex]["address"] = {
              street: dataRow[1],
              city: dataRow[2],
              code: dataRow[3],
            };
            break;
          }
          personObj[personIndex]["family"][familyMember]["adress"] = {
            street: dataRow[1],
            city: dataRow[2],
            code: dataRow[3],
          };
          break;

        case "T":
          if (familyMember == -1) {
            personObj[personIndex]["phone"] = {
              mobile: dataRow[1],
              landline: dataRow[2],
            };
            break;
          }
          personObj[personIndex]["family"][familyMember]["phone"] = {
            mobile: dataRow[1],
            landline: dataRow[2],
          };
          break;

        case "F":
          familyMember += 1;

          if (familyMember == 0) {
            personObj[personIndex]["family"] = [];
          }

          personObj[personIndex]["family"][familyMember] = {
            name: dataRow[1],
            born: dataRow[2],
          };
          break;

        default:
          break;
      }
    });

    return jsonObj;
  },
  convertToXML: function convertToXML(jsonObj) {
    let json = JSON.stringify(jsonObj);
    let xml = convert.json2xml(json, { compact: true, spaces: 4 });

    return xml;
  },
};

export default convertModel;
