//// [file.tsx]

import React = require('react');

class Poisoned extends React.Component<{}, {}> {
    render() {
        return <div>Hello</div>;
    }
}

const obj: Object = {};

// OK
let p = <Poisoned {...obj} />;
let y = <Poisoned />;

//// [file.jsx]
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Poisoned = (function (_super) {
    __extends(Poisoned, _super);
    function Poisoned() {
        return _super.apply(this, arguments) || this;
    }
    Poisoned.prototype.render = function () {
        return <div>Hello</div>;
    };
    return Poisoned;
}(React.Component));
var obj = {};
// OK
var p = <Poisoned {...obj}/>;
var y = <Poisoned />;
