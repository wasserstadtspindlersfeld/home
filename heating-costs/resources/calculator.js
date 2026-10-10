var app = new Vue( {
  el: '#app',
  data: {
    tariffs: [
      'Average tariff',
      'Worst tariff',
      'Wing 1 / 2',
      'Wing 3 / 4',
      'Wing 5',
      'Wing 6 / 7',
      'Wing 8 / 9'
    ],
    years: [
      2022, 2023
    ],
    input: {
      Year: 2023,
      Tariff: 'Average tariff',
      LivingArea: undefined,
      HeatingArea: undefined,
      HeatingUnits: undefined,
      WarmWater: undefined,
      ColdWater: undefined,
    },
    output: {
      CostEstimation: null
    }
  },
  methods: {
    // Option names and money as the page shows them. The German page sets window.CALC_LABELS first.
    label: function (tariff) {
      return (window.CALC_LABELS && window.CALC_LABELS[tariff]) || tariff;
    },
    money: function (amount) {
      return amount.toLocaleString(document.documentElement.lang === 'de' ? 'de-DE' : 'en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    calculate: function () {
      // Clear Output
      this.output.CostEstimation = null;

      // Inputs
      const year = this.input.Year;
      const tariff = this.input.Tariff;
      // Accept German decimal commas too ("62,5")
      const toNumber = (value) => parseFloat(String(value).replace(',', '.'));
      const livingArea = toNumber(this.input.LivingArea);
      const heatingArea = toNumber(this.input.HeatingArea);
      const heatingUnits = toNumber(this.input.HeatingUnits);
      const warmWater = toNumber(this.input.WarmWater);
      const coldWater = toNumber(this.input.ColdWater);

      let pricePerUnit = undefined;
      if (tariff === 'Average tariff') {
        pricePerUnit = this.getAverageTariff(year);
      } else if (tariff === 'Worst tariff') {
        pricePerUnit = this.getWorstTariff(year);
      } else {
        pricePerUnit = TARIFFS[year][tariff];
      }

      const costs = (
          pricePerUnit.heatingBase * heatingArea +
          pricePerUnit.heatingConsumption * heatingUnits +
          pricePerUnit.additionalHeating * heatingArea +
          pricePerUnit.warmWaterBase * livingArea +
          pricePerUnit.warmWaterConsumption * warmWater +
          pricePerUnit.coldWater * coldWater +
          pricePerUnit.sewage * coldWater +
          // I don't know what the following values are multiplied with. It's actually less than cold water units.
          // Only exists for wing 1/2.
          pricePerUnit.deviceRent * coldWater +
          pricePerUnit.coldWaterLogging * coldWater
      );

      this.output.CostEstimation = mathHelper.precisionRound(costs, 2);
    },
    getAverageTariff: function (year) {
      const entries = Object.values(TARIFFS[year]);
      const count = entries.length;
      const result = {};

      entries.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {
          result[key] = (result[key] || 0) + value;
        }
      });

      for (const key in result) {
        result[key] /= count;
      }

      return result;
    },
    getWorstTariff: function (year) {
      const entries = Object.values(TARIFFS[year]);
      const result = {};

      entries.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {
          result[key] = result[key] !== undefined ? Math.max(result[key], value) : value;
        }
      });

      return result;
    }
  }
} );
