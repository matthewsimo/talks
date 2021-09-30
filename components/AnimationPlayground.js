import { useState } from 'react';

const timingFunctions = {
  linear: (t) => t,
  easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  easeInElastic: (t) => {
    const c4 = (2 * Math.PI) / 3;

    return t === 0
      ? 0
      : t === 1
      ? 1
      : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
  },
  easeInOutQuad: (t) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
};

export default function AnimationPlayground({ easings }) {
  const [progress, setProgress] = useState(0);
  const [maxDistance, setMaxDistance] = useState(320);
  const [timingFunction, setTimingFunction] = useState('linear');

  const lerp = (start, end, progress) => start + (end - start) * progress;

  const tF = timingFunctions[timingFunction];

  console.log({ progress, maxDistance, pD: progress * maxDistance });
  return (
    <div className="min-w-full min-h-full">
      <div className="w-full flex py-5 px-8 space-x-5 justify-end items-end">
        <>
          {easings && (
            <div className="space-x-2">
              <label htmlFor="timing">Timing Function: </label>
              <select
                className="text-main-900"
                onChange={(e) => setTimingFunction(e.target.value)}
                id="timing"
              >
                {Object.keys(timingFunctions).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="space-x-2">
            <label htmlFor="maxDistance">
              Max Distance:{' '}
              <span className="font-mono">{Number(maxDistance)}</span>
            </label>
            <input
              className="w-30"
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              type="range"
              min="320"
              max="650"
              step="1"
              id="maxDistance"
              value={maxDistance}
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="progress">
              Progress:{' '}
              <span className="font-mono">{Number(progress).toFixed(2)}</span>
            </label>
            <input
              className="w-30"
              onChange={(e) => setProgress(Number(e.target.value))}
              type="range"
              min="0"
              max="1"
              step="0.05"
              id="progress"
              value={progress}
            />
          </div>
        </>
      </div>
      <div className="bg-gray-100 w-full h-96 relative">
        <div className="bg-gray-400 w-px h-full absolute top-0 left-32"></div>
        <div className="bg-gray-400 w-full h-px absolute bottom-1/3"></div>

        <span className="text-main-900 text-2xl absolute top-12 right-48">
          {lerp(0, maxDistance, tF(progress))} = lerp(0, {maxDistance},{' '}
          {tF(progress)})
        </span>
        <div className="w-full absolute bottom-1/3 inset-x-32">
          <div
            className="absolute bg-gray-600 w-12 h-12 left-0 -top-12"
            style={{
              transform: `translateX(${lerp(0, maxDistance, tF(progress))}px)`
            }}
          ></div>

          <div
            className="absolute bg-red-400 w-12 h-12 animate-pulse left-0 -top-12"
            style={{
              transform: `translateX(${maxDistance}px)`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
