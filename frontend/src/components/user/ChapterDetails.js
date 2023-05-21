import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlocklyComponent, { Block, Value, Field, Shadow } from "../../Blockly";
import app_config from "../../config";

const ChapterDetails = () => {
  const { id } = useParams();
  const { apiUrl } = app_config;

  const [chapterDetails, setChapterDetails] = useState(null);

  const [xml, setXml] = useState(`<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="controls_ifelse" x="10" y="10">
  
  </block>
  </xml>`);

  const fetchChapterData = async () => {
    const res = await fetch(apiUrl + "/chapter/getbyid/" + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setChapterDetails(data);
    // setXml(data.data);
  };

  useEffect(() => {
    fetchChapterData();
  }, []);

  const displayChapterDetails = () => {
    if (chapterDetails !== null) {
      return (
        <section className="bg-dark">
          <div className="container py-5">
            <div className="">
              <div className="card-body text-white">
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-4 mt-4">
                    <div
                      class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-7"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={apiUrl + "/" + chapterDetails.icon}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="content col-md-6 mb-4 mb-md-0 ">
                    <div class="row">
                      <div class="col-4">
                        <h5 className="fw-bold mx-3">
                          <strong>Title - </strong>
                        </h5>
                      </div>
                      <div class="col-8">
                        <p className="text-white">{chapterDetails.title}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-4">
                        <h5 className="fw-bold mx-3">
                          <strong>category - </strong>
                        </h5>
                      </div>
                      <div class="col-8">
                        <p className="text-white">{chapterDetails.category}</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-4">
                        <h5 className="fw-bold mx-3">
                          <strong>Description - </strong>
                        </h5>
                      </div>
                      <div class="col-8">
                        <p className="text-white">{chapterDetails.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <div>
      {displayChapterDetails()}
      <section>
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
          // blocks={addedBlocks}
        >
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
      </section>
    </div>
  );
};

export default ChapterDetails;
