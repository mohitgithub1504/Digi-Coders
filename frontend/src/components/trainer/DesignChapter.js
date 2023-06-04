import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import { BlocklyWorkspace } from 'react-blockly';
import { DEFAULT_OPTIONS } from '../blockly/defaults';
import { getHTMLToolbox } from '../blockly/getHTMLToolbox';
import '../blockly/htmlBlock';
import { getJSToolbox } from '../blockly/getJSToolbox';
import XMLParser from 'react-xml-parser';

const toolbox = getHTMLToolbox();

const getToolbox = (category) => {
  if (category === 'HTML') return getHTMLToolbox();
  else if (category === 'JS') return getJSToolbox();
  else return getHTMLToolbox();
};

const DesignChapter = () => {
  const { id } = useParams();
  const { apiUrl } = app_config;

  const [chapterDetails, setChapterDetails] = useState(null);

  const [selBlocks, setSelBlocks] = useState([]);

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
    console.log(getHTMLToolbox());
    console.log(getHTMLToolbox().contents[0].contents.map((block) => new XMLParser().parseFromString(block.blockxml).attributes.type));
    // setXml(data.data);
  };

  const updateChapter = async () => {
    const res = await fetch(apiUrl + '/chapter/update/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blockStructure: selBlocks,
      }),
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    fetchChapterData();
  }, []);

  const getBlockType = (block) => {
    return block.blockxml ? new XMLParser().parseFromString(block.blockxml).attributes.type : '';
  };

  const displayBlockOptions = () => {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Block Options</h4>
        </div>
        <div className="card-body">
          <div className="row">
            {getToolbox(chapterDetails.category)
              .contents.filter((group) => group.kind === 'category' && group.contents)
              .map((category) => (
                <div className="col-md-4 mb-4">
                  <h3>{category.name}</h3>
                  <ul className="list-group">
                    {category.contents.map((block) => (
                      <li className="list-group-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <p>{getBlockType(block)}</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelBlocks([...selBlocks, block]);
                                  console.log(selBlocks);
                                } else {
                                  setSelBlocks(selBlocks.filter((b) => b !== getBlockType(block)));
                                }
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const displayChapterDetails = () => {
    if (chapterDetails !== null) {
      return (
        <section className="" style={{ backgroundColor: '#29c1fe' }}>
          <div className="container py-4 px-5">
            <div className="my-4">
              <div className="card-body text-white">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 col-lg-4 mx-5">
                    <div class="bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-7" data-mdb-ripple-color="light">
                      <img src={apiUrl + '/' + chapterDetails.icon} className="img-fluid" />
                    </div>
                  </div>
                  <div className="content col-md-6 mb-4 mb-md-0 text-justify ">
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
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Digi Code Editor</h4>
            <button className='btn btn-primary' onClick={updateChapter}>Submit</button>
          </div>
          <div className="card-body">{chapterDetails !== null && displayBlockOptions()}</div>
          <div className="card-footer">
            <button className="btn btn-primary">Run</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignChapter;
