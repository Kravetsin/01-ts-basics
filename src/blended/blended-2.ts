type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyProps {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertCurrencyProps) {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 25, currency: "USD" });
