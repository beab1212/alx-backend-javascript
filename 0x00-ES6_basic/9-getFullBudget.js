import getBudgetObject from './7-getBudgetObject.js'; // eslint-disable-line no-unused-vars

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget, // eslint-disable-line no-unused-vars
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
