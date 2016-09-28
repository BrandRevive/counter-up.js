function statCounter(statsID, stats, speed) {

  function loopStats(callback) {
    for ( var i = 0; i < stats.length; i++ ) {
      callback(i, stats[i]);
    }
  }

  function getMinAmount() {
    var min;
    loopStats(function(i, stat) {
      if (min)
        min = Math.min(min, stat['amount']);
      else min = stat['amount'];
    });
    return min;
  }

  function counterInView() {
    var statsElement = document.getElementById(statsID);
    var view = statsElement.getBoundingClientRect();
    return (view.top - window.innerHeight < 0) && (view.bottom > 0);
  }

  /* Updates the counters */
  function updateCounters() {
    loopStats(function(i, stat) {

      var counterElement = document.querySelector( '#stat-'+i+' .counter' );
      var amount = parseInt(counterElement.innerHTML);
      if ( amount < stat['amount'] - Math.ceil(stat['amount']/getMinAmount())) {
        counterElement.innerHTML = amount + Math.ceil(stat['amount']/getMinAmount());
      } else {
        counterElement.innerHTML = stat['amount'];
      }

    });
  }

  function startCounters() {
    window.setInterval(updateCounters, speed);
  }

  /* Create counter HTML */
  function initializeCounters() {
    var counterHTML = '';
    loopStats(function(i, stat) {
      var statHTML = ''+
        '<div class="stat" id="stat-'+i+'">'+
          '<div class="counter">0</div>'+
            '<div class="label">'+stat['label']+'</div>'+
          '</div>'+
        '</div>';
      counterHTML += statHTML;
    });
    document.getElementById(statsID).innerHTML = counterHTML;
    if (counterInView()) {
      startCounters();
    } else {
      var scrollEvent = function(event) {
        if (counterInView()) {
          startCounters();
          window.removeEventListener('scroll', scrollEvent, false);
        }
      }
      window.addEventListener('scroll', scrollEvent);
    }
  }

  initializeCounters();
}
