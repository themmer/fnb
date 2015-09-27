import Ember from 'ember';

export default Ember.Component.extend({
  /**
   The chart's wrapper element.

   @private
   @property tagName
   @type String
   */
  tagName: 'div',

  /**
   The class(es) applied to the wrapper element.

   @private
   @property classes
   @type Array
   */
  classNames: ['c3-time-chart'],

  /**
   The data used to render the chart

   @public
   @property data
   @type Object
   */
  data: null,

  /**
   The graph instace created with `c3.generate`

   @private
   @property graphInstance
   @type Object
   */
  graphInstance: null,

  /**
   Gets the data in the formatted expected by the graph

   Example data:

   [
      ['x', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01',
      '2017-01-01'],
      ['data1', 30, 200, 100, 400, 150],
      ['data2', 130, 340, 200, 500, 250]
  ]

   @private
   @method
   */
  getFormattedData(data) {
    let formattedData = data;

    return formattedData;
  },

  /**
   Renders the pie chart

   @private
   @method
   */
  renderGraph: Ember.observer('data', function() {
    let graph = this.get('graphInstance');
    let data = this.get('data');
    let _this = this;
    let elementId = this.get('element').id;

    if (graph) {
      // Perhaps we can unload data if we find it necessary
      // graph.unload();
      graph.load({
        columns: _this.getFormattedData(data)
      });
    } else {
      graph = c3.generate({
        bindto: `#${elementId}`,
        data: {
          x: 'x',
          columns: _this.getFormattedData(data)
        },
        // axis: {
        //   x: {
        //     type: 'timeseries',
        //     tick: {
        //       format: '%Y'
        //     }
        //   }
        // },
        transition: {
          duration: 300
        }
      });
    }

    this.set('graphInstance', graph);
  }),

  /**
   Set's up the graph once the wrapper element is ready.

   @private
   @method
   */
  _didInsertElement: Ember.on('didInsertElement', function() {
    this.renderGraph();
  }),

  /**
   Destroys the chart when leaving the route.

   @private
   @method
   */
  _willDestroyElement: Ember.on('willDestroyElement', function() {
    let graph = this.get('graphInstance');

    graph = graph.destroy();
  })
});