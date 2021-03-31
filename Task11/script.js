// Task 2

module.exports =
    function dayAndNight() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 11) {
        return 'Good morning';
    } else if (hour >= 11 && hour < 17) {
        return 'Good day';
    } else if (hour >= 17 && hour < 23) {
        return 'Good evening';
    } else
        return 'Good night';
}
