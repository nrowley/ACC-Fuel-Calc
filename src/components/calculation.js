//functions
export function minutesToSeconds(lapTimes) {
  const wholeMinutes = Number(lapTimes.split(":")[0]);
  let seconds = Number(lapTimes.split(":")[1]);

  if (seconds < 10) {
    seconds = Number(String(seconds) + "0"); //pad zero
  }

  seconds = seconds / 60;

  console.log((wholeMinutes + seconds).toPrecision(3));

  return (wholeMinutes + seconds).toFixed(2);
}

function calculateFuel(fuelUsage, lapTimes, duration) {
  return ((duration / lapTimes) * fuelUsage).toFixed(2);
}

export function doWork(lapTimes, fuelUsage, duration) {
  const lapTimeInMinutes = minutesToSeconds(lapTimes);
  return calculateFuel(fuelUsage, lapTimeInMinutes, duration);
}
