$(function(){
    $('.mycarousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('#bg').on('click', 'a', function(e){
        e.preventDefault();
        var youtube = $(this).data('youtube');
        playYoutube(youtube);
        var index = $(this).data('index'),
            title = videos[index].title,
            description = videos[index].description;
        $('.text-content h4').html(title);
        $('.text-content p').html(description);

        //.text-content h4
        //playText(text);
    });


    function playYoutube(youtube_id) {
        $("#video iframe").attr("src", "");
        $("#video iframe").attr("src", "https://www.youtube.com/embed/" + youtube_id + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=opaque&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcontent.popsicle.com");

    }

    var videos = [
        {
            title: "Star Wars: Episode VII The Force Awakens",
            description: 'A continuation of the saga created by George Lucas set thirty years after Star Wars: Episode VI - Return of the Jedi.'

        },
        {
            title: "Ex Machina",
            description: "A young programmer is selected to participate in a breakthrough experiment in artificial intelligence by evaluating the human qualities of a breathtaking female A.I."
        },
        {
            title: "Avengers: Age of Ultron",
            description: "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and it is up to the Avengers to stop the villainous Ultron from enacting his terrible plans."
        },
        {
            title: "Spectre",
            description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE."
        },
        {
            title: "Tomorrowland",
            description: "Bound by a shared destiny, a teen bursting with scientific curiosity and a former boy-genius inventor embark on a mission to unearth the secrets of a place somewhere in time and space that exists in their collective memory."
        },
        {
            title: "Ted 2",
            description: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law."
        },
        {
            title: "Minions",
            description: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world."
        }

    ];



});