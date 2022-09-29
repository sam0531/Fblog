export function dateConvert(cardname) {
    function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', {
            month: 'short',
        });
    }


    cardname.map((ele) => {
        var timeStr = ele.publishedAt;
        var date = new Date(timeStr);
        var day = date.getDate();
        var year = date.getFullYear();
        var month = toMonthName(date.getMonth() + 1);

        // var hour = date.getHours();
        // var min = date.getMinutes();
        // var sec = date.getSeconds();

        // console.log(hour, min, sec);


        var dateStr = `${month} ${day}, ${year}`;
        // | ${hour}:${min}:${sec}
        ele.publishedAt = dateStr;

        return ele.publishedAt;

    })
}
