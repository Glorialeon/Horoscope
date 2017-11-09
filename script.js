function onSubmit(){
    var day= parseInt(document.getElementById("day").value);
    var month= parseInt(document.getElementById("month").value);
    var sign= determineSign(month, day);
    document.getElementById("sign").innerHTML=sign;
    var birthday= getBirthday(month,day);
    document.getElementById("birthday").innerHTML=getBirthday(month,day);
}

function days_in_month(month) {
    console.log(month);
    document.getElementById("day").innerHTML = "";
    document.getElementById("day").innerHTML += "<option value= '0' >Select Day</option>";
    if ((month == 1 || month ==3 || month==5 || month==7 || month==8 || month==10 || month==12)) {
        for (var i = 1; i <= 31; i++) {
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + " </option>";
        }
    }
    if (month == 4 || month==6 || month==9 || month==11) {
        for (var i = 1; i <= 30; i++){
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + " </option>";
        }
    }
    if (month == 2) {
        for (var i = 1; i <= 29; i++){
            document.getElementById("day").innerHTML += "<option value='" + i + "'>" + i + " </option>";
        }
    }
}

function determineSign(month,day){
    var name= document.getElementById("name").value;
    if((month == 1 && day>= 20) || (month==2 && day <= 18)){
        document.getElementById("image").innerHTML='<img src="img/Aquarius.jpeg">';
        return name + ", " + "you are an Aquarius!" + " If you're worried that you might say or do something to offend someone, " +
            "especially if you know what's coming, take a friend along for the ride who's well equipped to mediate" +
            " when necessary. You know who you need to ask -- because you've probably had to call on them in the " +
            "past! Remember, though, that it's not you who they're watching out for -- it's anyone who gets in " +
            "your way or challenges your opinions.";
    }
    if((month == 2 && day >= 19) || (month ==3 && day <= 20)){
        document.getElementById("image").innerHTML='<img src="img/Pisces.jpeg">';
        return name + ", " + "you are a Pisces!" + " You may not be in the mood for shopping at the moment, but that " +
            "doesn't mean there isn't something out there that's so appealing that you don't go to any " +
            "extremes to have it delivered to your door within 24 hours. If you're not sure you can afford it, " +
            "call the one wisest person you know who can talk you out of it without making you feel like " +
            "you're cheating yourself.";
    }
    if((month == 3 && day >= 21) || (month ==4 && day <= 19)){
        document.getElementById("image").innerHTML='<img src="img/Aries.jpeg">';
        return name + ", " + "you are an Aries!" + " If anyone decides that it might be fun to see just how far you can " +
            "be pushed, they are in for a serious lesson. At this point, you're not willing to go very far " +
            "at all. If people came with warning labels (how did that get skipped?), yours would say " +
            "'Danger -- Do not exceed capacity.' Of course, with your fiery energy, this situation isn't " +
            "exactly rare, so the next best thing is to shut all doors as soon as you can." ;
    }
    if((month == 4 && day >= 20) || (month ==5 && day <= 20)){
        document.getElementById("image").innerHTML='<img src="img/Taurus.jpeg">';
        return name + ", " + "you are a Taurus!" + " Making a new friend isn't easy for anyone, especially if we enjoy privacy," +
            " as you certainly do. You may be feeling even more secretive at the moment, however, so if you " +
            "decide to let someone in on your feelings and plans and how you've reached this point, they need " +
            "to understand just how special that makes them. If they didn't, though, you probably wouldn't have" +
            " let them get this close to begin with!";
    }
    if((month == 5 && day >= 21) || (month ==6 && day <= 20)){
        document.getElementById("image").innerHTML='<img src="img/Gemini.jpeg">';
        return name + ", " + "you are a Gemini!" + " You know well how wonderful it is to have entertaining friends. " +
            "You've spent plenty of time assembling just such a crew, and you take their affection seriously." +
            " You don't just invite any old person into that circle without considering what they're likely to" +
            " add to it, or how your current friends might take to them. If you're ready to open the books, be " +
            "sure that someone lets this fortunate newcomer know just how special the invitation is.";
    }
    if((month == 6 && day >= 21) || (month ==5 && day <= 22)){
        document.getElementById("image").innerHTML='<img src="img/Cancer.jpeg">';
        return name + ", " + "you are a Cancer!" + " You've always had a decent relationship with your bosses, teachers and other authority figures." +
            " In fact, they have often treated you as an equal. That's exactly how you feel now when higher-ups " +
            "actually come to you for advice. If you hear gossip, try not to get too stressed about it. " +
            "Everyone needs someone else to talk about!";
    }
    if((month == 7 && day >= 23) || (month ==8 && day <= 22)){
        document.getElementById("image").innerHTML='<img src="img/Leo.jpeg">';
        return name + ", " + "you are a Leo!" + " Your friends live by one simple rule: When you're happy, everyone's happy." +
            " Your fiery nature just doesn't allow anyone to be depressed in your immediate vicinity -- " +
            "unless you're feeling down yourself! At the moment, you're feeling pretty great, which means " +
            "you do your very best to make everyone around you as happy as they can be. It's a great way to " +
            "celebrate that well-deserved streak of luck you're currently enjoying!";
    }
    if((month == 8 && day >= 23) || (month ==9 && day <= 22)){
        document.getElementById("image").innerHTML='<img src="img/Virgo.jpeg">';
        return name + ", " + "you are a Virgo!" + " If you're not sure quite how you should handle a certain situation that's a little too delicate" +
            " for prime time, then hold off on mentioning it to anyone, at least for the time being. " +
            "You know perfectly well that there are still interlocking issues to be resolved, and until " +
            "then, silence is the best strategy. You're in charge, and you know it -- so call a meeting " +
            "if you must, just to be sure that everyone is on the same page.";
    }
    if((month == 9 && day >= 23) || (month ==10 && day <= 22)){
        document.getElementById("image").innerHTML='<img src="img/Libra.jpeg">';
        return name + ", " + "you are a Libra!" + " Relationships are almost always your number one priority, " +
            "but at the moment, nothing else can even come close! Your lucky partner -- " +
            "or prospective partner, or even your latest crush -- should enjoy all kinds of sweet attention, " +
            "aimed simply at ensuring that they know how deeply and securely you care for them. " +
            "You expect your feelings to be returned, but it's still vital to have the conversation anyway.";
    }
    if((month ==10  && day >= 23) || (month ==11 && day <= 21)){
        document.getElementById("image").innerHTML='<img src="img/Scorpio.jpeg">';
        return name + ", " + "you are a Scorpio!" + " You know how to make awesome plans and see them through to the end, never even thinking about" +
            " aborting the mission. You're a planner and a plotter, containing equal parts detective and " +
            "analyst. Today's plan is just about perfect from beginning to end -- so much so that you should " +
            "be confident about sharing it with anyone, even rivals. If it involves helping a loved one out " +
            "of a tough spot, don't lose sight of your own needs in the process.";
    }
    if((month ==11  && day >= 22) || (month ==12 && day <= 21)){
        document.getElementById("image").innerHTML='<img src="img/Sagittarius.jpeg">';
        return name + ", " + "you are a Sagittarius!" + " Generosity and excess are dangerous qualities to tote around in " +
            "tandem, and it takes a very special kind of person to pull it off. For the most part, you're " +
            "up for the challenge, and pretty happy about it, too! Still, you really need to make sure that " +
            "everyone appreciates what you're doing for them, and that they don't just take you for granted." +
            " You should also take a little time for yourself now, just because you can.";
    }
    if((month ==12  && day >= 22) || (month ==1 && day <= 19)){
        document.getElementById("image").innerHTML='<img src="img/Capricorn.jpeg">';
        return name + ", " + "you are a Capricorn!" + " No matter what the subject or where you happen to be, you are rarely " +
            "shy about expressing an opinion. You're not exactly shy now either, but you may start to feel a " +
            "bit of unusual emotional interference coming on, so remind yourself that if anyone has the right " +
            "to be confident, it's you. You've been so diligent and hardworking for so long, so relax. Let " +
            "the rest of the world worry about your feelings for a change!";
    }
}

function getBirthday(month,day){
    var name= document.getElementById("name").value;
    var date = new Date();
    var currentMonth = date.getMonth();
    var currentDay = date.getDate();
    console.log(currentDay);
    console.log(currentMonth);
    console.log(day);
    console.log(month);

    if(currentMonth+1 == month && currentDay == day){
        return "Happy birthday " + name + "!";
    }else{
        return " ";
    }
}