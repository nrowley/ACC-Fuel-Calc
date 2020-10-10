//functions
export function minutesToSeconds(lapTimes) {
  const wholeMinutes = Number(lapTimes.split(":")[0]);
  const seconds = Number(lapTimes.split(":")[1]) / 60;

  console.log((wholeMinutes + seconds).toPrecision(3));

  return (wholeMinutes + seconds).toPrecision(3);
}

function calculateFuel(fuelUsage, lapTimes, duration) {
  return ((duration / lapTimes) * fuelUsage).toPrecision(2);
}

export function doWork(lapTimes, fuelUsage, duration) {
  const lapTimeInMinutes = minutesToSeconds(lapTimes);
  return calculateFuel(fuelUsage, lapTimeInMinutes, duration);
}
