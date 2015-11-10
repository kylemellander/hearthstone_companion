import Ember from 'ember';

export function displayStats(params) {
  function getColor(value){
    var hue=((value)*120).toString(10);
    return ["hsl(",hue,",75%,33%)"].join("");
  };

  var perc = Math.round(params[0]/params[1]*10000)/100;
  return  '<span class="badge" style="background:' +
          getColor(perc / 100) + '">' +
          params[0] + ' / ' + params[1] +
          ' ( ' + perc + '% )' + '</span>';
}

export default Ember.Helper.helper(displayStats);
