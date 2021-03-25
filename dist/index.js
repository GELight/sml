"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = exports.WsvParserException = exports.WsvLine = exports.WsvDocumentServer = exports.WsvDocument = exports.WsvChar = exports.SmlParserException = exports.SmlNode = exports.SmlNamedNode = exports.SmlEmptyNode = exports.SmlElement = exports.SmlDocumentServer = exports.SmlDocument = exports.SmlAttribute = exports.ReliableTxtFile = exports.ReliableTxtException = exports.ReliableTxtEncoding = exports.ReliableTxtDocumentServer = exports.ReliableTxtDocument = void 0;
const ReliableTxtDocument_1 = __importDefault(require("./sml/ReliableTxtDocument"));
exports.ReliableTxtDocument = ReliableTxtDocument_1.default;
const ReliableTxtDocumentServer_1 = __importDefault(require("./sml/ReliableTxtDocumentServer"));
exports.ReliableTxtDocumentServer = ReliableTxtDocumentServer_1.default;
const ReliableTxtEncoding_1 = __importDefault(require("./sml/ReliableTxtEncoding"));
exports.ReliableTxtEncoding = ReliableTxtEncoding_1.default;
const ReliableTxtException_1 = __importDefault(require("./sml/ReliableTxtException"));
exports.ReliableTxtException = ReliableTxtException_1.default;
const ReliableTxtFile_1 = __importDefault(require("./sml/ReliableTxtFile"));
exports.ReliableTxtFile = ReliableTxtFile_1.default;
const SmlAttribute_1 = __importDefault(require("./sml/SmlAttribute"));
exports.SmlAttribute = SmlAttribute_1.default;
const SmlDocument_1 = __importDefault(require("./sml/SmlDocument"));
exports.SmlDocument = SmlDocument_1.default;
const SmlDocumentServer_1 = __importDefault(require("./sml/SmlDocumentServer"));
exports.SmlDocumentServer = SmlDocumentServer_1.default;
const SmlElement_1 = __importDefault(require("./sml/SmlElement"));
exports.SmlElement = SmlElement_1.default;
const SmlEmptyNode_1 = __importDefault(require("./sml/SmlEmptyNode"));
exports.SmlEmptyNode = SmlEmptyNode_1.default;
const SmlNamedNode_1 = __importDefault(require("./sml/SmlNamedNode"));
exports.SmlNamedNode = SmlNamedNode_1.default;
const SmlNode_1 = __importDefault(require("./sml/SmlNode"));
exports.SmlNode = SmlNode_1.default;
const SmlParserException_1 = __importDefault(require("./sml/SmlParserException"));
exports.SmlParserException = SmlParserException_1.default;
const WsvChar_1 = __importDefault(require("./sml/WsvChar"));
exports.WsvChar = WsvChar_1.default;
const WsvDocument_1 = __importDefault(require("./sml/WsvDocument"));
exports.WsvDocument = WsvDocument_1.default;
const WsvDocumentServer_1 = __importDefault(require("./sml/WsvDocumentServer"));
exports.WsvDocumentServer = WsvDocumentServer_1.default;
const WsvLine_1 = __importDefault(require("./sml/WsvLine"));
exports.WsvLine = WsvLine_1.default;
const WsvParserException_1 = __importDefault(require("./sml/WsvParserException"));
exports.WsvParserException = WsvParserException_1.default;
const StringUtil_1 = __importDefault(require("./sml/StringUtil"));
exports.StringUtil = StringUtil_1.default;
const doc = SmlDocument_1.default.parse(`
GPSData
  MetaData
    Author James
    Description "My favorite routes"
  End
  Route "Hier gehts lang"
  Route "Hier noch ein lustiger Weg"
  Route
    Name "Route 1"
    Waypoints
      Waypoint -43.3081 171.7652 "Waypoint A"
      Waypoint -43.2773 171.7552 "Waypoint B"
      Waypoint -43.2588 171.7705 "Waypoint C"
    End
  End
End
`);
// const document = doc.getRoot().toString();
// console.log(document);
// console.log(doc.spath("Route Waypoints @Waypoint"));
console.log(doc.spath("MetaData @Description"));
//# sourceMappingURL=index.js.map