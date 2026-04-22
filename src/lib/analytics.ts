const SHANGHAI_OFFSET_HOURS = 8;

export const getShanghaiDayRange = () => {
  const now = new Date();
  const shanghaiNow = new Date(now.getTime() + SHANGHAI_OFFSET_HOURS * 60 * 60 * 1000);

  const startOfShanghaiDayUtc = new Date(
    Date.UTC(
      shanghaiNow.getUTCFullYear(),
      shanghaiNow.getUTCMonth(),
      shanghaiNow.getUTCDate(),
      -SHANGHAI_OFFSET_HOURS,
      0,
      0,
      0
    )
  );

  const endOfShanghaiDayUtc = new Date(startOfShanghaiDayUtc.getTime() + 24 * 60 * 60 * 1000);

  return {
    start: startOfShanghaiDayUtc,
    end: endOfShanghaiDayUtc,
  };
};

export const getTrailingShanghaiDayRange = (days: number) => {
  const { end } = getShanghaiDayRange();
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);

  return {
    start,
    end,
  };
};
