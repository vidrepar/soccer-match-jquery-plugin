;(function ($) {

    $.fn.matchCarouselBet = function () {

        var resDoc = resData.doc;
        var matchObjectArray = [];

        for (var i = 0; i < resDoc.length; i++) {

            for (var j = 0; j < 1; j++) {
                for (var k = 0; k < resDoc[i].data[0].realcategories.length; k++) {
                    for (var l = 0; l < resDoc[i].data[0].realcategories[k].tournaments.length; l++) {
                        for (var m = 0; m < resDoc[i].data[0].realcategories[k].tournaments[l].matches.length; m++) {

                            matchObjectArray.push({
                                tournamentName: resDoc[i].data[0].realcategories[k].tournaments[l].name,
                                attendance: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].attendance,
                                weather: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].weather,
                                homeId: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].teams.home.uid,
                                homeTeam: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].teams.home.name,
                                homeResult: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].result.home,
                                awayId: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].teams.away.uid,
                                awayTeam: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].teams.away.name,
                                awayResult: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].result.away,
                                hf: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m].hf,
                                matchLocation: resDoc[i].data[0].realcategories[k].name,
                                matchDate: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m]._dt.date,
                                matchTime: resDoc[i].data[0].realcategories[k].tournaments[l].matches[m]._dt.time
                            });
                        }
                    }
                }
            }
        }


        function propComparator(prop) {
            return function (a, b) {
                return b[prop] - a[prop];
            }
        };

        matchObjectArray.sort(propComparator('hf'));

        for (var e = 0; e < 10; e++) {



            $("#plugin")
                .addClass('text-align-center')
                .append(
                    "<div id='width-870' class='inline-block'>" +
                        "<div id='match-context'>" +
                            "<span id='tournament-name' class='inline-block'>" + matchObjectArray[e].tournamentName + "</span>" +
                        "</div>" +
                        "<div id='progress-bar-empty'>" +
                            "<div id='progress-bar-full'></div>" +
                        "</div>" +
                        "<div id='bottom-bar'></div>" +
                        "<div id='match-info'>" +
                            "<div id='match-environment'>" +
                                "<div id='match-time-location-wrapper' class='width-40 inline-block'>" +
                                    "<div class='match-environment-title'>Where and when</div>" +
                                    "<div id='match-time-location'>" + "In " + matchObjectArray[e].matchLocation + " on " + matchObjectArray[e].matchDate + " at " + matchObjectArray[e].matchTime + "</div>" +
                                "</div>" + //end of match-time-location-wrapper
                                "<div id='match-attendance-wrapper' class='width-20 inline-block'>" +
                                    "<div class='match-environment-title'>Attendance</div>" +
                                    "<div id='match-attendance'>No data</div>" +
                                "</div>" + //end of match-time-location-wrapper
                                "<div id='match-weather-wrapper' class='width-40 inline-block'>" +
                                    "<div class='match-environment-title'>Weather</div>" +
                                    "<div id='match-weather'>" + matchObjectArray[e].weather + "</div>" + //end of #match-weather
                                "</div>" + //end of match-time-location-wrapper
                            "</div>" + //end of #match-environment
                            "<div id='match-teams'>" +
                                "<div class='width-40 inline-block'>" +
                                    "<div id='home-team' class='text-align-center'>" +
                                        "<div id='home-team-logo' class='inline-block'></div>" +
                                        "<div id='home-team-name' class='inline-block'>" + matchObjectArray[e].homeTeam + "</div>" +
                                    "</div>" + //end of #home-team
                                "</div>" +
                                "<div id='result-wrapper' class='width-20 inline-block'>" +
                                    "<div id='result'>" +
                                        "<span id='home-result'>" + matchObjectArray[e].homeResult + "</span>" + ":" + "<span id='away-result'>" + matchObjectArray[e].awayResult + "</span>" +
                                    "</div>" +
                                "</div>" + //end of #result-wrapper
                                "<div class='width-40 inline-block'>" +
                                    "<div id='away-team' class='text-align-center'>" +
                                        "<div id='away-team-logo' class='inline-block'></div>" +
                                        "<div id='away-team-name' class='inline-block'>" + matchObjectArray[e].awayTeam + "</div>" +
                                    "</div>" + //end of #away-team
                                "</div>" +
                            "</div>" + //end of #match-teams
                            "<div id='match-leaders'>" +
                                "<div class='width-40 inline-block'>" +
                                    "<div id='home-manager-title'>Manager</div>" +
                                    "<div id='home-manager-name'>No data</div>" +
                                "</div>" +
                                "<div class='width-20 inline-block'>" +
                                    "<div id='referee-title'>Referee</div>" +
                                    "<div id='referee-name'>No data</div>" +
                                "</div>" +
                                "<div class='width-40 inline-block'>" +
                                    "<div id='away-manager-title'>Manager</div>" +
                                    "<div id='away-manager-name'>No data</div>" +
                                "</div>" +
                            "</div>" + //end of #match-leaders
                        "</div>" + //end of #match-info
                    "</div>" + //end of #width-870
                    "<br/>" +
                    "<br/>" +
                    "<br/>" +
                    "<br/>"
                );


            $("#match-weather").each(function(index){
                if(matchObjectArray[e].weather === 0){
                    $(this).replaceWith("Sunny");
                }else if(matchObjectArray[e].weather === 1){
                    $(this).replaceWith("Heavy rain");
                }else if(matchObjectArray[e].weather === 2){
                    $(this).replaceWith("Fog");
                }else{
                    $(this).replaceWith("Ice age");
                }
            });

            //replacing null results with 0
            $("#result #home-result").each(function(index){
                if(matchObjectArray[e].homeResult == null){$(this).replaceWith("0");}
            });
            $("#result #away-result").each(function(index){
                if(matchObjectArray[e].awayResult == null){$(this).replaceWith("0");}
            });


            $("#home-team #home-team-logo").each(function(index){

                if(index == e){
                    $(this).css('content', 'url(' + 'http://ls.betradar.com/ls/crest/big/' + matchObjectArray[e].homeId + '.png' + ')');
                }

            });
            $("#away-team #away-team-logo").each(function(index){

                if(index == e){
                    $(this).css('content', 'url(' + 'http://ls.betradar.com/ls/crest/big/' + matchObjectArray[e].awayId + '.png' + ')');
                }

            });

        } //end of for loop that shows matches

    }

}(jQuery));
