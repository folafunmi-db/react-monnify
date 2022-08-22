export const config = {
  amount: 100,
  currency: 'NGN',
  reference: `${new Date().getTime()}`,
  customerFullName: 'Damilare Ogunnaike',
  customerEmail: 'ogunnaike.damilare@gmail.com',
  apiKey: 'MK_PROD_FLX4P92EDF',
  contractCode: '626609763141',
  paymentDescription: 'Lahray World',
  metadata: {
    name: 'Damilare',
    age: 45,
  },
  incomeSplitConfig: [
    {
      subAccountCode: 'MFY_SUB_342113621921',
      feePercentage: 50,
      splitAmount: 1900,
      feeBearer: true,
    },
    {
      subAccountCode: 'MFY_SUB_342113621922',
      feePercentage: 50,
      splitAmount: 2100,
      feeBearer: true,
    },
  ],
};
