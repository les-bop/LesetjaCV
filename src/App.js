import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

(function(System, SystemJS) {
  (function(
    require,
    exports,
    module,
    __filename,
    __dirname,
    global,
    GLOBAL,
    process,
    Buffer
  ) {
    'use strict';
    var __importDefault =
      (this && this.__importDefault) ||
      function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, '__esModule', { value: true });
    const react_1 = __importDefault(require('react'));
    const styles_1 = require('@material-ui/core/styles');
    const Grid_1 = __importDefault(require('@material-ui/core/Grid'));
    const Divider_1 = __importDefault(require('@material-ui/core/Divider'));
    const Call_1 = __importDefault(require('@material-ui/icons/Call'));
    const Email_1 = __importDefault(require('@material-ui/icons/Email'));
    const LinearProgress_1 = __importDefault(
      require('@material-ui/core/LinearProgress')
    );

    const useStyles = styles_1.makeStyles(theme => ({
      root: {
        flexGrow: 1,
        padding: 4,
        width: '80%',
        alignItems: 'left',
        justifyContent: 'center',
        backgroundColor: 'grey'
      }
    }));
    const BorderLinearProgress = styles_1.withStyles(theme => ({
      root: {
        height: 10,
        borderRadius: 5
      },
      colorPrimary: {
        backgroundColor:
          theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
      },
      bar: {
        borderRadius: 5,
        backgroundColor: 'grey'
      }
    }))(LinearProgress_1.default);

    const useStylesFacebook = styles_1.makeStyles(theme => ({
      root: {
        position: 'relative'
      },
      bottom: {
        color: theme.palette.grey[theme.palette.type === 'dark' ? 500 : 900]
      },
      top: {
        color: 'grey',
        animationDuration: '600ms',
        position: 'absolute',
        left: 0
      },
      circle: {
        strokeLinecap: 'round'
      }
    }));
    function FullWidthGrid() {
      const classes = useStyles();
      return react_1.default.createElement(
        'div',
        { align: 'center', style: { backgroundColor: 'white' } },
        react_1.default.createElement(
          'div',
          {
            className: classes.root,
            align: 'center',
            style: { backgroundColor: 'darkgrey' }
          },

          react_1.default.createElement(
            Grid_1.default,
            { container: true, spacing: 0 },
            react_1.default.createElement(
              Grid_1.default,
              { item: true, xs: 4 },
              react_1.default.createElement('div', {
                style: {
                  height: '20vh',
                  borderRadius: '50px',
                  backgroundSize: 'cover',
                  backgroundImage: `url("https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png")`
                }
              }),

              react_1.default.createElement('div', {
                style: {
                  backgroundColor: 'yellow',
                  height: '6.5vh',
                  backgroundColor: 'white',
                  paddingTop: '5px',
                  borderColor: '#004743',
                  borderBottom: '2px',
                  textAlign: 'left'
                }
              })
            ),
            react_1.default.createElement(Divider_1.default, null),

            react_1.default.createElement(
              Grid_1.default,
              { item: true, xs: 8 },
              react_1.default.createElement(
                'div',
                {
                  style: {
                    backgroundColor: 'white',
                    height: '18.8vh',
                    paddingLeft: '25px',
                    paddingTop: '10px'
                  },
                  align: 'center'
                },

                react_1.default.createElement(
                  'h2',
                  { style: { color: 'grey' } },
                  'Attributes'
                ),

                react_1.default.createElement(
                  'label',
                  { align: 'left' },
                  'I am a hard working candidate with strong interpersonal skills and with the aim of excellence in all given task. I am determined to succeed with which I can relate with people'
                )
              ),

              react_1.default.createElement(
                'div',
                {
                  style: {
                    backgroundColor: 'grey',
                    height: '6.8vh',
                    paddingTop: '1px',
                    paddingLeft: '5px',
                    borderRadius: '80px'
                  }
                },
                react_1.default.createElement(
                  'h3',
                  { style: { color: 'white' } },
                  'Lesetja Bopape'
                )
              )
            ),
            react_1.default.createElement('br', null),
            react_1.default.createElement('label', null, ' '),

            /*Left grid style*/
            react_1.default.createElement(
              Grid_1.default,
              {
                item: true,
                xs: 4,
                style: {
                  borderStyle: 'solid',
                  borderRight: '0px',
                  borderLeft: '0px',
                  borderBottom: 'opx',
                  borderTop: '0px'
                }
              },
              react_1.default.createElement(
                'div',
                {
                  style: {
                    height: '115vh',
                    backgroundColor: 'white',
                    paddingLeft: '15px',
                    textAlign: 'center'
                  }
                },

                react_1.default.createElement(
                  'div',
                  { style: { height: 'auto', backgroundColor: 'white' } },
                  react_1.default.createElement('br', null),
                  react_1.default.createElement(
                    'div',
                    { style: { width: 'auto' } },
                    react_1.default.createElement(
                      'label',
                      { style: { marginBottom: 'px' } },
                      ' '
                    ),
                    ' ',

                    react_1.default.createElement('br', null),
                    react_1.default.createElement('label', null, ' '),

                    /*Contact*/
                    react_1.default.createElement(
                      'h2',
                      { style: { color: 'grey' } },
                      'Contact'
                    ),
                    react_1.default.createElement(Divider_1.default, null),
                    react_1.default.createElement(
                      'label',
                      null,
                      ' ',
                      react_1.default.createElement(Call_1.default, null),
                      '076 120 2388 '
                    ),
                    '  ',
                    react_1.default.createElement('br', null),
                    react_1.default.createElement(
                      'label',
                      null,
                      ' ',
                      react_1.default.createElement(Email_1.default, null),
                      'lesetjabop@gmail.com'
                    ),
                    '  ',
                    react_1.default.createElement('br', null),
                    react_1.default.createElement('label', null, ' ')
                  )
                ),
                '  ',

                react_1.default.createElement(
                  'div',
                  {
                    className: classes.paper,
                    style: { height: 'auto', backgroundColor: 'white' }
                  },
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  /*Skills*/
                  react_1.default.createElement(
                    'h2',
                    { style: { color: 'grey' } },
                    react_1.default.createElement,
                    ' Skills '
                  ),
                  react_1.default.createElement(Divider_1.default, {
                    style: { marginBottom: '15px' }
                  }),

                  react_1.default.createElement(
                    'label',
                    { style: { marginBottom: '50px' } },
                    'Android'
                  ),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  react_1.default.createElement(
                    'label',
                    { style: { marginBottom: '50px' } },
                    'C#'
                  ),

                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  react_1.default.createElement(
                    'label',
                    { style: { marginBottom: '50px' } },
                    'Web Development'
                  ),

                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  react_1.default.createElement(
                    'label',
                    { style: { marginBottom: '50px' } },
                    'System Analysis and Design'
                  ),

                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  react_1.default.createElement(
                    'label',
                    { style: { marginBottom: '50px' } },
                    'Java'
                  ),

                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null)
                ),

                react_1.default.createElement(
                  'div',
                  {
                    className: classes.paper,
                    style: { height: 'auto', backgroundColor: 'white' }
                  },
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),

                  /* References*/
                  react_1.default.createElement(
                    'h2',
                    { style: { color: 'grey' } },
                    react_1.default.createElement,
                    'References'
                  ),
                  react_1.default.createElement(Divider_1.default, null),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('label', null, 'Dr Bopape'),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement(
                    'label',
                    null,
                    'Cell:076 120 2388'
                  ),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement(
                    'label',
                    null,
                    'Email:Bopape1@gmail.com'
                  ),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('label', null, 'Mr Malebana'),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement(
                    'label',
                    null,
                    'Cell:076 156 8596'
                  ),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement(
                    'label',
                    null,
                    'Email:Malebana2@gmail.com'
                  ),
                  react_1.default.createElement('br', null),
                  react_1.default.createElement('br', null)
                )
              )
            ),

            /*Grid Style*/
            react_1.default.createElement(
              Grid_1.default,
              { item: true, xs: 8 },
              react_1.default.createElement(
                'div',
                {
                  className: classes.paper,
                  style: {
                    backgroundColor: 'white',
                    borderStyle: 'solid',
                    borderBottom: 'none',
                    borderRight: 'none',
                    borderTop: 'none',
                    padding: '19px',
                    textAlign: 'left',
                    height: '109vh',
                    borderColor: 'grey'
                  }
                },

                /*High School*/
                react_1.default.createElement(
                  'h2',
                  { style: { color: 'grey' } },
                  react_1.default.createElement,
                  'High School'
                ),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement('br', null),
                react_1.default.createElement(
                  'label',
                  null,
                  'School: Chipa-Tabane Secondary School'
                ),
                react_1.default.createElement('br', null),
                react_1.default.createElement(
                  'label',
                  null,
                  'Year Completed: 2016'
                ),

                /*Tertiary level*/
                react_1.default.createElement(
                  'h2',
                  { style: { color: 'grey' } },
                  'Tertiary'
                ),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement(
                  'label',
                  null,
                  'Institution: IIE Rosebank College'
                ),
                react_1.default.createElement('br', null),
                react_1.default.createElement('br', null),
                react_1.default.createElement(
                  'label',
                  null,
                  'Course: Diploma in IT in Software Developement'
                ),
                react_1.default.createElement('br', null),
                react_1.default.createElement('br', null),
                react_1.default.createElement(
                  'label',
                  null,
                  'Status: Completed'
                ),
                react_1.default.createElement('br', null),
                react_1.default.createElement('br', null),

                /*Work experience*/
                react_1.default.createElement(
                  'h2',
                  { style: { color: 'grey' } },
                  'Work Experience'
                ),
                react_1.default.createElement(Divider_1.default, null),
                react_1.default.createElement('label', null, ' Protime Sports'),
                react_1.default.createElement('br', null),
                react_1.default.createElement(
                  'label',
                  null,
                  'February 2019 to March 2021'
                ),
                react_1.default.createElement('br', null),
                react_1.default.createElement('br', null)
              )
            )
          )
        )
      );
    }
    exports.default = FullWidthGrid;
  }.apply(__cjsWrapper.exports, __cjsWrapper.args));
})(System, System);
