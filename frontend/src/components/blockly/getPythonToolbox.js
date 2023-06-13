import Blockly from 'blockly';

export const getPythonToolbox = () => {
  return {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Logic',
        colour: '#5C81A6',
        contents: [
          {
            kind: 'block',
            blockxml: `<block type="controls_if"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="logic_compare"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="logic_operation"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="logic_boolean"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="logic_null"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="logic_ternary"></block>`
          },
        ]
      },  
      {
        kind: 'category',
        name: 'Loops',
        colour: '#5CA65C',
        contents: [
          {
            kind: 'block',
            blockxml: `<block type="controls_repeat_ext"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="controls_whileUntil"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="controls_for"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="controls_forEach"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="controls_flow_statements"></block>`
          },
        ]
      },  
      {
        kind: 'category',
        name: 'Math',
        colour: '#5C68A6',
        contents: [
          {
            kind: 'block',
            blockxml: `<block type="math_number"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_arithmetic"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_single"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_trig"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_constant"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_number_property"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_round"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_on_list"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_modulo"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_constrain"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="math_random_int"></block>`
          },
        ]
      },  
      {
        kind: 'category',
        name: 'Lists',
        colour: '#745CA6',
        contents: [
          {
            kind: 'block',
            blockxml: `<block type="lists_create_empty"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_create_with"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_repeat"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_length"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_isEmpty"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_indexOf"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_getIndex"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="lists_setIndex"></block>`
          },
        ]
      },  
      {
        kind: 'category',
        name: 'Text',
        colour: '160',
        contents: [
          {
            kind: 'block',
            blockxml: `<block type="text"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_join"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_append"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_length"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_isEmpty"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_indexOf"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_charAt"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_getSubstring"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_changeCase"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_trim"></block>`
          },
          {
            kind: 'block',
            blockxml: `<block type="text_print"></block>`
          },
        ]
      }, 
      { kind: 'sep' }, 
      {
        kind: 'category',
        name: 'Variables',
        custom: 'VARIABLE',
        colour: '#A65C81',
      },  
      {
        kind: 'category',
        name: 'Functions',
        custom: 'PROCEDURE',
        colour: '#9A5CA6',
      },  
    ]
  };
};
