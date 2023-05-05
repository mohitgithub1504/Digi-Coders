import React, { useEffect, useRef, useState } from "react";
import BlocklyComponent, { Block, Value, Field, Shadow } from "../../Blockly";

// import "../../customBlocks";
import "../../generator";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const Builder = () => {
  const { chapter_id } = useParams();
  const { apiUrl, blockData } = app_config;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("trainer"))
  );

  const [chapterData, setChapterData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [addedBlocks, setAddedBlocks] = useState([]);

  const [xml, setXml] = useState(`<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>`);

  const fetchChapterData = async () => {
    setLoading(true);
    const res = await fetch(`${apiUrl}/chapter/getbyid/${chapter_id}`);
    const data = await res.json();
    setChapterData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchChapterData();
  }, []);

  const checkBlockAlreadyAdded = (blockname) => {
    return addedBlocks.includes(blockname);
  };

  const addBlock = (blockname) => {
    setAddedBlocks([...addedBlocks, blockname]);
  };

  const updateChapter = async () => {
    const res = await fetch(`${apiUrl}/chapter/update/${chapterData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          xml: xml,
          blocks: addedBlocks,
        },
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  const displayBlockOptions = () => {
    return blockData.blockTypes.map((block) => (
      <div className="row mb-3">
        <div className="col-8">
          <h5>{block}</h5>
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary w-100"
            disabled={checkBlockAlreadyAdded(block)}
            onClick={() => addBlock(block)}
          >
            Add
          </button>
        </div>
      </div>
    ));
  };

  const chapterUpdateForm = () => {};

  return (
    <div>
      <div className="container-fluid">
        <div style={{ height: "25vh", overflow: "auto" }} className="">
          {displayBlockOptions()}
        </div>
        <button className="btn btn-primary" onClick={updateChapter}>
          Update Chapter
        </button>
        <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={xml}
          height="60vh"
        >
          {addedBlocks.map((type) => (
            <Block type={type} />
          ))}
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR">text</Field>
              </Block>
            </Value>
          </Block>
        </BlocklyComponent>
      </div>
    </div>
  );
};

export default Builder;
