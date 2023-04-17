export default function getSanFranciscoDescription() {
  const year = 2017;
  const part1 = 'As of ';
  const part2 = ', it was the seventh-highest income county in the United States, with a per capita personal income of ';
  const part3 = '. As of 2015, San Francisco proper had a GDP of ';
  const part4 = ', and a GDP per capita of ';
  const part5 = '.';
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return part1 + year + part2 + budget.income + part3 + budget.gdp + part4 + budget.capita + part5;
}
