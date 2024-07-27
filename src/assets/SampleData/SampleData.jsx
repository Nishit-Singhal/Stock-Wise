const SampleData = [
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 150.23,
    historicalPerformance: [
      { date: "2023-01-01", value: 130.12 },
      { date: "2023-02-01", value: 135.45 },
      { date: "2023-03-01", value: 140.78 },
      { date: "2023-04-01", value: 145.32 },
      { date: "2023-05-01", value: 150.23 },
    ],
    forecastedTrend: {
      nextMonth: "Increasing",
      nextQuarter: "Stable",
      nextYear: "Increasing",
    },
    metrics: {
      pe: 25.6,
      eps: 5.78,
      dividend: 0.82,
    },
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    price: 280.12,
    historicalPerformance: [
      { date: "2023-01-01", value: 260.45 },
      { date: "2023-02-01", value: 265.78 },
      { date: "2023-03-01", value: 270.12 },
      { date: "2023-04-01", value: 275.32 },
      { date: "2023-05-01", value: 280.12 },
    ],
    forecastedTrend: {
      nextMonth: "Increasing",
      nextQuarter: "Increasing",
      nextYear: "Increasing",
    },
    metrics: {
      pe: 32.4,
      eps: 9.45,
      dividend: 1.24,
    },
  },
  {
    ticker: "AMZN",
    name: "Amazon.com, Inc.",
    price: 120.56,
    historicalPerformance: [
      { date: "2023-01-01", value: 110.23 },
      { date: "2023-02-01", value: 115.45 },
      { date: "2023-03-01", value: 118.78 },
      { date: "2023-04-01", value: 120.12 },
      { date: "2023-05-01", value: 120.56 },
    ],
    forecastedTrend: {
      nextMonth: "Increasing",
      nextQuarter: "Stable",
      nextYear: "Increasing",
    },
    metrics: {
      pe: 40.2,
      eps: 2.78,
      dividend: 0,
    },
  },
  {
    ticker: "GOOG",
    name: "Alphabet Inc. (Google)",
    price: 105.78,
    historicalPerformance: [
      { date: "2023-01-01", value: 100.12 },
      { date: "2023-02-01", value: 102.45 },
      { date: "2023-03-01", value: 103.78 },
      { date: "2023-04-01", value: 104.32 },
      { date: "2023-05-01", value: 105.78 },
    ],
    forecastedTrend: {
      nextMonth: "Increasing",
      nextQuarter: "Increasing",
      nextYear: "Increasing",
    },
    metrics: {
      pe: 22.6,
      eps: 4.78,
      dividend: 0,
    },
  },
]

export default SampleData