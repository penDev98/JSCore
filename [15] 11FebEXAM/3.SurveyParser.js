function three(input) {
    let surveyRegex = /<svg>.*<\/svg>/;
    let surveyMatch = input.match(surveyRegex);

    let score = [];
    let count = 0;
    let surveyLabel = "";

    //Check if it is a Survey
    if (surveyMatch) {
        let firstCatRegex = /<cat><text>.*\[([\w\d-\s_+-@#$%^&*!`.,\/\\';=?|)(]+)\].*<\/text><\/cat>/;
        let firstCatMatch = input.match(firstCatRegex);

        //Check if it is a valid first Cat
        if (firstCatMatch) {
            surveyLabel = firstCatMatch[1];
        } else {
            console.log("Invalid format");
            return;
        }

        let secondCatRegex = /<cat>(<g><val>.*<\/val>.*<\/g>)+<\/cat>/;
        let secondCatMatch = input.match(secondCatRegex);

        //Check if it is a valid second Cat
        if (secondCatMatch) {
            let ratingRegex = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;
            let ratingMatchesAsOneString = secondCatMatch[1];
            let ratingMatches = ratingMatchesAsOneString.match(ratingRegex);

            if (ratingMatches) {
                for (let rating of ratingMatches) {
                    let regexForCurrent = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/;
                    let currentMatch = rating.match(regexForCurrent);

                    let value = currentMatch[1];
                    let votes = currentMatch[2];

                    if (isNaN(value) || isNaN(votes)) {
                        continue;
                    }

                    value = Number(value);
                    votes = Number(votes);

                    if (value > 10 || value < 1) {
                        continue;
                    }

                    if (votes < 0) {
                        continue;
                    }

                    count += votes;

                    let currentScore = value * votes;

                    score.push(currentScore);
                }
            }
        } else {
            console.log("Invalid format");
            return;
        }

        let finalRating = (score.reduce((a, b) => a + b) / count).toFixed(2);

        if(finalRating.substr(finalRating.length - 1) == 0) {
            finalRating = Number(finalRating).toFixed(1);
        }

        if(finalRating.split(".")[1] == 0) {
            finalRating = Number(finalRating);
        }
        if(finalRating - finalRating !== 0){
            console.log(`${surveyLabel}: 0`)
        }
        else
        console.log(`${surveyLabel}: ${finalRating}`);
    } else {
        console.log("No survey found");
    }
}

three("<p>Some random text</p><svg><cat><text>How do you rate our food? [[[dsfg sdfg sdfh rt[-[Food - General]234erfhg35]</text></cat><cat><g><val>5</val>9</g><g><val>0</val>9</g><g><val>3</val>9</g><g><val>1</val>9</g><g><val>5</val>9</g></cat></svg><p>Some more random text</p>");