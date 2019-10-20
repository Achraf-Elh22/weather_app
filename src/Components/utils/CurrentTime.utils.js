export const CurrentTime = (time) => {
    let currentTime = new Date(time * 1000).toUTCString();
    let date = currentTime.slice(5, 16);
    let currentDay = currentTime.slice(0, 3);
    return { currentDay, date };
};

export const CurrentDayName = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentTime = new Date().getDay()
    return days[currentTime]
}
