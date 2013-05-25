;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar({breakPoint: 900}) : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

 /* $.ajax({
    type: 'GET',
    url: 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=lauracabrera&count=1',
    dataType: 'jsonp',
    success: function(json) {
       // var result = json.html;
        //alert(json[0]);
        //$('#twitter-tweet-lc').append(result);

       

       


    }
  });*/

  // UPDATE 10-17-2012: change in Twitter API!
/*$.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=lauracabrera&count=5&callback=?",
 function(data){
  $.each(data, function(i,item){
   ct = item.text;
  // include time tweeted - thanks to will
  mytime = item.created_at;
  var strtime = mytime.replace(/(\+\S+) (.*)/, '$2 $1')
  var mydate = new Date(Date.parse(strtime)).toLocaleDateString();
  var mytime = new Date(Date.parse(strtime)).toLocaleTimeString();
   ct = ct.replace(/http:\/\/\S+/g,  '<a href="$&" target="_blank">$&</a>');
   ct = ct.replace(/\s(@)(\w+)/g,    ' @<a onclick="javascript:pageTracker._trackPageview('/outgoing/twitter.com/');" href="http://twitter.com/$2" target="_blank">$2</a>');
   ct = ct.replace(/\s(#)(\w+)/g,    ' #<a onclick="javascript:pageTracker._trackPageview('/outgoing/search.twitter.com/search?q=%23');" href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
   
  $("#twitter-tweet-lc").append('
<div>'+ct + " <small><i>(" + mydate + " @ " + mytime + ")</i></small></div>

");
  });
 });*/




/*
$.getJSON("https://api.twitter.com/1/statuses/user_timeline/uniofgreenwich.json?count=1&callback=?",
    function(data){
      $("#twitter-tweet-lc").append("<a href='http://twitter.com/#!/uniofgreenwich/status/"+data[0].id_str+"'>" + data[0].text + "</a>");
  });

*/

/*
  <ul id="tweetList"></ul>
    <script type="text/javascript" charset="utf-8">
      var twitterCallback = function(tweets) {
        var i, tweetList = $("#twitter-tweet-lc");
        for( i = 0; i < tweets.length; i++ ) {
          //tweetList.innerHTML = tweetList.innerHTML + '<li>' + tweets[i].text + '</li>';
          tweetList.append('<li>' + tweets[i].text + '</li>');
        }
      };
    </script>
    <script src="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=lauracabrera&count=3&callback=twitterCallback" 
              type="text/javascript" 
              charset="utf-8">
    </script>


 $.ajax({
  url:'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitterapi&count=2',
  dataType:'json',
  success:function(data){ console.log(data); }
});*/

  $("#sample_user_badge").GitHubBadge({
                login: "lzcabrera",
                sort_on: "date", // "date" or "name"
                sorting: "descending"
                
            });

  


})(jQuery, this);


     

