class calc {
  minutesToSeconds = (lapTimes) => {
    const wholeMinutes = Math.floor(lapTimes);
    const seconds = lapTimes.split(":")[1];

    return wholeMinutes * 60 + seconds;
  };

  calculateFuel = (fuelUsage, lapTimes, duration) => {
    return (duration / lapTimes) * fuelUsage;
  };
}

export default calc;
