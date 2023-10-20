// pages/TransactionDetail/[tx].tsx

import { useRouter } from "next/router";

interface TransactionDetailProps {
  tx: string; // Define the type for your parameter here
}

const TransactionDetail: React.FC<TransactionDetailProps> = () => {
  const router = useRouter();
  const { tx } = router.query;

  return (
    <div>
      <h1>Transaction Detail Page</h1>
      <p>Transaction ID: {tx}</p>
    </div>
  );
};

export default TransactionDetail;
