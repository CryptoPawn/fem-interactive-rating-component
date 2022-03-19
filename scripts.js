const submit = "#submit";
const rate_button = ".rate-button";
const state_rating = ".state-rating";
const state_thankyou = ".state-thankyou";
const rating_span = "#selected-rating";

$(document).ready(function() {
    console.log("js loaded");

    $(rate_button).on('click', function() {
        $(this).parent().find(rate_button).css({"background-color":"var(--nc-t-medium-grey)","color":"var(--nc-lightgrey)"});
        $(this).css({"background-color":"var(--nc-mediumgrey)","color":"var(--nc-white)"});

        rating = $(this).text();
    });

    $(submit).on('click', function() {
        $(state_rating).css("display", "none");
        $(state_thankyou).css("display", "flex");

        $(rating_span).html(rating);
    });
});