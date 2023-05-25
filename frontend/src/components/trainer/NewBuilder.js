import React from "react";
import { BlocklyWorkspace } from "react-blockly";
import { getDefaultToolbox } from "../blockly/getDeaultToolbox";
import '../blockly/htmlBlock';

const toolbox = getDefaultToolbox();

const NewBuilder = () => {
  const DEFAULT_OPTIONS = {
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: "START",
    css: true,
    media: "https://blockly-demo.appspot.com/static/media/",
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
      spacing: 20,
      length: 1,
      colour: "#888",
      snap: true,
    },
    zoom: {
      controls: true,
      wheel: false,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
    maxInstances: {
      alert_context: 1,
    },
  };

  return (
    <div style={{ height: "100vh", width: '100%' }}>
      <BlocklyWorkspace
      workspaceConfiguration={DEFAULT_OPTIONS}
        className="blockly-editor"
        toolboxConfiguration={toolbox}
        initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
        <block type="controls_ifelse" x="10" y="10">
        
        </block>
        </xml>`}
      />
    </div>
  );
};

export default NewBuilder;
