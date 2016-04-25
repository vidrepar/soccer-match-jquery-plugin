;(function ($) {

    $.fn.matchCarouselSport = function () {

        var resDoc = resData.doc;

        var tournamentName;
        var tournamentNameAbbr;
        var matchLocation;
        var matchDate;
        var matchTime;
        var matchWeather;
        var attendance;

        var homeTeam;
        var homeTeamAbbr;
        var homeResult;
        var awayTeam;
        var awayTeamAbbr;
        var awayResult;

        var homeManager;
        var awayManager;
        var referee;

        for (var i = 0; i < resDoc.length; i++) {
            console.log(resDoc[i].data);

            tournamentName = resDoc[i].data.tournament.name;
            tournamentNameAbbr = resDoc[i].data.tournament.abbr;
            matchLocation = resDoc[i].data.cities.home.name;
            matchDate = resDoc[i].data.match._dt.date;
            matchTime = resDoc[i].data.match._dt.time;
            matchWeather = resDoc[i].data.match.weather;
            attendance = resDoc[i].data.attendance;

            homeTeam = resDoc[i].data.match.teams.home.name;
            homeTeamAbbr = resDoc[i].data.match.teams.home.abbr;
            homeResult = resDoc[i].data.match.result.home;
            awayTeam = resDoc[i].data.match.teams.away.name;
            awayTeamAbbr = resDoc[i].data.match.teams.away.abbr;
            awayResult = resDoc[i].data.match.result.away;

            homeManager = resDoc[i].data.manager.home.name;
            awayManager = resDoc[i].data.manager.away.name;
            referee = resDoc[i].data.referee.name;

        }

        $("#tournament-name").html(tournamentName).addClass('inline-block');
        $("#match-time-location").append("In " + matchLocation + " on " + matchDate + " at " + matchTime);
        $("#match-attendance").append(attendance);

        if (matchWeather === 0) {
            $("#match-weather").append("<span>" + "Sunny" + "</span>");
        } else if (matchWeather === 1) {
            $("#match-weather").append("<span>" + "Heavy rain" + "</span>");
        } else if (matchWeather === 2) {
            $("#match-weather").append("<span>" + "Fog" + "</span>");
        }

        $("#home-team-name").append("<div>" + homeTeam + "</div>");
        $("#home-result").append(homeResult);
        $("#away-team-name").append("<div>" + awayTeam + "</div>");
        $("#away-result").append(awayResult);

        $("#home-manager-name").append(homeManager);
        $("#away-manager-name").append(awayManager);
        $("#referee-name").append(referee);

        $("#result").prepend("<div id='match-environment-middle' class='text-align-center'></div>");
        $("#match-environment-middle")
            .prepend("<div>" + matchTime + "</div>")
            .prepend("<div>" + matchDate + "</div>")
            .prepend("<div>" + matchLocation + "</div>");

        $("#match-context")
            .prepend("<div id='match-environment-top' class='float-left'>" + matchDate + "</div>")
            .append("<div id='match-environment-top' class='float-right'>" +  matchTime + "</div>");

        $(window).resize(function () {
            browserWidth = $(window).width();

            //450px breakpoint
            if (browserWidth >= 434) {
                $("#tournament-name").html(tournamentName);
            } else {
                $("#tournament-name").html(tournamentNameAbbr);
            }

            //320px breakpoint
            if (browserWidth >= 304) {
                $("#home-team-name").html(homeTeam);
                $("#away-team-name").html(awayTeam);
            } else {
                $("#home-team-name").html(homeTeamAbbr);
                $("#away-team-name").html(awayTeamAbbr);
            }

        });

        $(window).on('load', function () {
            browserWidth = $(window).width();

            //450px breakpoint
            if (browserWidth >= 434) {
                $("#tournament-name").html(tournamentName);
            } else {
                $("#tournament-name").html(tournamentNameAbbr);
            }

            //320px breakpoint
            if (browserWidth >= 304) {
                $("#home-team-name").html(homeTeam);
                $("#away-team-name").html(awayTeam);
            } else {
                $("#home-team-name").html(homeTeamAbbr);
                $("#away-team-name").html(awayTeamAbbr);
            }
        });


    }

}(jQuery));
