import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import { BlocklyWorkspace } from 'react-blockly';
import { DEFAULT_OPTIONS } from '../blockly/defaults';
import { getHTMLToolbox } from '../blockly/getHTMLToolbox';
import '../blockly/htmlBlock';
import { getJSToolbox } from '../blockly/getJSToolbox';
import { javascriptGenerator } from 'blockly/javascript';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HtmlGenerator from '../blockly/htmlGenerator';

const toolbox = getHTMLToolbox();

const getToolbox = (category) => {
  if (category === 'HTML') return getHTMLToolbox();
  else if (category.toLowerCase() === 'javascript') return getJSToolbox();
  else return getHTMLToolbox();
};

const getLangugage = (category) => {
  if (category === 'HTML') return 'html';
  else if (category.toLowerCase() === 'javascript') return 'javascript';
  else return 'javascript';
};

const ChapterDetails = () => {
  const { id } = useParams();
  const { apiUrl } = app_config;
  const [workspace, setWorkspace] = useState(null);

  const [currentLanguage, setCurrentLanguage] = useState('');

  const [chapterDetails, setChapterDetails] = useState(null);

  const [generatedCode, setGeneratedCode] = useState('');

  const [xml, setXml] = useState(`<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="controls_ifelse" x="10" y="10">
  
  </block>
  </xml>`);

  const fetchChapterData = async () => {
    const res = await fetch(apiUrl + '/chapter/getbyid/' + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setChapterDetails(data);
    setCurrentLanguage(getLangugage(data.category));
    // setXml(data.data);
  };

  useEffect(() => {
    fetchChapterData();
  }, []);

  const displayChapterDetails = () => {
    if (chapterDetails !== null) {
      return (
        <>
          <section className="" style={{ backgroundColor: '#29c1fe' }}>
            <div className="container py-4 px-5">
              <div className="py-2">
                <div className="card-body text-white">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 col-lg-4 mx-5">
                      <div class="bg-image hover-overlay ripple mx-5 shadow-4-strong rounded-7" data-mdb-ripple-color="light" style={{ width: "350px", height: "200px", backgroundSize: "cover" }}>
                        <img src={apiUrl + '/' + chapterDetails.icon} className="img-fluid" />
                      </div>
                    </div>
                    <div className="content col-md-6 mb-4 text-justify">
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
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  const generateCode = (workspace) => {
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code);
    setGeneratedCode(code);
  };

  const executeCode = () => {
    eval(generatedCode);
  };

  const generateHtmlCode = (workspace) => {
    // console.log('function called');
    const code = [];
    const blocks = workspace.getAllBlocks();
    // console.log(blocks);
    // Iterate through all blocks
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      // console.log(block);
      code.push(`${HtmlGenerator[block.type](block)}`)
      // console.log(code);
      // setGeneratedCode(generateCode+code);
      // Check block type

      // Add more conditions for other HTML blocks

      // Handle nested blocks recursively (if necessary)
      // Example:
      // if (block.type === 'html_container') {
      //   const innerCode = generateHtmlCode(block.getInputTargetBlock('STACK'));
      //   code.push(innerCode);
      // }
    }

    setGeneratedCode(code.join('\n'));
  };

  const getGenerator = (language) => {
    // console.log(language);
    if (language.toLowerCase() === 'html') return generateHtmlCode;
    else if (language.toLowerCase() === 'javascript') return generateCode;
    else return generateCode;
  }

  return (
    <div>
      {displayChapterDetails()}
      <section>
        <div className="card">
          <div className="px-3 py-2" style={{ backgroundColor: "#f1f1f1" }}>
            <div class="row d-flex align-items-center">
              <div class="col">
                <h4 className="card-title text-uppercase fw-bold mt-2 mx-4" style={{ fontSize: "30px", letterSpacing: "2px" }}>
                  <strong>Digi Coders Editor</strong>
                </h4>
              </div>
              <div class="col">
                <button className="btn btn-danger" onClick={executeCode} style={{ marginLeft: "510px" }}>
                  <i className="fas fa-play fa-sm me-2" />Run Program
                </button>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                {chapterDetails !== null && (
                  <BlocklyWorkspace
                    workspaceConfiguration={DEFAULT_OPTIONS}
                    className="blockly-editor"
                    toolboxConfiguration={getToolbox(chapterDetails.category)}
                    initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
        
        </xml>`}
                    onWorkspaceChange={generateHtmlCode}
                  />
                )}
              </div>
              <div className="col-md-3">
                <div className="card" style={{ height: '100%' }}>
                  <div className="py-2" style={{ backgroundColor: "#f1f1f1" }}>
                    <h5 className='text-uppercase text-center fw-bold mt-2 mx-3' style={{ fontSize: "25px", letterSpacing: "2px" }}>
                      Code Output
                    </h5>
                  </div>
                  <div className="card-body h6">
                    {chapterDetails && (
                      <SyntaxHighlighter language={getLangugage(chapterDetails.category)} style={docco}>
                        {generatedCode}
                      </SyntaxHighlighter>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChapterDetails;
