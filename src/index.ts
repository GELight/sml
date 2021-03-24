import ReliableTxtDocument from "./sml/ReliableTxtDocument";
import ReliableTxtDocumentServer from "./sml/ReliableTxtDocumentServer";
import ReliableTxtEncoding from "./sml/ReliableTxtEncoding";
import ReliableTxtException from "./sml/ReliableTxtException";
import ReliableTxtFile from "./sml/ReliableTxtFile";

import SmlAttribute from "./sml/SmlAttribute";
import SmlDocument from "./sml/SmlDocument";
import SmlDocumentServer from "./sml/SmlDocumentServer";
import SmlElement from "./sml/SmlElement";
import SmlEmptyNode from "./sml/SmlEmptyNode";
import SmlNamedNode from "./sml/SmlNamedNode";
import SmlNode from "./sml/SmlNode";
import SmlParserException from "./sml/SmlParserException";

import WsvChar from "./sml/WsvChar";
import WsvDocument from "./sml/WsvDocument";
import WsvDocumentServer from "./sml/WsvDocumentServer";
import WsvLine from "./sml/WsvLine";
import WsvParserException from "./sml/WsvParserException";

import StringUtil from "./sml/StringUtil";

export {
    ReliableTxtDocument,
    ReliableTxtDocumentServer,
    ReliableTxtEncoding,
    ReliableTxtException,
    ReliableTxtFile,

    SmlAttribute,
    SmlDocument,
    SmlDocumentServer,
    SmlElement,
    SmlEmptyNode,
    SmlNamedNode,
    SmlNode,
    SmlParserException,

    WsvChar,
    WsvDocument,
    WsvDocumentServer,
    WsvLine,
    WsvParserException,

    StringUtil
};

const doc = SmlDocument.parse(`
GPSData
  MetaData
    Author James
    Description "My favorite routes"
  End
  Route "Hier gehts lang..."
  Route
    Name "Route 1"
    Waypoints
      Waypoint -43.3081 171.7652 "Waypoint A"
      @Waypoint -43.2773 171.7552 "Waypoint B"
      Waypoint -43.2588 171.7705 "Waypoint C"
    End
  End
End
`);
const document = doc.getRoot().toString();
console.log(document);

doc.spath("Route Waypoints @Waypoint");
